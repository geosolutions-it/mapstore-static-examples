/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

// add this binding to ensure all the streams inside components are working
import '@mapstore/framework/libs/bindings/rxjsRecompose';
import React, { useRef, useEffect } from 'react';
import axios from '@mapstore/framework/libs/ajax';
import { connect } from 'react-redux';
import { LOCATION_CHANGE } from 'connected-react-router';
import { getState } from '@mapstore/framework/utils/StateUtils';
import {
    setLocalConfigurationFile,
    setConfigProp
} from '@mapstore/framework/utils/ConfigUtils';
import { generateActionTrigger } from '@mapstore/framework/epics/jsapi';
import { configureMap } from '@mapstore/framework/actions/config';
import { setControlProperty } from '@mapstore/framework/actions/controls';
import pluginsDef from '@js/plugins/index';
import Viewer from '@js/pages/Viewer';
import main from '@mapstore/framework/product/main';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { Observable } from 'rxjs';
import security from '@mapstore/framework/reducers/security';

setLocalConfigurationFile('');

const pathsNeedVersion = [
    'configs/',
    'assets/',
    'translations/',
    'ms-translations/',
    'print.json'
];

const version = __MAPSTORE_PROJECT_CONFIG__.version || 'dev';

axios.interceptors.request.use(
    config => {
        if (config.url && version && pathsNeedVersion.filter(urlEntry => config.url.match(urlEntry))[0]) {
            return {
                ...config,
                params: {
                    ...config.params,
                    v: version
                }
            };
        }
        return config;
    }
);

const resourceTypes = {
    MAP: 'MAP'
};

let plugins = {};

function initAPI() {
    const actionTrigger = generateActionTrigger(LOCATION_CHANGE);
    let actionListeners = {};
    return {
        ready: true,
        resourceTypes,
        triggerAction: actionTrigger.trigger,
        onAction: (type, listener) => {
            const listeners = actionListeners[type] || [];
            listeners.push(listener);
            actionListeners[type] = listeners;
        },
        offAction: (type, listener) => {
            const listeners = (actionListeners[type] || [])
                .filter((l) => l !== listener);
            actionListeners[type] = listeners;
        },
        getState: function() {
            return getState();
        },
        createComponent: ({
            id,
            className,
            style,
            component = 'div',
            onMount = () => {},
            onUnmount = () => {},
            onUpdate = () => {}
        } = {}) => {
            const Component = (props) => {
                const node = useRef();
                const _props = useRef(props);
                _props.current = props;
                useEffect(() => {
                    onMount(_props.current, node.current);
                    return () => {
                        onUnmount(_props.current, node.current);
                    };
                }, []);
                const prevProps = useRef(props);
                useEffect(() => {
                    onUpdate(prevProps.current, props, node.current);
                    prevProps.current = props;
                });
                const Cmp = component;
                return <Cmp id={id} className={className} style={style} ref={node}/>;
            };
            return Component;
        },
        createPlugin: (name, config) => {
            plugins[`${name}Plugin`] = createPlugin(name, config({ Observable, connect }));
        },
        create: ({
            targetId = 'container',
            resourceType,
            localConfig,
            data,
            user,
            token
        }) => {
            setConfigProp('themePrefix', 'mapstore-api');
            setConfigProp('translationsPath', [window.MAPSTORE_PUBLIC_PATH + 'ms-translations']);

            Object.keys(localConfig).forEach((key) => {
                setConfigProp(key, localConfig[key]);
            });
            let securityState;
            if (user || token) {
                securityState = {
                    user,
                    token // this token is applied to the request defined in the localConfig authenticationRules properties
                };
            }
            main({
                targetId,
                themeCfg: {
                    disabled: true
                },
                pages: [{
                    name: 'viewer',
                    path: '/',
                    component: connect(() => ({ resourceType: (resourceType || '').toLowerCase() }))(Viewer)
                }],
                initialState: {
                    defaultState: {
                        ...(securityState && { security: securityState })
                    }
                },
                appReducers: {
                    security
                },
                appEpics: {
                    msAPIInitializeResource: action$ => action$.ofType(LOCATION_CHANGE)
                        .take(1)
                        .switchMap(() => {
                            if (resourceType === resourceTypes.MAP) {
                                return Observable.of(
                                    setControlProperty('toolbar', 'expanded', false),
                                    configureMap(data, 1, true)
                                );
                            }
                            return Observable.empty();
                        })
                },
                printingEnabled: false
            },
            pluginsDef(plugins));
        }
    };
}

window.MapStoreAPI = initAPI();

const mapStoreReady = new CustomEvent('mapstore:ready', {
    detail: window.MapStoreAPI
});

window.dispatchEvent(mapStoreReady);

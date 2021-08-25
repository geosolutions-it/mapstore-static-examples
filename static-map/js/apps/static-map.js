/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

// add this binding to ensure all the streams inside components are working
import '@mapstore/framework/libs/bindings/rxjsRecompose';

import url from 'url';
import main from '@mapstore/framework/product/main';
import pluginsDef from '@js/plugins/def';
import {
    setLocalConfigurationFile,
    setConfigProp
} from '@mapstore/framework/utils/ConfigUtils';
import axios from '@mapstore/framework/libs/ajax';
import Viewer from '@js/pages/Viewer';
import { configureMap } from '@mapstore/framework/actions/config';
import { setControlProperty } from '@mapstore/framework/actions/controls';
import security from '@mapstore/framework/reducers/security';

setLocalConfigurationFile('configs/localConfig.json');
setConfigProp('translationsPath', ['translations', 'ms-translations']);
setConfigProp('extensionsRegistry', 'configs/extensions.json');

// list of path that need version parameter
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

const pages = [{
    name: 'home',
    path: '/',
    component: Viewer
}];

document.addEventListener('DOMContentLoaded', function() {
    // example of initial security state
    // with null this state is not initialized
    const user = null;
    const securityState = user && {
        security: {
            user: user,
            token: '' // this token is applied to the request defined in the localConfig authenticationRules properties
        }
    };
    // this is an example of dynamic map loading via query param
    // there are other possibilities such use injected map data in the page
    // or use the internal react routing
    // the important steps is to populate the configureMap action with a valid map config
    const params = url.parse(window.location.href, true).query || {};
    const mapName = params.map || 'meteorites-map';
    // load a base map configuration
    axios.get(`configs/${mapName}.json`)
        .then(({ data }) => {
            // initialize the mapstore app
            main({
                targetId: 'container',
                pages,
                initialState: {
                    defaultState: {
                        ...securityState,
                        maptype: {
                            mapType: 'openlayers'
                        }
                    }
                },
                appReducers: {
                    security
                },
                appEpics: {},
                printingEnabled: false
            },
            pluginsDef,
            // TODO: use default main import to avoid override
            (cfg) => ({
                ...cfg,
                initialActions: [
                    setControlProperty.bind(null, 'toolbar', 'expanded', false),
                    configureMap.bind(null, data, 1, true)
                ]
            }));
        });
});

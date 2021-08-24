/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
        if (config.url && version && pathsNeedVersion.filter(url => config.url.match(url))[0]) {
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
    // load a base map configuration
    axios.get('configs/map.json')
        .then(({ data }) => {
            // initialize the mapstore app
            main({
                targetId: 'container',
                pages,
                initialState: {
                    defaultState: {
                        maptype: {
                            mapType: 'openlayers'
                        }
                    }
                },
                appReducers: {},
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

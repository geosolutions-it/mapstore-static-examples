/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import pluginsDef from '@mapstore/framework/product/plugins';
import omit from 'lodash/omit';

const skipPlugins = [
    'GeoStorySavePlugin',
    'GeoStorySaveAsPlugin',
    'AutoMapUpdatePlugin',
    'CreateNewMapPlugin',
    'DashboardSaveAsPlugin',
    'DashboardSavePlugin',
    'DashboardsPlugin',
    'DeleteDashboardPlugin',
    'DeleteGeoStoryPlugin',
    'DeleteMapPlugin',
    'FeaturedMaps',
    'GroupManagerPlugin',
    'HeaderPlugin',
    'HomeDescriptionPlugin',
    'HomePlugin',
    'LoginPlugin',
    'MadeWithLovePlugin',
    'ManagerMenuPlugin',
    'ManagerPlugin',
    'MapsPlugin',
    'NavMenuPlugin',
    'RedirectPlugin',
    'RulesDataGridPlugin',
    'RulesEditorPlugin',
    'RulesManagerFooter',
    'SaveAsPlugin',
    'SavePlugin',
    'SaveStoryPlugin',
    'ScrollTopPlugin',
    'ContentTabs',
    'ContextCreatorPlugin',
    'ContextExportPlugin',
    'ContextImportPlugin',
    'ContextManagerPlugin',
    'ContextPlugin',
    'ContextsPlugin',
    'DetailsPlugin',
    'FooterPlugin',
    'ForkPlugin',
    'GeoStoriesPlugin',
    'GridContainerPlugin',
    'HelpLinkPlugin',
    'HelpPlugin',
    'ThemeSwitcherPlugin',
    'ThematicLayerPlugin'
];

export default (plugins) => ({
    plugins: {
        ...omit(pluginsDef.plugins, skipPlugins),
        ...plugins
    },
    requires: pluginsDef.requires
});

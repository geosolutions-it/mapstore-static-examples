/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import url from 'url';
import { getMonitoredState } from '@mapstore/framework/utils/PluginsUtils';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';
import PluginsContainer from '@mapstore/framework/components/plugins/PluginsContainer';
import { createShallowSelector } from '@mapstore/framework/utils/ReselectUtils';
import useModulePlugins from '@mapstore/framework/hooks/useModulePlugins';
import { getPlugins } from '@mapstore/framework/utils/ModulePluginsUtils';
import BorderLayout from '@mapstore/framework/components/layout/BorderLayout';

const urlQuery = url.parse(window.location.href, true).query;

const ConnectedPluginsContainer = connect(
    createShallowSelector(
        state => urlQuery.mode || (urlQuery.mobile || state.browser && state.browser.mobile ? 'mobile' : 'desktop'),
        state => getMonitoredState(state, getConfigProp('monitorState')),
        state => state?.controls,
        (mode, monitoredState, controls) => ({
            mode,
            monitoredState,
            pluginsState: controls
        })
    )
)(PluginsContainer);

/**
  * @name Viewer
  * @memberof pages
  * @class
  * @classdesc
  * This is the main container page for the App.
  *
  */
function Viewer({
    resourceType,
    plugins,
    params,
    loaderComponent
}) {
    const pluginsConfig = getConfigProp('plugins');
    const { plugins: loadedPlugins, pending } = useModulePlugins({
        pluginsEntries: getPlugins(plugins, 'module'),
        pluginsConfig
    });
    const parsedPlugins = useMemo(() => ({ ...loadedPlugins, ...getPlugins(plugins) }), [loadedPlugins]);
    const className = `page-${resourceType || 'viewer'}`;
    const Loader = loaderComponent;
    return (
        <>
            <ConnectedPluginsContainer
                key={className}
                id={className}
                className={`page ${className}`}
                component={BorderLayout}
                pluginsConfig={pluginsConfig}
                plugins={parsedPlugins}
                allPlugins={plugins}
                params={params}
                loaderComponent={loaderComponent}
            />
            {pending && Loader ? <Loader /> : null}
        </>
    );
}

Viewer.propTypes = {
    match: PropTypes.object,
    plugins: PropTypes.object
};

Viewer.defaultProps = {
    match: {}
};

const ConnectedViewer = connect(
    createSelector([
        state => urlQuery.mobile || state.browser && state.browser.mobile
    ], (isMobile) => ({
        isMobile
    }))
)(Viewer);

export default ConnectedViewer;

/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import url from 'url';
import MapViewer from '@mapstore/framework/containers/MapViewer';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';

const urlQuery = url.parse(window.location.href, true).query;

/**
  * @name Viewer
  * @memberof pages
  * @class
  * @classdesc
  * This is the main container page for the App.
  *
  */
function Viewer({
    plugins,
    match,
    isMobile
}) {
    const mode = isMobile
        ? 'simple-viewer'
        : 'viewer';
    const pluginsConfig = (getConfigProp('plugins') || {})?.[mode];
    return (
        <MapViewer
            className={`page page-${mode}`}
            pluginsConfig={pluginsConfig}
            plugins={plugins}
            params={match.params}
        />
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

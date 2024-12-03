/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

__webpack_public_path__ = window.MAPSTORE_PUBLIC_PATH || './'; // eslint-disable-line
if (!window.CESIUM_BASE_URL) {
    window.CESIUM_BASE_URL = __webpack_public_path__ + 'cesium'; // eslint-disable-line
}
require('../MapStoreAPI');

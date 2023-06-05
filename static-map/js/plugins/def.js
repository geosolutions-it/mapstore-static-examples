/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AddGroupPlugin from '@mapstore/framework/plugins/AddGroup';
import AnnotationsPlugin from '@mapstore/framework/plugins/Annotations';
import BackgroundSelectorPlugin from '@mapstore/framework/plugins/BackgroundSelector';
import BurgerMenuPlugin from '@mapstore/framework/plugins/BurgerMenu';
import CRSSelectorPlugin from '@mapstore/framework/plugins/CRSSelector';
import DrawerMenuPlugin from '@mapstore/framework/plugins/DrawerMenu';
import ExpanderPlugin from '@mapstore/framework/plugins/Expander';
import FeatureEditorPlugin from '@mapstore/framework/plugins/FeatureEditor';
import FilterLayerPlugin from '@mapstore/framework/plugins/FilterLayer';
import FullScreenPlugin from '@mapstore/framework/plugins/FullScreen';
import GlobeViewSwitcherPlugin from '@mapstore/framework/plugins/GlobeViewSwitcher';
import IdentifyPlugin from '@mapstore/framework/plugins/Identify';
import LayerDownload from '@mapstore/framework/plugins/LayerDownload';
import LocatePlugin from '@mapstore/framework/plugins/Locate';
import MapExportPlugin from '@mapstore/framework/plugins/MapExport';
import MapFooterPlugin from '@mapstore/framework/plugins/MapFooter';
import MapImportPlugin from '@mapstore/framework/plugins/MapImport';
import MapLoadingPlugin from '@mapstore/framework/plugins/MapLoading';
import MapPlugin from '@mapstore/framework/plugins/Map';
import MeasurePlugin from '@mapstore/framework/plugins/Measure';
import MetadataExplorerPlugin from '@mapstore/framework/plugins/MetadataExplorer';
import MousePositionPlugin from '@mapstore/framework/plugins/MousePosition';
import NotificationsPlugin from '@mapstore/framework/plugins/Notifications';
import OmniBarPlugin from '@mapstore/framework/plugins/OmniBar';
import PlaybackPlugin from '@mapstore/framework/plugins/Playback.jsx';
import QueryPanelPlugin from '@mapstore/framework/plugins/QueryPanel';
import ScaleBoxPlugin from '@mapstore/framework/plugins/ScaleBox';
import SearchPlugin from '@mapstore/framework/plugins/Search';
import SearchServicesConfigPlugin from '@mapstore/framework/plugins/SearchServicesConfig';
import SearchByBookmarkPlugin from '@mapstore/framework/plugins/SearchByBookmark';
import SettingsPlugin from '@mapstore/framework/plugins/Settings';
import SidebarMenuPlugin from '@mapstore/framework/plugins/SidebarMenu';
import StyleEditorPlugin from '@mapstore/framework/plugins/StyleEditor';
import SwipePlugin from '@mapstore/framework/plugins/Swipe';
import TOCItemsSettingsPlugin from '@mapstore/framework/plugins/TOCItemsSettings';
import TOCPlugin from '@mapstore/framework/plugins/TOC';
import TimelinePlugin from '@mapstore/framework/plugins/Timeline';
import ToolbarPlugin from '@mapstore/framework/plugins/Toolbar';
import TutorialPlugin from '@mapstore/framework/plugins/Tutorial';
import WidgetsBuilderPlugin from '@mapstore/framework/plugins/WidgetsBuilder';
import WidgetsPlugin from '@mapstore/framework/plugins/Widgets';
import WidgetsTrayPlugin from '@mapstore/framework/plugins/WidgetsTray';
import ZoomAllPlugin from '@mapstore/framework/plugins/ZoomAll';
import ZoomInPlugin from '@mapstore/framework/plugins/ZoomIn';
import ZoomOutPlugin from '@mapstore/framework/plugins/ZoomOut';

import ReactSwipe from 'react-swipeable-views';
import SwipeHeader from '@mapstore/framework/components/data/identify/SwipeHeader';

export default {
    plugins: {
        // framework plugins
        AddGroupPlugin,
        AnnotationsPlugin,
        BackgroundSelectorPlugin,
        BurgerMenuPlugin,
        CRSSelectorPlugin,
        DrawerMenuPlugin,
        ExpanderPlugin,
        FeatureEditorPlugin,
        FilterLayerPlugin,
        FullScreenPlugin,
        GlobeViewSwitcherPlugin,
        IdentifyPlugin,
        LayerDownload,
        LocatePlugin,
        MapExportPlugin,
        MapFooterPlugin,
        MapImportPlugin,
        MapLoadingPlugin,
        MapPlugin,
        MeasurePlugin,
        MetadataExplorerPlugin,
        MousePositionPlugin,
        NotificationsPlugin,
        OmniBarPlugin,
        PlaybackPlugin,
        QueryPanelPlugin,
        ScaleBoxPlugin,
        SearchPlugin,
        SearchServicesConfigPlugin,
        SearchByBookmarkPlugin,
        SettingsPlugin,
        SidebarMenuPlugin,
        StyleEditorPlugin,
        SwipePlugin,
        TOCItemsSettingsPlugin,
        TOCPlugin,
        TimelinePlugin,
        ToolbarPlugin,
        TutorialPlugin,
        WidgetsBuilderPlugin,
        WidgetsPlugin,
        WidgetsTrayPlugin,
        ZoomAllPlugin,
        ZoomInPlugin,
        ZoomOutPlugin
    },
    requires: {
        ReactSwipe,
        SwipeHeader
    }
};

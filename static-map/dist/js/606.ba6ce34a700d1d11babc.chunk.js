(self.webpackChunkstatic_map=self.webpackChunkstatic_map||[]).push([[606],{23068:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(38906),i=r(13002),o=r(73381),s=r(58493);const a=function(t){function e(e){if(t.call(this),this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,(0,i.oL)(this,(0,s.v_)(this.geometryName_),this.handleGeometryChanged_,this),e)if("function"==typeof e.getSimplifiedGeometry){var r=e;this.setGeometry(r)}else{var n=e;this.setProperties(n)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){var t=new e(this.getProperties());t.setGeometryName(this.getGeometryName());var r=this.getGeometry();r&&t.setGeometry(r.clone());var n=this.getStyle();return n&&t.setStyle(n),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&((0,i.bN)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=(0,i.oL)(t,o.Z.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){var e,r;this.style_=t,this.styleFunction_=t?"function"==typeof(e=t)?e:(Array.isArray(e)?r=e:((0,n.h)("function"==typeof e.getZIndex,41),r=[e]),function(){return r}):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){(0,i.Ev)(this,(0,s.v_)(this.geometryName_),this.handleGeometryChanged_,this),this.geometryName_=t,(0,i.oL)(this,(0,s.v_)(this.geometryName_),this.handleGeometryChanged_,this),this.handleGeometryChanged_()},e}(s.ZP)},93409:(t,e,r)=>{"use strict";r.d(e,{Z:()=>_});var n=r(40188),i=r(58493),o=r(12868),s=r(67644),a=r(85386),h=r(13002),u=r(21915),d="element",l="map",p="offset",f="position",c="positioning";const _=function(t){function e(e){t.call(this),this.options=e,this.id=e.id,this.insertFirst=void 0===e.insertFirst||e.insertFirst,this.stopEvent=void 0===e.stopEvent||e.stopEvent,this.element=document.createElement("div"),this.element.className=void 0!==e.className?e.className:"ol-overlay-container "+s.$A,this.element.style.position="absolute",this.autoPan=void 0!==e.autoPan&&e.autoPan,this.autoPanAnimation=e.autoPanAnimation||{},this.autoPanMargin=void 0!==e.autoPanMargin?e.autoPanMargin:20,this.rendered={bottom_:"",left_:"",right_:"",top_:"",visible:!0},this.mapPostrenderListenerKey=null,(0,h.oL)(this,(0,i.v_)(d),this.handleElementChanged,this),(0,h.oL)(this,(0,i.v_)(l),this.handleMapChanged,this),(0,h.oL)(this,(0,i.v_)(p),this.handleOffsetChanged,this),(0,h.oL)(this,(0,i.v_)(f),this.handlePositionChanged,this),(0,h.oL)(this,(0,i.v_)(c),this.handlePositioningChanged,this),void 0!==e.element&&this.setElement(e.element),this.setOffset(void 0!==e.offset?e.offset:[0,0]),this.setPositioning(void 0!==e.positioning?e.positioning:o.Z.TOP_LEFT),void 0!==e.position&&this.setPosition(e.position)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getElement=function(){return this.get(d)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(l)},e.prototype.getOffset=function(){return this.get(p)},e.prototype.getPosition=function(){return this.get(f)},e.prototype.getPositioning=function(){return this.get(c)},e.prototype.handleElementChanged=function(){(0,a.ep)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&((0,a.ZF)(this.element),(0,h.bN)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=(0,h.oL)(t,n.Z.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element)}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.get(f)&&this.autoPan&&this.panIntoView()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(d,t)},e.prototype.setMap=function(t){this.set(l,t)},e.prototype.setOffset=function(t){this.set(p,t)},e.prototype.setPosition=function(t){this.set(f,t)},e.prototype.panIntoView=function(){var t=this.getMap();if(t&&t.getTargetElement()){var e=this.getRect(t.getTargetElement(),t.getSize()),r=this.getElement(),n=this.getRect(r,[(0,a.iO)(r),(0,a.Pb)(r)]),i=this.autoPanMargin;if(!(0,u.r4)(e,n)){var o=n[0]-e[0],s=e[2]-n[2],h=n[1]-e[1],d=e[3]-n[3],l=[0,0];if(o<0?l[0]=o-i:s<0&&(l[0]=Math.abs(s)+i),h<0?l[1]=h-i:d<0&&(l[1]=Math.abs(d)+i),0!==l[0]||0!==l[1]){var p=t.getView().getCenter(),f=t.getPixelFromCoordinate(p),c=[f[0]+l[0],f[1]+l[1]];t.getView().animate({center:t.getCoordinateFromPixel(c),duration:this.autoPanAnimation.duration,easing:this.autoPanAnimation.easing})}}}},e.prototype.getRect=function(t,e){var r=t.getBoundingClientRect(),n=r.left+window.pageXOffset,i=r.top+window.pageYOffset;return[n,i,n+e[0],i+e[1]]},e.prototype.setPositioning=function(t){this.set(c,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var r=t.getPixelFromCoordinate(e),n=t.getSize();this.updateRenderedPosition(r,n)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var r=this.element.style,n=this.getOffset(),i=this.getPositioning();this.setVisible(!0);var s=n[0],a=n[1];if(i==o.Z.BOTTOM_RIGHT||i==o.Z.CENTER_RIGHT||i==o.Z.TOP_RIGHT){""!==this.rendered.left_&&(this.rendered.left_=r.left="");var h=Math.round(e[0]-t[0]-s)+"px";this.rendered.right_!=h&&(this.rendered.right_=r.right=h)}else{""!==this.rendered.right_&&(this.rendered.right_=r.right=""),i!=o.Z.BOTTOM_CENTER&&i!=o.Z.CENTER_CENTER&&i!=o.Z.TOP_CENTER||(s-=this.element.offsetWidth/2);var u=Math.round(t[0]+s)+"px";this.rendered.left_!=u&&(this.rendered.left_=r.left=u)}if(i==o.Z.BOTTOM_LEFT||i==o.Z.BOTTOM_CENTER||i==o.Z.BOTTOM_RIGHT){""!==this.rendered.top_&&(this.rendered.top_=r.top="");var d=Math.round(e[1]-t[1]-a)+"px";this.rendered.bottom_!=d&&(this.rendered.bottom_=r.bottom=d)}else{""!==this.rendered.bottom_&&(this.rendered.bottom_=r.bottom=""),i!=o.Z.CENTER_LEFT&&i!=o.Z.CENTER_CENTER&&i!=o.Z.CENTER_RIGHT||(a-=this.element.offsetHeight/2);var l=Math.round(t[1]+a)+"px";this.rendered.top_!=l&&(this.rendered.top_=r.top=l)}},e.prototype.getOptions=function(){return this.options},e}(i.ZP)},12868:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},80800:(t,e,r)=>{"use strict";r.d(e,{o:()=>o,B:()=>s});var n=r(64011),i=r(34007);function o(t,e,r,n){return function(o,s,a){var h=new XMLHttpRequest;h.open("GET","function"==typeof t?t(o,s,a):t,!0),e.getType()==i.Z.ARRAY_BUFFER&&(h.responseType="arraybuffer"),h.onload=function(t){if(!h.status||h.status>=200&&h.status<300){var o,s=e.getType();s==i.Z.JSON||s==i.Z.TEXT?o=h.responseText:s==i.Z.XML?(o=h.responseXML)||(o=(new DOMParser).parseFromString(h.responseText,"application/xml")):s==i.Z.ARRAY_BUFFER&&(o=h.response),o?r.call(this,e.readFeatures(o,{featureProjection:a}),e.readProjection(o),e.getLastExtent()):n.call(this)}else n.call(this)}.bind(this),h.onerror=function(){n.call(this)}.bind(this),h.send()}}function s(t,e){return o(t,e,(function(t,e){"function"==typeof this.addFeatures&&this.addFeatures(t)}),n.Zn)}},34007:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n={ARRAY_BUFFER:"arraybuffer",JSON:"json",TEXT:"text",XML:"xml"}},29902:(t,e,r)=>{"use strict";r.d(e,{Z:()=>d});var n=r(66901),i=r(77701),o=r(56510),s=r(13580),a=r(31219),h="renderOrder",u=function(t){function e(e){var r=e||{},i=(0,s.f0)({},r);delete i.style,delete i.renderBuffer,delete i.updateWhileAnimating,delete i.updateWhileInteracting,t.call(this,i),this.declutter_=void 0!==r.declutter&&r.declutter,this.renderBuffer_=void 0!==r.renderBuffer?r.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(r.style),this.updateWhileAnimating_=void 0!==r.updateWhileAnimating&&r.updateWhileAnimating,this.updateWhileInteracting_=void 0!==r.updateWhileInteracting&&r.updateWhileInteracting,this.renderMode_=r.renderMode||o.Z.VECTOR,this.type=n.Z.VECTOR}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDeclutter=function(){return this.declutter_},e.prototype.setDeclutter=function(t){this.declutter_=t},e.prototype.getRenderBuffer=function(){return this.renderBuffer_},e.prototype.getRenderOrder=function(){return this.get(h)},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.getUpdateWhileAnimating=function(){return this.updateWhileAnimating_},e.prototype.getUpdateWhileInteracting=function(){return this.updateWhileInteracting_},e.prototype.setRenderOrder=function(t){this.set(h,t)},e.prototype.setStyle=function(t){this.style_=void 0!==t?t:a.createDefaultStyle,this.styleFunction_=null===t?void 0:(0,a.toFunction)(this.style_),this.changed()},e.prototype.getRenderMode=function(){return this.renderMode_},e}(i.Z);u.prototype.getSource;const d=u},97016:(t,e,r)=>{"use strict";r.d(e,{Z:()=>x});var n=r(49179),i=r(78426),o=r(19629),s=r(13910),a=r(79682),h=r(38906),u=r(13002),d=r(9520),l=r(73381),p=r(21915),f=r(80800),c=r(64011);function _(t,e){return[[-1/0,-1/0,1/0,1/0]]}var y=r(13580),g=r(71405),m=r(82418),v=r(25753),E=r(73101),R=function(t){function e(e,r){t.call(this,e),this.feature=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(d.ZP),F=function(t){function e(e){var r=e||{};t.call(this,{attributions:r.attributions,projection:void 0,state:m.Z.READY,wrapX:void 0===r.wrapX||r.wrapX}),this.loader_=c.Zn,this.format_=r.format,this.overlaps_=null==r.overlaps||r.overlaps,this.url_=r.url,void 0!==r.loader?this.loader_=r.loader:void 0!==this.url_&&((0,h.h)(this.format_,7),this.loader_=(0,f.B)(this.url_,this.format_)),this.strategy_=void 0!==r.strategy?r.strategy:_;var n,o,s=void 0===r.useSpatialIndex||r.useSpatialIndex;this.featuresRtree_=s?new E.Z:null,this.loadedExtentsRtree_=new E.Z,this.nullGeometryFeatures_={},this.idIndex_={},this.undefIdIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null,Array.isArray(r.features)?o=r.features:r.features&&(o=(n=r.features).getArray()),s||void 0!==n||(n=new i.Z(o)),void 0!==o&&this.addFeaturesInternal(o),void 0!==n&&this.bindFeaturesCollection_(n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addFeature=function(t){this.addFeatureInternal(t),this.changed()},e.prototype.addFeatureInternal=function(t){var e=(0,n.sq)(t);if(this.addToIndex_(e,t)){this.setupChangeEvents_(e,t);var r=t.getGeometry();if(r){var i=r.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(i,t)}else this.nullGeometryFeatures_[e]=t;this.dispatchEvent(new R(v.Z.ADDFEATURE,t))}},e.prototype.setupChangeEvents_=function(t,e){this.featureChangeKeys_[t]=[(0,u.oL)(e,l.Z.CHANGE,this.handleFeatureChange_,this),(0,u.oL)(e,s.Z.PROPERTYCHANGE,this.handleFeatureChange_,this)]},e.prototype.addToIndex_=function(t,e){var r=!0,n=e.getId();return void 0!==n?n.toString()in this.idIndex_?r=!1:this.idIndex_[n.toString()]=e:((0,h.h)(!(t in this.undefIdIndex_),30),this.undefIdIndex_[t]=e),r},e.prototype.addFeatures=function(t){this.addFeaturesInternal(t),this.changed()},e.prototype.addFeaturesInternal=function(t){for(var e=[],r=[],i=[],o=0,s=t.length;o<s;o++){var a=t[o],h=(0,n.sq)(a);this.addToIndex_(h,a)&&r.push(a)}for(var u=0,d=r.length;u<d;u++){var l=r[u],p=(0,n.sq)(l);this.setupChangeEvents_(p,l);var f=l.getGeometry();if(f){var c=f.getExtent();e.push(c),i.push(l)}else this.nullGeometryFeatures_[p]=l}this.featuresRtree_&&this.featuresRtree_.load(e,i);for(var _=0,y=r.length;_<y;_++)this.dispatchEvent(new R(v.Z.ADDFEATURE,r[_]))},e.prototype.bindFeaturesCollection_=function(t){var e=!1;(0,u.oL)(this,v.Z.ADDFEATURE,(function(r){e||(e=!0,t.push(r.feature),e=!1)})),(0,u.oL)(this,v.Z.REMOVEFEATURE,(function(r){e||(e=!0,t.remove(r.feature),e=!1)})),(0,u.oL)(t,o.Z.ADD,(function(t){e||(e=!0,this.addFeature(t.element),e=!1)}),this),(0,u.oL)(t,o.Z.REMOVE,(function(t){e||(e=!0,this.removeFeature(t.element),e=!1)}),this),this.featuresCollection_=t},e.prototype.clear=function(t){if(t){for(var e in this.featureChangeKeys_)this.featureChangeKeys_[e].forEach(u.bN);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.undefIdIndex_={})}else if(this.featuresRtree_)for(var r in this.featuresRtree_.forEach(this.removeFeatureInternal,this),this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[r]);this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.loadedExtentsRtree_.clear(),this.nullGeometryFeatures_={};var n=new R(v.Z.CLEAR);this.dispatchEvent(n),this.changed()},e.prototype.forEachFeature=function(t){if(this.featuresRtree_)return this.featuresRtree_.forEach(t);this.featuresCollection_&&this.featuresCollection_.forEach(t)},e.prototype.forEachFeatureAtCoordinateDirect=function(t,e){var r=[t[0],t[1],t[0],t[1]];return this.forEachFeatureInExtent(r,(function(r){return r.getGeometry().intersectsCoordinate(t)?e(r):void 0}))},e.prototype.forEachFeatureInExtent=function(t,e){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(t,e);this.featuresCollection_&&this.featuresCollection_.forEach(e)},e.prototype.forEachFeatureIntersectingExtent=function(t,e){return this.forEachFeatureInExtent(t,(function(r){if(r.getGeometry().intersectsExtent(t)){var n=e(r);if(n)return n}}))},e.prototype.getFeaturesCollection=function(){return this.featuresCollection_},e.prototype.getFeatures=function(){var t;return this.featuresCollection_?t=this.featuresCollection_.getArray():this.featuresRtree_&&(t=this.featuresRtree_.getAll(),(0,y.xb)(this.nullGeometryFeatures_)||(0,a.l7)(t,(0,y.KX)(this.nullGeometryFeatures_))),t},e.prototype.getFeaturesAtCoordinate=function(t){var e=[];return this.forEachFeatureAtCoordinateDirect(t,(function(t){e.push(t)})),e},e.prototype.getFeaturesInExtent=function(t){return this.featuresRtree_.getInExtent(t)},e.prototype.getClosestFeatureToCoordinate=function(t,e){var r=t[0],n=t[1],i=null,o=[NaN,NaN],s=1/0,a=[-1/0,-1/0,1/0,1/0],h=e||c.uX;return this.featuresRtree_.forEachInExtent(a,(function(t){if(h(t)){var e=t.getGeometry(),u=s;if((s=e.closestPointXY(r,n,o,s))<u){i=t;var d=Math.sqrt(s);a[0]=r-d,a[1]=n-d,a[2]=r+d,a[3]=n+d}}})),i},e.prototype.getExtent=function(t){return this.featuresRtree_.getExtent(t)},e.prototype.getFeatureById=function(t){var e=this.idIndex_[t.toString()];return void 0!==e?e:null},e.prototype.getFormat=function(){return this.format_},e.prototype.getOverlaps=function(){return this.overlaps_},e.prototype.getUrl=function(){return this.url_},e.prototype.handleFeatureChange_=function(t){var e=t.target,r=(0,n.sq)(e),i=e.getGeometry();if(i){var o=i.getExtent();r in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[r],this.featuresRtree_&&this.featuresRtree_.insert(o,e)):this.featuresRtree_&&this.featuresRtree_.update(o,e)}else r in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(e),this.nullGeometryFeatures_[r]=e);var s=e.getId();if(void 0!==s){var a=s.toString();r in this.undefIdIndex_?(delete this.undefIdIndex_[r],this.idIndex_[a]=e):this.idIndex_[a]!==e&&(this.removeFromIdIndex_(e),this.idIndex_[a]=e)}else r in this.undefIdIndex_||(this.removeFromIdIndex_(e),this.undefIdIndex_[r]=e);this.changed(),this.dispatchEvent(new R(v.Z.CHANGEFEATURE,e))},e.prototype.hasFeature=function(t){var e=t.getId();return void 0!==e?e in this.idIndex_:(0,n.sq)(t)in this.undefIdIndex_},e.prototype.isEmpty=function(){return this.featuresRtree_.isEmpty()&&(0,y.xb)(this.nullGeometryFeatures_)},e.prototype.loadFeatures=function(t,e,r){var n=this,i=this.loadedExtentsRtree_,o=this.strategy_(t,e);this.loading=!1;for(var s=function(t,s){var a=o[t];i.forEachInExtent(a,(function(t){return(0,p.r4)(t.extent,a)}))||(n.loader_.call(n,a,e,r),i.insert(a,{extent:a.slice()}),n.loading=n.loader_!==c.Zn)},a=0,h=o.length;a<h;++a)s(a)},e.prototype.removeLoadedExtent=function(t){var e,r=this.loadedExtentsRtree_;r.forEachInExtent(t,(function(r){if((0,p.fS)(r.extent,t))return e=r,!0})),e&&r.remove(e)},e.prototype.removeFeature=function(t){var e=(0,n.sq)(t);e in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[e]:this.featuresRtree_&&this.featuresRtree_.remove(t),this.removeFeatureInternal(t),this.changed()},e.prototype.removeFeatureInternal=function(t){var e=(0,n.sq)(t);this.featureChangeKeys_[e].forEach(u.bN),delete this.featureChangeKeys_[e];var r=t.getId();void 0!==r?delete this.idIndex_[r.toString()]:delete this.undefIdIndex_[e],this.dispatchEvent(new R(v.Z.REMOVEFEATURE,t))},e.prototype.removeFromIdIndex_=function(t){var e=!1;for(var r in this.idIndex_)if(this.idIndex_[r]===t){delete this.idIndex_[r],e=!0;break}return e},e.prototype.setLoader=function(t){this.loader_=t},e}(g.Z);const x=F},25753:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature"}},73101:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var n=r(49179),i=r(49545),o=r.n(i),s=r(21915),a=r(13580),h=function(t){this.rbush_=o()(t,void 0),this.items_={}};h.prototype.insert=function(t,e){var r={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3],value:e};this.rbush_.insert(r),this.items_[(0,n.sq)(e)]=r},h.prototype.load=function(t,e){for(var r=new Array(e.length),i=0,o=e.length;i<o;i++){var s=t[i],a=e[i],h={minX:s[0],minY:s[1],maxX:s[2],maxY:s[3],value:a};r[i]=h,this.items_[(0,n.sq)(a)]=h}this.rbush_.load(r)},h.prototype.remove=function(t){var e=(0,n.sq)(t),r=this.items_[e];return delete this.items_[e],null!==this.rbush_.remove(r)},h.prototype.update=function(t,e){var r=this.items_[(0,n.sq)(e)],i=[r.minX,r.minY,r.maxX,r.maxY];(0,s.fS)(i,t)||(this.remove(e),this.insert(t,e))},h.prototype.getAll=function(){return this.rbush_.all().map((function(t){return t.value}))},h.prototype.getInExtent=function(t){var e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this.rbush_.search(e).map((function(t){return t.value}))},h.prototype.forEach=function(t,e){return this.forEach_(this.getAll(),t,e)},h.prototype.forEachInExtent=function(t,e,r){return this.forEach_(this.getInExtent(t),e,r)},h.prototype.forEach_=function(t,e,r){for(var n,i=0,o=t.length;i<o;i++)if(n=e.call(r,t[i]))return n;return n},h.prototype.isEmpty=function(){return(0,a.xb)(this.items_)},h.prototype.clear=function(){this.rbush_.clear(),this.items_={}},h.prototype.getExtent=function(t){var e=this.rbush_.toJSON();return(0,s.T9)(e.minX,e.minY,e.maxX,e.maxY,t)},h.prototype.concat=function(t){for(var e in this.rbush_.load(t.rbush_.all()),t.items_)this.items_[e]=t.items_[e]};const u=h}}]);
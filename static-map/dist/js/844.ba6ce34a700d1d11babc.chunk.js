/*! For license information please see 844.ba6ce34a700d1d11babc.chunk.js.LICENSE.txt */
(self.webpackChunkstatic_map=self.webpackChunkstatic_map||[]).push([[844,203],{43203:t=>{t.exports=window.L},36844:(t,i,o)=>{"use strict";o.r(i),o.d(i,{default:()=>g});var s=o(43203),e=o.n(s),n=(o(80687),o(93379)),a=o.n(n),r=o(23928);a()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,o(32818);var l=o(23493),c=o.n(l),h=o(14293),p=o.n(h),u=o(31557),_=o(92227);e().Control.MSLocate=e().Control.Locate.extend({setMap:function(t){this._map=t,this._layer=this.options.layer||new(e().LayerGroup),this._layer.addTo(t),this._event=void 0,this._prevBounds=null;let i={};e().extend(i,this.options.circleStyle,this.options.followCircleStyle),this.options.followCircleStyle=i,this._resetVariables(),this._map.on("unload",this._unload,this)},setLocateOptions:function(t){this.options.locateOptions={...t}},_activate:function(){this._active||(this._map.locate(this.options.locateOptions),this._active=!0,this._map.on("locationfound",this.onLocationChange(),this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this))},onLocationChange:function(){return this.options.locateOptions.rateControl?c()(this._onLocationFound,this.options.locateOptions.rateControl):this._onLocationFound},_drawMarker:function(){var t,i;let{accuracy:o,latlng:s,heading:n,speed:a}=this._event||{};void 0===o&&(o=0);const r=this._isFollowing();if(this.options.drawCircle){const t=r?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(s).setRadius(o).setStyle(t):this._circle=e().circle(s,o,t).addTo(this._layer)}let l,c;this.options.metric?(l=o.toFixed(0),c=this.options.strings.metersUnit):(l=(3.2808399*o).toFixed(0),c=this.options.strings.feetUnit),this.options.drawMarker&&(this._marker&&this._map.removeLayer(this._marker),this.setFollowMarkerStyle(s,n,a));const h=null===(t=this.options)||void 0===t||null===(i=t.strings)||void 0===i?void 0:i.popup;if(this.options.showPopup&&h&&this._marker&&this._marker.bindPopup(e().Util.template(h,{distance:l,unit:c}))._popup.setLatLng(s),"true"===(0,_.vl)(window.location.search).locateDebug){let t=document.getElementById("LEAFLET_LOCATION_DEBUG");t||(t=document.createElement("div"),t.setAttribute("id","LEAFLET_LOCATION_DEBUG"),t.setAttribute("style","position: absolute; bottom: 0; width: 100%; height: 200px; z-index:100000; background: rgba(5,5,5,.5)"),document.body.appendChild(t)),t.innerHTML="<pre>\n                Position: ".concat(s,",\n                Heading: ").concat(n,"\n                speed: ").concat(a,"\n            </pre>")}},_setClasses:function(t){return this._map.fire("locatestatus",{state:t}),t},_updateContainerStyle:function(){this._isFollowing()?this._setClasses("following"):this._active&&this._setClasses("active")},_cleanClasses:function(){return null},setStrings:function(t){this.options.strings={...this.options.strings,...t}},removeMarker:function(){this._marker&&this._map.removeLayer(this._marker)},setFollowMarkerStyle:function(t,i,o){const s="#2A93EE";this.removeMarker();const n={icon:e().divIcon({className:"div-heading-icon",opacity:1,iconSize:70,fillOpacity:1,html:!p()(i)&&o>this.options.locateOptions.speedThreshold?(0,u.w)({color:s,strokeWidth:2}):(0,u.B)({color:s,strokeWidth:2})}),rotationOrigin:"center center"};this._marker=e().marker(t,{...n,rotationAngle:i}).addTo(this._layer)}});const d=e().Control.MSLocate,f={follow:!0,remainActive:!0,stopFollowingOnDrag:!0,locateOptions:{speedThreshold:.8,maximumAge:2e3,enableHighAccuracy:!0,timeout:1e4,maxZoom:18,watch:!0}};function m(t){return{...f,...t,locateOptions:{...f.locateOptions,...t.locateOptions}}}const g=class{start(t){let{map:i,options:o,status:s,onStateChange:e,onLocationError:n}=t;i&&(this.locate=new d(m(o)),this.locate.setMap(i),i.on("locatestatus",(t=>this.locateControlState(t,{onStateChange:e}))),this.locate.options.onLocationError=n,this.locate.options.onLocationOutsideMapBounds=n),s.enabled&&this.locate.start(),this.status=s}update(t){let{status:i,messages:o,options:s}=t;this.fol=!1,"ENABLED"!==i||this.locate._active?"FOLLOWING"===i&&this.locate._active&&!this.locate._following?(this.fol=!0,this.locate.stop(),this.locate.start()):"DISABLED"===i&&(this.locate._following=!1,this.locate.stop()):this.locate.start(),this.locate.setStrings(o),"DISABLED"!==i&&this.locate.drawMarker&&this.locate.drawMarker(this.locate._map),this.locate.setLocateOptions(m(s).locateOptions),this.status=i}clear(){}locateControlState(t,i){let{onStateChange:o}=i;"requesting"===t.state&&"LOCATING"!==this.status?o("LOCATING"):"following"!==t.state||this.fol?"active"===t.state&&"ENABLED"!==this.status&&o("ENABLED"):o("FOLLOWING")}}},31557:(t,i,o)=>{"use strict";o.d(i,{w:()=>e,B:()=>n});const s=8;function e(t){let{color:i="#2A93EE",svgAttributes:o,strokeWidth:e=s}=t;return'<svg xmlns="http://www.w3.org/2000/svg" '.concat(o,' viewBox="0 0 100 100" xml:space="preserve">\n\t\t<g transform="matrix(0.2 0 0 0.2 49.8 50.19)">\n            <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -65 -65)" x1="65" y1="130" x2="65" y2="0">\n                <stop offset="100%" style="stop-color:rgba(0, 132, 202, 1);"/>\n                <stop offset="100%" style="stop-color:rgba(0, 0, 255, 1);"/>\n            </linearGradient>\n            <circle style="stroke: rgb(255,255,255); stroke-width: ').concat(e,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(i,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" cx="0" cy="0" r="65"/>\n        </g>\n        <g transform="matrix(-0.12 -0.22 0.22 -0.12 47.11 20.53)">\n            <polygon style="stroke: rgb(255,255,255); stroke-width: ').concat(e,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(i,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" points="0,-42.5 50,42.5 -50,42.5 "/>\n        </g>\n    </svg>')}function n(t){let{color:i="#2A93EE",svgAttributes:o,strokeWidth:e=s}=t;return'<svg xmlns="http://www.w3.org/2000/svg" '.concat(o,' viewBox="0 0 100 100" xml:space="preserve">\n\t\t<g transform="matrix(0.2 0 0 0.2 49.8 50.19)">\n            <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -65 -65)" x1="65" y1="130" x2="65" y2="0">\n                <stop offset="100%" style="stop-color:rgba(0, 132, 202, 1);"/>\n                <stop offset="100%" style="stop-color:rgba(0, 0, 255, 1);"/>\n            </linearGradient>\n            <circle style="stroke: rgb(255,255,255); stroke-width: ').concat(e,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(i,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" cx="0" cy="0" r="65"/>\n        </g>\n    </svg>')}},23928:(t,i,o)=>{"use strict";o.d(i,{Z:()=>n});var s=o(23645),e=o.n(s)()((function(t){return t[1]}));e.push([t.id,"/* Compatible with Leaflet 0.7 */\n.static-map .leaflet-control-locate a {\n  font-size: 1.4em;\n  color: #444;\n  cursor: pointer;\n}\n.static-map .leaflet-control-locate.active a {\n  color: #2074B6;\n}\n.static-map .leaflet-control-locate.active.following a {\n  color: #FC8428;\n}\n",""]);const n=e},32818:()=>{var t,i,o;t=L.Marker.prototype._initIcon,i=L.Marker.prototype._setPos,o="msTransform"===L.DomUtil.TRANSFORM,L.Marker.addInitHook((function(){var t=this.options.icon&&this.options.icon.options&&this.options.icon.options.iconAnchor;t&&(t=t[0]+"px "+t[1]+"px"),this.options.rotationOrigin=this.options.rotationOrigin||t||"center bottom",this.options.rotationAngle=this.options.rotationAngle||0,this.on("drag",(function(t){t.target._applyRotation()}))})),L.Marker.include({_initIcon:function(){t.call(this)},_setPos:function(t){i.call(this,t),this._applyRotation()},_applyRotation:function(){this.options.rotationAngle&&(this._icon.style[L.DomUtil.TRANSFORM+"Origin"]=this.options.rotationOrigin,o?this._icon.style[L.DomUtil.TRANSFORM]="rotate("+this.options.rotationAngle+"deg)":this._icon.style[L.DomUtil.TRANSFORM]+=" rotateZ("+this.options.rotationAngle+"deg)")},setRotationAngle:function(t){return this.options.rotationAngle=t,this.update(),this},setRotationOrigin:function(t){return this.options.rotationOrigin=t,this.update(),this}})},80687:(t,i,o)=>{var s,e,n;!function(a,r){e=[o(43203)],void 0===(n="function"==typeof(s=a)?s.apply(i,e):s)||(t.exports=n),void 0!==r&&r.L&&(r.L.Control.Locate=a(L))}((function(t){var i=function(i,o,s){(s=s.split(" ")).forEach((function(s){t.DomUtil[i].call(this,o,s)}))},o=function(t,o){i("addClass",t,o)},s=function(t,o){i("removeClass",t,o)},e=t.Control.extend({options:{position:"topleft",layer:void 0,setView:"untilPan",keepCurrentZoomLevel:!1,flyTo:!1,clickBehavior:{inView:"stop",outOfView:"setView"},returnToPrevBounds:!1,cacheLocation:!0,drawCircle:!0,drawMarker:!0,markerClass:t.CircleMarker,circleStyle:{color:"#136AEC",fillColor:"#136AEC",fillOpacity:.15,weight:2,opacity:.5},markerStyle:{color:"#136AEC",fillColor:"#2A93EE",fillOpacity:.7,weight:2,opacity:.9,radius:5},followCircleStyle:{},followMarkerStyle:{},icon:"fa fa-map-marker",iconLoading:"fa fa-spinner fa-spin",iconElementTag:"span",circlePadding:[0,0],metric:!0,createButtonCallback:function(i,o){var s=t.DomUtil.create("a","leaflet-bar-part leaflet-bar-part-single",i);return s.title=o.strings.title,{link:s,icon:t.DomUtil.create(o.iconElementTag,o.icon,s)}},onLocationError:function(t,i){alert(t.message)},onLocationOutsideMapBounds:function(t){t.stop(),alert(t.options.strings.outsideMapBoundsMsg)},showPopup:!0,strings:{title:"Show me where I am",metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point",outsideMapBoundsMsg:"You seem located outside the boundaries of the map"},locateOptions:{maxZoom:1/0,watch:!0,setView:!1}},initialize:function(i){for(var o in i)"object"==typeof this.options[o]?t.extend(this.options[o],i[o]):this.options[o]=i[o];this.options.followMarkerStyle=t.extend({},this.options.markerStyle,this.options.followMarkerStyle),this.options.followCircleStyle=t.extend({},this.options.circleStyle,this.options.followCircleStyle)},onAdd:function(i){var o=t.DomUtil.create("div","leaflet-control-locate leaflet-bar leaflet-control");this._layer=this.options.layer||new t.LayerGroup,this._layer.addTo(i),this._event=void 0,this._prevBounds=null;var s=this.options.createButtonCallback(o,this.options);return this._link=s.link,this._icon=s.icon,t.DomEvent.on(this._link,"click",t.DomEvent.stopPropagation).on(this._link,"click",t.DomEvent.preventDefault).on(this._link,"click",this._onClick,this).on(this._link,"dblclick",t.DomEvent.stopPropagation),this._resetVariables(),this._map.on("unload",this._unload,this),o},_onClick:function(){if(this._justClicked=!0,this._userPanned=!1,this._active&&!this._event)this.stop();else if(this._active&&void 0!==this._event)switch(this._map.getBounds().contains(this._event.latlng)?this.options.clickBehavior.inView:this.options.clickBehavior.outOfView){case"setView":this.setView();break;case"stop":this.stop(),this.options.returnToPrevBounds&&(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._prevBounds)}else this.options.returnToPrevBounds&&(this._prevBounds=this._map.getBounds()),this.start();this._updateContainerStyle()},start:function(){this._activate(),this._event&&(this._drawMarker(this._map),this.options.setView&&this.setView()),this._updateContainerStyle()},stop:function(){this._deactivate(),this._cleanClasses(),this._resetVariables(),this._removeMarker()},_activate:function(){this._active||(this._map.locate(this.options.locateOptions),this._active=!0,this._map.on("locationfound",this._onLocationFound,this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this))},_deactivate:function(){this._map.stopLocate(),this._active=!1,this.options.cacheLocation||(this._event=void 0),this._map.off("locationfound",this._onLocationFound,this),this._map.off("locationerror",this._onLocationError,this),this._map.off("dragstart",this._onDrag,this)},setView:function(){this._drawMarker(),this._isOutsideMapBounds()?(this._event=void 0,this.options.onLocationOutsideMapBounds(this)):this.options.keepCurrentZoomLevel?(this.options.flyTo?this._map.flyTo:this._map.panTo).bind(this._map)([this._event.latitude,this._event.longitude]):(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._event.bounds,{padding:this.options.circlePadding,maxZoom:this.options.locateOptions.maxZoom})},_drawMarker:function(){void 0===this._event.accuracy&&(this._event.accuracy=0);var i,o,s=this._event.accuracy,e=this._event.latlng;if(this.options.drawCircle){var n=this._isFollowing()?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(e).setRadius(s).setStyle(n):this._circle=t.circle(e,s,n).addTo(this._layer)}if(this.options.metric?(i=s.toFixed(0),o=this.options.strings.metersUnit):(i=(3.2808399*s).toFixed(0),o=this.options.strings.feetUnit),this.options.drawMarker){var a=this._isFollowing()?this.options.followMarkerStyle:this.options.markerStyle;this._marker?(this._marker.setLatLng(e),this._marker.setStyle&&this._marker.setStyle(a)):this._marker=new this.options.markerClass(e,a).addTo(this._layer)}var r=this.options.strings.popup;this.options.showPopup&&r&&this._marker&&this._marker.bindPopup(t.Util.template(r,{distance:i,unit:o}))._popup.setLatLng(e)},_removeMarker:function(){this._layer.clearLayers(),this._marker=void 0,this._circle=void 0},_unload:function(){this.stop(),this._map.off("unload",this._unload,this)},_onLocationError:function(t){3==t.code&&this.options.locateOptions.watch||(this.stop(),this.options.onLocationError(t,this))},_onLocationFound:function(t){if((!this._event||this._event.latlng.lat!==t.latlng.lat||this._event.latlng.lng!==t.latlng.lng||this._event.accuracy!==t.accuracy)&&this._active){switch(this._event=t,this._drawMarker(),this._updateContainerStyle(),this.options.setView){case"once":this._justClicked&&this.setView();break;case"untilPan":this._userPanned||this.setView();break;case"always":this.setView()}this._justClicked=!1}},_onDrag:function(){this._event&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_isFollowing:function(){return!!this._active&&("always"===this.options.setView||("untilPan"===this.options.setView?!this._userPanned:void 0))},_isOutsideMapBounds:function(){return void 0!==this._event&&this._map.options.maxBounds&&!this._map.options.maxBounds.contains(this._event.latlng)},_updateContainerStyle:function(){this._container&&(this._active&&!this._event?this._setClasses("requesting"):this._isFollowing()?this._setClasses("following"):this._active?this._setClasses("active"):this._cleanClasses())},_setClasses:function(t){"requesting"==t?(s(this._container,"active following"),o(this._container,"requesting"),s(this._icon,this.options.icon),o(this._icon,this.options.iconLoading)):"active"==t?(s(this._container,"requesting following"),o(this._container,"active"),s(this._icon,this.options.iconLoading),o(this._icon,this.options.icon)):"following"==t&&(s(this._container,"requesting"),o(this._container,"active following"),s(this._icon,this.options.iconLoading),o(this._icon,this.options.icon))},_cleanClasses:function(){t.DomUtil.removeClass(this._container,"requesting"),t.DomUtil.removeClass(this._container,"active"),t.DomUtil.removeClass(this._container,"following"),s(this._icon,this.options.iconLoading),o(this._icon,this.options.icon)},_resetVariables:function(){this._active=!1,this._justClicked=!1,this._userPanned=!1}});return t.control.locate=function(i){return new t.Control.Locate(i)},e}),window)}}]);
(self.webpackChunkstatic_map=self.webpackChunkstatic_map||[]).push([[19],{582:(e,t,r)=>{var i=r(8606),a=r(66410);i.registerType("bing",(e=>{var t=e.apiKey;return new a.BingMapsImageryProvider({url:"//dev.virtualearth.net",key:t,mapStyle:a.BingMapsStyle[e.name.toUpperCase()]})}))},54223:(e,t,r)=>{var i=r(8606),a=r(66410),n=r(27418),o=function(){var e=[a.Math.toRadians(.05),a.Math.toRadians(.1),a.Math.toRadians(.2),a.Math.toRadians(.5),a.Math.toRadians(1),a.Math.toRadians(2),a.Math.toRadians(5),a.Math.toRadians(10)];function t(e,t){let r=e||{};this._tilingScheme=r.tilingScheme||new a.GeographicTilingScheme,this._color=r.color&&new a.Color(r.color[0],r.color[1],r.color[2],r.color[3])||new a.Color(1,1,1,.4),this._tileWidth=r.tileWidth||256,this._tileHeight=r.tileHeight||256,this._ready=!0,this._sexagesimal=r.sexagesimal||!1,this._numLines=r.numLines||50,this._scene=t,this._labels=new a.LabelCollection,t.primitives.add(this._labels),this._polylines=new a.PolylineCollection,t.primitives.add(this._polylines),this._ellipsoid=t.globe.ellipsoid;let i=document.createElement("canvas");i.width=256,i.height=256,this._canvas=i}let r=function(){try{return"x"in Object.defineProperty({},"x",{})}catch(e){return!1}}(),i=Object.defineProperties;function n(e){return e<.01?3:e<.1?2:e<1?1:0}return r&&i||(i=function(e){return e}),i(t.prototype,{url:{get:function(){}},proxy:{get:function(){}},tileWidth:{get:function(){return this._tileWidth}},tileHeight:{get:function(){return this._tileHeight}},maximumLevel:{get:function(){return 18}},minimumLevel:{get:function(){return 0}},tilingScheme:{get:function(){return this._tilingScheme}},rectangle:{get:function(){return this._tilingScheme.rectangle}},tileDiscardPolicy:{get:function(){}},errorEvent:{get:function(){return this._errorEvent}},ready:{get:function(){return this._ready}},credit:{get:function(){return this._credit}},hasAlphaChannel:{get:function(){return!0}}}),t.prototype.makeLabel=function(e,t,r,i){this._labels.add({position:this._ellipsoid.cartographicToCartesian(new a.Cartographic(e,t,10)),text:r,font:"normal",fillColor:this._color,outlineColor:this._color,style:a.LabelStyle.FILL,pixelOffset:new a.Cartesian2(5,i?5:-5),eyeOffset:a.Cartesian3.ZERO,horizontalOrigin:a.HorizontalOrigin.LEFT,verticalOrigin:i?a.VerticalOrigin.BOTTOM:a.VerticalOrigin.TOP,scale:1})},t.prototype._drawGrid=function(t){if(this._currentExtent&&this._currentExtent.equals(t))return;this._currentExtent=t,this._polylines.removeAll(),this._labels.removeAll();let r=0,i=0;for(let i=0;i<e.length&&r<(t.north-t.south)/10;i++)r=e[i];for(let r=0;r<e.length&&i<(t.east-t.west)/10;r++)i=e[r];let o=(t.west<0?Math.ceil(t.west/i):Math.floor(t.west/i))*i,l=(t.south<0?Math.ceil(t.south/r):Math.floor(t.south/r))*r,s=(t.east<0?Math.ceil(t.east/r):Math.floor(t.east/r))*r,h=(t.north<0?Math.ceil(t.north/i):Math.floor(t.north/i))*i;o=Math.max(o-2*i,-Math.PI),s=Math.min(s+2*i,Math.PI),l=Math.max(l-2*r,-Math.PI/2),h=Math.min(h+2*i,Math.PI/2);let u=this._ellipsoid,d=a.Math.toRadians(1),f=l+Math.floor((h-l)/r/2)*r;for(let e=o;e<s;e+=i){let t=[];for(let r=l;r<h;r+=d)t.push(new a.Cartographic(e,r));t.push(new a.Cartographic(e,h)),this._polylines.add({positions:u.cartographicArrayToCartesianArray(t),width:.75,material:new a.Material({fabric:{type:"Color",uniforms:{color:this._color}}})});let r=a.Math.toDegrees(e);this.makeLabel(e,f,this._sexagesimal?this._decToSex(r):r.toFixed(n(i)),!1)}let c=o+Math.floor((s-o)/i/2)*i;for(let e=l;e<h;e+=r){let t=[];for(let r=o;r<s;r+=d)t.push(new a.Cartographic(r,e));t.push(new a.Cartographic(s,e)),this._polylines.add({positions:u.cartographicArrayToCartesianArray(t),width:1,material:new a.Material({fabric:{type:"Color",uniforms:{color:this._color}}})});let i=a.Math.toDegrees(e);this.makeLabel(c,e,this._sexagesimal?this._decToSex(i):i.toFixed(n(r)),!0)}},t.prototype.requestImage=function(){return this._show&&this._drawGrid(this._getExtentView()),this._canvas},t.prototype.setVisible=function(e){this._show=e,e?(this._currentExtent=null,this._drawGrid(this._getExtentView())):(this._polylines.removeAll(),this._labels.removeAll())},t.prototype.isVisible=function(){return this._show},t.prototype._decToSex=function(t){var r=Math.floor(t);let i=(60*(Math.abs(t)-r)).toFixed(2);return"60.00"===i&&(r+=1,e="0.00"),[r,":",i].join("")},t.prototype._getExtentView=function(){var e=this._scene.camera,t=this._scene.canvas,r=[e.pickEllipsoid(new a.Cartesian2(0,0),this._ellipsoid),e.pickEllipsoid(new a.Cartesian2(t.width,0),this._ellipsoid),e.pickEllipsoid(new a.Cartesian2(0,t.height),this._ellipsoid),e.pickEllipsoid(new a.Cartesian2(t.width,t.height),this._ellipsoid)];for(let e=0;e<4;e++)if(void 0===r[e])return a.Rectangle.MAX_VALUE;return a.Rectangle.fromCartographicArray(this._ellipsoid.cartesianArrayToCartographicArray(r))},t.prototype.destroy=function(){this._show=!1,this._polylines&&this._scene.primitives.remove(this._polylines),this._labels&&this._scene.primitives.remove(this._labels)},t}();i.registerType("graticule",{create:(e,t)=>{var r=t.scene;let i=new o(n({tileWidth:512,tileHeight:512,numLines:10},e||{}),r);return e.visibility&&i.setVisible(!0),i}})},21759:(e,t,r)=>{var i=r(8606),a=r(66410);i.registerType("osm",(()=>a.createOpenStreetMapImageryProvider({url:"//a.tile.openstreetmap.org/"})))},47881:(e,t,r)=>{var i=r(8606),a=r(66410),n=r(98143);const o=function(){function e(e){this._scene=e.scene;let t=document.createElement("div");t.className="infoWindow",this._div=t;let r=document.createElement("div");r.className="frame",this._div.appendChild(r);let i=document.createElement("div");i.className="content",r.appendChild(i),e.container.appendChild(t),this._content=i,this.setVisible(!0)}return e.prototype.setVisible=function(e){this._visible=e,this._div.style.display=e?"block":"none"},e.prototype.setContent=function(e){if("string"==typeof e)this._content.innerHTML=e;else{for(;this._content.firstChild;)this._content.removeChild(this._content.firstChild);this._content.appendChild(e)}},e.prototype.setPosition=function(e,t){this._position=this._scene.globe.ellipsoid.cartographicToCartesian(a.Cartographic.fromDegrees(t,e,0))},e.prototype.showAt=function(e,t,r){this.setPosition(e,t),this.setContent(r),this.setVisible(!0)},e.prototype.hide=function(){this.setVisible(!1)},e.prototype.computeVisible=function(){var e=6378137,t=6378137,r=6356752.314245179,i=this._scene.camera.position,a=i.x/e,n=i.y/t,o=i.z/r,l=a*a+n*n+o*o-1,s=this._position,h=s.x/e-a,u=s.y/t-n,d=s.z/r-o,f=-(h*a+u*n+d*o);f>l&&f*f/(h*h+u*u+d*d)>l?this.setVisible(!1):this.setVisible(!0)},e.prototype.update=function(){if(this.computeVisible(),!this._visible||!this._position)return;let e=a.SceneTransforms.wgs84ToWindowCoordinates(this._scene,this._position);if(e){let t=Math.floor(e.x)-this._div.clientWidth/2+"px",r=Math.floor(e.y)-this._div.clientHeight+"px";this._div.tabIndex=5,this._div.style.left=t,this._div.style.top=r}},e.prototype.destroy=function(){this._div.parentNode.removeChild(this._div)},e}(),l=e=>{if(0!==e.length)for(let t=0;t<e.length;t++){let r=e.item(t);r.removeAttribute("data-reactid"),l(r.children||[])}};i.registerType("overlay",{create:(e,t)=>{const r=((e,t)=>{let r=e.cloneNode(!0);r.id=t.id+"-overlay",r.className=(t.className||e.className)+"-overlay",r.removeAttribute("data-reactid"),l(r.children||[]);const i=t.closeClass||"close";if(t.onClose&&1===r.getElementsByClassName(i).length){const e=r.getElementsByClassName(i)[0],a=e=>{t.onClose(e.target.getAttribute("data-overlayid"))};n.add(e,"click",a)}return r})(document.getElementById(e.id),e);let i=new o(t);i.showAt(e.position.y,e.position.x,r),i.setVisible(!0);let a=t.scene.primitives.add(i);return{detached:!0,info:a,remove:()=>{t.scene.primitives.remove(a)}}}})},12019:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ee});var i=r(8606),a=r.n(i),n=r(66410),o=r.n(n),l=r(18427),s=r(54980),h=r(17818);function u(e){this.proxy=e}function d(){}u.prototype.getURL=function(e){let{url:t,queryString:r}=function(e){let t=e,r="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),r=e.substring(e.indexOf("?")+1)),{url:t,queryString:r}}(e);return 0===t.indexOf("//")&&(t=location.protocol+t),(0,h.b)()+encodeURIComponent(t+r)},d.prototype.getURL=e=>e,a().registerType("tileprovider",(e=>{let t,[r,i]=l.Z.getLayerConfig(e.provider,e),a=s.ZP.getProxyUrl({});a&&(t=i.noCors||(0,h.$)(r));const n=i.credits,f=n?new(o().Credit)(n.text,n.imageUrl,n.link):i.attribution;return new(o().UrlTemplateImageryProvider)({url:(c=r,g=i,c.replace(/(?!(\{?[zyxs]?\}))\{*([\w_]+)*\}/g,(function(){let e=arguments[0],t=arguments[1]?arguments[1]:arguments[2],r=g[t];if(void 0===r)throw new Error("No value provided for variable "+e);return"function"==typeof r&&(r=r(g)),r}))),enablePickFeatures:!1,subdomains:i.subdomains,maximumLevel:i.maxZoom,minimumLevel:i.minZoom,credit:f,proxy:t?new u(a):new d});var c,g}));var f=r(27418),c=r.n(f),g=r(1469),p=r.n(g),m=r(18446),y=r.n(m),v=r(95555),x=r.n(v),M=r(59163),S=r(56379),w=r(28006),T=r(25999);const b=function(e){var t={};t.CRS=[{name:"CRS:84",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.GeographicTilingScheme,supportedCRS:"urn:ogc:def:crs:OGC:2:84"},{name:"EPSG:4326",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!0,tilingScheme:e.GeographicTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::4326"},{name:"EPSG:3857",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.WebMercatorTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::3857"},{name:"OSGEO:41001",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.WebMercatorTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::3857"}],t.FormatImage=[],t.FormatArray=[{format:"image/bil",postProcessArray:function(e,t,r,i,a,n){var o,l=new DataView(e),s=new ArrayBuffer(t.height*t.width*2),h=new DataView(s);if(s.byteLength===e.byteLength){for(var u,d=0;d<s.byteLength;d+=2)(u=l.getInt16(d,n)-a)>i&&u<r?h.setInt16(d,u,!0):h.setInt16(d,0,!0);o=new Int16Array(s)}return o}}],t.WMSParser={},t.TMSParser={},t.WMTSParser={},t.parser=function(r){var i;switch((r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT)).service){case"TMS":i=t.TMSParser.generate(r);break;case"WMTS":i=t.WMTSParser.generate(r);break;default:i=t.WMSParser.generate(r)}return i},t.WMSParser.generate=function(r){var i;if(r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT),e.defined(r.url)){var a=r.url,n=a.lastIndexOf("?");n>-1&&(a=a.substring(0,n));var o=a+"?SERVICE=WMS&REQUEST=GetCapabilities&tiled=true";e.defined(r.proxy)&&(o=r.proxy.getURL(o)),i=e.when(e.loadXML(o),(function(e){return t.WMSParser.getMetaDatafromXML(e,r)}))}else{if(!e.defined(r.xml))throw new e.DeveloperError("either description.url or description.xml are required.");i=t.WMSParser.getMetaDatafromXML(r.xml,r)}return i},t.WMSParser.getMetaDatafromXML=function(r,i){if(!(r instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");if(!e.defined(i.layerName))throw new e.DeveloperError("description.layerName is required.");var a={},n=i.layerName,o=void e.defaultValue(i.maxLevel,11);a.heightMapWidth=e.defaultValue(i.heightMapWidth,65),a.heightMapHeight=e.defaultValue(i.heightMapHeight,a.heightMapWidth);var l={width:65,height:65},s=void 0;a.littleEndian=i.littleEndian,a.formatImage=i.formatImage,a.formatArray=i.formatArray,a.tilingScheme=void 0;var h=void 0,u=void 0;a.ready=!1,a.levelZeroMaximumGeometricError=void 0,a.waterMask=e.defaultValue(i.waterMask,!1),"boolean"!=typeof a.waterMask&&(a.waterMask=!1),a.offset=e.defaultValue(i.offset,0),a.highest=e.defaultValue(i.highest,12e3),a.lowest=e.defaultValue(i.lowest,-500);var d=i.styleName;a.hasStyledImage=e.defaultValue(i.hasStyledImage,"string"==typeof i.styleName);var f=r.querySelector("[version]");null!==f&&(o=f.getAttribute("version"),u=/^1\.[3-9]\./.test(o));var c=r.querySelector("Request>GetMap OnlineResource").getAttribute("xlink:href"),g=c.indexOf("?");g>-1&&(c=c.substring(0,g));var p=r.querySelectorAll("Request>GetMap>Format");if(!e.defined(a.formatImage))for(var m=0;m<p.length&&!e.defined(a.formatArray);m++)(y=t.FormatArray.filter((function(e){return e.format===p[m].textContent}))).length>0&&(a.formatArray=y[0]);for(e.defined(a.formatArray)&&"string"==typeof a.formatArray.format&&"function"==typeof a.formatArray.postProcessArray?a.formatArray.terrainDataStructure={heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1}:a.formatArray=void 0,m=0;m<p.length&&!e.defined(a.formatImage);m++){var y;(y=t.FormatImage.filter((function(e){return e.format===p[m].textContent}))).length>0&&(a.formatImage=y[0])}e.defined(a.formatImage)&&"string"==typeof a.formatImage.format?a.formatImage.terrainDataStructure={heightScale:1,heightOffset:0,elementsPerHeight:2,stride:4,elementMultiplier:256,isBigEndian:!0}:a.formatImage=void 0;for(var v,x=r.querySelectorAll("Layer[queryable='1'],Layer[queryable='true']"),M=0;M<x.length&&!e.defined(v);M++)if(x[M].querySelector("Name").textContent===n){var S=(v=x[M]).getAttribute("fixedHeight"),w=v.getAttribute("fixedWidth");e.defined(S)&&(S=parseInt(S),a.heightMapHeight=S>0&&S<a.heightMapHeight?S:a.heightMapHeight,l.height=S>0?S:l.height),e.defined(w)&&(w=parseInt(w),a.heightMapWidth=w>0&&w<a.heightMapWidth?w:a.heightMapWidth,l.width=w>0?w:l.width)}if(e.defined(v)&&e.defined(o)){for(var T=!1,b=0;b<t.CRS.length&&!T;b++){var C,A,I,_,L=t.CRS[b],E=L.name,R=v.querySelector("BoundingBox[SRS='"+E+"'],BoundingBox[CRS='"+E+"']");if(null!==R)s=E,h=L.firstAxeIsLatitude,a.tilingScheme=new L.tilingScheme({ellipsoid:L.ellipsoid}),h&&u?(C=parseFloat(R.getAttribute("miny")),A=parseFloat(R.getAttribute("maxy")),I=parseFloat(R.getAttribute("minx")),_=parseFloat(R.getAttribute("maxx"))):(C=parseFloat(R.getAttribute("minx")),A=parseFloat(R.getAttribute("maxx")),I=parseFloat(R.getAttribute("miny")),_=parseFloat(R.getAttribute("maxy"))),new e.Rectangle(C,I,A,_),a.getTileDataAvailable=function(e,t,r){return!0},T=!0}if(e.defined(d)){for(var P=v.querySelectorAll("Style>Name"),W=!1,D=0;D<P.length&&!W;D++)d===P[D].textContent&&(W=!0);W||(d=void 0)}for(var q=r.querySelectorAll("VendorSpecificCapabilities>TileSet"),H=!1,O=0;O<q.length&&!H;O++){var V=null!==q[O].querySelector("BoundingBox[SRS='"+s+"'],BoundingBox[CRS='"+s+"']");q[O].querySelector("Layers").textContent===n&&V&&(l.width=parseInt(q[O].querySelector("Width").textContent),l.height=parseInt(q[O].querySelector("Height").textContent),H=!0)}a.ready=T&&(e.defined(a.formatImage)||e.defined(a.formatArray))&&e.defined(o)}if(a.ready){var k=c+"?SERVICE=WMS&REQUEST=GetMap&layers="+n+"&version="+o+"&bbox=";if(k+=u&&h?"{south},{west},{north},{east}":"{west},{south},{east},{north}",k+="&crs="+s+"&srs="+s,a.formatImage){var U=k+"&format="+a.formatImage.format+"&width="+l.width+"&height="+l.height;e.defined(d)&&(U+="&styles="+d+"&style="+d),a.URLtemplateImage=function(){return U},a.imageSize=l}if(a.formatArray){var N=k+"&format="+a.formatArray.format+"&width="+a.heightMapWidth+"&height="+a.heightMapHeight;a.URLtemplateArray=function(){return N}}}return a.proxy=i.proxy,a},t.TMSParser.generate=function(r){var i;if(r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT),e.defined(r.url))i=e.loadXML(r.url).then((function(e){return t.TMSParser.parseXML(e,r)}));else{if(!e.defined(r.xml))throw new e.DeveloperError("either description.url or description.xml are required.");i=t.TMSParser.parseXML(r.xml,r)}return i},t.TMSParser.parseXML=function(r,i){if(!(r instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");var a;if(null!=r.querySelector("TileMapService")){if(!e.defined(i.layerName))throw new e.DeveloperError("layerName is required.");var n=[].slice.apply(r.querySelectorAll("TileMap[title='"+i.layerName+"']")).map((function(r){var a=r.getAttribute("href");return e.when(e.loadXML(a),(function(e){return t.TMSParser.getMetaDatafromXML(e,i)}))}));a=e.when.all(n).then((function(t){for(var r,i=0;i<t.length&&!e.defined(r);i++)e.defined(t[i])&&(r=t[i]);return r})).then((function(e){return e}))}else a=t.TMSParser.getMetaDatafromXML(r,i);return a},t.TMSParser.getMetaDatafromXML=function(r,i){var a={ready:!1};a.heightMapWidth=e.defaultValue(i.heightMapWidth,65),a.heightMapHeight=e.defaultValue(i.heightMapHeight,a.heightMapWidth);var n=e.defaultValue(i.maxLevel,11);i.proxy,a.hasStyledImage=e.defaultValue(i.hasStyledImage,"string"==typeof i.styleName),a.waterMask=e.defaultValue(i.waterMask,!1),"boolean"!=typeof a.waterMask&&(a.waterMask=!1),a.offset=e.defaultValue(i.offset,0),a.highest=e.defaultValue(i.highest,12e3),a.lowest=e.defaultValue(i.lowest,-500);var o=r.querySelector("SRS").textContent,l=t.CRS.filter((function(e){return e.name===o}));l.length>0&&(a.tilingScheme=new l[0].tilingScheme({ellipsoid:l[0].ellipsoid}));var s=r.querySelector("TileFormat"),h=t.FormatImage.filter((function(e){return e.extension==s.getAttribute("extension")}));h.length>0&&(a.formatImage=h[0],a.imageSize={},a.imageSize.width=parseInt(s.getAttribute("width")),a.imageSize.height=parseInt(s.getAttribute("height")));var u=[].slice.call(r.querySelectorAll("TileSets>TileSet")),d=[];if(e.defined(a.formatImage)&&((d=u.map((function(e){return{url:e.getAttribute("href")+"/{x}/{tmsY}."+a.formatImage.extension,level:parseInt(e.getAttribute("order"))}}))).sort((function(e,t){return e.level-t.level})),d.length>0&&(a.tileSets=d)),e.defined(a.tileSets)&&e.defined(a.formatImage)&&e.defined(a.tilingScheme)){a.URLtemplateImage=function(e,t,r){var i="";return r<d.length&&(i=d[r].url),i};var f=r.querySelector("BoundingBox"),c=parseFloat(f.getAttribute("miny")),g=parseFloat(f.getAttribute("maxy")),p=parseFloat(f.getAttribute("minx")),m=parseFloat(f.getAttribute("maxx")),y=new e.Rectangle(p,c,m,g);a.getTileDataAvailable=function(t,r,i){var o,l,s,h,u,f,c=a.tilingScheme.tileXYToNativeRectangle(t,r,i),g=(o=y,l=c,s=Math.max(o.west,l.west),h=Math.min(o.east,l.east),u=Math.max(o.south,l.south),f=Math.min(o.north,l.north),h<=s||u>=f?void 0:new e.Rectangle(s,u,h,f));return e.defined(g)&&i<n&&i<d.length},a.ready=!0}else a=void 0;return a.proxy=i.proxy,a},t.WMTSParser.generate=function(r){var i;if(r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT),e.defined(r.url)){var a=r.url,n=a.lastIndexOf("?");n>-1&&(a=a.substring(0,n));var o=a+"?REQUEST=GetCapabilities";e.defined(r.proxy)&&(o=r.proxy.getURL(o)),i=e.loadXML(o).then((function(e){return t.WMTSParser.getMetaDatafromXML(e,r)}))}else{if(!e.defined(r.xml))throw new e.DeveloperError("either description.url or description.xml are required.");i=t.WMTSParser.getMetaDatafromXML(r.xml,r)}return i},t.WMTSParser.getMetaDatafromXML=function(r,i){if(!(r instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");var a={},n=i.layerName;a.ready=!1,a.heightMapWidth=e.defaultValue(i.heightMapWidth,65),a.heightMapHeight=e.defaultValue(i.heightMapHeight,a.heightMapWidth);var o,l=e.defaultValue(i.maxLevel,12),s=(i.proxy,i.styleName);a.hasStyledImage=e.defaultValue(i.hasStyledImage,"string"==typeof i.styleName),a.waterMask=e.defaultValue(i.waterMask,!1),"boolean"!=typeof a.waterMask&&(a.waterMask=!1),a.offset=e.defaultValue(i.offset,0),a.highest=e.defaultValue(i.highest,12e3),a.lowest=e.defaultValue(i.lowest,-500);for(var h,u,d,f=[],c=[].slice.call(r.querySelectorAll('Operation[name="GetTile"] HTTP Get')).map((function(e){var t,r=e.querySelector("Value").textContent;return"KVP"===r&&(t={node:e,type:"KVP"}),"RESTful"===r&&(t={node:e,type:"RESTful"}),t})).filter((function(t){return e.defined(t)})),g=0;g<c.length;g++){var p=c[g];"RESTful"!==p.type||e.defined(u)||(u=p.node.getAttribute("xlink:href")),"KVP"!==p.type||e.defined(h)||(h=p.node.getAttribute("xlink:href"))}var m,y=r.querySelectorAll("Contents>Layer>Identifier");for(g=0;g<y.length&&!e.defined(m);g++)n===y[g].textContent&&(m=y[g].parentNode);if(e.defined(m)){var v,x,M=m.querySelectorAll("Style");for(g=0;g<M.length;g++){var S=M[g].querySelector("Identifier").textContent;null!=M[g].getAttribute("isDefault")&&(v=S),S===s&&(x=S)}e.defined(s)&&s==x||(s=e.defaultValue(v,""));for(var w=[].slice.call(m.querySelectorAll("Format")),T=0;T<t.FormatImage.length&&!e.defined(d);T++)w.filter((function(e){return e.textContent===t.FormatImage[T].format})).length>0&&(d=t.FormatImage[T]);f=m.querySelectorAll("TileMatrixSetLink")}for(var b=[].slice.call(r.querySelectorAll("TileMatrixSet>Identifier")),C=0;C<f.length&&!a.ready;C++){var A,I,_=f[C],L=_.querySelector("TileMatrixSet").textContent;for(g=0;g<b.length&&!e.defined(A);g++)b[g].textContent===L&&(A=b[g].parentNode);for(var E=A.querySelector("SupportedCRS").textContent,R=0;R<t.CRS.length&&!e.defined(I);R++)t.CRS[R].SupportedCRS===E&&(I=t.CRS[R]);if(e.defined(I)){var P,W=[].slice.call(A.querySelectorAll("TileMatrix"));(P=W.map((function(e){var t=e.querySelector("Identifier").textContent,r=parseInt(e.querySelector("MatrixWidth").textContent),i=parseInt(e.querySelector("MatrixHeight").textContent),a=parseInt(e.querySelector("TileWidth").textContent),n=parseInt(e.querySelector("TileHeight").textContent);return{id:t,maxWidth:r,maxHeight:i,scaleDenominator:parseFloat(e.querySelector("ScaleDenominator").textContent),complete:!1,tileWidth:a,tileHeight:n}}))).sort((function(e,t){return t.scaleDenominator-e.scaleDenominator})),listTileMatrixLimits=_.querySelectorAll("TileMatrixSetLimits>TileMatrixLimits");for(var D=0;D<P.length;D++)for(var q=P[D],H=0;H<listTileMatrixLimits.length;H++){var O=listTileMatrixLimits[H];q.id===O.querySelector("TileMatrix").textContent&&(q.minTileRow=parseInt(O.querySelector("MinTileRow").textContent),q.maxTileRow=parseInt(O.querySelector("MaxTileRow").textContent),q.minTileCol=parseInt(O.querySelector("MinTileCol").textContent),q.maxTileCol=parseInt(O.querySelector("MaxTileCol").textContent),q.complete=!0,P[D]=q)}if(P.length>0){a.tilingScheme=new I.tilingScheme({ellipsoid:I.ellipsoid,numberOfLevelZeroTilesX:P[0].maxWidth,numberOfLevelZeroTilesY:P[0].maxHeight});var V=m.querySelector("ResourceURL[format='"+d.format+"']");if(null!=V?o=V.getAttribute("template").replace("{TileRow}","{y}").replace("{TileCol}","{x}").replace("{Style}",s).replace("{TileMatrixSet}",L).replace("{layer}",n).replace("{infoFormatExtension}",d.extension):e.defined(h)&&(o=h+"service=WMTS&request=GetTile&version=1.0.0&layer="+n+"&style=&"+s+"format="+d.format+"&TileMatrixSet="+L+"&TileMatrix={TileMatrix}&TileRow={y}&TileCol={x}"),e.defined(o)){a.getTileDataAvailable=function(e,t,r){var i=!1;if(r<l&&r<P.length){var a=P[r];i=a.complete?t<=a.maxTileRow&&t>=a.minTileRow&&e<=a.maxTileCol&&e>=a.minTileCol:e<a.maxWidth&&t<a.maxHeight}return i},a.URLtemplateImage=function(e,t,r){var i="";if(a.getTileDataAvailable(e,t,r)){var n=P[r];i=o.replace("{TileMatrix}",n.id)}return i};var k={width:P[0].tileWidth,height:P[0].tileHeight};0==P.filter((function(e){return e.tileWidth!=k.width||e.tileHeight!=k.height})).length&&(a.imageSize=k),a.ready=!0}}}}return a.proxy=i.proxy,a};var r=function(n){if(!e.defined(n))throw new e.DeveloperError("description is required.");var o,l,s=new e.Event,h=n.credit;"string"==typeof h&&(h=new e.Credit(h)),this.ready=!1,e.defineProperties(this,{errorEvent:{get:function(){return s}},credit:{get:function(){return h}},hasVertexNormals:{get:function(){return!1}}}),o=t.parser(n),l=this,e.when(o,(function(t){e.defined(t)&&t.ready&&(t.levelZeroMaximumGeometricError=e.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(t.tilingScheme.ellipsoid,t.heightMapWidth,t.tilingScheme.getNumberOfXTilesAtLevel(0)),e.defined(t.URLtemplateImage)&&(t.getHeightmapTerrainDataImage=function(n,o,s){var h;if(!isNaN(n+o+s)){var u=i(t.URLtemplateImage(n,o,s),n,o,s,l),d={highest:t.highest,lowest:t.lowest,offset:t.offset},f=t.proxy||{getURL:e=>e},c=a(n,o,s,l),g=e.throttleRequestByServer(f.getURL(u),e.loadImage);e.defined(g)&&(h=e.when(g,(function(e){return r.imageToHeightmapTerrainData(e,d,{width:t.heightMapWidth,height:t.heightMapHeight},t.waterMask,c,t.hasStyledImage)})).otherwise((function(){return new e.HeightmapTerrainData({buffer:new Uint16Array(t.heightMapWidth*t.heightMapHeight),width:t.heightMapWidth,height:t.heightMapHeight,childTileMask:c,waterMask:new Uint8Array(t.heightMapWidth*t.heightMapHeight),structure:t.formatImage.terrainDataStructure})})))}return h}),e.defined(t.URLtemplateArray)&&(t.getHeightmapTerrainDataArray=function(n,o,s){var h;if(!isNaN(n+o+s)){var u=i(t.URLtemplateArray(n,o,s),n,o,s,l),d={highest:t.highest,lowest:t.lowest,offset:t.offset},f=a(n,o,s,l),c=t.proxy||{getURL:e=>e},g=e.throttleRequestByServer(c.getURL(u),e.loadArrayBuffer);e.defined(g)&&(h=e.when(g,(function(e){return r.arrayToHeightmapTerrainData(e,d,{width:t.heightMapWidth,height:t.heightMapHeight},t.formatArray,t.waterMask,t.littleEndian,f)})).otherwise((function(){return e.defined(t.getHeightmapTerrainDataImage)?t.getHeightmapTerrainDataImage(n,o,s):new e.HeightmapTerrainData({buffer:new Uint16Array(t.heightMapWidth*t.heightMapHeight),width:t.heightMapWidth,height:t.heightMapHeight,childTileMask:f,waterMask:new Uint8Array(t.heightMapWidth*t.heightMapHeight),structure:t.formatImage.terrainDataStructure})})))}return h}),l.getLevelMaximumGeometricError=function(e){return t.levelZeroMaximumGeometricError/(1<<e)},l.requestTileGeometry=function(r,i,a){var n;return e.defined(t.getHeightmapTerrainDataArray)?n=t.getHeightmapTerrainDataArray(r,i,a):e.defined(t.getHeightmapTerrainDataImage)&&(n=t.getHeightmapTerrainDataImage(r,i,a)),n},e.defineProperties(l,{tilingScheme:{get:function(){return t.tilingScheme}},ready:{get:function(){return t.ready}},hasWaterMask:{get:function(){return t.waterMask}},heightMapHeight:{get:function(){return t.heightMapHeight}},heightMapWidth:{get:function(){return t.heightMapWidth}},getTileDataAvailable:{get:function(){return t.getTileDataAvailable}}}))}))};function i(e,t,r,i,a,{getURL:n=(e=>e)}={}){var o=a.tilingScheme.tileXYToNativeRectangle(t,r,i),l=(o.east-o.west)/(a.heightMapWidth-1),s=(o.north-o.south)/(a.heightMapHeight-1);o.west-=.5*l,o.east+=.5*l,o.south-=.5*s,o.north+=.5*s;var h=a.tilingScheme.getNumberOfYTilesAtLevel(i)-r-1;return e.replace("{south}",o.south).replace("{north}",o.north).replace("{west}",o.west).replace("{east}",o.east).replace("{x}",t).replace("{y}",r).replace("{tmsY}",h)}function a(e,t,r,i){var a=0,n=r+1;return a|=i.getTileDataAvailable(2*e,2*t,n)?1:0,a|=i.getTileDataAvailable(2*e+1,2*t,n)?2:0,(a|=i.getTileDataAvailable(2*e,2*t+1,n)?4:0)|(i.getTileDataAvailable(2*e+1,2*t+1,n)?8:0)}return r.arrayToHeightmapTerrainData=function(t,r,i,a,n,o,l){"number"==typeof i&&(i={width:i,height:i});var s=a.postProcessArray(t,i,r.highest,r.lowest,r.offset,o);if(!e.defined(s))throw new e.DeveloperError("no good size");var h={buffer:s,width:i.width,height:i.height,childTileMask:l,structure:a.terrainDataStructure};if(n){for(var u=new Uint8Array(s.length),d=0;d<s.length;d++)s[d]<=0&&(u[d]=255);h.waterMask=u}return new e.HeightmapTerrainData(h)},r.imageToHeightmapTerrainData=function(t,r,i,a,n,o){"number"==typeof i&&(i={width:i,height:i});for(var l=e.getImagePixels(t,i.width,i.height),s=new Uint8Array(l.length/4),h=new Int16Array(l.length/4),u=0,d=0,f=0;f<l.length;f+=4){var c=l[f],g=l[f+1],p=l[f+2]>128,m=(c<<8|g)-r.offset-32768;m>r.lowest&&m<r.highest&&(p||o)?(h[f/4]=m,d+=m,u++):h[f/4]=0==u?0:d/u}var y={buffer:h,width:i.width,height:i.height,childTileMask:n,structure:{heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1}};if(a){for(s=new Uint8Array(heightBuffer.length),f=0;f<heightBuffer.length;f++)heightBuffer[f]<=0&&(s[f]=255);y.waterMask=s}return new e.HeightmapTerrainData(y)},r}(o());function C(e){let t=e,r="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),r=e.substring(e.indexOf("?")+1)),{url:t,queryString:r}}function A(e){this.proxy=e}function I(){}function _(e){return Object.keys(e).map((t=>t+"="+encodeURIComponent(e[t]))).join("&")}A.prototype.getURL=function(e){let{url:t,queryString:r}=C(e);return(0,h.b)()+encodeURIComponent(t+r)},I.prototype.getURL=function(e){let{url:t,queryString:r}=C(e);return t+r};const L=e=>{let t;return e.useForElevation?new b(function(e){let t,r=e.url,i=s.ZP.getProxyUrl({});return i&&(t=e.noCors||(0,h.$)(r)),c()({url:r,proxy:t?new A(i):new I,littleEndian:e.littleendian||!1,layerName:e.name})}(e)):(t=e.singleTile?new(o().SingleTileImageryProvider)(function(e){const t=void 0!==e.opacity?e.opacity:1,r=(0,S.v)(e),i=c()({styles:e.style||"",format:((0,T.z)(e.format)?"image/png":e.format)||"image/png",transparent:void 0===e.transparent||e.transparent,opacity:t,tiled:void 0===e.tiled||e.tiled,layers:e.name,width:e.size||2e3,height:e.size||2e3,bbox:"-180.0,-90,180.0,90",srs:"EPSG:4326"},r||{},(0,M.QW)(e));return{url:(p()(e.url)?e.url[Math.round(Math.random()*(e.url.length-1))]:e.url)+"?service=WMS&version=1.1.0&request=GetMap&"+_((0,w.addAuthenticationToSLD)(i,e))}}(e)):new(o().WebMapServiceImageryProvider)(function(e){var t=void 0!==e.opacity?e.opacity:1;const r=(0,S.v)(e);let i,a=s.ZP.getProxyUrl({});a&&(i=(0,h.$)(e.url)&&a);const n=e.credits,l=n?new(o().Credit)(n.text||n.title,n.imageUrl,n.link):e.attribution;return c()({url:"{s}",credit:l,subdomains:(0,M.D$)(p()(e.url)?e.url:[e.url]),proxy:i&&new A(i)||new I,layers:e.name,enablePickFeatures:!1,parameters:c()({styles:e.style||"",format:((0,T.z)(e.format)?"image/png":e.format)||"image/png",transparent:void 0===e.transparent||e.transparent,opacity:t,tiled:void 0===e.tiled||e.tiled,width:e.tileSize||256,height:e.tileSize||256},c()({},e._v_?{_v_:e._v_}:{},r||{},(0,M.QW)(e)))})}(e)),t.updateParams=t=>{const r=c()({},e,{params:c()({},e.params||{},t)});return L(r)},t)};a().registerType("wms",{create:L,update:(e,t,r)=>{const i=t&&t.params,a=r&&r.params,n={...i,...a};return Object.keys({...t,...r,...n}).filter((e=>x().PARAM_OPTIONS.indexOf(e.toLowerCase())>=0)).filter((e=>{const n=void 0===r[e]?a&&a[e]:r[e],o=void 0===t[e]?i&&i[e]:t[e];return!y()(n,o)})).length>0||t.securityToken!==r.securityToken||!y()(t.layerFilter,r.layerFilter)||t.tileSize!==r.tileSize?L(t):null}});var E=r(14640),R=r(13218),P=r.n(R),W=r(12571),D=r.n(W),q=r(27361),H=r.n(q),O=r(91175),V=r.n(O),k=r(8575);function U(e){let t=e,r="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),r=e.substring(e.indexOf("?")+1)),{url:t,queryString:r}}function N(e){this.proxy=e}function G(){}N.prototype.getURL=function(e){let{url:t,queryString:r}=U(e);return(0,h.b)()+encodeURIComponent(t+r)},G.prototype.getURL=function(e){let{url:t,queryString:r}=U(e);return t+r};const F=e=>e.indexOf("EPSG:4326")>=0?new(o().GeographicTilingScheme):e.indexOf("EPSG:3857")>=0?new(o().WebMercatorTilingScheme):null,B=(e,t)=>{const r=E.C2(e.tileMatrixSet,t,e.allowedSRS,e.matrixIds);var i,a;return{tileMatrixSet:r,matrixIds:(i=e.matrixIds&&function(e=[],t){return(P()(e)&&e[t]||p()(e)&&e||[]).map((e=>e.identifier))}(e.matrixIds,r)||function(e){let t=new Array(30);for(let r=0;r<30;++r)t[r]=e.tileMatrixPrefix+r;return t}(e)).length>a?D()(i,0,a):i.length<a?i.concat(new Array(a-i.length)):i}};const X=e=>{let t;const r=function(e){let t="EPSG:4326",{tileMatrixSet:r,matrixIds:i}=B(e,t);if(0===i.length){t="EPSG:3857";const a=B(e,t);r=a.tileMatrixSet,i=a.matrixIds}let a,n=s.ZP.getProxyUrl({});n&&(a=(0,h.$)(e.url)&&n);const o=(l=e.matrixIds&&e.matrixIds[r],(e,t,r)=>l&&l[r]&&!l[r].ranges||e<=parseInt(H()(l[r],"ranges.cols.max"),10)&&e>=parseInt(H()(l[r],"ranges.cols.min"),10)&&t<=parseInt(H()(l[r],"ranges.rows.max"),10)&&t>=parseInt(H()(l[r],"ranges.rows.min"),10));var l;const u=k.format({query:{...(0,M.QW)(e)}});return c()({url:V()((0,M.D$)(p()(e.url)?e.url:[e.url],u)),format:((0,T.z)(e.format)?"image/png":e.format)||"image/png",isValid:o,layer:e.name,style:e.style||"",tileMatrixLabels:i,tilingScheme:F(t,e.matrixIds[r]),proxy:a&&new N(a)||new G,enablePickFeatures:!1,tileWidth:e.tileWidth||e.tileSize||256,tileHeight:e.tileHeight||e.tileSize||256,tileMatrixSetID:r,maximumLevel:30,parameters:{...(0,M.QW)(e)}})}(e);t=new(o().WebMapTileServiceImageryProvider)(r);const i=t.requestImage;return t.requestImage=(e,a,n)=>r.isValid(e,a,n)?i.bind(t)(e,a,n):new Promise((()=>{})),t.updateParams=t=>{const r=c()({},e,{params:c()({},e.params||{},t)});return X(r)},t};a().registerType("wmts",{create:X,update:(e,t,r)=>t.securityToken!==r.securityToken||r.format!==t.format?X(t):null}),a().registerType("marker",{create:(e,t)=>{const r=c()({},{point:{pixelSize:5,color:o().Color.RED,outlineColor:o().Color.WHITE,outlineWidth:2}},e.style),i=t.entities.add(c()({position:o().Cartesian3.fromDegrees(e.point.lng,e.point.lat)},r));return{detached:!0,point:i,remove:()=>{t.entities.remove(i)}}},update:function(e,t,r,i){return y()(t.point,r.point)?null:(e.remove(),this.create(t,i))}});var z=r(582),Z=r.n(z),j=r(54223),Y=r.n(j),Q=r(21759),$=r.n(Q),J=r(47881),K=r.n(J);const ee={BingLayer:Z(),OSMLayer:$(),GraticuleLayer:Y(),OverlayLayer:K()}},66410:e=>{e.exports=window.Cesium},17818:(e,t,r)=>{"use strict";r.d(t,{$:()=>s,b:()=>h});var i=r(54980),a=r(1469),n=r.n(a),o=r(13218),l=r.n(o);const s=function(e,t={}){if(n()(e))return e.reduce(((e,t)=>s(t)&&e),!0);let r=!1,a=!(0===e.indexOf("http")),o=!a&&e.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(o){let e=window.location;a=o[1]===e.protocol&&o[3]===e.hostname;let t=o[4],r=e.port;(80!==t&&""!==t||"80"!==r&&""!==r)&&(a=a&&t===r)}if(!a){let a=i.ZP.getProxyUrl(t);if(a){let t=[];l()(a)&&(t=a.useCORS||[],a=a.url),t.reduce(((t,r)=>t||0===e.indexOf(r)),!1)||(r=!0)}}return r},h=function(e={}){let t=i.ZP.getProxyUrl(e);return t&&l()(t)&&(t=t.url),t}},18427:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var i=r(35937),a=r.n(i),n=r(37114),o=r(54980);const l={getLayerConfig:function(e,t){var r=n.Z;let i,l,s,h;if("custom"===e)i=t;else if(h=e.split("."),s=h[0],l=h[1],i=r[s],!i)throw new Error("No such provider ("+s+")");let u={url:i.url,options:i.options||{}};if(l&&"variants"in i){if(!(l in i.variants))throw new Error("No such variant of "+(s||i.url)+" ("+l+")");let e,t=i.variants[l];e="string"==typeof t?{variant:t}:t.options,u={url:t.url||u.url,options:{...u.options||{},...e}}}else"function"==typeof u.url&&(u.url=u.url(h.splice(1,h.length-1).join(".")));let d="file:"===window.location.protocol||u.options.forceHTTP;0===u.url.indexOf("//")&&d&&(u.url="http:"+u.url),u.options.retina&&(t.detectRetina&&o.ZP.getBrowserProperties().retina?t.detectRetina=!1:u.options.retina="");let f=function(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,t){return f(r[t].options.attribution)}))};u.options.attribution&&(u.options.attribution=f(u.options.attribution));let c={...u.options,...a()(t,(e=>void 0!==e))};return[u.url,c]}}},25999:(e,t,r)=>{"use strict";r.d(t,{z:()=>a});const i=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],a=e=>-1!==i.indexOf(e)},95555:e=>{e.exports={PARAM_OPTIONS:["layers","styles","style","format","transparent","version","tiled","opacity","zindex","srs","singletile","_v_","filterobj"]}},98143:function(e,t,r){var i,a;void 0===(a="function"==typeof(i=function(){function e(e,t){return function(r,i,a,n){r[e]?r[e](i,a,n):r[t]&&r[t]("on"+i,a)}}return{add:e("addEventListener","attachEvent"),remove:e("removeEventListener","detachEvent")}})?i.call(t,r,t,e):i)||(e.exports=a)}}]);
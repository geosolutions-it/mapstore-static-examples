(self.webpackChunkstatic_map=self.webpackChunkstatic_map||[]).push([[671],{16671:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>$});var r=i(8606),n=i(76180),a=i(18427),o=i(54980),l=i(17818);function s(e){this.proxy=e}function h(){}s.prototype.getURL=function(e){let{url:t,queryString:i}=function(e){let t=e,i="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),i=e.substring(e.indexOf("?")+1)),{url:t,queryString:i}}(e);return 0===t.indexOf("//")&&(t=location.protocol+t),(0,l.b)()+encodeURIComponent(t+i)},h.prototype.getURL=e=>e,r.default.registerType("tileprovider",(e=>{let t,[i,r]=a.Z.getLayerConfig(e.provider,e),u=o.ZP.getProxyUrl({});u&&(t=r.noCors||(0,l.$)(i));const c=r.credits,d=c?new n.Credit(c.text,c.imageUrl,c.link):r.attribution;return new n.UrlTemplateImageryProvider({url:(f=i,g=r,f.replace(/(?!(\{?[zyxs]?\}))\{*([\w_]+)*\}/g,(function(){let e=arguments[0],t=arguments[1]?arguments[1]:arguments[2],i=g[t];if(void 0===i)throw new Error("No value provided for variable "+e);return"function"==typeof i&&(i=i(g)),i}))),enablePickFeatures:!1,subdomains:r.subdomains,maximumLevel:r.maxZoom,minimumLevel:r.minZoom,credit:d,proxy:t?new s(u):new h});var f,g}));var u=i(27418),c=i.n(u),d=i(1469),f=i.n(d),g=i(18446),p=i.n(g),m=i(95555),y=i.n(m),v=i(59163),S=i(56379),x=i(28006),M=i(25999);const w=function(e){var t={};t.CRS=[{name:"CRS:84",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.GeographicTilingScheme,supportedCRS:"urn:ogc:def:crs:OGC:2:84"},{name:"EPSG:4326",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!0,tilingScheme:e.GeographicTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::4326"},{name:"EPSG:3857",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.WebMercatorTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::3857"},{name:"OSGEO:41001",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.WebMercatorTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::3857"}],t.FormatImage=[],t.FormatArray=[{format:"image/bil",postProcessArray:function(e,t,i,r,n,a){var o,l=new DataView(e),s=new ArrayBuffer(t.height*t.width*2),h=new DataView(s);if(s.byteLength===e.byteLength){for(var u,c=0;c<s.byteLength;c+=2)(u=l.getInt16(c,a)-n)>r&&u<i?h.setInt16(c,u,!0):h.setInt16(c,0,!0);o=new Int16Array(s)}return o}}],t.WMSParser={},t.TMSParser={},t.WMTSParser={},t.parser=function(i){var r;switch((i=e.defaultValue(i,e.defaultValue.EMPTY_OBJECT)).service){case"TMS":r=t.TMSParser.generate(i);break;case"WMTS":r=t.WMTSParser.generate(i);break;default:r=t.WMSParser.generate(i)}return r},t.WMSParser.generate=function(i){var r;if(i=e.defaultValue(i,e.defaultValue.EMPTY_OBJECT),e.defined(i.url)){var n=i.url,a=n._url+"?SERVICE=WMS&REQUEST=GetCapabilities&tiled=true";e.defined(n.proxy)&&(a=n.proxy.getURL(a)),r=e.when(e.Resource.fetchXML(a),(function(e){return t.WMSParser.getMetaDatafromXML(e,i)}))}else{if(!e.defined(i.xml))throw new e.DeveloperError("either description.url or description.xml are required.");r=t.WMSParser.getMetaDatafromXML(i.xml,i)}return r},t.WMSParser.getMetaDatafromXML=function(i,r){if(!(i instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");if(!e.defined(r.layerName))throw new e.DeveloperError("description.layerName is required.");var n={},a=r.layerName,o=void e.defaultValue(r.maxLevel,11);n.heightMapWidth=e.defaultValue(r.heightMapWidth,65),n.heightMapHeight=e.defaultValue(r.heightMapHeight,n.heightMapWidth);var l={width:65,height:65},s=void 0;n.littleEndian=r.littleEndian,n.formatImage=r.formatImage,n.formatArray=r.formatArray,n.tilingScheme=void 0;var h=void 0,u=void 0;n.ready=!1,n.levelZeroMaximumGeometricError=void 0,n.waterMask=e.defaultValue(r.waterMask,!1),"boolean"!=typeof n.waterMask&&(n.waterMask=!1),n.offset=e.defaultValue(r.offset,0),n.highest=e.defaultValue(r.highest,12e3),n.lowest=e.defaultValue(r.lowest,-500);var c=r.styleName;n.hasStyledImage=e.defaultValue(r.hasStyledImage,"string"==typeof r.styleName);var d=i.querySelector("[version]");null!==d&&(o=d.getAttribute("version"),u=/^1\.[3-9]\./.test(o));var f=i.querySelector("Request>GetMap OnlineResource").getAttribute("xlink:href"),g=f.indexOf("?");g>-1&&(f=f.substring(0,g));var p=i.querySelectorAll("Request>GetMap>Format");if(!e.defined(n.formatImage))for(var m=0;m<p.length&&!e.defined(n.formatArray);m++)(y=t.FormatArray.filter((function(e){return e.format===p[m].textContent}))).length>0&&(n.formatArray=y[0]);for(e.defined(n.formatArray)&&"string"==typeof n.formatArray.format&&"function"==typeof n.formatArray.postProcessArray?n.formatArray.terrainDataStructure={heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1}:n.formatArray=void 0,m=0;m<p.length&&!e.defined(n.formatImage);m++){var y;(y=t.FormatImage.filter((function(e){return e.format===p[m].textContent}))).length>0&&(n.formatImage=y[0])}e.defined(n.formatImage)&&"string"==typeof n.formatImage.format?n.formatImage.terrainDataStructure={heightScale:1,heightOffset:0,elementsPerHeight:2,stride:4,elementMultiplier:256,isBigEndian:!0}:n.formatImage=void 0;for(var v,S=i.querySelectorAll("Layer[queryable='1'],Layer[queryable='true']"),x=0;x<S.length&&!e.defined(v);x++)if(S[x].querySelector("Name").textContent===a){var M=(v=S[x]).getAttribute("fixedHeight"),w=v.getAttribute("fixedWidth");e.defined(M)&&(M=parseInt(M),n.heightMapHeight=M>0&&M<n.heightMapHeight?M:n.heightMapHeight,l.height=M>0?M:l.height),e.defined(w)&&(w=parseInt(w),n.heightMapWidth=w>0&&w<n.heightMapWidth?w:n.heightMapWidth,l.width=w>0?w:l.width)}if(e.defined(v)&&e.defined(o)){for(var T=!1,b=0;b<t.CRS.length&&!T;b++){var C,_,A,I,R=t.CRS[b],P=R.name,L=v.querySelector("BoundingBox[SRS='"+P+"'],BoundingBox[CRS='"+P+"']");if(null!==L)s=P,h=R.firstAxeIsLatitude,n.tilingScheme=new R.tilingScheme({ellipsoid:R.ellipsoid}),h&&u?(C=parseFloat(L.getAttribute("miny")),_=parseFloat(L.getAttribute("maxy")),A=parseFloat(L.getAttribute("minx")),I=parseFloat(L.getAttribute("maxx"))):(C=parseFloat(L.getAttribute("minx")),_=parseFloat(L.getAttribute("maxx")),A=parseFloat(L.getAttribute("miny")),I=parseFloat(L.getAttribute("maxy"))),new e.Rectangle(C,A,_,I),n.getTileDataAvailable=function(e,t,i){return!0},T=!0}if(e.defined(c)){for(var E=v.querySelectorAll("Style>Name"),W=!1,D=0;D<E.length&&!W;D++)c===E[D].textContent&&(W=!0);W||(c=void 0)}for(var q=i.querySelectorAll("VendorSpecificCapabilities>TileSet"),H=!1,V=0;V<q.length&&!H;V++){var O=null!==q[V].querySelector("BoundingBox[SRS='"+s+"'],BoundingBox[CRS='"+s+"']");q[V].querySelector("Layers").textContent===a&&O&&(l.width=parseInt(q[V].querySelector("Width").textContent),l.height=parseInt(q[V].querySelector("Height").textContent),H=!0)}n.ready=T&&(e.defined(n.formatImage)||e.defined(n.formatArray))&&e.defined(o)}if(n.ready){var k=f+"?SERVICE=WMS&REQUEST=GetMap&layers="+a+"&version="+o+"&bbox=";if(k+=u&&h?"{south},{west},{north},{east}":"{west},{south},{east},{north}",k+="&crs="+s+"&srs="+s,n.formatImage){var U=k+"&format="+n.formatImage.format+"&width="+l.width+"&height="+l.height;e.defined(c)&&(U+="&styles="+c+"&style="+c),n.URLtemplateImage=function(){return U},n.imageSize=l}if(n.formatArray){var N=k+"&format="+n.formatArray.format+"&width="+n.heightMapWidth+"&height="+n.heightMapHeight;n.URLtemplateArray=function(){return N}}}return n.proxy=r.proxy,n},t.TMSParser.generate=function(i){var r;if(i=e.defaultValue(i,e.defaultValue.EMPTY_OBJECT),e.defined(i.url))r=e.loadXML(i.url).then((function(e){return t.TMSParser.parseXML(e,i)}));else{if(!e.defined(i.xml))throw new e.DeveloperError("either description.url or description.xml are required.");r=t.TMSParser.parseXML(i.xml,i)}return r},t.TMSParser.parseXML=function(i,r){if(!(i instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");var n;if(null!=i.querySelector("TileMapService")){if(!e.defined(r.layerName))throw new e.DeveloperError("layerName is required.");var a=[].slice.apply(i.querySelectorAll("TileMap[title='"+r.layerName+"']")).map((function(i){var n=i.getAttribute("href");return e.when(e.loadXML(n),(function(e){return t.TMSParser.getMetaDatafromXML(e,r)}))}));n=e.when.all(a).then((function(t){for(var i,r=0;r<t.length&&!e.defined(i);r++)e.defined(t[r])&&(i=t[r]);return i})).then((function(e){return e}))}else n=t.TMSParser.getMetaDatafromXML(i,r);return n},t.TMSParser.getMetaDatafromXML=function(i,r){var n={ready:!1};n.heightMapWidth=e.defaultValue(r.heightMapWidth,65),n.heightMapHeight=e.defaultValue(r.heightMapHeight,n.heightMapWidth);var a=e.defaultValue(r.maxLevel,11);r.proxy,n.hasStyledImage=e.defaultValue(r.hasStyledImage,"string"==typeof r.styleName),n.waterMask=e.defaultValue(r.waterMask,!1),"boolean"!=typeof n.waterMask&&(n.waterMask=!1),n.offset=e.defaultValue(r.offset,0),n.highest=e.defaultValue(r.highest,12e3),n.lowest=e.defaultValue(r.lowest,-500);var o=i.querySelector("SRS").textContent,l=t.CRS.filter((function(e){return e.name===o}));l.length>0&&(n.tilingScheme=new l[0].tilingScheme({ellipsoid:l[0].ellipsoid}));var s=i.querySelector("TileFormat"),h=t.FormatImage.filter((function(e){return e.extension==s.getAttribute("extension")}));h.length>0&&(n.formatImage=h[0],n.imageSize={},n.imageSize.width=parseInt(s.getAttribute("width")),n.imageSize.height=parseInt(s.getAttribute("height")));var u=[].slice.call(i.querySelectorAll("TileSets>TileSet")),c=[];if(e.defined(n.formatImage)&&((c=u.map((function(e){return{url:e.getAttribute("href")+"/{x}/{tmsY}."+n.formatImage.extension,level:parseInt(e.getAttribute("order"))}}))).sort((function(e,t){return e.level-t.level})),c.length>0&&(n.tileSets=c)),e.defined(n.tileSets)&&e.defined(n.formatImage)&&e.defined(n.tilingScheme)){n.URLtemplateImage=function(e,t,i){var r="";return i<c.length&&(r=c[i].url),r};var d=i.querySelector("BoundingBox"),f=parseFloat(d.getAttribute("miny")),g=parseFloat(d.getAttribute("maxy")),p=parseFloat(d.getAttribute("minx")),m=parseFloat(d.getAttribute("maxx")),y=new e.Rectangle(p,f,m,g);n.getTileDataAvailable=function(t,i,r){var o,l,s,h,u,d,f=n.tilingScheme.tileXYToNativeRectangle(t,i,r),g=(o=y,l=f,s=Math.max(o.west,l.west),h=Math.min(o.east,l.east),u=Math.max(o.south,l.south),d=Math.min(o.north,l.north),h<=s||u>=d?void 0:new e.Rectangle(s,u,h,d));return e.defined(g)&&r<a&&r<c.length},n.ready=!0}else n=void 0;return n.proxy=r.proxy,n},t.WMTSParser.generate=function(i){var r;if(i=e.defaultValue(i,e.defaultValue.EMPTY_OBJECT),e.defined(i.url)){var n=i.url,a=n.lastIndexOf("?");a>-1&&(n=n.substring(0,a));var o=n+"?REQUEST=GetCapabilities";e.defined(i.proxy)&&(o=i.proxy.getURL(o)),r=e.loadXML(o).then((function(e){return t.WMTSParser.getMetaDatafromXML(e,i)}))}else{if(!e.defined(i.xml))throw new e.DeveloperError("either description.url or description.xml are required.");r=t.WMTSParser.getMetaDatafromXML(i.xml,i)}return r},t.WMTSParser.getMetaDatafromXML=function(i,r){if(!(i instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");var n={},a=r.layerName;n.ready=!1,n.heightMapWidth=e.defaultValue(r.heightMapWidth,65),n.heightMapHeight=e.defaultValue(r.heightMapHeight,n.heightMapWidth);var o,l=e.defaultValue(r.maxLevel,12),s=(r.proxy,r.styleName);n.hasStyledImage=e.defaultValue(r.hasStyledImage,"string"==typeof r.styleName),n.waterMask=e.defaultValue(r.waterMask,!1),"boolean"!=typeof n.waterMask&&(n.waterMask=!1),n.offset=e.defaultValue(r.offset,0),n.highest=e.defaultValue(r.highest,12e3),n.lowest=e.defaultValue(r.lowest,-500);for(var h,u,c,d=[],f=[].slice.call(i.querySelectorAll('Operation[name="GetTile"] HTTP Get')).map((function(e){var t,i=e.querySelector("Value").textContent;return"KVP"===i&&(t={node:e,type:"KVP"}),"RESTful"===i&&(t={node:e,type:"RESTful"}),t})).filter((function(t){return e.defined(t)})),g=0;g<f.length;g++){var p=f[g];"RESTful"!==p.type||e.defined(u)||(u=p.node.getAttribute("xlink:href")),"KVP"!==p.type||e.defined(h)||(h=p.node.getAttribute("xlink:href"))}var m,y=i.querySelectorAll("Contents>Layer>Identifier");for(g=0;g<y.length&&!e.defined(m);g++)a===y[g].textContent&&(m=y[g].parentNode);if(e.defined(m)){var v,S,x=m.querySelectorAll("Style");for(g=0;g<x.length;g++){var M=x[g].querySelector("Identifier").textContent;null!=x[g].getAttribute("isDefault")&&(v=M),M===s&&(S=M)}e.defined(s)&&s==S||(s=e.defaultValue(v,""));for(var w=[].slice.call(m.querySelectorAll("Format")),T=0;T<t.FormatImage.length&&!e.defined(c);T++)w.filter((function(e){return e.textContent===t.FormatImage[T].format})).length>0&&(c=t.FormatImage[T]);d=m.querySelectorAll("TileMatrixSetLink")}for(var b=[].slice.call(i.querySelectorAll("TileMatrixSet>Identifier")),C=0;C<d.length&&!n.ready;C++){var _,A,I=d[C],R=I.querySelector("TileMatrixSet").textContent;for(g=0;g<b.length&&!e.defined(_);g++)b[g].textContent===R&&(_=b[g].parentNode);for(var P=_.querySelector("SupportedCRS").textContent,L=0;L<t.CRS.length&&!e.defined(A);L++)t.CRS[L].SupportedCRS===P&&(A=t.CRS[L]);if(e.defined(A)){var E,W=[].slice.call(_.querySelectorAll("TileMatrix"));(E=W.map((function(e){var t=e.querySelector("Identifier").textContent,i=parseInt(e.querySelector("MatrixWidth").textContent),r=parseInt(e.querySelector("MatrixHeight").textContent),n=parseInt(e.querySelector("TileWidth").textContent),a=parseInt(e.querySelector("TileHeight").textContent);return{id:t,maxWidth:i,maxHeight:r,scaleDenominator:parseFloat(e.querySelector("ScaleDenominator").textContent),complete:!1,tileWidth:n,tileHeight:a}}))).sort((function(e,t){return t.scaleDenominator-e.scaleDenominator})),listTileMatrixLimits=I.querySelectorAll("TileMatrixSetLimits>TileMatrixLimits");for(var D=0;D<E.length;D++)for(var q=E[D],H=0;H<listTileMatrixLimits.length;H++){var V=listTileMatrixLimits[H];q.id===V.querySelector("TileMatrix").textContent&&(q.minTileRow=parseInt(V.querySelector("MinTileRow").textContent),q.maxTileRow=parseInt(V.querySelector("MaxTileRow").textContent),q.minTileCol=parseInt(V.querySelector("MinTileCol").textContent),q.maxTileCol=parseInt(V.querySelector("MaxTileCol").textContent),q.complete=!0,E[D]=q)}if(E.length>0){n.tilingScheme=new A.tilingScheme({ellipsoid:A.ellipsoid,numberOfLevelZeroTilesX:E[0].maxWidth,numberOfLevelZeroTilesY:E[0].maxHeight});var O=m.querySelector("ResourceURL[format='"+c.format+"']");if(null!=O?o=O.getAttribute("template").replace("{TileRow}","{y}").replace("{TileCol}","{x}").replace("{Style}",s).replace("{TileMatrixSet}",R).replace("{layer}",a).replace("{infoFormatExtension}",c.extension):e.defined(h)&&(o=h+"service=WMTS&request=GetTile&version=1.0.0&layer="+a+"&style=&"+s+"format="+c.format+"&TileMatrixSet="+R+"&TileMatrix={TileMatrix}&TileRow={y}&TileCol={x}"),e.defined(o)){n.getTileDataAvailable=function(e,t,i){var r=!1;if(i<l&&i<E.length){var n=E[i];r=n.complete?t<=n.maxTileRow&&t>=n.minTileRow&&e<=n.maxTileCol&&e>=n.minTileCol:e<n.maxWidth&&t<n.maxHeight}return r},n.URLtemplateImage=function(e,t,i){var r="";if(n.getTileDataAvailable(e,t,i)){var a=E[i];r=o.replace("{TileMatrix}",a.id)}return r};var k={width:E[0].tileWidth,height:E[0].tileHeight};0==E.filter((function(e){return e.tileWidth!=k.width||e.tileHeight!=k.height})).length&&(n.imageSize=k),n.ready=!0}}}}return n.proxy=r.proxy,n};var i=function(a){if(!e.defined(a))throw new e.DeveloperError("description is required.");var o,l,s=new e.Event,h=a.credit;"string"==typeof h&&(h=new e.Credit(h)),this.ready=!1,Object.defineProperties(this,{errorEvent:{get:function(){return s}},credit:{get:function(){return h}},hasVertexNormals:{get:function(){return!1}}}),o=t.parser(a),l=this,e.when(o,(function(t){e.defined(t)&&t.ready&&(t.levelZeroMaximumGeometricError=e.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(t.tilingScheme.ellipsoid,t.heightMapWidth,t.tilingScheme.getNumberOfXTilesAtLevel(0)),e.defined(t.URLtemplateImage)&&(t.getHeightmapTerrainDataImage=function(a,o,s){var h;if(!isNaN(a+o+s)){var u=r(t.URLtemplateImage(a,o,s),a,o,s,l),c={highest:t.highest,lowest:t.lowest,offset:t.offset},d=t.proxy||{getURL:e=>e},f=n(a,o,s,l),g=e.Resource.fetchImage({url:d.getURL(u),request:new e.Request({throttleByServer:!0})});e.defined(g)&&(h=e.when(g,(function(e){return i.imageToHeightmapTerrainData(e,c,{width:t.heightMapWidth,height:t.heightMapHeight},t.waterMask,f,t.hasStyledImage)})).otherwise((function(){return new e.HeightmapTerrainData({buffer:new Uint16Array(t.heightMapWidth*t.heightMapHeight),width:t.heightMapWidth,height:t.heightMapHeight,childTileMask:f,waterMask:new Uint8Array(t.heightMapWidth*t.heightMapHeight),structure:t.formatImage.terrainDataStructure})})))}return h}),e.defined(t.URLtemplateArray)&&(t.getHeightmapTerrainDataArray=function(a,o,s){var h;if(!isNaN(a+o+s)){var u=r(t.URLtemplateArray(a,o,s),a,o,s,l),c={highest:t.highest,lowest:t.lowest,offset:t.offset},d=n(a,o,s,l),f=t.proxy||{getURL:e=>e},g=e.Resource.fetchArrayBuffer({url:f.getURL(u),request:new e.Request({throttleByServer:!0})});e.defined(g)&&(h=e.when(g,(function(e){return i.arrayToHeightmapTerrainData(e,c,{width:t.heightMapWidth,height:t.heightMapHeight},t.formatArray,t.waterMask,t.littleEndian,d)})).otherwise((function(){return e.defined(t.getHeightmapTerrainDataImage)?t.getHeightmapTerrainDataImage(a,o,s):new e.HeightmapTerrainData({buffer:new Uint16Array(t.heightMapWidth*t.heightMapHeight),width:t.heightMapWidth,height:t.heightMapHeight,childTileMask:d,waterMask:new Uint8Array(t.heightMapWidth*t.heightMapHeight),structure:t.formatImage.terrainDataStructure})})))}return h}),l.getLevelMaximumGeometricError=function(e){return t.levelZeroMaximumGeometricError/(1<<e)},l.requestTileGeometry=function(i,r,n){var a;return e.defined(t.getHeightmapTerrainDataArray)?a=t.getHeightmapTerrainDataArray(i,r,n):e.defined(t.getHeightmapTerrainDataImage)&&(a=t.getHeightmapTerrainDataImage(i,r,n)),a},Object.defineProperties(l,{tilingScheme:{get:function(){return t.tilingScheme}},ready:{get:function(){return t.ready}},hasWaterMask:{get:function(){return t.waterMask}},heightMapHeight:{get:function(){return t.heightMapHeight}},heightMapWidth:{get:function(){return t.heightMapWidth}},getTileDataAvailable:{get:function(){return t.getTileDataAvailable}}}))}))};function r(e,t,i,r,n){let{getURL:a=(e=>e)}=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};var o=n.tilingScheme.tileXYToNativeRectangle(t,i,r),l=(o.east-o.west)/(n.heightMapWidth-1),s=(o.north-o.south)/(n.heightMapHeight-1);o.west-=.5*l,o.east+=.5*l,o.south-=.5*s,o.north+=.5*s;var h=n.tilingScheme.getNumberOfYTilesAtLevel(r),u=h-i-1;return e.replace("{south}",o.south).replace("{north}",o.north).replace("{west}",o.west).replace("{east}",o.east).replace("{x}",t).replace("{y}",i).replace("{tmsY}",u)}function n(e,t,i,r){var n=0,a=i+1;return n|=r.getTileDataAvailable(2*e,2*t,a)?1:0,n|=r.getTileDataAvailable(2*e+1,2*t,a)?2:0,(n|=r.getTileDataAvailable(2*e,2*t+1,a)?4:0)|(r.getTileDataAvailable(2*e+1,2*t+1,a)?8:0)}return i.arrayToHeightmapTerrainData=function(t,i,r,n,a,o,l){"number"==typeof r&&(r={width:r,height:r});var s=n.postProcessArray(t,r,i.highest,i.lowest,i.offset,o);if(!e.defined(s))throw new e.DeveloperError("no good size");var h={buffer:s,width:r.width,height:r.height,childTileMask:l,structure:n.terrainDataStructure};if(a){for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)s[c]<=0&&(u[c]=255);h.waterMask=u}return new e.HeightmapTerrainData(h)},i.imageToHeightmapTerrainData=function(t,i,r,n,a,o){"number"==typeof r&&(r={width:r,height:r});for(var l=e.getImagePixels(t,r.width,r.height),s=new Uint8Array(l.length/4),h=new Int16Array(l.length/4),u=0,c=0,d=0;d<l.length;d+=4){var f=l[d],g=l[d+1],p=l[d+2]>128,m=(f<<8|g)-i.offset-32768;m>i.lowest&&m<i.highest&&(p||o)?(h[d/4]=m,c+=m,u++):h[d/4]=0==u?0:c/u}var y={buffer:h,width:r.width,height:r.height,childTileMask:a,structure:{heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1}};if(n){for(s=new Uint8Array(heightBuffer.length),d=0;d<heightBuffer.length;d++)heightBuffer[d]<=0&&(s[d]=255);y.waterMask=s}return new e.HeightmapTerrainData(y)},i}(n);function T(e){let t=e,i="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),i=e.substring(e.indexOf("?")+1)),{url:t,queryString:i}}function b(e){this.proxy=e}function C(){}b.prototype.getURL=function(e){let{url:t,queryString:i}=T(e);return(0,l.b)()+encodeURIComponent(t+i)},C.prototype.getURL=function(e){let{url:t,queryString:i}=T(e);return t+i};const _=e=>{let t;return e.useForElevation?new w(function(e){let t,i=e.url,r=o.ZP.getProxyUrl({});r&&(t=e.noCors||(0,l.$)(i));const a=(0,x.getAuthenticationHeaders)(i,e.securityToken);return c()({url:new n.Resource({url:i,headers:a,proxy:t?new b(r):new C}),littleEndian:e.littleendian||!1,layerName:e.name})}(e)):(t=e.singleTile?new n.SingleTileImageryProvider(function(e){const t=void 0!==e.opacity?e.opacity:1,i=(0,S.v)(e),r=c()({styles:e.style||"",format:((0,M.z)(e.format)?"image/png":e.format)||"image/png",transparent:void 0===e.transparent||e.transparent,opacity:t,tiled:void 0===e.tiled||e.tiled,layers:e.name,width:e.size||2e3,height:e.size||2e3,bbox:"-180.0,-90,180.0,90",srs:"EPSG:4326"},i||{},(0,v.QW)(e)),a=(f()(e.url)?e.url[Math.round(Math.random()*(e.url.length-1))]:e.url)+"?service=WMS&version=1.1.0&request=GetMap&"+function(e){return Object.keys(e).map((t=>t+"="+encodeURIComponent(e[t]))).join("&")}((0,x.addAuthenticationToSLD)(r,e)),o=(0,x.getAuthenticationHeaders)(a,e.securityToken);return{url:new n.Resource({url:a,headers:o})}}(e)):new n.WebMapServiceImageryProvider(function(e){var t,i=void 0!==e.opacity?e.opacity:1;const r=(0,S.v)(e);let a,s=o.ZP.getProxyUrl({});s&&(a=(0,l.$)(e.url)&&s);const h=e.credits,u=h?new n.Credit(h.text||h.title,h.imageUrl,h.link):e.attribution,d=(0,v.D$)(f()(e.url)?e.url:[e.url]),g=(0,x.getAuthenticationHeaders)(d[0],e.securityToken);return c()({url:new n.Resource({url:"{s}",headers:g,proxy:a&&new b(a)||new C}),tileDiscardPolicy:"none"===e.tileDiscardPolicy?void 0:null!==(t=e.tileDiscardPolicy)&&void 0!==t?t:new n.NeverTileDiscardPolicy,credit:u,subdomains:d,layers:e.name,enablePickFeatures:!1,parameters:c()({styles:e.style||"",format:((0,M.z)(e.format)?"image/png":e.format)||"image/png",transparent:void 0===e.transparent||e.transparent,opacity:i,tiled:void 0===e.tiled||e.tiled,width:e.tileSize||256,height:e.tileSize||256},c()({},e._v_?{_v_:e._v_}:{},r||{},(0,v.QW)(e)))})}(e)),t.updateParams=t=>{const i=c()({},e,{params:c()({},e.params||{},t)});return _(i)},t)};r.default.registerType("wms",{create:_,update:(e,t,i)=>{const r=t&&t.params,n=i&&i.params,a={...r,...n};return Object.keys({...t,...i,...a}).filter((e=>y().PARAM_OPTIONS.indexOf(e.toLowerCase())>=0)).filter((e=>{const a=void 0===i[e]?n&&n[e]:i[e],o=void 0===t[e]?r&&r[e]:t[e];return!p()(a,o)})).length>0||t.securityToken!==i.securityToken||!p()(t.layerFilter,i.layerFilter)||t.tileSize!==i.tileSize?_(t):null}});var A=i(14640),I=i(13218),R=i.n(I),P=i(12571),L=i.n(P),E=i(27361),W=i.n(E),D=i(91175),q=i.n(D),H=i(72500),V=i.n(H);function O(e){let t=e,i="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),i=e.substring(e.indexOf("?")+1)),{url:t,queryString:i}}function k(e){this.proxy=e}function U(){}k.prototype.getURL=function(e){let{url:t,queryString:i}=O(e);return(0,l.b)()+encodeURIComponent(t+i)},U.prototype.getURL=function(e){let{url:t,queryString:i}=O(e);return t+i};const N=e=>e.indexOf("EPSG:4326")>=0?new n.GeographicTilingScheme:e.indexOf("EPSG:3857")>=0?new n.WebMercatorTilingScheme:null,G=(e,t)=>{const i=A.C2(e.tileMatrixSet,t,e.allowedSRS,e.matrixIds),r=(n=e.matrixIds&&function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return(R()(e)&&e[t]||f()(e)&&e||[]).map((e=>e.identifier))}(e.matrixIds,i)||function(e){let t=new Array(30);for(let i=0;i<30;++i)t[i]=e.tileMatrixPrefix+i;return t}(e),n.length>a?L()(n,0,a):n.length<a?n.concat(new Array(a-n.length)):n);var n,a;return{tileMatrixSet:i,matrixIds:r}};const F=e=>{let t;const i=function(e){let t="EPSG:4326",{tileMatrixSet:i,matrixIds:r}=G(e,t);if(0===r.length){t="EPSG:3857";const n=G(e,t);i=n.tileMatrixSet,r=n.matrixIds}let a,s=o.ZP.getProxyUrl({});s&&(a=(0,l.$)(e.url)&&s);const h=(u=e.matrixIds&&e.matrixIds[i],(e,t,i)=>u&&u[i]&&!u[i].ranges||e<=parseInt(W()(u[i],"ranges.cols.max"),10)&&e>=parseInt(W()(u[i],"ranges.cols.min"),10)&&t<=parseInt(W()(u[i],"ranges.rows.max"),10)&&t>=parseInt(W()(u[i],"ranges.rows.min"),10));var u;const d=V().format({query:{...(0,v.QW)(e)}});return c()({url:new n.Resource({url:q()((0,v.D$)(f()(e.url)?e.url:[e.url],d)),proxy:a&&new k(a)||new U}),format:((0,M.z)(e.format)?"image/png":e.format)||"image/png",isValid:h,layer:e.name,style:e.style||"",tileMatrixLabels:r,tilingScheme:N(t,e.matrixIds[i]),enablePickFeatures:!1,tileWidth:e.tileWidth||e.tileSize||256,tileHeight:e.tileHeight||e.tileSize||256,tileMatrixSetID:i,maximumLevel:30,parameters:{...(0,v.QW)(e)}})}(e);t=new n.WebMapTileServiceImageryProvider(i);const r=t.requestImage;return t.requestImage=(e,n,a)=>i.isValid(e,n,a)?r.bind(t)(e,n,a):new Promise((()=>{})),t.updateParams=t=>{const i=c()({},e,{params:c()({},e.params||{},t)});return F(i)},t};function B(){let{color:e="#ffffff"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._tilingScheme=new n.GeographicTilingScheme,this._readyPromise=n.when.resolve(!0),this._canvas=document.createElement("canvas"),this._canvas.width=1,this._canvas.height=1;const t=this._canvas.getContext("2d");t.fillStyle=e,t.fillRect(0,0,this._canvas.width,this._canvas.height)}r.default.registerType("wmts",{create:F,update:(e,t,i)=>t.securityToken!==i.securityToken||i.format!==t.format?F(t):null}),r.default.registerType("marker",{create:(e,t)=>{const i={point:{pixelSize:5,color:n.Color.RED,outlineColor:n.Color.WHITE,outlineWidth:2},...e.style},r=t.entities.add({position:n.Cartesian3.fromDegrees(e.point.lng,e.point.lat),...i});return{detached:!0,point:r,remove:()=>{t.entities.remove(r)}}},update:function(e,t,i,r){return p()(t.point,i.point)&&t.visibility===i.visibility?null:(e.remove(),t.visibility?this.create(t,r):null)}}),Object.defineProperties(B.prototype,{proxy:{get:function(){}},tileWidth:{get:function(){}},tileHeight:{get:function(){}},maximumLevel:{get:function(){}},minimumLevel:{get:function(){}},tilingScheme:{get:function(){return this._tilingScheme}},rectangle:{get:function(){return this._tilingScheme.rectangle}},tileDiscardPolicy:{get:function(){}},errorEvent:{get:function(){}},ready:{get:function(){return!0}},readyPromise:{get:function(){return this._readyPromise}},credit:{get:function(){}},hasAlphaChannel:{get:function(){return!0}}}),B.prototype.getTileCredits=function(){},B.prototype.requestImage=function(){return this._canvas},B.prototype.pickFeatures=function(){},r.default.registerType("empty",(()=>new B({color:"#ffffff"}))),r.default.registerType("bing",(e=>{const t=e.apiKey;return new n.BingMapsImageryProvider({url:"//dev.virtualearth.net",key:t,mapStyle:n.BingMapsStyle[e.name.toUpperCase()]})}));const X=function(){let e=[n.Math.toRadians(.05),n.Math.toRadians(.1),n.Math.toRadians(.2),n.Math.toRadians(.5),n.Math.toRadians(1),n.Math.toRadians(2),n.Math.toRadians(5),n.Math.toRadians(10)];function t(e,t){let i=e||{};this._tilingScheme=i.tilingScheme||new n.GeographicTilingScheme,this._color=i.color&&new n.Color(i.color[0],i.color[1],i.color[2],i.color[3])||new n.Color(1,1,1,.4),this._tileWidth=i.tileWidth||256,this._tileHeight=i.tileHeight||256,this._ready=!0,this._sexagesimal=i.sexagesimal||!1,this._numLines=i.numLines||50,this._scene=t,this._labels=new n.LabelCollection,t.primitives.add(this._labels),this._polylines=new n.PolylineCollection,t.primitives.add(this._polylines),this._ellipsoid=t.globe.ellipsoid;let r=document.createElement("canvas");r.width=256,r.height=256,this._canvas=r}let i=function(){try{return"x"in Object.defineProperty({},"x",{})}catch(e){return!1}}(),r=Object.defineProperties;function a(e){return e<.01?3:e<.1?2:e<1?1:0}return i&&r||(r=function(e){return e}),r(t.prototype,{url:{get:function(){}},proxy:{get:function(){}},tileWidth:{get:function(){return this._tileWidth}},tileHeight:{get:function(){return this._tileHeight}},maximumLevel:{get:function(){return 18}},minimumLevel:{get:function(){return 0}},tilingScheme:{get:function(){return this._tilingScheme}},rectangle:{get:function(){return this._tilingScheme.rectangle}},tileDiscardPolicy:{get:function(){}},errorEvent:{get:function(){return this._errorEvent}},ready:{get:function(){return this._ready}},credit:{get:function(){return this._credit}},hasAlphaChannel:{get:function(){return!0}}}),t.prototype.makeLabel=function(e,t,i,r){this._labels.add({position:this._ellipsoid.cartographicToCartesian(new n.Cartographic(e,t,10)),text:i,font:"normal",fillColor:this._color,outlineColor:this._color,style:n.LabelStyle.FILL,pixelOffset:new n.Cartesian2(5,r?5:-5),eyeOffset:n.Cartesian3.ZERO,horizontalOrigin:n.HorizontalOrigin.LEFT,verticalOrigin:r?n.VerticalOrigin.BOTTOM:n.VerticalOrigin.TOP,scale:1})},t.prototype._drawGrid=function(t){if(this._currentExtent&&this._currentExtent.equals(t))return;this._currentExtent=t,this._polylines.removeAll(),this._labels.removeAll();let i=0,r=0;for(let r=0;r<e.length&&i<(t.north-t.south)/10;r++)i=e[r];for(let i=0;i<e.length&&r<(t.east-t.west)/10;i++)r=e[i];let o=(t.west<0?Math.ceil(t.west/r):Math.floor(t.west/r))*r,l=(t.south<0?Math.ceil(t.south/i):Math.floor(t.south/i))*i,s=(t.east<0?Math.ceil(t.east/i):Math.floor(t.east/i))*i,h=(t.north<0?Math.ceil(t.north/r):Math.floor(t.north/r))*r;o=Math.max(o-2*r,-Math.PI),s=Math.min(s+2*r,Math.PI),l=Math.max(l-2*i,-Math.PI/2),h=Math.min(h+2*r,Math.PI/2);let u=this._ellipsoid,c=n.Math.toRadians(1),d=l+Math.floor((h-l)/i/2)*i;for(let e=o;e<s;e+=r){let t=[];for(let i=l;i<h;i+=c)t.push(new n.Cartographic(e,i));t.push(new n.Cartographic(e,h)),this._polylines.add({positions:u.cartographicArrayToCartesianArray(t),width:.75,material:new n.Material({fabric:{type:"Color",uniforms:{color:this._color}}})});let i=n.Math.toDegrees(e);this.makeLabel(e,d,this._sexagesimal?this._decToSex(i):i.toFixed(a(r)),!1)}let f=o+Math.floor((s-o)/r/2)*r;for(let e=l;e<h;e+=i){let t=[];for(let i=o;i<s;i+=c)t.push(new n.Cartographic(i,e));t.push(new n.Cartographic(s,e)),this._polylines.add({positions:u.cartographicArrayToCartesianArray(t),width:1,material:new n.Material({fabric:{type:"Color",uniforms:{color:this._color}}})});let r=n.Math.toDegrees(e);this.makeLabel(f,e,this._sexagesimal?this._decToSex(r):r.toFixed(a(i)),!0)}},t.prototype.requestImage=function(){return this._show&&this._drawGrid(this._getExtentView()),this._canvas},t.prototype.setVisible=function(e){this._show=e,e?(this._currentExtent=null,this._drawGrid(this._getExtentView())):(this._polylines.removeAll(),this._labels.removeAll())},t.prototype.isVisible=function(){return this._show},t.prototype._decToSex=function(t){let i=Math.floor(t),r=(60*(Math.abs(t)-i)).toFixed(2);return"60.00"===r&&(i+=1,e="0.00"),[i,":",r].join("")},t.prototype._getExtentView=function(){const e=this._scene.camera,t=this._scene.canvas,i=[e.pickEllipsoid(new n.Cartesian2(0,0),this._ellipsoid),e.pickEllipsoid(new n.Cartesian2(t.width,0),this._ellipsoid),e.pickEllipsoid(new n.Cartesian2(0,t.height),this._ellipsoid),e.pickEllipsoid(new n.Cartesian2(t.width,t.height),this._ellipsoid)];for(let e=0;e<4;e++)if(void 0===i[e])return n.Rectangle.MAX_VALUE;return n.Rectangle.fromCartographicArray(this._ellipsoid.cartesianArrayToCartographicArray(i))},t.prototype.destroy=function(){this._show=!1,this._polylines&&this._scene.primitives.remove(this._polylines),this._labels&&this._scene.primitives.remove(this._labels)},t}(),z=(e,t)=>{const i=t.scene,r=new X({tileWidth:512,tileHeight:512,numLines:10,...e},i);return e.visibility&&r.setVisible(!0),r};r.default.registerType("graticule",{create:z,update:(e,t,i,r)=>t.visibility!==i.visibility&&(e.setVisible(!1),t.visibility)?z(t,r):null}),r.default.registerType("osm",(()=>new n.OpenStreetMapImageryProvider({url:"//a.tile.openstreetmap.org/"})));var Z=i(98143),j=i.n(Z);const Y=function(){function e(e){this._scene=e.scene;let t=document.createElement("div");t.className="infoWindow",this._div=t;let i=document.createElement("div");i.className="frame",this._div.appendChild(i);let r=document.createElement("div");r.className="content",i.appendChild(r),e.container.appendChild(t),this._content=r,this.setVisible(!0),this._div.style.position="absolute"}return e.prototype.setVisible=function(e){this._visible=e,this._div.style.display=e?"block":"none"},e.prototype.setContent=function(e){if("string"==typeof e)this._content.innerHTML=e;else{for(;this._content.firstChild;)this._content.removeChild(this._content.firstChild);this._content.appendChild(e)}},e.prototype.setPosition=function(e,t){this._position=this._scene.globe.ellipsoid.cartographicToCartesian(n.Cartographic.fromDegrees(t,e,0))},e.prototype.showAt=function(e,t,i){this.setPosition(e,t),this.setContent(i),this.setVisible(!0)},e.prototype.hide=function(){this.setVisible(!1)},e.prototype.computeVisible=function(){const e=6378137,t=6378137,i=6356752.314245179,r=this._scene.camera.position,n=r.x/e,a=r.y/t,o=r.z/i,l=n*n+a*a+o*o-1,s=this._position,h=s.x/e-n,u=s.y/t-a,c=s.z/i-o,d=-(h*n+u*a+c*o);d>l&&d*d/(h*h+u*u+c*c)>l?this.setVisible(!1):this.setVisible(!0)},e.prototype.update=function(){if(this.computeVisible(),!this._visible||!this._position)return;let e=n.SceneTransforms.wgs84ToWindowCoordinates(this._scene,this._position);if(e){let t=Math.floor(e.x)-this._div.clientWidth/2+"px",i=Math.floor(e.y)-this._div.clientHeight+"px";this._div.tabIndex=5,this._div.style.left=t,this._div.style.top=i}},e.prototype.destroy=function(){this._div.parentNode.removeChild(this._div)},e}(),Q=e=>{if(0!==e.length)for(let t=0;t<e.length;t++){let i=e.item(t);i.removeAttribute("data-reactid"),Q(i.children||[])}};r.default.registerType("overlay",{create:(e,t)=>{const i=((e,t)=>{let i=e.cloneNode(!0);i.id=t.id+"-overlay",i.className=(t.className||e.className)+"-overlay",i.removeAttribute("data-reactid"),Q(i.children||[]);const r=t.closeClass||"close";if(t.onClose&&1===i.getElementsByClassName(r).length){const e=i.getElementsByClassName(r)[0],n=e=>{t.onClose(e.target.getAttribute("data-overlayid"))};j().add(e,"click",n)}return i})(document.getElementById(e.id),e);let r=new Y(t);r.showAt(e.position.y,e.position.x,i),r.setVisible(!0);let n=t.scene.primitives.add(r);return{detached:!0,info:n,remove:()=>{t.scene.primitives.remove(n)}}},update:function(e,t,i,r){return p()(t.position,i.position)&&t.visibility===i.visibility?null:(e.remove(),t.visibility?this.create(t,r):null)}});const $={}},17818:(e,t,i)=>{"use strict";i.d(t,{$:()=>s,b:()=>h});var r=i(54980),n=i(1469),a=i.n(n),o=i(13218),l=i.n(o);const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a()(e))return e.reduce(((e,t)=>s(t)&&e),!0);let i=!1,n=!(0===e.indexOf("http")),o=!n&&e.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(o){let e=window.location;n=o[1]===e.protocol&&o[3]===e.hostname;let t=o[4],i=e.port;(80!==t&&""!==t||"80"!==i&&""!==i)&&(n=n&&t===i)}if(!n){let n=r.ZP.getProxyUrl(t);if(n){let t=[];l()(n)&&(t=n.useCORS||[],n=n.url),t.reduce(((t,i)=>t||0===e.indexOf(i)),!1)||(i=!0)}}return i},h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.ZP.getProxyUrl(e);return t&&l()(t)&&(t=t.url),t}},18427:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var r=i(35937),n=i.n(r),a=i(37114),o=i(54980);const l={getLayerConfig:function(e,t){var i=a.Z;let r,l,s,h;if("custom"===e)r=t;else if(h=e.split("."),s=h[0],l=h[1],r=i[s],!r)throw new Error("No such provider ("+s+")");let u={url:r.url,options:r.options||{}};if(l&&"variants"in r){if(!(l in r.variants))throw new Error("No such variant of "+(s||r.url)+" ("+l+")");let e,t=r.variants[l];e="string"==typeof t?{variant:t}:t.options,u={url:t.url||u.url,options:{...u.options||{},...e}}}else"function"==typeof u.url&&(u.url=u.url(h.splice(1,h.length-1).join(".")));let c="file:"===window.location.protocol||u.options.forceHTTP;0===u.url.indexOf("//")&&c&&(u.url="http:"+u.url),u.options.retina&&(t.detectRetina&&o.ZP.getBrowserProperties().retina?t.detectRetina=!1:u.options.retina="");let d=function(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,t){return d(i[t].options.attribution)}))};u.options.attribution&&(u.options.attribution=d(u.options.attribution));let f={...u.options,...n()(t,(e=>void 0!==e))};return[u.url,f]}}},25999:(e,t,i)=>{"use strict";i.d(t,{z:()=>n});const r=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],n=e=>-1!==r.indexOf(e)},95555:e=>{e.exports={PARAM_OPTIONS:["layers","styles","style","format","transparent","version","tiled","opacity","zindex","srs","singletile","_v_","filterobj"]}},98143:function(e,t,i){var r,n;void 0===(n="function"==typeof(r=function(){function e(e,t){return function(i,r,n,a){i[e]?i[e](r,n,a):i[t]&&i[t]("on"+r,n)}}return{add:e("addEventListener","attachEvent"),remove:e("removeEventListener","detachEvent")}})?r.call(t,i,t,e):r)||(e.exports=n)}}]);
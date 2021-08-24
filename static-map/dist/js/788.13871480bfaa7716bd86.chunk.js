(self.webpackChunkstatic_map=self.webpackChunkstatic_map||[]).push([[788],{85788:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>H});var r=s(37101),i=s(45697),a=s.n(i),n=s(57557),o=s.n(n),l=s(2479);const c={locale:navigator&&navigator.language,formats:{},messages:{},defaultLocale:"en",defaultFormats:{},formatDate:e=>e,formatTime:e=>e,formatRelative:e=>e,formatNumber:e=>e,formatPlural:e=>e,formatMessage:e=>e,formatHTMLMessage:e=>e,now:()=>new Date};var p=s(96047),h=s(64775),u=s(39452),d=s(17432),g=s(28798),m=s(62536),f=s(81636),y=s(67294),w=s.n(y),b=s(51273),I=s(36403),S=s(20767),v=s(98185),_=s(31219),k=s(9371);function F(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class C extends w().Component{constructor(...e){super(...e),F(this,"getLayer",(()=>{let e;return this.props.map.getLayers().forEach((t=>{this.layersFilter(t)&&(e=t)}),this),e})),F(this,"setSelectInteraction",(()=>{this._selectInteraction.getActive()||this._selectInteraction.setActive(!0)})),F(this,"createSelectInteraction",(()=>{this.createStyle(),this._selectInteraction=new b.Z({layers:this.layersFilter,style:this._style,toggleCondition:I.QC}),this._selectInteraction.on("select",this.selectionChange,this),this.props.map.addInteraction(this._selectInteraction)})),F(this,"selectionChange",(()=>{let e=[];this._selectInteraction.getFeatures().forEach((t=>{e.push(t.getId())})),this.props.updateHighlighted(e,"")})),F(this,"cleanSupport",(()=>{this._selectInteraction&&this._selectInteraction.getActive()&&(this._selectInteraction.getFeatures().clear(),this.props.updateHighlighted([],""),this._selectInteraction.setActive(!1))})),F(this,"layersFilter",(e=>this.props.layer&&e.get("msId")===this.props.layer)),F(this,"createStyle",(()=>{let e=this.props.selectedStyle,t={stroke:new S.default(e.stroke?e.stroke:{color:"blue",width:1}),fill:new v.default(e.fill?e.fill:{color:"blue"})};"Point"===e.type&&(t={image:new k.default({...t,radius:e.radius||5})}),this._style=new _.default(t)})),F(this,"highlightFeatures",(e=>{let t=this.getLayer(),s=this._selectInteraction.getFeatures();s.clear(),t&&t.getSource().getFeatures().map((t=>{-1!==e.indexOf(t.getId())&&s.push(t)}),this)}))}componentDidMount(){this.createSelectInteraction(),"enabled"===this.props.status?this._selectInteraction.setActive(!0):this._selectInteraction.setActive(!1),this.props.features&&this.highlightFeatures(this.props.features)}shouldComponentUpdate(e){let t=this.props;return e.status!==t.status||e.layer!==t.layer||"update"===e.status&&e.features.toString()!==t.features.toString()}UNSAFE_componentWillUpdate(e){switch(e.status){case"enabled":this.setSelectInteraction(e);break;case"disabled":this.cleanSupport();break;case"update":this.highlightFeatures(e.features);break;default:return}}componentWillUnmount(){this._selectInteraction&&(this.cleanSupport(),this._selectInteraction.un("select",this.selectionChange,this),this.props.map.removeInteraction(this._selectInteraction),this._selectInteraction=null,this._style=null)}render(){return null}}F(C,"propTypes",{map:a().object,layer:a().string.isRequired,status:a().oneOf(["disabled","enabled","update"]),updateHighlighted:a().func,selectedStyle:a().object,features:a().array}),F(C,"contextTypes",{messages:a().object}),F(C,"defaultProps",{status:"disabled",updateHighlighted:()=>{},selectedStyle:{type:"Point",radius:12,stroke:{width:4,color:"yellow"},fill:{color:"red"}}});var Z=s(97016),T=s(29902),P=s(72445),L=s(18369);function D(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class j extends w().Component{constructor(...e){super(...e),D(this,"addDrawInteraction",(e=>{this.drawInteraction&&this.removeDrawInteraction();let t=new Z.Z,s=new T.Z({source:t,zIndex:1e6,style:new _.default({fill:new v.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new S.default({color:"#ffcc33",width:2}),image:new k.default({radius:7,fill:new v.default({color:"#ffcc33"})})})});this.props.map.addLayer(s);let r=new P.ZP({source:t,type:e.selection.geomType,style:new _.default({fill:new v.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new S.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new k.default({radius:5,stroke:new S.default({color:"rgba(0, 0, 0, 0.7)"}),fill:new v.default({color:"rgba(255, 255, 255, 0.2)"})})})});r.on("drawstart",(e=>{this.sketchFeature=e.feature,t.clear()})),r.on("drawend",(()=>{this.updateSelectionState()})),this.props.map.addInteraction(r),this.drawInteraction=r,this.selectionLayer=s,this.setDoubleClickZoomEnabled(!1)})),D(this,"removeDrawInteraction",(()=>{null!==this.drawInteraction&&(this.props.map.removeInteraction(this.drawInteraction),this.drawInteraction=null,this.props.map.removeLayer(this.selectionLayer),this.sketchFeature=null,setTimeout((()=>this.setDoubleClickZoomEnabled(!0)),251))})),D(this,"updateSelectionState",(()=>{if(!this.sketchFeature)return;const e=this.sketchFeature.getGeometry().getCoordinates();let t={geomType:this.props.selection.geomType,point:"Point"===this.props.selection.geomType?[e[0],e[1]]:null,line:"LineString"===this.props.selection.geomType?e.map((e=>[e[0],e[1]])):null,polygon:"Polygon"===this.props.selection.geomType?this.sketchFeature.getGeometry().getLinearRing(0).getCoordinates().map((e=>[e[0],e[1]])):null};this.props.changeSelectionState(t)})),D(this,"setDoubleClickZoomEnabled",(e=>{let t=this.props.map.getInteractions();for(let s=0;s<t.getLength();s++){let r=t.item(s);if(r instanceof L.Z){r.setActive(e);break}}}))}UNSAFE_componentWillReceiveProps(e){e.selection.geomType&&e.selection.geomType!==this.props.selection.geomType&&this.addDrawInteraction(e),e.selection.geomType||this.removeDrawInteraction()}render(){return null}}D(j,"propTypes",{map:a().object,projection:a().string,selection:a().object,changeSelectionState:a().func}),D(j,"defaultProps",{selection:{}});var A=s(89262),x=s(38272);const E=((e=[])=>{return(0,l.compose)((0,l.getContext)({intl:a().object}),(0,l.branch)((({intl:e})=>!!e),r.injectIntl,(0,l.withProps)({intl:c})),(0,l.withPropsOnChange)(["intl"],(({intl:t={}})=>e.reduce(((e={},s)=>({...e,[s]:t[s]})),{}))),(t=["intl"],(0,l.mapProps)((e=>o()(e,t)))));var t})(["formatNumber"]),H={LMap:p.Z,Layer:h.Z,Feature:u.Z,MeasurementSupport:E(d.Z),Overview:g.Z,ScaleBar:m.Z,DrawSupport:f.Z,HighlightFeatureSupport:C,SelectionSupport:j,PopupSupport:A.Z,BoxSelectionSupport:x.Z}}}]);
(self.webpackChunkstatic_map=self.webpackChunkstatic_map||[]).push([[788],{85788:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>M});var r=s(68195),i=s(45697),a=s.n(i),n=s(57557),o=s.n(n),l=s(67076);const c=e=>(0,l.mapProps)((t=>o()(t,e))),h={locale:navigator&&navigator.language,formats:{},messages:{},defaultLocale:"en",defaultFormats:{},formatDate:e=>e,formatTime:e=>e,formatRelative:e=>e,formatNumber:e=>e,formatPlural:e=>e,formatMessage:e=>e,formatHTMLMessage:e=>e,now:()=>new Date};var p=s(96047),u=s(64775),d=s(39452),g=s(17432),m=s(28798),f=s(62536),y=s(81636),w=s(24852),b=s.n(w),I=s(51273),S=s(36403),v=s(20767),_=s(98185),k=s(31219),F=s(9371);function C(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class Z extends b().Component{constructor(){super(...arguments),C(this,"getLayer",(()=>{let e;return this.props.map.getLayers().forEach((t=>{this.layersFilter(t)&&(e=t)}),this),e})),C(this,"setSelectInteraction",(()=>{this._selectInteraction.getActive()||this._selectInteraction.setActive(!0)})),C(this,"createSelectInteraction",(()=>{this.createStyle(),this._selectInteraction=new I.Z({layers:this.layersFilter,style:this._style,toggleCondition:S.QC}),this._selectInteraction.on("select",this.selectionChange,this),this.props.map.addInteraction(this._selectInteraction)})),C(this,"selectionChange",(()=>{let e=[];this._selectInteraction.getFeatures().forEach((t=>{e.push(t.getId())})),this.props.updateHighlighted(e,"")})),C(this,"cleanSupport",(()=>{this._selectInteraction&&this._selectInteraction.getActive()&&(this._selectInteraction.getFeatures().clear(),this.props.updateHighlighted([],""),this._selectInteraction.setActive(!1))})),C(this,"layersFilter",(e=>this.props.layer&&e.get("msId")===this.props.layer)),C(this,"createStyle",(()=>{let e=this.props.selectedStyle,t={stroke:new v.default(e.stroke?e.stroke:{color:"blue",width:1}),fill:new _.default(e.fill?e.fill:{color:"blue"})};"Point"===e.type&&(t={image:new F.default({...t,radius:e.radius||5})}),this._style=new k.default(t)})),C(this,"highlightFeatures",(e=>{let t=this.getLayer(),s=this._selectInteraction.getFeatures();s.clear(),t&&t.getSource().getFeatures().map((t=>{-1!==e.indexOf(t.getId())&&s.push(t)}),this)}))}componentDidMount(){this.createSelectInteraction(),"enabled"===this.props.status?this._selectInteraction.setActive(!0):this._selectInteraction.setActive(!1),this.props.features&&this.highlightFeatures(this.props.features)}shouldComponentUpdate(e){let t=this.props;return e.status!==t.status||e.layer!==t.layer||"update"===e.status&&e.features.toString()!==t.features.toString()}UNSAFE_componentWillUpdate(e){switch(e.status){case"enabled":this.setSelectInteraction(e);break;case"disabled":this.cleanSupport();break;case"update":this.highlightFeatures(e.features);break;default:return}}componentWillUnmount(){this._selectInteraction&&(this.cleanSupport(),this._selectInteraction.un("select",this.selectionChange,this),this.props.map.removeInteraction(this._selectInteraction),this._selectInteraction=null,this._style=null)}render(){return null}}C(Z,"propTypes",{map:a().object,layer:a().string.isRequired,status:a().oneOf(["disabled","enabled","update"]),updateHighlighted:a().func,selectedStyle:a().object,features:a().array}),C(Z,"contextTypes",{messages:a().object}),C(Z,"defaultProps",{status:"disabled",updateHighlighted:()=>{},selectedStyle:{type:"Point",radius:12,stroke:{width:4,color:"yellow"},fill:{color:"red"}}});var T=s(97016),P=s(29902),L=s(72445),D=s(18369);function j(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class A extends b().Component{constructor(){super(...arguments),j(this,"addDrawInteraction",(e=>{this.drawInteraction&&this.removeDrawInteraction();let t=new T.Z,s=new P.Z({source:t,zIndex:1e6,style:new k.default({fill:new _.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new v.default({color:"#ffcc33",width:2}),image:new F.default({radius:7,fill:new _.default({color:"#ffcc33"})})})});this.props.map.addLayer(s);let r=new L.ZP({source:t,type:e.selection.geomType,style:new k.default({fill:new _.default({color:"rgba(255, 255, 255, 0.2)"}),stroke:new v.default({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new F.default({radius:5,stroke:new v.default({color:"rgba(0, 0, 0, 0.7)"}),fill:new _.default({color:"rgba(255, 255, 255, 0.2)"})})})});r.on("drawstart",(e=>{this.sketchFeature=e.feature,t.clear()})),r.on("drawend",(()=>{this.updateSelectionState()})),this.props.map.addInteraction(r),this.drawInteraction=r,this.selectionLayer=s,this.setDoubleClickZoomEnabled(!1)})),j(this,"removeDrawInteraction",(()=>{null!==this.drawInteraction&&(this.props.map.removeInteraction(this.drawInteraction),this.drawInteraction=null,this.props.map.removeLayer(this.selectionLayer),this.sketchFeature=null,setTimeout((()=>this.setDoubleClickZoomEnabled(!0)),251))})),j(this,"updateSelectionState",(()=>{if(!this.sketchFeature)return;const e=this.sketchFeature.getGeometry().getCoordinates();let t={geomType:this.props.selection.geomType,point:"Point"===this.props.selection.geomType?[e[0],e[1]]:null,line:"LineString"===this.props.selection.geomType?e.map((e=>[e[0],e[1]])):null,polygon:"Polygon"===this.props.selection.geomType?this.sketchFeature.getGeometry().getLinearRing(0).getCoordinates().map((e=>[e[0],e[1]])):null};this.props.changeSelectionState(t)})),j(this,"setDoubleClickZoomEnabled",(e=>{let t=this.props.map.getInteractions();for(let s=0;s<t.getLength();s++){let r=t.item(s);if(r instanceof D.Z){r.setActive(e);break}}}))}UNSAFE_componentWillReceiveProps(e){e.selection.geomType&&e.selection.geomType!==this.props.selection.geomType&&this.addDrawInteraction(e),e.selection.geomType||this.removeDrawInteraction()}render(){return null}}j(A,"propTypes",{map:a().object,projection:a().string,selection:a().object,changeSelectionState:a().func}),j(A,"defaultProps",{selection:{}});var x=s(89262),E=s(38272);const H=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,l.compose)((0,l.getContext)({intl:a().object}),(0,l.branch)((e=>{let{intl:t}=e;return!!t}),r.injectIntl,(0,l.withProps)({intl:h})),(0,l.withPropsOnChange)(["intl"],(t=>{let{intl:s={}}=t;return e.reduce((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{...e,[t]:s[t]}}),{})})),c(["intl"]))}(["formatNumber"]),M={LMap:p.Z,Layer:u.Z,Feature:d.Z,MeasurementSupport:H(g.Z),Overview:m.Z,ScaleBar:f.Z,DrawSupport:y.Z,HighlightFeatureSupport:Z,SelectionSupport:A,PopupSupport:x.Z,BoxSelectionSupport:E.Z}}}]);
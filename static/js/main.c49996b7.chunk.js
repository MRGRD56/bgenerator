(this["webpackJsonpbg-generator"]=this["webpackJsonpbg-generator"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(6),o=n.n(s),r=(n(15),n(7)),g=n(8),h=n(10),c=n(9),l=(n(16),n(17),n(39),n(0)),m=function(e){Object(h.a)(n,e);var t=Object(c.a)(n);function n(e){var a;Object(r.a)(this,n),(a=t.call(this,e)).imgCanvas=document.createElement("canvas"),a.imgCanvas.style.display="none",document.body.appendChild(a.imgCanvas),a.imgCanvasContext=a.imgCanvas.getContext("2d");var i={size:{width:1280,height:720},imgColor:"#42a5f5",imgSource:void 0};return i.imgSource=a.generateImage(i),a.state=i,a}return Object(g.a)(n,[{key:"onWidthChange",value:function(e){var t=Object.assign(this.state);t.size.width=e.target.value,this.updateImage(t)}},{key:"onHeightChange",value:function(e){var t=Object.assign(this.state);t.size.height=e.target.value,this.updateImage(t)}},{key:"onImgColorChange",value:function(e){var t=Object.assign(this.state);t.imgColor=e.target.value,this.updateImage(t)}},{key:"updateImage",value:function(e){e.imgSource=this.generateImage(e),this.setState(e)}},{key:"generateImage",value:function(e){if(!(!e.size.width||e.size.width<0||!e.size.height||e.size.height<0)&&e.imgColor)return this.imgCanvas.width=e.size.width,this.imgCanvas.height=e.size.height,this.imgCanvasContext.fillStyle=e.imgColor,this.imgCanvasContext.fillRect(0,0,this.imgCanvas.width,this.imgCanvas.height),this.imgCanvas.toDataURL("image/png")}},{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsxs)("div",{className:"top-menu input-group mb-3",children:[Object(l.jsx)("input",{type:"number",min:"0",className:"form-control",placeholder:"Width",value:this.state.size.width,onChange:function(t){return e.onWidthChange(t)}}),Object(l.jsx)("input",{type:"number",min:"0",className:"form-control",placeholder:"Height",value:this.state.size.height,onChange:function(t){return e.onHeightChange(t)}}),Object(l.jsx)("input",{type:"color",className:"form-control form-control-color",value:this.state.imgColor,onChange:function(t){return e.onImgColorChange(t)}}),Object(l.jsx)("input",{type:"text",className:"form-control font-monospace",placeholder:"Color",value:this.state.imgColor,onChange:function(t){return e.onImgColorChange(t)}})]}),Object(l.jsx)("img",{className:"result-image",src:this.state.imgSource,alt:"Image"})]})})}}]),n}(a.Component),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),u()}},[[42,1,2]]]);
//# sourceMappingURL=main.c49996b7.chunk.js.map
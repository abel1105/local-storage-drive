(window["webpackJsonplocal-storage-drive"]=window["webpackJsonplocal-storage-drive"]||[]).push([[0],{4:function(e,a,t){e.exports={root:"Homepage_root__2WRs3",navBar:"Homepage_navBar__2chaW",logo:"Homepage_logo__cHEDO",dropzone:"Homepage_dropzone__15wjs",dropzone_text:"Homepage_dropzone_text__fx2iQ",message:"Homepage_message__3uJZL",menu:"Homepage_menu__32gFS",menu_row:"Homepage_menu_row__uZr7A",menu_row_active:"Homepage_menu_row_active__CzNGQ",user:"Homepage_user__1Eiyk",user_row:"Homepage_user_row__1v5J5",avatar:"Homepage_avatar__1AgxD",user_detail:"Homepage_user_detail__2az6b",username:"Homepage_username__3KZs2",progress:"Homepage_progress__12O6i",size:"Homepage_size__2aNvy",container:"Homepage_container__2xaGR",search:"Homepage_search__3sbb0",search_icon:"Homepage_search_icon__ozexW",search_input:"Homepage_search_input__3vxCE",search_arrow:"Homepage_search_arrow__2zWxB",content:"Homepage_content__DMTQb",header:"Homepage_header__3HZd9",table:"Homepage_table__2ffSx",cell:"Homepage_cell__2n_hQ",row:"Homepage_row__3szFe",more:"Homepage_more__ky5me",more_list:"Homepage_more_list__7Lwyc"}},45:function(e,a,t){e.exports={path:"Upload_path__BprsE"}},61:function(e,a,t){e.exports={path:"Logo_path__2TgCD"}},62:function(e,a,t){e.exports=t.p+"static/media/avatar.4d8aa304.png"},63:function(e,a,t){e.exports=t.p+"static/media/search.feed0a56.svg"},64:function(e,a,t){e.exports=t.p+"static/media/img.573df713.svg"},65:function(e,a,t){e.exports=t.p+"static/media/pdf.ee5ba342.svg"},66:function(e,a,t){e.exports=t.p+"static/media/doc.ee43af90.svg"},67:function(e,a,t){e.exports=t.p+"static/media/other.b01227c3.svg"},72:function(e,a,t){e.exports=t(89)},82:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(10),c=t.n(o),s=t(26),i=t(51),l=(t(81),t(82),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function m(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=t(18),p=t(28),h=t(9),g=function(){return Math.random().toString(36).substr(2,5)},d=function(e,a){try{return localStorage.setItem(e,a),!0}catch(t){return!1}},f=function(e){return localStorage.getItem(e)},_=function(){var e="";for(var a in window.localStorage)window.localStorage.hasOwnProperty(a)&&(e+=window.localStorage[a]);return e?2*e.length:0},v=function(){for(var e=64,a="",t="",r="size-test-"+Math.random().toString(),n=0;e--;)a+=1e16;for(e=10240;e--;)t+=a;for(e=10485760;e>1;)try{if(localStorage.setItem(r,t.substr(0,e)),localStorage.removeItem(r),!(n<e-25e4))break;n=e,e*=1.5}catch(o){localStorage.removeItem(r),e=n+(e-n)/2}return 2*n},E=function(e){return{type:"PUSH_FILE",payload:{file:e}}},b=function(e){return{type:"DELETE_FILE",payload:{key:e}}},C=function(e){return{type:"TOGGLE_FAVORITE",payload:{key:e}}};function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function S(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(t,!0).forEach(function(a){Object(h.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var k={remainSpace:v(),usageSpace:_(),files:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case"PUSH_FILE":return S({},e,{remainSpace:v(),usageSpace:_(),files:[].concat(Object(p.a)(e.files),[r.file])});case"DELETE_FILE":return S({},e,{remainSpace:v(),usageSpace:_(),files:e.files.filter(function(e){return e.key!==r.key})});case"TOGGLE_FAVORITE":return S({},e,{files:e.files.map(function(e){return e.key===r.key?S({},e,{isFavorite:!e.isFavorite}):e})});default:return e}},O=Object(u.b)({root:y}),N=t(47),A=t(53),j=t.n(A),x=Object(u.c)(Object(N.a)({key:"redux",storage:j.a},O),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),H=Object(N.b)(x),D=t(39),z=t(23),F=t(54),P=t.n(F),I=t(24),T=t(32),L=t.n(T),R=t(43),U=t(44),B=t.n(U),W=t(58),M=t.n(W),Z=t(4),G=t.n(Z),J=t(68),V=t(37),Q=t.n(V),X={compressToUTF16:function(e){var a,t,r,n=[],o=0;for(e=this.compress(e),a=0;a<e.length;a++)switch(t=e.charCodeAt(a),o++){case 0:n.push(String.fromCharCode(32+(t>>1))),r=(1&t)<<14;break;case 1:n.push(String.fromCharCode(r+(t>>2)+32)),r=(3&t)<<13;break;case 2:n.push(String.fromCharCode(r+(t>>3)+32)),r=(7&t)<<12;break;case 3:n.push(String.fromCharCode(r+(t>>4)+32)),r=(15&t)<<11;break;case 4:n.push(String.fromCharCode(r+(t>>5)+32)),r=(31&t)<<10;break;case 5:n.push(String.fromCharCode(r+(t>>6)+32)),r=(63&t)<<9;break;case 6:n.push(String.fromCharCode(r+(t>>7)+32)),r=(127&t)<<8;break;case 7:n.push(String.fromCharCode(r+(t>>8)+32)),r=(255&t)<<7;break;case 8:n.push(String.fromCharCode(r+(t>>9)+32)),r=(511&t)<<6;break;case 9:n.push(String.fromCharCode(r+(t>>10)+32)),r=(1023&t)<<5;break;case 10:n.push(String.fromCharCode(r+(t>>11)+32)),r=(2047&t)<<4;break;case 11:n.push(String.fromCharCode(r+(t>>12)+32)),r=(4095&t)<<3;break;case 12:n.push(String.fromCharCode(r+(t>>13)+32)),r=(8191&t)<<2;break;case 13:n.push(String.fromCharCode(r+(t>>14)+32)),r=(16383&t)<<1;break;case 14:n.push(String.fromCharCode(r+(t>>15)+32,32+(32767&t))),o=0}return n.push(String.fromCharCode(r+32)),n.join("")},decompressFromUTF16:function(e){for(var a,t,r=[],n=0,o=0;o<e.length;){switch(t=e.charCodeAt(o)-32,n++){case 0:a=t<<1;break;case 1:r.push(String.fromCharCode(a|t>>14)),a=(16383&t)<<2;break;case 2:r.push(String.fromCharCode(a|t>>13)),a=(8191&t)<<3;break;case 3:r.push(String.fromCharCode(a|t>>12)),a=(4095&t)<<4;break;case 4:r.push(String.fromCharCode(a|t>>11)),a=(2047&t)<<5;break;case 5:r.push(String.fromCharCode(a|t>>10)),a=(1023&t)<<6;break;case 6:r.push(String.fromCharCode(a|t>>9)),a=(511&t)<<7;break;case 7:r.push(String.fromCharCode(a|t>>8)),a=(255&t)<<8;break;case 8:r.push(String.fromCharCode(a|t>>7)),a=(127&t)<<9;break;case 9:r.push(String.fromCharCode(a|t>>6)),a=(63&t)<<10;break;case 10:r.push(String.fromCharCode(a|t>>5)),a=(31&t)<<11;break;case 11:r.push(String.fromCharCode(a|t>>4)),a=(15&t)<<12;break;case 12:r.push(String.fromCharCode(a|t>>3)),a=(7&t)<<13;break;case 13:r.push(String.fromCharCode(a|t>>2)),a=(3&t)<<14;break;case 14:r.push(String.fromCharCode(a|t>>1)),a=(1&t)<<15;break;case 15:r.push(String.fromCharCode(a|t)),n=0}o++}return this.decompress(r.join(""))},_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decompress:function(e){for(var a,t,r,n,o,c,s,i=[],l=1,m=e.charCodeAt(0)>>8;l<2*e.length&&(l<2*e.length-1||0==m);)l%2==0?(a=e.charCodeAt(l/2)>>8,t=255&e.charCodeAt(l/2),r=l/2+1<e.length?e.charCodeAt(l/2+1)>>8:NaN):(a=255&e.charCodeAt((l-1)/2),(l+1)/2<e.length?(t=e.charCodeAt((l+1)/2)>>8,r=255&e.charCodeAt((l+1)/2)):t=r=NaN),l+=3,n=a>>2,o=(3&a)<<4|t>>4,c=(15&t)<<2|r>>6,s=63&r,isNaN(t)||l==2*e.length+1&&m?c=s=64:(isNaN(r)||l==2*e.length&&m)&&(s=64),i.push(this._keyStr.charAt(n)),i.push(this._keyStr.charAt(o)),i.push(this._keyStr.charAt(c)),i.push(this._keyStr.charAt(s));return i.join("")},compress:function(e){var a,t,r,n,o,c,s,i=[],l=1,m=0,u=!1;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");m<e.length;)t=this._keyStr.indexOf(e.charAt(m++))<<2|(o=this._keyStr.indexOf(e.charAt(m++)))>>4,r=(15&o)<<4|(c=this._keyStr.indexOf(e.charAt(m++)))>>2,n=(3&c)<<6|(s=this._keyStr.indexOf(e.charAt(m++))),l%2==0?(a=t<<8,u=!0,64!=c&&(i.push(String.fromCharCode(a|r)),u=!1),64!=s&&(a=n<<8,u=!0)):(i.push(String.fromCharCode(a|t)),u=!1,64!=c&&(a=r<<8,u=!0),64!=s&&(i.push(String.fromCharCode(a|n)),u=!1)),l+=3;return u?(i.push(String.fromCharCode(a)),i=i.join(""),i=String.fromCharCode(256|i.charCodeAt(0))+i.substring(1)):i=i.join(""),i}},K=t(60),q=t.n(K),Y=function(e){return new Promise(function(a){var t=e.split(","),r=Object(I.a)(t,2),n=r[0],o=r[1];a({header:n,body:X.compress(o)})})},$=function(e,a){return new Promise(function(t){t("".concat(e,",").concat(X.decompress(a)))})},ee=function(e,a,t){q()(e,a,t)},ae=t(61),te=t.n(ae);var re=function(e){var a=e.size;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"511.148",height:"511.148",viewBox:"0 0 511.148 511.148",style:{width:"".concat(a,"px"),height:"".concat(a,"px")}},n.a.createElement("path",{className:te.a.path,d:"M255.574,46.6a117.2,117.2,0,0,1,114.8,94.35l6.389,31.947,32.586,2.343a63.542,63.542,0,0,1-4.685,126.935H127.787a85.127,85.127,0,0,1-9.371-169.744l22.789-2.343,10.649-20.233A116.472,116.472,0,0,1,255.574,46.6m0-42.6A159.641,159.641,0,0,0,113.943,90.043a127.735,127.735,0,0,0,13.844,254.722H404.659A106.528,106.528,0,0,0,511.148,238.276c0-56.226-43.661-101.8-99.035-105.637A159.517,159.517,0,0,0,255.574,4Z",transform:"translate(0 81.191)"}))},ne=t(45),oe=t.n(ne);var ce=function(){return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"25.881",viewBox:"0 0 28 25.881"},n.a.createElement("path",{className:oe.a.path,d:"M22.772,25.16A8.111,8.111,0,0,0,7.744,22.465a4.646,4.646,0,0,0-.852-.081,4.445,4.445,0,0,0-4.439,4.439,4.853,4.853,0,0,0,.092.921A6.177,6.177,0,0,0,0,32.725,6.6,6.6,0,0,0,1.676,37.1,5.98,5.98,0,0,0,5.821,39.18h5a.777.777,0,0,0,0-1.555H5.89A4.9,4.9,0,0,1,1.555,32.72,4.615,4.615,0,0,1,3.84,28.747a.784.784,0,0,0,.34-.944,2.821,2.821,0,0,1-.173-.99,2.89,2.89,0,0,1,2.885-2.885,2.835,2.835,0,0,1,.985.173.781.781,0,0,0,.973-.4A6.556,6.556,0,0,1,21.3,25.862a.776.776,0,0,0,.645.691,5.6,5.6,0,0,1-.53,11.066H17.175a.777.777,0,1,0,0,1.555h4.33a6.889,6.889,0,0,0,4.618-2.28A7.166,7.166,0,0,0,22.772,25.16Z",transform:"translate(0 -18.4)"}),n.a.createElement("path",{className:oe.a.path,d:"M167.781,190.847a.775.775,0,0,0,0-1.1l-4.117-4.117a.787.787,0,0,0-.547-.23.762.762,0,0,0-.547.23l-4.117,4.117a.78.78,0,0,0,.547,1.33.758.758,0,0,0,.547-.23l2.793-2.793v12.834a.777.777,0,1,0,1.555,0V188.054l2.793,2.793A.768.768,0,0,0,167.781,190.847Z",transform:"translate(-149.115 -175.785)"}))},se=t(62),ie=t.n(se),le=t(63),me=t.n(le),ue=t(64),pe=t.n(ue),he=t(65),ge=t.n(he),de=t(66),fe=t.n(de),_e=t(67),ve=t.n(_e),Ee=t(113),be=t(114),Ce=t(115),we=t(116),Se=t(117),ke=t(119),ye=t(112),Oe=t(121);var Ne=function(){var e=Object(s.b)(),a=Object(r.useCallback)(function(a){a.forEach(function(a){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=Object(R.a)(L.a.mark(function r(){var n,o,c,s,i;return L.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(a),n=t.result,o=g(),r.next=5,Y(n);case 5:c=r.sent,s=c.header,i=c.body,d(o,i)?e(E({key:o,header:s,name:a.name,updateAt:a.lastModified,type:a.type,size:2*i.length,isFavorite:!1,isPDF:"application/pdf"===a.type,isDoc:"application/msword"===a.type,isImg:/image\//.test(a.type)})):S(!0);case 10:case"end":return r.stop()}},r)})),t.readAsDataURL(a)})},[e]),t=Object(r.useState)("all"),o=Object(I.a)(t,2),c=o[0],i=o[1],l=Object(r.useState)(null),m=Object(I.a)(l,2),u=m[0],p=m[1],_=Object(r.useState)(!1),v=Object(I.a)(_,2),w=v[0],S=v[1],k=Object(s.c)(function(e){return e.root.remainSpace}),y=Object(s.c)(function(e){return e.root.usageSpace}),O=Object(s.c)(function(e){return e.root.files}),N=k+y,A=y/N*100,j=Object(J.a)({onDrop:a}),x=j.getRootProps,H=j.getInputProps,D=j.isDragActive,z=n.a.useState(null),F=Object(I.a)(z,2),P=F[0],T=F[1],U=n.a.useState(null),W=Object(I.a)(U,2),Z=W[0],V=W[1],X=function(){T(null),V(null)},K=function(){var e=Object(R.a)(L.a.mark(function e(){var a,t;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=O.find(function(e){return e.key===Z}))){e.next=7;break}return e.next=4,$(a.header,f(a.key));case 4:t=e.sent,ee(t,a.name,a.type),X();case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:G.a.root},n.a.createElement("div",{className:G.a.navBar},n.a.createElement("div",{className:G.a.logo},n.a.createElement(re,{size:30}),n.a.createElement("span",null,"MCloud.")),n.a.createElement("div",Object.assign({},x(),{className:G.a.dropzone}),n.a.createElement("input",H()),n.a.createElement("div",{className:G.a.dropzone_text},n.a.createElement(ce,null),D?n.a.createElement("span",null,"Drop here"):n.a.createElement("span",null,"\u4e0a\u50b3\u6a94\u6848")),n.a.createElement("span",{className:G.a.message},"\u5c07\u58d3\u7e2e\u4e26\u5132\u5b58\u65bc localstorage \u4e2d")),n.a.createElement("div",{className:G.a.menu},n.a.createElement("div",{className:B()(G.a.menu_row,Object(h.a)({},G.a.menu_row_active,"all"===c)),onClick:function(){return i("all")}},n.a.createElement(ye.a,null,"folder"),n.a.createElement("span",null,"\u6211\u7684\u6a94\u6848")),n.a.createElement("div",{className:B()(G.a.menu_row,Object(h.a)({},G.a.menu_row_active,"star"===c)),onClick:function(){return i("star")}},n.a.createElement(ye.a,null,"star_border"),n.a.createElement("span",null,"\u5df2\u52a0\u661f\u865f"))),n.a.createElement("div",{className:G.a.user},n.a.createElement("div",{className:G.a.user_row},n.a.createElement("div",{className:G.a.avatar,style:{backgroundImage:"url('".concat(ie.a,"')")}}),n.a.createElement("div",{className:G.a.user_detail},n.a.createElement("span",{className:G.a.username},"Jennifer"),n.a.createElement("span",null,"User"))),n.a.createElement("div",{className:G.a.user_row},n.a.createElement("div",{className:G.a.progress},n.a.createElement("span",{style:{width:"".concat(A,"%")}}))),n.a.createElement("div",{className:G.a.user_row},n.a.createElement("span",{className:G.a.size},n.a.createElement("b",null,"\u5bb9\u91cf ",Q()(y))," / ",Q()(N))))),n.a.createElement("div",{className:G.a.container},n.a.createElement("div",{className:G.a.search},n.a.createElement("div",{className:G.a.search_icon},n.a.createElement("img",{src:me.a,alt:"search"})),n.a.createElement("input",{className:G.a.search_input,value:u,placeholder:"\u641c\u5c0b\u60a8\u7684\u6a94\u6848",onChange:function(e){return p(e.target.value)}}),n.a.createElement("span",{className:G.a.search_arrow})),n.a.createElement("div",{className:G.a.content},n.a.createElement("div",{className:G.a.header},n.a.createElement("span",null,n.a.createElement("b",null,"all"===c?"\u6211\u7684\u6a94\u6848":"\u5df2\u52a0\u661f\u865f"))),n.a.createElement(Ee.a,{className:G.a.table},n.a.createElement(be.a,null,n.a.createElement(Ce.a,null,n.a.createElement(we.a,{className:G.a.cell},"\u540d\u7a31"),n.a.createElement(we.a,{className:G.a.cell,align:"right"},"\u4e0a\u6b21\u4fee\u6539"),n.a.createElement(we.a,{className:G.a.cell,align:"right"},"\u6a94\u6848\u5927\u5c0f"),n.a.createElement(we.a,{className:G.a.cell,align:"right"},"\u64c1\u6709\u8005"),n.a.createElement(we.a,{className:G.a.cell,align:"right"}))),n.a.createElement(Se.a,null,O.filter(function(e){return"star"!==c||e.isFavorite}).filter(function(e){return!u||RegExp(u).test(e.name)}).map(function(e){return n.a.createElement(Ce.a,{className:G.a.row,key:e.key},n.a.createElement(we.a,{className:G.a.cell,component:"th",scope:"row"},e.isImg&&n.a.createElement("img",{src:pe.a,alt:"img"}),e.isPDF&&n.a.createElement("img",{src:ge.a,alt:"pdf"}),e.isDoc&&n.a.createElement("img",{src:fe.a,alt:"doc"}),!e.isImg&&!e.isPDF&&!e.isDoc&&n.a.createElement("img",{src:ve.a,alt:"other"}),e.name,e.isFavorite&&n.a.createElement(ye.a,{style:{color:"#FFBA00"}},"star")),n.a.createElement(we.a,{className:G.a.cell,align:"right"},M()(e.updateAt).fromNow()),n.a.createElement(we.a,{className:G.a.cell,align:"right"},Q()(e.size)),n.a.createElement(we.a,{className:G.a.cell,align:"right"},"Jennifer"),n.a.createElement(we.a,{className:G.a.cell,align:"right"},n.a.createElement("button",{className:G.a.more,onClick:(a=e.key,function(e){T(e.currentTarget),V(a)})},n.a.createElement(ye.a,null,"more_horiz"))));var a}))),n.a.createElement(ke.a,{open:Boolean(P),anchorEl:P,onClose:X,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},n.a.createElement("div",{className:G.a.more_list},n.a.createElement("span",{onClick:K},"\u4e0b\u8f09"),n.a.createElement("span",{onClick:function(){e(C(Z)),X()}},"\u6a19\u793a\u661f\u865f"),n.a.createElement("span",null,"\u91cd\u65b0\u547d\u540d"),n.a.createElement("span",{onClick:function(){localStorage.removeItem(Z),e(b(Z)),X()}},"\u522a\u9664"))),n.a.createElement(Oe.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:w,autoHideDuration:6e3,onClose:function(e,a){"clickaway"!==a&&S(!1)},ContentProps:{"aria-describedby":"message-id"},message:n.a.createElement("span",{id:"message-id"},"\u6a94\u6848\u592a\u5927\uff0c\u5df2\u8d85\u904e\u5132\u5b58\u4e0a\u9650")}))))},Ae=function(){return n.a.createElement(D.HashRouter,null,n.a.createElement(P.a,{id:"UA-142485991-1"},n.a.createElement(z.d,{path:"/",exact:!0,component:Ne})))};c.a.render(n.a.createElement(s.a,{store:x},n.a.createElement(i.a,{loading:null,persistor:H},n.a.createElement(Ae,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/local-storage-drive",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/local-storage-drive","/service-worker.js");l?(!function(e,a){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):m(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):m(a,e)})}}()}},[[72,1,2]]]);
//# sourceMappingURL=main.c70c5cc2.chunk.js.map
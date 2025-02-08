import{S as $,i as ee,s as te,H as A,h as ne,l as re,u as ae,w as ie,O as oe,T as le,U as se,Q as de,J as u,y as ce}from"./index-CvNz_7Om.js";import{c as fe,d as ue,s as ge,h as he,a as ye,E,b as S,e as pe,f as ke,g as me,i as xe,j as be,k as we,l as Ee,m as Se,r as Ke,n as Ce,o as Re,p as Le,C as R,q as Q,t as qe,S as ve,u as Oe,v as We}from"./index-M240cSlr.js";function _e(e){return new Worker(""+new URL("autocomplete.worker-BMoaAQ6I.js",import.meta.url).href,{name:e==null?void 0:e.name})}function Ae(e){G(e,"start");var r={},t=e.languageData||{},g=!1;for(var h in e)if(h!=t&&e.hasOwnProperty(h))for(var f=r[h]=[],i=e[h],a=0;a<i.length;a++){var o=i[a];f.push(new Je(o,e)),(o.indent||o.dedent)&&(g=!0)}return{name:t.name,startState:function(){return{state:"start",pending:null,indent:g?[]:null}},copyState:function(s){var y={state:s.state,pending:s.pending,indent:s.indent&&s.indent.slice(0)};return s.stack&&(y.stack=s.stack.slice(0)),y},token:Me(r),indent:Be(r,t),languageData:t}}function G(e,r){if(!e.hasOwnProperty(r))throw new Error("Undefined state "+r+" in simple mode")}function De(e,r){if(!e)return/(?:)/;var t="";return e instanceof RegExp?(e.ignoreCase&&(t="i"),e=e.source):e=String(e),new RegExp("^(?:"+e+")",t)}function Ie(e){if(!e)return null;if(e.apply)return e;if(typeof e=="string")return e.replace(/\./g," ");for(var r=[],t=0;t<e.length;t++)r.push(e[t]&&e[t].replace(/\./g," "));return r}function Je(e,r){(e.next||e.push)&&G(r,e.next||e.push),this.regex=De(e.regex),this.token=Ie(e.token),this.data=e}function Me(e){return function(r,t){if(t.pending){var g=t.pending.shift();return t.pending.length==0&&(t.pending=null),r.pos+=g.text.length,g.token}for(var h=e[t.state],f=0;f<h.length;f++){var i=h[f],a=(!i.data.sol||r.sol())&&r.match(i.regex);if(a){i.data.next?t.state=i.data.next:i.data.push?((t.stack||(t.stack=[])).push(t.state),t.state=i.data.push):i.data.pop&&t.stack&&t.stack.length&&(t.state=t.stack.pop()),i.data.indent&&t.indent.push(r.indentation()+r.indentUnit),i.data.dedent&&t.indent.pop();var o=i.token;if(o&&o.apply&&(o=o(a)),a.length>2&&i.token&&typeof i.token!="string"){t.pending=[];for(var s=2;s<a.length;s++)a[s]&&t.pending.push({text:a[s],token:i.token[s-1]});return r.backUp(a[0].length-(a[1]?a[1].length:0)),o[0]}else return o&&o.join?o[0]:o}}return r.next(),null}}function Be(e,r){return function(t,g){if(t.indent==null||r.dontIndentStates&&r.doneIndentState.indexOf(t.state)>-1)return null;var h=t.indent.length-1,f=e[t.state];e:for(;;){for(var i=0;i<f.length;i++){var a=f[i];if(a.data.dedent&&a.data.dedentIfLineStart!==!1){var o=a.regex.exec(g);if(o&&o[0]){h--,(a.next||a.push)&&(f=e[a.next||a.push]),g=g.slice(o[0].length);continue e}}}break}return h<0?0:t.indent[h]}}function He(e){let r;return{c(){r=ae("div"),ie(r,"class","code-editor")},m(t,g){re(t,r,g),e[15](r)},p:A,i:A,o:A,d(t){t&&ne(r),e[15](null)}}}function Te(e){return JSON.stringify([e==null?void 0:e.name,e==null?void 0:e.type,e==null?void 0:e.fields])}function Ue(e,r,t){let g;oe(e,le,n=>t(21,g=n));const h=se();let{id:f=""}=r,{value:i=""}=r,{disabled:a=!1}=r,{placeholder:o=""}=r,{baseCollection:s=null}=r,{singleLine:y=!1}=r,{extraAutocompleteKeys:L=[]}=r,{disableRequestKeys:b=!1}=r,{disableCollectionJoinKeys:m=!1}=r,d,p,q=a,D=new R,I=new R,J=new R,M=new R,v=new _e,B=[],H=[],T=[],K="",O="";function W(){d==null||d.focus()}let _=null;v.onmessage=n=>{T=n.data.baseKeys||[],B=n.data.requestKeys||[],H=n.data.collectionJoinKeys||[]};function V(){clearTimeout(_),_=setTimeout(()=>{v.postMessage({baseCollection:s,collections:j(g),disableRequestKeys:b,disableCollectionJoinKeys:m})},250)}function j(n){let c=n.slice();return s&&u.pushOrReplaceByKey(c,s,"id"),c}function U(){p==null||p.dispatchEvent(new CustomEvent("change",{detail:{value:i},bubbles:!0}))}function F(){if(!f)return;const n=document.querySelectorAll('[for="'+f+'"]');for(let c of n)c.removeEventListener("click",W)}function N(){if(!f)return;F();const n=document.querySelectorAll('[for="'+f+'"]');for(let c of n)c.addEventListener("click",W)}function z(n=!0,c=!0){let l=[].concat(L);return l=l.concat(T||[]),n&&(l=l.concat(B||[])),c&&(l=l.concat(H||[])),l}function X(n){var w;let c=n.matchBefore(/[\'\"\@\w\.]*/);if(c&&c.from==c.to&&!n.explicit)return null;let l=We(n.state).resolveInner(n.pos,-1);if(((w=l==null?void 0:l.type)==null?void 0:w.name)=="comment")return null;let x=[{label:"false"},{label:"true"},{label:"@now"},{label:"@second"},{label:"@minute"},{label:"@hour"},{label:"@year"},{label:"@day"},{label:"@month"},{label:"@weekday"},{label:"@yesterday"},{label:"@tomorrow"},{label:"@todayStart"},{label:"@todayEnd"},{label:"@monthStart"},{label:"@monthEnd"},{label:"@yearStart"},{label:"@yearEnd"}];m||x.push({label:"@collection.*",apply:"@collection."});let C=z(!b&&c.text.startsWith("@r"),!m&&c.text.startsWith("@c"));for(const k of C)x.push({label:k.endsWith(".")?k+"*":k,apply:k,boost:k.indexOf("_via_")>0?-1:0});return{from:c.from,options:x}}function P(){return ve.define(Ae({start:[{regex:/true|false|null/,token:"atom"},{regex:/\/\/.*/,token:"comment"},{regex:/"(?:[^\\]|\\.)*?(?:"|$)/,token:"string"},{regex:/'(?:[^\\]|\\.)*?(?:'|$)/,token:"string"},{regex:/0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,token:"number"},{regex:/\&\&|\|\||\=|\!\=|\~|\!\~|\>|\<|\>\=|\<\=/,token:"operator"},{regex:/[\{\[\(]/,indent:!0},{regex:/[\}\]\)]/,dedent:!0},{regex:/\w+[\w\.]*\w+/,token:"keyword"},{regex:u.escapeRegExp("@now"),token:"keyword"},{regex:u.escapeRegExp("@second"),token:"keyword"},{regex:u.escapeRegExp("@minute"),token:"keyword"},{regex:u.escapeRegExp("@hour"),token:"keyword"},{regex:u.escapeRegExp("@year"),token:"keyword"},{regex:u.escapeRegExp("@day"),token:"keyword"},{regex:u.escapeRegExp("@month"),token:"keyword"},{regex:u.escapeRegExp("@weekday"),token:"keyword"},{regex:u.escapeRegExp("@todayStart"),token:"keyword"},{regex:u.escapeRegExp("@todayEnd"),token:"keyword"},{regex:u.escapeRegExp("@monthStart"),token:"keyword"},{regex:u.escapeRegExp("@monthEnd"),token:"keyword"},{regex:u.escapeRegExp("@yearStart"),token:"keyword"},{regex:u.escapeRegExp("@yearEnd"),token:"keyword"},{regex:u.escapeRegExp("@request.method"),token:"keyword"}],meta:{lineComment:"//"}}))}de(()=>{const n={key:"Enter",run:l=>{y&&h("submit",i)}};N();let c=[n,...fe,...ue,ge.find(l=>l.key==="Mod-d"),...he,...ye];return y||c.push(qe),t(11,d=new E({parent:p,state:S.create({doc:i,extensions:[pe(),ke(),me(),xe(),be(),S.allowMultipleSelections.of(!0),we(Oe,{fallback:!0}),Ee(),Se(),Ke(),Ce(),Re.of(c),E.lineWrapping,Le({override:[X],icons:!1}),M.of(Q(o)),I.of(E.editable.of(!a)),J.of(S.readOnly.of(a)),D.of(P()),S.transactionFilter.of(l=>{var x,C,w;if(y&&l.newDoc.lines>1){if(!((w=(C=(x=l.changes)==null?void 0:x.inserted)==null?void 0:C.filter(k=>!!k.text.find(Z=>Z)))!=null&&w.length))return[];l.newDoc.text=[l.newDoc.text.join(" ")]}return l}),E.updateListener.of(l=>{!l.docChanged||a||(t(1,i=l.state.doc.toString()),U())})]})})),()=>{clearTimeout(_),F(),d==null||d.destroy(),v.terminate()}});function Y(n){ce[n?"unshift":"push"](()=>{p=n,t(0,p)})}return e.$$set=n=>{"id"in n&&t(2,f=n.id),"value"in n&&t(1,i=n.value),"disabled"in n&&t(3,a=n.disabled),"placeholder"in n&&t(4,o=n.placeholder),"baseCollection"in n&&t(5,s=n.baseCollection),"singleLine"in n&&t(6,y=n.singleLine),"extraAutocompleteKeys"in n&&t(7,L=n.extraAutocompleteKeys),"disableRequestKeys"in n&&t(8,b=n.disableRequestKeys),"disableCollectionJoinKeys"in n&&t(9,m=n.disableCollectionJoinKeys)},e.$$.update=()=>{e.$$.dirty[0]&32&&t(13,K=Te(s)),e.$$.dirty[0]&25352&&!a&&(O!=K||b!==-1||m!==-1)&&(t(14,O=K),V()),e.$$.dirty[0]&4&&f&&N(),e.$$.dirty[0]&2080&&d&&s!=null&&s.fields&&d.dispatch({effects:[D.reconfigure(P())]}),e.$$.dirty[0]&6152&&d&&q!=a&&(d.dispatch({effects:[I.reconfigure(E.editable.of(!a)),J.reconfigure(S.readOnly.of(a))]}),t(12,q=a),U()),e.$$.dirty[0]&2050&&d&&i!=d.state.doc.toString()&&d.dispatch({changes:{from:0,to:d.state.doc.length,insert:i}}),e.$$.dirty[0]&2064&&d&&typeof o<"u"&&d.dispatch({effects:[M.reconfigure(Q(o))]})},[p,i,f,a,o,s,y,L,b,m,W,d,q,K,O,Y]}class Pe extends ${constructor(r){super(),ee(this,r,Ue,He,te,{id:2,value:1,disabled:3,placeholder:4,baseCollection:5,singleLine:6,extraAutocompleteKeys:7,disableRequestKeys:8,disableCollectionJoinKeys:9,focus:10},null,[-1,-1])}get focus(){return this.$$.ctx[10]}}export{Pe as default};

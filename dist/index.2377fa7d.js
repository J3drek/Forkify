function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var r={},i={},a=n.parcelRequired893;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){i[e]=n},n.parcelRequired893=a),a.register("27Lyk",(function(n,t){var r,i;e(n.exports,"register",(()=>r),(e=>r=e)),e(n.exports,"resolve",(()=>i),(e=>i=e));var a={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},i=function(e){var n=a[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),a("27Lyk").register(JSON.parse('{"f9fpV":"index.2377fa7d.js","eyyUD":"icons.9801e6f1.svg"}'));var o,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof n&&n)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,f={};p=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var g,v=Function.prototype.call;f=p?v.bind(v):function(){return v.apply(v,arguments)};var h={}.propertyIsEnumerable,_=Object.getOwnPropertyDescriptor,m=_&&!h.call({1:2},1);g=m?function(e){var n=_(this,e);return!!n&&n.enumerable}:h;var b;b=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}};var y,w,k={},E={},S=Function.prototype,O=S.bind,$=S.call,j=p&&O.bind($,$),T=(E=p?function(e){return e&&j(e)}:function(e){return e&&function(){return $.apply(e,arguments)}})({}.toString),P=E("".slice);w=function(e){return P(T(e),8,-1)};var M=c.Object,L=E("".split);k=d((function(){return!M("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?L(e,""):M(e)}:M;var H,q=c.TypeError;H=function(e){if(null==e)throw q("Can't call method on "+e);return e},y=function(e){return k(H(e))};var x,N,R,C;C=function(e){return"function"==typeof e},R=function(e){return"object"==typeof e?null!==e:C(e)};var I,A={},F=function(e){return C(e)?e:void 0};I=function(e,n){return arguments.length<2?F(c[e]):c[e]&&c[e][n]};var D={};D=E({}.isPrototypeOf);var U,W,B,z={};z=I("navigator","userAgent")||"";var J,G,V=c.process,Q=c.Deno,Y=V&&V.versions||Q&&Q.version,K=Y&&Y.v8;K&&(G=(J=K.split("."))[0]>0&&J[0]<4?1:+(J[0]+J[1])),!G&&z&&(!(J=z.match(/Edge\/(\d+)/))||J[1]>=74)&&(J=z.match(/Chrome\/(\d+)/))&&(G=+J[1]),B=G,W=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&B&&B<41})),U=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=c.Object;A=U?function(e){return"symbol"==typeof e}:function(e){var n=I("Symbol");return C(n)&&D(n.prototype,X(e))};var Z,ee,ne,te=c.String;ne=function(e){try{return te(e)}catch(e){return"Object"}};var re=c.TypeError;ee=function(e){if(C(e))return e;throw re(ne(e)+" is not a function")},Z=function(e,n){var t=e[n];return null==t?void 0:ee(t)};var ie,ae=c.TypeError;ie=function(e,n){var t,r;if("string"===n&&C(t=e.toString)&&!R(r=f(t,e)))return r;if(C(t=e.valueOf)&&!R(r=f(t,e)))return r;if("string"!==n&&C(t=e.toString)&&!R(r=f(t,e)))return r;throw ae("Can't convert object to primitive value")};var oe,se;var ce,ue={},le=Object.defineProperty;ce=function(e,n){try{le(c,e,{value:n,configurable:!0,writable:!0})}catch(t){c[e]=n}return n};var de=c["__core-js_shared__"]||ce("__core-js_shared__",{});ue=de,(se=function(e,n){return ue[e]||(ue[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.21.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,fe={},ge=c.Object;pe=function(e){return ge(H(e))};var ve=E({}.hasOwnProperty);fe=Object.hasOwn||function(e,n){return ve(pe(e),n)};var he,_e=0,me=Math.random(),be=E(1..toString);he=function(e){return"Symbol("+(void 0===e?"":e)+")_"+be(++_e+me,36)};var ye=se("wks"),we=c.Symbol,ke=we&&we.for,Ee=U?we:we&&we.withoutSetter||he;oe=function(e){if(!fe(ye,e)||!W&&"string"!=typeof ye[e]){var n="Symbol."+e;W&&fe(we,e)?ye[e]=we[e]:ye[e]=U&&ke?ke(n):Ee(n)}return ye[e]};var Se=c.TypeError,Oe=oe("toPrimitive");N=function(e,n){if(!R(e)||A(e))return e;var t,r=Z(e,Oe);if(r){if(void 0===n&&(n="default"),t=f(r,e,n),!R(t)||A(t))return t;throw Se("Can't convert object to primitive value")}return void 0===n&&(n="number"),ie(e,n)},x=function(e){var n=N(e,"string");return A(n)?n:n+""};var $e,je,Te=c.document,Pe=R(Te)&&R(Te.createElement);je=function(e){return Pe?Te.createElement(e):{}},$e=!l&&!d((function(){return 7!=Object.defineProperty(je("div"),"a",{get:function(){return 7}}).a}));var Me,Le,He=Object.getOwnPropertyDescriptor,qe=s=l?He:function(e,n){if(e=y(e),n=x(n),$e)try{return He(e,n)}catch(e){}if(fe(e,n))return b(!f(g,e,n),e[n])},xe={};Le=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ne,Re=c.String,Ce=c.TypeError;Ne=function(e){if(R(e))return e;throw Ce(Re(e)+" is not an object")};var Ie=c.TypeError,Ae=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor;Me=l?Le?function(e,n,t){if(Ne(e),n=x(n),Ne(t),"function"==typeof e&&"prototype"===n&&"value"in t&&"writable"in t&&!t.writable){var r=Fe(e,n);r&&r.writable&&(e[n]=t.value,t={configurable:"configurable"in t?t.configurable:r.configurable,enumerable:"enumerable"in t?t.enumerable:r.enumerable,writable:!1})}return Ae(e,n,t)}:Ae:function(e,n,t){if(Ne(e),n=x(n),Ne(t),$e)try{return Ae(e,n,t)}catch(e){}if("get"in t||"set"in t)throw Ie("Accessors not supported");return"value"in t&&(e[n]=t.value),e},xe=l?function(e,n,t){return Me(e,n,b(1,t))}:function(e,n,t){return e[n]=t,e};var De,Ue={},We=E(Function.toString);C(ue.inspectSource)||(ue.inspectSource=function(e){return We(e)}),Ue=ue.inspectSource;var Be,ze,Je=c.WeakMap;ze=C(Je)&&/native code/.test(Ue(Je));var Ge,Ve=se("keys");Ge=function(e){return Ve[e]||(Ve[e]=he(e))};var Qe={};Qe={};var Ye,Ke,Xe,Ze=c.TypeError,en=c.WeakMap;if(ze||ue.state){var nn=ue.state||(ue.state=new en),tn=E(nn.get),rn=E(nn.has),an=E(nn.set);Ye=function(e,n){if(rn(nn,e))throw new Ze("Object already initialized");return n.facade=e,an(nn,e,n),n},Ke=function(e){return tn(nn,e)||{}},Xe=function(e){return rn(nn,e)}}else{var on=Ge("state");Qe[on]=!0,Ye=function(e,n){if(fe(e,on))throw new Ze("Object already initialized");return n.facade=e,xe(e,on,n),n},Ke=function(e){return fe(e,on)?e[on]:{}},Xe=function(e){return fe(e,on)}}Be={set:Ye,get:Ke,has:Xe,enforce:function(e){return Xe(e)?Ke(e):Ye(e,{})},getterFor:function(e){return function(n){var t;if(!R(n)||(t=Ke(n)).type!==e)throw Ze("Incompatible receiver, "+e+" required");return t}}};var sn=Function.prototype,cn=l&&Object.getOwnPropertyDescriptor,un=fe(sn,"name"),ln={EXISTS:un,PROPER:un&&"something"===function(){}.name,CONFIGURABLE:un&&(!l||l&&cn(sn,"name").configurable)}.CONFIGURABLE,dn=Be.get,pn=Be.enforce,fn=String(String).split("String");(De=function(e,n,t,r){var i,a=!!r&&!!r.unsafe,o=!!r&&!!r.enumerable,s=!!r&&!!r.noTargetGet,u=r&&void 0!==r.name?r.name:n;C(t)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!fe(t,"name")||ln&&t.name!==u)&&xe(t,"name",u),(i=pn(t)).source||(i.source=fn.join("string"==typeof u?u:""))),e!==c?(a?!s&&e[n]&&(o=!0):delete e[n],o?e[n]=t:xe(e,n,t)):o?e[n]=t:ce(n,t)})(Function.prototype,"toString",(function(){return C(this)&&dn(this).source||Ue(this)}));var gn,vn,hn,_n,mn,bn={},yn=Math.ceil,wn=Math.floor;mn=function(e){var n=+e;return n!=n||0===n?0:(n>0?wn:yn)(n)};var kn=Math.max,En=Math.min;_n=function(e,n){var t=mn(e);return t<0?kn(t+n,0):En(t,n)};var Sn,On,$n=Math.min;On=function(e){return e>0?$n(mn(e),9007199254740991):0},Sn=function(e){return On(e.length)};var jn=function(e){return function(n,t,r){var i,a=y(n),o=Sn(a),s=_n(r,o);if(e&&t!=t){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===t)return e||s||0;return!e&&-1}},Tn={includes:jn(!0),indexOf:jn(!1)}.indexOf,Pn=E([].push);hn=function(e,n){var t,r=y(e),i=0,a=[];for(t in r)!fe(Qe,t)&&fe(r,t)&&Pn(a,t);for(;n.length>i;)fe(r,t=n[i++])&&(~Tn(a,t)||Pn(a,t));return a};var Mn,Ln=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");vn=Object.getOwnPropertyNames||function(e){return hn(e,Ln)},Mn=Object.getOwnPropertySymbols;var Hn=E([].concat);bn=I("Reflect","ownKeys")||function(e){var n=vn(Ne(e));return Mn?Hn(n,Mn(e)):n},gn=function(e,n,t){for(var r=bn(n),i=Me,a=s,o=0;o<r.length;o++){var c=r[o];fe(e,c)||t&&fe(t,c)||i(e,c,a(n,c))}};var qn={},xn=/#|\.prototype\./,Nn=function(e,n){var t=Cn[Rn(e)];return t==An||t!=In&&(C(n)?d(n):!!n)},Rn=Nn.normalize=function(e){return String(e).replace(xn,".").toLowerCase()},Cn=Nn.data={},In=Nn.NATIVE="N",An=Nn.POLYFILL="P";qn=Nn,o=function(e,n){var t,r,i,a,o,s=e.target,u=e.global,l=e.stat;if(t=u?c:l?c[s]||ce(s,{}):(c[s]||{}).prototype)for(r in n){if(a=n[r],i=e.noTargetGet?(o=qe(t,r))&&o.value:t[r],!qn(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;gn(a,i)}(e.sham||i&&i.sham)&&xe(a,"sham",!0),De(t,r,a,e)}};var Fn,Dn={},Un=Function.prototype,Wn=Un.apply,Bn=Un.call;Dn="object"==typeof Reflect&&Reflect.apply||(p?Bn.bind(Wn):function(){return Bn.apply(Wn,arguments)});var zn,Jn=E(E.bind);zn=function(e,n){return ee(e),void 0===n?e:p?Jn(e,n):function(){return e.apply(n,arguments)}};var Gn={};Gn=I("document","documentElement");var Vn={};Vn=E([].slice);var Qn,Yn=c.TypeError;Qn=function(e,n){if(e<n)throw Yn("Not enough arguments");return e};var Kn;Kn=/(?:ipad|iphone|ipod).*applewebkit/i.test(z);var Xn;Xn="process"==w(c.process);var Zn,et,nt,tt,rt=c.setImmediate,it=c.clearImmediate,at=c.process,ot=c.Dispatch,st=c.Function,ct=c.MessageChannel,ut=c.String,lt=0,dt={};try{Zn=c.location}catch(e){}var pt=function(e){if(fe(dt,e)){var n=dt[e];delete dt[e],n()}},ft=function(e){return function(){pt(e)}},gt=function(e){pt(e.data)},vt=function(e){c.postMessage(ut(e),Zn.protocol+"//"+Zn.host)};rt&&it||(rt=function(e){Qn(arguments.length,1);var n=C(e)?e:st(e),t=Vn(arguments,1);return dt[++lt]=function(){Dn(n,void 0,t)},et(lt),lt},it=function(e){delete dt[e]},Xn?et=function(e){at.nextTick(ft(e))}:ot&&ot.now?et=function(e){ot.now(ft(e))}:ct&&!Kn?(tt=(nt=new ct).port2,nt.port1.onmessage=gt,et=zn(tt.postMessage,tt)):c.addEventListener&&C(c.postMessage)&&!c.importScripts&&Zn&&"file:"!==Zn.protocol&&!d(vt)?(et=vt,c.addEventListener("message",gt,!1)):et="onreadystatechange"in je("script")?function(e){Gn.appendChild(je("script")).onreadystatechange=function(){Gn.removeChild(this),pt(e)}}:function(e){setTimeout(ft(e),0)}),Fn={set:rt,clear:it},o({global:!0,bind:!0,enumerable:!0,forced:!c.setImmediate||!c.clearImmediate},{setImmediate:Fn.set,clearImmediate:Fn.clear});const ht=async function(e,n){try{const r=n?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}):fetch(e),i=await Promise.race([r,(t=10,new Promise((function(e,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${t} second`))}),1e3*t)})))]),a=await i.json();if(!i.ok)throw new Error(`${a.message} (${i.status})`);return a}catch(e){throw e}var t},_t={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},mt=function(e){const{recipe:n}=e.data;return{id:n.id,title:n.title,publisher:n.publisher,img:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients,url:n.source_url,...n.key&&{key:n.key}}},bt=function(e=_t.search.page){_t.search.page=e;const n=(e-1)*_t.search.resultsPerPage,t=e*_t.search.resultsPerPage;return _t.search.results.slice(n,t)},yt=function(){localStorage.setItem("bookmark",JSON.stringify(_t.bookmarks)),console.log(_t.bookmarks)},wt=function(e){_t.bookmarks.push(e),e.id===_t.recipe.id&&(_t.recipe.bookmarked=!0),yt()};!function(){const e=localStorage.getItem("bookmark");e&&(_t.bookmarks=JSON.parse(e))}();var kt,Et=new class{_parentElement=document.querySelector(".search");getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(n){n.preventDefault(),e()}))}_clearInput(){return this._parentElement.querySelector(".search__field").value=""}};kt=new URL(a("27Lyk").resolve("eyyUD"),import.meta.url).toString();class St{_parentElement=document.querySelector(".results");render(e,n=!0){if(!e||0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup();if(!n)return t;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;const n=this._generateMarkup(),t=document.createRange().createContextualFragment(n),r=Array.from(t.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,n)=>{const t=i[n];e.isEqualNode(t)||""===e.firstChild?.nodeValue.trim()||(t.textContent=e.textContent),e.isEqualNode(t)||Array.from(e.attributes).forEach((e=>{t.setAttribute(e.name,e.value)}))}))}_clear(){this._parentElement.innerHTML=""}renderSpiner(){const e=`<div class="spinner">\n      <svg>\n        <use href="${t(kt)}.svg#icon-loader"></use>\n      </svg>\n    </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const n=`<div class="error">\n        <div>\n          <svg>\n            <use href="${t(kt)}.svg#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}renderMessage(e=this._message){const n=`<div class="message">\n        <div>\n          <svg>\n            <use href="${t(kt)}.svg#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}}var Ot=new class extends St{_parentElement="";_generateMarkup(e){const n=window.location.hash.slice(1);return`<li class="preview">\n    <a class="preview__link ${this._data.id===n?"preview__link--active":""}" href="#${this._data.id}">\n      <figure class="preview__fig">\n        <img src="${this._data.img}" alt="${this._data.title}" />\n      </figure>\n      <div class="preview__data">\n        <h4 class="preview__title">${this._data.title}</h4>\n        <p class="preview__publisher">${this._data.publisher}</p>\n        \n      </div>\n      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          \n          <svg>\n            <use href="${t(kt)}.svg#icon-user"></use>\n          </svg>\n        \n          </div>\n         \n        </div>\n    </a>\n  </li>`}};var $t=new class extends St{_parentElement=document.querySelector(".results");_errorMessage="No recipe was found  :(";_message="";_generateMarkup(){return this._data.map((e=>Ot.render(e,!1))).join("")}};var jt=new class extends St{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(n){const t=n.target.closest(".btn--inline");if(!t)return;const r=+t.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page;console.log(this._data.page);const n=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&n>1?`${this._generateBtnNext(e)}`:e===n&&n>1?`${this._generateBtnReturn(e)}`:e<n?`${this._generateBtnReturn(e)} ${this._generateBtnNext(e)}`:""}_generateBtnReturn(e){return`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n    <svg class="search__icon">\n      <use href="${t(kt)}#icon-arrow-left"></use>\n    </svg>\n    <span>Page ${e-1}</span>\n  </button>`}_generateBtnNext(e){return`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n    <span>Page ${e+1}</span>\n    <svg class="search__icon">\n      <use href="${t(kt)}#icon-arrow-right"></use>\n    </svg>\n  </button>`}};var Tt=new class extends St{_parentElement=document.querySelector(".recipe");_errorMessage="WE COULD NOT FIND THAT RECIPE. PLEASE TRY ANOTHER TIME";_message="";addHandlerRender(e){["hashchange","load"].forEach((n=>window.addEventListener(n,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(n){const t=n.target.closest(".btn--update-servings");if(!t)return;const r=t.dataset.updateTo;r>0&&e(r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(n){n.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n          <img src="${this._data.img}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n          </h1>\n        </figure>\n\n        <div class="recipe__details">\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${t(kt)}.svg#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n          </div>\n          <div class="recipe__info">\n            <svg class="recipe__info-icon">\n              <use href="${t(kt)}.svg#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                <svg>\n                  <use href="${t(kt)}.svg#icon-minus-circle"></use>\n                </svg>\n              </button>\n              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                <svg>\n                  <use href="${t(kt)}.svg#icon-plus-circle"></use>\n                </svg>\n              </button>\n            </div>\n          </div>\n          \n\n          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n          \n          <svg>\n            <use href="${t(kt)}.svg#icon-user"></use>\n          </svg>\n        \n          </div>\n          <button class="btn--round btn--bookmark">\n            <svg class="">\n              <use href="${t(kt)}.svg#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n          </button>\n        </div>\n\n        <div class="recipe__ingredients">\n          <h2 class="heading--2">recipe ingredients</h2>\n          <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateingridient).join(" ")}\n            \n\n            <li class="recipe__ingredient">\n              <svg class="recipe__icon">\n                <use href="${t(kt)}.svg#icon-check"></use>\n              </svg>\n              <div class="recipe__quantity"></div>\n              <div class="recipe__description">\n                <span class="recipe__unit">cup</span>\n                ricotta cheese\n              </div>\n            </li>\n          </ul>\n        </div>\n\n        <div class="recipe__directions">\n          <h2 class="heading--2">How to cook it</h2>\n          <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n          </p>\n          <a\n            class="btn--small recipe__btn"\n            href="${this._data.url}"\n            target="_blank"\n          >\n            <span>Directions</span>\n            <svg class="search__icon">\n              <use href="${t(kt)}.svg#icon-arrow-right"></use>\n            </svg>\n          </a>\n        </div>\n      `}_generateingridient(e){return`<li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${t(kt)}.svg#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${e.quantity}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n      </li>`}};var Pt=new class extends St{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet, find a recipe and bookmark it";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Ot.render(e,!1))).join("")}};var Mt=new class extends St{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Recipe succesfully uploaded";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(n){n.preventDefault();const t=[...new FormData(this)],r=Object.fromEntries(t);e(r)}))}_generateMarkup(){}};document.querySelector(".recipe");const Lt=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Tt.renderSpiner(),$t.update(bt()),await async function(e){try{const n=await ht(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=afcaf630-b4e7-4059-8d38-8fef32a48419`);_t.recipe=mt(n),_t.bookmarks.some((n=>n.id===e))?_t.recipe.bookmarked=!0:_t.recipe.bookmarked=!1}catch(e){throw e}}(e),Tt.render(_t.recipe),Pt.update(_t.bookmarks)}catch(e){Tt.renderError(),console.log(e)}},Ht=async function(){try{$t.renderSpiner();const e=Et.getQuery();if(!e)return;await async function(e){try{const n=await getJSON(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&?key=afcaf630-b4e7-4059-8d38-8fef32a48419`);_t.search.query=e,_t.search.results=n.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,img:e.image_url,...e.key&&{key:e.key}}))),_t.search.page=1}catch(e){throw e}}(e),$t.render(bt()),jt.render(_t.search)}catch(e){console.log(e)}},qt=function(e){!function(e){_t.recipe.ingredients.forEach((n=>{n.quantity=n.quantity*e/_t.recipe.servings})),_t.recipe.servings=Number(e)}(e),Tt.update(_t.recipe)};function xt(e){$t.render(bt(e)),jt.render(_t.search)}const Nt=function(){_t.recipe.bookmarked?function(e){const n=_t.bookmarks.findIndex((n=>n.id===e));_t.bookmarks.splice(n,1),e===_t.recipe.id&&(_t.recipe.bookmarked=!1),yt()}(_t.recipe.id):wt(_t.recipe),Tt.update(_t.recipe),Pt.render(_t.bookmarks)},Rt=function(){Pt.render(_t.bookmarks)},Ct=async function(e){try{Mt.renderSpiner(),await async function(e){try{const n=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const n=e[1].replaceAll(" ","").split(",");if(3!==n.length)throw new Error("wrong ingridient format!");const[t,r,i]=n;return{quantity:t?+t:null,unit:r,description:i}}));console.log(Object.entries(e));const t={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:n},r=await ht("https://forkify-api.herokuapp.com/api/v2/recipes/?key=afcaf630-b4e7-4059-8d38-8fef32a48419",t);_t.recipe=mt(r),wt(_t.recipe)}catch(e){throw e}}(e),console.log(_t.recipe),Tt.render(_t.recipe),Mt.renderMessage(),Pt.render(_t.bookmarks),window.history.pushState(null,"",`#${_t.recipe.id}`),setTimeout((function(){Mt.toggleWindow()}),2500)}catch(e){console.log(e),Mt.renderError(e.message)}};Pt.addHandlerRender(Rt),Tt.addHandlerAddBookmark(Nt),Tt.addHandlerUpdateServings(qt),Tt.addHandlerRender(Lt),Et.addHandlerSearch(Ht),jt.addHandlerClick(xt),Mt.addHandlerUpload(Ct);
//# sourceMappingURL=index.2377fa7d.js.map

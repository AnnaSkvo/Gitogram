(function(){"use strict";var e={5577:function(e,t,n){var r={};n.r(r),n.d(r,{IconArrow:function(){return we},IconArrowToggle:function(){return st},IconClose:function(){return We},IconExit:function(){return ge},IconFork:function(){return Re},IconGitogram:function(){return Fe},IconHome:function(){return le},IconStar:function(){return je}});var s=n(5130),a=n(782),o=(n(4603),n(7566),n(8721),n(8355));const i="https://api.github.com",c=({url:e,method:t="get",data:n={},headers:r={}})=>(0,o.A)({url:e,method:t,data:n,baseURL:i,headers:r}),l=e=>e<10?`0${e}`:e,d=(e="javascript")=>{const t=new URLSearchParams,n=6048e5,r=new Date(Date.now()-n),s=[r.getFullYear(),l(r.getMonth()+1),l(r.getDate())].join("-");return t.append("order","desc"),t.append("sort","stars"),t.append("per_rage",10),t.append("q",`language:${e} created:>${s}`),c({url:`/search/repositories?${t}`})},u=({owner:e,repo:t})=>{const n="application/vnd.github.v3.html+json";return c({url:`/repos/${e}/${t}/readme`,headers:{accept:n}})},v={namespaced:!0,state:{data:[]},mutations:{SET_TRENDINGS:(e,t)=>{e.data=t},SET_README:(e,t)=>{e.data=e.data.map((e=>(t.id===e.id&&(e.readme=t.content),e)))}},getters:{getRepoById:e=>t=>e.data.find((e=>e.id===t))},actions:{async fetchTrendings({state:e,commit:t}){console.log("state",e);try{const{data:e}=await d();t("SET_TRENDINGS",e.items)}catch(n){console.log(n)}},async fetchReadme({commit:e,getters:t},{id:n,owner:r,repo:s}){const a=t.getRepoById(n);if(void 0===a.readme)try{const{data:t}=await u({owner:r,repo:s});e("SET_README",{id:n,content:t})}catch(o){console.log(o)}}}};var C=(0,a.y$)({modules:{trendings:v}}),p=n(6768);function m(e,t,n,r,s,a){const o=(0,p.g2)("router-view");return(0,p.uX)(),(0,p.Wv)(o)}var g={name:"App"},f=n(1241);const h=(0,f.A)(g,[["render",m]]);var L=h,b=n(1387),k=(n(4114),n(4232));const _=e=>((0,p.Qi)("data-v-5d9bb915"),e=e(),(0,p.jt)(),e),w={class:"headerline"},x={class:"logo"},S={class:"rightmenu"},y={class:"icon"},I={class:"icon"},A={class:"stories_list"},E={class:"content_feed"},F={class:"feed_list"},H={class:"news_card"},X={class:"avatar"},V=["src"],T={class:"user_name"},M={class:"news_title"},O={class:"news_text"},R={class:"star_fork"},P={class:"star_text"},Z={class:"icon_star_fork"},$=_((()=>(0,p.Lk)("div",null,"Star",-1))),B={class:"star_value"},N={class:"fork_text"},q={class:"icon_star_fork"},j=_((()=>(0,p.Lk)("div",{class:"fork_text_content"},"Fork",-1))),G={class:"fork_value"},U={class:"feed_date"};function D(e,t,n,r,s,a){const o=(0,p.g2)("IconComponent"),i=(0,p.g2)("CurrentUserTop"),c=(0,p.g2)("StoriesItem"),l=(0,p.g2)("HeaderLine"),d=(0,p.g2)("TogglerComponent"),u=(0,p.g2)("NewsCard");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.Lk)("header",null,[(0,p.Lk)("div",w,[(0,p.bF)(l,null,{navigate:(0,p.k6)((()=>[(0,p.Lk)("div",x,[(0,p.bF)(o,{name:"IconGitogram"})]),(0,p.Lk)("div",S,[(0,p.Lk)("div",y,[(0,p.bF)(o,{name:"IconHome"})]),(0,p.bF)(i,{avatar:s.currentuser.avatar,onOnPress:t[0]||(t[0]=e=>a.currentuserPress(s.currentuser.id))},null,8,["avatar"]),(0,p.Lk)("div",I,[(0,p.bF)(o,{name:"IconExit"})])])])),stories:(0,p.k6)((()=>[(0,p.Lk)("ul",A,[((0,p.uX)(!0),(0,p.CE)(p.FK,null,(0,p.pI)(s.feeds,(t=>((0,p.uX)(),(0,p.CE)("li",{class:"stories_link",key:t.id},[(0,p.bF)(c,{avatar:t.owner.avatar_url,username:t.owner.login,onOnstoryPress:n=>e.$router.push({name:"stories",params:{initialSlide:t.id}})},null,8,["avatar","username","onOnstoryPress"])])))),128))])])),_:1})])]),(0,p.Lk)("main",E,[(0,p.Lk)("ul",F,[((0,p.uX)(!0),(0,p.CE)(p.FK,null,(0,p.pI)(s.feeds,(e=>((0,p.uX)(),(0,p.CE)("li",{class:"feed_link",key:e.id},[(0,p.Lk)("div",H,[(0,p.bF)(u,null,{user:(0,p.k6)((()=>[(0,p.Lk)("div",X,[(0,p.Lk)("img",{src:e.owner.avatar_url,class:"img",alt:"user_avatar"},null,8,V)]),(0,p.Lk)("p",T,(0,k.v_)(e.owner.login),1)])),news:(0,p.k6)((()=>[(0,p.Lk)("h1",M,(0,k.v_)(e.name),1),(0,p.Lk)("p",O,(0,k.v_)(e.description),1),(0,p.Lk)("div",R,[(0,p.Lk)("div",P,[(0,p.Lk)("div",Z,[(0,p.bF)(o,{name:"IconStar",style:{"margin-top":"2px"}})]),$]),(0,p.Lk)("div",B,(0,k.v_)(e.stargazers_count),1),(0,p.Lk)("div",N,[(0,p.Lk)("div",q,[(0,p.bF)(o,{name:"IconFork",style:{"margin-top":"2px"}})]),j]),(0,p.Lk)("div",G,(0,k.v_)(e.forks_count),1)])])),comments:(0,p.k6)((()=>[(0,p.bF)(d,{feed:e},null,8,["feed"])])),date:(0,p.k6)((()=>[(0,p.Lk)("p",U,(0,k.v_)(new Date(e.created_at).toLocaleDateString()),1)])),_:2},1024)])])))),128))])])],64)}const J={class:"headerline"},Q={class:"x-container"},K={class:"navigate"},W={key:0,class:"stories"};function Y(e,t,n,r,s,a){return(0,p.uX)(),(0,p.CE)("div",J,[(0,p.Lk)("div",Q,[(0,p.Lk)("div",K,[(0,p.RG)(e.$slots,"navigate",{},void 0,!0)]),e.$slots.stories?((0,p.uX)(),(0,p.CE)("div",W,[(0,p.RG)(e.$slots,"stories",{},void 0,!0)])):(0,p.Q3)("",!0)])])}var z={name:"HeaderLine"};const ee=(0,f.A)(z,[["render",Y],["__scopeId","data-v-5d1a577f"]]);var te=ee;function ne(e,t,n,r,s,a){return(0,p.uX)(),(0,p.Wv)((0,p.$y)(n.name))}const re={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},se=(0,p.Lk)("path",{d:"M14.0692 4.06704C15.1853 3.12849 16.8147 3.12849 17.9308 4.06704L26.9308 11.6352C27.6087 12.2052 28 13.0456 28 13.9313V26.5C28 27.6046 27.1046 28.5 26 28.5H20.5C19.3954 28.5 18.5 27.6046 18.5 26.5V19.5H13.5V26.5C13.5 27.6046 12.6046 28.5 11.5 28.5H6C4.89543 28.5 4 27.6046 4 26.5V13.9313C4 13.0456 4.39135 12.2052 5.0692 11.6352L14.0692 4.06704Z",fill:"currentColor"},null,-1),ae=[se];function oe(e,t){return(0,p.uX)(),(0,p.CE)("svg",re,ae)}const ie={},ce=(0,f.A)(ie,[["render",oe]]);var le=ce;const de={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ue=(0,p.Lk)("path",{d:"M16 6.94273V14.625L16.0007 15.2562L25.3025 15.255L23.1495 13.1003C22.8167 12.7674 22.7865 12.2466 23.0589 11.8796L23.1497 11.7745C23.4826 11.4417 24.0034 11.4116 24.3704 11.6839L24.4755 11.7747L28.2213 15.5218C28.5538 15.8544 28.5842 16.3746 28.3125 16.7416L28.2219 16.8467L24.4762 20.601C24.1105 20.9676 23.5169 20.9683 23.1503 20.6026C22.8171 20.2701 22.7863 19.7493 23.0582 19.382L23.1488 19.2767L25.29 17.13L16.0007 17.1312L16 25.5625C16 26.1455 15.4735 26.5871 14.8994 26.4857L4.27444 24.6091C3.82651 24.53 3.5 24.1408 3.5 23.6859V8.68752C3.5 8.22839 3.83252 7.83681 4.28558 7.76241L14.9106 6.01762C15.4813 5.92389 16 6.36432 16 6.94273ZM11.6277 15.875C10.9358 15.875 10.375 16.4359 10.375 17.1277C10.375 17.8196 10.9358 18.3804 11.6277 18.3804C12.3195 18.3804 12.8804 17.8196 12.8804 17.1277C12.8804 16.4359 12.3195 15.875 11.6277 15.875ZM17.25 24.6266L18.2064 24.6268L18.3338 24.6183C18.7919 24.556 19.1447 24.163 19.1439 23.6878L19.135 18.375H17.25V24.6266ZM17.2525 14L17.25 12.4067V7.75002L18.1816 7.75002C18.6556 7.75002 19.0476 8.10192 19.1103 8.55891L19.1191 8.68597L19.1275 14H17.2525Z",fill:"currentColor"},null,-1),ve=[ue];function Ce(e,t){return(0,p.uX)(),(0,p.CE)("svg",de,ve)}const pe={},me=(0,f.A)(pe,[["render",Ce]]);var ge=me;const fe={preserveAspectRatio:"none",viewBox:"0 0 20 18",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},he=(0,p.Lk)("path",{d:"M11.2777 0.561221L11.4319 0.694353L18.7668 8.02919L18.9131 8.20146C19.2594 8.68441 19.2549 9.34124 18.8998 9.81971L18.7666 9.97393L11.4305 17.3073L11.2762 17.4404C10.7379 17.8397 9.97398 17.7951 9.48592 17.3069C8.99785 16.8186 8.95362 16.0547 9.35312 15.5165L9.48629 15.3623L14.4734 10.375H2.20837L2.0218 10.3624C1.41167 10.2796 0.928696 9.79667 0.845925 9.18654L0.833374 8.99996L0.845925 8.81338C0.928696 8.20325 1.41167 7.72028 2.0218 7.63751L2.20837 7.62496H14.4734L9.48739 2.6389L9.34111 2.46665C8.99486 1.98378 8.99924 1.32705 9.35426 0.848571L9.48739 0.694353L9.65964 0.548072C10.1425 0.201816 10.7992 0.206199 11.2777 0.561221Z",fill:"currentColor"},null,-1),Le=[he];function be(e,t){return(0,p.uX)(),(0,p.CE)("svg",fe,Le)}const ke={},_e=(0,f.A)(ke,[["render",be]]);var we=_e;const xe={preserveAspectRatio:"none",viewBox:"0 0 175 37",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Se=(0,p.Fv)('<path d="M18.6664 10.4756H24.3009C23.5838 5.28933 19.0122 1.63971 13.0832 1.63971C6.15528 1.63971 0.815308 6.63393 0.815308 15.1369C0.815308 23.435 5.80953 28.5829 13.1984 28.5829C19.819 28.5829 24.5443 24.3954 24.5443 17.4931V14.1893H13.5698V18.3639H19.2043C19.1274 21.6166 16.9121 23.6783 13.224 23.6783C9.06217 23.6783 6.43701 20.5665 6.43701 15.0857C6.43701 9.63046 9.16462 6.54429 13.1728 6.54429C16.0285 6.54429 17.9621 8.01694 18.6664 10.4756Z" fill="currentColor"></path><path d="M28.5773 28.2243H34.0325V8.55478H28.5773V28.2243ZM31.3177 6.01925C32.944 6.01925 34.2758 4.7771 34.2758 3.25322C34.2758 1.74215 32.944 0.5 31.3177 0.5C29.7042 0.5 28.3724 1.74215 28.3724 3.25322C28.3724 4.7771 29.7042 6.01925 31.3177 6.01925Z" fill="currentColor"></path><path d="M47.6026 8.55478H43.9017V3.84229H38.4465V8.55478H35.7573V12.6526H38.4465V22.8972C38.4209 26.7517 41.046 28.6597 45.003 28.4932C46.4116 28.442 47.4105 28.1603 47.9611 27.981L47.1031 23.9216C46.8342 23.9728 46.258 24.1009 45.7457 24.1009C44.6572 24.1009 43.9017 23.6911 43.9017 22.18V12.6526H47.6026V8.55478Z" fill="currentColor"></path><path d="M58.5699 28.6085C64.5373 28.6085 68.251 24.5235 68.251 18.4664C68.251 12.3709 64.5373 8.29867 58.5699 8.29867C52.6024 8.29867 48.8888 12.3709 48.8888 18.4664C48.8888 24.5235 52.6024 28.6085 58.5699 28.6085ZM58.5955 24.3826C55.8422 24.3826 54.4336 21.8599 54.4336 18.428C54.4336 14.996 55.8422 12.4605 58.5955 12.4605C61.2975 12.4605 62.7061 14.996 62.7061 18.428C62.7061 21.8599 61.2975 24.3826 58.5955 24.3826Z" fill="currentColor"></path><path d="M79.3975 36.0102C85.0192 36.0102 89.0146 33.449 89.0146 28.4164V8.55478H83.5978V11.8586H83.3929C82.663 10.2579 81.0623 8.29867 77.7712 8.29867C73.4557 8.29867 69.8061 11.6538 69.8061 18.3511C69.8061 24.8948 73.3533 27.9426 77.784 27.9426C80.9214 27.9426 82.6758 26.3675 83.3929 24.7412H83.6234V28.3396C83.6234 31.0416 81.8947 32.0916 79.5256 32.0916C77.1181 32.0916 75.9016 31.0416 75.4534 29.8506L70.4079 30.5293C71.061 33.6283 74.096 36.0102 79.3975 36.0102ZM79.5128 23.8448C76.8364 23.8448 75.3766 21.719 75.3766 18.3255C75.3766 14.9832 76.8108 12.6398 79.5128 12.6398C82.1636 12.6398 83.649 14.8808 83.649 18.3255C83.649 21.7959 82.138 23.8448 79.5128 23.8448Z" fill="currentColor"></path><path d="M92.0936 28.2243H97.5488V17.0962C97.5488 14.6759 99.316 13.0112 101.723 13.0112C102.479 13.0112 103.516 13.1392 104.029 13.3057V8.46514C103.542 8.34989 102.863 8.27305 102.313 8.27305C100.11 8.27305 98.3044 9.55362 97.5873 11.9867H97.3824V8.55478H92.0936V28.2243Z" fill="currentColor"></path><path d="M110.632 28.5957C113.539 28.5957 115.422 27.3279 116.382 25.4967H116.536V28.2243H121.709V14.9576C121.709 10.2707 117.739 8.29867 113.36 8.29867C108.647 8.29867 105.548 10.5525 104.793 14.1381L109.838 14.5478C110.21 13.2417 111.375 12.2812 113.334 12.2812C115.191 12.2812 116.254 13.2161 116.254 14.8296V14.9064C116.254 16.1742 114.909 16.3406 111.49 16.6736C107.597 17.0321 104.101 18.3383 104.101 22.7307C104.101 26.6236 106.88 28.5957 110.632 28.5957ZM112.195 24.8308C110.517 24.8308 109.313 24.0497 109.313 22.5514C109.313 21.0147 110.581 20.2592 112.502 19.9903C113.693 19.8238 115.639 19.5421 116.292 19.1067V21.194C116.292 23.2557 114.589 24.8308 112.195 24.8308Z" fill="currentColor"></path><path d="M124.679 28.2243H130.135V16.4175C130.135 14.2405 131.518 12.7935 133.336 12.7935C135.129 12.7935 136.333 14.0228 136.333 15.9565V28.2243H141.621V16.2126C141.621 14.1765 142.787 12.7935 144.771 12.7935C146.513 12.7935 147.819 13.8819 147.819 16.0717V28.2243H153.262V14.996C153.262 10.7317 150.726 8.29867 147.064 8.29867C144.182 8.29867 141.941 9.77132 141.135 12.0251H140.93C140.302 9.74571 138.292 8.29867 135.59 8.29867C132.939 8.29867 130.929 9.70729 130.109 12.0251H129.878V8.55478H124.679V28.2243Z" fill="currentColor"></path><path d="M174.815 0.768919H170.116L161.664 32.1685H166.364L174.815 0.768919Z" fill="currentColor"></path>',9),ye=[Se];function Ie(e,t){return(0,p.uX)(),(0,p.CE)("svg",xe,ye)}const Ae={},Ee=(0,f.A)(Ae,[["render",Ie]]);var Fe=Ee;const He={preserveAspectRatio:"none",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Xe=(0,p.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 2.25001C3 2.44892 2.92099 2.63969 2.78033 2.78034C2.63968 2.92099 2.44892 3.00001 2.25 3.00001C2.05109 3.00001 1.86033 2.92099 1.71967 2.78034C1.57902 2.63969 1.5 2.44892 1.5 2.25001C1.5 2.05109 1.57902 1.86033 1.71967 1.71968C1.86033 1.57902 2.05109 1.50001 2.25 1.50001C2.44892 1.50001 2.63968 1.57902 2.78033 1.71968C2.92099 1.86033 3 2.05109 3 2.25001ZM3 4.37201C3.50042 4.19509 3.92217 3.84696 4.19073 3.38915C4.45929 2.93134 4.55735 2.39333 4.4676 1.87021C4.37785 1.34709 4.10605 0.87253 3.70025 0.53043C3.29445 0.18832 2.78077 0.00069046 2.25 0.00069046C1.71924 0.00069046 1.20556 0.18832 0.799762 0.53043C0.393962 0.87253 0.122161 1.34709 0.0324114 1.87021C-0.0573486 2.39333 0.0407214 2.93134 0.309281 3.38915C0.577841 3.84696 0.999591 4.19509 1.5 4.37201V5.25001C1.5 5.84674 1.73706 6.41904 2.15901 6.841C2.58097 7.26295 3.15327 7.50001 3.75 7.50001H5.25V9.628C4.74932 9.8049 4.3273 10.1532 4.05855 10.6112C3.78981 11.0692 3.69164 11.6075 3.78139 12.1309C3.87115 12.6543 4.14306 13.1291 4.54905 13.4714C4.95504 13.8136 5.46897 14.0014 6 14.0014C6.53104 14.0014 7.04497 13.8136 7.45096 13.4714C7.85695 13.1291 8.1289 12.6543 8.2186 12.1309C8.3084 11.6075 8.2102 11.0692 7.94146 10.6112C7.67271 10.1532 7.25069 9.8049 6.75 9.628V7.50001H8.25C8.8467 7.50001 9.419 7.26295 9.841 6.841C10.263 6.41904 10.5 5.84674 10.5 5.25001V4.37201C11.0004 4.19509 11.4222 3.84696 11.6907 3.38915C11.9593 2.93134 12.0574 2.39333 11.9676 1.87021C11.8778 1.34709 11.6061 0.87253 11.2002 0.53043C10.7944 0.18832 10.2808 0.00069046 9.75 0.00069046C9.2192 0.00069046 8.7056 0.18832 8.2998 0.53043C7.89396 0.87253 7.62216 1.34709 7.53241 1.87021C7.44265 2.39333 7.54072 2.93134 7.80928 3.38915C8.0778 3.84696 8.4996 4.19509 9 4.37201V5.25001C9 5.44892 8.921 5.63969 8.7803 5.78034C8.6397 5.92099 8.4489 6.00001 8.25 6.00001H3.75C3.55109 6.00001 3.36033 5.92099 3.21967 5.78034C3.07902 5.63969 3 5.44892 3 5.25001V4.37201ZM6.75 11.75C6.75 11.9489 6.67099 12.1397 6.53033 12.2803C6.38968 12.421 6.19892 12.5 6 12.5C5.80109 12.5 5.61033 12.421 5.46967 12.2803C5.32902 12.1397 5.25 11.9489 5.25 11.75C5.25 11.5511 5.32902 11.3603 5.46967 11.2197C5.61033 11.079 5.80109 11 6 11C6.19892 11 6.38968 11.079 6.53033 11.2197C6.67099 11.3603 6.75 11.5511 6.75 11.75ZM9.75 3.00001C9.9489 3.00001 10.1397 2.92099 10.2803 2.78034C10.421 2.63969 10.5 2.44892 10.5 2.25001C10.5 2.05109 10.421 1.86033 10.2803 1.71968C10.1397 1.57902 9.9489 1.50001 9.75 1.50001C9.5511 1.50001 9.3603 1.57902 9.2197 1.71968C9.079 1.86033 9 2.05109 9 2.25001C9 2.44892 9.079 2.63969 9.2197 2.78034C9.3603 2.92099 9.5511 3.00001 9.75 3.00001Z",fill:"currentColor"},null,-1),Ve=[Xe];function Te(e,t){return(0,p.uX)(),(0,p.CE)("svg",He,Ve)}const Me={},Oe=(0,f.A)(Me,[["render",Te]]);var Re=Oe;const Pe={preserveAspectRatio:"none",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ze=(0,p.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 0.25C8.14006 0.24991 8.2773 0.289014 8.39624 0.362887C8.51518 0.43676 8.61106 0.542452 8.67304 0.668L10.555 4.483L14.765 5.095C14.9035 5.11511 15.0336 5.17355 15.1405 5.26372C15.2475 5.35388 15.3272 5.47218 15.3704 5.60523C15.4137 5.73829 15.4189 5.8808 15.3854 6.01665C15.352 6.1525 15.2812 6.27628 15.181 6.374L12.135 9.344L12.854 13.536C12.8777 13.6739 12.8624 13.8157 12.8097 13.9454C12.757 14.0751 12.6691 14.1874 12.5559 14.2697C12.4427 14.352 12.3087 14.401 12.1691 14.4111C12.0295 14.4212 11.8899 14.3921 11.766 14.327L8.00004 12.347L4.23404 14.327C4.11023 14.392 3.97071 14.4211 3.83123 14.411C3.69176 14.4009 3.55788 14.352 3.44472 14.2699C3.33157 14.1877 3.24363 14.0755 3.19086 13.946C3.13808 13.8165 3.12255 13.6749 3.14604 13.537L3.86604 9.343L0.818042 6.374C0.717608 6.27632 0.646541 6.15247 0.612894 6.01647C0.579246 5.88047 0.584364 5.73777 0.627666 5.60453C0.670969 5.47129 0.750725 5.35284 0.857898 5.26261C0.96507 5.17238 1.09537 5.11397 1.23404 5.094L5.44404 4.483L7.32704 0.668C7.38902 0.542452 7.48491 0.43676 7.60385 0.362887C7.72279 0.289014 7.86003 0.24991 8.00004 0.25ZM8.00004 2.695L6.61504 5.5C6.56126 5.6089 6.48183 5.70311 6.38359 5.77453C6.28534 5.84595 6.17122 5.89244 6.05104 5.91L2.95404 6.36L5.19404 8.544C5.28119 8.62886 5.3464 8.73365 5.38403 8.84933C5.42166 8.96501 5.43059 9.0881 5.41004 9.208L4.88204 12.292L7.65104 10.836C7.75867 10.7794 7.87845 10.7499 8.00004 10.7499C8.12164 10.7499 8.24141 10.7794 8.34904 10.836L11.119 12.292L10.589 9.208C10.5685 9.0881 10.5774 8.96501 10.615 8.84933C10.6527 8.73365 10.7179 8.62886 10.805 8.544L13.045 6.361L9.94904 5.911C9.82886 5.89344 9.71474 5.84695 9.6165 5.77553C9.51825 5.70411 9.43883 5.6099 9.38504 5.501L8.00004 2.694V2.695Z",fill:"currentColor"},null,-1),$e=[Ze];function Be(e,t){return(0,p.uX)(),(0,p.CE)("svg",Pe,$e)}const Ne={},qe=(0,f.A)(Ne,[["render",Be]]);var je=qe;const Ge={preserveAspectRatio:"none",viewBox:"0 0 23 23",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Ue=(0,p.Lk)("path",{d:"M0.899054 0.887401L1.01256 0.762563C1.65578 0.119347 2.67513 0.0815103 3.3626 0.649054L3.48744 0.762563L11.75 9.025L20.0126 0.762563C20.696 0.0791457 21.804 0.0791457 22.4874 0.762563C23.1709 1.44598 23.1709 2.55402 22.4874 3.23744L14.225 11.5L22.4874 19.7626C23.1307 20.4058 23.1685 21.4251 22.6009 22.1126L22.4874 22.2374C21.8442 22.8807 20.8249 22.9185 20.1374 22.3509L20.0126 22.2374L11.75 13.975L3.48744 22.2374C2.80402 22.9209 1.69598 22.9209 1.01256 22.2374C0.329146 21.554 0.329146 20.446 1.01256 19.7626L9.275 11.5L1.01256 3.23744C0.369347 2.59422 0.33151 1.57487 0.899054 0.887401L1.01256 0.762563L0.899054 0.887401Z",fill:"currentColor"},null,-1),De=[Ue];function Je(e,t){return(0,p.uX)(),(0,p.CE)("svg",Ge,De)}const Qe={},Ke=(0,f.A)(Qe,[["render",Je]]);var We=Ke;const Ye={preserveAspectRatio:"none",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ze=(0,p.Lk)("path",{d:"M9.79959 5.26034C9.51774 5.56387 9.04319 5.58144 8.73966 5.29959L5 1.77348L1.26033 5.29959C0.956802 5.58144 0.482254 5.56387 0.200401 5.26034C-0.0814505 4.9568 -0.0638752 4.48225 0.239658 4.2004L4.48966 0.200402C4.77742 -0.0668049 5.22257 -0.0668049 5.51033 0.200402L9.76034 4.2004C10.0639 4.48225 10.0814 4.9568 9.79959 5.26034Z",fill:"currentColor"},null,-1),et=[ze];function tt(e,t){return(0,p.uX)(),(0,p.CE)("svg",Ye,et)}const nt={},rt=(0,f.A)(nt,[["render",tt]]);var st=rt,at={name:"IconComponent",components:{...r},props:{name:{type:String,required:!0,validator(e){return Object.keys(r).includes(e)}}}};const ot=(0,f.A)(at,[["render",ne]]);var it=ot;const ct={class:"border_avatar"},lt={class:"avatar"},dt=["src"],ut={class:"username"};function vt(e,t,n,r,s,a){return(0,p.uX)(),(0,p.CE)("button",{class:"storiesItem",onClick:t[0]||(t[0]=t=>e.$emit("onstoryPress"))},[(0,p.Lk)("div",ct,[(0,p.Lk)("div",lt,[(0,p.Lk)("img",{src:n.avatar,class:"img",alt:"user_avatar"},null,8,dt)])]),(0,p.Lk)("div",ut,(0,k.v_)(n.username),1)])}var Ct={name:"StoriesItem",props:{avatar:{type:String,required:!0},username:{type:String,required:!0}},data(){return{}}};const pt=(0,f.A)(Ct,[["render",vt],["__scopeId","data-v-2b5ea376"]]);var mt=pt;const gt={key:0,class:"comments"},ft={class:"comments_list"};function ht(e,t,n,r,s,a){const o=(0,p.g2)("ArrowButton"),i=(0,p.g2)("CommentUser");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.bF)(o,{onOnToggle:a.toggle},null,8,["onOnToggle"]),s.shown?((0,p.uX)(),(0,p.CE)("div",gt,[(0,p.Lk)("ul",ft,[((0,p.uX)(!0),(0,p.CE)(p.FK,null,(0,p.pI)(s.feed_comments,(e=>((0,p.uX)(),(0,p.CE)("li",{class:"comments_item",key:e.id},[(0,p.bF)(i,{text:e.comment,username:e.username},null,8,["text","username"])])))),128))])])):(0,p.Q3)("",!0)],64)}const Lt={class:"text"},bt={class:"icon"};function kt(e,t,n,r,s,a){const o=(0,p.g2)("IconComponent");return(0,p.uX)(),(0,p.CE)("button",{class:(0,k.C4)(["button",{active:s.isOpened}]),onClick:t[0]||(t[0]=(...e)=>a.toggle&&a.toggle(...e))},[(0,p.Lk)("span",Lt,(0,k.v_)(s.isOpened?"Hide":"View")+" issues",1),(0,p.Lk)("span",bt,[(0,p.bF)(o,{name:"IconArrowToggle"})])],2)}var _t={name:"ArrowButton",components:{IconComponent:it},data(){return{isOpened:!1}},methods:{toggle(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};const wt=(0,f.A)(_t,[["render",kt],["__scopeId","data-v-746609e6"]]);var xt=wt;const St={class:"comment"},yt={class:"username"};function It(e,t,n,r,s,a){return(0,p.uX)(),(0,p.CE)("div",St,[(0,p.Lk)("p",null,[(0,p.Lk)("span",yt,(0,k.v_)(n.username),1),(0,p.eW)(" "+(0,k.v_)(n.text),1)])])}var At={name:"CommentUser",props:{username:{type:String,required:!0},text:{type:String}}};const Et=(0,f.A)(At,[["render",It],["__scopeId","data-v-560b211e"]]);var Ft=Et,Ht={name:"TogglerComponent",components:{ArrowButton:xt,CommentUser:Ft},props:{feed:{type:Object,required:!0}},data(){return{shown:!1,feed_comments:[{id:"1",username:"joshua_l",comment:"Enable performance measuring in production, at the user's request"},{id:"2",username:"Camille",comment:"It's Impossible to Rename an Inherited Slot"},{id:"3",username:"Marselle",comment:"transition-group with flex parent causes removed items to fly"}]}},methods:{toggle(e){this.shown=e,this.$emit("onToggle",e)}}};const Xt=(0,f.A)(Ht,[["render",ht],["__scopeId","data-v-0595d84c"]]);var Vt=Xt;const Tt=["src"];function Mt(e,t,n,r,s,a){return(0,p.uX)(),(0,p.CE)("button",{class:"currentuser",onClick:t[0]||(t[0]=t=>e.$emit("onPress"))},[(0,p.Lk)("img",{src:n.avatar,class:"img",alt:"currentuser_avatar"},null,8,Tt)])}var Ot={name:"CurrentUserTop",props:{avatar:{type:String,required:!0}}};const Rt=(0,f.A)(Ot,[["render",Mt],["__scopeId","data-v-f2687c3a"]]);var Pt=Rt;const Zt={class:"newscard"},$t={class:"x-container"},Bt={class:"user"},Nt={class:"news"},qt={class:"comments"},jt={class:"date"};function Gt(e,t,n,r,s,a){return(0,p.uX)(),(0,p.CE)("div",Zt,[(0,p.Lk)("div",$t,[(0,p.Lk)("div",Bt,[(0,p.RG)(e.$slots,"user",{},void 0,!0)]),(0,p.Lk)("div",Nt,[(0,p.RG)(e.$slots,"news",{},void 0,!0)]),(0,p.Lk)("div",qt,[(0,p.RG)(e.$slots,"comments",{},void 0,!0)]),(0,p.Lk)("div",jt,[(0,p.RG)(e.$slots,"date",{},void 0,!0)])])])}var Ut={name:"NewsCard",data(){return{shown:!1}},methods:{toggle(e){this.shown=e}}};const Dt=(0,f.A)(Ut,[["render",Gt],["__scopeId","data-v-4fe0b927"]]);var Jt=Dt,Qt=JSON.parse('[{"id":"ab8c3636-2ae3-4856-a2b1-7dd17b5f4802","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmA_K0xJxXq6VQFwJBXUmtFAvvoJJBmxYZg&usqp=CAU","username":"Josh"},{"id":"78d0b57f-8d16-4282-8f4c-4a79043bde9f","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5f0fnDrIUfUBsfKHRTnIpCz4p_wIqfovltS2_h2R7TqdbNUQ2IhZ5spthpVIx0rtdlM&usqp=CAU","username":"Andrew"},{"id":"a4749aa8-d914-4e55-912c-273e590c7730","avatar":"https://i.pinimg.com/564x/96/09/94/960994de2c3cd9dae36651063e1d65fd.jpg","username":"Camille"},{"id":"2b07b328-55a3-4438-9d20-dc6eed604f4c","avatar":"https://cdn-icons-png.flaticon.com/512/2341/2341813.png","username":"Marselle"},{"id":"95d2d8e0-b522-4f37-b0fa-6730818883d3","avatar":"https://cdn-icons-png.flaticon.com/512/149/149452.png","username":"Piter"},{"id":"5fcbd62d-77aa-4358-8420-e07ec280192d","avatar":"https://cdn-icons-png.flaticon.com/512/149/149452.png","username":"Can"},{"id":"da1c2171-8385-4509-9901-fc794637f498","avatar":"https://cdn-icons-png.flaticon.com/512/149/149452.png","username":"Iloveanime"},{"id":"8da7331f-1597-4978-805a-e04a205ed670","avatar":"https://cdn-icons-png.flaticon.com/512/149/149452.png","username":"Diself"},{"id":"0a7ce524-2413-48ec-88f1-f9d1470e7fb5","avatar":"https://cdn-icons-png.flaticon.com/512/149/149452.png","username":"Gartor"},{"id":"e26b9257-e561-4394-86e2-db66d02178ed","avatar":"https://cdn-icons-png.flaticon.com/512/149/149452.png","username":"Camilr"}]'),Kt=JSON.parse('{"id":"ab8c3636-2ae3-4856-a2b1-7dd17b5f4802","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmA_K0xJxXq6VQFwJBXUmtFAvvoJJBmxYZg&usqp=CAU","username":"Josh"}'),Wt={name:"FeedsPage",components:{HeaderLine:te,IconComponent:it,StoriesItem:mt,TogglerComponent:Vt,CurrentUserTop:Pt,NewsCard:Jt},data(){return{stories:Qt,currentuser:Kt,feeds:[]}},async created(){try{const{data:e}=await d();this.feeds=e.items}catch(e){console.log("error")}},methods:{currentuserPress(e){console.log("cvurrent_user_id",e)}}};const Yt=(0,f.A)(Wt,[["render",D],["__scopeId","data-v-5d9bb915"]]);var zt=Yt;const en={class:"logo"},tn={class:"rightmenu"},nn={class:"icon"},rn={class:"content_slider"};function sn(e,t,n,r,s,a){const o=(0,p.g2)("IconComponent"),i=(0,p.g2)("router-link"),c=(0,p.g2)("HeaderLine"),l=(0,p.g2)("StoriesSlider");return(0,p.uX)(),(0,p.CE)(p.FK,null,[(0,p.Lk)("header",null,[(0,p.bF)(c,null,{navigate:(0,p.k6)((()=>[(0,p.Lk)("div",en,[(0,p.bF)(i,{to:"/"},{default:(0,p.k6)((()=>[(0,p.bF)(o,{name:"IconGitogram"})])),_:1})]),(0,p.Lk)("div",tn,[(0,p.Lk)("div",nn,[(0,p.bF)(i,{to:"/"},{default:(0,p.k6)((()=>[(0,p.bF)(o,{name:"IconClose"})])),_:1})])])])),_:1})]),(0,p.Lk)("main",rn,[(0,p.bF)(l,{initialSlide:Number(e.$route.params.initialSlide)},null,8,["initialSlide"])])],64)}const an={class:"stories_slider"},on={class:"stories_container"},cn={class:"stories",ref:"item"};function ln(e,t,n,r,s,a){const o=(0,p.g2)("StoryPostItem");return(0,p.uX)(),(0,p.CE)("div",an,[(0,p.Lk)("div",on,[(0,p.Lk)("ul",cn,[((0,p.uX)(!0),(0,p.CE)(p.FK,null,(0,p.pI)(e.trendings,((e,t)=>((0,p.uX)(),(0,p.CE)("li",{class:"stories-item",key:e.id},[(0,p.bF)(o,{data:a.getStoryData(e),active:s.slideNdx===t,loading:s.slideNdx===t&&s.loading,btnsShown:a.activeBtns,onOnNextSlide:e=>a.handleSlide(t+1),onOnPrevSlide:e=>a.handleSlide(t-1),onOnProgressFinish:e=>a.handleSlide(t+1)},null,8,["data","active","loading","btnsShown","onOnNextSlide","onOnPrevSlide","onOnProgressFinish"])])))),128))],512),(0,p.Lk)("pre",null,(0,k.v_)(e.trendings),1)])])}const dn={class:"slider_item_container"},un={class:"header"},vn={class:"user"},Cn={class:"avatar"},pn=["src"],mn={class:"user_name"},gn={class:"content"},fn={class:"scroll_main"},hn={key:0,class:"loader"},Ln={key:1,class:"info"},bn=["innerHTML"],kn={class:"footer"},_n={key:0,class:"arrow_btn"},wn={class:"icon"},xn={class:"icon"};function Sn(e,t,n,r,s,a){const o=(0,p.g2)("LineProgress"),i=(0,p.g2)("SpinnerItem"),c=(0,p.g2)("PlaceholderComponent"),l=(0,p.g2)("xButton"),d=(0,p.g2)("IconComponent");return(0,p.uX)(),(0,p.CE)("div",{class:(0,k.C4)(["story_post_item",{active:n.active}])},[(0,p.Lk)("div",dn,[(0,p.Lk)("div",un,[n.active?((0,p.uX)(),(0,p.Wv)(o,{key:0,onOnFinish:t[0]||(t[0]=t=>e.$emit("onProgressFinish"))})):(0,p.Q3)("",!0),(0,p.Lk)("div",vn,[(0,p.Lk)("div",Cn,[(0,p.Lk)("img",{src:n.data.userAvatar,class:"img",alt:"user_avatar"},null,8,pn)]),(0,p.Lk)("p",mn,(0,k.v_)(n.data.username),1)])]),(0,p.Lk)("div",gn,[(0,p.Lk)("div",fn,[n.loading?((0,p.uX)(),(0,p.CE)("div",hn,[(0,p.bF)(i)])):((0,p.uX)(),(0,p.CE)("div",Ln,[n.data.content?.length?((0,p.uX)(),(0,p.CE)("div",{key:0,class:"content-text",innerHTML:n.data.content},null,8,bn)):((0,p.uX)(),(0,p.Wv)(c,{key:1}))]))])]),(0,p.Lk)("div",kn,[(0,p.bF)(l,null,{default:(0,p.k6)((()=>[(0,p.eW)("Follow")])),_:1})]),n.active?((0,p.uX)(),(0,p.CE)("div",_n,[n.btnsShown.includes("prev")?((0,p.uX)(),(0,p.CE)("button",{key:0,class:"btn btn-prev",onClick:t[1]||(t[1]=t=>e.$emit("onPrevSlide"))},[(0,p.Lk)("span",wn,[(0,p.bF)(d,{name:"IconArrow"})])])):(0,p.Q3)("",!0),n.btnsShown.includes("next")?((0,p.uX)(),(0,p.CE)("button",{key:1,class:"btn btn-next",onClick:t[2]||(t[2]=t=>e.$emit("onNextSlide"))},[(0,p.Lk)("span",xn,[(0,p.bF)(d,{name:"IconArrow"})])])):(0,p.Q3)("",!0)])):(0,p.Q3)("",!0)])],2)}const yn=e=>((0,p.Qi)("data-v-b068a13c"),e=e(),(0,p.jt)(),e),In={class:"container_progress"},An=yn((()=>(0,p.Lk)("div",{id:"indicator",class:"line_progress"},null,-1))),En=[An];function Fn(e,t,n,r,s,a){return(0,p.uX)(),(0,p.CE)("div",In,En)}var Hn={name:"LineProgress",emits:["onFinish"],methods:{emitOnFinish(){this.$emit("onFinish")}},mounted(){this.$nextTick((()=>{setTimeout(this.emitOnFinish,5e3)}))}};const Xn=(0,f.A)(Hn,[["render",Fn],["__scopeId","data-v-b068a13c"]]);var Vn=Xn;const Tn=["text","hover-text"],Mn={class:"button_text"};function On(e,t,n,r,s,a){return(0,p.uX)(),(0,p.CE)("button",{class:(0,k.C4)(["button",{"hover-text":s.withHoverText}]),text:n.text,"hover-text":n.hoverText,onClick:t[0]||(t[0]=(...t)=>e.buttonClick&&e.buttonClick(...t))},[(0,p.Lk)("span",Mn,[(0,p.RG)(e.$slots,"default",{},void 0,!0)])],10,Tn)}var Rn={name:"xButton",props:{text:{type:String},hoverText:{type:String}},data(){return{withHoverText:!!this.hoverText}}};const Pn=(0,f.A)(Rn,[["render",On],["__scopeId","data-v-81d96b82"]]);var Zn=Pn;const $n={class:"placeholder_container"},Bn=(0,p.Fv)('<div class="placeholder_img" data-v-6ebb9e64></div><div class="placeholder_text" data-v-6ebb9e64><div class="text text1" data-v-6ebb9e64></div><div class="text text2" data-v-6ebb9e64></div><div class="text text3" data-v-6ebb9e64></div></div><div class="placeholder_text" data-v-6ebb9e64><div class="text text1" data-v-6ebb9e64></div><div class="text text2" data-v-6ebb9e64></div><div class="text text3" data-v-6ebb9e64></div></div>',3),Nn=[Bn];function qn(e,t,n,r,s,a){return(0,p.uX)(),(0,p.CE)("div",$n,Nn)}var jn={name:"PlaceholderComponent"};const Gn=(0,f.A)(jn,[["render",qn],["__scopeId","data-v-6ebb9e64"]]);var Un=Gn,Dn=n.p+"img/Spinner.fbd8560c.svg";const Jn=e=>((0,p.Qi)("data-v-6c9418fa"),e=e(),(0,p.jt)(),e),Qn={class:"spinner_container"},Kn=Jn((()=>(0,p.Lk)("img",{src:Dn,alt:"spinner"},null,-1))),Wn=[Kn];function Yn(e,t,n,r,s,a){return(0,p.uX)(),(0,p.CE)("div",Qn,Wn)}var zn={name:"SpinnerItem"};const er=(0,f.A)(zn,[["render",Yn],["__scopeId","data-v-6c9418fa"]]);var tr=er,nr={name:"StoryPostItem",components:{LineProgress:Vn,xButton:Zn,IconComponent:it,PlaceholderComponent:Un,SpinnerItem:tr},emits:["onPrevSlide","onNextSlide","onProgressFinish"],props:{active:Boolean,loading:Boolean,btnsShown:{type:Array,default:()=>["next","prev"],validator(e){return e.every((e=>"next"===e||"prev"===e))}},data:{type:Object,required:!0,default:()=>({})}}};const rr=(0,f.A)(nr,[["render",Sn],["__scopeId","data-v-509f506c"]]);var sr=rr,ar={name:"StoriesSlider",props:{initialSlide:{type:Number}},components:{StoryPostItem:sr},data(){return{slideNdx:0,sliderPosition:0,loading:!1,btnsShown:!0}},computed:{...(0,a.aH)({trendings:e=>e.trendings.data}),activeBtns(){return!1===this.btnsShown?[]:0===this.slideNdx?["next"]:this.slideNdx===this.trendings.length-1?["prev"]:["next","prev"]}},methods:{...(0,a.i0)({fetchTrendings:"trendings/fetchTrendings",fetchReadme:"trendings/fetchReadme"}),async fetchReadmeForActiveSlide(){const{id:e,owner:t,name:n}=this.trendings[this.slideNdx];await this.fetchReadme({id:e,owner:t.login,repo:n})},getStoryData(e){return{id:e.id,userAvatar:e.owner?.avatar_url,username:e.owner?.login,content:e.readme}},moveSlider(e){const{item:t}=this.$refs,n=378;this.slideNdx=e,this.sliderPosition=-n*e,t.style.transform=`translateX(${this.sliderPosition}px)`},async loadReadme(){this.loading=!0,this.btnsShown=!1;try{await this.fetchReadmeForActiveSlide()}catch(e){console.log(e)}finally{this.loading=!1,this.btnsShown=!0}},async handleSlide(e){this.moveSlider(e),await this.loadReadme()}},async mounted(){if(this.initialSlide){const e=this.trendings.findIndex((e=>e.id===this.initialSlide));await this.handleSlide(e)}await this.fetchTrendings(),await this.loadReadme()}};const or=(0,f.A)(ar,[["render",ln],["__scopeId","data-v-2d5c239a"]]);var ir=or,cr={name:"StoriesPage",components:{HeaderLine:te,IconComponent:it,StoriesSlider:ir},data(){return{}}};const lr=(0,f.A)(cr,[["render",sn],["__scopeId","data-v-872cf26e"]]);var dr=lr;const ur=[{path:"/",component:zt,name:"feeds"},{path:"/stories/:initialSlide",component:dr,name:"stories",props:!0}],vr=(0,b.aE)({history:(0,b.Bt)(),routes:ur});var Cr=vr;(0,s.Ef)(L).use(Cr).use(C).mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,a){if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],s=e[d][1],a=e[d][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Gitogram/dist/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,a,o=r[0],i=r[1],c=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var d=c(n)}for(t&&t(r);l<o.length;l++)a=o[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(5577)}));r=n.O(r)})();
//# sourceMappingURL=app.fb0bedc9.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ReviewShow"],{"1dde":function(t,e,r){var a=r("d039"),i=r("b622"),s=r("2d00"),n=i("species");t.exports=function(t){return s>=51||!a((function(){var e=[],r=e.constructor={};return r[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,r){"use strict";var a=r("23e7"),i=r("5a34"),s=r("1d80"),n=r("577e"),o=r("ab13");a({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~n(s(this)).indexOf(n(i(t)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,r){var a=r("861d"),i=r("c6b6"),s=r("b622"),n=s("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,r){var a=r("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"6c6c":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.review?r("div",{staticClass:"p-6 py-26 lg:px-12"},[r("div",{staticClass:"flex space-x-4"},[r("div",{staticClass:"flex-shrink-0"},[r("img",{staticClass:"rounded-lg object-cover lg:w-16 lg:h-16 w-10 h-10",attrs:{src:t.userImage(t.review.author_details),alt:t.review.author_details.name+"_poster"}})]),r("div",[r("h3",{staticClass:"text-gray-200 text-lg font-semibold"},[t._v(t._s(t.review.author_details.name?t.review.author_details.name:t.review.author_details.username))]),r("div",{staticClass:"flex items-center flex-wrap text-sm text-gray-400 mb-4"},[r("p",{staticClass:"mr-1"},[t._v(t._s(t.$moment(t.review.created_at).format("DD/MM/YYYY")))]),t.review.author_details.rating?r("p",{staticClass:"text-light-blue"},[t._v("• ha votato "+t._s(t.review.author_details.rating))]):t._e()]),r("p",{staticClass:"text-sm text-gray-400"},[t._v(t._s(t.review.content))]),r("p",{staticClass:"text-gray-300 text-sm mt-16"},[t._v("Recensione di "),r("router-link",{staticClass:"underline",attrs:{to:{name:"tv"==t.review.media_type?"Tv.show":"Movie.show",params:{id:t.review.media_id}}}},[t._v(" "+t._s(t.review.media_title)+" ")])],1)])])]):t._e()])},i=[],s=(r("caad"),r("2532"),r("fb6a"),{name:"Review.show",mounted:function(){this.getReview()},computed:{review:function(){return this.$store.state.reviews.review}},methods:{getReview:function(){this.$store.dispatch("reviews/getReview",{id:this.$route.params.id})},userImage:function(t){return t.avatar_path?t.avatar_path.includes("gravatar")?t.avatar_path.slice(1):"https://image.tmdb.org/t/p/w500/"+t.avatar_path:"https://eu.ui-avatars.com/api/?name="+t.username}}}),n=s,o=r("2877"),c=Object(o["a"])(n,a,i,!1,null,null,null);e["default"]=c.exports},8418:function(t,e,r){"use strict";var a=r("a04b"),i=r("9bf2"),s=r("5c6c");t.exports=function(t,e,r){var n=a(e);n in t?i.f(t,n,s(0,r)):t[n]=r}},ab13:function(t,e,r){var a=r("b622"),i=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[i]=!1,"/./"[t](e)}catch(a){}}return!1}},caad:function(t,e,r){"use strict";var a=r("23e7"),i=r("4d64").includes,s=r("44d2");a({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},e8b5:function(t,e,r){var a=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},fb6a:function(t,e,r){"use strict";var a=r("23e7"),i=r("e8b5"),s=r("68ee"),n=r("861d"),o=r("23cb"),c=r("07fa"),u=r("fc6a"),v=r("8418"),d=r("b622"),l=r("1dde"),f=l("slice"),p=d("species"),h=[].slice,m=Math.max;a({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var r,a,d,l=u(this),f=c(l),w=o(t,f),_=o(void 0===e?f:e,f);if(i(l)&&(r=l.constructor,s(r)&&(r===Array||i(r.prototype))?r=void 0:n(r)&&(r=r[p],null===r&&(r=void 0)),r===Array||void 0===r))return h.call(l,w,_);for(a=new(void 0===r?Array:r)(m(_-w,0)),d=0;w<_;w++,d++)w in l&&v(a,d,l[w]);return a.length=d,a}})}}]);
//# sourceMappingURL=ReviewShow.5be8acf4.js.map
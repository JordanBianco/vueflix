(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MovieShow"],{"0b42":function(t,e,s){var a=s("e8b5"),i=s("68ee"),r=s("861d"),o=s("b622"),n=o("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,i(e)&&(e===Array||a(e.prototype))?e=void 0:r(e)&&(e=e[n],null===e&&(e=void 0))),void 0===e?Array:e}},"1dde":function(t,e,s){var a=s("d039"),i=s("b622"),r=s("2d00"),o=i("species");t.exports=function(t){return r>=51||!a((function(){var e=[],s=e.constructor={};return s[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,s){"use strict";var a=s("23e7"),i=s("5a34"),r=s("1d80"),o=s("577e"),n=s("ab13");a({target:"String",proto:!0,forced:!n("includes")},{includes:function(t){return!!~o(r(this)).indexOf(o(i(t)),arguments.length>1?arguments[1]:void 0)}})},"2e0b":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"mt-10"},[s("h2",{staticClass:"font-semibold text-gray-200 mb-4"},[t._v("Parole Chiave")]),t.keywords.length>0?s("div",[s("div",{staticClass:"flex flex-wrap"},t._l(t.keywords,(function(e){return s("div",{key:e.id},[s("router-link",{staticClass:"mr-2.5 mb-2.5 bg-gray-750 hover:bg-gray-700 transition duration-200 text-gray-200 px-2 py-1.5 rounded-lg block max-w-max text-sm",attrs:{to:{name:"Keyword.show",params:{id:e.id}}}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)]):s("div",{staticClass:"text-gray-400 text-sm"},[t._v(" Non ci sono parole chiave ")])])},i=[],r={name:"Show.keywords",props:["keywords"]},o=r,n=s("2877"),l=Object(n["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports},"44e7":function(t,e,s){var a=s("861d"),i=s("c6b6"),r=s("b622"),o=r("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"4de4":function(t,e,s){"use strict";var a=s("23e7"),i=s("b727").filter,r=s("1dde"),o=r("filter");a({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,s){var a=s("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,s){var a=s("0b42");t.exports=function(t,e){return new(a(t))(0===e?0:e)}},"6a9a":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h2",{staticClass:"font-semibold text-gray-200 mb-4"},[t._v("Potrebbero Interessarti")]),t.recommendations.results.length>0?s("div",{staticClass:"flex items-center space-x-4 sm:space-x-8 overflow-x-auto overflow-y-hidden pb-26"},t._l(t.recommendations.results,(function(t){return s("div",{key:t.id,staticClass:"h-56 w-36 flex-none"},[s("ShowCover",{attrs:{show:t}})],1)})),0):s("div",{staticClass:"text-gray-400 text-sm"},[t._v(" Non ci film consigliati ")])])},i=[],r=s("6df6"),o={name:"Show.Recommendations",props:["recommendations"],components:{ShowCover:r["a"]}},n=o,l=s("2877"),c=Object(l["a"])(n,a,i,!1,null,null,null);e["a"]=c.exports},8418:function(t,e,s){"use strict";var a=s("a04b"),i=s("9bf2"),r=s("5c6c");t.exports=function(t,e,s){var o=a(e);o in t?i.f(t,o,r(0,s)):t[o]=s}},"8a91":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h2",{staticClass:"font-semibold text-gray-200 mb-4"},[t._v("Attori in primo piano")]),s("div",{staticClass:"flex space-x-6 overflow-x-auto overflow-y-hidden pb-10"},t._l(t.actors,(function(e){return s("router-link",{key:e.id,staticClass:"h-64 w-40 flex-none rounded-lg relative hover:shadow-2xl transition duration-200",attrs:{to:{name:"Person.show",params:{id:e.id}}}},[s("img",{staticClass:"rounded-lg w-full h-full object-cover",attrs:{src:t.actorPoster(e),alt:e.name+"_poster"}}),s("div",{staticClass:"absolute bottom-0 left-0 right-0 p-2 text-sm bg-black bg-opacity-60 transition duration-200 rounded-b-lg"},[s("h4",{staticClass:"font-semibold text-gray-200"},[t._v(t._s(e.name))]),s("p",{staticClass:"text-gray-300"},[t._v(t._s(e.character))])])])})),1)])},i=[],r=(s("b0c0"),{name:"Show.Credits",props:["actors"],methods:{actorPoster:function(t){return t.profile_path?"https://image.tmdb.org/t/p/w500/"+t.profile_path:"https://eu.ui-avatars.com/api/?name="+t.name}}}),o=r,n=s("2877"),l=Object(n["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports},ab13:function(t,e,s){var a=s("b622"),i=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[i]=!1,"/./"[t](e)}catch(a){}}return!1}},b0c0:function(t,e,s){var a=s("83ab"),i=s("5e77").EXISTS,r=s("9bf2").f,o=Function.prototype,n=o.toString,l=/^\s*function ([^ (]*)/,c="name";a&&!i&&r(o,c,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(t){return""}}})},b727:function(t,e,s){var a=s("0366"),i=s("44ad"),r=s("7b0b"),o=s("07fa"),n=s("65f0"),l=[].push,c=function(t){var e=1==t,s=2==t,c=3==t,d=4==t,u=6==t,v=7==t,m=5==t||u;return function(g,p,f,h){for(var x,b,_=r(g),w=i(_),y=a(p,f,3),C=o(w),k=0,M=h||n,$=e?M(g,C):s||v?M(g,0):void 0;C>k;k++)if((m||k in w)&&(x=w[k],b=y(x,k,_),t))if(e)$[k]=b;else if(b)switch(t){case 3:return!0;case 5:return x;case 6:return k;case 2:l.call($,x)}else switch(t){case 4:return!1;case 7:l.call($,x)}return u?-1:c||d?d:$}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},caad:function(t,e,s){"use strict";var a=s("23e7"),i=s("4d64").includes,r=s("44d2");a({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},e8b5:function(t,e,s){var a=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},ed7d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.shows.results?s("div",{staticClass:"flex items-center justify-between mt-20"},[t.page>1?s("button",{staticClass:"bg-gradient-to-r from-blue-600 to-light-blue rounded-lg text-gray-200 hover:text-gray-800 font-semibold shadow-2xl px-5 py-1.5 cursor-pointer transition duration-200",on:{click:t.prevPage}},[t._v("Prev")]):s("span"),t.shows.total_pages>1&&t.shows.page<t.shows.total_pages?s("button",{staticClass:"bg-gradient-to-r from-blue-600 to-light-blue rounded-lg text-gray-200 hover:text-gray-800 font-semibold shadow-2xl px-5 py-1.5 cursor-pointer transition duration-200",on:{click:t.nextPage}},[t._v("Next")]):t._e()]):t._e()},i=[],r={name:"Layout.Pagination",props:["shows","page"],methods:{prevPage:function(){window.scrollTo(0,0),this.$emit("prevPage")},nextPage:function(){window.scrollTo(0,0),this.$emit("nextPage")}}},o=r,n=s("2877"),l=Object(n["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports},fb6a:function(t,e,s){"use strict";var a=s("23e7"),i=s("e8b5"),r=s("68ee"),o=s("861d"),n=s("23cb"),l=s("07fa"),c=s("fc6a"),d=s("8418"),u=s("b622"),v=s("1dde"),m=v("slice"),g=u("species"),p=[].slice,f=Math.max;a({target:"Array",proto:!0,forced:!m},{slice:function(t,e){var s,a,u,v=c(this),m=l(v),h=n(t,m),x=n(void 0===e?m:e,m);if(i(v)&&(s=v.constructor,r(s)&&(s===Array||i(s.prototype))?s=void 0:o(s)&&(s=s[g],null===s&&(s=void 0)),s===Array||void 0===s))return p.call(v,h,x);for(a=new(void 0===s?Array:s)(f(x-h,0)),u=0;h<x;h++,u++)h in v&&d(a,u,v[h]);return a.length=u,a}})},fc8d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.movie?s("div",[s("div",{staticClass:"md:flex md:space-x-8 md:px-6 md:py-32 lg:space-x-14 lg:px-12 ",style:"background-position:center;background-repeat:no-repeat;background-size:cover;background-image:linear-gradient(rgba(37, 37, 37, 0.8), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/"+t.movie.backdrop_path},[s("div",{staticClass:"w-full md:w-2/5 xl:w-1/4"},[s("img",{staticClass:"shadow-2xl object-cover w-full md:rounded-lg",attrs:{src:t.image(t.movie),alt:"movie_image"}})]),s("div",{staticClass:"p-6 sm:p-0 md:w-3/5 xl:w-3/4"},[s("header",[s("h2",{staticClass:"text-gray-200 tracking-tight text-3xl lg:text-4xl leading-none font-semibold"},[t._v(t._s(t.movie.title))]),s("div",{staticClass:"flex items-center flex-wrap text-gray-300 text-sm"},[s("span",[t._v(t._s(t.$moment(t.movie.release_date).format("DD-MM-YYYY")))]),s("span",{staticClass:"text-3xl mb-1 mx-2"},[t._v("•")]),s("div",{staticClass:"flex items-center flex-wrap"},t._l(t.movie.genres,(function(e){return s("div",{key:e.id},[s("router-link",{staticClass:"block mr-2 hover:text-gray-400 transition duration-200",attrs:{to:{name:"Genre.show",query:{name:e.name},params:{id:e.id}}}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)])]),s("div",{staticClass:"my-6 py-3.5 border-t border-b border-gray-600"},[s("div",{staticClass:"w-4/5 md:w-full lg:w-9/12 mx-auto text-sm"},[s("div",{staticClass:"grid sm:grid-cols-4 gap-y-4",class:[t.movie.homepage?"grid-cols-2":"grid-cols-3"]},[s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"flex justify-center mb-1"},[s("svg",{staticClass:"w-6 h-6 text-light-blue",attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor",d:"M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"}})])]),s("div",{staticClass:"flex items-baseline justify-center space-x-1"},[s("span",{staticClass:"text-gray-200 font-semibold"},[t._v(t._s(10*t.movie.vote_average))]),s("span",{staticClass:"block text-xs text-gray-400"},[t._v("/100")])])]),s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"flex justify-center mb-1"},[s("svg",{staticClass:"w-6 h-6 text-light-blue",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor",d:"M12.3,12.22A4.92,4.92,0,0,0,14,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,1,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,12.3,12.22ZM9,11.5a3,3,0,1,1,3-3A3,3,0,0,1,9,11.5Zm9.74.32A5,5,0,0,0,15,3.5a1,1,0,0,0,0,2,3,3,0,0,1,3,3,3,3,0,0,1-1.5,2.59,1,1,0,0,0-.5.84,1,1,0,0,0,.45.86l.39.26.13.07a7,7,0,0,1,4,6.38,1,1,0,0,0,2,0A9,9,0,0,0,18.74,11.82Z"}})])]),s("span",{staticClass:"text-gray-200 text-center"},[t._v(t._s(t.movie.vote_count)+" voti")])]),s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"flex justify-center mb-1"},[s("svg",{staticClass:"w-6 h-6 text-light-blue",attrs:{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor",d:"M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"}})])]),s("span",{staticClass:"text-gray-200 text-center"},[t._v(t._s(t.movie.runtime)+"‘")])]),t.movie.homepage?s("a",{staticClass:"flex flex-col",attrs:{target:"_blank",href:t.movie.homepage}},[s("div",{staticClass:"flex justify-center mb-1"},[s("svg",{staticClass:"w-6 h-6 text-light-blue",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor",d:"M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"}})])]),s("span",{staticClass:"text-gray-200 text-center"},[t._v("Homepage")])]):t._e()])])]),s("p",{staticClass:"text-gray-400 text-lg italic"},[t._v(t._s(t.movie.tagline))]),s("p",{staticClass:"text-gray-300 my-10"},[t._v(t._s(t.movie.overview))])])]),t._v(" "),s("section",{staticClass:"p-6 lg:px-12 sm:py-16 lg:flex lg:space-x-12"},[s("div",{staticClass:"lg:w-3/4 space-y-20"},[t.credits?s("Credits",{attrs:{actors:t.actors()}}):t._e(),t.movie.belongs_to_collection?s("Collection",{attrs:{collection:t.movie.belongs_to_collection}}):t._e(),s("Reviews",{attrs:{id:t.movie.id}}),t.recommendations?s("Recommendations",{attrs:{recommendations:t.recommendations}}):t._e()],1),s("div",{staticClass:"lg:w-1/4 pt-10"},[s("section",{staticClass:"space-y-2.5"},[s("div",[s("h5",{staticClass:"text-xs text-gray-500"},[t._v("Regista")]),t._l(t.directors(),(function(e){return s("div",{key:e.id,staticClass:"text-gray-200 text-sm"},[t._v(" "+t._s(e.name)+" ")])}))],2),s("div",[s("h5",{staticClass:"text-xs text-gray-500 mb-1"},[t._v("Titolo originale")]),s("p",{staticClass:"text-gray-200 text-sm leading-tight"},[t._v(t._s(t.movie.original_title))])]),s("div",[s("h5",{staticClass:"text-xs text-gray-500 mb-1"},[t._v("Stato")]),s("p",{staticClass:"text-gray-200 text-sm"},[t._v(t._s(t.movie.status))])]),s("div",[s("h5",{staticClass:"text-xs text-gray-500 mb-1"},[t._v("Lingua originale")]),s("p",{staticClass:"text-gray-200 text-sm"},[t._v(t._s(t.movie.original_language))])]),s("div",[s("h5",{staticClass:"text-xs text-gray-500 mb-1"},[t._v("Budget")]),s("p",{staticClass:"text-gray-200 text-sm"},[t._v(t._s(t.movie.budget))])]),s("div",[s("h5",{staticClass:"text-xs text-gray-500 mb-1"},[t._v("Incassi")]),s("p",{staticClass:"text-gray-200 text-sm"},[t._v(t._s(t.movie.revenue))])])]),s("Keywords",{attrs:{keywords:t.keywords}})],1)])]):t._e()])},i=[],r=(s("4de4"),s("8a91")),o=s("6a9a"),n=s("2e0b"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"py-24 px-8 rounded-lg shadow-2xl",style:"background-position:center;background-repeat:no-repeat;background-size:cover;background-image:linear-gradient(rgba(45, 45, 45, 0.6), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/"+t.collection.backdrop_path},[s("h2",{staticClass:"lg:text-4xl text-gray-200 tracking-tight text-3xl font-semibold"},[s("span",{staticClass:"text-2xl"},[t._v("Parte di")]),t._v(" "+t._s(t.collection.name)+" ")]),s("router-link",{staticClass:"block max-w-max bg-gradient-to-r from-light-green to-light-blue text-gray-200 hover:text-gray-800 transition duration-200 font-bold text-sm rounded-full px-6 py-3 mt-4",attrs:{to:{name:"Collection.show",params:{id:t.collection.id}}}},[t._v(" Esplora la collezione ")])],1)},c=[],d={name:"Movie.Collection",props:["collection"]},u=d,v=s("2877"),m=Object(v["a"])(u,l,c,!1,null,null,null),g=m.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.reviews?s("section",[s("h2",{staticClass:"font-semibold text-gray-200 mb-4"},[t._v("Recensioni")]),s("p",{staticClass:"text-gray-400 text-sm"},[t._v("Questo film ha "+t._s(t.reviews.total_results)+" recensioni")]),t._l(t.reviews.results,(function(e){return s("div",{key:e.id,staticClass:"flex lg:space-x-4 space-x-4 mt-8"},[s("div",{staticClass:"flex-shrink-0"},[s("img",{staticClass:"rounded-lg object-cover lg:w-14 lg:h-14 w-12 h-12",attrs:{src:t.userImage(e.author_details),alt:e.author_details.name+"_poster"}})]),s("div",[s("h3",{staticClass:"text-gray-200 font-semibold"},[t._v(t._s(e.author_details.name?e.author_details.name:e.author_details.username))]),s("div",{staticClass:"flex items-center flex-wrap text-sm text-gray-400 mb-2"},[s("p",{staticClass:"mr-1"},[t._v(t._s(t.$moment(e.created_at).format("DD/MM/YYYY")))]),e.author_details.rating?s("p",{staticClass:"text-light-blue"},[t._v("• ha votato "+t._s(e.author_details.rating))]):t._e()]),s("p",{staticClass:"text-sm text-gray-400"},[t._v(t._s(t._f("truncate")(e.content,300)))]),e.content.length>300?s("router-link",{staticClass:"text-light-blue text-sm hover:underline",attrs:{to:{name:"Review.show",params:{id:e.id}}}},[t._v(" Continua a leggere... ")]):t._e()],1)])})),s("ThePagination",{attrs:{shows:t.reviews,page:t.page},on:{prevPage:t.prevPage,nextPage:t.nextPage}})],2):t._e()},f=[],h=(s("caad"),s("2532"),s("fb6a"),s("ed7d")),x={name:"Movie.Reviews",props:["id"],components:{ThePagination:h["a"]},mounted:function(){this.getMovieReviews()},data:function(){return{page:1}},watch:{page:function(){this.getMovieReviews()}},computed:{reviews:function(){return this.$store.state.movies.reviews}},methods:{getMovieReviews:function(){this.$store.dispatch("movies/getMovieReviews",{id:this.id,page:this.page})},userImage:function(t){return t.avatar_path?t.avatar_path.includes("gravatar")?t.avatar_path.slice(1):"https://image.tmdb.org/t/p/w500/"+t.avatar_path:"https://eu.ui-avatars.com/api/?name="+t.username},nextPage:function(){this.page=this.page+1},prevPage:function(){this.page=this.page-1}},filters:{truncate:function(t,e){return t.length>e?t.substring(0,e)+"...":t}}},b=x,_=Object(v["a"])(b,p,f,!1,null,null,null),w=_.exports,y={name:"Movies.show",components:{Credits:r["a"],Collection:g,Reviews:w,Recommendations:o["a"],Keywords:n["a"]},mounted:function(){this.getMovie(),this.getMovieCredits(),this.getRecommendations(),this.getMovieKeywords()},watch:{"$route.params.slug":{handler:function(){this.getMovie(),this.getMovieCredits(),this.getRecommendations(),this.getMovieKeywords()},deep:!0,immediate:!0}},computed:{movie:function(){return this.$store.state.movies.movie},credits:function(){return this.$store.state.movies.credits},recommendations:function(){return this.$store.state.movies.recommendations},keywords:function(){return this.$store.state.movies.keywords}},methods:{getMovie:function(){this.$store.dispatch("movies/getMovie",{id:this.$route.params.id})},getMovieCredits:function(){this.$store.dispatch("movies/getMovieCredits",{id:this.$route.params.id})},getRecommendations:function(){this.$store.dispatch("movies/getRecommendations",{id:this.$route.params.id})},getMovieKeywords:function(){this.$store.dispatch("movies/getMovieKeywords",{id:this.$route.params.id})},image:function(t){return"https://image.tmdb.org/t/p/w500/"+t.poster_path},actors:function(){if(this.credits.cast)return this.credits.cast.filter((function(t){return t.order<8}))},directors:function(){if(this.credits.crew)return this.credits.crew.filter((function(t){return"Director"===t.job}))}}},C=y,k=Object(v["a"])(C,a,i,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=MovieShow.099d635b.js.map
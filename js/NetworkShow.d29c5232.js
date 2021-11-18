(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["NetworkShow"],{4137:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.network&&t.shows?s("div",[s("header",{staticClass:"px-6 pt-20 pb-16 lg:px-12 shadow-2xl bg-gradient-to-r from-gray-900 to-gray-750"},[s("img",{staticClass:"w-40",attrs:{src:t.logo(t.network),alt:t.network.name+"_logo"}})]),s("div",{staticClass:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:items-center text-sm text-gray-400 p-6 py-4 lg:px-12 mb-10"},[t.network.name?s("h2",{staticClass:"font-semibold text-gray-200 text-xl"},[t._v(t._s(t.network.name))]):t._e(),t.network.headquarters?s("div",{staticClass:"flex items-center space-x-1"},[s("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor",d:"M11,11.9V17a1,1,0,0,0,2,0V11.9a5,5,0,1,0-2,0ZM12,4A3,3,0,1,1,9,7,3,3,0,0,1,12,4Zm4.21,10.42a1,1,0,1,0-.42,2C18.06,16.87,19,17.68,19,18c0,.58-2.45,2-7,2s-7-1.42-7-2c0-.32.94-1.13,3.21-1.62a1,1,0,1,0-.42-2C4.75,15.08,3,16.39,3,18c0,2.63,4.53,4,9,4s9-1.37,9-4C21,16.39,19.25,15.08,16.21,14.42Z"}})]),s("span",[t._v(t._s(t.network.headquarters))])]):t._e(),t.network.homepage?s("a",{staticClass:"flex items-center space-x-1 hover:text-gray-200 transition duration-150",attrs:{target:"_blank",href:t.network.homepage}},[s("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor",d:"M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"}})]),s("span",[t._v(t._s(t.network.homepage))])]):t._e(),t.network.origin_country?s("div",{staticClass:"flex items-center space-x-1"},[s("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor",d:"M21.41,8.64s0,0,0-.05a10,10,0,0,0-18.78,0s0,0,0,.05a9.86,9.86,0,0,0,0,6.72s0,0,0,.05a10,10,0,0,0,18.78,0s0,0,0-.05a9.86,9.86,0,0,0,0-6.72ZM4.26,14a7.82,7.82,0,0,1,0-4H6.12a16.73,16.73,0,0,0,0,4Zm.82,2h1.4a12.15,12.15,0,0,0,1,2.57A8,8,0,0,1,5.08,16Zm1.4-8H5.08A8,8,0,0,1,7.45,5.43,12.15,12.15,0,0,0,6.48,8ZM11,19.7A6.34,6.34,0,0,1,8.57,16H11ZM11,14H8.14a14.36,14.36,0,0,1,0-4H11Zm0-6H8.57A6.34,6.34,0,0,1,11,4.3Zm7.92,0h-1.4a12.15,12.15,0,0,0-1-2.57A8,8,0,0,1,18.92,8ZM13,4.3A6.34,6.34,0,0,1,15.43,8H13Zm0,15.4V16h2.43A6.34,6.34,0,0,1,13,19.7ZM15.86,14H13V10h2.86a14.36,14.36,0,0,1,0,4Zm.69,4.57a12.15,12.15,0,0,0,1-2.57h1.4A8,8,0,0,1,16.55,18.57ZM19.74,14H17.88A16.16,16.16,0,0,0,18,12a16.28,16.28,0,0,0-.12-2h1.86a7.82,7.82,0,0,1,0,4Z"}})]),s("span",[t._v(t._s(t.network.origin_country))])]):t._e()]),s("div",{staticClass:"text-gray-400 text-sm flex justify-between items-center px-6 lg:px-12"},[s("p",[t._v("Pagina "+t._s(t.shows.page)+" di "+t._s(t.shows.total_pages))]),s("p",[t._v(t._s(t.shows.total_results)+" risultati")])]),s("section",{staticClass:"p-6 lg:px-12 flex flex-col space-y-8"},t._l(t.shows.results,(function(e){return s("router-link",{key:e.id,staticClass:"md:flex md:items-center shadow-2xl rounded-lg",attrs:{to:{name:"Tv.show",params:{id:e.id}}}},[s("div",{staticClass:"flex-shrink-0 w-full md:w-1/3 lg:w-1/6"},[s("img",{staticClass:"shadow-2xl object-cover w-full rounded-l-lg",attrs:{src:t.image(e.poster_path),alt:"show_image"}})]),s("div",{staticClass:"p-4 md:w-2/3 lg:w-full"},[s("h4",{staticClass:"text-sm text-gray-200 font-semibold"},[t._v(t._s(e.name))]),s("p",{staticClass:"text-sm text-gray-500"},[t._v(t._s(t.$moment(e.first_air_date).format("DD/MM/YYYY")))]),s("p",{staticClass:"text-gray-400 text-sm mt-2"},[t._v(t._s(t._f("truncate")(e.overview,320)))])])])})),1),s("ThePagination",{attrs:{shows:t.shows,page:t.page},on:{prevPage:t.prevPage,nextPage:t.nextPage}})],1):t._e()},o=[],r=s("ed7d"),n={name:"Network.show",components:{ThePagination:r["a"]},mounted:function(){this.getNetwork(),this.getNetworkShows()},data:function(){return{page:1}},watch:{page:function(){this.getNetworkShows()}},computed:{network:function(){return this.$store.state.networks.network},shows:function(){return this.$store.state.networks.shows}},methods:{getNetwork:function(){this.$store.dispatch("networks/getNetwork",{id:this.$route.params.id})},getNetworkShows:function(){this.$store.dispatch("networks/getNetworkShows",{id:this.$route.params.id,page:this.page})},logo:function(t){if(t)return"https://image.tmdb.org/t/p/original/"+t.logo_path},image:function(t){if(t)return"https://image.tmdb.org/t/p/w500/"+t},nextPage:function(){window.scrollTo(0,0),this.page=this.page+1},prevPage:function(){window.scrollTo(0,0),this.page=this.page-1}},filters:{truncate:function(t,e){return t.length>e?t.substring(0,e)+"...":t}}},i=n,l=s("2877"),g=Object(l["a"])(i,a,o,!1,null,null,null);e["default"]=g.exports},ed7d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.shows.results?s("div",{staticClass:"flex items-center justify-between mt-20"},[t.page>1?s("button",{staticClass:"bg-gradient-to-r from-blue-600 to-light-blue rounded-lg text-gray-200 hover:text-gray-800 font-semibold shadow-2xl px-5 py-1.5 cursor-pointer transition duration-200",on:{click:t.prevPage}},[t._v("Prev")]):s("span"),t.shows.total_pages>1&&t.shows.page<t.shows.total_pages?s("button",{staticClass:"bg-gradient-to-r from-blue-600 to-light-blue rounded-lg text-gray-200 hover:text-gray-800 font-semibold shadow-2xl px-5 py-1.5 cursor-pointer transition duration-200",on:{click:t.nextPage}},[t._v("Next")]):t._e()]):t._e()},o=[],r={name:"Layout.Pagination",props:["shows","page"],methods:{prevPage:function(){window.scrollTo(0,0),this.$emit("prevPage")},nextPage:function(){window.scrollTo(0,0),this.$emit("nextPage")}}},n=r,i=s("2877"),l=Object(i["a"])(n,a,o,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=NetworkShow.d29c5232.js.map
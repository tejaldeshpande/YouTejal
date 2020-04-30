(function(e){function t(t){for(var i,a,s=t[0],c=t[1],d=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/YouTejal/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" min-h-screen",attrs:{id:"app"}},[n("div",{staticClass:"p-6 md:p-10 max-w-screen-xl m-auto h-full w-full"},[n("searchBar",{on:{termChange:e.onTermChange}}),n("div",{staticClass:"md:flex"},[n("videoDetail",{attrs:{currentVideoSelected:e.currentVideo}}),n("videoList",{attrs:{videos:e.videos},on:{onVideoChange:e.videoChangedParent}})],1)],1)])},r=[],a=n("bc3a"),s=n.n(a),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"searchBar"},[e._m(0),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.textInput,expression:"textInput"}],staticClass:" w-full border-gray-500 border mt-4 mb-8 p-1",attrs:{placeholder:"Search"},domProps:{value:e.textInput},on:{input:[function(t){t.target.composing||(e.textInput=t.target.value)},e.onInput]}})])])},d=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex items-center  justify-start mb-2"},[i("img",{staticClass:"w-10 mr-2",attrs:{src:n("73dd"),alt:"youtube logo"}}),i("h1",{staticClass:"font-bold text-md md:text-lg"},[e._v("YouTejal")])])}],u={name:"searchBar",data:function(){return{textInput:""}},methods:{onInput:function(){this.$emit("termChange",this.textInput)}}},l=u,f=n("2877"),p=Object(f["a"])(l,c,d,!1,null,null,null),v=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"videoList"}},[n("ul",e._l(e.videos,(function(t){return n("videoListItem",{key:t.etag,attrs:{video:t},on:{videoChange:e.onVideoChange}})})),1)])},h=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"videoListItem"},[n("li",[n("div",{class:{active:e.$store.state.videoPlayingID==e.video.etag},on:{click:function(t){return e.clickedVideo(e.video)}}},[n("div",{staticClass:"p-2 border flex items-center cursor-pointer md:max-w-xs lg:max-w-sm",attrs:{title:e.video.snippet.title}},[n("img",{staticClass:"w-1/4 md:w-1/3 thumbnail",attrs:{src:e.video.snippet.thumbnails.default.url}}),n("span",{staticClass:"text-sm m-3 w-2/3 title font-semibold overflow-hidden md:text-xs lg:text-sm",domProps:{innerHTML:e._s(e.video.snippet.title)}})])])])])},b=[],y={name:"videoListItem",props:["video"],methods:{clickedVideo:function(e){if(this.$emit("videoChange",e),this.$store.commit("setVideoPlaying",e.etag),window.innerWidth<=768){var t=document.getElementById("videoDetail");t.scrollIntoView()}}},computed:{truncate:function(){var e=this.video.snippet.title;return e}}},w=y,x=(n("ff3a"),Object(f["a"])(w,g,b,!1,null,"893d3c38",null)),C=x.exports,_={name:"videoList",components:{videoListItem:C},props:["videos"],methods:{onVideoChange:function(e){this.$emit("onVideoChange",e)}}},V=_,I=(n("672c"),Object(f["a"])(V,m,h,!1,null,null,null)),P=I.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.currentVideoSelected?n("div",{staticClass:"w-full mr-4",attrs:{id:"videoDetail"}},[n("div",{staticClass:"mb-2 font-bold",domProps:{innerHTML:e._s(e.currentVideoSelected.snippet.title)}}),n("div",{staticClass:"embed-container"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/"+e.currentVideoSelected.id.videoId+"?playsinline=1",frameborder:"0",allowfullscreen:""}})]),n("div",{staticClass:"my-4 ",domProps:{innerHTML:e._s(e.currentVideoSelected.snippet.description)}})]):e._e()},O=[],S={name:"videoDetail",data:function(){return{}},props:["currentVideoSelected"]},$=S,T=(n("c237"),Object(f["a"])($,j,O,!1,null,"62bcea8f",null)),L=T.exports,D="AIzaSyDuR_XsA7I_dfzdWJxG6z_KRGFtrOZEd08",k={name:"App",components:{searchBar:v,videoList:P,videoDetail:L},data:function(){return{videos:[],currentVideo:void 0}},mounted:function(){this.onTermChange("puppy")},methods:{onTermChange:function(e){var t=this;s.a.get("https://www.googleapis.com/youtube/v3/search",{params:{key:D,type:"video",part:"snippet",q:e}}).then((function(e){t.videos=e.data.items,t.currentVideo=t.videos[0],console.log(t.videos),t.$store.commit("setVideoPlaying",t.videos[0].etag)}))},onTermChanged:function(){var e=this;s.a.get("vetageodata.json",{}).then((function(t){e.videos=t.data,e.currentVideo=e.videos[0],console.log(t),e.$store.commit("setVideoPlaying",e.videos[0].etag)}))},videoChangedParent:function(e){this.currentVideo=e}}},E=k,M=(n("034f"),Object(f["a"])(E,o,r,!1,null,null,null)),B=M.exports,z=(n("def6"),n("2f62"));i["a"].use(z["a"]);var A=new z["a"].Store({state:{count:0,videoPlayingID:void 0},mutations:{increment:function(e){e.count++},setVideoPlaying:function(e,t){e.videoPlayingID=t}}});i["a"].config.productionTip=!1,new i["a"]({store:A,render:function(e){return e(B)}}).$mount("#app")},"672c":function(e,t,n){"use strict";var i=n("f827"),o=n.n(i);o.a},"73dd":function(e,t,n){e.exports=n.p+"img/youtube.9a9dab9a.svg"},"85ec":function(e,t,n){},a710:function(e,t,n){},c237:function(e,t,n){"use strict";var i=n("f364"),o=n.n(i);o.a},def6:function(e,t,n){},f364:function(e,t,n){},f827:function(e,t,n){},ff3a:function(e,t,n){"use strict";var i=n("a710"),o=n.n(i);o.a}});
//# sourceMappingURL=app.9ac2e931.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(4917)}])},4917:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return g}});var a=o(5893),r=o(7294),n=o(9008);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},p.apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},h=function(e,t,o){void 0===t&&(t=[]);var a=void 0===o?{}:o,n=a.defaultWidth,p=a.defaultHeight;return t.reduce((function(t,o,a){return t.push(r.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:o.url})),o.alt&&t.push(r.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(r.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(r.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(r.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:o.width.toString()})):n&&t.push(r.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:n.toString()})),o.height?t.push(r.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:o.height.toString()})):p&&t.push(r.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:p.toString()})),t}),[])},c=function(e){var t,o,a,n=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var i="";e.title?(i=e.title,l.templateTitle&&(i=l.templateTitle.replace(/%s/g,(function(){return i})))):e.defaultTitle&&(i=e.defaultTitle),i&&n.push(r.createElement("title",{key:"title"},i));var c,d,s=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,u=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,m="";if(e.robotsProps){var g=e.robotsProps,f=g.nosnippet,y=g.maxSnippet,G=g.maxImagePreview,k=g.maxVideoPreview,v=g.noarchive,E=g.noimageindex,b=g.notranslate,w=g.unavailableAfter;m=(f?",nosnippet":"")+(y?",max-snippet:"+y:"")+(G?",max-image-preview:"+G:"")+(v?",noarchive":"")+(w?",unavailable_after:"+w:"")+(E?",noimageindex":"")+(k?",max-video-preview:"+k:"")+(b?",notranslate":"")}(s||u?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),n.push(r.createElement("meta",{key:"robots",name:"robots",content:(s?"noindex":"index")+","+(u?"nofollow":"follow")+m}))):n.push(r.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),e.description&&n.push(r.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&n.push(r.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){n.push(r.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&n.push(r.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&n.push(r.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&n.push(r.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&n.push(r.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||i)&&n.push(r.createElement("meta",{key:"og:title",property:"og:title",content:(null==(c=e.openGraph)?void 0:c.title)||i}));(null!=(o=e.openGraph)&&o.description||e.description)&&n.push(r.createElement("meta",{key:"og:description",property:"og:description",content:(null==(d=e.openGraph)?void 0:d.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&n.push(r.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var O=e.openGraph.type.toLowerCase();n.push(r.createElement("meta",{key:"og:type",property:"og:type",content:O})),"profile"===O&&e.openGraph.profile?(e.openGraph.profile.firstName&&n.push(r.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&n.push(r.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&n.push(r.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&n.push(r.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===O&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){n.push(r.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&n.push(r.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&n.push(r.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){n.push(r.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===O&&e.openGraph.article?(e.openGraph.article.publishedTime&&n.push(r.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&n.push(r.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&n.push(r.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){n.push(r.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&n.push(r.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){n.push(r.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==O&&"video.episode"!==O&&"video.tv_show"!==O&&"video.other"!==O||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&n.push(r.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&n.push(r.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){n.push(r.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){n.push(r.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&n.push(r.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&n.push(r.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){n.push(r.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&n.push(r.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&n.push.apply(n,h("image",e.openGraph.images,{defaultWidth:l.defaultOpenGraphImageWidth,defaultHeight:l.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&n.push.apply(n,h("video",e.openGraph.videos,{defaultWidth:l.defaultOpenGraphVideoWidth,defaultHeight:l.defaultOpenGraphVideoHeight})),e.openGraph.locale&&n.push(r.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&n.push(r.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&n.push(r.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,o,a;n.push(r.createElement("meta",p({key:"meta:"+(null!=(t=null!=(o=null!=(a=e.keyOverride)?a:e.name)?o:e.property)?t:e.httpEquiv)},e)))})),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach((function(e){var t;n.push(r.createElement("link",p({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),n},d=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.titleTemplate,a=e.defaultTitle,p=e.dangerouslySetAllPagesToNoIndex,i=void 0!==p&&p,l=e.dangerouslySetAllPagesToNoFollow,h=void 0!==l&&l,d=e.description,s=e.canonical,u=e.facebook,m=e.openGraph,g=e.additionalMetaTags,f=e.twitter,y=e.defaultOpenGraphImageWidth,G=e.defaultOpenGraphImageHeight,k=e.defaultOpenGraphVideoWidth,v=e.defaultOpenGraphVideoHeight,E=e.mobileAlternate,b=e.languageAlternates,w=e.additionalLinkTags,O=e.robotsProps;return r.createElement(n.default,null,c({title:t,titleTemplate:o,defaultTitle:a,dangerouslySetAllPagesToNoIndex:i,dangerouslySetAllPagesToNoFollow:h,description:d,canonical:s,facebook:u,openGraph:m,additionalMetaTags:g,twitter:f,defaultOpenGraphImageWidth:y,defaultOpenGraphImageHeight:G,defaultOpenGraphVideoWidth:k,defaultOpenGraphVideoHeight:v,mobileAlternate:E,languageAlternates:b,additionalLinkTags:w,robotsProps:O}))},t}(r.Component),s=(r.Component,Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}));new RegExp("["+Object.keys(s).join("")+"]","g");o(6774);function u(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function m(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},a=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),a.forEach((function(t){u(e,t,o[t])}))}return e}var g=function(e){var t=e.Component,o=e.pageProps,n=e.router,p="https://moonfi.co".concat(n.route);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{openGraph:{type:"website",locale:"en_IE",url:p,description:"Join us now to earn the highest yields on the market and have fun doing so.",site_name:"Moon Fi | moonfi.co",images:[]},canonical:p}),(0,r.createElement)(t,m({},o,{canonical:p,key:p}))]})}},6774:function(){},9008:function(e,t,o){e.exports=o(3121)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(880)}));var o=e.O();_N_E=o}]);
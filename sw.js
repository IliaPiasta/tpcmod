if(!self.define){let e,s={};const c=(c,t)=>(c=new URL(c+".js",t).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const o=e=>c(e,i),r={module:{uri:i},exports:a,require:o};s[i]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-24fab9da"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/tpcmod/_next/static/YN0r3KMNij4ML_5aINt-Q/_buildManifest.js",revision:"061a4bc24d4dd66e1070bdc97775df49"},{url:"/tpcmod/_next/static/YN0r3KMNij4ML_5aINt-Q/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/tpcmod/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/tpcmod/_next/static/chunks/main-5292ee371238ec4f.js",revision:"5292ee371238ec4f"},{url:"/tpcmod/_next/static/chunks/pages/404-0761cac83fa749f7.js",revision:"0761cac83fa749f7"},{url:"/tpcmod/_next/static/chunks/pages/500-b280411131d4f865.js",revision:"b280411131d4f865"},{url:"/tpcmod/_next/static/chunks/pages/_app-41bb016695d57c3f.js",revision:"41bb016695d57c3f"},{url:"/tpcmod/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/tpcmod/_next/static/chunks/pages/commands-228ad16efdc908b0.js",revision:"228ad16efdc908b0"},{url:"/tpcmod/_next/static/chunks/pages/fulltos-aff9edec941e6b31.js",revision:"aff9edec941e6b31"},{url:"/tpcmod/_next/static/chunks/pages/index-1f7f15e7a5b3b74f.js",revision:"1f7f15e7a5b3b74f"},{url:"/tpcmod/_next/static/chunks/pages/partners-ed4078664d2d5769.js",revision:"ed4078664d2d5769"},{url:"/tpcmod/_next/static/chunks/pages/privacy-6734f2eef99939f7.js",revision:"6734f2eef99939f7"},{url:"/tpcmod/_next/static/chunks/pages/tos-df08576c458520ac.js",revision:"df08576c458520ac"},{url:"/tpcmod/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/tpcmod/_next/static/chunks/webpack-ccb649339fa341be.js",revision:"ccb649339fa341be"},{url:"/tpcmod/_next/static/css/7f17e1507440528d.css",revision:"7f17e1507440528d"},{url:"/tpcmod/css/customColors.css",revision:"5c97ef10f121c3426290dc464bc684fd"},{url:"/tpcmod/css/global.css",revision:"8ab0bc4e5abd72f42e6b43a7dc1080c7"},{url:"/tpcmod/css/nprogress.css",revision:"c6adaeb29c55a8cb19899f8f4a4d959d"},{url:"/tpcmod/css/tippy.css",revision:"f14e4e01f7aaa1ad5f549d2d45d5dfe4"},{url:"/tpcmod/img/bck.png",revision:"ebc793befa97990531a961d96cef5980"},{url:"/tpcmod/img/bck2.png",revision:"ea97be7cc9373b4ec7b468801f6e60e5"},{url:"/tpcmod/img/bck3.png",revision:"d0321896c7e863efbc72903499b5df02"},{url:"/tpcmod/img/bck4.png",revision:"6125cc45bd9c34cd87da9731228e5a1d"},{url:"/tpcmod/img/bck5.png",revision:"2e4c6271d931eee83f48c913b7cfbb51"},{url:"/tpcmod/img/gift-left.png",revision:"bb95d34fceaf5ea927efb4953b59e3be"},{url:"/tpcmod/img/gift-right.png",revision:"84aad877270a4abdf12f21ebd0452227"},{url:"/tpcmod/img/logo2.png",revision:"e82fe4685c5977455aae8043f7c60c87"},{url:"/tpcmod/js/main.js",revision:"eb93b284d937db60c90496c169c9920f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/tpcmod",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

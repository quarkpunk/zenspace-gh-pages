if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const o=e=>i(e,r),l={module:{uri:r},exports:a,require:o};s[r]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(c(...e),a)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"363abba78a76b5193b67ffa075aec46a"},{url:"apple-touch-icon.png",revision:"e351e5eb24e6bd1090323af8b03eacd6"},{url:"assets/background001-B6dyxaPq.png",revision:null},{url:"assets/index-BTEFoFAK.js",revision:null},{url:"assets/index-DQf8kTwH.css",revision:null},{url:"assets/PaymentThanksView-BoVGNYKz.css",revision:null},{url:"assets/PaymentThanksView-DEsItFqY.js",revision:null},{url:"assets/PaymentView-DNHVGc3u.css",revision:null},{url:"assets/PaymentView-vNyM5KLX.js",revision:null},{url:"assets/ProductView-DG_3_0kY.css",revision:null},{url:"assets/ProductView-vEThMwHB.js",revision:null},{url:"favicon-96x96.png",revision:"3b78d929aae36495725a5389d386ce8f"},{url:"favicon.ico",revision:"168aa52141cc3d6bac9083e7eb87f784"},{url:"favicon.svg",revision:"2b9d0bdd6d3e34584e9c57060e238455"},{url:"imgs/products/seat1.png",revision:"16266367e2d841c9240510cd22f5f745"},{url:"imgs/products/seat2.png",revision:"2a10f8eed6a04e1cfcb5434cbb503869"},{url:"imgs/products/seat3.png",revision:"ccc1610f443776bdc26b8e5c8a4c8d5e"},{url:"imgs/products/seat4.png",revision:"0d387000f61297afcf74ada7e8c4c5c0"},{url:"imgs/products/seat5.png",revision:"9c0a260d3e8c7e7e58b61176a804a129"},{url:"imgs/products/seat6.png",revision:"ce67f6f33977b76af659bd9e02b84fc9"},{url:"index.html",revision:"b7646cebfdaac77d5ce19a765a38ae51"},{url:"maskable-icon-512x512.png",revision:"c0b7ccbc67ef95b5e819bd95a14d6cca"},{url:"pwa-192x192.png",revision:"10a0eb968de7981b41f6678c098fc86a"},{url:"pwa-512x512.png",revision:"79683652bbb52be6b31119f4fa8cdfc5"},{url:"pwa-64x64.png",revision:"8bc7cf78d60654ff76ea07e00627eefc"},{url:"web-app-manifest-192x192.png",revision:"757e5c4c5f5c14481564c253338067cf"},{url:"web-app-manifest-512x512.png",revision:"f89b5154e2ea6ab273427b3f2749dc78"},{url:"manifest.webmanifest",revision:"18d2341dcc728a0823cf874e108bd27d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

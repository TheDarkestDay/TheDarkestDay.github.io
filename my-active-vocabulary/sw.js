if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const d=e=>n(e,f),c={module:{uri:f},exports:o,require:d};i[f]=Promise.all(s.map((e=>c[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.2c684c86.js",revision:null},{url:"assets/index.3f53ef7c.css",revision:null},{url:"index.html",revision:"1e5cb84fae31cff4a7a4e5e29c5b1d82"},{url:"registerSW.js",revision:"3569ca05de1341ff09db1222301233a4"},{url:"favicon.ico",revision:"0739ff4ba8d8acb5ab4c3959debe1748"},{url:"apple-touch-icon.png",revision:"f898b4db7a8f6a842da6f7a67db3184b"},{url:"mav-logo.png",revision:"7e32dbadfc80f140e2051dc72af7f23f"},{url:"pwa-192x192.png",revision:"e8362b6249de7d92216b717ff1b36f02"},{url:"pwa-512x512.png",revision:"2cf1230e0d64b8993108b4ed9d07ef72"},{url:"manifest.webmanifest",revision:"6f45cd9b7dfeb2d2dcfb2d83c96f1ad0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let o={};const t=e=>s(e,a),c={module:{uri:a},exports:o,require:t};i[a]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.236c29b3.js",revision:null},{url:"assets/index.bac378b5.css",revision:null},{url:"index.html",revision:"f3946a8fa6ec9d3933b60030fd1646e1"},{url:"registerSW.js",revision:"3016a64eab12d14275ec6c335e7f2bdd"},{url:"favicon.ico",revision:"d6a46e14acca075e6f6ceb3ee4a5cb61"},{url:"apple-touch-icon.png",revision:"492a31af98db3ded673e7f4fc2ea0079"},{url:"mask-icon.svg",revision:"a00128ae01913da6a2e882b2e0bd0353"},{url:"pwa-192x192.png",revision:"f6a4a188e20977a774ed69e66f6d9206"},{url:"pwa-512x512.png",revision:"10a62f0ae79c1280f7446fe699410a32"},{url:"manifest.webmanifest",revision:"551e272a2059fa30b3202a76d74ea039"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

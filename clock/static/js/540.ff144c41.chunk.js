!function(){"use strict";var e,t=function e(t){return setTimeout((function(){var t=new Date;postMessage(t),e(1)}),1e3*t)};onmessage=function(n){if("start"===n.data){var a=(new Date).getSeconds();e=t(60-a)}else clearTimeout(e)}}();
//# sourceMappingURL=540.ff144c41.chunk.js.map
(()=>{var e={605:(e,t,n)=>{const r=new(n(218))([32,36,1]);e.exports=function(){return r.next()}},218:e=>{var t=function(e,t){return function(e){var t=e.exports=function(e,n){if(n||(n=16),void 0===e&&(e=128),e<=0)return"0";for(var r=Math.log(Math.pow(2,e))/Math.log(n),o=2;r===1/0;o*=2)r=Math.log(Math.pow(2,e/o))/Math.log(n)*o;var i=r-Math.floor(r),a="";for(o=0;o<Math.floor(r);o++)a=Math.floor(Math.random()*n).toString(n)+a;if(i){var s=Math.pow(n,i);a=Math.floor(Math.random()*s).toString(n)+a}var u=parseInt(a,n);return u!==1/0&&u>=Math.pow(2,e)?t(e,n):a};t.rack=function(e,n,r){var o=function(o){var a=0;do{if(a++>10){if(!r)throw new Error("too many ID collisions, use more bits");e+=r}var s=t(e,n)}while(Object.hasOwnProperty.call(i,s));return i[s]=o,s},i=o.hats={};return o.get=function(e){return o.hats[e]},o.set=function(e,t){return o.hats[e]=t,o},o.bits=e||128,o.base=n||16,o}}(t={exports:{}}),t.exports}();function n(e){if(!(this instanceof n))return new n(e);e=e||[128,36,1],this._seed=e.length?t.rack(e[0],e[1],e[2]):e}n.prototype.next=function(e){return this._seed(e||!0)},n.prototype.nextPrefixed=function(e,t){var n;do{n=e+this.next(!0)}while(this.assigned(n));return this.claim(n,t),n},n.prototype.claim=function(e,t){this._seed.set(e,t||!0)},n.prototype.assigned=function(e){return this._seed.get(e)||!1},n.prototype.unclaim=function(e){delete this._seed.hats[e]},n.prototype.clear=function(){var e,t=this._seed.hats;for(e in t)this.unclaim(e)},e.exports=n},157:e=>{"use strict";e.exports=require("electron")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}const{contextBridge:r,ipcRenderer:o,webUtils:i}=n(157),a=n(605),s=["file:get-path"],u=[...s,"app:reload","app:quit-aborted","app:quit-allowed","client:error","client:ready","config:get","config:set","context-menu:open","dialog:open-file-error","dialog:open-file-explorer","dialog:open-files","dialog:save-file","dialog:show","errorTracking:turnedOff","errorTracking:turnedOn","external:open-url","file:read","file:read-stats","file:write","activeTab:change","menu:register","menu:update","system-clipboard:write-text","toggle-plugins","workspace:restore","workspace:save","zeebe:checkConnection","zeebe:deploy","zeebe:getGatewayVersion","zeebe:run"];let c=!1;function l(e,t){return{send:n,on:function(t,n){return e.on(t,n),{cancel(){e.off(t,n)}}},once:r,sendQuitAllowed:function(){n("app:quit-allowed")},sendQuitAborted:function(){n("app:quit-aborted")},sendReady:function(){n("client:ready")},showContextMenu:function(e,t){n("context-menu:open",e,t)},sendTogglePlugins:function(){n("toggle-plugins")},sendMenuUpdate:function(e={}){n("menu:update",e)},registerMenu:function(e,t){return n("menu:register",e,t)},getPlatform:function(){return t}};function n(t,...n){if(!u.includes(t))throw new Error(`Disallowed event: ${t}`);if(s.includes(t))return function(e,...t){if("file:get-path"===e)try{return i.getPathForFile(t[0])||null}catch{return null}}(t,...n);const o=a();return new Promise(((i,a)=>{r(t+":response:"+o,(function(e,t){return null!==t[0]&&a(t[0]),i(t[1])})),e.send(t,o,n)}))}function r(t,n){return e.once(t,n),{cancel(){e.off(t,n)}}}}r.exposeInMainWorld("getAppPreload",(function(){if(c)throw new Error("window#getAppPreload can be accessed only once");return c=!0,{metadata:o.sendSync("app:get-metadata"),plugins:o.sendSync("app:get-plugins"),flags:o.sendSync("app:get-flags"),backend:l(o,process.platform)}}))})();
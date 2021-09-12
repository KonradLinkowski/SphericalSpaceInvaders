parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZYE2":[function(require,module,exports) {
"use strict";function e(){var e=function(){},t=function(){};return{getInput:n,setActive:function(n,a){e=n,t=a,window.addEventListener("gamepadconnected",o,!1),window.addEventListener("gamepaddisconnected",i,!1)},setInactive:function(){window.removeEventListener("gamepadconnected",o,!1),window.removeEventListener("gamepaddisconnected",i,!1)}};function o(n){var t=n.gamepad;console.log("connected",t),e()}function i(e){var n=e.gamepad;console.log("disconnected",n),t()}}function n(){var e=navigator.getGamepads();if(e){var n=Object.values(e).find(function(e){return e});if(n)return{axes:{x:n.axes[0],y:n.axes[1]},fire:[0,5,7].map(function(e){return n.buttons[e]}).some(function(e){return e.pressed})}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=void 0,exports.init=e;
},{}],"a0DS":[function(require,module,exports) {
"use strict";function e(e,r,t){return t>r?r:t<e?e:t}function r(e,r,t){return e+(r-e)*t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.lerp=exports.clamp=void 0,exports.clamp=e,exports.lerp=r;
},{}],"H74X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.distance=exports.mulFactor=exports.subtract=exports.add=exports.dot=exports.lerp=exports.slerp=exports.magnitude=exports.normalize=void 0;var t=require("./math");function r(t){var r=e(t);return{x:r?t.x/r:0,y:r?t.y/r:0}}function e(t){return Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y,2))}function o(e,o,x){x=(0,t.clamp)(0,1,x);var a=n(e,o),c=Math.acos(a)*x,i=r(p(o,u(e,a)));return r(s(u(e,Math.cos(c)),u(i,Math.sin(c))))}function x(r,e,o){return{x:(0,t.lerp)(r.x,e.x,o),y:(0,t.lerp)(r.y,e.y,o)}}function n(t,r){return t.x*r.x+t.y*r.y}function s(t,r){return{x:t.x+r.x,y:t.y+r.y}}function p(t,r){return{x:t.x-r.x,y:t.y-r.y}}function u(t,r){return{x:t.x*r,y:t.y*r}}function a(t,r){return e({x:t.x-r.x,y:t.y-r.y})}exports.normalize=r,exports.magnitude=e,exports.slerp=o,exports.lerp=x,exports.dot=n,exports.add=s,exports.subtract=p,exports.mulFactor=u,exports.distance=a;
},{"./math":"a0DS"}],"I6xn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=void 0;var e=require("../math/vector"),t={x:0,y:0},n=!1;function r(){var n=document.querySelector("#joystick"),r=document.querySelector("#handle"),s=document.querySelector("#mobile-plane"),d=document.querySelector("#button-fire");return{getInput:c,setActive:function(e){r.addEventListener("touchstart",i),r.addEventListener("touchend",u),s.addEventListener("touchmove",h),d.addEventListener("touchstart",v,!1),d.addEventListener("touchend",a,!1),d.removeEventListener("touchcancel",a,!1),s.hidden=!1,e()},setInactive:function(){r.removeEventListener("touchstart",i),r.removeEventListener("touchend",u),s.removeEventListener("touchmove",h),d.removeEventListener("touchstart",v),d.removeEventListener("touchend",a),d.removeEventListener("touchcancel",a),s.hidden=!0}};function h(c){if(c.preventDefault(),o){var i=c.touches[0],u=n.getBoundingClientRect(),v=i.pageX-(u.x+u.width/2),a=i.pageY-(u.y+u.height/2),s=(0,e.normalize)({x:v,y:a}),d=s.x,h=s.y;t={x:d,y:h},r.style.transform="translate(".concat(75*d,"px, ").concat(75*h,"px)")}}}exports.init=r;var o=!1;function c(){return{axes:t,fire:n}}function i(){o=!0}function u(){o=!1}function v(){n=!0}function a(){n=!1}
},{"../math/vector":"H74X"}],"PMJo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=void 0;var e=require("../math/vector"),t={x:0,y:0},n=!1;function i(){var i=document.querySelector("#canvas");return{getInput:o,setActive:function(e){i.addEventListener("mousedown",r),i.addEventListener("mouseup",u),i.addEventListener("mousemove",s),e()},setInactive:function(){i.removeEventListener("mousedown",r),i.removeEventListener("mouseup",u),i.removeEventListener("mousemove",s)}};function r(){n=!0}function u(){n=!1}function s(n){var o=n.clientX,r=n.clientY,u=i.getBoundingClientRect(),s=o-(u.x+u.width/2),v=r-(u.y+u.height/2),c=(0,e.normalize)({x:s,y:v});t=c}}function o(){return{axes:t,fire:n}}exports.init=i;
},{"../math/vector":"H74X"}],"ftuY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=exports.InputSource=void 0;var e,t=require("./gamepad"),u=require("./mobile"),r=require("./mouse");!function(e){e.Gamepad="Gamepad",e.Mouse="Mouse",e.Mobile="Mobile"}(e=exports.InputSource||(exports.InputSource={}));var n=null,i=null;function o(o,p,a){var l=(0,t.init)(),I=(0,r.init)(),d=(0,u.init)();return f(o),{getInput:s,setInputSource:f,getInputSource:c};function f(t){n=t,i&&i.setInactive(),(i=function(t){switch(t){case e.Gamepad:return l;case e.Mobile:return d;case e.Mouse:return I}}(t)).setActive(p,a)}}function s(){return i.getInput()}function c(){return n}exports.init=o;
},{"./gamepad":"ZYE2","./mobile":"I6xn","./mouse":"PMJo"}],"FxBD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ENEMY_SPAWN_COOLDOWN=exports.CENTER_RADIUS=exports.PARTICLE_SPEED=exports.PARTICLE_SIZE=exports.PARTICLE_LIFESPAN=exports.PLAYER_OFFSET=exports.PLAYER_SIZE=exports.WORLD_SIZE=exports.ENEMY_SIZE=exports.GAMEPAD_EPSILON=exports.PLAYER_SPEED=exports.PROJECTILE_SIZE=exports.PROJECTILE_SPEED=exports.FIRE_COOLDOWN=void 0,exports.FIRE_COOLDOWN=.1,exports.PROJECTILE_SPEED=1e3,exports.PROJECTILE_SIZE=5,exports.PLAYER_SPEED=10,exports.GAMEPAD_EPSILON=.3,exports.ENEMY_SIZE=10,exports.WORLD_SIZE=1e3,exports.PLAYER_SIZE=20,exports.PLAYER_OFFSET=50,exports.PARTICLE_LIFESPAN=1,exports.PARTICLE_SIZE=5,exports.PARTICLE_SPEED=5,exports.CENTER_RADIUS=70,exports.ENEMY_SPAWN_COOLDOWN=1;
},{}],"CNOl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.distance=exports.toPolarVector=exports.toVector=void 0;var t=require("./vector");function r(t){return{x:t.radius*Math.cos(t.angle),y:t.radius*Math.sin(t.angle)}}function e(r){return{radius:(0,t.magnitude)(r),angle:Math.atan2(r.y,r.x)}}function a(t,r){return Math.sqrt(Math.pow(t.radius,2)+Math.pow(r.radius,2)-2*t.radius*r.radius*Math.cos(t.angle-r.angle))}exports.toVector=r,exports.toPolarVector=e,exports.distance=a;
},{"./vector":"H74X"}],"XLY6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toRelativeVector=void 0;var e=require("./config"),r=require("./math/polar-vector");function t(t){var o=(0,r.toVector)(t);return{x:o.x+e.WORLD_SIZE/2,y:o.y+e.WORLD_SIZE/2}}exports.toRelativeVector=t;
},{"./config":"FxBD","./math/polar-vector":"CNOl"}],"cUPp":[function(require,module,exports) {
"use strict";function t(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=e(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}function e(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=void 0;var n=require("./config"),o=require("./world");function i(t){var e=t.getContext("2d");return e.globalCompositeOperation="source-atop",{draw:function(r){return a(t,e,r)}}}function a(e,r,i){var a,l=i.playerPosition,c=i.projectiles,f=i.enemies,u=i.particles;function s(t,e,n,o,i){r.beginPath(),r.arc(t,e,n,0,2*Math.PI),r.closePath(),i?(r.strokeStyle=o,r.lineWidth=3,r.stroke()):(r.fillStyle=o,r.fill())}r.globalCompositeOperation="source-over",r.clearRect(0,0,e.width,e.height),s(e.width/2,e.height/2,5,"purple"),s(e.width/2,e.height/2,n.CENTER_RADIUS,"purple",!0),s(l.x+e.width/2,l.y+e.height/2,n.PLAYER_SIZE,"red"),function(){var e,r=t(c);try{for(r.s();!(e=r.n()).done;){var i=e.value,a=(0,o.toRelativeVector)(i.position);s(a.x,a.y,n.PROJECTILE_SIZE,"blue")}}catch(l){r.e(l)}finally{r.f()}}(),function(){var e,r=t(f);try{for(r.s();!(e=r.n()).done;){var i=e.value,a=(0,o.toRelativeVector)(i.position);s(a.x,a.y,n.ENEMY_SIZE,"green")}}catch(l){r.e(l)}finally{r.f()}}(),function(){var e,r=t(u);try{for(r.s();!(e=r.n()).done;){var o=e.value,i="rgba(255, 0, 255, ".concat(1-o.age/n.PARTICLE_LIFESPAN,")");s(o.position.x,o.position.y,n.PARTICLE_SIZE,i)}}catch(a){r.e(a)}finally{r.f()}}(),(a=r.createRadialGradient(n.WORLD_SIZE/2,n.WORLD_SIZE/2,.4*n.WORLD_SIZE,n.WORLD_SIZE/2,n.WORLD_SIZE/2,n.WORLD_SIZE/2)).addColorStop(0,"#ffff"),a.addColorStop(1,"#0000"),r.globalCompositeOperation="destination-in",r.fillStyle=a,r.fillRect(0,0,n.WORLD_SIZE,n.WORLD_SIZE)}exports.init=i;
},{"./config":"FxBD","./world":"XLY6"}],"vBK0":[function(require,module,exports) {
"use strict";var e;function n(e,n){var i=n||{angle:Math.random()*Math.PI*2,radius:400};return{age:0,initialPosition:i,position:i,type:e,speed:2*Math.random()-1}}function i(e){e.enemy.age+=e.deltaTime,e.enemy.position=a[e.enemy.type](e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getValue=exports.advanceEnemy=exports.createEnemy=exports.Type=void 0,function(e){e.Basic="Basic",e.Spinner="Spinner",e.ZigZag="ZigZag"}(e=exports.Type||(exports.Type={})),exports.createEnemy=n,exports.advanceEnemy=i;var a={Basic:function(e){var n=e.enemy,i=e.deltaTime;return{angle:n.position.angle,radius:n.position.radius-100*i}},Spinner:function(e){var n=e.enemy,i=e.deltaTime;return{angle:n.position.angle+n.speed*i*1,radius:n.position.radius-100*i}},ZigZag:function(e){var n=e.enemy,i=e.deltaTime;return{angle:n.initialPosition.angle+n.speed*Math.sin(n.age)*Math.PI,radius:n.position.radius-50*i}}};function t(n){switch(n){case e.Basic:return 5;case e.Spinner:return 10;case e.ZigZag:return 15}}exports.getValue=t;
},{}],"GomQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createPaticle=exports.createBoom=void 0;var e=require("./math/polar-vector"),r=require("./config");function t(t){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:32,i=[],c=2*Math.PI/a,n=0;n<a;n+=1)i.push(o(t,(0,e.toVector)({angle:c*n,radius:r.PARTICLE_SPEED})));return i}function o(e,r){return{age:0,position:e,velocity:r}}exports.createBoom=t,exports.createPaticle=o;
},{"./math/polar-vector":"CNOl","./config":"FxBD"}],"DVlx":[function(require,module,exports) {
"use strict";function e(e){return n(e)||t(e)||i(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function n(e){if(Array.isArray(e))return a(e)}function o(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=i(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw a}}}}function i(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach(function(r){l(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=void 0;var f=require("./config"),s=require("./enemy"),p=require("./math/polar-vector"),y=require("./math/vector"),v=require("./particle"),m=require("./world"),d={x:0,y:1},b={x:0,y:1},E=!1,O=[],h=[],P=[(0,s.createEnemy)(s.Type.Basic)],g=0,S=0;function j(){return{calculate:I}}function I(r){var t=r.input,n=r.deltaTime,i=r.addPoints;for(var a in O){var u=O[a];u.age+=n,u.age>f.PARTICLE_LIFESPAN?O.splice(+a,1):u.position=(0,y.add)(u.position,u.velocity)}if(!E){if((0,y.magnitude)(t.axes)>f.GAMEPAD_EPSILON&&(b=(0,y.normalize)(t.axes)),d=(0,y.slerp)(d,b,n*f.PLAYER_SPEED),g+=n,t.fire&&g>f.FIRE_COOLDOWN&&(g=0,h.push({position:c({},(0,p.toPolarVector)((0,y.mulFactor)(d,50)))})),(S+=n)>f.ENEMY_SPAWN_COOLDOWN){S=0;var l=Math.random()*Math.PI*2,j=Object.values(s.Type);P.push((0,s.createEnemy)(j[Math.random()*j.length|0],{angle:l,radius:f.WORLD_SIZE/2}))}var I,A=o(h);try{for(A.s();!(I=A.n()).done;){I.value.position.radius+=n*f.PROJECTILE_SPEED}}catch(W){A.e(W)}finally{A.f()}var _,w=o(P);try{for(w.s();!(_=w.n()).done;){var D=_.value;(0,s.advanceEnemy)({enemy:D,deltaTime:n})}}catch(W){w.e(W)}finally{w.f()}var L,R=o(P);try{for(R.s();!(L=R.n()).done;){if(L.value.position.radius<f.CENTER_RADIUS+f.ENEMY_SIZE){E=!0;for(var T=function(r){setTimeout(function(){return O.push.apply(O,e((0,v.createBoom)({x:f.WORLD_SIZE/2,y:f.WORLD_SIZE/2},4+4*r)))},100*r)},x=0;x<10;x+=1)T(x);break}}}catch(W){R.e(W)}finally{R.f()}e:for(var M in h)for(var N in P){var C=h[M],q=P[N];if((0,p.distance)(C.position,q.position)<f.PROJECTILE_SIZE+f.ENEMY_SIZE){h.splice(+M,1),P.splice(+N,1);var F=(0,m.toRelativeVector)(q.position);O.push.apply(O,e((0,v.createBoom)(F))),i((0,s.getValue)(q.type));continue e}}}return{playerPosition:(0,y.mulFactor)(d,f.PLAYER_OFFSET),projectiles:h,enemies:P,particles:O,gameOver:E}}exports.init=j;
},{"./config":"FxBD","./enemy":"vBK0","./math/polar-vector":"CNOl","./math/vector":"H74X","./particle":"GomQ","./world":"XLY6"}],"CnAr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=void 0;var e=require("./input");function n(n,t,r){var o=document.querySelector("#menu");window.addEventListener("keydown",d),document.querySelector("#start-button").addEventListener("click",function(){document.querySelector("html").requestFullscreen().catch(console.error),i()}),r(e.InputSource.Mouse);var u=document.querySelector("#input-source");function c(){o.hidden=!1,t()}function i(){o.hidden=!0,n()}function d(e){"Escape"==e.key&&(o.hidden?c():i())}u.addEventListener("change",function(){var n=u.querySelector("input:checked").value;r(e.InputSource[n])}),window.addEventListener("blur",c);var s=document.querySelector("#game-over");return{setGameOver:function(){s.hidden=!1,window.removeEventListener("blur",c),window.removeEventListener("keydown",d)}}}exports.init=n;
},{"./input":"ftuY"}],"dsUz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=void 0;var e="psi_highscore";function t(){var t=function(){var t=localStorage.getItem(e);return{score:0,highscore:t?+t:0}}(),r=t.highscore,o=t.score,n=document.querySelector("#score"),c=document.querySelector("#game-over-score"),i=document.querySelector("#game-over-highscore");return{addPoints:function(t){(o+=t)>r&&(r=o);n.textContent=String(o),c.textContent=String(o),i.textContent=String(r),localStorage.setItem(e,String(r))}}}exports.init=t;
},{}],"LQOA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./input"),i=require("./render"),t=require("./physics"),n=require("./menu"),r=require("./score"),u=require("./config"),o=document.querySelector("#canvas");o.width=u.WORLD_SIZE,o.height=u.WORLD_SIZE;var a=!0,s=!0,c=(0,e.init)(e.InputSource.Mouse,function(){s=!1},function(){s=!0}),p=c.getInput,d=c.setInputSource,l=(0,n.init)(function(){a=!1},function(){a=!0},function(e){d(e)}),m=l.setGameOver,f=(0,r.init)(),q=f.addPoints,v=(0,t.init)(),w=v.calculate,y=(0,i.init)(o),I=y.draw,O=0;function P(e){var i=(e-O)/1e3;if(O=e,window.requestAnimationFrame(P),!a&&!s){var t=p(),n=w({input:t,deltaTime:i,addPoints:q}),r=n.playerPosition,u=n.projectiles,o=n.enemies,c=n.particles,d=n.gameOver;I({playerPosition:r,projectiles:u,enemies:o,particles:c}),d&&m()}}q(0),window.requestAnimationFrame(P);
},{"./input":"ftuY","./render":"cUPp","./physics":"DVlx","./menu":"CnAr","./score":"dsUz","./config":"FxBD"}]},{},["LQOA"], null)
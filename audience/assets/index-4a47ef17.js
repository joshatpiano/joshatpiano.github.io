var wc=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var qm=wc(ae=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();var gi=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var t=1.70158;return n===1?1:n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return n===0?0:--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}}),Bounce:Object.freeze({In:function(n){return 1-gi.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?gi.Bounce.In(n*2)*.5:gi.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(t){return Math.pow(t,n)},Out:function(t){return 1-Math.pow(1-t,n)},InOut:function(t){return t<.5?Math.pow(t*2,n)/2:(1-Math.pow(2-t*2,n))/2+.5}}}}),pi=function(){return performance.now()},Oo=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},n.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},n.prototype.update=function(t,e){t===void 0&&(t=pi()),e===void 0&&(e=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var r=this._tweens[i[s]],o=!e;r&&r.update(t,o)===!1&&!e&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Un={Linear:function(n,t){var e=n.length-1,i=e*t,s=Math.floor(i),r=Un.Utils.Linear;return t<0?r(n[0],n[1],i):t>1?r(n[e],n[e-1],e-i):r(n[s],n[s+1>e?e:s+1],i-s)},Bezier:function(n,t){for(var e=0,i=n.length-1,s=Math.pow,r=Un.Utils.Bernstein,o=0;o<=i;o++)e+=s(1-t,i-o)*s(t,o)*n[o]*r(i,o);return e},CatmullRom:function(n,t){var e=n.length-1,i=e*t,s=Math.floor(i),r=Un.Utils.CatmullRom;return n[0]===n[e]?(t<0&&(s=Math.floor(i=e*(1+t))),r(n[(s-1+e)%e],n[s],n[(s+1)%e],n[(s+2)%e],i-s)):t<0?n[0]-(r(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[e]-(r(n[e],n[e],n[e-1],n[e-1],i-e)-n[e]):r(n[s?s-1:0],n[s],n[e<s+1?e:s+1],n[e<s+2?e:s+2],i-s)},Utils:{Linear:function(n,t,e){return(t-n)*e+n},Bernstein:function(n,t){var e=Un.Utils.Factorial;return e(n)/e(t)/e(n-t)},Factorial:function(){var n=[1];return function(t){var e=1;if(n[t])return n[t];for(var i=t;i>1;i--)e*=i;return n[t]=e,e}}(),CatmullRom:function(n,t,e,i,s){var r=(e-n)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*e+r+o)*l+(-3*t+3*e-2*r-o)*a+r*s+t}}},Fr=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),Sr=new Oo,Cc=function(){function n(t,e){e===void 0&&(e=Sr),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=gi.Linear.None,this._interpolationFunction=Un.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Fr.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e,this},n.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t,this},n.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},n.prototype.start=function(t,e){if(t===void 0&&(t=pi()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},n.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},n.prototype._setupProperties=function(t,e,i,s,r){for(var o in i){var a=t[o],l=Array.isArray(a),c=l?"array":typeof a,h=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(h){var d=i[o];if(d.length===0)continue;for(var f=[a],p=0,g=d.length;p<g;p+=1){var _=this._handleRelativeValue(a,d[p]);if(isNaN(_)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(_)}h&&(i[o]=f)}if((c==="object"||l)&&a&&!h){e[o]=l?[]:{};var m=a;for(var u in m)e[o][u]=m[u];s[o]=l?[]:{};var d=i[o];if(!this._isDynamic){var A={};for(var u in d)A[u]=d[u];i[o]=d=A}this._setupProperties(m,e[o],d,s[o],r)}else(typeof e[o]>"u"||r)&&(e[o]=a),l||(e[o]*=1),h?s[o]=i[o].slice().reverse():s[o]=e[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(t){return t===void 0&&(t=pi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},n.prototype.resume=function(t){return t===void 0&&(t=pi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},n.prototype.group=function(t){return t===void 0&&(t=Sr),this._group=t,this},n.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},n.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},n.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},n.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},n.prototype.easing=function(t){return t===void 0&&(t=gi.Linear.None),this._easingFunction=t,this},n.prototype.interpolation=function(t){return t===void 0&&(t=Un.Linear),this._interpolationFunction=t,this},n.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},n.prototype.onStart=function(t){return this._onStartCallback=t,this},n.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},n.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},n.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},n.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},n.prototype.onStop=function(t){return this._onStopCallback=t,this},n.prototype.update=function(t,e){if(t===void 0&&(t=pi()),e===void 0&&(e=!0),this._isPaused)return!0;var i,s,r=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>r)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),s=(t-this._startTime)/this._duration,s=this._duration===0||s>1?1:s;var o=this._easingFunction(s);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,s),s===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(t,e,i,s){for(var r in i)if(e[r]!==void 0){var o=e[r]||0,a=i[r],l=Array.isArray(t[r]),c=Array.isArray(a),h=!l&&c;h?t[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(t[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(t[r]=o+(a-o)*s))}},n.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},n.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],i=this._valuesEnd[t];typeof i=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(i):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},n}(),Rc="20.0.3",Pc=Fr.nextId,$e=Sr,Lc=$e.getAll.bind($e),Dc=$e.removeAll.bind($e),Uc=$e.add.bind($e),Ic=$e.remove.bind($e),Nc=$e.update.bind($e),ae={Easing:gi,Group:Oo,Interpolation:Un,now:pi,Sequence:Fr,nextId:Pc,Tween:Cc,VERSION:Rc,getAll:Lc,removeAll:Dc,add:Uc,remove:Ic,update:Nc};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Br="152",Wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oc=0,ta=1,Fc=2,Fo=1,Bc=2,ln=3,gn=0,Ce=1,un=2,En=0,_i=1,ea=2,na=3,ia=4,zc=5,fi=100,Gc=101,Hc=102,sa=103,ra=104,kc=200,Vc=201,Wc=202,Xc=203,Bo=204,zo=205,Yc=206,qc=207,jc=208,Zc=209,Kc=210,Jc=0,Qc=1,$c=2,yr=3,tl=4,el=5,nl=6,il=7,Go=0,sl=1,rl=2,pn=0,al=1,ol=2,cl=3,ll=4,hl=5,Ho=300,Mi=301,Si=302,Er=303,Ar=304,Ls=306,Tr=1e3,je=1001,br=1002,Ae=1003,aa=1004,Hs=1005,ze=1006,ul=1007,Hi=1008,zn=1009,dl=1010,fl=1011,ko=1012,pl=1013,In=1014,Nn=1015,ki=1016,ml=1017,gl=1018,vi=1020,_l=1021,Ze=1023,vl=1024,xl=1025,On=1026,yi=1027,Ml=1028,Sl=1029,yl=1030,El=1031,Al=1033,ks=33776,Vs=33777,Ws=33778,Xs=33779,oa=35840,ca=35841,la=35842,ha=35843,Tl=36196,ua=37492,da=37496,fa=37808,pa=37809,ma=37810,ga=37811,_a=37812,va=37813,xa=37814,Ma=37815,Sa=37816,ya=37817,Ea=37818,Aa=37819,Ta=37820,ba=37821,Ys=36492,bl=36283,wa=36284,Ca=36285,Ra=36286,Vo=3e3,Fn=3001,wl=3200,Cl=3201,Rl=0,Pl=1,Bn="",wt="srgb",tn="srgb-linear",Wo="display-p3",qs=7680,Ll=519,wr=35044,Pa="300 es",Cr=1035;class kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let La=1234567;const Ni=Math.PI/180,Vi=180/Math.PI;function mn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[i&255]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]).toLowerCase()}function ue(n,t,e){return Math.max(t,Math.min(e,n))}function zr(n,t){return(n%t+t)%t}function Dl(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Ul(n,t,e){return n!==t?(e-n)/(t-n):0}function Oi(n,t,e){return(1-e)*n+e*t}function Il(n,t,e,i){return Oi(n,t,1-Math.exp(-e*i))}function Nl(n,t=1){return t-Math.abs(zr(n,t*2)-t)}function Ol(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Fl(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Bl(n,t){return n+Math.floor(Math.random()*(t-n+1))}function zl(n,t){return n+Math.random()*(t-n)}function Gl(n){return n*(.5-Math.random())}function Hl(n){n!==void 0&&(La=n);let t=La+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kl(n){return n*Ni}function Vl(n){return n*Vi}function Rr(n){return(n&n-1)===0&&n!==0}function Wl(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xl(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yo={DEG2RAD:Ni,RAD2DEG:Vi,generateUUID:mn,clamp:ue,euclideanModulo:zr,mapLinear:Dl,inverseLerp:Ul,lerp:Oi,damp:Il,pingpong:Nl,smoothstep:Ol,smootherstep:Fl,randInt:Bl,randFloat:zl,randFloatSpread:Gl,seededRandom:Hl,degToRad:kl,radToDeg:Vl,isPowerOfTwo:Rr,ceilPowerOfTwo:Wl,floorPowerOfTwo:Xo,setQuaternionFromProperEuler:Xl,normalize:Wt,denormalize:dn};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],u=s[6],A=s[1],S=s[4],w=s[7],E=s[2],R=s[5],U=s[8];return r[0]=o*_+a*A+l*E,r[3]=o*m+a*S+l*R,r[6]=o*u+a*w+l*U,r[1]=c*_+h*A+d*E,r[4]=c*m+h*S+d*R,r[7]=c*u+h*w+d*U,r[2]=f*_+p*A+g*E,r[5]=f*m+p*S+g*R,r[8]=f*u+p*w+g*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(js.makeScale(t,e)),this}rotate(t){return this.premultiply(js.makeRotation(-t)),this}translate(t,e){return this.premultiply(js.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const js=new Nt;function qo(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Da={};function Fi(n){n in Da||(Da[n]=!0,console.warn(n))}function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Yl=new Nt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ql=new Nt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function jl(n){return n.convertSRGBToLinear().applyMatrix3(ql)}function Zl(n){return n.applyMatrix3(Yl).convertLinearToSRGB()}const Kl={[tn]:n=>n,[wt]:n=>n.convertSRGBToLinear(),[Wo]:jl},Jl={[tn]:n=>n,[wt]:n=>n.convertLinearToSRGB(),[Wo]:Zl},We={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return tn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Kl[t],s=Jl[e];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}};let Yn;class jo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=Wi("canvas")),Yn.width=t.width,Yn.height=t.height;const i=Yn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wi("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xi(e[i]/255)*255):e[i]=xi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Zo{constructor(t=null){this.isSource=!0,this.uuid=mn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ks(s[o].image)):r.push(Ks(s[o]))}else r=Ks(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ks(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ql=0;class be extends kn{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,i=je,s=je,r=ze,o=Hi,a=Ze,l=zn,c=be.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=mn(),this.name="",this.source=new Zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Fn?wt:Bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ho)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tr:t.x=t.x-Math.floor(t.x);break;case je:t.x=t.x<0?0:1;break;case br:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tr:t.y=t.y-Math.floor(t.y);break;case je:t.y=t.y<0?0:1;break;case br:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?Fn:Vo}set encoding(t){Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fn?wt:Bn}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Ho;be.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,w=(p+1)/2,E=(u+1)/2,R=(h+f)/4,U=(d+_)/4,W=(g+m)/4;return S>w&&S>E?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=U/i):w>E?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=R/s,r=W/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=U/r,s=W/r),this.set(i,s,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(d-_)/A,this.z=(f-h)/A,this.w=Math.acos((c+p+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gn extends kn{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(Fi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fn?wt:Bn),this.texture=new be(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ze,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ko extends be{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $l extends be{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-a;const u=l*f+c*p+h*g+d*_,A=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const E=Math.sqrt(S),R=Math.atan2(E,u*A);m=Math.sin(m*R)/E,a=Math.sin(a*R)/E}const w=a*A;if(l=l*m+f*w,c=c*m+p*w,h=h*m+g*w,d=d*m+_*w,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*f,t[e+1]=l*g+h*f+c*d-a*p,t[e+2]=c*g+h*p+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,i=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ua.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ua.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*s-a*i,h=l*i+a*e-r*s,d=l*s+r*i-o*e,f=-r*e-o*i-a*s;return this.x=c*l+f*-r+h*-a-d*-o,this.y=h*l+f*-o+d*-r-c*-a,this.z=d*l+f*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Js.copy(this).projectOnVector(t),this.sub(Js)}reflect(t){return this.sub(Js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new b,Ua=new _n;class ji{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),qn.copy(t.boundingBox),qn.applyMatrix4(t.matrixWorld),this.union(qn);else{const s=t.geometry;if(s!==void 0)if(e&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)sn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(sn)}else s.boundingBox===null&&s.computeBoundingBox(),qn.copy(s.boundingBox),qn.applyMatrix4(t.matrixWorld),this.union(qn)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),Qi.subVectors(this.max,wi),jn.subVectors(t.a,wi),Zn.subVectors(t.b,wi),Kn.subVectors(t.c,wi),xn.subVectors(Zn,jn),Mn.subVectors(Kn,Zn),wn.subVectors(jn,Kn);let e=[0,-xn.z,xn.y,0,-Mn.z,Mn.y,0,-wn.z,wn.y,xn.z,0,-xn.x,Mn.z,0,-Mn.x,wn.z,0,-wn.x,-xn.y,xn.x,0,-Mn.y,Mn.x,0,-wn.y,wn.x,0];return!Qs(e,jn,Zn,Kn,Qi)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,jn,Zn,Kn,Qi))?!1:($i.crossVectors(xn,Mn),e=[$i.x,$i.y,$i.z],Qs(e,jn,Zn,Kn,Qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new b,new b,new b,new b,new b,new b,new b,new b],sn=new b,qn=new ji,jn=new b,Zn=new b,Kn=new b,xn=new b,Mn=new b,wn=new b,wi=new b,Qi=new b,$i=new b,Cn=new b;function Qs(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Cn.fromArray(n,r);const a=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),l=t.dot(Cn),c=e.dot(Cn),h=i.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const th=new ji,Ci=new b,$s=new b;class Zi{constructor(t=new b,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):th.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ci.subVectors(t,this.center);const e=Ci.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ci,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($s.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ci.copy(t.center).add($s)),this.expandByPoint(Ci.copy(t.center).sub($s))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new b,tr=new b,ts=new b,Sn=new b,er=new b,es=new b,nr=new b;class Ds{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){tr.copy(t).add(e).multiplyScalar(.5),ts.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(tr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ts),a=Sn.dot(this.direction),l=-Sn.dot(ts),c=Sn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(tr).addScaledVector(ts,f),p}intersectSphere(t,e){rn.subVectors(t.center,this.origin);const i=rn.dot(this.direction),s=rn.dot(rn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,i,s,r){er.subVectors(e,t),es.subVectors(i,t),nr.crossVectors(er,es);let o=this.direction.dot(nr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,t);const l=a*this.direction.dot(es.crossVectors(Sn,es));if(l<0)return null;const c=a*this.direction.dot(er.cross(Sn));if(c<0||l+c>o)return null;const h=-a*Sn.dot(nr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,s,r,o,a,l,c,h,d,f,p,g,_,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),o=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,g=c*h,_=c*d;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,g=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eh,t,nh)}lookAt(t,e,i){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),yn.crossVectors(i,Ue),yn.lengthSq()===0&&(Math.abs(i.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),yn.crossVectors(i,Ue)),yn.normalize(),ns.crossVectors(Ue,yn),s[0]=yn.x,s[4]=ns.x,s[8]=Ue.x,s[1]=yn.y,s[5]=ns.y,s[9]=Ue.y,s[2]=yn.z,s[6]=ns.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],u=i[14],A=i[3],S=i[7],w=i[11],E=i[15],R=s[0],U=s[4],W=s[8],v=s[12],T=s[1],J=s[5],Z=s[9],I=s[13],B=s[2],k=s[6],tt=s[10],q=s[14],Y=s[3],nt=s[7],K=s[11],Mt=s[15];return r[0]=o*R+a*T+l*B+c*Y,r[4]=o*U+a*J+l*k+c*nt,r[8]=o*W+a*Z+l*tt+c*K,r[12]=o*v+a*I+l*q+c*Mt,r[1]=h*R+d*T+f*B+p*Y,r[5]=h*U+d*J+f*k+p*nt,r[9]=h*W+d*Z+f*tt+p*K,r[13]=h*v+d*I+f*q+p*Mt,r[2]=g*R+_*T+m*B+u*Y,r[6]=g*U+_*J+m*k+u*nt,r[10]=g*W+_*Z+m*tt+u*K,r[14]=g*v+_*I+m*q+u*Mt,r[3]=A*R+S*T+w*B+E*Y,r[7]=A*U+S*J+w*k+E*nt,r[11]=A*W+S*Z+w*tt+E*K,r[15]=A*v+S*I+w*q+E*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],u=t[15],A=d*m*c-_*f*c+_*l*p-a*m*p-d*l*u+a*f*u,S=g*f*c-h*m*c-g*l*p+o*m*p+h*l*u-o*f*u,w=h*_*c-g*d*c+g*a*p-o*_*p-h*a*u+o*d*u,E=g*d*l-h*_*l-g*a*f+o*_*f+h*a*m-o*d*m,R=e*A+i*S+s*w+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return t[0]=A*U,t[1]=(_*f*r-d*m*r-_*s*p+i*m*p+d*s*u-i*f*u)*U,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*u+i*l*u)*U,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*U,t[4]=S*U,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*u+e*f*u)*U,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*u-e*l*u)*U,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*U,t[8]=w*U,t[9]=(g*d*r-h*_*r-g*i*p+e*_*p+h*i*u-e*d*u)*U,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*u+e*a*u)*U,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*p-e*a*p)*U,t[12]=E*U,t[13]=(h*_*s-g*d*s+g*i*f-e*_*f-h*i*m+e*d*m)*U,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*U,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*f+e*a*f)*U,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,g=r*d,_=o*h,m=o*d,u=a*d,A=l*c,S=l*h,w=l*d,E=i.x,R=i.y,U=i.z;return s[0]=(1-(_+u))*E,s[1]=(p+w)*E,s[2]=(g-S)*E,s[3]=0,s[4]=(p-w)*R,s[5]=(1-(f+u))*R,s[6]=(m+A)*R,s[7]=0,s[8]=(g+S)*U,s[9]=(m-A)*U,s[10]=(1-(f+_))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Jn.set(s[0],s[1],s[2]).length();const o=Jn.set(s[4],s[5],s[6]).length(),a=Jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xe.copy(this);const c=1/r,h=1/o,d=1/a;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=d,Xe.elements[9]*=d,Xe.elements[10]*=d,e.setFromRotationMatrix(Xe),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o){const a=this.elements,l=2*r/(e-t),c=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s),f=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,s,r,o){const a=this.elements,l=1/(e-t),c=1/(i-s),h=1/(o-r),d=(e+t)*l,f=(i+s)*c,p=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Jn=new b,Xe=new jt,eh=new b(0,0,0),nh=new b(1,1,1),yn=new b,ns=new b,Ue=new b,Ia=new jt,Na=new _n;class Us{constructor(t=0,e=0,i=0,s=Us.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ia.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ia,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Na.setFromEuler(this),this.setFromQuaternion(Na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Us.DEFAULT_ORDER="XYZ";class Gr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ih=0;const Oa=new b,Qn=new _n,an=new jt,is=new b,Ri=new b,sh=new b,rh=new _n,Fa=new b(1,0,0),Ba=new b(0,1,0),za=new b(0,0,1),ah={type:"added"},Ga={type:"removed"};class re extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=re.DEFAULT_UP.clone();const t=new b,e=new Us,i=new _n,s=new b(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Nt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(Fa,t)}rotateY(t){return this.rotateOnAxis(Ba,t)}rotateZ(t){return this.rotateOnAxis(za,t)}translateOnAxis(t,e){return Oa.copy(t).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fa,t)}translateY(t){return this.translateOnAxis(Ba,t)}translateZ(t){return this.translateOnAxis(za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?is.copy(t):is.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ri,is,this.up):an.lookAt(is,Ri,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),Qn.setFromRotationMatrix(an),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ah)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ga)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ga)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(t,e);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,t,sh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,rh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}re.DEFAULT_UP=new b(0,1,0);re.DEFAULT_MATRIX_AUTO_UPDATE=!0;re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new b,on=new b,ir=new b,cn=new b,$n=new b,ti=new b,Ha=new b,sr=new b,rr=new b,ar=new b;let ss=!1;class Ge{constructor(t=new b,e=new b,i=new b){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ye.subVectors(t,e),s.cross(Ye);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ye.subVectors(s,e),on.subVectors(i,e),ir.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(on),l=Ye.dot(ir),c=on.dot(on),h=on.dot(ir),d=o*c-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(t,e,i,s,r,o,a,l){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,cn),l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(o,cn.y),l.addScaledVector(a,cn.z),l}static isFrontFacing(t,e,i,s){return Ye.subVectors(i,e),on.subVectors(t,e),Ye.cross(on).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ye.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),Ge.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return Ge.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;$n.subVectors(s,i),ti.subVectors(r,i),sr.subVectors(t,i);const l=$n.dot(sr),c=ti.dot(sr);if(l<=0&&c<=0)return e.copy(i);rr.subVectors(t,s);const h=$n.dot(rr),d=ti.dot(rr);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector($n,o);ar.subVectors(t,r);const p=$n.dot(ar),g=ti.dot(ar);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ti,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Ha.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Ha,a);const u=1/(m+_+f);return o=_*u,a=f*u,e.copy(i).addScaledVector($n,o).addScaledVector(ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let oh=0;class Vn extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=_i,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(i.blending=this.blending),this.side!==gn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qe={h:0,s:0,l:0},rs={h:0,s:0,l:0};function or(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ot{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=We.workingColorSpace){return this.r=t,this.g=e,this.b=i,We.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=We.workingColorSpace){if(t=zr(t,1),e=ue(e,0,1),i=ue(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=or(o,r,t+1/3),this.g=or(o,r,t),this.b=or(o,r,t-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(t,e=wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wt){const i=Jo[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wt){return We.fromWorkingColorSpace(_e.copy(this),t),Math.round(ue(_e.r*255,0,255))*65536+Math.round(ue(_e.g*255,0,255))*256+Math.round(ue(_e.b*255,0,255))}getHexString(t=wt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=We.workingColorSpace){We.fromWorkingColorSpace(_e.copy(this),e);const i=_e.r,s=_e.g,r=_e.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=We.workingColorSpace){return We.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=wt){We.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,i=_e.g,s=_e.b;return t!==wt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(qe),qe.h+=t,qe.s+=e,qe.l+=i,this.setHSL(qe.h,qe.s,qe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qe),t.getHSL(rs);const i=Oi(qe.h,rs.h,e),s=Oi(qe.s,rs.s,e),r=Oi(qe.l,rs.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new Ot;Ot.NAMES=Jo;class Hr extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new b,as=new ut;class Te{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=wr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Wt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Wt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Wt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Wt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Wt(e,this.array),i=Wt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Wt(e,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Wt(e,this.array),i=Wt(i,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Qo extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class $o extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ke extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ch=0;const Be=new jt,cr=new re,ei=new b,Ie=new ji,Pi=new ji,he=new b;class Re extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qo(t)?$o:Qo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Nt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,i){return Be.makeTranslation(t,e,i),this.applyMatrix4(Be),this}scale(t,e,i){return Be.makeScale(t,e,i),this.applyMatrix4(Be),this}lookAt(t){return cr.lookAt(t),cr.updateMatrix(),this.applyMatrix4(cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(t){const i=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Pi.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(Ie.min,Pi.min),Ie.expandByPoint(he),he.addVectors(Ie.max,Pi.max),Ie.expandByPoint(he)):(Ie.expandByPoint(Pi.min),Ie.expandByPoint(Pi.max))}Ie.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)he.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(he));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)he.fromBufferAttribute(a,c),l&&(ei.fromBufferAttribute(t,c),he.add(ei)),s=Math.max(s,i.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new b,h[T]=new b;const d=new b,f=new b,p=new b,g=new ut,_=new ut,m=new ut,u=new b,A=new b;function S(T,J,Z){d.fromArray(s,T*3),f.fromArray(s,J*3),p.fromArray(s,Z*3),g.fromArray(o,T*2),_.fromArray(o,J*2),m.fromArray(o,Z*2),f.sub(d),p.sub(d),_.sub(g),m.sub(g);const I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(I),A.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(I),c[T].add(u),c[J].add(u),c[Z].add(u),h[T].add(A),h[J].add(A),h[Z].add(A))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let T=0,J=w.length;T<J;++T){const Z=w[T],I=Z.start,B=Z.count;for(let k=I,tt=I+B;k<tt;k+=3)S(i[k+0],i[k+1],i[k+2])}const E=new b,R=new b,U=new b,W=new b;function v(T){U.fromArray(r,T*3),W.copy(U);const J=c[T];E.copy(J),E.sub(U.multiplyScalar(U.dot(J))).normalize(),R.crossVectors(W,J);const I=R.dot(h[T])<0?-1:1;l[T*4]=E.x,l[T*4+1]=E.y,l[T*4+2]=E.z,l[T*4+3]=I}for(let T=0,J=w.length;T<J;++T){const Z=w[T],I=Z.start,B=Z.count;for(let k=I,tt=I+B;k<tt;k+=3)v(i[k+0]),v(i[k+1]),v(i[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new b,r=new b,o=new b,a=new b,l=new b,c=new b,h=new b,d=new b;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new Te(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ka=new jt,Je=new Ds,os=new Zi,Va=new b,ni=new b,ii=new b,si=new b,lr=new b,cs=new b,ls=new ut,hs=new ut,us=new ut,Wa=new b,Xa=new b,Ya=new b,ds=new b,fs=new b;class fn extends re{constructor(t=new Re,e=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(lr.fromBufferAttribute(d,t),o?cs.addScaledVector(lr,h):cs.addScaledVector(lr.sub(e),h))}e.add(cs)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(r),Je.copy(t.ray).recast(t.near),!(os.containsPoint(Je.origin)===!1&&(Je.intersectSphere(os,Va)===null||Je.origin.distanceToSquared(Va)>(t.far-t.near)**2))&&(ka.copy(r).invert(),Je.copy(t.ray).applyMatrix4(ka),!(i.boundingBox!==null&&Je.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let i;const s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,g=d.length;p<g;p++){const _=d[p],m=r[_.materialIndex],u=Math.max(_.start,f.start),A=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let S=u,w=A;S<w;S+=3){const E=o.getX(S),R=o.getX(S+1),U=o.getX(S+2);i=ps(this,m,t,Je,l,c,h,E,R,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let _=p,m=g;_<m;_+=3){const u=o.getX(_),A=o.getX(_+1),S=o.getX(_+2);i=ps(this,r,t,Je,l,c,h,u,A,S),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,g=d.length;p<g;p++){const _=d[p],m=r[_.materialIndex],u=Math.max(_.start,f.start),A=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let S=u,w=A;S<w;S+=3){const E=S,R=S+1,U=S+2;i=ps(this,m,t,Je,l,c,h,E,R,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let _=p,m=g;_<m;_+=3){const u=_,A=_+1,S=_+2;i=ps(this,r,t,Je,l,c,h,u,A,S),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}}function lh(n,t,e,i,s,r,o,a){let l;if(t.side===Ce?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===gn,a),l===null)return null;fs.copy(a),fs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(fs);return c<e.near||c>e.far?null:{distance:c,point:fs.clone(),object:n}}function ps(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ni),n.getVertexPosition(l,ii),n.getVertexPosition(c,si);const h=lh(n,t,e,i,ni,ii,si,ds);if(h){s&&(ls.fromBufferAttribute(s,a),hs.fromBufferAttribute(s,l),us.fromBufferAttribute(s,c),h.uv=Ge.getInterpolation(ds,ni,ii,si,ls,hs,us,new ut)),r&&(ls.fromBufferAttribute(r,a),hs.fromBufferAttribute(r,l),us.fromBufferAttribute(r,c),h.uv1=Ge.getInterpolation(ds,ni,ii,si,ls,hs,us,new ut),h.uv2=h.uv1),o&&(Wa.fromBufferAttribute(o,a),Xa.fromBufferAttribute(o,l),Ya.fromBufferAttribute(o,c),h.normal=Ge.getInterpolation(ds,ni,ii,si,Wa,Xa,Ya,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new b,materialIndex:0};Ge.getNormal(ni,ii,si,d.normal),h.face=d}return h}class Ai extends Re{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(d,2));function g(_,m,u,A,S,w,E,R,U,W,v){const T=w/U,J=E/W,Z=w/2,I=E/2,B=R/2,k=U+1,tt=W+1;let q=0,Y=0;const nt=new b;for(let K=0;K<tt;K++){const Mt=K*J-I;for(let it=0;it<k;it++){const z=it*T-Z;nt[_]=z*A,nt[m]=Mt*S,nt[u]=B,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[u]=R>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(it/U),d.push(1-K/W),q+=1}}for(let K=0;K<W;K++)for(let Mt=0;Mt<U;Mt++){const it=f+Mt+k*K,z=f+Mt+k*(K+1),j=f+(Mt+1)+k*(K+1),at=f+(Mt+1)+k*K;l.push(it,z,at),l.push(z,j,at),Y+=6}a.addGroup(p,Y,v),p+=Y,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ei(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ee(n){const t={};for(let e=0;e<n.length;e++){const i=Ei(n[e]);for(const s in i)t[s]=i[s]}return t}function hh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function tc(n){return n.getRenderTarget()===null?n.outputColorSpace:tn}const uh={clone:Ei,merge:Ee};var dh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dh,this.fragmentShader=fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=hh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ec extends re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class He extends ec{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ni*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ri=-90,ai=1;class ph extends re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new He(ri,ai,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new He(ri,ai,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new He(ri,ai,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new He(ri,ai,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new He(ri,ai,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new He(ri,ai,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,f=t.xr.enabled;t.toneMapping=pn,t.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,s),t.setRenderTarget(i,1),t.render(e,r),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=p,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class nc extends be{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Mi,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mh extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Fi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Fn?wt:Bn),this.texture=new nc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ai(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Ei(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ce,blending:En});r.uniforms.tEquirect.value=e;const o=new fn(s,r),a=e.minFilter;return e.minFilter===Hi&&(e.minFilter=ze),new ph(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const hr=new b,gh=new b,_h=new Nt;class Pn{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=hr.subVectors(i,e).cross(gh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(hr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_h.getNormalMatrix(t),s=this.coplanarPoint(hr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Zi,ms=new b;class ic{constructor(t=new Pn,e=new Pn,i=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],d=i[7],f=i[8],p=i[9],g=i[10],_=i[11],m=i[12],u=i[13],A=i[14],S=i[15];return e[0].setComponents(a-s,d-l,_-f,S-m).normalize(),e[1].setComponents(a+s,d+l,_+f,S+m).normalize(),e[2].setComponents(a+r,d+c,_+p,S+u).normalize(),e[3].setComponents(a-r,d-c,_-p,S-u).normalize(),e[4].setComponents(a-o,d-h,_-g,S-A).normalize(),e[5].setComponents(a+o,d+h,_+g,S+A).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(t){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ms.x=s.normal.x>0?t.max.x:t.min.x,ms.y=s.normal.y>0?t.max.y:t.min.y,ms.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sc(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function vh(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,h){const d=c.array,f=c.usage,p=n.createBuffer();n.bindBuffer(h,p),n.bufferData(h,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,d){const f=h.array,p=h.updateRange;n.bindBuffer(d,c),p.count===-1?n.bufferSubData(d,0,f):(e?n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,s(c,h)):d.version<c.version&&(r(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class kr extends Re{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const A=u*f-o;for(let S=0;S<c;S++){const w=S*d-r;g.push(w,-A,0),_.push(0,0,1),m.push(S/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let A=0;A<a;A++){const S=A+c*u,w=A+c*(u+1),E=A+1+c*(u+1),R=A+1+c*u;p.push(S,w,R),p.push(w,E,R)}this.setIndex(p),this.setAttribute("position",new ke(g,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.width,t.height,t.widthSegments,t.heightSegments)}}var xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Th="vec3 transformed = vec3( position );",bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ch=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ou=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,du=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,pu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yu=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Pu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Du=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ed=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,id=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ad=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,od=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,hd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ud=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dd=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,md=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_d=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Md=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ed=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Td=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ud=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Od=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Yd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pt={alphamap_fragment:xh,alphamap_pars_fragment:Mh,alphatest_fragment:Sh,alphatest_pars_fragment:yh,aomap_fragment:Eh,aomap_pars_fragment:Ah,begin_vertex:Th,beginnormal_vertex:bh,bsdfs:wh,iridescence_fragment:Ch,bumpmap_pars_fragment:Rh,clipping_planes_fragment:Ph,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Dh,clipping_planes_vertex:Uh,color_fragment:Ih,color_pars_fragment:Nh,color_pars_vertex:Oh,color_vertex:Fh,common:Bh,cube_uv_reflection_fragment:zh,defaultnormal_vertex:Gh,displacementmap_pars_vertex:Hh,displacementmap_vertex:kh,emissivemap_fragment:Vh,emissivemap_pars_fragment:Wh,encodings_fragment:Xh,encodings_pars_fragment:Yh,envmap_fragment:qh,envmap_common_pars_fragment:jh,envmap_pars_fragment:Zh,envmap_pars_vertex:Kh,envmap_physical_pars_fragment:cu,envmap_vertex:Jh,fog_vertex:Qh,fog_pars_vertex:$h,fog_fragment:tu,fog_pars_fragment:eu,gradientmap_pars_fragment:nu,lightmap_fragment:iu,lightmap_pars_fragment:su,lights_lambert_fragment:ru,lights_lambert_pars_fragment:au,lights_pars_begin:ou,lights_toon_fragment:lu,lights_toon_pars_fragment:hu,lights_phong_fragment:uu,lights_phong_pars_fragment:du,lights_physical_fragment:fu,lights_physical_pars_fragment:pu,lights_fragment_begin:mu,lights_fragment_maps:gu,lights_fragment_end:_u,logdepthbuf_fragment:vu,logdepthbuf_pars_fragment:xu,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:Su,map_fragment:yu,map_pars_fragment:Eu,map_particle_fragment:Au,map_particle_pars_fragment:Tu,metalnessmap_fragment:bu,metalnessmap_pars_fragment:wu,morphcolor_vertex:Cu,morphnormal_vertex:Ru,morphtarget_pars_vertex:Pu,morphtarget_vertex:Lu,normal_fragment_begin:Du,normal_fragment_maps:Uu,normal_pars_fragment:Iu,normal_pars_vertex:Nu,normal_vertex:Ou,normalmap_pars_fragment:Fu,clearcoat_normal_fragment_begin:Bu,clearcoat_normal_fragment_maps:zu,clearcoat_pars_fragment:Gu,iridescence_pars_fragment:Hu,output_fragment:ku,packing:Vu,premultiplied_alpha_fragment:Wu,project_vertex:Xu,dithering_fragment:Yu,dithering_pars_fragment:qu,roughnessmap_fragment:ju,roughnessmap_pars_fragment:Zu,shadowmap_pars_fragment:Ku,shadowmap_pars_vertex:Ju,shadowmap_vertex:Qu,shadowmask_pars_fragment:$u,skinbase_vertex:td,skinning_pars_vertex:ed,skinning_vertex:nd,skinnormal_vertex:id,specularmap_fragment:sd,specularmap_pars_fragment:rd,tonemapping_fragment:ad,tonemapping_pars_fragment:od,transmission_fragment:cd,transmission_pars_fragment:ld,uv_pars_fragment:hd,uv_pars_vertex:ud,uv_vertex:dd,worldpos_vertex:fd,background_vert:pd,background_frag:md,backgroundCube_vert:gd,backgroundCube_frag:_d,cube_vert:vd,cube_frag:xd,depth_vert:Md,depth_frag:Sd,distanceRGBA_vert:yd,distanceRGBA_frag:Ed,equirect_vert:Ad,equirect_frag:Td,linedashed_vert:bd,linedashed_frag:wd,meshbasic_vert:Cd,meshbasic_frag:Rd,meshlambert_vert:Pd,meshlambert_frag:Ld,meshmatcap_vert:Dd,meshmatcap_frag:Ud,meshnormal_vert:Id,meshnormal_frag:Nd,meshphong_vert:Od,meshphong_frag:Fd,meshphysical_vert:Bd,meshphysical_frag:zd,meshtoon_vert:Gd,meshtoon_frag:Hd,points_vert:kd,points_frag:Vd,shadow_vert:Wd,shadow_frag:Xd,sprite_vert:Yd,sprite_frag:qd},ot={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}}},Qe={basic:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Ee([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Ee([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Ee([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Ee([ot.points,ot.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Ee([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Ee([ot.common,ot.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Ee([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Ee([ot.sprite,ot.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Ee([ot.common,ot.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Ee([ot.lights,ot.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Qe.physical={uniforms:Ee([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const gs={r:0,b:0,g:0};function jd(n,t,e,i,s,r,o){const a=new Ot(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(m,u){let A=!1,S=u.isScene===!0?u.background:null;switch(S&&S.isTexture&&(S=(u.backgroundBlurriness>0?e:t).get(S)),S===null?_(a,l):S&&S.isColor&&(_(S,1),A=!0),n.xr.getEnvironmentBlendMode()){case"opaque":A=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),A=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),A=!0;break}(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Ls)?(h===void 0&&(h=new fn(new Ai(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ei(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,U,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=S.colorSpace!==wt,(d!==S||f!==S.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new fn(new kr(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ei(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=S.colorSpace!==wt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,u){m.getRGB(gs,tc(n)),i.buffers.color.setClear(gs.r,gs.g,gs.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Zd(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function d(B,k,tt,q,Y){let nt=!1;if(o){const K=_(q,tt,k);c!==K&&(c=K,p(c.object)),nt=u(B,q,tt,Y),nt&&A(B,q,tt,Y)}else{const K=k.wireframe===!0;(c.geometry!==q.id||c.program!==tt.id||c.wireframe!==K)&&(c.geometry=q.id,c.program=tt.id,c.wireframe=K,nt=!0)}Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(nt||h)&&(h=!1,W(B,k,tt,q),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(B){return i.isWebGL2?n.bindVertexArray(B):r.bindVertexArrayOES(B)}function g(B){return i.isWebGL2?n.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function _(B,k,tt){const q=tt.wireframe===!0;let Y=a[B.id];Y===void 0&&(Y={},a[B.id]=Y);let nt=Y[k.id];nt===void 0&&(nt={},Y[k.id]=nt);let K=nt[q];return K===void 0&&(K=m(f()),nt[q]=K),K}function m(B){const k=[],tt=[],q=[];for(let Y=0;Y<s;Y++)k[Y]=0,tt[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:tt,attributeDivisors:q,object:B,attributes:{},index:null}}function u(B,k,tt,q){const Y=c.attributes,nt=k.attributes;let K=0;const Mt=tt.getAttributes();for(const it in Mt)if(Mt[it].location>=0){const j=Y[it];let at=nt[it];if(at===void 0&&(it==="instanceMatrix"&&B.instanceMatrix&&(at=B.instanceMatrix),it==="instanceColor"&&B.instanceColor&&(at=B.instanceColor)),j===void 0||j.attribute!==at||at&&j.data!==at.data)return!0;K++}return c.attributesNum!==K||c.index!==q}function A(B,k,tt,q){const Y={},nt=k.attributes;let K=0;const Mt=tt.getAttributes();for(const it in Mt)if(Mt[it].location>=0){let j=nt[it];j===void 0&&(it==="instanceMatrix"&&B.instanceMatrix&&(j=B.instanceMatrix),it==="instanceColor"&&B.instanceColor&&(j=B.instanceColor));const at={};at.attribute=j,j&&j.data&&(at.data=j.data),Y[it]=at,K++}c.attributes=Y,c.attributesNum=K,c.index=q}function S(){const B=c.newAttributes;for(let k=0,tt=B.length;k<tt;k++)B[k]=0}function w(B){E(B,0)}function E(B,k){const tt=c.newAttributes,q=c.enabledAttributes,Y=c.attributeDivisors;tt[B]=1,q[B]===0&&(n.enableVertexAttribArray(B),q[B]=1),Y[B]!==k&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,k),Y[B]=k)}function R(){const B=c.newAttributes,k=c.enabledAttributes;for(let tt=0,q=k.length;tt<q;tt++)k[tt]!==B[tt]&&(n.disableVertexAttribArray(tt),k[tt]=0)}function U(B,k,tt,q,Y,nt){i.isWebGL2===!0&&(tt===n.INT||tt===n.UNSIGNED_INT)?n.vertexAttribIPointer(B,k,tt,Y,nt):n.vertexAttribPointer(B,k,tt,q,Y,nt)}function W(B,k,tt,q){if(i.isWebGL2===!1&&(B.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const Y=q.attributes,nt=tt.getAttributes(),K=k.defaultAttributeValues;for(const Mt in nt){const it=nt[Mt];if(it.location>=0){let z=Y[Mt];if(z===void 0&&(Mt==="instanceMatrix"&&B.instanceMatrix&&(z=B.instanceMatrix),Mt==="instanceColor"&&B.instanceColor&&(z=B.instanceColor)),z!==void 0){const j=z.normalized,at=z.itemSize,ht=e.get(z);if(ht===void 0)continue;const L=ht.buffer,At=ht.type,Et=ht.bytesPerElement;if(z.isInterleavedBufferAttribute){const st=z.data,St=st.stride,zt=z.offset;if(st.isInstancedInterleavedBuffer){for(let vt=0;vt<it.locationSize;vt++)E(it.location+vt,st.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let vt=0;vt<it.locationSize;vt++)w(it.location+vt);n.bindBuffer(n.ARRAY_BUFFER,L);for(let vt=0;vt<it.locationSize;vt++)U(it.location+vt,at/it.locationSize,At,j,St*Et,(zt+at/it.locationSize*vt)*Et)}else{if(z.isInstancedBufferAttribute){for(let st=0;st<it.locationSize;st++)E(it.location+st,z.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let st=0;st<it.locationSize;st++)w(it.location+st);n.bindBuffer(n.ARRAY_BUFFER,L);for(let st=0;st<it.locationSize;st++)U(it.location+st,at/it.locationSize,At,j,at*Et,at/it.locationSize*st*Et)}}else if(K!==void 0){const j=K[Mt];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(it.location,j);break;case 3:n.vertexAttrib3fv(it.location,j);break;case 4:n.vertexAttrib4fv(it.location,j);break;default:n.vertexAttrib1fv(it.location,j)}}}}R()}function v(){Z();for(const B in a){const k=a[B];for(const tt in k){const q=k[tt];for(const Y in q)g(q[Y].object),delete q[Y];delete k[tt]}delete a[B]}}function T(B){if(a[B.id]===void 0)return;const k=a[B.id];for(const tt in k){const q=k[tt];for(const Y in q)g(q[Y].object),delete q[Y];delete k[tt]}delete a[B.id]}function J(B){for(const k in a){const tt=a[k];if(tt[B.id]===void 0)continue;const q=tt[B.id];for(const Y in q)g(q[Y].object),delete q[Y];delete tt[B.id]}}function Z(){I(),h=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:J,initAttributes:S,enableAttribute:w,disableUnusedAttributes:R}}function Kd(n,t,e,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,h){n.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,d){if(d===0)return;let f,p;if(s)f=n,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,h,d),e.update(h,r,d)}this.setMode=o,this.render=a,this.renderInstances=l}function Jd(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,w=o||t.has("OES_texture_float"),E=S&&w,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:A,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:E,maxSamples:R}}function Qd(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Pn,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const A=r?0:i,S=A*4;let w=u.clippingState||null;l.value=w,w=h(g,f,S,p);for(let E=0;E!==S;++E)w[E]=e[E];u.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,w=p;S!==_;++S,w+=4)o.copy(d[S]).applyMatrix4(A,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function $d(n){let t=new WeakMap;function e(o,a){return a===Er?o.mapping=Mi:a===Ar&&(o.mapping=Si),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Er||a===Ar)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mh(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class tf extends ec{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mi=4,qa=[.125,.215,.35,.446,.526,.582],Dn=20,ur=new tf,ja=new Ot;let dr=null;const Ln=(1+Math.sqrt(5))/2,oi=1/Ln,Za=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Ln,oi),new b(0,Ln,-oi),new b(oi,0,Ln),new b(-oi,0,Ln),new b(Ln,oi,0),new b(-Ln,oi,0)];class Ka{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){dr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dr),t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===Si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dr=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:ki,format:Ze,colorSpace:tn,depthBuffer:!1},s=Ja(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ja(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ef(r)),this._blurMaterial=nf(r,t,e)}return s}_compileMaterial(t){const e=new fn(this._lodPlanes[0],t);this._renderer.compile(e,ur)}_sceneToCubeUV(t,e,i,s){const a=new He(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ja),h.toneMapping=pn,h.autoClear=!1;const p=new Hr({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new fn(new Ai,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ja),_=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):A===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const S=this._cubeSize;_s(s,A*S,u>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Mi||t.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;_s(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ur)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Za[(s-1)%Za.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new fn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Dn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Dn;m>Dn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dn}`);const u=[];let A=0;for(let U=0;U<Dn;++U){const W=U/_,v=Math.exp(-W*W/2);u.push(v),U===0?A+=v:U<m&&(A+=2*v)}for(let U=0;U<u.length;U++)u[U]=u[U]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const w=this._sizeLods[s],E=3*w*(s>S-mi?s-S+mi:0),R=4*(this._cubeSize-w);_s(e,E,R,3*w,2*w),l.setRenderTarget(e),l.render(d,ur)}}function ef(n){const t=[],e=[],i=[];let s=n;const r=n-mi+1+qa.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-mi?l=qa[o-n+mi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,A=new Float32Array(_*g*p),S=new Float32Array(m*g*p),w=new Float32Array(u*g*p);for(let R=0;R<p;R++){const U=R%3*2/3-1,W=R>2?0:-1,v=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];A.set(v,_*g*R),S.set(f,m*g*R);const T=[R,R,R,R,R,R];w.set(T,u*g*R)}const E=new Re;E.setAttribute("position",new Te(A,_)),E.setAttribute("uv",new Te(S,m)),E.setAttribute("faceIndex",new Te(w,u)),t.push(E),s>mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ja(n,t,e){const i=new Gn(n,t,e);return i.texture.mapping=Ls,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function nf(n,t,e){const i=new Float32Array(Dn),s=new b(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Qa(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function $a(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Vr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sf(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Er||l===Ar,h=l===Mi||l===Si;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Ka(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new Ka(n));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function rf(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function af(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,u=_.length;m<u;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const A=p.array;_=p.version;for(let S=0,w=A.length;S<w;S+=3){const E=A[S+0],R=A[S+1],U=A[S+2];f.push(E,R,R,U,U,E)}}else{const A=g.array;_=g.version;for(let S=0,w=A.length/3-1;S<w;S+=3){const E=S+0,R=S+1,U=S+2;f.push(E,R,R,U,U,E)}}const m=new(qo(f)?$o:Qo)(f,1);m.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function of(n,t,e,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,p){n.drawElements(r,p,a,f*l),e.update(p,r,1)}function d(f,p,g){if(g===0)return;let _,m;if(s)_=n,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,f*l,g),e.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function cf(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lf(n,t){return n[0]-t[0]}function hf(n,t){return Math.abs(t[1])-Math.abs(n[1])}function uf(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new de,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let k=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const S=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],W=h.morphAttributes.color||[];let v=0;S===!0&&(v=1),w===!0&&(v=2),E===!0&&(v=3);let T=h.attributes.position.count*v,J=1;T>t.maxTextureSize&&(J=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const Z=new Float32Array(T*J*4*_),I=new Ko(Z,T,J,_);I.type=Nn,I.needsUpdate=!0;const B=v*4;for(let tt=0;tt<_;tt++){const q=R[tt],Y=U[tt],nt=W[tt],K=T*J*4*tt;for(let Mt=0;Mt<q.count;Mt++){const it=Mt*B;S===!0&&(o.fromBufferAttribute(q,Mt),Z[K+it+0]=o.x,Z[K+it+1]=o.y,Z[K+it+2]=o.z,Z[K+it+3]=0),w===!0&&(o.fromBufferAttribute(Y,Mt),Z[K+it+4]=o.x,Z[K+it+5]=o.y,Z[K+it+6]=o.z,Z[K+it+7]=0),E===!0&&(o.fromBufferAttribute(nt,Mt),Z[K+it+8]=o.x,Z[K+it+9]=o.y,Z[K+it+10]=o.z,Z[K+it+11]=nt.itemSize===4?o.w:1)}}m={count:_,texture:I,size:new ut(T,J)},r.set(h,m),h.addEventListener("dispose",k)}let u=0;for(let S=0;S<f.length;S++)u+=f[S];const A=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];i[h.id]=_}for(let w=0;w<g;w++){const E=_[w];E[0]=w,E[1]=f[w]}_.sort(hf);for(let w=0;w<8;w++)w<g&&_[w][1]?(a[w][0]=_[w][0],a[w][1]=_[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(lf);const m=h.morphAttributes.position,u=h.morphAttributes.normal;let A=0;for(let w=0;w<8;w++){const E=a[w],R=E[0],U=E[1];R!==Number.MAX_SAFE_INTEGER&&U?(m&&h.getAttribute("morphTarget"+w)!==m[R]&&h.setAttribute("morphTarget"+w,m[R]),u&&h.getAttribute("morphNormal"+w)!==u[R]&&h.setAttribute("morphNormal"+w,u[R]),s[w]=U,A+=U):(m&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),u&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),s[w]=0)}const S=h.morphTargetsRelative?1:1-A;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function df(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);return s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER)),d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const rc=new be,ac=new Ko,oc=new $l,cc=new nc,to=[],eo=[],no=new Float32Array(16),io=new Float32Array(9),so=new Float32Array(4);function Ti(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=to[s];if(r===void 0&&(r=new Float32Array(s),to[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Is(n,t){let e=eo[t];e===void 0&&(e=new Int32Array(t),eo[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ff(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function pf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;n.uniform2fv(this.addr,t),ce(e,t)}}function mf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(oe(e,t))return;n.uniform3fv(this.addr,t),ce(e,t)}}function gf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;n.uniform4fv(this.addr,t),ce(e,t)}}function _f(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(oe(e,i))return;so.set(i),n.uniformMatrix2fv(this.addr,!1,so),ce(e,i)}}function vf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(oe(e,i))return;io.set(i),n.uniformMatrix3fv(this.addr,!1,io),ce(e,i)}}function xf(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(oe(e,i))return;no.set(i),n.uniformMatrix4fv(this.addr,!1,no),ce(e,i)}}function Mf(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Sf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;n.uniform2iv(this.addr,t),ce(e,t)}}function yf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;n.uniform3iv(this.addr,t),ce(e,t)}}function Ef(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;n.uniform4iv(this.addr,t),ce(e,t)}}function Af(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Tf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;n.uniform2uiv(this.addr,t),ce(e,t)}}function bf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;n.uniform3uiv(this.addr,t),ce(e,t)}}function wf(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;n.uniform4uiv(this.addr,t),ce(e,t)}}function Cf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2D(t||rc,s)}function Rf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||oc,s)}function Pf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||cc,s)}function Lf(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ac,s)}function Df(n){switch(n){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return yf;case 35669:case 35673:return Ef;case 5125:return Af;case 36294:return Tf;case 36295:return bf;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Lf}}function Uf(n,t){n.uniform1fv(this.addr,t)}function If(n,t){const e=Ti(t,this.size,2);n.uniform2fv(this.addr,e)}function Nf(n,t){const e=Ti(t,this.size,3);n.uniform3fv(this.addr,e)}function Of(n,t){const e=Ti(t,this.size,4);n.uniform4fv(this.addr,e)}function Ff(n,t){const e=Ti(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Bf(n,t){const e=Ti(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function zf(n,t){const e=Ti(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Gf(n,t){n.uniform1iv(this.addr,t)}function Hf(n,t){n.uniform2iv(this.addr,t)}function kf(n,t){n.uniform3iv(this.addr,t)}function Vf(n,t){n.uniform4iv(this.addr,t)}function Wf(n,t){n.uniform1uiv(this.addr,t)}function Xf(n,t){n.uniform2uiv(this.addr,t)}function Yf(n,t){n.uniform3uiv(this.addr,t)}function qf(n,t){n.uniform4uiv(this.addr,t)}function jf(n,t,e){const i=this.cache,s=t.length,r=Is(e,s);oe(i,r)||(n.uniform1iv(this.addr,r),ce(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||rc,r[o])}function Zf(n,t,e){const i=this.cache,s=t.length,r=Is(e,s);oe(i,r)||(n.uniform1iv(this.addr,r),ce(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||oc,r[o])}function Kf(n,t,e){const i=this.cache,s=t.length,r=Is(e,s);oe(i,r)||(n.uniform1iv(this.addr,r),ce(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cc,r[o])}function Jf(n,t,e){const i=this.cache,s=t.length,r=Is(e,s);oe(i,r)||(n.uniform1iv(this.addr,r),ce(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ac,r[o])}function Qf(n){switch(n){case 5126:return Uf;case 35664:return If;case 35665:return Nf;case 35666:return Of;case 35674:return Ff;case 35675:return Bf;case 35676:return zf;case 5124:case 35670:return Gf;case 35667:case 35671:return Hf;case 35668:case 35672:return kf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Xf;case 36295:return Yf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return Jf}}class $f{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Df(e.type)}}class tp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Qf(e.type)}}class ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function ro(n,t){n.seq.push(t),n.map[t.id]=t}function np(n,t,e){const i=n.name,s=i.length;for(fr.lastIndex=0;;){const r=fr.exec(i),o=fr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ro(e,c===void 0?new $f(a,n,t):new tp(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new ep(a),ro(e,d)),e=d}}}class bs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);np(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ao(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let ip=0;function sp(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function rp(n){switch(n){case tn:return["Linear","( value )"];case wt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function oo(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sp(n.getShaderSource(t),o)}else return s}function ap(n,t){const e=rp(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function op(n,t){let e;switch(t){case al:e="Linear";break;case ol:e="Reinhard";break;case cl:e="OptimizedCineon";break;case ll:e="ACESFilmic";break;case hl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cp(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function lp(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hp(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ii(n){return n!==""}function co(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lo(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const up=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pr(n){return n.replace(up,dp)}function dp(n,t){const e=Pt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Pr(e)}const fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ho(n){return n.replace(fp,pp)}function pp(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uo(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mp(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fo?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function gp(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mi:case Si:t="ENVMAP_TYPE_CUBE";break;case Ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _p(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Si:t="ENVMAP_MODE_REFRACTION";break}return t}function vp(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Go:t="ENVMAP_BLENDING_MULTIPLY";break;case sl:t="ENVMAP_BLENDING_MIX";break;case rl:t="ENVMAP_BLENDING_ADD";break}return t}function xp(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Mp(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=mp(e),c=gp(e),h=_p(e),d=vp(e),f=xp(e),p=e.isWebGL2?"":cp(e),g=lp(r),_=s.createProgram();let m,u,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[g].filter(Ii).join(`
`),m.length>0&&(m+=`
`),u=[p,g].filter(Ii).join(`
`),u.length>0&&(u+=`
`)):(m=[uo(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),u=[p,uo(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==pn?op("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.encodings_pars_fragment,ap("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),o=Pr(o),o=co(o,e),o=lo(o,e),a=Pr(a),a=co(a,e),a=lo(a,e),o=ho(o),a=ho(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=A+m+o,w=A+u+a,E=ao(s,s.VERTEX_SHADER,S),R=ao(s,s.FRAGMENT_SHADER,w);if(s.attachShader(_,E),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_),n.debug.checkShaderErrors){const v=s.getProgramInfoLog(_).trim(),T=s.getShaderInfoLog(E).trim(),J=s.getShaderInfoLog(R).trim();let Z=!0,I=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,R);else{const B=oo(s,E,"vertex"),k=oo(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+B+`
`+k)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(T===""||J==="")&&(I=!1);I&&(this.diagnostics={runnable:Z,programLog:v,vertexShader:{log:T,prefix:m},fragmentShader:{log:J,prefix:u}})}s.deleteShader(E),s.deleteShader(R);let U;this.getUniforms=function(){return U===void 0&&(U=new bs(s,_)),U};let W;return this.getAttributes=function(){return W===void 0&&(W=hp(s,_)),W},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.name=e.shaderName,this.id=ip++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}let Sp=0;class yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ep(t),e.set(t,i)),i}}class Ep{constructor(t){this.id=Sp++,this.code=t,this.usedTimes=0}}function Ap(n,t,e,i,s,r,o){const a=new Gr,l=new yp,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,T,J,Z,I){const B=Z.fog,k=I.geometry,tt=v.isMeshStandardMaterial?Z.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||tt),Y=q&&q.mapping===Ls?q.image.height:null,nt=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Mt=K!==void 0?K.length:0;let it=0;k.morphAttributes.position!==void 0&&(it=1),k.morphAttributes.normal!==void 0&&(it=2),k.morphAttributes.color!==void 0&&(it=3);let z,j,at,ht;if(nt){const kt=Qe[nt];z=kt.vertexShader,j=kt.fragmentShader}else z=v.vertexShader,j=v.fragmentShader,l.update(v),at=l.getVertexShaderID(v),ht=l.getFragmentShaderID(v);const L=n.getRenderTarget(),At=I.isInstancedMesh===!0,Et=!!v.map,st=!!v.matcap,St=!!q,zt=!!v.aoMap,vt=!!v.lightMap,Ct=!!v.bumpMap,Jt=!!v.normalMap,Zt=!!v.displacementMap,ne=!!v.emissiveMap,$t=!!v.metalnessMap,Bt=!!v.roughnessMap,Xt=v.clearcoat>0,pe=v.iridescence>0,y=v.sheen>0,x=v.transmission>0,F=Xt&&!!v.clearcoatMap,Q=Xt&&!!v.clearcoatNormalMap,et=Xt&&!!v.clearcoatRoughnessMap,ct=pe&&!!v.iridescenceMap,C=pe&&!!v.iridescenceThicknessMap,X=y&&!!v.sheenColorMap,O=y&&!!v.sheenRoughnessMap,lt=!!v.specularMap,pt=!!v.specularColorMap,gt=!!v.specularIntensityMap,dt=x&&!!v.transmissionMap,mt=x&&!!v.thicknessMap,Tt=!!v.gradientMap,Lt=!!v.alphaMap,te=v.alphaTest>0,P=!!v.extensions,G=!!k.attributes.uv1,$=!!k.attributes.uv2,ft=!!k.attributes.uv3;return{isWebGL2:h,shaderID:nt,shaderName:v.type,vertexShader:z,fragmentShader:j,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:ht,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:At,instancingColor:At&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:L===null?n.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:tn,map:Et,matcap:st,envMap:St,envMapMode:St&&q.mapping,envMapCubeUVHeight:Y,aoMap:zt,lightMap:vt,bumpMap:Ct,normalMap:Jt,displacementMap:f&&Zt,emissiveMap:ne,normalMapObjectSpace:Jt&&v.normalMapType===Pl,normalMapTangentSpace:Jt&&v.normalMapType===Rl,metalnessMap:$t,roughnessMap:Bt,clearcoat:Xt,clearcoatMap:F,clearcoatNormalMap:Q,clearcoatRoughnessMap:et,iridescence:pe,iridescenceMap:ct,iridescenceThicknessMap:C,sheen:y,sheenColorMap:X,sheenRoughnessMap:O,specularMap:lt,specularColorMap:pt,specularIntensityMap:gt,transmission:x,transmissionMap:dt,thicknessMap:mt,gradientMap:Tt,opaque:v.transparent===!1&&v.blending===_i,alphaMap:Lt,alphaTest:te,combine:v.combine,mapUv:Et&&_(v.map.channel),aoMapUv:zt&&_(v.aoMap.channel),lightMapUv:vt&&_(v.lightMap.channel),bumpMapUv:Ct&&_(v.bumpMap.channel),normalMapUv:Jt&&_(v.normalMap.channel),displacementMapUv:Zt&&_(v.displacementMap.channel),emissiveMapUv:ne&&_(v.emissiveMap.channel),metalnessMapUv:$t&&_(v.metalnessMap.channel),roughnessMapUv:Bt&&_(v.roughnessMap.channel),clearcoatMapUv:F&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:C&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:X&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:O&&_(v.sheenRoughnessMap.channel),specularMapUv:lt&&_(v.specularMap.channel),specularColorMapUv:pt&&_(v.specularColorMap.channel),specularIntensityMapUv:gt&&_(v.specularIntensityMap.channel),transmissionMapUv:dt&&_(v.transmissionMap.channel),thicknessMapUv:mt&&_(v.thicknessMap.channel),alphaMapUv:Lt&&_(v.alphaMap.channel),vertexTangents:Jt&&!!k.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:G,vertexUv2s:$,vertexUv3s:ft,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Et||Lt),fog:!!B,useFog:v.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:it,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&J.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:pn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===Ce,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:P&&v.extensions.derivatives===!0,extensionFragDepth:P&&v.extensions.fragDepth===!0,extensionDrawBuffers:P&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:P&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function u(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const J in v.defines)T.push(J),T.push(v.defines[J]);return v.isRawShaderMaterial===!1&&(A(T,v),S(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function A(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),v.push(a.mask)}function w(v){const T=g[v.type];let J;if(T){const Z=Qe[T];J=uh.clone(Z.uniforms)}else J=v.uniforms;return J}function E(v,T){let J;for(let Z=0,I=c.length;Z<I;Z++){const B=c[Z];if(B.cacheKey===T){J=B,++J.usedTimes;break}}return J===void 0&&(J=new Mp(n,T,v,r),c.push(J)),J}function R(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function U(v){l.remove(v)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:w,acquireProgram:E,releaseProgram:R,releaseShaderCache:U,programs:c,dispose:W}}function Tp(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function bp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fo(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function po(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,g,_,m){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),t++,u}function a(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||bp),i.length>1&&i.sort(f||fo),s.length>1&&s.sort(f||fo)}function h(){for(let d=t,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function wp(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new po,n.set(i,[o])):s>=r.length?(o=new po,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Cp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Ot};break;case"SpotLight":e={position:new b,direction:new b,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new b,halfWidth:new b,halfHeight:new b};break}return n[t.id]=e,e}}}function Rp(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Pp=0;function Lp(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Dp(n,t){const e=new Cp,i=Rp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new b);const r=new b,o=new jt,a=new jt;function l(h,d){let f=0,p=0,g=0;for(let J=0;J<9;J++)s.probe[J].set(0,0,0);let _=0,m=0,u=0,A=0,S=0,w=0,E=0,R=0,U=0,W=0;h.sort(Lp);const v=d===!0?Math.PI:1;for(let J=0,Z=h.length;J<Z;J++){const I=h[J],B=I.color,k=I.intensity,tt=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=B.r*k*v,p+=B.g*k*v,g+=B.b*k*v;else if(I.isLightProbe)for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(I.sh.coefficients[Y],k);else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const nt=I.shadow,K=i.get(I);K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,s.directionalShadow[_]=K,s.directionalShadowMap[_]=q,s.directionalShadowMatrix[_]=I.shadow.matrix,w++}s.directional[_]=Y,_++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(B).multiplyScalar(k*v),Y.distance=tt,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,s.spot[u]=Y;const nt=I.shadow;if(I.map&&(s.spotLightMap[U]=I.map,U++,nt.updateMatrices(I),I.castShadow&&W++),s.spotLightMatrix[u]=nt.matrix,I.castShadow){const K=i.get(I);K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,s.spotShadow[u]=K,s.spotShadowMap[u]=q,R++}u++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(B).multiplyScalar(k),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),s.rectArea[A]=Y,A++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*v),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const nt=I.shadow,K=i.get(I);K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,K.shadowCameraNear=nt.camera.near,K.shadowCameraFar=nt.camera.far,s.pointShadow[m]=K,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=I.shadow.matrix,E++}s.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(k*v),Y.groundColor.copy(I.groundColor).multiplyScalar(k*v),s.hemi[S]=Y,S++}}A>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==_||T.pointLength!==m||T.spotLength!==u||T.rectAreaLength!==A||T.hemiLength!==S||T.numDirectionalShadows!==w||T.numPointShadows!==E||T.numSpotShadows!==R||T.numSpotMaps!==U)&&(s.directional.length=_,s.spot.length=u,s.rectArea.length=A,s.point.length=m,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=R+U-W,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=W,T.directionalLength=_,T.pointLength=m,T.spotLength=u,T.rectAreaLength=A,T.hemiLength=S,T.numDirectionalShadows=w,T.numPointShadows=E,T.numSpotShadows=R,T.numSpotMaps=U,s.version=Pp++)}function c(h,d){let f=0,p=0,g=0,_=0,m=0;const u=d.matrixWorldInverse;for(let A=0,S=h.length;A<S;A++){const w=h[A];if(w.isDirectionalLight){const E=s.directional[f];E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),f++}else if(w.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),g++}else if(w.isRectAreaLight){const E=s.rectArea[_];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(u),a.identity(),o.copy(w.matrixWorld),o.premultiply(u),a.extractRotation(o),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const E=s.point[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(u),p++}else if(w.isHemisphereLight){const E=s.hemi[m];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:s}}function mo(n,t){const e=new Dp(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){e.setup(i,d)}function c(d){e.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Up(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new mo(n,t),e.set(r,[l])):o>=a.length?(l=new mo(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ip extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Np extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bp(n,t,e){let i=new ic;const s=new ut,r=new ut,o=new de,a=new Ip({depthPacking:Cl}),l=new Np,c={},h=e.maxTextureSize,d={[gn]:Ce,[Ce]:gn,[un]:un},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Op,fragmentShader:Fp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let u=this.type;this.render=function(E,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const W=n.getRenderTarget(),v=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),J=n.state;J.setBlending(En),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Z=u!==ln&&this.type===ln,I=u===ln&&this.type!==ln;for(let B=0,k=E.length;B<k;B++){const tt=E[B],q=tt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const Y=q.getFrameExtents();if(s.multiply(Y),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,q.mapSize.y=r.y)),q.map===null||Z===!0||I===!0){const K=this.type!==ln?{minFilter:Ae,magFilter:Ae}:{};q.map!==null&&q.map.dispose(),q.map=new Gn(s.x,s.y,K),q.map.texture.name=tt.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const nt=q.getViewportCount();for(let K=0;K<nt;K++){const Mt=q.getViewport(K);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),J.viewport(o),q.updateMatrices(tt,K),i=q.getFrustum(),w(R,U,q.camera,tt,this.type)}q.isPointLightShadow!==!0&&this.type===ln&&A(q,U),q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(W,v,T)};function A(E,R){const U=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Gn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,U,p,_,null)}function S(E,R,U,W){let v=null;const T=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)v=T;else if(v=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const J=v.uuid,Z=R.uuid;let I=c[J];I===void 0&&(I={},c[J]=I);let B=I[Z];B===void 0&&(B=v.clone(),I[Z]=B),v=B}if(v.visible=R.visible,v.wireframe=R.wireframe,W===ln?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const J=n.properties.get(v);J.light=U}return v}function w(E,R,U,W,v){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===ln)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const Z=t.update(E),I=E.material;if(Array.isArray(I)){const B=Z.groups;for(let k=0,tt=B.length;k<tt;k++){const q=B[k],Y=I[q.materialIndex];if(Y&&Y.visible){const nt=S(E,Y,W,v);n.renderBufferDirect(U,null,Z,nt,E,q)}}}else if(I.visible){const B=S(E,I,W,v);n.renderBufferDirect(U,null,Z,B,E,null)}}const J=E.children;for(let Z=0,I=J.length;Z<I;Z++)w(J[Z],R,U,W,v)}}function zp(n,t,e){const i=e.isWebGL2;function s(){let P=!1;const G=new de;let $=null;const ft=new de(0,0,0,0);return{setMask:function(_t){$!==_t&&!P&&(n.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){P=_t},setClear:function(_t,kt,Vt,me,vn){vn===!0&&(_t*=me,kt*=me,Vt*=me),G.set(_t,kt,Vt,me),ft.equals(G)===!1&&(n.clearColor(_t,kt,Vt,me),ft.copy(G))},reset:function(){P=!1,$=null,ft.set(-1,0,0,0)}}}function r(){let P=!1,G=null,$=null,ft=null;return{setTest:function(_t){_t?L(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(_t){G!==_t&&!P&&(n.depthMask(_t),G=_t)},setFunc:function(_t){if($!==_t){switch(_t){case Jc:n.depthFunc(n.NEVER);break;case Qc:n.depthFunc(n.ALWAYS);break;case $c:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case tl:n.depthFunc(n.EQUAL);break;case el:n.depthFunc(n.GEQUAL);break;case nl:n.depthFunc(n.GREATER);break;case il:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=_t}},setLocked:function(_t){P=_t},setClear:function(_t){ft!==_t&&(n.clearDepth(_t),ft=_t)},reset:function(){P=!1,G=null,$=null,ft=null}}}function o(){let P=!1,G=null,$=null,ft=null,_t=null,kt=null,Vt=null,me=null,vn=null;return{setTest:function(ee){P||(ee?L(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(ee){G!==ee&&!P&&(n.stencilMask(ee),G=ee)},setFunc:function(ee,Fe,Ke){($!==ee||ft!==Fe||_t!==Ke)&&(n.stencilFunc(ee,Fe,Ke),$=ee,ft=Fe,_t=Ke)},setOp:function(ee,Fe,Ke){(kt!==ee||Vt!==Fe||me!==Ke)&&(n.stencilOp(ee,Fe,Ke),kt=ee,Vt=Fe,me=Ke)},setLocked:function(ee){P=ee},setClear:function(ee){vn!==ee&&(n.clearStencil(ee),vn=ee)},reset:function(){P=!1,G=null,$=null,ft=null,_t=null,kt=null,Vt=null,me=null,vn=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,u=!1,A=null,S=null,w=null,E=null,R=null,U=null,W=null,v=!1,T=null,J=null,Z=null,I=null,B=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,q=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),tt=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),tt=q>=2);let nt=null,K={};const Mt=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),z=new de().fromArray(Mt),j=new de().fromArray(it);function at(P,G,$,ft){const _t=new Uint8Array(4),kt=n.createTexture();n.bindTexture(P,kt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<$;Vt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(G,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(G+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return kt}const ht={};ht[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),ht[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ht[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ht[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),L(n.DEPTH_TEST),l.setFunc(yr),Zt(!1),ne(ta),L(n.CULL_FACE),Ct(En);function L(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function At(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function Et(P,G){return p[P]!==G?(n.bindFramebuffer(P,G),p[P]=G,i&&(P===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=G),P===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=G)),!0):!1}function st(P,G){let $=_,ft=!1;if(P)if($=g.get(G),$===void 0&&($=[],g.set(G,$)),P.isWebGLMultipleRenderTargets){const _t=P.texture;if($.length!==_t.length||$[0]!==n.COLOR_ATTACHMENT0){for(let kt=0,Vt=_t.length;kt<Vt;kt++)$[kt]=n.COLOR_ATTACHMENT0+kt;$.length=_t.length,ft=!0}}else $[0]!==n.COLOR_ATTACHMENT0&&($[0]=n.COLOR_ATTACHMENT0,ft=!0);else $[0]!==n.BACK&&($[0]=n.BACK,ft=!0);ft&&(e.isWebGL2?n.drawBuffers($):t.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function St(P){return m!==P?(n.useProgram(P),m=P,!0):!1}const zt={[fi]:n.FUNC_ADD,[Gc]:n.FUNC_SUBTRACT,[Hc]:n.FUNC_REVERSE_SUBTRACT};if(i)zt[sa]=n.MIN,zt[ra]=n.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(zt[sa]=P.MIN_EXT,zt[ra]=P.MAX_EXT)}const vt={[kc]:n.ZERO,[Vc]:n.ONE,[Wc]:n.SRC_COLOR,[Bo]:n.SRC_ALPHA,[Kc]:n.SRC_ALPHA_SATURATE,[jc]:n.DST_COLOR,[Yc]:n.DST_ALPHA,[Xc]:n.ONE_MINUS_SRC_COLOR,[zo]:n.ONE_MINUS_SRC_ALPHA,[Zc]:n.ONE_MINUS_DST_COLOR,[qc]:n.ONE_MINUS_DST_ALPHA};function Ct(P,G,$,ft,_t,kt,Vt,me){if(P===En){u===!0&&(At(n.BLEND),u=!1);return}if(u===!1&&(L(n.BLEND),u=!0),P!==zc){if(P!==A||me!==v){if((S!==fi||R!==fi)&&(n.blendEquation(n.FUNC_ADD),S=fi,R=fi),me)switch(P){case _i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ea:n.blendFunc(n.ONE,n.ONE);break;case na:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ia:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case _i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ea:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case na:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ia:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,E=null,U=null,W=null,A=P,v=me}return}_t=_t||G,kt=kt||$,Vt=Vt||ft,(G!==S||_t!==R)&&(n.blendEquationSeparate(zt[G],zt[_t]),S=G,R=_t),($!==w||ft!==E||kt!==U||Vt!==W)&&(n.blendFuncSeparate(vt[$],vt[ft],vt[kt],vt[Vt]),w=$,E=ft,U=kt,W=Vt),A=P,v=!1}function Jt(P,G){P.side===un?At(n.CULL_FACE):L(n.CULL_FACE);let $=P.side===Ce;G&&($=!$),Zt($),P.blending===_i&&P.transparent===!1?Ct(En):Ct(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ft=P.stencilWrite;c.setTest(ft),ft&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Bt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?L(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(P){T!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),T=P)}function ne(P){P!==Oc?(L(n.CULL_FACE),P!==J&&(P===ta?n.cullFace(n.BACK):P===Fc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),J=P}function $t(P){P!==Z&&(tt&&n.lineWidth(P),Z=P)}function Bt(P,G,$){P?(L(n.POLYGON_OFFSET_FILL),(I!==G||B!==$)&&(n.polygonOffset(G,$),I=G,B=$)):At(n.POLYGON_OFFSET_FILL)}function Xt(P){P?L(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function pe(P){P===void 0&&(P=n.TEXTURE0+k-1),nt!==P&&(n.activeTexture(P),nt=P)}function y(P,G,$){$===void 0&&(nt===null?$=n.TEXTURE0+k-1:$=nt);let ft=K[$];ft===void 0&&(ft={type:void 0,texture:void 0},K[$]=ft),(ft.type!==P||ft.texture!==G)&&(nt!==$&&(n.activeTexture($),nt=$),n.bindTexture(P,G||ht[P]),ft.type=P,ft.texture=G)}function x(){const P=K[nt];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function F(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(P){z.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),z.copy(P))}function mt(P){j.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),j.copy(P))}function Tt(P,G){let $=d.get(G);$===void 0&&($=new WeakMap,d.set(G,$));let ft=$.get(P);ft===void 0&&(ft=n.getUniformBlockIndex(G,P.name),$.set(P,ft))}function Lt(P,G){const ft=d.get(G).get(P);h.get(G)!==ft&&(n.uniformBlockBinding(G,ft,P.__bindingPointIndex),h.set(G,ft))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},nt=null,K={},p={},g=new WeakMap,_=[],m=null,u=!1,A=null,S=null,w=null,E=null,R=null,U=null,W=null,v=!1,T=null,J=null,Z=null,I=null,B=null,z.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:L,disable:At,bindFramebuffer:Et,drawBuffers:st,useProgram:St,setBlending:Ct,setMaterial:Jt,setFlipSided:Zt,setCullFace:ne,setLineWidth:$t,setPolygonOffset:Bt,setScissorTest:Xt,activeTexture:pe,bindTexture:y,unbindTexture:x,compressedTexImage2D:F,compressedTexImage3D:Q,texImage2D:pt,texImage3D:gt,updateUBOMapping:Tt,uniformBlockBinding:Lt,texStorage2D:O,texStorage3D:lt,texSubImage2D:et,texSubImage3D:ct,compressedTexSubImage2D:C,compressedTexSubImage3D:X,scissor:dt,viewport:mt,reset:te}}function Gp(n,t,e,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,h=s.maxTextureSize,d=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(y,x){return u?new OffscreenCanvas(y,x):Wi("canvas")}function S(y,x,F,Q){let et=1;if((y.width>Q||y.height>Q)&&(et=Q/Math.max(y.width,y.height)),et<1||x===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ct=x?Xo:Math.floor,C=ct(et*y.width),X=ct(et*y.height);_===void 0&&(_=A(C,X));const O=F?A(C,X):_;return O.width=C,O.height=X,O.getContext("2d").drawImage(y,0,0,C,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+C+"x"+X+")."),O}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function w(y){return Rr(y.width)&&Rr(y.height)}function E(y){return a?!1:y.wrapS!==je||y.wrapT!==je||y.minFilter!==Ae&&y.minFilter!==ze}function R(y,x){return y.generateMipmaps&&x&&y.minFilter!==Ae&&y.minFilter!==ze}function U(y){n.generateMipmap(y)}function W(y,x,F,Q,et=!1){if(a===!1)return x;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ct=x;return x===n.RED&&(F===n.FLOAT&&(ct=n.R32F),F===n.HALF_FLOAT&&(ct=n.R16F),F===n.UNSIGNED_BYTE&&(ct=n.R8)),x===n.RG&&(F===n.FLOAT&&(ct=n.RG32F),F===n.HALF_FLOAT&&(ct=n.RG16F),F===n.UNSIGNED_BYTE&&(ct=n.RG8)),x===n.RGBA&&(F===n.FLOAT&&(ct=n.RGBA32F),F===n.HALF_FLOAT&&(ct=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ct=Q===wt&&et===!1?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(ct=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ct=n.RGB5_A1)),(ct===n.R16F||ct===n.R32F||ct===n.RG16F||ct===n.RG32F||ct===n.RGBA16F||ct===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function v(y,x,F){return R(y,F)===!0||y.isFramebufferTexture&&y.minFilter!==Ae&&y.minFilter!==ze?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function T(y){return y===Ae||y===aa||y===Hs?n.NEAREST:n.LINEAR}function J(y){const x=y.target;x.removeEventListener("dispose",J),I(x),x.isVideoTexture&&g.delete(x)}function Z(y){const x=y.target;x.removeEventListener("dispose",Z),k(x)}function I(y){const x=i.get(y);if(x.__webglInit===void 0)return;const F=y.source,Q=m.get(F);if(Q){const et=Q[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&B(y),Object.keys(Q).length===0&&m.delete(F)}i.remove(y)}function B(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const F=y.source,Q=m.get(F);delete Q[x.__cacheKey],o.memory.textures--}function k(y){const x=y.texture,F=i.get(y),Q=i.get(x);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)n.deleteFramebuffer(F.__webglFramebuffer[et]),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[et]);else{if(n.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let et=0;et<F.__webglColorRenderbuffer.length;et++)F.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[et]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let et=0,ct=x.length;et<ct;et++){const C=i.get(x[et]);C.__webglTexture&&(n.deleteTexture(C.__webglTexture),o.memory.textures--),i.remove(x[et])}i.remove(x),i.remove(y)}let tt=0;function q(){tt=0}function Y(){const y=tt;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),tt+=1,y}function nt(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function K(y,x){const F=i.get(y);if(y.isVideoTexture&&Xt(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const Q=y.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{At(F,y,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function Mt(y,x){const F=i.get(y);if(y.version>0&&F.__version!==y.version){At(F,y,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function it(y,x){const F=i.get(y);if(y.version>0&&F.__version!==y.version){At(F,y,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function z(y,x){const F=i.get(y);if(y.version>0&&F.__version!==y.version){Et(F,y,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const j={[Tr]:n.REPEAT,[je]:n.CLAMP_TO_EDGE,[br]:n.MIRRORED_REPEAT},at={[Ae]:n.NEAREST,[aa]:n.NEAREST_MIPMAP_NEAREST,[Hs]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[ul]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR};function ht(y,x,F){if(F?(n.texParameteri(y,n.TEXTURE_WRAP_S,j[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,j[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,j[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,at[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,at[x.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==je||x.wrapT!==je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,T(x.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==Ae&&x.minFilter!==ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ae||x.minFilter!==Hs&&x.minFilter!==Hi||x.type===Nn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===ki&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(y,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function L(y,x){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",J));const Q=x.source;let et=m.get(Q);et===void 0&&(et={},m.set(Q,et));const ct=nt(x);if(ct!==y.__cacheKey){et[ct]===void 0&&(et[ct]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),et[ct].usedTimes++;const C=et[y.__cacheKey];C!==void 0&&(et[y.__cacheKey].usedTimes--,C.usedTimes===0&&B(x)),y.__cacheKey=ct,y.__webglTexture=et[ct].texture}return F}function At(y,x,F){let Q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=n.TEXTURE_3D);const et=L(y,x),ct=x.source;e.bindTexture(Q,y.__webglTexture,n.TEXTURE0+F);const C=i.get(ct);if(ct.version!==C.__version||et===!0){e.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const X=E(x)&&w(x.image)===!1;let O=S(x.image,X,!1,h);O=pe(x,O);const lt=w(O)||a,pt=r.convert(x.format,x.colorSpace);let gt=r.convert(x.type),dt=W(x.internalFormat,pt,gt,x.colorSpace);ht(Q,x,lt);let mt;const Tt=x.mipmaps,Lt=a&&x.isVideoTexture!==!0,te=C.__version===void 0||et===!0,P=v(x,O,lt);if(x.isDepthTexture)dt=n.DEPTH_COMPONENT,a?x.type===Nn?dt=n.DEPTH_COMPONENT32F:x.type===In?dt=n.DEPTH_COMPONENT24:x.type===vi?dt=n.DEPTH24_STENCIL8:dt=n.DEPTH_COMPONENT16:x.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===On&&dt===n.DEPTH_COMPONENT&&x.type!==ko&&x.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=In,gt=r.convert(x.type)),x.format===yi&&dt===n.DEPTH_COMPONENT&&(dt=n.DEPTH_STENCIL,x.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=vi,gt=r.convert(x.type))),te&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,dt,O.width,O.height):e.texImage2D(n.TEXTURE_2D,0,dt,O.width,O.height,0,pt,gt,null));else if(x.isDataTexture)if(Tt.length>0&&lt){Lt&&te&&e.texStorage2D(n.TEXTURE_2D,P,dt,Tt[0].width,Tt[0].height);for(let G=0,$=Tt.length;G<$;G++)mt=Tt[G],Lt?e.texSubImage2D(n.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,gt,mt.data):e.texImage2D(n.TEXTURE_2D,G,dt,mt.width,mt.height,0,pt,gt,mt.data);x.generateMipmaps=!1}else Lt?(te&&e.texStorage2D(n.TEXTURE_2D,P,dt,O.width,O.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,O.width,O.height,pt,gt,O.data)):e.texImage2D(n.TEXTURE_2D,0,dt,O.width,O.height,0,pt,gt,O.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Lt&&te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,P,dt,Tt[0].width,Tt[0].height,O.depth);for(let G=0,$=Tt.length;G<$;G++)mt=Tt[G],x.format!==Ze?pt!==null?Lt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,O.depth,pt,mt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,dt,mt.width,mt.height,O.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,mt.width,mt.height,O.depth,pt,gt,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,G,dt,mt.width,mt.height,O.depth,0,pt,gt,mt.data)}else{Lt&&te&&e.texStorage2D(n.TEXTURE_2D,P,dt,Tt[0].width,Tt[0].height);for(let G=0,$=Tt.length;G<$;G++)mt=Tt[G],x.format!==Ze?pt!==null?Lt?e.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,G,dt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?e.texSubImage2D(n.TEXTURE_2D,G,0,0,mt.width,mt.height,pt,gt,mt.data):e.texImage2D(n.TEXTURE_2D,G,dt,mt.width,mt.height,0,pt,gt,mt.data)}else if(x.isDataArrayTexture)Lt?(te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,P,dt,O.width,O.height,O.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,pt,gt,O.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,dt,O.width,O.height,O.depth,0,pt,gt,O.data);else if(x.isData3DTexture)Lt?(te&&e.texStorage3D(n.TEXTURE_3D,P,dt,O.width,O.height,O.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,pt,gt,O.data)):e.texImage3D(n.TEXTURE_3D,0,dt,O.width,O.height,O.depth,0,pt,gt,O.data);else if(x.isFramebufferTexture){if(te)if(Lt)e.texStorage2D(n.TEXTURE_2D,P,dt,O.width,O.height);else{let G=O.width,$=O.height;for(let ft=0;ft<P;ft++)e.texImage2D(n.TEXTURE_2D,ft,dt,G,$,0,pt,gt,null),G>>=1,$>>=1}}else if(Tt.length>0&&lt){Lt&&te&&e.texStorage2D(n.TEXTURE_2D,P,dt,Tt[0].width,Tt[0].height);for(let G=0,$=Tt.length;G<$;G++)mt=Tt[G],Lt?e.texSubImage2D(n.TEXTURE_2D,G,0,0,pt,gt,mt):e.texImage2D(n.TEXTURE_2D,G,dt,pt,gt,mt);x.generateMipmaps=!1}else Lt?(te&&e.texStorage2D(n.TEXTURE_2D,P,dt,O.width,O.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,gt,O)):e.texImage2D(n.TEXTURE_2D,0,dt,pt,gt,O);R(x,lt)&&U(Q),C.__version=ct.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Et(y,x,F){if(x.image.length!==6)return;const Q=L(y,x),et=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+F);const ct=i.get(et);if(et.version!==ct.__version||Q===!0){e.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const C=x.isCompressedTexture||x.image[0].isCompressedTexture,X=x.image[0]&&x.image[0].isDataTexture,O=[];for(let G=0;G<6;G++)!C&&!X?O[G]=S(x.image[G],!1,!0,c):O[G]=X?x.image[G].image:x.image[G],O[G]=pe(x,O[G]);const lt=O[0],pt=w(lt)||a,gt=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),mt=W(x.internalFormat,gt,dt,x.colorSpace),Tt=a&&x.isVideoTexture!==!0,Lt=ct.__version===void 0||Q===!0;let te=v(x,lt,pt);ht(n.TEXTURE_CUBE_MAP,x,pt);let P;if(C){Tt&&Lt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,te,mt,lt.width,lt.height);for(let G=0;G<6;G++){P=O[G].mipmaps;for(let $=0;$<P.length;$++){const ft=P[$];x.format!==Ze?gt!==null?Tt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$,0,0,ft.width,ft.height,gt,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$,mt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$,0,0,ft.width,ft.height,gt,dt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$,mt,ft.width,ft.height,0,gt,dt,ft.data)}}}else{P=x.mipmaps,Tt&&Lt&&(P.length>0&&te++,e.texStorage2D(n.TEXTURE_CUBE_MAP,te,mt,O[0].width,O[0].height));for(let G=0;G<6;G++)if(X){Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,O[G].width,O[G].height,gt,dt,O[G].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,mt,O[G].width,O[G].height,0,gt,dt,O[G].data);for(let $=0;$<P.length;$++){const _t=P[$].image[G].image;Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$+1,0,0,_t.width,_t.height,gt,dt,_t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$+1,mt,_t.width,_t.height,0,gt,dt,_t.data)}}else{Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,gt,dt,O[G]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,mt,gt,dt,O[G]);for(let $=0;$<P.length;$++){const ft=P[$];Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$+1,0,0,gt,dt,ft.image[G]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$+1,mt,gt,dt,ft.image[G])}}}R(x,pt)&&U(n.TEXTURE_CUBE_MAP),ct.__version=et.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function st(y,x,F,Q,et){const ct=r.convert(F.format,F.colorSpace),C=r.convert(F.type),X=W(F.internalFormat,ct,C,F.colorSpace);i.get(x).__hasExternalTextures||(et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,0,X,x.width,x.height,x.depth,0,ct,C,null):e.texImage2D(et,0,X,x.width,x.height,0,ct,C,null)),e.bindFramebuffer(n.FRAMEBUFFER,y),Bt(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,et,i.get(F).__webglTexture,0,$t(x)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,et,i.get(F).__webglTexture,0),e.bindFramebuffer(n.FRAMEBUFFER,null)}function St(y,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer&&!x.stencilBuffer){let Q=n.DEPTH_COMPONENT16;if(F||Bt(x)){const et=x.depthTexture;et&&et.isDepthTexture&&(et.type===Nn?Q=n.DEPTH_COMPONENT32F:et.type===In&&(Q=n.DEPTH_COMPONENT24));const ct=$t(x);Bt(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Q,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Q,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(x.depthBuffer&&x.stencilBuffer){const Q=$t(x);F&&Bt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,x.width,x.height):Bt(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let et=0;et<Q.length;et++){const ct=Q[et],C=r.convert(ct.format,ct.colorSpace),X=r.convert(ct.type),O=W(ct.internalFormat,C,X,ct.colorSpace),lt=$t(x);F&&Bt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,O,x.width,x.height):Bt(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,O,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,O,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const Q=i.get(x.depthTexture).__webglTexture,et=$t(x);if(x.depthTexture.format===On)Bt(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(x.depthTexture.format===yi)Bt(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function vt(y){const x=i.get(y),F=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");zt(x.__webglFramebuffer,y)}else if(F){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=n.createRenderbuffer(),St(x.__webglDepthbuffer[Q],y,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),St(x.__webglDepthbuffer,y,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(y,x,F){const Q=i.get(y);x!==void 0&&st(Q.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),F!==void 0&&vt(y)}function Jt(y){const x=y.texture,F=i.get(y),Q=i.get(x);y.addEventListener("dispose",Z),y.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=x.version,o.memory.textures++);const et=y.isWebGLCubeRenderTarget===!0,ct=y.isWebGLMultipleRenderTargets===!0,C=w(y)||a;if(et){F.__webglFramebuffer=[];for(let X=0;X<6;X++)F.__webglFramebuffer[X]=n.createFramebuffer()}else{if(F.__webglFramebuffer=n.createFramebuffer(),ct)if(s.drawBuffers){const X=y.texture;for(let O=0,lt=X.length;O<lt;O++){const pt=i.get(X[O]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&Bt(y)===!1){const X=ct?x:[x];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let O=0;O<X.length;O++){const lt=X[O];F.__webglColorRenderbuffer[O]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[O]);const pt=r.convert(lt.format,lt.colorSpace),gt=r.convert(lt.type),dt=W(lt.internalFormat,pt,gt,lt.colorSpace,y.isXRRenderTarget===!0),mt=$t(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,dt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,F.__webglColorRenderbuffer[O])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),St(F.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ht(n.TEXTURE_CUBE_MAP,x,C);for(let X=0;X<6;X++)st(F.__webglFramebuffer[X],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X);R(x,C)&&U(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){const X=y.texture;for(let O=0,lt=X.length;O<lt;O++){const pt=X[O],gt=i.get(pt);e.bindTexture(n.TEXTURE_2D,gt.__webglTexture),ht(n.TEXTURE_2D,pt,C),st(F.__webglFramebuffer,y,pt,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D),R(pt,C)&&U(n.TEXTURE_2D)}e.unbindTexture()}else{let X=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?X=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(X,Q.__webglTexture),ht(X,x,C),st(F.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,X),R(x,C)&&U(X),e.unbindTexture()}y.depthBuffer&&vt(y)}function Zt(y){const x=w(y)||a,F=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0,et=F.length;Q<et;Q++){const ct=F[Q];if(R(ct,x)){const C=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,X=i.get(ct).__webglTexture;e.bindTexture(C,X),U(C),e.unbindTexture()}}}function ne(y){if(a&&y.samples>0&&Bt(y)===!1){const x=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],F=y.width,Q=y.height;let et=n.COLOR_BUFFER_BIT;const ct=[],C=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=i.get(y),O=y.isWebGLMultipleRenderTargets===!0;if(O)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,X.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){ct.push(n.COLOR_ATTACHMENT0+lt),y.depthBuffer&&ct.push(C);const pt=X.__ignoreDepthValues!==void 0?X.__ignoreDepthValues:!1;if(pt===!1&&(y.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),O&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,X.__webglColorRenderbuffer[lt]),pt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[C]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])),O){const gt=i.get(x[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,F,Q,0,0,F,Q,et,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ct)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),O)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,X.__webglColorRenderbuffer[lt]);const pt=i.get(x[lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,X.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}}function $t(y){return Math.min(d,y.samples)}function Bt(y){const x=i.get(y);return a&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Xt(y){const x=o.render.frame;g.get(y)!==x&&(g.set(y,x),y.update())}function pe(y,x){const F=y.colorSpace,Q=y.format,et=y.type;return y.isCompressedTexture===!0||y.format===Cr||F!==tn&&F!==Bn&&(F===wt?a===!1?t.has("EXT_sRGB")===!0&&Q===Ze?(y.format=Cr,y.minFilter=ze,y.generateMipmaps=!1):x=jo.sRGBToLinear(x):(Q!==Ze||et!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=K,this.setTexture2DArray=Mt,this.setTexture3D=it,this.setTextureCube=z,this.rebindTextures=Ct,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Bt}function Hp(n,t,e){const i=e.isWebGL2;function s(r,o=Bn){let a;if(r===zn)return n.UNSIGNED_BYTE;if(r===ml)return n.UNSIGNED_SHORT_4_4_4_4;if(r===gl)return n.UNSIGNED_SHORT_5_5_5_1;if(r===dl)return n.BYTE;if(r===fl)return n.SHORT;if(r===ko)return n.UNSIGNED_SHORT;if(r===pl)return n.INT;if(r===In)return n.UNSIGNED_INT;if(r===Nn)return n.FLOAT;if(r===ki)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===_l)return n.ALPHA;if(r===Ze)return n.RGBA;if(r===vl)return n.LUMINANCE;if(r===xl)return n.LUMINANCE_ALPHA;if(r===On)return n.DEPTH_COMPONENT;if(r===yi)return n.DEPTH_STENCIL;if(r===Cr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ml)return n.RED;if(r===Sl)return n.RED_INTEGER;if(r===yl)return n.RG;if(r===El)return n.RG_INTEGER;if(r===Al)return n.RGBA_INTEGER;if(r===ks||r===Vs||r===Ws||r===Xs)if(o===wt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ws)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oa||r===ca||r===la||r===ha)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===oa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ca)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===la)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ha)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ua||r===da)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ua)return o===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===da)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fa||r===pa||r===ma||r===ga||r===_a||r===va||r===xa||r===Ma||r===Sa||r===ya||r===Ea||r===Aa||r===Ta||r===ba)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===fa)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pa)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ma)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ga)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_a)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===va)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xa)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ma)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sa)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ya)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ea)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Aa)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ta)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ba)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ys)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ys)return o===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===bl||r===wa||r===Ca||r===Ra)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ys)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ca)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ra)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class kp extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vs extends re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vp={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Wp extends be{constructor(t,e,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:On,h!==On&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===On&&(i=In),i===void 0&&h===yi&&(i=vi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ae,this.minFilter=l!==void 0?l:Ae,this.flipY=!1,this.generateMipmaps=!1}}class Xp extends kn{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,u=null;const A=[],S=[],w=new Set,E=new Map,R=new He;R.layers.enable(1),R.viewport=new de;const U=new He;U.layers.enable(2),U.viewport=new de;const W=[R,U],v=new kp;v.layers.enable(1),v.layers.enable(2);let T=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=A[z];return j===void 0&&(j=new pr,A[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=A[z];return j===void 0&&(j=new pr,A[z]=j),j.getGripSpace()},this.getHand=function(z){let j=A[z];return j===void 0&&(j=new pr,A[z]=j),j.getHandSpace()};function Z(z){const j=S.indexOf(z.inputSource);if(j===-1)return;const at=A[j];at!==void 0&&(at.update(z.inputSource,z.frame,c||o),at.dispatchEvent({type:z.type,data:z.inputSource}))}function I(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",B);for(let z=0;z<A.length;z++){const j=S[z];j!==null&&(S[z]=null,A[z].disconnect(j))}T=null,J=null,t.setRenderTarget(m),p=null,f=null,d=null,s=null,u=null,it.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",I),s.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),u=new Gn(p.framebufferWidth,p.framebufferHeight,{format:Ze,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,at=null,ht=null;_.depth&&(ht=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?yi:On,at=_.stencil?vi:In);const L={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(L),s.updateRenderState({layers:[f]}),u=new Gn(f.textureWidth,f.textureHeight,{format:Ze,type:zn,depthTexture:new Wp(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const At=t.properties.get(u);At.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(z){for(let j=0;j<z.removed.length;j++){const at=z.removed[j],ht=S.indexOf(at);ht>=0&&(S[ht]=null,A[ht].disconnect(at))}for(let j=0;j<z.added.length;j++){const at=z.added[j];let ht=S.indexOf(at);if(ht===-1){for(let At=0;At<A.length;At++)if(At>=S.length){S.push(at),ht=At;break}else if(S[At]===null){S[At]=at,ht=At;break}if(ht===-1)break}const L=A[ht];L&&L.connect(at)}}const k=new b,tt=new b;function q(z,j,at){k.setFromMatrixPosition(j.matrixWorld),tt.setFromMatrixPosition(at.matrixWorld);const ht=k.distanceTo(tt),L=j.projectionMatrix.elements,At=at.projectionMatrix.elements,Et=L[14]/(L[10]-1),st=L[14]/(L[10]+1),St=(L[9]+1)/L[5],zt=(L[9]-1)/L[5],vt=(L[8]-1)/L[0],Ct=(At[8]+1)/At[0],Jt=Et*vt,Zt=Et*Ct,ne=ht/(-vt+Ct),$t=ne*-vt;j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX($t),z.translateZ(ne),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Bt=Et+ne,Xt=st+ne,pe=Jt-$t,y=Zt+(ht-$t),x=St*st/Xt*Bt,F=zt*st/Xt*Bt;z.projectionMatrix.makePerspective(pe,y,x,F,Bt,Xt),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function Y(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;v.near=U.near=R.near=z.near,v.far=U.far=R.far=z.far,(T!==v.near||J!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,J=v.far);const j=z.parent,at=v.cameras;Y(v,j);for(let ht=0;ht<at.length;ht++)Y(at[ht],j);at.length===2?q(v,R,U):v.projectionMatrix.copy(R.projectionMatrix),nt(z,v,j)};function nt(z,j,at){at===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(at.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const ht=z.children;for(let L=0,At=ht.length;L<At;L++)ht[L].updateMatrixWorld(!0);z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Vi*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.getPlanes=function(){return w};let K=null;function Mt(z,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const at=h.views;p!==null&&(t.setRenderTargetFramebuffer(u,p.framebuffer),t.setRenderTarget(u));let ht=!1;at.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let L=0;L<at.length;L++){const At=at[L];let Et=null;if(p!==null)Et=p.getViewport(At);else{const St=d.getViewSubImage(f,At);Et=St.viewport,L===0&&(t.setRenderTargetTextures(u,St.colorTexture,f.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(u))}let st=W[L];st===void 0&&(st=new He,st.layers.enable(L),st.viewport=new de,W[L]=st),st.matrix.fromArray(At.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(At.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Et.x,Et.y,Et.width,Et.height),L===0&&(v.matrix.copy(st.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push(st)}}for(let at=0;at<A.length;at++){const ht=S[at],L=A[at];ht!==null&&L!==void 0&&L.update(ht,j,c||o)}if(K&&K(z,j),j.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let at=null;for(const ht of w)j.detectedPlanes.has(ht)||(at===null&&(at=[]),at.push(ht));if(at!==null)for(const ht of at)w.delete(ht),E.delete(ht),i.dispatchEvent({type:"planeremoved",data:ht});for(const ht of j.detectedPlanes)if(!w.has(ht))w.add(ht),E.set(ht,j.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ht});else{const L=E.get(ht);ht.lastChangedTime>L&&(E.set(ht,ht.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ht}))}}g=null}const it=new sc;it.setAnimationLoop(Mt),this.setAnimationLoop=function(z){K=z},this.dispose=function(){}}}function Yp(n,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,tc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,A,S,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,w)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,A,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ce&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ce&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const A=t.get(u).envMap;if(A&&(m.envMap.value=A,m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const S=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*S,e(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,A,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*A,m.scale.value=S*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),t.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,A){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ce&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const A=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qp(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,S){const w=S.program;i.uniformBlockBinding(A,w)}function c(A,S){let w=s[A.id];w===void 0&&(g(A),w=h(A),s[A.id]=w,A.addEventListener("dispose",m));const E=S.program;i.updateUBOMapping(A,E);const R=t.render.frame;r[A.id]!==R&&(f(A),r[A.id]=R)}function h(A){const S=d();A.__bindingPointIndex=S;const w=n.createBuffer(),E=A.__size,R=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const S=s[A.id],w=A.uniforms,E=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,U=w.length;R<U;R++){const W=w[R];if(p(W,R,E)===!0){const v=W.__offset,T=Array.isArray(W.value)?W.value:[W.value];let J=0;for(let Z=0;Z<T.length;Z++){const I=T[Z],B=_(I);typeof I=="number"?(W.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,v+J,W.__data)):I.isMatrix3?(W.__data[0]=I.elements[0],W.__data[1]=I.elements[1],W.__data[2]=I.elements[2],W.__data[3]=I.elements[0],W.__data[4]=I.elements[3],W.__data[5]=I.elements[4],W.__data[6]=I.elements[5],W.__data[7]=I.elements[0],W.__data[8]=I.elements[6],W.__data[9]=I.elements[7],W.__data[10]=I.elements[8],W.__data[11]=I.elements[0]):(I.toArray(W.__data,J),J+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,v,W.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,S,w){const E=A.value;if(w[S]===void 0){if(typeof E=="number")w[S]=E;else{const R=Array.isArray(E)?E:[E],U=[];for(let W=0;W<R.length;W++)U.push(R[W].clone());w[S]=U}return!0}else if(typeof E=="number"){if(w[S]!==E)return w[S]=E,!0}else{const R=Array.isArray(w[S])?w[S]:[w[S]],U=Array.isArray(E)?E:[E];for(let W=0;W<R.length;W++){const v=R[W];if(v.equals(U[W])===!1)return v.copy(U[W]),!0}}return!1}function g(A){const S=A.uniforms;let w=0;const E=16;let R=0;for(let U=0,W=S.length;U<W;U++){const v=S[U],T={boundary:0,storage:0},J=Array.isArray(v.value)?v.value:[v.value];for(let Z=0,I=J.length;Z<I;Z++){const B=J[Z],k=_(B);T.boundary+=k.boundary,T.storage+=k.storage}if(v.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=w,U>0){R=w%E;const Z=E-R;R!==0&&Z-T.boundary<0&&(w+=E-R,v.__offset=w)}w+=T.storage}return R=w%E,R>0&&(w+=E-R),A.__size=w,A.__cache={},this}function _(A){const S={boundary:0,storage:0};return typeof A=="number"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function m(A){const S=A.target;S.removeEventListener("dispose",m);const w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}function jp(){const n=Wi("canvas");return n.style.display="block",n}class lc{constructor(t={}){const{canvas:e=jp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let p=null,g=null;const _=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=wt,this.useLegacyLights=!0,this.toneMapping=pn,this.toneMappingExposure=1;const u=this;let A=!1,S=0,w=0,E=null,R=-1,U=null;const W=new de,v=new de;let T=null,J=e.width,Z=e.height,I=1,B=null,k=null;const tt=new de(0,0,J,Z),q=new de(0,0,J,Z);let Y=!1;const nt=new ic;let K=!1,Mt=!1,it=null;const z=new jt,j=new b,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return E===null?I:1}let L=i;function At(M,N){for(let H=0;H<M.length;H++){const D=M[H],V=e.getContext(D,N);if(V!==null)return V}return null}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Br}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),L===null){const N=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&N.shift(),L=At(N,M),L===null)throw At(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Et,st,St,zt,vt,Ct,Jt,Zt,ne,$t,Bt,Xt,pe,y,x,F,Q,et,ct,C,X,O,lt,pt;function gt(){Et=new rf(L),st=new Jd(L,Et,t),Et.init(st),O=new Hp(L,Et,st),St=new zp(L,Et,st),zt=new cf(L),vt=new Tp,Ct=new Gp(L,Et,St,vt,st,O,zt),Jt=new $d(u),Zt=new sf(u),ne=new vh(L,st),lt=new Zd(L,Et,ne,st),$t=new af(L,ne,zt,lt),Bt=new df(L,$t,ne,zt),ct=new uf(L,st,Ct),F=new Qd(vt),Xt=new Ap(u,Jt,Zt,Et,st,lt,F),pe=new Yp(u,vt),y=new wp,x=new Up(Et,st),et=new jd(u,Jt,Zt,St,Bt,f,l),Q=new Bp(u,Bt,st),pt=new qp(L,zt,st,St),C=new Kd(L,Et,zt,st),X=new of(L,Et,zt,st),zt.programs=Xt.programs,u.capabilities=st,u.extensions=Et,u.properties=vt,u.renderLists=y,u.shadowMap=Q,u.state=St,u.info=zt}gt();const dt=new Xp(u,L);this.xr=dt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Et.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Et.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(M){M!==void 0&&(I=M,this.setSize(J,Z,!1))},this.getSize=function(M){return M.set(J,Z)},this.setSize=function(M,N,H=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,Z=N,e.width=Math.floor(M*I),e.height=Math.floor(N*I),H===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(J*I,Z*I).floor()},this.setDrawingBufferSize=function(M,N,H){J=M,Z=N,I=H,e.width=Math.floor(M*H),e.height=Math.floor(N*H),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(W)},this.getViewport=function(M){return M.copy(tt)},this.setViewport=function(M,N,H,D){M.isVector4?tt.set(M.x,M.y,M.z,M.w):tt.set(M,N,H,D),St.viewport(W.copy(tt).multiplyScalar(I).floor())},this.getScissor=function(M){return M.copy(q)},this.setScissor=function(M,N,H,D){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,N,H,D),St.scissor(v.copy(q).multiplyScalar(I).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(M){St.setScissorTest(Y=M)},this.setOpaqueSort=function(M){B=M},this.setTransparentSort=function(M){k=M},this.getClearColor=function(M){return M.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(M=!0,N=!0,H=!0){let D=0;M&&(D|=L.COLOR_BUFFER_BIT),N&&(D|=L.DEPTH_BUFFER_BIT),H&&(D|=L.STENCIL_BUFFER_BIT),L.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),y.dispose(),x.dispose(),vt.dispose(),Jt.dispose(),Zt.dispose(),Bt.dispose(),lt.dispose(),pt.dispose(),Xt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",_t),dt.removeEventListener("sessionend",kt),it&&(it.dispose(),it=null),Vt.stop()};function mt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=zt.autoReset,N=Q.enabled,H=Q.autoUpdate,D=Q.needsUpdate,V=Q.type;gt(),zt.autoReset=M,Q.enabled=N,Q.autoUpdate=H,Q.needsUpdate=D,Q.type=V}function Lt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function te(M){const N=M.target;N.removeEventListener("dispose",te),P(N)}function P(M){G(M),vt.remove(M)}function G(M){const N=vt.get(M).programs;N!==void 0&&(N.forEach(function(H){Xt.releaseProgram(H)}),M.isShaderMaterial&&Xt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,H,D,V,xt){N===null&&(N=at);const yt=V.isMesh&&V.matrixWorld.determinant()<0,bt=Ec(M,N,H,D,V);St.setMaterial(D,yt);let Rt=H.index,Dt=1;D.wireframe===!0&&(Rt=$t.getWireframeAttribute(H),Dt=2);const Ut=H.drawRange,It=H.attributes.position;let Ht=Ut.start*Dt,Me=(Ut.start+Ut.count)*Dt;xt!==null&&(Ht=Math.max(Ht,xt.start*Dt),Me=Math.min(Me,(xt.start+xt.count)*Dt)),Rt!==null?(Ht=Math.max(Ht,0),Me=Math.min(Me,Rt.count)):It!=null&&(Ht=Math.max(Ht,0),Me=Math.min(Me,It.count));const Ve=Me-Ht;if(Ve<0||Ve===1/0)return;lt.setup(V,D,bt,H,Rt);let An,ie=C;if(Rt!==null&&(An=ne.get(Rt),ie=X,ie.setIndex(An)),V.isMesh)D.wireframe===!0?(St.setLineWidth(D.wireframeLinewidth*ht()),ie.setMode(L.LINES)):ie.setMode(L.TRIANGLES);else if(V.isLine){let Ft=D.linewidth;Ft===void 0&&(Ft=1),St.setLineWidth(Ft*ht()),V.isLineSegments?ie.setMode(L.LINES):V.isLineLoop?ie.setMode(L.LINE_LOOP):ie.setMode(L.LINE_STRIP)}else V.isPoints?ie.setMode(L.POINTS):V.isSprite&&ie.setMode(L.TRIANGLES);if(V.isInstancedMesh)ie.renderInstances(Ht,Ve,V.count);else if(H.isInstancedBufferGeometry){const Ft=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Fs=Math.min(H.instanceCount,Ft);ie.renderInstances(Ht,Ve,Fs)}else ie.render(Ht,Ve)},this.compile=function(M,N){function H(D,V,xt){D.transparent===!0&&D.side===un&&D.forceSinglePass===!1?(D.side=Ce,D.needsUpdate=!0,Ji(D,V,xt),D.side=gn,D.needsUpdate=!0,Ji(D,V,xt),D.side=un):Ji(D,V,xt)}g=x.get(M),g.init(),m.push(g),M.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(g.pushLight(D),D.castShadow&&g.pushShadow(D))}),g.setupLights(u.useLegacyLights),M.traverse(function(D){const V=D.material;if(V)if(Array.isArray(V))for(let xt=0;xt<V.length;xt++){const yt=V[xt];H(yt,M,D)}else H(V,M,D)}),m.pop(),g=null};let $=null;function ft(M){$&&$(M)}function _t(){Vt.stop()}function kt(){Vt.start()}const Vt=new sc;Vt.setAnimationLoop(ft),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(M){$=M,dt.setAnimationLoop(M),M===null?Vt.stop():Vt.start()},dt.addEventListener("sessionstart",_t),dt.addEventListener("sessionend",kt),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(N),N=dt.getCamera()),M.isScene===!0&&M.onBeforeRender(u,M,N,E),g=x.get(M,m.length),g.init(),m.push(g),z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),nt.setFromProjectionMatrix(z),Mt=this.localClippingEnabled,K=F.init(this.clippingPlanes,Mt),p=y.get(M,_.length),p.init(),_.push(p),me(M,N,0,u.sortObjects),p.finish(),u.sortObjects===!0&&p.sort(B,k),K===!0&&F.beginShadows();const H=g.state.shadowsArray;if(Q.render(H,M,N),K===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(p,M),g.setupLights(u.useLegacyLights),N.isArrayCamera){const D=N.cameras;for(let V=0,xt=D.length;V<xt;V++){const yt=D[V];vn(p,M,yt,yt.viewport)}}else vn(p,M,N);E!==null&&(Ct.updateMultisampleRenderTarget(E),Ct.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(u,M,N),lt.resetDefaultState(),R=-1,U=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function me(M,N,H,D){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||nt.intersectsSprite(M)){D&&j.setFromMatrixPosition(M.matrixWorld).applyMatrix4(z);const yt=Bt.update(M),bt=M.material;bt.visible&&p.push(M,yt,bt,H,j.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||nt.intersectsObject(M))){M.isSkinnedMesh&&M.skeleton.frame!==zt.render.frame&&(M.skeleton.update(),M.skeleton.frame=zt.render.frame);const yt=Bt.update(M),bt=M.material;if(D&&(yt.boundingSphere===null&&yt.computeBoundingSphere(),j.copy(yt.boundingSphere.center).applyMatrix4(M.matrixWorld).applyMatrix4(z)),Array.isArray(bt)){const Rt=yt.groups;for(let Dt=0,Ut=Rt.length;Dt<Ut;Dt++){const It=Rt[Dt],Ht=bt[It.materialIndex];Ht&&Ht.visible&&p.push(M,yt,Ht,H,j.z,It)}}else bt.visible&&p.push(M,yt,bt,H,j.z,null)}}const xt=M.children;for(let yt=0,bt=xt.length;yt<bt;yt++)me(xt[yt],N,H,D)}function vn(M,N,H,D){const V=M.opaque,xt=M.transmissive,yt=M.transparent;g.setupLightsView(H),K===!0&&F.setGlobalState(u.clippingPlanes,H),xt.length>0&&ee(V,xt,N,H),D&&St.viewport(W.copy(D)),V.length>0&&Fe(V,N,H),xt.length>0&&Fe(xt,N,H),yt.length>0&&Fe(yt,N,H),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ee(M,N,H,D){if(it===null){const bt=st.isWebGL2;it=new Gn(1024,1024,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?ki:zn,minFilter:Hi,samples:bt&&a===!0?4:0})}const V=u.getRenderTarget();u.setRenderTarget(it),u.clear();const xt=u.toneMapping;u.toneMapping=pn,Fe(M,H,D),Ct.updateMultisampleRenderTarget(it),Ct.updateRenderTargetMipmap(it);let yt=!1;for(let bt=0,Rt=N.length;bt<Rt;bt++){const Dt=N[bt],Ut=Dt.object,It=Dt.geometry,Ht=Dt.material,Me=Dt.group;if(Ht.side===un&&Ut.layers.test(D.layers)){const Ve=Ht.side;Ht.side=Ce,Ht.needsUpdate=!0,Ke(Ut,H,D,It,Ht,Me),Ht.side=Ve,Ht.needsUpdate=!0,yt=!0}}yt===!0&&(Ct.updateMultisampleRenderTarget(it),Ct.updateRenderTargetMipmap(it)),u.setRenderTarget(V),u.toneMapping=xt}function Fe(M,N,H){const D=N.isScene===!0?N.overrideMaterial:null;for(let V=0,xt=M.length;V<xt;V++){const yt=M[V],bt=yt.object,Rt=yt.geometry,Dt=D===null?yt.material:D,Ut=yt.group;bt.layers.test(H.layers)&&Ke(bt,N,H,Rt,Dt,Ut)}}function Ke(M,N,H,D,V,xt){M.onBeforeRender(u,N,H,D,V,xt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(u,N,H,D,M,xt),V.transparent===!0&&V.side===un&&V.forceSinglePass===!1?(V.side=Ce,V.needsUpdate=!0,u.renderBufferDirect(H,N,D,V,M,xt),V.side=gn,V.needsUpdate=!0,u.renderBufferDirect(H,N,D,V,M,xt),V.side=un):u.renderBufferDirect(H,N,D,V,M,xt),M.onAfterRender(u,N,H,D,V,xt)}function Ji(M,N,H){N.isScene!==!0&&(N=at);const D=vt.get(M),V=g.state.lights,xt=g.state.shadowsArray,yt=V.state.version,bt=Xt.getParameters(M,V.state,xt,N,H),Rt=Xt.getProgramCacheKey(bt);let Dt=D.programs;D.environment=M.isMeshStandardMaterial?N.environment:null,D.fog=N.fog,D.envMap=(M.isMeshStandardMaterial?Zt:Jt).get(M.envMap||D.environment),Dt===void 0&&(M.addEventListener("dispose",te),Dt=new Map,D.programs=Dt);let Ut=Dt.get(Rt);if(Ut!==void 0){if(D.currentProgram===Ut&&D.lightsStateVersion===yt)return Jr(M,bt),Ut}else bt.uniforms=Xt.getUniforms(M),M.onBuild(H,bt,u),M.onBeforeCompile(bt,u),Ut=Xt.acquireProgram(bt,Rt),Dt.set(Rt,Ut),D.uniforms=bt.uniforms;const It=D.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(It.clippingPlanes=F.uniform),Jr(M,bt),D.needsLights=Tc(M),D.lightsStateVersion=yt,D.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.directionalShadowMap.value=V.state.directionalShadowMap,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotShadowMap.value=V.state.spotShadowMap,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMap.value=V.state.pointShadowMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix);const Ht=Ut.getUniforms(),Me=bs.seqWithValue(Ht.seq,It);return D.currentProgram=Ut,D.uniformsList=Me,Ut}function Jr(M,N){const H=vt.get(M);H.outputColorSpace=N.outputColorSpace,H.instancing=N.instancing,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Ec(M,N,H,D,V){N.isScene!==!0&&(N=at),Ct.resetTextureUnits();const xt=N.fog,yt=D.isMeshStandardMaterial?N.environment:null,bt=E===null?u.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:tn,Rt=(D.isMeshStandardMaterial?Zt:Jt).get(D.envMap||yt),Dt=D.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ut=!!D.normalMap&&!!H.attributes.tangent,It=!!H.morphAttributes.position,Ht=!!H.morphAttributes.normal,Me=!!H.morphAttributes.color,Ve=D.toneMapped?u.toneMapping:pn,An=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=An!==void 0?An.length:0,Ft=vt.get(D),Fs=g.state.lights;if(K===!0&&(Mt===!0||M!==U)){const De=M===U&&D.id===R;F.setState(D,M,De)}let le=!1;D.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Fs.state.version||Ft.outputColorSpace!==bt||V.isInstancedMesh&&Ft.instancing===!1||!V.isInstancedMesh&&Ft.instancing===!0||V.isSkinnedMesh&&Ft.skinning===!1||!V.isSkinnedMesh&&Ft.skinning===!0||Ft.envMap!==Rt||D.fog===!0&&Ft.fog!==xt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==F.numPlanes||Ft.numIntersection!==F.numIntersection)||Ft.vertexAlphas!==Dt||Ft.vertexTangents!==Ut||Ft.morphTargets!==It||Ft.morphNormals!==Ht||Ft.morphColors!==Me||Ft.toneMapping!==Ve||st.isWebGL2===!0&&Ft.morphTargetsCount!==ie)&&(le=!0):(le=!0,Ft.__version=D.version);let Tn=Ft.currentProgram;le===!0&&(Tn=Ji(D,N,V));let Qr=!1,bi=!1,Bs=!1;const Se=Tn.getUniforms(),bn=Ft.uniforms;if(St.useProgram(Tn.program)&&(Qr=!0,bi=!0,Bs=!0),D.id!==R&&(R=D.id,bi=!0),Qr||U!==M){if(Se.setValue(L,"projectionMatrix",M.projectionMatrix),st.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),U!==M&&(U=M,bi=!0,Bs=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const De=Se.map.cameraPosition;De!==void 0&&De.setValue(L,j.setFromMatrixPosition(M.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Se.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||V.isSkinnedMesh)&&Se.setValue(L,"viewMatrix",M.matrixWorldInverse)}if(V.isSkinnedMesh){Se.setOptional(L,V,"bindMatrix"),Se.setOptional(L,V,"bindMatrixInverse");const De=V.skeleton;De&&(st.floatVertexTextures?(De.boneTexture===null&&De.computeBoneTexture(),Se.setValue(L,"boneTexture",De.boneTexture,Ct),Se.setValue(L,"boneTextureSize",De.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zs=H.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0&&st.isWebGL2===!0)&&ct.update(V,H,Tn),(bi||Ft.receiveShadow!==V.receiveShadow)&&(Ft.receiveShadow=V.receiveShadow,Se.setValue(L,"receiveShadow",V.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(bn.envMap.value=Rt,bn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),bi&&(Se.setValue(L,"toneMappingExposure",u.toneMappingExposure),Ft.needsLights&&Ac(bn,Bs),xt&&D.fog===!0&&pe.refreshFogUniforms(bn,xt),pe.refreshMaterialUniforms(bn,D,I,Z,it),bs.upload(L,Ft.uniformsList,bn,Ct)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(bs.upload(L,Ft.uniformsList,bn,Ct),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Se.setValue(L,"center",V.center),Se.setValue(L,"modelViewMatrix",V.modelViewMatrix),Se.setValue(L,"normalMatrix",V.normalMatrix),Se.setValue(L,"modelMatrix",V.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const De=D.uniformsGroups;for(let Gs=0,bc=De.length;Gs<bc;Gs++)if(st.isWebGL2){const $r=De[Gs];pt.update($r,Tn),pt.bind($r,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function Ac(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Tc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,N,H){vt.get(M.texture).__webglTexture=N,vt.get(M.depthTexture).__webglTexture=H;const D=vt.get(M);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=H===void 0,D.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,N){const H=vt.get(M);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,H=0){E=M,S=N,w=H;let D=!0,V=null,xt=!1,yt=!1;if(M){const Rt=vt.get(M);Rt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(L.FRAMEBUFFER,null),D=!1):Rt.__webglFramebuffer===void 0?Ct.setupRenderTarget(M):Rt.__hasExternalTextures&&Ct.rebindTextures(M,vt.get(M.texture).__webglTexture,vt.get(M.depthTexture).__webglTexture);const Dt=M.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(yt=!0);const Ut=vt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(V=Ut[N],xt=!0):st.isWebGL2&&M.samples>0&&Ct.useMultisampledRTT(M)===!1?V=vt.get(M).__webglMultisampledFramebuffer:V=Ut,W.copy(M.viewport),v.copy(M.scissor),T=M.scissorTest}else W.copy(tt).multiplyScalar(I).floor(),v.copy(q).multiplyScalar(I).floor(),T=Y;if(St.bindFramebuffer(L.FRAMEBUFFER,V)&&st.drawBuffers&&D&&St.drawBuffers(M,V),St.viewport(W),St.scissor(v),St.setScissorTest(T),xt){const Rt=vt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Rt.__webglTexture,H)}else if(yt){const Rt=vt.get(M.texture),Dt=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.__webglTexture,H||0,Dt)}R=-1},this.readRenderTargetPixels=function(M,N,H,D,V,xt,yt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt){St.bindFramebuffer(L.FRAMEBUFFER,bt);try{const Rt=M.texture,Dt=Rt.format,Ut=Rt.type;if(Dt!==Ze&&O.convert(Dt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Ut===ki&&(Et.has("EXT_color_buffer_half_float")||st.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Ut!==zn&&O.convert(Ut)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===Nn&&(st.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-D&&H>=0&&H<=M.height-V&&L.readPixels(N,H,D,V,O.convert(Dt),O.convert(Ut),xt)}finally{const Rt=E!==null?vt.get(E).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(M,N,H=0){const D=Math.pow(2,-H),V=Math.floor(N.image.width*D),xt=Math.floor(N.image.height*D);Ct.setTexture2D(N,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,M.x,M.y,V,xt),St.unbindTexture()},this.copyTextureToTexture=function(M,N,H,D=0){const V=N.image.width,xt=N.image.height,yt=O.convert(H.format),bt=O.convert(H.type);Ct.setTexture2D(H,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,D,M.x,M.y,V,xt,yt,bt,N.image.data):N.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,D,M.x,M.y,N.mipmaps[0].width,N.mipmaps[0].height,yt,N.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,D,M.x,M.y,yt,bt,N.image),D===0&&H.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(M,N,H,D,V=0){if(u.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=M.max.x-M.min.x+1,yt=M.max.y-M.min.y+1,bt=M.max.z-M.min.z+1,Rt=O.convert(D.format),Dt=O.convert(D.type);let Ut;if(D.isData3DTexture)Ct.setTexture3D(D,0),Ut=L.TEXTURE_3D;else if(D.isDataArrayTexture)Ct.setTexture2DArray(D,0),Ut=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const It=L.getParameter(L.UNPACK_ROW_LENGTH),Ht=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Me=L.getParameter(L.UNPACK_SKIP_PIXELS),Ve=L.getParameter(L.UNPACK_SKIP_ROWS),An=L.getParameter(L.UNPACK_SKIP_IMAGES),ie=H.isCompressedTexture?H.mipmaps[0]:H.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ie.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ie.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,M.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,M.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,M.min.z),H.isDataTexture||H.isData3DTexture?L.texSubImage3D(Ut,V,N.x,N.y,N.z,xt,yt,bt,Rt,Dt,ie.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ut,V,N.x,N.y,N.z,xt,yt,bt,Rt,ie.data)):L.texSubImage3D(Ut,V,N.x,N.y,N.z,xt,yt,bt,Rt,Dt,ie),L.pixelStorei(L.UNPACK_ROW_LENGTH,It),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ht),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,An),V===0&&D.generateMipmaps&&L.generateMipmap(Ut),St.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Ct.setTextureCube(M,0):M.isData3DTexture?Ct.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ct.setTexture2DArray(M,0):Ct.setTexture2D(M,0),St.unbindTexture()},this.resetState=function(){S=0,w=0,E=null,St.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?Fn:Vo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Fn?wt:tn}}class Zp extends lc{}Zp.prototype.isWebGL1Renderer=!0;class Kp extends re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Jp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ye=new b;class Rs{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}setX(t,e){return this.normalized&&(e=Wt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Wt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Wt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Wt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Wt(e,this.array),i=Wt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Wt(e,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Wt(e,this.array),i=Wt(i,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Rs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wr extends Vn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ci;const Li=new b,li=new b,hi=new b,ui=new ut,Di=new ut,hc=new jt,xs=new b,Ui=new b,Ms=new b,go=new ut,mr=new ut,_o=new ut;class uc extends re{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",ci===void 0){ci=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jp(e,5);ci.setIndex([0,1,2,0,2,3]),ci.setAttribute("position",new Rs(i,3,0,!1)),ci.setAttribute("uv",new Rs(i,2,3,!1))}this.geometry=ci,this.material=t!==void 0?t:new Wr,this.center=new ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),li.setFromMatrixScale(this.matrixWorld),hc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&li.multiplyScalar(-hi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Ss(xs.set(-.5,-.5,0),hi,o,li,s,r),Ss(Ui.set(.5,-.5,0),hi,o,li,s,r),Ss(Ms.set(.5,.5,0),hi,o,li,s,r),go.set(0,0),mr.set(1,0),_o.set(1,1);let a=t.ray.intersectTriangle(xs,Ui,Ms,!1,Li);if(a===null&&(Ss(Ui.set(-.5,.5,0),hi,o,li,s,r),mr.set(0,1),a=t.ray.intersectTriangle(xs,Ms,Ui,!1,Li),a===null))return;const l=t.ray.origin.distanceTo(Li);l<t.near||l>t.far||e.push({distance:l,point:Li.clone(),uv:Ge.getInterpolation(Li,xs,Ui,Ms,go,mr,_o,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ss(n,t,e,i,s,r){ui.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Di.x=r*ui.x-s*ui.y,Di.y=s*ui.x+r*ui.y):Di.copy(ui),n.copy(t),n.x+=Di.x,n.y+=Di.y,n.applyMatrix4(hc)}class Xr extends Vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vo=new b,xo=new b,Mo=new jt,gr=new Ds,ys=new Zi;class dc extends re{constructor(t=new Re,e=new Xr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)vo.fromBufferAttribute(e,s-1),xo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=vo.distanceTo(xo);t.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(s),ys.radius+=r,t.ray.intersectsSphere(ys)===!1)return;Mo.copy(s).invert(),gr.copy(t.ray).applyMatrix4(Mo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new b,h=new b,d=new b,f=new b,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const u=Math.max(0,o.start),A=Math.min(g.count,o.start+o.count);for(let S=u,w=A-1;S<w;S+=p){const E=g.getX(S),R=g.getX(S+1);if(c.fromBufferAttribute(m,E),h.fromBufferAttribute(m,R),gr.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const W=t.ray.origin.distanceTo(f);W<t.near||W>t.far||e.push({distance:W,point:d.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),A=Math.min(m.count,o.start+o.count);for(let S=u,w=A-1;S<w;S+=p){if(c.fromBufferAttribute(m,S),h.fromBufferAttribute(m,S+1),gr.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(f);R<t.near||R>t.far||e.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const So=new b,yo=new b;class Qp extends dc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)So.fromBufferAttribute(e,s),yo.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+So.distanceTo(yo);t.setAttribute("lineDistance",new ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fc extends Vn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Eo=new jt,Lr=new Ds,Es=new Zi,As=new b;class $p extends re{constructor(t=new Re,e=new fc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),Es.radius+=r,t.ray.intersectsSphere(Es)===!1)return;Eo.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(Eo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);As.fromBufferAttribute(d,m),Ao(As,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,_=p;g<_;g++)As.fromBufferAttribute(d,g),Ao(As,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ao(n,t,e,i,s,r,o){const a=Lr.distanceSqToPoint(n);if(a<e){const l=new b;Lr.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class tm extends be{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class en{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new b,s=[],r=[],o=[],a=new b,l=new jt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ue(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ue(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Yr extends en{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new ut,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class em extends Yr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qr(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Ts=new b,_r=new qr,vr=new qr,xr=new qr;class nm extends en{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new b){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ts.subVectors(s[0],s[1]).add(s[0]),c=Ts);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ts.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ts),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),_r.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,_,m),vr.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,_,m),xr.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(_r.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),vr.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),xr.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(_r.calc(l),vr.calc(l),xr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function To(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function im(n,t){const e=1-n;return e*e*t}function sm(n,t){return 2*(1-n)*n*t}function rm(n,t){return n*n*t}function Bi(n,t,e,i){return im(n,t)+sm(n,e)+rm(n,i)}function am(n,t){const e=1-n;return e*e*e*t}function om(n,t){const e=1-n;return 3*e*e*n*t}function cm(n,t){return 3*(1-n)*n*n*t}function lm(n,t){return n*n*n*t}function zi(n,t,e,i,s){return am(n,t)+om(n,e)+cm(n,i)+lm(n,s)}class pc extends en{constructor(t=new ut,e=new ut,i=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ut){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zi(t,s.x,r.x,o.x,a.x),zi(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hm extends en{constructor(t=new b,e=new b,i=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new b){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zi(t,s.x,r.x,o.x,a.x),zi(t,s.y,r.y,o.y,a.y),zi(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jr extends en{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class um extends en{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mc extends en{constructor(t=new ut,e=new ut,i=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ut){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Bi(t,s.x,r.x,o.x),Bi(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dm extends en{constructor(t=new b,e=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new b){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Bi(t,s.x,r.x,o.x),Bi(t,s.y,r.y,o.y),Bi(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends en{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(To(a,l.x,c.x,h.x,d.x),To(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var fm=Object.freeze({__proto__:null,ArcCurve:em,CatmullRomCurve3:nm,CubicBezierCurve:pc,CubicBezierCurve3:hm,EllipseCurve:Yr,LineCurve:jr,LineCurve3:um,QuadraticBezierCurve:mc,QuadraticBezierCurve3:dm,SplineCurve:gc});class pm extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new jr(e,t))}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new fm[s.type]().fromJSON(s))}return this}}class mm extends pm{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new jr(this.currentPoint.clone(),new ut(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new mc(this.currentPoint.clone(),new ut(t,e),new ut(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new pc(this.currentPoint.clone(),new ut(t,e),new ut(i,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new gc(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Yr(t,e,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Zr extends Re{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new b,h=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=i+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}const bo={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class gm{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const _m=new gm;class _c{constructor(t){this.manager=t!==void 0?t:_m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class vm extends _c{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=bo.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Wi("img");function l(){h(),bo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Kr extends _c{constructor(t){super(t)}load(t,e,i,s){const r=new be,o=new vm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class xm{constructor(t,e,i=0,s=1/0){this.ray=new Ds(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Dr(t,this,i,e),i.sort(wo),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Dr(t[s],this,i,e);return i.sort(wo),i}}function wo(n,t){return n.distance-t.distance}function Dr(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Dr(s[r],t,e,!0)}}class Co{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Br}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Br);const Ro={type:"change"},Mr={type:"start"},Po={type:"end"};class Mm extends kn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:Xn.ROTATE,TWO:Xn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Xt),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Xt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ro),i.update(),r=s.NONE},this.update=function(){const C=new b,X=new _n().setFromUnitVectors(t.up,new b(0,1,0)),O=X.clone().invert(),lt=new b,pt=new _n,gt=2*Math.PI;return function(){const mt=i.object.position;C.copy(mt).sub(i.target),C.applyQuaternion(X),a.setFromVector3(C),i.autoRotate&&r===s.NONE&&v(U()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Tt=i.minAzimuthAngle,Lt=i.maxAzimuthAngle;return isFinite(Tt)&&isFinite(Lt)&&(Tt<-Math.PI?Tt+=gt:Tt>Math.PI&&(Tt-=gt),Lt<-Math.PI?Lt+=gt:Lt>Math.PI&&(Lt-=gt),Tt<=Lt?a.theta=Math.max(Tt,Math.min(Lt,a.theta)):a.theta=a.theta>(Tt+Lt)/2?Math.max(Tt,a.theta):Math.min(Lt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),C.setFromSpherical(a),C.applyQuaternion(O),mt.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,d||lt.distanceToSquared(i.object.position)>o||8*(1-pt.dot(i.object.quaternion))>o?(i.dispatchEvent(Ro),lt.copy(i.object.position),pt.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",x),i.domElement.removeEventListener("pointerdown",Ct),i.domElement.removeEventListener("pointercancel",Zt),i.domElement.removeEventListener("wheel",Bt),i.domElement.removeEventListener("pointermove",Jt),i.domElement.removeEventListener("pointerup",Zt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Xt),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Co,l=new Co;let c=1;const h=new b;let d=!1;const f=new ut,p=new ut,g=new ut,_=new ut,m=new ut,u=new ut,A=new ut,S=new ut,w=new ut,E=[],R={};function U(){return 2*Math.PI/60/60*i.autoRotateSpeed}function W(){return Math.pow(.95,i.zoomSpeed)}function v(C){l.theta-=C}function T(C){l.phi-=C}const J=function(){const C=new b;return function(O,lt){C.setFromMatrixColumn(lt,0),C.multiplyScalar(-O),h.add(C)}}(),Z=function(){const C=new b;return function(O,lt){i.screenSpacePanning===!0?C.setFromMatrixColumn(lt,1):(C.setFromMatrixColumn(lt,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(O),h.add(C)}}(),I=function(){const C=new b;return function(O,lt){const pt=i.domElement;if(i.object.isPerspectiveCamera){const gt=i.object.position;C.copy(gt).sub(i.target);let dt=C.length();dt*=Math.tan(i.object.fov/2*Math.PI/180),J(2*O*dt/pt.clientHeight,i.object.matrix),Z(2*lt*dt/pt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(J(O*(i.object.right-i.object.left)/i.object.zoom/pt.clientWidth,i.object.matrix),Z(lt*(i.object.top-i.object.bottom)/i.object.zoom/pt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(C){i.object.isPerspectiveCamera?c/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(C){i.object.isPerspectiveCamera?c*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function tt(C){f.set(C.clientX,C.clientY)}function q(C){A.set(C.clientX,C.clientY)}function Y(C){_.set(C.clientX,C.clientY)}function nt(C){p.set(C.clientX,C.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const X=i.domElement;v(2*Math.PI*g.x/X.clientHeight),T(2*Math.PI*g.y/X.clientHeight),f.copy(p),i.update()}function K(C){S.set(C.clientX,C.clientY),w.subVectors(S,A),w.y>0?B(W()):w.y<0&&k(W()),A.copy(S),i.update()}function Mt(C){m.set(C.clientX,C.clientY),u.subVectors(m,_).multiplyScalar(i.panSpeed),I(u.x,u.y),_.copy(m),i.update()}function it(C){C.deltaY<0?k(W()):C.deltaY>0&&B(W()),i.update()}function z(C){let X=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,i.keyPanSpeed),X=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,-i.keyPanSpeed),X=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?v(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(i.keyPanSpeed,0),X=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?v(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(-i.keyPanSpeed,0),X=!0;break}X&&(C.preventDefault(),i.update())}function j(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),X=.5*(E[0].pageY+E[1].pageY);f.set(C,X)}}function at(){if(E.length===1)_.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),X=.5*(E[0].pageY+E[1].pageY);_.set(C,X)}}function ht(){const C=E[0].pageX-E[1].pageX,X=E[0].pageY-E[1].pageY,O=Math.sqrt(C*C+X*X);A.set(0,O)}function L(){i.enableZoom&&ht(),i.enablePan&&at()}function At(){i.enableZoom&&ht(),i.enableRotate&&j()}function Et(C){if(E.length==1)p.set(C.pageX,C.pageY);else{const O=ct(C),lt=.5*(C.pageX+O.x),pt=.5*(C.pageY+O.y);p.set(lt,pt)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const X=i.domElement;v(2*Math.PI*g.x/X.clientHeight),T(2*Math.PI*g.y/X.clientHeight),f.copy(p)}function st(C){if(E.length===1)m.set(C.pageX,C.pageY);else{const X=ct(C),O=.5*(C.pageX+X.x),lt=.5*(C.pageY+X.y);m.set(O,lt)}u.subVectors(m,_).multiplyScalar(i.panSpeed),I(u.x,u.y),_.copy(m)}function St(C){const X=ct(C),O=C.pageX-X.x,lt=C.pageY-X.y,pt=Math.sqrt(O*O+lt*lt);S.set(0,pt),w.set(0,Math.pow(S.y/A.y,i.zoomSpeed)),B(w.y),A.copy(S)}function zt(C){i.enableZoom&&St(C),i.enablePan&&st(C)}function vt(C){i.enableZoom&&St(C),i.enableRotate&&Et(C)}function Ct(C){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Jt),i.domElement.addEventListener("pointerup",Zt)),F(C),C.pointerType==="touch"?pe(C):ne(C))}function Jt(C){i.enabled!==!1&&(C.pointerType==="touch"?y(C):$t(C))}function Zt(C){Q(C),E.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Jt),i.domElement.removeEventListener("pointerup",Zt)),i.dispatchEvent(Po),r=s.NONE}function ne(C){let X;switch(C.button){case 0:X=i.mouseButtons.LEFT;break;case 1:X=i.mouseButtons.MIDDLE;break;case 2:X=i.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Wn.DOLLY:if(i.enableZoom===!1)return;q(C),r=s.DOLLY;break;case Wn.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;Y(C),r=s.PAN}else{if(i.enableRotate===!1)return;tt(C),r=s.ROTATE}break;case Wn.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;tt(C),r=s.ROTATE}else{if(i.enablePan===!1)return;Y(C),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Mr)}function $t(C){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;nt(C);break;case s.DOLLY:if(i.enableZoom===!1)return;K(C);break;case s.PAN:if(i.enablePan===!1)return;Mt(C);break}}function Bt(C){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(C.preventDefault(),i.dispatchEvent(Mr),it(C),i.dispatchEvent(Po))}function Xt(C){i.enabled===!1||i.enablePan===!1||z(C)}function pe(C){switch(et(C),E.length){case 1:switch(i.touches.ONE){case Xn.ROTATE:if(i.enableRotate===!1)return;j(),r=s.TOUCH_ROTATE;break;case Xn.PAN:if(i.enablePan===!1)return;at(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Xn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(),r=s.TOUCH_DOLLY_PAN;break;case Xn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;At(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Mr)}function y(C){switch(et(C),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;Et(C),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;st(C),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;zt(C),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;vt(C),i.update();break;default:r=s.NONE}}function x(C){i.enabled!==!1&&C.preventDefault()}function F(C){E.push(C)}function Q(C){delete R[C.pointerId];for(let X=0;X<E.length;X++)if(E[X].pointerId==C.pointerId){E.splice(X,1);return}}function et(C){let X=R[C.pointerId];X===void 0&&(X=new ut,R[C.pointerId]=X),X.set(C.pageX,C.pageY)}function ct(C){const X=C.pointerId===E[0].pointerId?E[1]:E[0];return R[X.pointerId]}i.domElement.addEventListener("contextmenu",x),i.domElement.addEventListener("pointerdown",Ct),i.domElement.addEventListener("pointercancel",Zt),i.domElement.addEventListener("wheel",Bt,{passive:!1}),this.update()}}class Sm extends re{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ut(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const di=new b,Lo=new jt,Do=new jt,Uo=new b,Io=new b;class ym{constructor(t={}){const e=this;let i,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Lo.copy(g.matrixWorldInverse),Do.multiplyMatrices(g.projectionMatrix,Lo),c(p,p,g),f(p)},this.setSize=function(p,g){i=p,s=g,r=i/2,o=s/2,l.style.width=p+"px",l.style.height=g+"px"};function c(p,g,_){if(p.isCSS2DObject){di.setFromMatrixPosition(p.matrixWorld),di.applyMatrix4(Do);const m=p.visible===!0&&di.z>=-1&&di.z<=1&&p.layers.test(_.layers)===!0;if(p.element.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(e,g,_);const A=p.element;A.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(di.x*r+r)+"px,"+(-di.y*o+o)+"px)",A.parentNode!==l&&l.appendChild(A),p.onAfterRender(e,g,_)}const u={distanceToCameraSquared:h(_,p)};a.objects.set(p,u)}for(let m=0,u=p.children.length;m<u;m++)c(p.children[m],g,_)}function h(p,g){return Uo.setFromMatrixPosition(p.matrixWorld),Io.setFromMatrixPosition(g.matrixWorld),Uo.distanceToSquared(Io)}function d(p){const g=[];return p.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function f(p){const g=d(p).sort(function(m,u){if(m.renderOrder!==u.renderOrder)return u.renderOrder-m.renderOrder;const A=a.objects.get(m).distanceToCameraSquared,S=a.objects.get(u).distanceToCameraSquared;return A-S}),_=g.length;for(let m=0,u=g.length;m<u;m++)g[m].element.style.zIndex=_-m}}}const Em="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuMTRlY2I0MmYyYywgMjAyMy8wMS8xMy0xMjoyNTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjIgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA0LTEzVDE3OjE1OjUyLTA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNC0xOFQwOTo0MzoxMi0wNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNC0xOFQwOTo0MzoxMi0wNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MGFiMzM2M2QtNjhlMS00NTg2LTk4ZDYtMTU5MzYwODVlZjA2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBhYjMzNjNkLTY4ZTEtNDU4Ni05OGQ2LTE1OTM2MDg1ZWYwNiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjBhYjMzNjNkLTY4ZTEtNDU4Ni05OGQ2LTE1OTM2MDg1ZWYwNiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGFiMzM2M2QtNjhlMS00NTg2LTk4ZDYtMTU5MzYwODVlZjA2IiBzdEV2dDp3aGVuPSIyMDIzLTA0LTEzVDE3OjE1OjUyLTA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuMiAoTWFjaW50b3NoKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6E1u7EAAABD0lEQVRIibWWPW7CQBgFxyCZQ0BFjkC4B4SfeyS3gDY5QxoKOAg0NClQlApxgDTBzUuxXliMF1v2+kmWrJU9U+y3z44k0WRajdJLCGJgDnwCP8AZ+AW+0rVZ+ow/knzXWNJBxTlIevFx8hbbkhYlwNks0ncLBVXgruShYFoDbjN1mZGuYxoD30Cv8siYHIE+kMDtFM0CwAG6mMkjKxgFgN+xXMEwoODZ3rh78Ad0AgkSy2plFoPHFZwCci8sV7APKNjmCTYBBRdWUwftCdO8d5v8VhMO8GrhQG7ZLWv00DLL89X1ewX4h0rWtb0mKv/BuWlQedo0LzGmBMfAAFNkdiN3wBpY8eCQFglqp/G/in8U1YLSxBKbYwAAAABJRU5ErkJggg==",Am="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAi7SURBVHgB7Z3LbhRHFIZ/8wCxs40U02QXKQa8ixQI9i7iEmCXICRglasEbAiXhfGCOGEDSATYAQohYoUJF2XnAUOSnR0mEkuXzQPEzgt06u+uNu3x9EyPp7p7quZ8UtEzhunGc06dS11ODcBDwjAM9GW7brxu1m3IvA7MPwkyPqp0W041vl/UbZ7vBwYG5uEZA3AcI+wx3baZK98PoRioFPOmPeVVK4WCwzinAFrgFC57937dDiC7N5dFohC3tTLU4BjOKIAW/Ji+HEEs9KJ6eLfQQkzr9kArwzQcoKcVQAs96ekn0LtCz0LpVtNt0nU3UTrs7brNhP4wE8YWTGhF6J/gG1nQ7SiEtYT+C76RhbBHFKHSGCCMU7ibiNO3foSB4skqY4RNqAAt+CHdJvTLBfSv8AkzGlqDiTBOb0undAsQxsEQe30AIY3S7VjZYwmlWQDT6y/plzMQ4Tcj0G3GfEelUYoFML5eBJ8fpdt4GbFB4RZAC5+jd3MQ4XdCoNuc/u5OoGAKtQDGnBX+S3jOeW0JJlEQhSiAiWgZ6B2AYAOmiwwQl2EZ6wpg/P19xDN2gj0UCogLrCqABHuFo2BZCawpgAi/NBQsKoEVBRDhl46CJSXoWgFE+JWhYEEJulIAE+1Ljl8dXIo23k120O1AkIzpVwszrZvogg0rgJnNkzy/eg50M3+wIRegH3hcXy5D6CWOaldwGx3SsQKYoI9+37VFmr7DOGC006BwIwrARRwBhF5EIVaC3EFhRzGA8TUBhF4l0G2ikw/ktgBmJc8MBBcYz7uyKJcCSL7vHAo5XUFeF8CoP4DgCgFyrsNoawFM1L8AwUW2tMsK8liAUhcpClZpO0rYUgHM7hUZ7XOXsbDNnsSWLkByfi+oaTcwnvWXmRbA9P4Aguu0tAKZFkB6v1dkWoGmFsBoTADBFzKtQJYL6Gg4UXCCpjJd5wIk7/ea0cZSd80sgPR+f1mX0jezABL8+QuLXb6d/sEaC6CF3wt194TiGGoMBhtdwH4IvnMk/WaNC9Da8S9kqZfvcIp4SzJVvGoBjGkQ4ftPUmo3Iu0CjkDoF1azgbQCyHbu/mE11otigH4Y/FlZ+Q8PHz/Cs9k/UK/XsbT0GssrK9HfDQ0OYnj4XWwdGcHOHR9h3949GBx8C54T6DhgMVEAmoT78BAK+uq1G/jl7q+rAs/D4UOf49yZ7yLF8BRWHLmVuIAxeAZ7/KnTZ/H+yHb8dP1GR8Ind7TC8LOnTp/T9+rss44QufzEAnC59xg8gb3+kz2fYnFpCTbYPDyM3x//5ps14Gkno4kF8CYArNf/sSp8wnvxni/1vT0i4B8DYXwowxw8wHbPb8RDSxDQAngx+EOfX6TwSWIJPIoJIhfghfm/MPVDocJP4DMuTF2EJwR0AdznfxwOQ9PPiL1MXtXnfXAFV2gBNsNxLkz9iLK5eu06PGBwwPUUkP74neH3UDaDevTwVX0uujpMzfkg8OGjJ6gCKl5Vz7aI+1nA7PMXqIpnFT7bFlSAAA5T5eAMJ5UcJ6jk0CiblJH6ZT/7NVzHeQWoclDGhwEh5xVA6A7nFaDKNMzxFDDCeQXgBE11z3Z/UogKoOAwW0c+QFVwCZnjKOctANfwVfbsndU92xLLzluAfXt3V+aL9+3ZDceJFGARDkPhHz70GcqGi0Y9CAJXqADWz6Irm2++/hJlc/bMKXiAct4FEGYC335VnhJQ4arMPiyiBnzZE8BRuQ937IoWhxQJF4H8+fxptJnEA8ZpAebhAfTHRS/Y5L35DE+ET5Y3mVqyzscBhGb53t07hSgB73nv7s++mH7CaiHzyTiAgidwYMi2JUh6vgcDP2kiy58owFN4BHvpX9pP2wgMGfDR53vU8xP+5h/J1rCj6PL8uV6F6wW+n7oY7fXLC3cGHz50SAv/Cx8Fn3BQu4Dpvtkezs2hjx4/wezsC7ys1yPF4GYSQoFT0CPaxH+sh3f36hE+jwK9LKKzBFZrBEl5uL4i2hjKF+nJoAcQ+oXV1D+tANMQ+oXVE0bTLoDLw+kGpFKY36ypFrpqAUzdOHED/rPG0jcuCLkFwXfWdPJmxaKlWqi/KG3pt6R/0GxJ2BUIvlJr/EEzC+BNyRhhHesOklxnAcyJEjUIvlFrdopo1qrgSQi+0VSmrY6N86p2YJ+zLvhLaLUvQKyAP2TKst3RsWIF3Cez95N2O4PECrhPSxm2tABErIDTTOvef7DVP8ijAAHkIElX2dIs9UvTdnOouYG4AveYbCd80tYCEDNVzNHBAIILKMTHxLZd7p9re7i50TEIrnAsj/BJ7voA+oY1yESRC1wxsspFLheQIK6g52mZ8zejowohxqyMw5OtZJ6RyKYjOi4RYyLLkxB6jVxRfyMbqhHE48Yg8UAvQeFfxgboKAZoRMcErCtwAEKVtB3ta0W3CsCgkEPFcuxsNSjkzPez6KpMnHnwQXi0vdwhlG7j3QifdGUBEsx8AS1BAKEMFGLhK3SJFQUgogSloWBJ+MSaAhBRgsJRsCh8YrVUrPmPcTBCQbANV2tbFT6xXivY/Ae591x2G9uD36V14ZNCikUzMjW5qawj6B5O7hzsNtrPwmoM0AwdF5zQlwnIfsNOocBPmlHXwihcAYgEhx2jUJDJb6SU8wKiYkTxNKXMH7SH39FoGcInpViANNoajCEuSRdASKMQr+SpoURKPzHE/ILMEiRAfAO/i9GyhU9KtwBpTGxwCf07o1hD3OsVKqLSM4NMbMB0kQtOFfqHGuIgb7xK4fccLFnLgpWhv8yEcQwktIJfkvmyfGEm7FHBVxoDtCOMY4Tzuu2Ce1kDB3KY0k2bqis9SU8rQJowPtqGbT96d1SRQue4/e0qIvqN4IwCpDHm9Khu21D9cjSFuPYeBT9f1Jh9UTipAGmMm6ASjOGNQhRlIShchfiAjaiYlutRvPMK0IwwLnVHJeA10G2zeZ+0IOOjKnVlW0m9nvcxZfsf8LxICy+D1uIAAAAASUVORK5CYII=",Tm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcbSURBVHgB7d1PbBRlGMfxZ403E7bGs2V71Ii0RxMI25uJiXpUxFBO/CmJcAFqD9AD8uciJKLcbOP/G5qYeKNKjd5ardGbDDXxZmwPnuvzdGfLFHa7s7sz8877zveTvEzpTts0/PK8z/vOzFKTnG1ubjb00NSxX0cjHiPxEeUR6ViPj7/oWLFRq9UiyVFNcqCha+rhNR2vC0HzXaRjUceChnFRMpZZADV0VtXe0XFGWhUO4Yl0zOlYzKoyDh1AgldJNlXP67g5bBCHCqCGz4J3SQheVUU65jSE8zKggQIYLyw+ltbiAoh0TA5SDZ+QPsVVb1kIHx5q6FjWbJyRPvVVAfUHvC+tXg/o5pJWwrm0J6cOoIbPptwpAXqb1xAeS3NiqgBq+GzKHRcgPdvEnuh1Us8eMK58hA/9Go+zs6tdA6jf4KIw7WJwU/G6oauuU3C82r0hwPDO6nTcMUsdAxjv81nfxwYzsmBXTiY67RN2m4LvCuFDdixLHfvBxwKo1W9KuIMF2Wt22qjeMQXHU69Vv4YA2bOpeEyn4vX2Jx6tgLbwaAiQD5uKd1TB7QrIwgMF2VEFkxWwKYQP+dtRBZMV8L4w/aIY61oBn7YPtipg/AxHQ4BijMSZ256CjwpQLHtgrTUFM/3CgUin4bFavPq9L0DxGjYFc6sVXJkkgHBp3AK4XwA3tqbghgBu7LUAcvUDrozYKnhTAEf6fjAdyBIBhFMEEE4RQDhFAOEUAYRTBBBOEUA4RQDhFAGEUwQQThFAOEUA4RQBhFMEEE4RQDhFAOHUk1Jyn372hZyfmZX1jQ0J1Yv7XpDpkyfkyFtvStWU/pb85/dNyIO1NamCa1cuy+lTJ6RKSh/Ap+rPSFXU63X57ttvtipiVdADlsiGthlvHH5761gVBLBkrN24fOW6VAUBLKFbH92WDz68LVVAD1hS1g/+vPS9jI4+KyGjApaU9YEvv/Jq8P0gASyxKvSDBLDkQu8H6QE9EHI/SAX0QMj9IAH0RKj9IAH0SIj9ID2gZ0LrB6mAngmtHySAHgqpHySAngqlH6QH9FgI/SAV0GMh9IME0HO+94MEMAA+94P0gIHwtR+kAgbC136QABakXt8jszPnt556+2/jn63xk1asI4ezexbYx36QKbgANi1a8PaOjnZ83YJj1Wtt7S/Jgk/PFxPAAvy+utw1fG0WwpcONDOZQn16vpgpOGc2xfYKn7FzTp88Llnw6fliApiz6VPpQ3Xw4AHJilXUcxdmpeyYgnNmi41+ZPn72lT899qfUmZUwIAxBUN+WPox9bm/rv4mWcpyiycvBDBn9+4tpT73VoaX02zr59rVy1J29IA5S3uJzPYAn9s3Ltn8zD1bm9xpVt+uUQFz1r5Ettsms71m52RlduaCF+EzBLAAtiVi1e34ydPa561uf/7e0pJeOrumG9CHMnsX2Gm9AjKd0X5iEZiCA2LT/B+rK+ITKmAgrO+zy2++IYCBuH71PW/6viQCGADr+3zY8+uEHtBzPvZ9SVRAj/na9yURQI/52vclEUBP+dz3JdEDesj3vi+JCuiZEPq+JALomRD6viQC6JFQ+r4kekBPhNT3JVEBPRBa35dEAD0QWt+XRABLLsS+L4kesMSs77Nb60fqdQkVFbCk2n1fyOEzBLCkfHquYxgEsIR8e65jGPSAJVOFvi+JClgyVej7kkofwHqF/jHenTlfib4vqfQB/OrzT4L8j5qT7I0kv9Tfc/bCOama0veACBs9IJwigHCKAMIpAginCCCcIoBwigDCKQIIpwggnCKAcIoAwikCCKcIIJwigHCKAMIpAginCCCcIoBwigDCKQIIpwggnLIARgK4EVkA1wVwY50KCJceWAAfCODGigUwvLdehy9W7K05GvrBfQGKN/ZErVaLhD4QxYsse+19wK8FKNai/dEO4B0BirVgf9Taf9Ne8F89jAiQP5t+x+yD5KW4mwIUY679QbICWvWz1TBVEHmyK28T8eL3YQXUT9gLVEHkbaEdPlNLvkIVRM4iHZPJAO64HSuugnMC5GMuGT5T63SWVsK7emgKkJ3tlW9StxtSjwm3aSE7lqXJTi90DGBcJpmKkZXHpt62rrfk6xfcEFbFGN5cnKWOatKD9oPzejgqQP9sy2VqtxN6BtBoCJf1MC5AeisavoleJ6V6Ki7+RgsCpLOQJnwm9WOZcSllYYJebvaadpP6ei5Yv/ElPZwVtmjwOMvEWc3ImX6+KFUP+Kj4Nn7brG4I0Lq59Fi3rZbdDPTOCPaD4l1t27COBFXVrnqTg4TPDFQBk+JqaGXXtmq4iaEa2ndO3YjvHxjY0AFsi4PY1HFRmJpDlVnw2jILYJKGsamHKR2HhDD6LpLWQ2t3NHSLkrFcApgUV8bxeOyXViBHhGCWTSStCmdHe7cMe8OCxUF7u7T+B/tMaRkYWjueAAAAAElFTkSuQmCC",xe={quantize:function(n,t=.1){const e=n/1;return Math.round(e/t)*t},hypot:function(n,t){n=Math.abs(n),t=Math.abs(t);var e=Math.min(n,t),i=Math.max(n,t);return i+3*e/32+Math.max(0,2*e-i)/8+Math.max(0,4*e-i)/16},randomNormalized:function(){let e=0,i=0;for(;e===0;)e=Math.random();for(;i===0;)i=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*i)*1+0},randomPlusMinus:function(){return Math.random()<.5?-1:1},randomSkewed:function(n=10,t=10){const e=Math.pow(Math.random(),n),i=Math.pow(Math.random(),t);return e/(e+i)},arrayAverage:function(n){return n.length===0?0:n.reduce((e,i)=>e+i,0)/n.length},mapToRange:function(n,t,e){return t+n*(e-t)},clamp:function(n,t,e){return Math.min(Math.max(n,t),e)},wrapAroundCircle:function(n){return n<0?n+we:n>=we?n-we:n},numToChartAxis:function(n){return n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":n.toString()},numToChartData:function(n,t=0){return n.toFixed(t)}},vc={lastFrameTime:0,targetDelta:1e3/240,ticks:0,tick:function(n){return n-this.lastFrameTime<=this.targetDelta&&this.lastFrameTime>0?!1:(this.lastFrameTime=n,this.ticks++,!0)}},Oe={throttleValue:0,start:function(n=6e3){this.throttleValue=0,new ae.Tween({v:0}).to({v:1},n).onUpdate(e=>{Oe.throttleValue=e.v}).start()},throttle:function(n){return n*this.throttleValue}},bm={distanceParticleCamera:0,distanceTotal:0,calculate:function(n){return rt.points.localToWorld(n),this.distanceParticleCamera=Gt.camera.position.distanceTo(n),this.distanceTotal=this.distanceParticleCamera-Gt.cameraDistance,this.distanceTotal>0?1-this.distanceTotal:1}};function wm(n){let t={div:null,obj:null};return t.div=document.createElement("div"),t.div.className="particle-label",t.div.textContent=n,t.obj=new Sm(t.div),t}function Cm(n){let t=new Re;t.attributes.position=n.attributes.position;let e=n.parameters.widthSegments||1,i=n.parameters.heightSegments||1,s=n.parameters.depthSegments||1,r=[];r.push(...o(s,i,0)),r.push(...o(s,i,(s+1)*(i+1))),r.push(...o(e,s,(s+1)*(i+1)*2)),r.push(...o(e,s,(s+1)*(i+1)*2+(e+1)*(s+1))),r.push(...o(e,i,(s+1)*(i+1)*2+(e+1)*(s+1)*2)),r.push(...o(e,i,(s+1)*(i+1)*2+(e+1)*(s+1)*2+(e+1)*(i+1))),t.setIndex(r);function o(a,l,c){let h=[];for(let d=0;d<l+1;d++){let f=0,p=0;for(let g=0;g<a;g++){f=(a+1)*d+g,p=f+1;let _=f,m=f+(a+1);h.push(c+f,c+p),m<(a+1)*(l+1)-1&&h.push(c+_,c+m)}p+a+1<=(a+1)*(l+1)-1&&h.push(c+p,c+p+a+1)}return h}return t}const Pe=.03,Ne=1e3,Ps=ae.Easing.Exponential.InOut;ae.Easing.Exponential.In;const we=Math.PI*2,Rm=500,Pm=999;new Ot("#f3f4f5");const Xi=new Ot("#0a0e12"),xc=new Ot("#f3f4f5"),Gi=new Ot("#325CA4"),ws=new Ot().copy(Xi).lerp(xc,.4),Lm=200,Ur=20,Dm=new Array(Ur),Um=20,Le=7.4,Im=.08,Nm=.04;for(let n=0;n<=Ur;n++){const t=n/Ur,e=new Ot().copy(Xi).lerp(xc,t);Dm[n]=e}const Ns=0,Ki=1,Os=2,Om="./assets/globe-points.bin",Fm="toggle-interact",Bm="./assets/user-data.csv",zm=5,Gm=Math.PI*(3-Math.sqrt(5)),Hm={init:function(){console.log(`Audience initializing with ${Object.keys(qi.chartList).length} charts...`),console.log(`Sandbox mode: ${!1}`),Qt.init(()=>{fe.init(),qt.init(),Kt.init(),Yi.init(),No.init(),Gt.init(),rt.init(),Ir.init(),Yt.init(),ve.init(),setTimeout(()=>{No.act(()=>Yi.chart(qi.chartStart())),Gt.animate()},Rm)})}};window.onload=function(){Hm.init()};const qt={innerWidth:0,innerHeight:0,aspectRatio:0,centerX:0,centerY:0,marginX:80,marginY:80,init:function(){console.log("> Initializing Viewport..."),this.update(),window.addEventListener("resize",this.onResize,!1)},update:function(){this.innerWidth=window.innerWidth,this.innerHeight=window.innerHeight,this.centerX=this.innerWidth*.5,this.centerY=this.innerHeight*.5,this.aspectRatio=this.innerWidth/this.innerHeight},onResize:function(n){qt.update(),Gt.updateViewport(),Yt.updateViewport()}},Kt={mouse:null,mouseX:0,mouseY:0,html:`
    <div id="cursor"><div class="data">500</div></div>
    `,domCursor:null,domData:null,init:function(){console.log("> Initializing Mouse..."),this.mouse=new ut,this.domCursor=document.getElementById("cursor"),this.domData=this.domCursor.querySelector(".data"),fe.audience.addEventListener("mousedown",this.onDown,!1),fe.audience.addEventListener("mousemove",this.onMove,!1),fe.audience.addEventListener("mouseup",this.onUp,!1),fe.audience.addEventListener("click",this.onClick,!1)},update:function(n){this.mouseX=n.clientX,this.mouseY=n.clientY,this.mouse.x=this.mouseX/qt.innerWidth*2-1,this.mouse.y=-(this.mouseY/qt.innerHeight)*2+1,this.domCursor.style.left=this.mouseX+"px",this.domCursor.style.top=this.mouseY+"px"},onDown:function(n){n.preventDefault(),Yt.isEnabled&&n.target.id==="three"&&Yt.startDrag()},onClick:function(n){},onMove:function(n){n.preventDefault(),Kt.update(n),Gt.mouseMove(n),ve.mouseMove(n),Yt.isEnabled&&Yt.updateDrag()},onUp:function(n){n.preventDefault(),Yt.isEnabled&&Yt.endDrag()},haloVisible:function(n){n?this.domCursor.classList.add("halo"):this.domCursor.classList.remove("halo")},dataVisible:function(n){n?this.domData.classList.add("show"):this.domData.classList.remove("show")},setData:function(n){this.domData.innerText=n}},fe={body:null,audience:null,ui:null,compositeHTML:"",init:function(){console.log("> Initializing DOM..."),this.body=document.body,this.audience=document.getElementById("audience"),this.ui=document.getElementById("interface"),this.compositeHTML=Yi.html,this.compositeHTML+=Kt.html;const n=Object.values(qi.chartList);for(let t of n)t.html&&(this.compositeHTML+=t.html);this.ui.innerHTML=this.compositeHTML},addClass:function(n){this.body.classList.add(n)},removeClass:function(n){this.body.classList.remove(n)}},Yi={id:"UI",mouseMode:Fm,interactive:!0,html:`
        <div id="feature-name" class="nav-item">Audience</div>
        <div id="chart-selector" class="pill">Universe</div>
        <div id="sidebar">
            <div class="title">Placeholder instructions</div>
            <div class="summary">Use the number keys on your keyboard (1—0) to jump between the prototype views.</div>
        </div>
        <div id="legend">100 users</div>
        <div id="orb"></div>
        `,domSelector:null,domLegend:null,domSidebar:null,domSidebarTitle:null,domSidebarSummary:null,init:function(){console.log("> Initializing UI..."),this.domSelector=document.getElementById("chart-selector"),this.domLegend=document.getElementById("legend"),this.domSidebar=document.getElementById("sidebar"),this.domSidebarTitle=this.domSidebar.querySelector(".title"),this.domSidebarSummary=this.domSidebar.querySelector(".summary"),this.setupKeyboard()},interactivity:function(n){n==!1?fe.audience.classList.add("locked"):fe.audience.classList.remove("locked"),this.interactive=n},chart:function(n){this.interactive===!1||ve.activeChart===n||ve.changeInProgress===!0||Yt.isSelectionActive===!0||(this.interactivity(!1),ve.activeChart&&fe.audience.classList.remove(ve.activeChart.selector),fe.audience.classList.add(n.selector),this.domSelector.textContent=n.uiLabel,ve.switchTo(n,()=>{this.interactivity(!0)}))},setupKeyboard:function(){function n(t){const e=qi.chartList[t.key];e&&e!==yc&&Yi.chart(e)}window.addEventListener("keypress",n,!1)}},Gt={scene:null,camera:null,renderer:null,controls:null,raycaster:null,origin:null,cameraDistance:0,checkIntersections:!1,init:function(){console.log("> Initializing ThreeJS..."),this.scene=new Kp,this.origin=new b(0,0,0),this.camera=new He(Um,qt.aspectRatio,.1,1e3),this.camera.position.z=Le,this.renderer=new lc({antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setSize(qt.innerWidth,qt.innerHeight),this.renderer.sortObjects=!1,this.renderer.domElement.id="three",this.labelRenderer=new ym,this.labelRenderer.setSize(qt.innerWidth,qt.innerHeight),this.labelRenderer.domElement.classList.add("label-renderer"),this.raycaster=new xm,this.raycaster.params.Points.threshold=Nm,fe.audience.appendChild(this.renderer.domElement),fe.audience.appendChild(this.labelRenderer.domElement),this.updateCameraDistance()},updateCameraControls:function(n){this.controls&&(this.controls.enabled=n)},resetCameraControls:function(n){!this.controls&&n===!0?(this.controls=new Mm(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enableRotate=!0,this.controls.enablePan=!1,this.controls.enableZoom=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=Im):this.controls&&n===!1&&(this.controls.dispose(),this.controls=null)},updateViewport:function(){this.camera.aspect=qt.aspectRatio,this.camera.updateProjectionMatrix(),this.renderer.setSize(qt.innerWidth,qt.innerHeight),this.labelRenderer.setSize(qt.innerWidth,qt.innerHeight)},add:function(n){this.scene.add(n)},remove:function(n){this.scene.remove(n)},faceCamera:function(n){n.lookAt(this.camera.position)},cameraFit:function(){const n=new b(1,1,1),t=new b(0,0,0),e=1.2,s=Math.max(n.x,n.y,n.z)/(2*Math.atan(Math.PI*this.camera.fov/360)),r=s/this.camera.aspect,o=e*Math.max(s,r),a=this.controls.target.clone().sub(this.camera.position).normalize().multiplyScalar(o);this.controls.maxDistance=o*10,this.controls.target.copy(t),this.camera.near=o/100,this.camera.far=o*100,this.camera.updateProjectionMatrix(),this.camera.position.copy(this.controls.target).sub(a)},cameraTween:function(n,t){if(n===t)return;const i=1*(n-t);var s=0,r=0;new ae.Tween({v:0}).to({v:1},Ne).easing(Ps).onUpdate(function(a){r=i*a.v,Gt.camera.translateZ(s-r),s=r,Gt.updateCameraDistance()}).onComplete(function(){Gt.updateCameraDistance()}).start()},updateCameraDistance:function(){this.cameraDistance=this.camera.position.distanceTo(this.origin)},animate:function(n){requestAnimationFrame(this.animate.bind(this)),vc.tick(n)===!0&&(this.controls&&this.controls.update(),ae.update(),ve.animate(),rt.animate(),this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera))},mouseMove:function(){this.checkIntersections=!0}},No={id:"ActionManager",history:[],index:-1,init(){console.log("> Initializing ActionManager...")},act(n){n()},log(n){this.history.splice(this.index+1),this.history.push(n),this.index++;const t={index:this.index},e=`?index=${this.index}`;history.pushState(t,"",e),console.log(`> ${this.id}: Added action to history [${this.history.length} actions]...`)},replay(){const n=this.history[this.index];n&&n()},backButtonClick(){console.log(`> ${this.id}: Going back...`),this.index>0?(this.index--,this.replay()):window.history.back()},forwardButtonClick(){console.log(`> ${this.id}: Going forward...`),this.index<this.history.length-1&&(this.index++,this.replay())}},rt={id:"Particles",total:0,container:null,points:null,scales:null,selected:null,positions:null,speed:null,acceleration:null,maxOpacity:null,localOpacity:null,colors:null,states:null,hovered:null,refreshPositions:!1,refreshOpacity:!1,inverseRotationMatrix:null,opacityLerp:0,tweenPosition:new b,spareVector:new b,init:function(){console.log("> Initializing Particles.."),this.container=new re,this.container.position.set(0,0,0),this.container.rotation.y=Math.PI,this.updateRotationMatrix(),Gt.scene.add(this.container),this.load()},load:function(){this.total=Qt.total,console.log(`> Loading ${this.total} particles into BufferGeometry...`),this.localOpacity=new Float32Array(this.total),this.maxOpacity=new Float32Array(this.total),this.selected=new Array(this.total).fill(!1),this.positions=new Float32Array(this.total*3),this.speed=new Float32Array(this.total),this.acceleration=new Float32Array(this.total*3),this.colors=new Float32Array(this.total*4);const n=new Re;n.setAttribute("position",new Te(this.positions,3)),n.setAttribute("color",new Te(this.colors,4)),n.computeBoundingSphere();const e=new Kr().load(Em),i=new fc({size:Pe,map:e,alphaTest:.1,sizeAttenuation:!0,transparent:!0,vertexColors:!0});this.points=new $p(n,i),this.points.position.set(0,0,0),this.points.rotation.set(0,0,0),this.container.add(this.points)},updateGeometryBuffers:function(){this.points.geometry.setAttribute("position",new Te(this.positions,3)),this.points.geometry.setAttribute("color",new Te(this.colors,4)),this.points.geometry.computeBoundingSphere(),this.updatePointAttributes()},computeBoundingSphere:function(){this.points.geometry.computeBoundingSphere()},killExcess:function(n){const t=this.total-n,e=Ne*.5;let i=0;console.log(`> ${this.id}: Killing off ${t} particles...`);for(let s=n;s<this.total;++s){const r=i/t*e;rt.tweenOpacity(s,1,0,r,e),i++}},changeCount:function(n,t){console.log(`> ${this.id}: Updating point geometries from ${this.total} to ${n}...`);const e=new Array(n),i=new Float32Array(n),s=new Float32Array(n),r=new Float32Array(n*3),o=new Float32Array(n*4),a=new Float32Array(n),l=new Float32Array(n*3);if(e.fill(!1),i.set(this.localOpacity.subarray(0,n),0),s.set(this.maxOpacity.subarray(0,n),0),r.set(this.positions.subarray(0,n*3),0),a.set(this.speed.subarray(0,n),0),l.set(this.acceleration.subarray(0,n*3),0),o.set(this.colors.subarray(0,n*4),0),t){let c=this.total;for(;c<n;){const h=n-c,d=Math.min(this.total,h);i.set(this.localOpacity.subarray(0,d),c),s.set(this.maxOpacity.subarray(0,d),c),r.set(this.positions.subarray(0,d*3),c*3),a.set(this.speed.subarray(0,d),c),o.set(this.colors.subarray(0,d*4),c*4),c+=d}}this.selected=e,this.localOpacity=i,this.maxOpacity=s,this.positions=r,this.speed=a,this.colors=o,this.updateGeometryBuffers(),this.computeBoundingSphere(),this.total=n},animate:function(){if(!this.points&&!this.points.geometry)return;let n=Yt.isCheckNeeded?{v:0}:null,t=1;for(let e=0;e<rt.total;e++){if(Yt.isCheckNeeded){const{color:i,useTween:s}=Yt.checkIfSelected(e);s?this.tweenColor(e,n,i,0,Lm):this.setColor(e,i)}switch(ve.localAnimation===!0&&ve.activeChart.particleAnimate(e),ve.activeChart.opacityMode!=Ki&&this.spareVector.fromBufferAttribute(this.points.geometry.attributes.position,e),ve.activeChart.opacityMode){case Ns:t=bm.calculate(this.spareVector);break;case Os:e<ve.activeChart.particlesNeeded?t=ve.activeChart.particleOpacity(e,this.spareVector):t=1;break}rt.setLocalOpacity(e,t),rt.setComputedOpacity(e)}this.updatePointAttributes()},updatePointAttributes:function(){this.refreshPositions===!0&&(this.points.geometry.attributes.position.needsUpdate=!0,this.refreshPositions=!1),this.refreshOpacity===!0&&(this.points.geometry.attributes.color.needsUpdate=!0,this.refreshOpacity=!1)},introSpin:function(){new ae.Tween(this.container.rotation).to({y:0},Ne*2).easing(ae.Easing.Exponential.Out).onComplete(function(){rt.container.rotation.y=0}).start()},tween:function(n,t,e,i){const s=rt.getPosition(n),r=rt.getMaxOpacity(n),o=1;e=typeof e<"u"?e:n*(Ne/ve.activeChart.particlesNeeded),i=typeof i<"u"?i:Ne;let a,l;new ae.Tween({v:0}).to({v:1},i).easing(Ps).delay(e).onUpdate(function(h){a=rt.tweenPosition.lerpVectors(s,t,h.v),l=Yo.lerp(r,o,h.v),rt.setPosition(n,a.x,a.y,a.z),rt.setMaxOpacity(n,l)}).start()},tweenColor:function(n,t,e,i,s){const r=new Ot,o=rt.getColor(n);new ae.Tween(t).to({v:1},s).delay(i).onUpdate(function(){r.lerpColors(o,e,t.v),rt.setColor(n,r)}).start()},tweenOpacity:function(n,t,e,i,s){new ae.Tween({v:t}).to({v:e},s).delay(i).onUpdate(function(o){rt.setMaxOpacity(n,o.v)}).start()},newPoint:function(n,t,e){const i=new b(n,t,e);return i.applyQuaternion(Gt.camera.quaternion),i},resizeAll:function(n){new ae.Tween(this.points.material).to({size:n},Ne).easing(Ps).start()},updateRotationMatrix:function(){this.inverseRotationMatrix=new jt().makeRotationY(-this.container.rotation.y)},mouseMove:function(){},mouseOverParticle:function(n){this.hovered!==n&&(fe.addClass("particle-hover"),this.hovered=n,Ir.hover(n))},mouseOutParticle:function(){this.hovered&&(fe.removeClass("particle-hover"),Ir.hideMarker(),this.hovered=null)},setSpeed:function(n,t){this.speed[n]=t},getSpeed:function(n){return this.speed[n]},setAcceleration:function(n,t,e,i){n*=3,this.acceleration[n]=t,this.acceleration[n+1]=e,this.acceleration[n+2]=i},getAcceleration:function(n){n*=3;const t=this.acceleration[n],e=this.acceleration[n+1],i=this.acceleration[n+2];return new b(t,e,i)},offsetPosition:function(n,t,e,i){n*=3,this.positions[n]+=t,this.positions[n+1]+=e,this.positions[n+2]+=i,this.refreshPositions=!0},setPosition:function(n,t,e,i){n*=3,this.positions[n]=t,this.positions[n+1]=e,this.positions[n+2]=i,this.refreshPositions=!0},getPosition:function(n,t=!0){n*=3;const e=this.positions[n],i=this.positions[n+1],s=this.positions[n+2];return t?new b(e,i,s):{x:e,y:i,z:s}},setColor:function(n,t){n*=4,this.colors[n]=t.r,this.colors[n+1]=t.g,this.colors[n+2]=t.b},getColor:function(n){n*=4;const t=this.colors[n],e=this.colors[n+1],i=this.colors[n+2];return new Ot(t,e,i)},getLocalOpacity:function(n){return this.localOpacity[n]},setLocalOpacity:function(n,t){this.localOpacity[n]=t},getMaxOpacity:function(n){return this.maxOpacity[n]},setMaxOpacity:function(n,t){this.maxOpacity[n]=t},getActualOpacity:function(n){return this.colors[n*4+3]},setActualOpacity:function(n,t){this.colors[n*4+3]=t},setComputedColor:function(n){let t=Xi;Yt.isSelectionActive?t=this.selected[n]?Gi:ws:Yt.isDragActive&&(t=this.selected[n]?Gi:t),this.setColor(n,t)},setComputedOpacity:function(n){const t=this.getLocalOpacity(n)*this.getMaxOpacity(n),e=this.getActualOpacity(n);t!=e&&(this.setActualOpacity(n,t),this.refreshOpacity=!0)}},Ir={sprite:null,div:null,label:null,scale:Pe*2,material:null,tween:null,init:function(){console.log("> Initializing ParticleMarker...");const t=new Kr().load(Am);this.material=new Wr({map:t,sizeAttenuation:!0,transparent:!0,depthTest:!1,opacity:0}),this.sprite=new uc(this.material),this.sprite.position.set(0,0,0),this.sprite.scale.set(this.scale,this.scale,this.scale),this.sprite.renderOrder=Pm,rt.container.add(this.sprite)},hover:function(n){this.material.opacity<1&&this.showMarker(),this.moveMarker(n)},showMarker:function(){this.tween&&this.tween.stop(),this.tween=new ae.Tween(this.material).to({opacity:1},200).start()},moveMarker:function(n){this.sprite.position.copy(rt.getPosition(n))},hideMarker:function(){this.tween&&this.tween.stop(),this.tween=new ae.Tween(this.material).to({opacity:0},200).delay(200).start()}},Yt={id:"ParticleSelector",ndcSelection:null,dom:null,dragSelection:null,offsetFromCenter:null,initialWindowHeight:null,totalSelected:0,isEnabled:!1,isSelectionActive:!1,isDragActive:!1,isCheckNeeded:!1,init:function(){function n(e){e.key==="Shift"&&Yt.enable()}function t(e){e.key==="Shift"&&Yt.disable()}window.addEventListener("keydown",n,!1),window.addEventListener("keyup",t,!1)},newSelection:function(){this.ndcSelection={left:0,right:0,top:0,bottom:0},this.dom={box:null,closeBtn:null},this.dragSelection={originX:0,originY:0,x:0,y:0,width:0,height:0},this.offsetFromCenter={left:0,top:0,width:0,height:0}},enable:function(){Yi.interactive!==!1&&(this.isEnabled=!0,Gt.updateCameraControls(!1),console.log(Gt.renderer.domElement),Gt.renderer.domElement.classList.add("crosshair"),console.log(`> ${this.id}: Select mode enabled...`))},disable:function(){this.isEnabled===!1||this.isDragActive===!0||this.isSelectionActive===!0||(console.log(`> ${this.id}: Select mode disabled...`),this.isEnabled=!1,Gt.updateCameraControls(!0))},startDrag:function(){this.isSelectionActive||(console.log(`> ${this.id}: Drag select started...`),fe.audience.classList.add("dragging"),this.newSelection(),this.totalSelected=0,this.isDragActive=!0,this.isCheckNeeded=!0,this.dragSelection.originX=Kt.mouseX,this.dragSelection.originY=Kt.mouseY,this.initialWindowHeight=qt.innerHeight,this.dom.box=document.createElement("div"),this.dom.box.className="selection-box",fe.audience.appendChild(this.dom.box),this.dom.box.style.left=this.dragSelection.x+"px",this.dom.box.style.top=this.dragSelection.y+"px")},updateDrag:function(){if(!this.isDragActive)return;this.dragSelection.width=Math.abs(Kt.mouseX-this.dragSelection.originX),this.dragSelection.height=Math.abs(Kt.mouseY-this.dragSelection.originY),this.dragSelection.x=Math.min(this.dragSelection.originX,Kt.mouseX),this.dragSelection.y=Math.min(this.dragSelection.originY,Kt.mouseY);const{box:n}=this.dom;n.style.left=this.dragSelection.x+"px",n.style.top=this.dragSelection.y+"px",n.style.width=this.dragSelection.width+"px",n.style.height=this.dragSelection.height+"px",this.offsetFromCenter={left:this.dragSelection.x-qt.centerX,top:this.dragSelection.y-qt.centerY,width:this.dragSelection.width,height:this.dragSelection.height},this.ndcSelection.left=this.dragSelection.x/qt.innerWidth*2-1,this.ndcSelection.top=-(this.dragSelection.y/qt.innerHeight)*2+1,this.ndcSelection.right=(this.dragSelection.x+this.dragSelection.width)/qt.innerWidth*2-1,this.ndcSelection.bottom=-((this.dragSelection.y+this.dragSelection.height)/qt.innerHeight)*2+1,this.isCheckNeeded=!0},endDrag:function(){this.isDragActive&&(console.log(`> ${this.id}: Drag completed with ${this.totalSelected} particles selected...`),this.dom.closeBtn=document.createElement("div"),this.dom.closeBtn.className="close-btn btn",this.dom.closeBtn.innerHTML='<div class="icon"></div>',this.dom.box.appendChild(this.dom.closeBtn),this.dom.closeBtn.addEventListener("click",this.killSelection),fe.audience.classList.remove("dragging"),this.isDragActive=!1,Gt.renderer.domElement.classList.remove("crosshair"),this.totalSelected>0&&this.dragSelection.width>=20&&this.dragSelection.height>=20?this.isSelectionActive=!0:(this.isSelectionActive=!1,this.killSelection()),this.isCheckNeeded=!0)},killSelection:function(){console.log(`> ${Yt.id}: Ending selection...`),fe.audience.removeChild(Yt.dom.box),Yt.totalSelected=0,Yt.isSelectionActive=!1,Yt.isCheckNeeded=!0,Yt.isEnabled=!1,Gt.updateCameraControls(!0)},checkIfSelected:function(n){let t=Xi,e=!1;if(n===0&&(this.totalSelected=0),this.isDragActive){const i=rt.getPosition(n);i.project(Gt.camera),i.x>=Yt.ndcSelection.left&&i.x<=Yt.ndcSelection.right&&i.y<=Yt.ndcSelection.top&&i.y>=Yt.ndcSelection.bottom&&i.z>-1&&i.z<1?(this.totalSelected++,rt.selected[n]=!0,t=Gi):(rt.selected[n]=!1,t=ws)}else this.isSelectionActive?rt.selected[n]===!0?t=Gi:(t=ws,e=!0):(n===0&&console.log("Should be setting all selections to 0..."),rt.selected[n]=!1,e=!0);return n===rt.total-1&&(this.isCheckNeeded=!1),{color:t,useTween:e}},select:function(n){rt.selected[n]=!0,rt.setColor(n,Gi)},deselect:function(n){rt.selected[n]=!1,rt.setColor(n,Xi)},ghost:function(n){rt.setColor(n,ws)},updateViewport:function(){if(!this.isSelectionActive)return;const{box:n}=this.dom,t=qt.innerHeight/this.initialWindowHeight,{left:e,top:i,width:s,height:r}=this.offsetFromCenter,o=qt.centerX+e*t,a=qt.centerY+i*t,l=s*t,c=r*t;n.style.left=o+"px",n.style.top=a+"px",n.style.width=l+"px",n.style.height=c+"px"}},Qt={id:"ParticleData",total:0,raw:[],normalized:[],domains:[],columns:[],metrics:[],init:async function(n){console.log("> Initializing ParticleData...");try{const i=(await(await fetch(Bm)).text()).split(`
`);this.total=i.length-1,this.metrics=i[0].split(","),this.columns=this.metrics.length;for(let s=0;s<this.metrics.length;++s)this.raw[s]=[],this.normalized[s]=[];for(let s=1;s<i.length;++s){const r=i[s].split(",");for(let o=0;o<this.metrics.length;++o){const a=parseFloat(r[o]);this.raw[o].push(a)}}this.calculateDomains(),console.log(`> ${this.id}: Finished loading data for ${this.total} particles...`),n&&n()}catch(t){console.error("Error:",t)}},getNormal:function(n,t){return typeof n=="string"&&(n=this.metricByName(n)),this.normalized[n][t]},metricByName:function(n){return this.metrics.indexOf(n)},getDomain:function(n){typeof n=="string"&&(n=this.metricByName(n));const t=Qt.domains[n][0],e=Qt.domains[n][1];return{lowerBound:t,upperBound:e}},calculateDomains:function(){for(let n=1;n<this.metrics.length;n++){const t=this.raw[n],e=[Math.min(...t),Math.max(...t)];this.domains[n]=e;for(let i=0;i<this.raw[n].length;i++){const r=(this.raw[n][i]-e[0])/(e[1]-e[0]);this.normalized[n][i]=r}}},metricName:function(n){return this.metrics[n]}},ve={id:"ChartController",activeChart:null,totalChanges:0,changeInProgress:!1,localAnimation:!1,rotation:{baseX:0,baseY:0,setX:0,setY:0,velocityX:0,velocityY:0,deceleration:.1,limitX:.1,limitY:.01},init:function(){console.log(`> ${this.id}: Preloading all charts...`);const n=Object.values(qi.chartList);for(let t of n)t.dom=document.getElementById(t.selector),t.preload()},switchTo:function(n,t){this.changeStarted(),console.log(`> ${this.id}: Switching to ${n.id}...`),this.totalChanges===0&&rt.introSpin(),this.activeChart&&this.activeChart.end(),Kt.haloVisible(n.mouseHalo),Kt.dataVisible(!1),rt.updateRotationMatrix(),rt.resizeAll(n.particleSize);let e=!1,i=n.particlesNeeded>0?n.particlesNeeded:Qt.total;i>rt.total?(console.log(`> ${this.id}: Load change needed from ${rt.total} to ${i}...`),rt.changeCount(i,!0)):i<rt.total&&(console.log(`> ${this.id}: Load change needed from ${rt.total} to ${i}...`),rt.killExcess(i),e=!0),Gt.resetCameraControls(n.allowRotation),this.activeChart?Gt.cameraTween(this.activeChart.cameraZ,n.cameraZ):Gt.cameraTween(Le,n.cameraZ);let s=null;this.activeChart===Or&&n===Sc&&(s={newPositions:!0}),this.activeChart=n,this.activeChart.start(s),this.totalChanges++,setTimeout(()=>{e&&rt.changeCount(i,!1),ve.changeCompleted(),t()},Ne*2)},animate:function(){this.updateChartRotation(),this.activeChart&&this.activeChart.animate()},updateChartRotation:function(){const n=this.rotation.setX-rt.container.rotation.x,t=this.rotation.setY-rt.container.rotation.y;this.rotation.velocityX=(this.rotation.velocityX+n*this.rotation.deceleration)*.5,this.rotation.velocityY=(this.rotation.velocityY+t*this.rotation.deceleration)*.5,rt.container.rotation.x+=this.rotation.velocityX,rt.container.rotation.y+=this.rotation.velocityY},mouseMove:function(n){this.activeChart&&(this.activeChart.allowRotation?(this.rotation.setY=-Kt.mouse.x*.04,this.rotation.setX=Kt.mouse.y*.04):(this.rotation.setY=0,this.rotation.setX=0),this.activeChart.mouseMove&&this.activeChart.mouseMove())},changeStarted:function(){this.changeInProgress=!0,this.localAnimation=!1},changeCompleted:function(){this.changeInProgress=!1,this.localAnimation=!0,rt.computeBoundingSphere(),this.activeChart.ready&&this.activeChart.ready()}},Nr={id:"ChartGlobe",uiLabel:"Geography",selector:"chart-globe",allowRotation:!0,cameraZ:Le,particlesNeeded:0,particleSize:Pe*(1.8/.6),opacityMode:Os,mouseHalo:!0,globePoints:null,globeRadius:1,innerRadius:.98,randomIndices:null,innerGlobe:null,globeGradient:null,globeMaterial:null,globeOpacity:1,globeTransition:Ne,time:0,timeIncrement:.02,timeMultiply:1.6,noiseScale:.002,oscillatingPoints:[],preload:function(){console.log(`> ${this.id}: Preloading globe point data...`),this.globeGradient=this.createGradientTexture(),this.globeMaterial=new Hr({map:Nr.globeGradient,side:gn,transparent:!0,opacity:0}),fetch(Om).then(n=>n.arrayBuffer()).then(n=>{this.globePoints=new Float32Array(n),this.particlesNeeded=this.globePoints.length/3,this.randomIndices=Array.from({length:this.particlesNeeded},(t,e)=>e).sort(()=>Math.random()-.5),console.log(`> ${this.id}: Preloaded globe with point count: ${this.particlesNeeded}`)}).catch(n=>{console.error(n)})},start:function(n){console.log(`> ${this.id}: Starting chart...`);for(let t=0;t<this.particlesNeeded;++t){const e=this.randomIndices[t],i=this.globePoints[e*3],s=this.globePoints[e*3+1],r=this.globePoints[e*3+2],o=rt.newPoint(i,s,r);rt.tween(t,o)}this.addGlobe(),n&&n()},end:function(){this.removeGlobe()},addGlobe:function(){const t=new Zr(this.innerRadius,128);this.innerGlobe=new fn(t,this.globeMaterial),this.innerGlobe.renderOrder=1,Gt.add(this.innerGlobe),this.tweenGlobe(0,this.globeOpacity,0,()=>{this.globeMaterial.transparent=!1})},removeGlobe:function(){this.globeMaterial.transparent=!0,this.tweenGlobe(this.globeOpacity,0,0,()=>{Gt.remove(this.innerGlobe)})},tweenGlobe:function(n,t,e,i){let s=new ae.Tween({opacity:n}).to({opacity:t},this.globeTransition).easing(Ps).delay(e).onUpdate(function(){Nr.globeMaterial.opacity=s._object.opacity}).onComplete(()=>{typeof i=="function"&&i()});s.start()},createGradientTexture:function(){const n=document.createElement("canvas");n.width=256,n.height=256;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,n.height);e.addColorStop(0,"#ffffff"),e.addColorStop(.8,"#dddddd"),t.fillStyle=e,t.fillRect(0,0,n.width,n.height);const i=new tm(n);return i.needsUpdate=!0,i},particleOpacity:function(n,t){const e=n%40===0;let s=(Math.sin(this.time*this.timeMultiply+this.randomIndices[n]*this.noiseScale)+1)*.1+.2;return e===!0&&(s+=.4),s},particleAnimate:function(n){},animate:function(){this.time+=this.timeIncrement,this.innerGlobe&&this.innerGlobe.lookAt(Gt.camera.position)}},Mc={id:"ChartMagnet",uiLabel:"Magnet",selector:"chart-magnet",allowRotation:!1,cameraZ:Le,particlesNeeded:0,particleSize:Pe,opacityMode:Ki,mouseHalo:!1,dom:null,html:`
        <div id="chart-magnet"><div class="axis"><div class="line"></div><div class="min"></div><div class="max"></div></div><div class="ring"></div><div class="marker"></div><div id="magnet"><div class="label">Account age</div></div></div>
        `,metricIndex:0,metricChanges:0,axis:{lowerBound:0,upperBound:0},domAxis:null,domMagnet:null,domMax:null,domMin:null,domMarker:null,flipValues:!1,preload:function(){this.particlesNeeded=Qt.total,this.domAxis=this.dom.querySelector(".axis"),this.domMagnet=this.dom.querySelector("#magnet"),this.domMagnet.addEventListener("click",this.changeMetric.bind(this)),this.domMax=this.dom.querySelector(".max"),this.domMin=this.dom.querySelector(".min"),this.domMarker=this.dom.querySelector(".marker")},start:function(n){console.log(`> ${this.id}: Starting chart...`),this.metricChanges=0,this.metricIndex=0,this.changeMetric(),n&&n()},mouseMove:function(){this.updateAxis(),this.updateMouseData()},updateMouseData:function(){const n=this.dom.getBoundingClientRect();let t=(Kt.mouseX-n.left)/n.width*100,e=(Kt.mouseY-n.top)/n.height*100;const i=Math.sqrt(Math.pow(t-50,2)+Math.pow(e-50,2));let s=i>50||i<12.5;if(Kt.dataVisible(!s),s)return;const o=(1-(i-12.5)/37.5)*this.axis.upperBound,a=i*2;Kt.setData(xe.numToChartData(o)),this.domMarker.style.width=this.domMarker.style.height=a+"%"},updateAxis:function(){const n=Kt.mouseX-qt.centerX,t=Kt.mouseY-qt.centerY,e=Math.atan2(t,n)*(180/Math.PI);this.domAxis.style.transform=`translate(0px, -50%) rotateZ(${e}deg)`,e>=-90&&e<=90?this.flipValues===!0&&(this.flipValues=!1,this.domAxis.classList.remove("flipped")):this.flipValues===!1&&(this.flipValues=!0,this.domAxis.classList.add("flipped"))},setChartAxis:function(){const n=Qt.metricName(this.metricIndex),{lowerBound:t,upperBound:e}=Qt.getDomain(n),i=Math.pow(10,Math.floor(Math.log10(e)));this.axis.lowerBound=Math.floor(t/i)*i,this.axis.upperBound=Math.ceil(e/i)*i,this.domMax.innerText=xe.numToChartAxis(this.axis.upperBound),this.domMin.innerText=xe.numToChartAxis(this.axis.lowerBound)},alignParticles:function(){const n=Qt.metricName(this.metricIndex);this.changeLabel(n);const t=we/this.particlesNeeded,e=.01;var i=new Array(this.particlesNeeded);const s=Ne/this.particlesNeeded;for(let r=0;r<this.particlesNeeded;r++){const o=r/t,l=.25+(1-Qt.normalized[this.metricIndex][r])*.75,c=Math.cos(o),h=Math.sin(o),d=l*c,f=l*h;rt.getPosition(r);const p=rt.newPoint(d,f,0);for(let m=0;m<=r;m++){if(m===r)continue;const u=i[m],A=p.distanceTo(u);if(A<e){const S=(e-A)/2,w=Math.sign(Math.random()-.5),E=Math.sign(Math.random()-.5);p.x+=S*w,p.y+=S*E}}i[r]=p;const g=this.metricChanges===0?Ne:Ne*.5,_=r*s;rt.tween(r,p,_,g)}},end:function(){this.domMagnet.removeEventListener("click",Mc.changeMetric)},changeMetric:function(){this.metricIndex++,this.metricIndex>=Qt.metrics.length&&(this.metricIndex=1),this.alignParticles(),this.setChartAxis(),this.metricChanges++},changeLabel:function(n){const t=this.domMagnet.querySelector(".label");t.textContent=n},particleAnimate:function(){},animate:function(){}},Sc={id:"ChartStarfield",uiLabel:"Universe",selector:"chart-starfield",allowRotation:!0,cameraZ:Le/3,particlesNeeded:0,particleSize:Pe*2,opacityMode:Ns,mouseHalo:!0,animVector:{x:0,y:0,z:0},maxDisplacement:1e-4,preload:function(){this.particlesNeeded=200},start:function(n){if(console.log(`> ${this.id}: Starting chart...`),!n||n.newPositions===!1)for(let e=0;e<this.particlesNeeded;e++){const i=Math.random(),s=Math.random(),r=2*Math.PI*i,o=Math.acos(2*s-1),a=(.25+Math.random()*.75)*1,l=a*Math.sin(o)*Math.cos(r),c=a*Math.sin(o)*Math.sin(r),h=a*Math.cos(o),d=rt.newPoint(l,c,h);rt.tween(e,d)}},end:function(){},particleAnimate:function(n){},animate:function(){}},hn={id:"ChartSwarm",uiLabel:"Swarm",selector:"chart-swarm",allowRotation:!0,cameraZ:Le,particlesNeeded:0,particleSize:Pe*1.4,opacityMode:Ns,mouseHalo:!0,randomIndices:null,minSpeed:.002,maxSpeed:.008,attractorRadius:.32,attractorShares:[.42,.28,.16,.08,.04,.02],contentTags:["sports","politics","entertainment","tech","finance","health"],attractors:[],spriteSize:.1,textScale:.36,shuffler:null,animEndPoint:null,animCurPoint:null,animDirection:null,animDistance:.01,particleData:null,preload:function(){this.particlesNeeded=Qt.total,this.shuffler=this.shuffleParticles(),this.addAttractors(),this.animCurPoint=new b,this.animEndPoint=new b,this.animDirection=new b},start:function(n){console.log(`> ${this.id}: Starting chart...`),this.randomizeIndices(),this.setAttractors(),this.showAttractorNodes(),this.setParticles(),this.shuffler.start()},ready:function(){Oe.start()},setParticles:function(){let n=0,t=0,e=this.attractorShares[0];this.attractorShares[0]*this.particlesNeeded,this.particleData=new Array(this.particlesNeeded);const i=new _n,s=new b(0,0,1);for(let r=0;r<this.particlesNeeded;r++){const o=new b,a=new b,l=new b,c=new b,h=this.minSpeed+xe.randomSkewed(50,10)*this.maxSpeed,d=this.randomIndices[r],f=Math.random()*Math.PI*2,p=this.attractorRadius+Math.random()*.08;t=d/this.particlesNeeded,t>e&&(n++,e+=this.attractorShares[n],this.attractorShares[n]*this.particlesNeeded),o.copy(this.attractors[n].position),a.set(Math.cos(f)*p,Math.sin(f)*p,0),r<10&&console.log(a.z),l.randomDirection(),i.setFromUnitVectors(s,l),a.applyQuaternion(i),this.particleData[d]={attractor:n,offset:o,normal:l,basePoint:a},c.copy(a).add(o),rt.tween(d,c),rt.setSpeed(d,h)}},addAttractors:function(){console.log(`> ${this.id}: Adding attractors...`);const n=this.attractorShares.length,e=new Kr().load(Tm);for(let i=0;i<n;i++){let s=new rt.newPoint(0,0,0),r=this.attractorRadius;const o=new Wr({map:e,transparent:!0,alphaTest:.9,opacity:0}),a=new uc(o);a.scale.set(this.spriteSize,this.spriteSize,this.spriteSize),a.renderOrder=0;const l=wm(this.contentTags[i]);let c={position:s,radius:r,share:hn.attractorShares[i],sprite:a,label:l};this.attractors.push(c)}},showAttractorNodes:function(){const n=Ne;for(let t=0;t<this.attractors.length;t++){const{sprite:e,label:i}=this.attractors[t];e.position.copy(this.attractors[t].position),i.obj.center.set(.5,-1.5),i.obj.position.copy(this.attractors[t].position),Gt.add(e),Gt.add(i.obj);const s=t/this.attractors.length*n;new ae.Tween({v:0}).to({v:1},n).delay(s).onUpdate(function(o){const a=Yo.lerp(0,1,o.v);e.material.opacity=a}).start(),setTimeout(()=>{i.div.classList.add("show")},s)}},killAttractorNodes:function(){const n=Ne*.5;for(let t=0;t<this.attractors.length;t++){const{sprite:e,label:i}=this.attractors[t],s=t/this.attractors.length*n;new ae.Tween({v:1}).to({v:0},n).delay(s).onUpdate(o=>{e.material.opacity=o.v}).onComplete(()=>{Gt.remove(e)}).start(),i.div.classList.remove("show"),setTimeout(()=>{Gt.remove(i.obj)},400)}},setAttractors:function(){console.log(`> ${this.id}: Setting attractor positions...`),this.attractorShares.sort((s,r)=>r-s);const n=this.attractors,t=this.attractorRadius*2+.2,e=.1;let i=!0;for(;i;){i=!1;for(let s=0;s<n.length;s++){const r=n[s];for(let o=s+1;o<n.length;o++){const a=n[o];if(Math.sqrt(Math.pow(r.position.x-a.position.x,2)+Math.pow(r.position.y-a.position.y,2)+Math.pow(r.position.z-a.position.z,2))<t){const c={x:xe.randomPlusMinus()*e,y:xe.randomPlusMinus()*e,z:xe.randomPlusMinus()*e};r.position.x+=c.x,r.position.y+=c.y,r.position.z+=c.z,a.position.x-=c.x,a.position.y-=c.y,a.position.z-=c.z,i=!0}}}}},end:function(){this.shuffler.stop(),this.killAttractorNodes()},particleAnimate:function(n){const t=this.particleData[n].offset,e=this.particleData[n].basePoint,i=Oe.throttle(rt.getSpeed(n));e.applyAxisAngle(this.particleData[n].normal,i),this.animEndPoint.copy(e).add(t),this.animCurPoint=rt.getPosition(n),this.animDirection.subVectors(this.animEndPoint,this.animCurPoint),this.animCurPoint.addScaledVector(this.animDirection,this.animDistance),rt.setPosition(n,this.animCurPoint.x,this.animCurPoint.y,this.animCurPoint.z)},shuffleParticles:function(){const t=Math.floor(hn.particlesNeeded*.1),e=hn.particlesNeeded-t;var i;function s(){const a=300+Math.floor(Math.random()*600);let l=0;for(;l<e;){const c=l+Math.floor(Math.random()*t),h=hn.particleData[c].attractor;let d=h;for(;d===h;)d=hn.randomAttractor();const f=hn.attractors[d].position;hn.particleData[c].attractor=d,hn.particleData[c].offset.copy(f),l+=t}i=setTimeout(s,a)}function r(){clearTimeout(i)}function o(){i=setTimeout(s,300)}return{start:o,stop:r}},getParticleAttractor:function(n){return this.attractors[this.particleData[n].attractor]},animate:function(){},randomAttractor:function(){return Math.floor(Math.random()*this.attractors.length)},randomizeIndices:function(){this.randomIndices=Array.from({length:this.particlesNeeded},(n,t)=>t).sort(()=>Math.random()-.5)}},km={id:"ChartRadiate",uiLabel:"Radiate",selector:"chart-radiate",allowRotation:!1,cameraZ:Le,particlesNeeded:800,particleSize:Pe*3,opacityMode:Os,mouseHalo:!0,particleData:null,speed:.003,preload:function(){this.particleData=new Array(this.particlesNeeded);let n=0,t=.06*this.particlesNeeded;for(let e=0;e<this.particlesNeeded;e++){n+=Gm;const i=e<t;this.particleData[e]={age:e,theta:n,visible:i}}},start:function(){console.log(`> ${this.id}: Starting chart...`);for(let n=0;n<this.particlesNeeded;n++){const t=this.particlePosition(n);rt.tween(n,t)}},ready:function(){Oe.start()},end:function(){},particlePosition:function(n){const t=this.particleData[n].age/this.particlesNeeded,e=Math.sqrt(Math.sin(t*Math.PI*.5)),i=e*Math.cos(this.particleData[n].theta),s=e*Math.sin(this.particleData[n].theta),r=0;return rt.newPoint(i,s,r)},particleOpacity:function(n){return this.particleData[n]&&!this.particleData[n].visible?0:Math.sin(this.particleData[n].age/this.particlesNeeded*Math.PI)},particleAnimate:function(){for(let n=0;n<this.particlesNeeded;++n){this.particleData[n].age+=Oe.throttle(this.speed);const t=this.particlePosition(n);rt.setPosition(n,t.x,t.y,t.z),this.particleData[n].age>=this.particlesNeeded&&(this.particleData[n].visible=!0,this.particleData[n].age=0)}},mouseMove:function(){},animate:function(){}},Vm={id:"ChartPath",uiLabel:"Path",selector:"chart-path",allowRotation:!0,cameraZ:Le,particlesNeeded:2e3,particleSize:Pe*2,opacityMode:Os,mouseHalo:!0,particleData:null,speed:6e-4,totalPaths:6,paths:null,delayCounter:0,delayIncrement:.4,preload:function(){this.particleData=new Array(this.particlesNeeded)},start:function(){console.log(`> ${this.id}: Starting chart...`),this.generateRandomPaths(),this.delayCounter=0;for(let n=0;n<this.particlesNeeded;n++){const t=n%6,e=Math.random();this.particleData[n]={path:t,distance:0,speed:Math.random()*this.speed,position:e,delay:n,opacity:.4+Math.random()*.6};const i=this.interpolateAlongLine(e,this.paths[t]);rt.tween(n,i)}},generateRandomPaths:function(){const e=[];function i(o){let a;do a=Math.floor(Math.random()*3);while(a===o);return a}function s(){return .3+Math.random()*.7}function r(o){return o==1?1.5:2}for(let o=0;o<this.totalPaths;o++){let a={points:[],segmentLengths:[],length:0},l=[0,0,0],c=null,h=null;const d=Math.floor(Math.random()*(6-5+1))+5;let f=l,p=-1,g=0;a.points.push(l),a.segmentLengths.push(0);for(let _=1;_<=d;_++){let m,u;_==d?(m=c,u=h):(m=i(p),u=xe.randomPlusMinus()),_==1?(c=m,h=u):m==c&&(u=h);const A=[...f],S=u*s()*r(m);A[m]+=S,g+=Math.abs(S),A[3]=g,a.points.push(A),a.segmentLengths.push(Math.abs(S)),f=A,p=m}a.length=g,e.push(a)}this.paths=e},lerp:function(n,t,e){return new b(n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e)},interpolateAlongLine:function(n,t){const e=n*t.length;let i=null,s=0,r=1;for(;!i&&r<=t.points.length-1;){let o=t.segmentLengths[r];if(s+=o,s>=e){const a=(s-e)/o;i=this.lerp(t.points[r],t.points[r-1],a)}r++}return i||(i=new b(0,0,0)),i},ready:function(){Oe.start()},end:function(){},particleOpacity:function(n){let t=this.particleData[n].opacity;return this.particleData[n].position>=.8&&(t*=(1-this.particleData[n].position)/.2),t},particleAnimate:function(n){const t=Oe.throttle(this.particleData[n].speed+this.speed);this.particleData[n].position+=t,this.particleData[n].position>=1&&(this.particleData[n].position=0);const e=this.interpolateAlongLine(this.particleData[n].position,this.paths[this.particleData[n].path]);rt.setPosition(n,e.x,e.y,e.z)},mouseMove:function(){},animate:function(){this.delayCounter+=this.delayIncrement}},Wm={id:"ChartScatterplot",uiLabel:"Scatterplot",selector:"chart-scatterplot",allowRotation:!1,cameraZ:Le,particlesNeeded:0,particleSize:Pe,mouseHalo:!1,dom:null,html:`
        <div id="chart-scatterplot"><div class="axis" id="x"></div><div class="axis" id="y"></div><div class="line-x"></div><div class="line-y"></div></div>
        `,axisX:{metric:"Total pageviews",lowerBound:0,upperBound:0},axisY:{metric:"Total spent",lowerBound:0,upperBound:0},lineX:null,lineY:null,preload:function(){this.particlesNeeded=Qt.total,this.lineX=this.dom.querySelector(".line-x"),this.lineY=this.dom.querySelector(".line-y")},start:function(n){console.log(`> ${this.id}: Starting chart...`),console.log(`> ${this.id}: Charting X: [${this.axisX.metric}] and Y: [${this.axisY.metric}]...`),this.createChartAxis("x"),this.createChartAxis("y");for(let t=0;t<this.particlesNeeded;t++){const e=this.alignPoint(Qt.getNormal(this.axisX.metric,t)),i=this.alignPoint(Qt.getNormal(this.axisY.metric,t)),s=rt.newPoint(e,i,0);rt.tween(t,s)}n&&n()},alignPoint:function(n){return n*2-1},createChartAxis:function(n){const t=zm,e=this.dom.querySelector(`#${n}`),i=n==="x"?this.axisX:this.axisY,s=i.metric,{lowerBound:r,upperBound:o}=Qt.getDomain(s),a=Math.pow(10,Math.floor(Math.log10(o)));i.lowerBound=Math.floor(r/a)*a,i.upperBound=Math.ceil(o/a)*a;const l=(i.upperBound-i.lowerBound)/(t-1);var c="";for(let h=0;h<t;h++){const d=i.lowerBound+l*h,f=xe.numToChartAxis(d),p=h===t-1?`<div class="metric">${s}</div>`:"";c+=`<div class="tick"><div class="value">${f}</div>${p}</div>`,h<t-1&&(c+='<div class="space"></div>')}e.innerHTML=c},end:function(){},mouseMove:function(){const n=this.dom.getBoundingClientRect();let t=(Kt.mouseX-n.left)/n.width*100,e=(Kt.mouseY-n.top)/n.height*100;const i=t<0||t>100||e<0||e>100;if(Kt.dataVisible(!i),i)return;t=Math.max(0,Math.min(t,100)),e=Math.max(0,Math.min(e,100));const s=t/100*this.axisX.upperBound,r=(100-e)/100*this.axisY.upperBound;this.lineX.style.top=e+"%",this.lineY.style.left=t+"%",Kt.setData(`${xe.numToChartData(s)}, ${xe.numToChartData(r)}`)},particleAnimate:function(){},animate:function(){}},Cs={id:"ChartPoles",uiLabel:"Poles",selector:"chart-poles",allowRotation:!0,cameraZ:Le,particlesNeeded:1e3,particleSize:Pe*1.4,opacityMode:Ki,mouseHalo:!1,particleData:null,totalOrbits:16,orbitContainer:null,orbits:null,minSpeed:2e-4,maxSpeed:8e-4,rotateX:null,preload:function(){this.particleData=new Array(this.particlesNeeded),this.orbitContainer=new re,this.rotateX=new b(1,0,0),rt.container.add(this.orbitContainer)},start:function(n){console.log(`> ${this.id}: Starting chart...`),this.setOrbits(),this.setParticles()},setOrbits:function(){this.particleData=new Array(this.particlesNeeded),this.orbits=new Array(this.totalOrbits);for(let t=0;t<this.totalOrbits;t++){const e=new Re().setFromPoints(new mm().absarc(0,0,1,0,we).getSpacedPoints(128)),i=new Xr({color:"#0a0e12",linewidth:.1,opacity:Math.random()*.02+.04,transparent:!0}),s=new dc(e,i),o=xe.quantize(t/this.totalOrbits,.25)*we+(Math.random()*10-5),a={path:s,angle:o};s.rotateX(o),this.orbits[t]=a,this.orbitContainer.add(s)}new ae.Tween({v:0}).to({v:1},1e3).onUpdate(function(t){for(let e=0;e<Cs.totalOrbits;e++)Cs.orbits[e].path.rotation.x=Cs.orbits[e].angle*t.v}).start()},setParticles:function(){let n=0;for(let t=0;t<this.particlesNeeded;t++){const i=this.orbits[n].angle,s=Math.random(),r=s*we,o=this.minSpeed+Math.random()*this.maxSpeed;let a=new b(Math.cos(r),Math.sin(r),0);a.applyAxisAngle(this.rotateX,i),this.particleData[t]={orbitAngle:i,angle:s,speed:o},rt.tween(t,a),n+=1,n>=this.totalOrbits&&(n=0)}},ready:function(){Oe.start(3e3)},killOrbits:function(){for(let n=0;n<this.totalOrbits;++n)this.orbitContainer.remove(this.orbits[n].path);this.orbits=null},end:function(){this.killOrbits()},particleAnimate:function(n){let t=this.particleData[n].angle+this.particleData[n].speed*Oe.throttleValue;t>1&&(t=t-1),this.particleData[n].angle=t;const e=t*we;let i=new b(Math.cos(e),Math.sin(e),0);const s=this.particleData[n].orbitAngle;i.applyAxisAngle(this.rotateX,s),rt.setPosition(n,i.x,i.y,i.z)},animate:function(){}},Xm={id:"ChartScatterplot3D",uiLabel:"Scatterplot 3D",selector:"chart-scatterplot3d",allowRotation:!0,cameraZ:Le+2,particlesNeeded:0,particleSize:Pe,mouseHalo:!1,dom:null,metricAxisX:"Account age",metricAxisY:"Lifetime value",metricAxisZ:"Total pageviews",cubeContainer:null,cube:null,preload:function(){this.particlesNeeded=Qt.total,this.cubeContainer=new re,rt.container.add(this.cubeContainer)},start:function(n){console.log(`> ${this.id}: Starting chart...`),console.log(`> ${this.id}: Charting X: [${this.metricAxisX}] and Y: [${this.metricAxisY}]...`),this.drawCube(),this.createChartAxis("x"),this.createChartAxis("y");for(let t=0;t<this.particlesNeeded;t++){const e=this.alignPoint(Qt.getNormal(this.metricAxisX,t)),i=this.alignPoint(Qt.getNormal(this.metricAxisY,t)),s=this.alignPoint(Qt.getNormal(this.metricAxisZ,t)),r=rt.newPoint(e,i,s);rt.tween(t,r)}n&&n()},alignPoint:function(n){return n*2-1},drawCube:function(){const n=new Ai(2,2,2,2,2,2),t=Cm(n),e=new Xr({color:1317668,transparent:!0,opacity:.06}),i=new Qp(t,e);this.cubeContainer.add(i),this.cubeContainer.lookAt(Gt.camera.position),this.cube=i},killCube:function(){this.cubeContainer.remove(this.cube),this.cube=null},createChartAxis:function(n){},end:function(){this.killCube()},particleAnimate:function(){},animate:function(){}},Or={id:"ChartSphere",uiLabel:"Universe",selector:"chart-sphere",allowRotation:!0,cameraZ:Le,particlesNeeded:0,particleSize:Pe*2,opacityMode:Ns,mouseHalo:!0,particleData:null,minSpeed:.001,maxSpeed:.004,preload:function(){this.particlesNeeded=Qt.total},start:function(n){console.log(`> ${this.id}: Starting chart...`),this.particleData=new Array(this.particlesNeeded);let t=new _n,e=new b(0,0,1);for(let i=0;i<this.particlesNeeded;i++){let s=Math.random()*we,r=.5+Math.random()*.5,o=new b(Math.cos(s)*r,Math.sin(s)*r,0),a=new b().randomDirection();t.setFromUnitVectors(e,a),o.applyQuaternion(t);const l=this.minSpeed+xe.randomSkewed(50,10)*this.maxSpeed;this.particleData[i]={endPoint:o,normal:a},rt.tween(i,o),rt.setSpeed(i,l)}},ready:function(){Oe.start()},end:function(){},particleAnimate:function(n){let t=this.particleData[n].endPoint;const e=Oe.throttle(rt.getSpeed(n));t.applyAxisAngle(this.particleData[n].normal,e),rt.setPosition(n,t.x,t.y,t.z)},animate:function(){}},Ym={id:"ChartStages",uiLabel:"Stages",selector:"chart-stages",allowRotation:!0,cameraZ:Le*1.4,particlesNeeded:0,particleSize:Pe*4,opacityMode:Ki,mouseHalo:!1,particleData:null,stacks:[],stageWidth:0,stageHeight:0,totalStacks:0,stackDimensions:16,stageGutters:4,stackCenter:15*.5,stageScale:.03,stageCenterX:0,stageCenterY:0,gridSize:256,preload:function(){this.particleData=new Array(this.particlesNeeded),this.makeStacks(1021,716,409,272,103)},start:function(n){console.log(`> ${this.id}: Starting chart...`),this.setParticles()},makeStacks:function(...n){this.totalStacks=n.length,this.stageWidth=(this.stackDimensions+this.stageGutters)*(n.length-1),this.stageHeight=Math.floor(Math.max(...n)/this.gridSize)*(this.stackDimensions+2),this.stageCenterX=this.stageWidth*.5,this.stageCenterY=this.stageHeight*-.5,console.log(this.stageCenterX,this.stageCenterY),n.forEach(t=>{this.stacks.push(this.makeStack2D(t))})},stackPosition:function(n,t,e){const i=-this.stackCenter+(this.stackDimensions+this.stageGutters)*n-this.stageCenterX,s=this.stageCenterY;return[t+i,e+s]},makeStack2D:function(n){const t=[],e=this.stacks.length,i=0;let s=0,r=0,o=0;for(;s<n;){const[a,l]=this.stackPosition(e,o,r);t.push(l*this.stageScale),t.push(a*this.stageScale),t.push(i),s++,o++,o==this.stackDimensions&&(o=0,r+=s%this.gridSize==0?2:1)}return this.particlesNeeded+=s,{index:e,points:t,pointCount:s,centerX:0}},makeStack3D:function(n,t){const e=[];let i=0,s=0,r=0,o=0;for(;i<t;){e.push(s);const a=r-this.stackCenter;e.push(a);const l=o-this.stackCenter;e.push(l),i++,r++,r==this.stackDimensions&&(r=0,o++,o==this.stackDimensions&&(o=0,s+=i==this.gridSize?2:1))}return{index:n,points:e,pointCount:i}},getPointPosition:function(n,t){t*=3;const e=this.stacks[n].points[t],i=this.stacks[n].points[t+1],s=this.stacks[n].points[t+2];return new b(i,e,s)},setParticles:function(){let n=0,t=0;for(let e=0;e<this.particlesNeeded;e++){t>=this.stacks[n].pointCount&&(n++,t=0);let i=this.getPointPosition(n,t);rt.tween(e,i),t++}},ready:function(){Oe.start(3e3)},end:function(){},particleAnimate:function(n){},animate:function(){}},yc={id:"ChartSandbox",uiLabel:"Sandbox",selector:"chart-sandbox",allowRotation:!1,cameraZ:Le,particlesNeeded:0,particleSize:Pe*2,opacityMode:Ki,mouseHalo:!0,particleData:null,minSpeed:.001,maxSpeed:.004,angleGroup:null,offsetGroup:null,preload:function(){this.particlesNeeded=Qt.total,this.refreshGroups()},start:function(n){console.log(`> ${this.id}: Starting chart...`),this.particleData=new Array(this.particlesNeeded),new b(0,0,1);for(let t=0;t<this.particlesNeeded;t++){this.particleData[t]={angle:Math.random()*we,offset:Math.random(),direction:xe.randomPlusMinus(),speed:Math.random()*.005,accel:0};const e=this.particlePosition(t);rt.tween(t,e)}},particlePosition:function(n){let t=xe.wrapAroundCircle(this.particleData[n].angle+this.particleData[n].direction*this.particleData[n].speed);const e=this.closestValue(t,this.angleGroup),i=Math.abs(e-t),s=we/6;let r=this.particleData[n].accel;i<=s?(r+=this.particleData[n].speed*(s-i),r>.4&&(r=.4)):i>s&&(r-=this.particleData[n].speed*(i-s),r<0&&(r=0)),this.particleData[n].accel=r;let o=t+r;const a=this.particleData[n].offset+vc.ticks/1e3,l=Math.sin(a*we);this.particleData[n].angle=o;const c=xe.mapToRange(l,.6,1),h=c*Math.cos(this.particleData[n].angle),d=c*Math.sin(this.particleData[n].angle);return rt.newPoint(h,d,0)},ready:function(){Oe.start()},end:function(){},closestValue:function(n,t){let e=we;for(let i=0;i<t.length;++i)Math.abs(t[i]-n)<e&&(e=t[i]);return e},refreshGroups:function(){this.angleGroup=Array.from({length:6},()=>Math.random()*we),console.log(this.angleGroup),this.offsetGroup=Array.from({length:4},()=>Math.random())},particleAnimate:function(n){let t=this.particlePosition(n);rt.setPosition(n,t.x,t.y,t.z)},animate:function(){}},qi={chartList:{1:Or,2:Mc,3:Wm,4:Xm,5:hn,6:Nr,7:Sc,8:Cs,9:Vm,0:Ym,n:km,m:yc},chartStart:function(){return Or}}});export default qm();
//# sourceMappingURL=index-4a47ef17.js.map

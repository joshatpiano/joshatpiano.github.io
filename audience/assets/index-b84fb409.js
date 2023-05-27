(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var di=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var t=1.70158;return n===1?1:n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return n===0?0:--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}}),Bounce:Object.freeze({In:function(n){return 1-di.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?di.Bounce.In(n*2)*.5:di.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(t){return Math.pow(t,n)},Out:function(t){return 1-Math.pow(1-t,n)},InOut:function(t){return t<.5?Math.pow(t*2,n)/2:(1-Math.pow(2-t*2,n))/2+.5}}}}),hi=function(){return performance.now()},uo=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},n.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},n.prototype.update=function(t,e){t===void 0&&(t=hi()),e===void 0&&(e=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!e;s&&s.update(t,o)===!1&&!e&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Pn={Linear:function(n,t){var e=n.length-1,i=e*t,r=Math.floor(i),s=Pn.Utils.Linear;return t<0?s(n[0],n[1],i):t>1?s(n[e],n[e-1],e-i):s(n[r],n[r+1>e?e:r+1],i-r)},Bezier:function(n,t){for(var e=0,i=n.length-1,r=Math.pow,s=Pn.Utils.Bernstein,o=0;o<=i;o++)e+=r(1-t,i-o)*r(t,o)*n[o]*s(i,o);return e},CatmullRom:function(n,t){var e=n.length-1,i=e*t,r=Math.floor(i),s=Pn.Utils.CatmullRom;return n[0]===n[e]?(t<0&&(r=Math.floor(i=e*(1+t))),s(n[(r-1+e)%e],n[r],n[(r+1)%e],n[(r+2)%e],i-r)):t<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[e]-(s(n[e],n[e],n[e-1],n[e-1],i-e)-n[e]):s(n[r?r-1:0],n[r],n[e<r+1?e:r+1],n[e<r+2?e:r+2],i-r)},Utils:{Linear:function(n,t,e){return(t-n)*e+n},Bernstein:function(n,t){var e=Pn.Utils.Factorial;return e(n)/e(t)/e(n-t)},Factorial:function(){var n=[1];return function(t){var e=1;if(n[t])return n[t];for(var i=t;i>1;i--)e*=i;return n[t]=e,e}}(),CatmullRom:function(n,t,e,i,r){var s=(e-n)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*e+s+o)*l+(-3*t+3*e-2*s-o)*a+s*r+t}}},Es=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),as=new uo,Zo=function(){function n(t,e){e===void 0&&(e=as),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=di.Linear.None,this._interpolationFunction=Pn.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Es.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e,this},n.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t,this},n.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},n.prototype.start=function(t,e){if(t===void 0&&(t=hi()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},n.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},n.prototype._setupProperties=function(t,e,i,r,s){for(var o in i){var a=t[o],l=Array.isArray(a),c=l?"array":typeof a,h=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(h){var d=i[o];if(d.length===0)continue;for(var f=[a],p=0,g=d.length;p<g;p+=1){var _=this._handleRelativeValue(a,d[p]);if(isNaN(_)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(_)}h&&(i[o]=f)}if((c==="object"||l)&&a&&!h){e[o]=l?[]:{};var m=a;for(var u in m)e[o][u]=m[u];r[o]=l?[]:{};var d=i[o];if(!this._isDynamic){var A={};for(var u in d)A[u]=d[u];i[o]=d=A}this._setupProperties(m,e[o],d,r[o],s)}else(typeof e[o]>"u"||s)&&(e[o]=a),l||(e[o]*=1),h?r[o]=i[o].slice().reverse():r[o]=e[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(t){return t===void 0&&(t=hi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},n.prototype.resume=function(t){return t===void 0&&(t=hi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},n.prototype.group=function(t){return t===void 0&&(t=as),this._group=t,this},n.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},n.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},n.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},n.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},n.prototype.easing=function(t){return t===void 0&&(t=di.Linear.None),this._easingFunction=t,this},n.prototype.interpolation=function(t){return t===void 0&&(t=Pn.Linear),this._interpolationFunction=t,this},n.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},n.prototype.onStart=function(t){return this._onStartCallback=t,this},n.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},n.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},n.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},n.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},n.prototype.onStop=function(t){return this._onStopCallback=t,this},n.prototype.update=function(t,e){if(t===void 0&&(t=hi()),e===void 0&&(e=!0),this._isPaused)return!0;var i,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>s)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),r=(t-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(t,e,i,r){for(var s in i)if(e[s]!==void 0){var o=e[s]||0,a=i[s],l=Array.isArray(t[s]),c=Array.isArray(a),h=!l&&c;h?t[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(t[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(t[s]=o+(a-o)*r))}},n.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},n.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],i=this._valuesEnd[t];typeof i=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(i):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},n}(),Jo="20.0.3",Qo=Es.nextId,je=as,$o=je.getAll.bind(je),tl=je.removeAll.bind(je),el=je.add.bind(je),nl=je.remove.bind(je),il=je.update.bind(je),ce={Easing:di,Group:uo,Interpolation:Pn,now:hi,Sequence:Es,nextId:Qo,Tween:Zo,VERSION:Jo,getAll:$o,removeAll:tl,add:el,remove:nl,update:il};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ys="152",Gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rl=0,Os=1,sl=2,fo=1,al=2,nn=3,hn=0,Te=1,sn=2,xn=0,fi=1,Bs=2,zs=3,Gs=4,ol=5,ci=100,ll=101,cl=102,Hs=103,ks=104,hl=200,ul=201,dl=202,fl=203,po=204,mo=205,pl=206,ml=207,gl=208,_l=209,vl=210,xl=0,Ml=1,Sl=2,os=3,El=4,yl=5,Al=6,Tl=7,go=0,bl=1,wl=2,ln=0,Rl=1,Cl=2,Pl=3,Ll=4,Dl=5,_o=300,gi=301,_i=302,ls=303,cs=304,Er=306,hs=1e3,He=1001,us=1002,Ee=1003,Vs=1004,Pr=1005,De=1006,Ul=1007,Fi=1008,Fn=1009,Il=1010,Nl=1011,vo=1012,Fl=1013,Ln=1014,Dn=1015,Oi=1016,Ol=1017,Bl=1018,pi=1020,zl=1021,ke=1023,Gl=1024,Hl=1025,Un=1026,vi=1027,kl=1028,Vl=1029,Wl=1030,Xl=1031,Yl=1033,Lr=33776,Dr=33777,Ur=33778,Ir=33779,Ws=35840,Xs=35841,Ys=35842,qs=35843,ql=36196,js=37492,Ks=37496,Zs=37808,Js=37809,Qs=37810,$s=37811,ta=37812,ea=37813,na=37814,ia=37815,ra=37816,sa=37817,aa=37818,oa=37819,la=37820,ca=37821,Nr=36492,jl=36283,ha=36284,ua=36285,da=36286,xo=3e3,In=3001,Kl=3200,Zl=3201,Jl=0,Ql=1,Nn="",wt="srgb",Ke="srgb-linear",Mo="display-p3",Fr=7680,$l=519,ds=35044,fa="300 es",fs=1035;class zn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pa=1234567;const Li=Math.PI/180,Bi=180/Math.PI;function cn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]).toLowerCase()}function _e(n,t,e){return Math.max(t,Math.min(e,n))}function As(n,t){return(n%t+t)%t}function tc(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function ec(n,t,e){return n!==t?(e-n)/(t-n):0}function Di(n,t,e){return(1-e)*n+e*t}function nc(n,t,e,i){return Di(n,t,1-Math.exp(-e*i))}function ic(n,t=1){return t-Math.abs(As(n,t*2)-t)}function rc(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function sc(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ac(n,t){return n+Math.floor(Math.random()*(t-n+1))}function oc(n,t){return n+Math.random()*(t-n)}function lc(n){return n*(.5-Math.random())}function cc(n){n!==void 0&&(pa=n);let t=pa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hc(n){return n*Li}function uc(n){return n*Bi}function ps(n){return(n&n-1)===0&&n!==0}function dc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function So(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fc(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),h=o((t+i)/2),d=s((t-i)/2),f=o((t-i)/2),p=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function an(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Eo={DEG2RAD:Li,RAD2DEG:Bi,generateUUID:cn,clamp:_e,euclideanModulo:As,mapLinear:tc,inverseLerp:ec,lerp:Di,damp:nc,pingpong:ic,smoothstep:rc,smootherstep:sc,randInt:ac,randFloat:oc,randFloatSpread:lc,seededRandom:cc,degToRad:hc,radToDeg:uc,isPowerOfTwo:ps,ceilPowerOfTwo:dc,floorPowerOfTwo:So,setQuaternionFromProperEuler:fc,normalize:Vt,denormalize:an};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],u=r[6],A=r[1],S=r[4],P=r[7],y=r[2],R=r[5],U=r[8];return s[0]=o*_+a*A+l*y,s[3]=o*m+a*S+l*R,s[6]=o*u+a*P+l*U,s[1]=c*_+h*A+d*y,s[4]=c*m+h*S+d*R,s[7]=c*u+h*P+d*U,s[2]=f*_+p*A+g*y,s[5]=f*m+p*S+g*R,s[8]=f*u+p*P+g*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*s,p=c*s-o*l,g=e*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(r*c-h*i)*_,t[2]=(a*i-r*o)*_,t[3]=f*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Or.makeScale(t,e)),this}rotate(t){return this.premultiply(Or.makeRotation(-t)),this}translate(t,e){return this.premultiply(Or.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Or=new Nt;function yo(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function zi(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const ma={};function Ui(n){n in ma||(ma[n]=!0,console.warn(n))}function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Br(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const pc=new Nt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),mc=new Nt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function gc(n){return n.convertSRGBToLinear().applyMatrix3(mc)}function _c(n){return n.applyMatrix3(pc).convertLinearToSRGB()}const vc={[Ke]:n=>n,[wt]:n=>n.convertSRGBToLinear(),[Mo]:gc},xc={[Ke]:n=>n,[wt]:n=>n.convertLinearToSRGB(),[Mo]:_c},Oe={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Ke},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=vc[t],r=xc[e];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}};let kn;class Ao{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{kn===void 0&&(kn=zi("canvas")),kn.width=t.width,kn.height=t.height;const i=kn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zi("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mi(e[i]/255)*255):e[i]=mi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class To{constructor(t=null){this.isSource=!0,this.uuid=cn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zr(r[o].image)):s.push(zr(r[o]))}else s=zr(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function zr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ao.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mc=0;class Ae extends zn{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,i=He,r=He,s=De,o=Fi,a=ke,l=Fn,c=Ae.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=cn(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===In?wt:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_o)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case us:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case us:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?In:xo}set encoding(t){Ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===In?wt:Nn}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=_o;Ae.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,i=0,r=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,P=(p+1)/2,y=(u+1)/2,R=(h+f)/4,U=(d+_)/4,W=(g+m)/4;return S>P&&S>y?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=U/i):P>y?P<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(P),i=R/r,s=W/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=U/s,r=W/s),this.set(i,r,s,e),this}let A=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(d-_)/A,this.z=(f-h)/A,this.w=Math.acos((c+p+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class On extends zn{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(Ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===In?wt:Nn),this.texture=new Ae(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:De,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new To(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bo extends Ae{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sc extends Ae{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-a;const u=l*f+c*p+h*g+d*_,A=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const y=Math.sqrt(S),R=Math.atan2(y,u*A);m=Math.sin(m*R)/y,a=Math.sin(a*R)/y}const P=a*A;if(l=l*m+f*P,c=c*m+p*P,h=h*m+g*P,d=d*m+_*P,m===1-a){const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*d+l*p-c*f,t[e+1]=l*g+h*f+c*d-a*p,t[e+2]=c*g+h*p+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ga.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ga.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*r-a*i,h=l*i+a*e-s*r,d=l*r+s*i-o*e,f=-s*e-o*i-a*r;return this.x=c*l+f*-s+h*-a-d*-o,this.y=h*l+f*-o+d*-s-c*-a,this.z=d*l+f*-a+c*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new L,ga=new un;class ki{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Vn.copy(t.boundingBox),Vn.applyMatrix4(t.matrixWorld),this.union(Vn);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Je.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Je)}else r.boundingBox===null&&r.computeBoundingBox(),Vn.copy(r.boundingBox),Vn.applyMatrix4(t.matrixWorld),this.union(Vn)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yi),Xi.subVectors(this.max,yi),Wn.subVectors(t.a,yi),Xn.subVectors(t.b,yi),Yn.subVectors(t.c,yi),pn.subVectors(Xn,Wn),mn.subVectors(Yn,Xn),An.subVectors(Wn,Yn);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-An.z,An.y,pn.z,0,-pn.x,mn.z,0,-mn.x,An.z,0,-An.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-An.y,An.x,0];return!Hr(e,Wn,Xn,Yn,Xi)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,Wn,Xn,Yn,Xi))?!1:(Yi.crossVectors(pn,mn),e=[Yi.x,Yi.y,Yi.z],Hr(e,Wn,Xn,Yn,Xi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new L,new L,new L,new L,new L,new L,new L,new L],Je=new L,Vn=new ki,Wn=new L,Xn=new L,Yn=new L,pn=new L,mn=new L,An=new L,yi=new L,Xi=new L,Yi=new L,Tn=new L;function Hr(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Tn.fromArray(n,s);const a=r.x*Math.abs(Tn.x)+r.y*Math.abs(Tn.y)+r.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),h=i.dot(Tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ec=new ki,Ai=new L,kr=new L;class yr{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ec.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ai,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(kr)),this.expandByPoint(Ai.copy(t.center).sub(kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qe=new L,Vr=new L,qi=new L,gn=new L,Wr=new L,ji=new L,Xr=new L;class Ts{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qe.copy(this.origin).addScaledVector(this.direction,e),Qe.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Vr.copy(t).add(e).multiplyScalar(.5),qi.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(Vr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(qi),a=gn.dot(this.direction),l=-gn.dot(qi),c=gn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*l-a,f=o*a-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Vr).addScaledVector(qi,f),p}intersectSphere(t,e){Qe.subVectors(t.center,this.origin);const i=Qe.dot(this.direction),r=Qe.dot(Qe)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Qe)!==null}intersectTriangle(t,e,i,r,s){Wr.subVectors(e,t),ji.subVectors(i,t),Xr.crossVectors(Wr,ji);let o=this.direction.dot(Xr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,t);const l=a*this.direction.dot(ji.crossVectors(gn,ji));if(l<0)return null;const c=a*this.direction.dot(Wr.cross(gn));if(c<0||l+c>o)return null;const h=-a*gn.dot(Xr);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,r,s,o,a,l,c,h,d,f,p,g,_,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/qn.setFromMatrixColumn(t,0).length(),s=1/qn.setFromMatrixColumn(t,1).length(),o=1/qn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,g=c*h,_=c*d;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,g=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yc,t,Ac)}lookAt(t,e,i){const r=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),_n.crossVectors(i,we),_n.lengthSq()===0&&(Math.abs(i.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),_n.crossVectors(i,we)),_n.normalize(),Ki.crossVectors(we,_n),r[0]=_n.x,r[4]=Ki.x,r[8]=we.x,r[1]=_n.y,r[5]=Ki.y,r[9]=we.y,r[2]=_n.z,r[6]=Ki.z,r[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],u=i[14],A=i[3],S=i[7],P=i[11],y=i[15],R=r[0],U=r[4],W=r[8],v=r[12],T=r[1],j=r[5],J=r[9],I=r[13],B=r[2],k=r[6],nt=r[10],q=r[14],X=r[3],Z=r[7],tt=r[11],mt=r[15];return s[0]=o*R+a*T+l*B+c*X,s[4]=o*U+a*j+l*k+c*Z,s[8]=o*W+a*J+l*nt+c*tt,s[12]=o*v+a*I+l*q+c*mt,s[1]=h*R+d*T+f*B+p*X,s[5]=h*U+d*j+f*k+p*Z,s[9]=h*W+d*J+f*nt+p*tt,s[13]=h*v+d*I+f*q+p*mt,s[2]=g*R+_*T+m*B+u*X,s[6]=g*U+_*j+m*k+u*Z,s[10]=g*W+_*J+m*nt+u*tt,s[14]=g*v+_*I+m*q+u*mt,s[3]=A*R+S*T+P*B+y*X,s[7]=A*U+S*j+P*k+y*Z,s[11]=A*W+S*J+P*nt+y*tt,s[15]=A*v+S*I+P*q+y*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+e*l*p-e*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+e*c*d-e*a*p-s*o*d+i*o*p+s*a*h-i*c*h)+u*(-r*a*h-e*l*d+e*a*f+r*o*d-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],u=t[15],A=d*m*c-_*f*c+_*l*p-a*m*p-d*l*u+a*f*u,S=g*f*c-h*m*c-g*l*p+o*m*p+h*l*u-o*f*u,P=h*_*c-g*d*c+g*a*p-o*_*p-h*a*u+o*d*u,y=g*d*l-h*_*l-g*a*f+o*_*f+h*a*m-o*d*m,R=e*A+i*S+r*P+s*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return t[0]=A*U,t[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*u-i*f*u)*U,t[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*u+i*l*u)*U,t[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*U,t[4]=S*U,t[5]=(h*m*s-g*f*s+g*r*p-e*m*p-h*r*u+e*f*u)*U,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*u-e*l*u)*U,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*p+e*l*p)*U,t[8]=P*U,t[9]=(g*d*s-h*_*s-g*i*p+e*_*p+h*i*u-e*d*u)*U,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*u+e*a*u)*U,t[11]=(h*a*s-o*d*s-h*i*c+e*d*c+o*i*p-e*a*p)*U,t[12]=y*U,t[13]=(h*_*r-g*d*r+g*i*f-e*_*f-h*i*m+e*d*m)*U,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*U,t[15]=(o*d*r-h*a*r+h*i*l-e*d*l-o*i*f+e*a*f)*U,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,f=s*c,p=s*h,g=s*d,_=o*h,m=o*d,u=a*d,A=l*c,S=l*h,P=l*d,y=i.x,R=i.y,U=i.z;return r[0]=(1-(_+u))*y,r[1]=(p+P)*y,r[2]=(g-S)*y,r[3]=0,r[4]=(p-P)*R,r[5]=(1-(f+u))*R,r[6]=(m+A)*R,r[7]=0,r[8]=(g+S)*U,r[9]=(m-A)*U,r[10]=(1-(f+_))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=qn.set(r[0],r[1],r[2]).length();const o=qn.set(r[4],r[5],r[6]).length(),a=qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Be.copy(this);const c=1/s,h=1/o,d=1/a;return Be.elements[0]*=c,Be.elements[1]*=c,Be.elements[2]*=c,Be.elements[4]*=h,Be.elements[5]*=h,Be.elements[6]*=h,Be.elements[8]*=d,Be.elements[9]*=d,Be.elements[10]*=d,e.setFromRotationMatrix(Be),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o){const a=this.elements,l=2*s/(e-t),c=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,r,s,o){const a=this.elements,l=1/(e-t),c=1/(i-r),h=1/(o-s),d=(e+t)*l,f=(i+r)*c,p=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const qn=new L,Be=new Zt,yc=new L(0,0,0),Ac=new L(1,1,1),_n=new L,Ki=new L,we=new L,_a=new Zt,va=new un;class Ar{constructor(t=0,e=0,i=0,r=Ar.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _a.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_a,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return va.setFromEuler(this),this.setFromQuaternion(va,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ar.DEFAULT_ORDER="XYZ";class bs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tc=0;const xa=new L,jn=new un,$e=new Zt,Zi=new L,Ti=new L,bc=new L,wc=new un,Ma=new L(1,0,0),Sa=new L(0,1,0),Ea=new L(0,0,1),Rc={type:"added"},ya={type:"removed"};class de extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new L,e=new Ar,i=new un,r=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Nt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.multiply(jn),this}rotateOnWorldAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.premultiply(jn),this}rotateX(t){return this.rotateOnAxis(Ma,t)}rotateY(t){return this.rotateOnAxis(Sa,t)}rotateZ(t){return this.rotateOnAxis(Ea,t)}translateOnAxis(t,e){return xa.copy(t).applyQuaternion(this.quaternion),this.position.add(xa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ma,t)}translateY(t){return this.translateOnAxis(Sa,t)}translateZ(t){return this.translateOnAxis(Ea,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($e.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zi.copy(t):Zi.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$e.lookAt(Ti,Zi,this.up):$e.lookAt(Zi,Ti,this.up),this.quaternion.setFromRotationMatrix($e),r&&($e.extractRotation(r.matrixWorld),jn.setFromRotationMatrix($e),this.quaternion.premultiply(jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Rc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ya)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ya)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),$e.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$e.multiply(t.parent.matrixWorld)),t.applyMatrix4($e),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(t,e);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,t,bc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,wc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}de.DEFAULT_UP=new L(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ze=new L,tn=new L,Yr=new L,en=new L,Kn=new L,Zn=new L,Aa=new L,qr=new L,jr=new L,Kr=new L;let Ji=!1;class Ue{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ze.subVectors(t,e),r.cross(ze);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ze.subVectors(r,e),tn.subVectors(i,e),Yr.subVectors(t,e);const o=ze.dot(ze),a=ze.dot(tn),l=ze.dot(Yr),c=tn.dot(tn),h=tn.dot(Yr),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(t,e,i,r,s,o,a,l){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),this.getInterpolation(t,e,i,r,s,o,a,l)}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,en),l.setScalar(0),l.addScaledVector(s,en.x),l.addScaledVector(o,en.y),l.addScaledVector(a,en.z),l}static isFrontFacing(t,e,i,r){return ze.subVectors(i,e),tn.subVectors(t,e),ze.cross(tn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),ze.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ue.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ue.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return Ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ji=!0),Ue.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return Ue.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ue.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ue.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Kn.subVectors(r,i),Zn.subVectors(s,i),qr.subVectors(t,i);const l=Kn.dot(qr),c=Zn.dot(qr);if(l<=0&&c<=0)return e.copy(i);jr.subVectors(t,r);const h=Kn.dot(jr),d=Zn.dot(jr);if(h>=0&&d<=h)return e.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Kn,o);Kr.subVectors(t,s);const p=Kn.dot(Kr),g=Zn.dot(Kr);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Zn,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Aa.subVectors(s,r),a=(d-h)/(d-h+(p-g)),e.copy(r).addScaledVector(Aa,a);const u=1/(m+_+f);return o=_*u,a=f*u,e.copy(i).addScaledVector(Kn,o).addScaledVector(Zn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Cc=0;class Mi extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=fi,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(i.blending=this.blending),this.side!==hn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ge={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function Zr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ot{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Oe.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Oe.workingColorSpace){if(t=As(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Zr(o,s,t+1/3),this.g=Zr(o,s,t),this.b=Zr(o,s,t-1/3)}return Oe.toWorkingColorSpace(this,r),this}setStyle(t,e=wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wt){const i=wo[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wt){return Oe.fromWorkingColorSpace(ge.copy(this),t),Math.round(_e(ge.r*255,0,255))*65536+Math.round(_e(ge.g*255,0,255))*256+Math.round(_e(ge.b*255,0,255))}getHexString(t=wt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Oe.workingColorSpace){Oe.fromWorkingColorSpace(ge.copy(this),e);const i=ge.r,r=ge.g,s=ge.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=wt){Oe.fromWorkingColorSpace(ge.copy(this),t);const e=ge.r,i=ge.g,r=ge.b;return t!==wt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ge),Ge.h+=t,Ge.s+=e,Ge.l+=i,this.setHSL(Ge.h,Ge.s,Ge.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ge),t.getHSL(Qi);const i=Di(Ge.h,Qi.h,e),r=Di(Ge.s,Qi.s,e),s=Di(Ge.l,Qi.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ge=new Ot;Ot.NAMES=wo;class ws extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const re=new L,$i=new yt;class ye{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ds,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$i.fromBufferAttribute(this,e),$i.applyMatrix3(t),this.setXY(e,$i.x,$i.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=Vt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ds&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ro extends ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Co extends ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class qe extends ye{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Pc=0;const Le=new Zt,Jr=new de,Jn=new L,Re=new ki,bi=new ki,le=new L;class Ve extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yo(t)?Co:Ro)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,i){return Le.makeTranslation(t,e,i),this.applyMatrix4(Le),this}scale(t,e,i){return Le.makeScale(t,e,i),this.applyMatrix4(Le),this}lookAt(t){return Jr.lookAt(t),Jr.updateMatrix(),this.applyMatrix4(Jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Re.setFromBufferAttribute(s),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];bi.setFromBufferAttribute(a),this.morphTargetsRelative?(le.addVectors(Re.min,bi.min),Re.expandByPoint(le),le.addVectors(Re.max,bi.max),Re.expandByPoint(le)):(Re.expandByPoint(bi.min),Re.expandByPoint(bi.max))}Re.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)le.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)le.fromBufferAttribute(a,c),l&&(Jn.fromBufferAttribute(t,c),le.add(Jn)),r=Math.max(r,i.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ye(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new L,h[T]=new L;const d=new L,f=new L,p=new L,g=new yt,_=new yt,m=new yt,u=new L,A=new L;function S(T,j,J){d.fromArray(r,T*3),f.fromArray(r,j*3),p.fromArray(r,J*3),g.fromArray(o,T*2),_.fromArray(o,j*2),m.fromArray(o,J*2),f.sub(d),p.sub(d),_.sub(g),m.sub(g);const I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(I),A.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(I),c[T].add(u),c[j].add(u),c[J].add(u),h[T].add(A),h[j].add(A),h[J].add(A))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let T=0,j=P.length;T<j;++T){const J=P[T],I=J.start,B=J.count;for(let k=I,nt=I+B;k<nt;k+=3)S(i[k+0],i[k+1],i[k+2])}const y=new L,R=new L,U=new L,W=new L;function v(T){U.fromArray(s,T*3),W.copy(U);const j=c[T];y.copy(j),y.sub(U.multiplyScalar(U.dot(j))).normalize(),R.crossVectors(W,j);const I=R.dot(h[T])<0?-1:1;l[T*4]=y.x,l[T*4+1]=y.y,l[T*4+2]=y.z,l[T*4+3]=I}for(let T=0,j=P.length;T<j;++T){const J=P[T],I=J.start,B=J.count;for(let k=I,nt=I+B;k<nt;k+=3)v(i[k+0]),v(i[k+1]),v(i[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new ye(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ta=new Zt,Xe=new Ts,tr=new yr,ba=new L,Qn=new L,$n=new L,ti=new L,Qr=new L,er=new L,nr=new yt,ir=new yt,rr=new yt,wa=new L,Ra=new L,Ca=new L,sr=new L,ar=new L;class on extends de{constructor(t=new Ve,e=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){er.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Qr.fromBufferAttribute(d,t),o?er.addScaledVector(Qr,h):er.addScaledVector(Qr.sub(e),h))}e.add(er)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere),tr.applyMatrix4(s),Xe.copy(t.ray).recast(t.near),!(tr.containsPoint(Xe.origin)===!1&&(Xe.intersectSphere(tr,ba)===null||Xe.origin.distanceToSquared(ba)>(t.far-t.near)**2))&&(Ta.copy(s).invert(),Xe.copy(t.ray).applyMatrix4(Ta),!(i.boundingBox!==null&&Xe.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let i;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){const _=d[p],m=s[_.materialIndex],u=Math.max(_.start,f.start),A=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let S=u,P=A;S<P;S+=3){const y=o.getX(S),R=o.getX(S+1),U=o.getX(S+2);i=or(this,m,t,Xe,l,c,h,y,R,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let _=p,m=g;_<m;_+=3){const u=o.getX(_),A=o.getX(_+1),S=o.getX(_+2);i=or(this,s,t,Xe,l,c,h,u,A,S),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){const _=d[p],m=s[_.materialIndex],u=Math.max(_.start,f.start),A=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let S=u,P=A;S<P;S+=3){const y=S,R=S+1,U=S+2;i=or(this,m,t,Xe,l,c,h,y,R,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let _=p,m=g;_<m;_+=3){const u=_,A=_+1,S=_+2;i=or(this,s,t,Xe,l,c,h,u,A,S),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}}function Lc(n,t,e,i,r,s,o,a){let l;if(t.side===Te?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===hn,a),l===null)return null;ar.copy(a),ar.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ar);return c<e.near||c>e.far?null:{distance:c,point:ar.clone(),object:n}}function or(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Qn),n.getVertexPosition(l,$n),n.getVertexPosition(c,ti);const h=Lc(n,t,e,i,Qn,$n,ti,sr);if(h){r&&(nr.fromBufferAttribute(r,a),ir.fromBufferAttribute(r,l),rr.fromBufferAttribute(r,c),h.uv=Ue.getInterpolation(sr,Qn,$n,ti,nr,ir,rr,new yt)),s&&(nr.fromBufferAttribute(s,a),ir.fromBufferAttribute(s,l),rr.fromBufferAttribute(s,c),h.uv1=Ue.getInterpolation(sr,Qn,$n,ti,nr,ir,rr,new yt),h.uv2=h.uv1),o&&(wa.fromBufferAttribute(o,a),Ra.fromBufferAttribute(o,l),Ca.fromBufferAttribute(o,c),h.normal=Ue.getInterpolation(sr,Qn,$n,ti,wa,Ra,Ca,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Ue.getNormal(Qn,$n,ti,d.normal),h.face=d}return h}class Vi extends Ve{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(d,2));function g(_,m,u,A,S,P,y,R,U,W,v){const T=P/U,j=y/W,J=P/2,I=y/2,B=R/2,k=U+1,nt=W+1;let q=0,X=0;const Z=new L;for(let tt=0;tt<nt;tt++){const mt=tt*j-I;for(let ct=0;ct<k;ct++){const z=ct*T-J;Z[_]=z*A,Z[m]=mt*S,Z[u]=B,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[u]=R>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(ct/U),d.push(1-tt/W),q+=1}}for(let tt=0;tt<W;tt++)for(let mt=0;mt<U;mt++){const ct=f+mt+k*tt,z=f+mt+k*(tt+1),K=f+(mt+1)+k*(tt+1),rt=f+(mt+1)+k*tt;l.push(ct,z,rt),l.push(z,K,rt),X+=6}a.addGroup(p,X,v),p+=X,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Se(n){const t={};for(let e=0;e<n.length;e++){const i=xi(n[e]);for(const r in i)t[r]=i[r]}return t}function Dc(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Po(n){return n.getRenderTarget()===null?n.outputColorSpace:Ke}const Uc={clone:xi,merge:Se};var Ic=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ic,this.fragmentShader=Nc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=Dc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Lo extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ie extends Lo{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Li*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Li*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Li*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ei=-90,ni=1;class Fc extends de{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Ie(ei,ni,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Ie(ei,ni,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ie(ei,ni,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ie(ei,ni,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ie(ei,ni,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ie(ei,ni,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,f=t.xr.enabled;t.toneMapping=ln,t.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,r),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=p,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Do extends Ae{constructor(t,e,i,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Oc extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===In?wt:Nn),this.texture=new Do(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:De}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vi(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Te,blending:xn});s.uniforms.tEquirect.value=e;const o=new on(r,s),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=De),new Fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const $r=new L,Bc=new L,zc=new Nt;class wn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=$r.subVectors(i,e).cross(Bc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta($r),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||zc.getNormalMatrix(t),r=this.coplanarPoint($r).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bn=new yr,lr=new L;class Uo{constructor(t=new wn,e=new wn,i=new wn,r=new wn,s=new wn,o=new wn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],d=i[7],f=i[8],p=i[9],g=i[10],_=i[11],m=i[12],u=i[13],A=i[14],S=i[15];return e[0].setComponents(a-r,d-l,_-f,S-m).normalize(),e[1].setComponents(a+r,d+l,_+f,S+m).normalize(),e[2].setComponents(a+s,d+c,_+p,S+u).normalize(),e[3].setComponents(a-s,d-c,_-p,S-u).normalize(),e[4].setComponents(a-o,d-h,_-g,S-A).normalize(),e[5].setComponents(a+o,d+h,_+g,S+A).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bn)}intersectsSprite(t){return bn.center.set(0,0,0),bn.radius=.7071067811865476,bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(bn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(lr.x=r.normal.x>0?t.max.x:t.min.x,lr.y=r.normal.y>0?t.max.y:t.min.y,lr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Io(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Gc(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,f=c.usage,p=n.createBuffer();n.bindBuffer(h,p),n.bufferData(h,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const f=h.array,p=h.updateRange;n.bindBuffer(d,c),p.count===-1?n.bufferSubData(d,0,f):(e?n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class Rs extends Ve{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const A=u*f-o;for(let S=0;S<c;S++){const P=S*d-s;g.push(P,-A,0),_.push(0,0,1),m.push(S/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let A=0;A<a;A++){const S=A+c*u,P=A+c*(u+1),y=A+1+c*(u+1),R=A+1+c*u;p.push(S,P,R),p.push(P,y,R)}this.setIndex(p),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(_,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qc="vec3 transformed = vec3( position );",jc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zc=`#ifdef USE_IRIDESCENCE
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
#endif`,Jc=`#ifdef USE_BUMPMAP
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
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ah=`#define PI 3.141592653589793
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
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lh=`vec3 transformedNormal = objectNormal;
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
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ph=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_h=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ah=`#ifdef USE_GRADIENTMAP
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
}`,Th=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ch=`uniform bool receiveShadow;
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
#endif`,Ph=`#if defined( USE_ENVMAP )
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
#endif`,Lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nh=`PhysicalMaterial material;
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
#endif`,Fh=`struct PhysicalMaterial {
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
}`,Oh=`
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
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
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
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Gh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wh=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qh=`#if defined( USE_POINTS_UV )
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
#endif`,jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jh=`#ifdef USE_MORPHNORMALS
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
#endif`,Qh=`#ifdef USE_MORPHTARGETS
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
#endif`,$h=`#ifdef USE_MORPHTARGETS
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
#endif`,tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,eu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,su=`#ifdef USE_NORMALMAP
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
#endif`,au=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Su=`float getShadowMask() {
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
}`,Eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yu=`#ifdef USE_SKINNING
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
#endif`,Au=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tu=`#ifdef USE_SKINNING
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
#endif`,bu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ru=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pu=`#ifdef USE_TRANSMISSION
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
#endif`,Lu=`#ifdef USE_TRANSMISSION
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
#endif`,Du=`#ifdef USE_UV
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
#endif`,Uu=`#ifdef USE_UV
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
#endif`,Iu=`#ifdef USE_UV
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
#endif`,Nu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ou=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ku=`#include <common>
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
}`,Vu=`#if DEPTH_PACKING == 3200
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
}`,Wu=`#define DISTANCE
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
}`,Xu=`#define DISTANCE
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
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ju=`uniform float scale;
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
}`,Ku=`uniform vec3 diffuse;
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
}`,Zu=`#include <common>
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
}`,Ju=`uniform vec3 diffuse;
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
}`,Qu=`#define LAMBERT
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
}`,$u=`#define LAMBERT
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
}`,td=`#define MATCAP
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
}`,ed=`#define MATCAP
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
}`,nd=`#define NORMAL
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
}`,id=`#define NORMAL
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
}`,rd=`#define PHONG
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
}`,sd=`#define PHONG
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
}`,ad=`#define STANDARD
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
}`,od=`#define STANDARD
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
}`,ld=`#define TOON
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
}`,cd=`#define TOON
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
}`,hd=`uniform float size;
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
}`,ud=`uniform vec3 diffuse;
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
}`,dd=`#include <common>
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
}`,fd=`uniform vec3 color;
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
}`,pd=`uniform float rotation;
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
}`,md=`uniform vec3 diffuse;
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
}`,Pt={alphamap_fragment:Hc,alphamap_pars_fragment:kc,alphatest_fragment:Vc,alphatest_pars_fragment:Wc,aomap_fragment:Xc,aomap_pars_fragment:Yc,begin_vertex:qc,beginnormal_vertex:jc,bsdfs:Kc,iridescence_fragment:Zc,bumpmap_pars_fragment:Jc,clipping_planes_fragment:Qc,clipping_planes_pars_fragment:$c,clipping_planes_pars_vertex:th,clipping_planes_vertex:eh,color_fragment:nh,color_pars_fragment:ih,color_pars_vertex:rh,color_vertex:sh,common:ah,cube_uv_reflection_fragment:oh,defaultnormal_vertex:lh,displacementmap_pars_vertex:ch,displacementmap_vertex:hh,emissivemap_fragment:uh,emissivemap_pars_fragment:dh,encodings_fragment:fh,encodings_pars_fragment:ph,envmap_fragment:mh,envmap_common_pars_fragment:gh,envmap_pars_fragment:_h,envmap_pars_vertex:vh,envmap_physical_pars_fragment:Ph,envmap_vertex:xh,fog_vertex:Mh,fog_pars_vertex:Sh,fog_fragment:Eh,fog_pars_fragment:yh,gradientmap_pars_fragment:Ah,lightmap_fragment:Th,lightmap_pars_fragment:bh,lights_lambert_fragment:wh,lights_lambert_pars_fragment:Rh,lights_pars_begin:Ch,lights_toon_fragment:Lh,lights_toon_pars_fragment:Dh,lights_phong_fragment:Uh,lights_phong_pars_fragment:Ih,lights_physical_fragment:Nh,lights_physical_pars_fragment:Fh,lights_fragment_begin:Oh,lights_fragment_maps:Bh,lights_fragment_end:zh,logdepthbuf_fragment:Gh,logdepthbuf_pars_fragment:Hh,logdepthbuf_pars_vertex:kh,logdepthbuf_vertex:Vh,map_fragment:Wh,map_pars_fragment:Xh,map_particle_fragment:Yh,map_particle_pars_fragment:qh,metalnessmap_fragment:jh,metalnessmap_pars_fragment:Kh,morphcolor_vertex:Zh,morphnormal_vertex:Jh,morphtarget_pars_vertex:Qh,morphtarget_vertex:$h,normal_fragment_begin:tu,normal_fragment_maps:eu,normal_pars_fragment:nu,normal_pars_vertex:iu,normal_vertex:ru,normalmap_pars_fragment:su,clearcoat_normal_fragment_begin:au,clearcoat_normal_fragment_maps:ou,clearcoat_pars_fragment:lu,iridescence_pars_fragment:cu,output_fragment:hu,packing:uu,premultiplied_alpha_fragment:du,project_vertex:fu,dithering_fragment:pu,dithering_pars_fragment:mu,roughnessmap_fragment:gu,roughnessmap_pars_fragment:_u,shadowmap_pars_fragment:vu,shadowmap_pars_vertex:xu,shadowmap_vertex:Mu,shadowmask_pars_fragment:Su,skinbase_vertex:Eu,skinning_pars_vertex:yu,skinning_vertex:Au,skinnormal_vertex:Tu,specularmap_fragment:bu,specularmap_pars_fragment:wu,tonemapping_fragment:Ru,tonemapping_pars_fragment:Cu,transmission_fragment:Pu,transmission_pars_fragment:Lu,uv_pars_fragment:Du,uv_pars_vertex:Uu,uv_vertex:Iu,worldpos_vertex:Nu,background_vert:Fu,background_frag:Ou,backgroundCube_vert:Bu,backgroundCube_frag:zu,cube_vert:Gu,cube_frag:Hu,depth_vert:ku,depth_frag:Vu,distanceRGBA_vert:Wu,distanceRGBA_frag:Xu,equirect_vert:Yu,equirect_frag:qu,linedashed_vert:ju,linedashed_frag:Ku,meshbasic_vert:Zu,meshbasic_frag:Ju,meshlambert_vert:Qu,meshlambert_frag:$u,meshmatcap_vert:td,meshmatcap_frag:ed,meshnormal_vert:nd,meshnormal_frag:id,meshphong_vert:rd,meshphong_frag:sd,meshphysical_vert:ad,meshphysical_frag:od,meshtoon_vert:ld,meshtoon_frag:cd,points_vert:hd,points_frag:ud,shadow_vert:dd,shadow_frag:fd,sprite_vert:pd,sprite_frag:md},st={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}}},Ye={basic:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Se([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Se([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Se([st.points,st.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Se([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Se([st.common,st.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Se([st.sprite,st.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Se([st.common,st.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Se([st.lights,st.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Ye.physical={uniforms:Se([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const cr={r:0,b:0,g:0};function gd(n,t,e,i,r,s,o){const a=new Ot(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function g(m,u){let A=!1,S=u.isScene===!0?u.background:null;switch(S&&S.isTexture&&(S=(u.backgroundBlurriness>0?e:t).get(S)),S===null?_(a,l):S&&S.isColor&&(_(S,1),A=!0),n.xr.getEnvironmentBlendMode()){case"opaque":A=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),A=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),A=!0;break}(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Er)?(h===void 0&&(h=new on(new Vi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:xi(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,U,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=S.colorSpace!==wt,(d!==S||f!==S.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new on(new Rs(2,2),new Bn({name:"BackgroundMaterial",uniforms:xi(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=S.colorSpace!==wt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,u){m.getRGB(cr,Po(n)),i.buffers.color.setClear(cr.r,cr.g,cr.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function _d(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function d(B,k,nt,q,X){let Z=!1;if(o){const tt=_(q,nt,k);c!==tt&&(c=tt,p(c.object)),Z=u(B,q,nt,X),Z&&A(B,q,nt,X)}else{const tt=k.wireframe===!0;(c.geometry!==q.id||c.program!==nt.id||c.wireframe!==tt)&&(c.geometry=q.id,c.program=nt.id,c.wireframe=tt,Z=!0)}X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,W(B,k,nt,q),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(B){return i.isWebGL2?n.bindVertexArray(B):s.bindVertexArrayOES(B)}function g(B){return i.isWebGL2?n.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function _(B,k,nt){const q=nt.wireframe===!0;let X=a[B.id];X===void 0&&(X={},a[B.id]=X);let Z=X[k.id];Z===void 0&&(Z={},X[k.id]=Z);let tt=Z[q];return tt===void 0&&(tt=m(f()),Z[q]=tt),tt}function m(B){const k=[],nt=[],q=[];for(let X=0;X<r;X++)k[X]=0,nt[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:nt,attributeDivisors:q,object:B,attributes:{},index:null}}function u(B,k,nt,q){const X=c.attributes,Z=k.attributes;let tt=0;const mt=nt.getAttributes();for(const ct in mt)if(mt[ct].location>=0){const K=X[ct];let rt=Z[ct];if(rt===void 0&&(ct==="instanceMatrix"&&B.instanceMatrix&&(rt=B.instanceMatrix),ct==="instanceColor"&&B.instanceColor&&(rt=B.instanceColor)),K===void 0||K.attribute!==rt||rt&&K.data!==rt.data)return!0;tt++}return c.attributesNum!==tt||c.index!==q}function A(B,k,nt,q){const X={},Z=k.attributes;let tt=0;const mt=nt.getAttributes();for(const ct in mt)if(mt[ct].location>=0){let K=Z[ct];K===void 0&&(ct==="instanceMatrix"&&B.instanceMatrix&&(K=B.instanceMatrix),ct==="instanceColor"&&B.instanceColor&&(K=B.instanceColor));const rt={};rt.attribute=K,K&&K.data&&(rt.data=K.data),X[ct]=rt,tt++}c.attributes=X,c.attributesNum=tt,c.index=q}function S(){const B=c.newAttributes;for(let k=0,nt=B.length;k<nt;k++)B[k]=0}function P(B){y(B,0)}function y(B,k){const nt=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;nt[B]=1,q[B]===0&&(n.enableVertexAttribArray(B),q[B]=1),X[B]!==k&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,k),X[B]=k)}function R(){const B=c.newAttributes,k=c.enabledAttributes;for(let nt=0,q=k.length;nt<q;nt++)k[nt]!==B[nt]&&(n.disableVertexAttribArray(nt),k[nt]=0)}function U(B,k,nt,q,X,Z){i.isWebGL2===!0&&(nt===n.INT||nt===n.UNSIGNED_INT)?n.vertexAttribIPointer(B,k,nt,X,Z):n.vertexAttribPointer(B,k,nt,q,X,Z)}function W(B,k,nt,q){if(i.isWebGL2===!1&&(B.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const X=q.attributes,Z=nt.getAttributes(),tt=k.defaultAttributeValues;for(const mt in Z){const ct=Z[mt];if(ct.location>=0){let z=X[mt];if(z===void 0&&(mt==="instanceMatrix"&&B.instanceMatrix&&(z=B.instanceMatrix),mt==="instanceColor"&&B.instanceColor&&(z=B.instanceColor)),z!==void 0){const K=z.normalized,rt=z.itemSize,lt=e.get(z);if(lt===void 0)continue;const C=lt.buffer,At=lt.type,Et=lt.bytesPerElement;if(z.isInterleavedBufferAttribute){const it=z.data,Mt=it.stride,zt=z.offset;if(it.isInstancedInterleavedBuffer){for(let vt=0;vt<ct.locationSize;vt++)y(ct.location+vt,it.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let vt=0;vt<ct.locationSize;vt++)P(ct.location+vt);n.bindBuffer(n.ARRAY_BUFFER,C);for(let vt=0;vt<ct.locationSize;vt++)U(ct.location+vt,rt/ct.locationSize,At,K,Mt*Et,(zt+rt/ct.locationSize*vt)*Et)}else{if(z.isInstancedBufferAttribute){for(let it=0;it<ct.locationSize;it++)y(ct.location+it,z.meshPerAttribute);B.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let it=0;it<ct.locationSize;it++)P(ct.location+it);n.bindBuffer(n.ARRAY_BUFFER,C);for(let it=0;it<ct.locationSize;it++)U(ct.location+it,rt/ct.locationSize,At,K,rt*Et,rt/ct.locationSize*it*Et)}}else if(tt!==void 0){const K=tt[mt];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(ct.location,K);break;case 3:n.vertexAttrib3fv(ct.location,K);break;case 4:n.vertexAttrib4fv(ct.location,K);break;default:n.vertexAttrib1fv(ct.location,K)}}}}R()}function v(){J();for(const B in a){const k=a[B];for(const nt in k){const q=k[nt];for(const X in q)g(q[X].object),delete q[X];delete k[nt]}delete a[B]}}function T(B){if(a[B.id]===void 0)return;const k=a[B.id];for(const nt in k){const q=k[nt];for(const X in q)g(q[X].object),delete q[X];delete k[nt]}delete a[B.id]}function j(B){for(const k in a){const nt=a[k];if(nt[B.id]===void 0)continue;const q=nt[B.id];for(const X in q)g(q[X].object),delete q[X];delete nt[B.id]}}function J(){I(),h=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:j,initAttributes:S,enableAttribute:P,disableUnusedAttributes:R}}function vd(n,t,e,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,h){n.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let f,p;if(r)f=n,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,h,d),e.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function xd(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,P=o||t.has("OES_texture_float"),y=S&&P,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:A,vertexTextures:S,floatFragmentTextures:P,floatVertexTextures:y,maxSamples:R}}function Md(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new wn,a=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const A=s?0:i,S=A*4;let P=u.clippingState||null;l.value=P,P=h(g,f,S,p);for(let y=0;y!==S;++y)P[y]=e[y];u.clippingState=P,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,P=p;S!==_;++S,P+=4)o.copy(d[S]).applyMatrix4(A,a),o.normal.toArray(m,P),m[P+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Sd(n){let t=new WeakMap;function e(o,a){return a===ls?o.mapping=gi:a===cs&&(o.mapping=_i),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ls||a===cs)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Oc(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Ed extends Lo{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ui=4,Pa=[.125,.215,.35,.446,.526,.582],Cn=20,ts=new Ed,La=new Ot;let es=null;const Rn=(1+Math.sqrt(5))/2,ii=1/Rn,Da=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Rn,ii),new L(0,Rn,-ii),new L(ii,0,Rn),new L(-ii,0,Rn),new L(Rn,ii,0),new L(-Rn,ii,0)];class Ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){es=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(es),t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),es=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:De,minFilter:De,generateMipmaps:!1,type:Oi,format:ke,colorSpace:Ke,depthBuffer:!1},r=Ia(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ia(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yd(s)),this._blurMaterial=Ad(s,t,e)}return r}_compileMaterial(t){const e=new on(this._lodPlanes[0],t);this._renderer.compile(e,ts)}_sceneToCubeUV(t,e,i,r){const a=new Ie(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(La),h.toneMapping=ln,h.autoClear=!1;const p=new ws({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new on(new Vi,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(La),_=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):A===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const S=this._cubeSize;hr(r,A*S,u>2?S:0,S,S),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===gi||t.mapping===_i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;hr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ts)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Da[(r-1)%Da.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new on(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cn-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Cn;m>Cn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cn}`);const u=[];let A=0;for(let U=0;U<Cn;++U){const W=U/_,v=Math.exp(-W*W/2);u.push(v),U===0?A+=v:U<m&&(A+=2*v)}for(let U=0;U<u.length;U++)u[U]=u[U]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const P=this._sizeLods[r],y=3*P*(r>S-ui?r-S+ui:0),R=4*(this._cubeSize-P);hr(e,y,R,3*P,2*P),l.setRenderTarget(e),l.render(d,ts)}}function yd(n){const t=[],e=[],i=[];let r=n;const s=n-ui+1+Pa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-ui?l=Pa[o-n+ui-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,A=new Float32Array(_*g*p),S=new Float32Array(m*g*p),P=new Float32Array(u*g*p);for(let R=0;R<p;R++){const U=R%3*2/3-1,W=R>2?0:-1,v=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];A.set(v,_*g*R),S.set(f,m*g*R);const T=[R,R,R,R,R,R];P.set(T,u*g*R)}const y=new Ve;y.setAttribute("position",new ye(A,_)),y.setAttribute("uv",new ye(S,m)),y.setAttribute("faceIndex",new ye(P,u)),t.push(y),r>ui&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ia(n,t,e){const i=new On(n,t,e);return i.texture.mapping=Er,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Ad(n,t,e){const i=new Float32Array(Cn),r=new L(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cs(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Na(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cs(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Fa(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Cs(){return`

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
	`}function Td(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ls||l===cs,h=l===gi||l===_i;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Ua(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){e===null&&(e=new Ua(n));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function bd(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wd(n,t,e,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,u=_.length;m<u;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const A=p.array;_=p.version;for(let S=0,P=A.length;S<P;S+=3){const y=A[S+0],R=A[S+1],U=A[S+2];f.push(y,R,R,U,U,y)}}else{const A=g.array;_=g.version;for(let S=0,P=A.length/3-1;S<P;S+=3){const y=S+0,R=S+1,U=S+2;f.push(y,R,R,U,U,y)}}const m=new(yo(f)?Co:Ro)(f,1);m.version=_;const u=s.get(d);u&&t.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Rd(n,t,e,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,p){n.drawElements(s,p,a,f*l),e.update(p,s,1)}function d(f,p,g){if(g===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,f*l,g),e.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function Cd(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Pd(n,t){return n[0]-t[0]}function Ld(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Dd(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new ue,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let B=function(){J.dispose(),s.delete(h),h.removeEventListener("dispose",B)};_!==void 0&&_.texture.dispose();const A=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let W=0;A===!0&&(W=1),S===!0&&(W=2),P===!0&&(W=3);let v=h.attributes.position.count*W,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const j=new Float32Array(v*T*4*g),J=new bo(j,v,T,g);J.type=Dn,J.needsUpdate=!0;const I=W*4;for(let k=0;k<g;k++){const nt=y[k],q=R[k],X=U[k],Z=v*T*4*k;for(let tt=0;tt<nt.count;tt++){const mt=tt*I;A===!0&&(o.fromBufferAttribute(nt,tt),j[Z+mt+0]=o.x,j[Z+mt+1]=o.y,j[Z+mt+2]=o.z,j[Z+mt+3]=0),S===!0&&(o.fromBufferAttribute(q,tt),j[Z+mt+4]=o.x,j[Z+mt+5]=o.y,j[Z+mt+6]=o.z,j[Z+mt+7]=0),P===!0&&(o.fromBufferAttribute(X,tt),j[Z+mt+8]=o.x,j[Z+mt+9]=o.y,j[Z+mt+10]=o.z,j[Z+mt+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:J,size:new yt(v,T)},s.set(h,_),h.addEventListener("dispose",B)}let m=0;for(let A=0;A<f.length;A++)m+=f[A];const u=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=f===void 0?0:f.length;let g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let S=0;S<p;S++)g[S]=[S,0];i[h.id]=g}for(let S=0;S<p;S++){const P=g[S];P[0]=S,P[1]=f[S]}g.sort(Ld);for(let S=0;S<8;S++)S<p&&g[S][1]?(a[S][0]=g[S][0],a[S][1]=g[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Pd);const _=h.morphAttributes.position,m=h.morphAttributes.normal;let u=0;for(let S=0;S<8;S++){const P=a[S],y=P[0],R=P[1];y!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+S)!==_[y]&&h.setAttribute("morphTarget"+S,_[y]),m&&h.getAttribute("morphNormal"+S)!==m[y]&&h.setAttribute("morphNormal"+S,m[y]),r[S]=R,u+=R):(_&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),m&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const A=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Ud(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);return r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const No=new Ae,Fo=new bo,Oo=new Sc,Bo=new Do,Oa=[],Ba=[],za=new Float32Array(16),Ga=new Float32Array(9),Ha=new Float32Array(4);function Si(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Oa[r];if(s===void 0&&(s=new Float32Array(r),Oa[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ae(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Tr(n,t){let e=Ba[t];e===void 0&&(e=new Int32Array(t),Ba[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Id(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Nd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;n.uniform2fv(this.addr,t),ae(e,t)}}function Fd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(se(e,t))return;n.uniform3fv(this.addr,t),ae(e,t)}}function Od(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;n.uniform4fv(this.addr,t),ae(e,t)}}function Bd(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ae(e,t)}else{if(se(e,i))return;Ha.set(i),n.uniformMatrix2fv(this.addr,!1,Ha),ae(e,i)}}function zd(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ae(e,t)}else{if(se(e,i))return;Ga.set(i),n.uniformMatrix3fv(this.addr,!1,Ga),ae(e,i)}}function Gd(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ae(e,t)}else{if(se(e,i))return;za.set(i),n.uniformMatrix4fv(this.addr,!1,za),ae(e,i)}}function Hd(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function kd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;n.uniform2iv(this.addr,t),ae(e,t)}}function Vd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;n.uniform3iv(this.addr,t),ae(e,t)}}function Wd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;n.uniform4iv(this.addr,t),ae(e,t)}}function Xd(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Yd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;n.uniform2uiv(this.addr,t),ae(e,t)}}function qd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;n.uniform3uiv(this.addr,t),ae(e,t)}}function jd(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;n.uniform4uiv(this.addr,t),ae(e,t)}}function Kd(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2D(t||No,r)}function Zd(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Oo,r)}function Jd(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Bo,r)}function Qd(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Fo,r)}function $d(n){switch(n){case 5126:return Id;case 35664:return Nd;case 35665:return Fd;case 35666:return Od;case 35674:return Bd;case 35675:return zd;case 35676:return Gd;case 5124:case 35670:return Hd;case 35667:case 35671:return kd;case 35668:case 35672:return Vd;case 35669:case 35673:return Wd;case 5125:return Xd;case 36294:return Yd;case 36295:return qd;case 36296:return jd;case 35678:case 36198:case 36298:case 36306:case 35682:return Kd;case 35679:case 36299:case 36307:return Zd;case 35680:case 36300:case 36308:case 36293:return Jd;case 36289:case 36303:case 36311:case 36292:return Qd}}function tf(n,t){n.uniform1fv(this.addr,t)}function ef(n,t){const e=Si(t,this.size,2);n.uniform2fv(this.addr,e)}function nf(n,t){const e=Si(t,this.size,3);n.uniform3fv(this.addr,e)}function rf(n,t){const e=Si(t,this.size,4);n.uniform4fv(this.addr,e)}function sf(n,t){const e=Si(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function af(n,t){const e=Si(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function of(n,t){const e=Si(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function lf(n,t){n.uniform1iv(this.addr,t)}function cf(n,t){n.uniform2iv(this.addr,t)}function hf(n,t){n.uniform3iv(this.addr,t)}function uf(n,t){n.uniform4iv(this.addr,t)}function df(n,t){n.uniform1uiv(this.addr,t)}function ff(n,t){n.uniform2uiv(this.addr,t)}function pf(n,t){n.uniform3uiv(this.addr,t)}function mf(n,t){n.uniform4uiv(this.addr,t)}function gf(n,t,e){const i=this.cache,r=t.length,s=Tr(e,r);se(i,s)||(n.uniform1iv(this.addr,s),ae(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||No,s[o])}function _f(n,t,e){const i=this.cache,r=t.length,s=Tr(e,r);se(i,s)||(n.uniform1iv(this.addr,s),ae(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Oo,s[o])}function vf(n,t,e){const i=this.cache,r=t.length,s=Tr(e,r);se(i,s)||(n.uniform1iv(this.addr,s),ae(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Bo,s[o])}function xf(n,t,e){const i=this.cache,r=t.length,s=Tr(e,r);se(i,s)||(n.uniform1iv(this.addr,s),ae(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Fo,s[o])}function Mf(n){switch(n){case 5126:return tf;case 35664:return ef;case 35665:return nf;case 35666:return rf;case 35674:return sf;case 35675:return af;case 35676:return of;case 5124:case 35670:return lf;case 35667:case 35671:return cf;case 35668:case 35672:return hf;case 35669:case 35673:return uf;case 5125:return df;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return xf}}class Sf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=$d(e.type)}}class Ef{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Mf(e.type)}}class yf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const ns=/(\w+)(\])?(\[|\.)?/g;function ka(n,t){n.seq.push(t),n.map[t.id]=t}function Af(n,t,e){const i=n.name,r=i.length;for(ns.lastIndex=0;;){const s=ns.exec(i),o=ns.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ka(e,c===void 0?new Sf(a,n,t):new Ef(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new yf(a),ka(e,d)),e=d}}}class _r{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Af(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Va(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let Tf=0;function bf(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function wf(n){switch(n){case Ke:return["Linear","( value )"];case wt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Wa(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+bf(n.getShaderSource(t),o)}else return r}function Rf(n,t){const e=wf(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Cf(n,t){let e;switch(t){case Rl:e="Linear";break;case Cl:e="Reinhard";break;case Pl:e="OptimizedCineon";break;case Ll:e="ACESFilmic";break;case Dl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Pf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function Lf(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Df(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Pi(n){return n!==""}function Xa(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ya(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ms(n){return n.replace(Uf,If)}function If(n,t){const e=Pt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ms(e)}const Nf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qa(n){return n.replace(Nf,Ff)}function Ff(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ja(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Of(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fo?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===al?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Bf(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zf(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function Gf(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case go:t="ENVMAP_BLENDING_MULTIPLY";break;case bl:t="ENVMAP_BLENDING_MIX";break;case wl:t="ENVMAP_BLENDING_ADD";break}return t}function Hf(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function kf(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Of(e),c=Bf(e),h=zf(e),d=Gf(e),f=Hf(e),p=e.isWebGL2?"":Pf(e),g=Lf(s),_=r.createProgram();let m,u,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[g].filter(Pi).join(`
`),m.length>0&&(m+=`
`),u=[p,g].filter(Pi).join(`
`),u.length>0&&(u+=`
`)):(m=[ja(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),u=[p,ja(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ln?"#define TONE_MAPPING":"",e.toneMapping!==ln?Pt.tonemapping_pars_fragment:"",e.toneMapping!==ln?Cf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.encodings_pars_fragment,Rf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pi).join(`
`)),o=ms(o),o=Xa(o,e),o=Ya(o,e),a=ms(a),a=Xa(a,e),a=Ya(a,e),o=qa(o),a=qa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=A+m+o,P=A+u+a,y=Va(r,r.VERTEX_SHADER,S),R=Va(r,r.FRAGMENT_SHADER,P);if(r.attachShader(_,y),r.attachShader(_,R),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const v=r.getProgramInfoLog(_).trim(),T=r.getShaderInfoLog(y).trim(),j=r.getShaderInfoLog(R).trim();let J=!0,I=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,y,R);else{const B=Wa(r,y,"vertex"),k=Wa(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+B+`
`+k)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(T===""||j==="")&&(I=!1);I&&(this.diagnostics={runnable:J,programLog:v,vertexShader:{log:T,prefix:m},fragmentShader:{log:j,prefix:u}})}r.deleteShader(y),r.deleteShader(R);let U;this.getUniforms=function(){return U===void 0&&(U=new _r(r,_)),U};let W;return this.getAttributes=function(){return W===void 0&&(W=Df(r,_)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=e.shaderName,this.id=Tf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=R,this}let Vf=0;class Wf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Xf(t),e.set(t,i)),i}}class Xf{constructor(t){this.id=Vf++,this.code=t,this.usedTimes=0}}function Yf(n,t,e,i,r,s,o){const a=new bs,l=new Wf,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,T,j,J,I){const B=J.fog,k=I.geometry,nt=v.isMeshStandardMaterial?J.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||nt),X=q&&q.mapping===Er?q.image.height:null,Z=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const tt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,mt=tt!==void 0?tt.length:0;let ct=0;k.morphAttributes.position!==void 0&&(ct=1),k.morphAttributes.normal!==void 0&&(ct=2),k.morphAttributes.color!==void 0&&(ct=3);let z,K,rt,lt;if(Z){const Ht=Ye[Z];z=Ht.vertexShader,K=Ht.fragmentShader}else z=v.vertexShader,K=v.fragmentShader,l.update(v),rt=l.getVertexShaderID(v),lt=l.getFragmentShaderID(v);const C=n.getRenderTarget(),At=I.isInstancedMesh===!0,Et=!!v.map,it=!!v.matcap,Mt=!!q,zt=!!v.aoMap,vt=!!v.lightMap,Rt=!!v.bumpMap,Jt=!!v.normalMap,jt=!!v.displacementMap,ne=!!v.emissiveMap,$t=!!v.metalnessMap,Bt=!!v.roughnessMap,Xt=v.clearcoat>0,fe=v.iridescence>0,E=v.sheen>0,x=v.transmission>0,O=Xt&&!!v.clearcoatMap,Q=Xt&&!!v.clearcoatNormalMap,et=Xt&&!!v.clearcoatRoughnessMap,at=fe&&!!v.iridescenceMap,b=fe&&!!v.iridescenceThicknessMap,Y=E&&!!v.sheenColorMap,F=E&&!!v.sheenRoughnessMap,ot=!!v.specularMap,ft=!!v.specularColorMap,gt=!!v.specularIntensityMap,ht=x&&!!v.transmissionMap,pt=x&&!!v.thicknessMap,Tt=!!v.gradientMap,Lt=!!v.alphaMap,te=v.alphaTest>0,w=!!v.extensions,G=!!k.attributes.uv1,$=!!k.attributes.uv2,ut=!!k.attributes.uv3;return{isWebGL2:h,shaderID:Z,shaderName:v.type,vertexShader:z,fragmentShader:K,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:lt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:At,instancingColor:At&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:C===null?n.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ke,map:Et,matcap:it,envMap:Mt,envMapMode:Mt&&q.mapping,envMapCubeUVHeight:X,aoMap:zt,lightMap:vt,bumpMap:Rt,normalMap:Jt,displacementMap:f&&jt,emissiveMap:ne,normalMapObjectSpace:Jt&&v.normalMapType===Ql,normalMapTangentSpace:Jt&&v.normalMapType===Jl,metalnessMap:$t,roughnessMap:Bt,clearcoat:Xt,clearcoatMap:O,clearcoatNormalMap:Q,clearcoatRoughnessMap:et,iridescence:fe,iridescenceMap:at,iridescenceThicknessMap:b,sheen:E,sheenColorMap:Y,sheenRoughnessMap:F,specularMap:ot,specularColorMap:ft,specularIntensityMap:gt,transmission:x,transmissionMap:ht,thicknessMap:pt,gradientMap:Tt,opaque:v.transparent===!1&&v.blending===fi,alphaMap:Lt,alphaTest:te,combine:v.combine,mapUv:Et&&_(v.map.channel),aoMapUv:zt&&_(v.aoMap.channel),lightMapUv:vt&&_(v.lightMap.channel),bumpMapUv:Rt&&_(v.bumpMap.channel),normalMapUv:Jt&&_(v.normalMap.channel),displacementMapUv:jt&&_(v.displacementMap.channel),emissiveMapUv:ne&&_(v.emissiveMap.channel),metalnessMapUv:$t&&_(v.metalnessMap.channel),roughnessMapUv:Bt&&_(v.roughnessMap.channel),clearcoatMapUv:O&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:b&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:F&&_(v.sheenRoughnessMap.channel),specularMapUv:ot&&_(v.specularMap.channel),specularColorMapUv:ft&&_(v.specularColorMap.channel),specularIntensityMapUv:gt&&_(v.specularIntensityMap.channel),transmissionMapUv:ht&&_(v.transmissionMap.channel),thicknessMapUv:pt&&_(v.thicknessMap.channel),alphaMapUv:Lt&&_(v.alphaMap.channel),vertexTangents:Jt&&!!k.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:G,vertexUv2s:$,vertexUv3s:ut,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Et||Lt),fog:!!B,useFog:v.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:ct,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:ln,useLegacyLights:n.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sn,flipSided:v.side===Te,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:w&&v.extensions.derivatives===!0,extensionFragDepth:w&&v.extensions.fragDepth===!0,extensionDrawBuffers:w&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:w&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function u(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const j in v.defines)T.push(j),T.push(v.defines[j]);return v.isRawShaderMaterial===!1&&(A(T,v),S(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function A(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),v.push(a.mask)}function P(v){const T=g[v.type];let j;if(T){const J=Ye[T];j=Uc.clone(J.uniforms)}else j=v.uniforms;return j}function y(v,T){let j;for(let J=0,I=c.length;J<I;J++){const B=c[J];if(B.cacheKey===T){j=B,++j.usedTimes;break}}return j===void 0&&(j=new kf(n,T,v,s),c.push(j)),j}function R(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function U(v){l.remove(v)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:P,acquireProgram:y,releaseProgram:R,releaseShaderCache:U,programs:c,dispose:W}}function qf(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function jf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ka(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Za(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),t++,u}function a(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):e.push(u)}function l(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||jf),i.length>1&&i.sort(f||Ka),r.length>1&&r.sort(f||Ka)}function h(){for(let d=t,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Kf(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Za,n.set(i,[o])):r>=s.length?(o=new Za,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Zf(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ot};break;case"SpotLight":e={position:new L,direction:new L,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Jf(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Qf=0;function $f(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function tp(n,t){const e=new Zf,i=Jf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new L);const s=new L,o=new Zt,a=new Zt;function l(h,d){let f=0,p=0,g=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let _=0,m=0,u=0,A=0,S=0,P=0,y=0,R=0,U=0,W=0;h.sort($f);const v=d===!0?Math.PI:1;for(let j=0,J=h.length;j<J;j++){const I=h[j],B=I.color,k=I.intensity,nt=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=B.r*k*v,p+=B.g*k*v,g+=B.b*k*v;else if(I.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(I.sh.coefficients[X],k);else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const Z=I.shadow,tt=i.get(I);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,r.directionalShadow[_]=tt,r.directionalShadowMap[_]=q,r.directionalShadowMatrix[_]=I.shadow.matrix,P++}r.directional[_]=X,_++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(B).multiplyScalar(k*v),X.distance=nt,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,r.spot[u]=X;const Z=I.shadow;if(I.map&&(r.spotLightMap[U]=I.map,U++,Z.updateMatrices(I),I.castShadow&&W++),r.spotLightMatrix[u]=Z.matrix,I.castShadow){const tt=i.get(I);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,r.spotShadow[u]=tt,r.spotShadowMap[u]=q,R++}u++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(B).multiplyScalar(k),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),r.rectArea[A]=X,A++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*v),X.distance=I.distance,X.decay=I.decay,I.castShadow){const Z=I.shadow,tt=i.get(I);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,tt.shadowCameraNear=Z.camera.near,tt.shadowCameraFar=Z.camera.far,r.pointShadow[m]=tt,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=I.shadow.matrix,y++}r.point[m]=X,m++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(k*v),X.groundColor.copy(I.groundColor).multiplyScalar(k*v),r.hemi[S]=X,S++}}A>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=st.LTC_FLOAT_1,r.rectAreaLTC2=st.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=st.LTC_HALF_1,r.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==_||T.pointLength!==m||T.spotLength!==u||T.rectAreaLength!==A||T.hemiLength!==S||T.numDirectionalShadows!==P||T.numPointShadows!==y||T.numSpotShadows!==R||T.numSpotMaps!==U)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=A,r.point.length=m,r.hemi.length=S,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=R+U-W,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=W,T.directionalLength=_,T.pointLength=m,T.spotLength=u,T.rectAreaLength=A,T.hemiLength=S,T.numDirectionalShadows=P,T.numPointShadows=y,T.numSpotShadows=R,T.numSpotMaps=U,r.version=Qf++)}function c(h,d){let f=0,p=0,g=0,_=0,m=0;const u=d.matrixWorldInverse;for(let A=0,S=h.length;A<S;A++){const P=h[A];if(P.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),f++}else if(P.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(P.matrixWorld),y.position.applyMatrix4(u),y.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),g++}else if(P.isRectAreaLight){const y=r.rectArea[_];y.position.setFromMatrixPosition(P.matrixWorld),y.position.applyMatrix4(u),a.identity(),o.copy(P.matrixWorld),o.premultiply(u),a.extractRotation(o),y.halfWidth.set(P.width*.5,0,0),y.halfHeight.set(0,P.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(P.isPointLight){const y=r.point[p];y.position.setFromMatrixPosition(P.matrixWorld),y.position.applyMatrix4(u),p++}else if(P.isHemisphereLight){const y=r.hemi[m];y.direction.setFromMatrixPosition(P.matrixWorld),y.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Ja(n,t){const e=new tp(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){e.setup(i,d)}function c(d){e.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ep(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Ja(n,t),e.set(s,[l])):o>=a.length?(l=new Ja(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class np extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ip extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sp=`uniform sampler2D shadow_pass;
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
}`;function ap(n,t,e){let i=new Uo;const r=new yt,s=new yt,o=new ue,a=new np({depthPacking:Zl}),l=new ip,c={},h=e.maxTextureSize,d={[hn]:Te,[Te]:hn,[sn]:sn},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:rp,fragmentShader:sp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new on(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let u=this.type;this.render=function(y,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const W=n.getRenderTarget(),v=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),j=n.state;j.setBlending(xn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const J=u!==nn&&this.type===nn,I=u===nn&&this.type!==nn;for(let B=0,k=y.length;B<k;B++){const nt=y[B],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const X=q.getFrameExtents();if(r.multiply(X),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,q.mapSize.y=s.y)),q.map===null||J===!0||I===!0){const tt=this.type!==nn?{minFilter:Ee,magFilter:Ee}:{};q.map!==null&&q.map.dispose(),q.map=new On(r.x,r.y,tt),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const Z=q.getViewportCount();for(let tt=0;tt<Z;tt++){const mt=q.getViewport(tt);o.set(s.x*mt.x,s.y*mt.y,s.x*mt.z,s.y*mt.w),j.viewport(o),q.updateMatrices(nt,tt),i=q.getFrustum(),P(R,U,q.camera,nt,this.type)}q.isPointLightShadow!==!0&&this.type===nn&&A(q,U),q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(W,v,T)};function A(y,R){const U=t.update(_);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new On(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,_,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(R,null,U,p,_,null)}function S(y,R,U,W){let v=null;const T=U.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(T!==void 0)v=T;else if(v=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const j=v.uuid,J=R.uuid;let I=c[j];I===void 0&&(I={},c[j]=I);let B=I[J];B===void 0&&(B=v.clone(),I[J]=B),v=B}if(v.visible=R.visible,v.wireframe=R.wireframe,W===nn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const j=n.properties.get(v);j.light=U}return v}function P(y,R,U,W,v){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===nn)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,y.matrixWorld);const J=t.update(y),I=y.material;if(Array.isArray(I)){const B=J.groups;for(let k=0,nt=B.length;k<nt;k++){const q=B[k],X=I[q.materialIndex];if(X&&X.visible){const Z=S(y,X,W,v);n.renderBufferDirect(U,null,J,Z,y,q)}}}else if(I.visible){const B=S(y,I,W,v);n.renderBufferDirect(U,null,J,B,y,null)}}const j=y.children;for(let J=0,I=j.length;J<I;J++)P(j[J],R,U,W,v)}}function op(n,t,e){const i=e.isWebGL2;function r(){let w=!1;const G=new ue;let $=null;const ut=new ue(0,0,0,0);return{setMask:function(_t){$!==_t&&!w&&(n.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){w=_t},setClear:function(_t,Ht,kt,pe,fn){fn===!0&&(_t*=pe,Ht*=pe,kt*=pe),G.set(_t,Ht,kt,pe),ut.equals(G)===!1&&(n.clearColor(_t,Ht,kt,pe),ut.copy(G))},reset:function(){w=!1,$=null,ut.set(-1,0,0,0)}}}function s(){let w=!1,G=null,$=null,ut=null;return{setTest:function(_t){_t?C(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(_t){G!==_t&&!w&&(n.depthMask(_t),G=_t)},setFunc:function(_t){if($!==_t){switch(_t){case xl:n.depthFunc(n.NEVER);break;case Ml:n.depthFunc(n.ALWAYS);break;case Sl:n.depthFunc(n.LESS);break;case os:n.depthFunc(n.LEQUAL);break;case El:n.depthFunc(n.EQUAL);break;case yl:n.depthFunc(n.GEQUAL);break;case Al:n.depthFunc(n.GREATER);break;case Tl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=_t}},setLocked:function(_t){w=_t},setClear:function(_t){ut!==_t&&(n.clearDepth(_t),ut=_t)},reset:function(){w=!1,G=null,$=null,ut=null}}}function o(){let w=!1,G=null,$=null,ut=null,_t=null,Ht=null,kt=null,pe=null,fn=null;return{setTest:function(ee){w||(ee?C(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(ee){G!==ee&&!w&&(n.stencilMask(ee),G=ee)},setFunc:function(ee,Pe,We){($!==ee||ut!==Pe||_t!==We)&&(n.stencilFunc(ee,Pe,We),$=ee,ut=Pe,_t=We)},setOp:function(ee,Pe,We){(Ht!==ee||kt!==Pe||pe!==We)&&(n.stencilOp(ee,Pe,We),Ht=ee,kt=Pe,pe=We)},setLocked:function(ee){w=ee},setClear:function(ee){fn!==ee&&(n.clearStencil(ee),fn=ee)},reset:function(){w=!1,G=null,$=null,ut=null,_t=null,Ht=null,kt=null,pe=null,fn=null}}}const a=new r,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,u=!1,A=null,S=null,P=null,y=null,R=null,U=null,W=null,v=!1,T=null,j=null,J=null,I=null,B=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,q=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),nt=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),nt=q>=2);let Z=null,tt={};const mt=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),z=new ue().fromArray(mt),K=new ue().fromArray(ct);function rt(w,G,$,ut){const _t=new Uint8Array(4),Ht=n.createTexture();n.bindTexture(w,Ht),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<$;kt++)i&&(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)?n.texImage3D(G,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(G+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return Ht}const lt={};lt[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(lt[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),C(n.DEPTH_TEST),l.setFunc(os),jt(!1),ne(Os),C(n.CULL_FACE),Rt(xn);function C(w){f[w]!==!0&&(n.enable(w),f[w]=!0)}function At(w){f[w]!==!1&&(n.disable(w),f[w]=!1)}function Et(w,G){return p[w]!==G?(n.bindFramebuffer(w,G),p[w]=G,i&&(w===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=G),w===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=G)),!0):!1}function it(w,G){let $=_,ut=!1;if(w)if($=g.get(G),$===void 0&&($=[],g.set(G,$)),w.isWebGLMultipleRenderTargets){const _t=w.texture;if($.length!==_t.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Ht=0,kt=_t.length;Ht<kt;Ht++)$[Ht]=n.COLOR_ATTACHMENT0+Ht;$.length=_t.length,ut=!0}}else $[0]!==n.COLOR_ATTACHMENT0&&($[0]=n.COLOR_ATTACHMENT0,ut=!0);else $[0]!==n.BACK&&($[0]=n.BACK,ut=!0);ut&&(e.isWebGL2?n.drawBuffers($):t.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Mt(w){return m!==w?(n.useProgram(w),m=w,!0):!1}const zt={[ci]:n.FUNC_ADD,[ll]:n.FUNC_SUBTRACT,[cl]:n.FUNC_REVERSE_SUBTRACT};if(i)zt[Hs]=n.MIN,zt[ks]=n.MAX;else{const w=t.get("EXT_blend_minmax");w!==null&&(zt[Hs]=w.MIN_EXT,zt[ks]=w.MAX_EXT)}const vt={[hl]:n.ZERO,[ul]:n.ONE,[dl]:n.SRC_COLOR,[po]:n.SRC_ALPHA,[vl]:n.SRC_ALPHA_SATURATE,[gl]:n.DST_COLOR,[pl]:n.DST_ALPHA,[fl]:n.ONE_MINUS_SRC_COLOR,[mo]:n.ONE_MINUS_SRC_ALPHA,[_l]:n.ONE_MINUS_DST_COLOR,[ml]:n.ONE_MINUS_DST_ALPHA};function Rt(w,G,$,ut,_t,Ht,kt,pe){if(w===xn){u===!0&&(At(n.BLEND),u=!1);return}if(u===!1&&(C(n.BLEND),u=!0),w!==ol){if(w!==A||pe!==v){if((S!==ci||R!==ci)&&(n.blendEquation(n.FUNC_ADD),S=ci,R=ci),pe)switch(w){case fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bs:n.blendFunc(n.ONE,n.ONE);break;case zs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gs:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gs:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}P=null,y=null,U=null,W=null,A=w,v=pe}return}_t=_t||G,Ht=Ht||$,kt=kt||ut,(G!==S||_t!==R)&&(n.blendEquationSeparate(zt[G],zt[_t]),S=G,R=_t),($!==P||ut!==y||Ht!==U||kt!==W)&&(n.blendFuncSeparate(vt[$],vt[ut],vt[Ht],vt[kt]),P=$,y=ut,U=Ht,W=kt),A=w,v=!1}function Jt(w,G){w.side===sn?At(n.CULL_FACE):C(n.CULL_FACE);let $=w.side===Te;G&&($=!$),jt($),w.blending===fi&&w.transparent===!1?Rt(xn):Rt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const ut=w.stencilWrite;c.setTest(ut),ut&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Bt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?C(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(w){T!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),T=w)}function ne(w){w!==rl?(C(n.CULL_FACE),w!==j&&(w===Os?n.cullFace(n.BACK):w===sl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),j=w}function $t(w){w!==J&&(nt&&n.lineWidth(w),J=w)}function Bt(w,G,$){w?(C(n.POLYGON_OFFSET_FILL),(I!==G||B!==$)&&(n.polygonOffset(G,$),I=G,B=$)):At(n.POLYGON_OFFSET_FILL)}function Xt(w){w?C(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function fe(w){w===void 0&&(w=n.TEXTURE0+k-1),Z!==w&&(n.activeTexture(w),Z=w)}function E(w,G,$){$===void 0&&(Z===null?$=n.TEXTURE0+k-1:$=Z);let ut=tt[$];ut===void 0&&(ut={type:void 0,texture:void 0},tt[$]=ut),(ut.type!==w||ut.texture!==G)&&(Z!==$&&(n.activeTexture($),Z=$),n.bindTexture(w,G||lt[w]),ut.type=w,ut.texture=G)}function x(){const w=tt[Z];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function et(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function at(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function b(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function F(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ft(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function gt(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ht(w){z.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),z.copy(w))}function pt(w){K.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),K.copy(w))}function Tt(w,G){let $=d.get(G);$===void 0&&($=new WeakMap,d.set(G,$));let ut=$.get(w);ut===void 0&&(ut=n.getUniformBlockIndex(G,w.name),$.set(w,ut))}function Lt(w,G){const ut=d.get(G).get(w);h.get(G)!==ut&&(n.uniformBlockBinding(G,ut,w.__bindingPointIndex),h.set(G,ut))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Z=null,tt={},p={},g=new WeakMap,_=[],m=null,u=!1,A=null,S=null,P=null,y=null,R=null,U=null,W=null,v=!1,T=null,j=null,J=null,I=null,B=null,z.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:C,disable:At,bindFramebuffer:Et,drawBuffers:it,useProgram:Mt,setBlending:Rt,setMaterial:Jt,setFlipSided:jt,setCullFace:ne,setLineWidth:$t,setPolygonOffset:Bt,setScissorTest:Xt,activeTexture:fe,bindTexture:E,unbindTexture:x,compressedTexImage2D:O,compressedTexImage3D:Q,texImage2D:ft,texImage3D:gt,updateUBOMapping:Tt,uniformBlockBinding:Lt,texStorage2D:F,texStorage3D:ot,texSubImage2D:et,texSubImage3D:at,compressedTexSubImage2D:b,compressedTexSubImage3D:Y,scissor:ht,viewport:pt,reset:te}}function lp(n,t,e,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(E,x){return u?new OffscreenCanvas(E,x):zi("canvas")}function S(E,x,O,Q){let et=1;if((E.width>Q||E.height>Q)&&(et=Q/Math.max(E.width,E.height)),et<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const at=x?So:Math.floor,b=at(et*E.width),Y=at(et*E.height);_===void 0&&(_=A(b,Y));const F=O?A(b,Y):_;return F.width=b,F.height=Y,F.getContext("2d").drawImage(E,0,0,b,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+b+"x"+Y+")."),F}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function P(E){return ps(E.width)&&ps(E.height)}function y(E){return a?!1:E.wrapS!==He||E.wrapT!==He||E.minFilter!==Ee&&E.minFilter!==De}function R(E,x){return E.generateMipmaps&&x&&E.minFilter!==Ee&&E.minFilter!==De}function U(E){n.generateMipmap(E)}function W(E,x,O,Q,et=!1){if(a===!1)return x;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let at=x;return x===n.RED&&(O===n.FLOAT&&(at=n.R32F),O===n.HALF_FLOAT&&(at=n.R16F),O===n.UNSIGNED_BYTE&&(at=n.R8)),x===n.RG&&(O===n.FLOAT&&(at=n.RG32F),O===n.HALF_FLOAT&&(at=n.RG16F),O===n.UNSIGNED_BYTE&&(at=n.RG8)),x===n.RGBA&&(O===n.FLOAT&&(at=n.RGBA32F),O===n.HALF_FLOAT&&(at=n.RGBA16F),O===n.UNSIGNED_BYTE&&(at=Q===wt&&et===!1?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(at=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(at=n.RGB5_A1)),(at===n.R16F||at===n.R32F||at===n.RG16F||at===n.RG32F||at===n.RGBA16F||at===n.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function v(E,x,O){return R(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==Ee&&E.minFilter!==De?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function T(E){return E===Ee||E===Vs||E===Pr?n.NEAREST:n.LINEAR}function j(E){const x=E.target;x.removeEventListener("dispose",j),I(x),x.isVideoTexture&&g.delete(x)}function J(E){const x=E.target;x.removeEventListener("dispose",J),k(x)}function I(E){const x=i.get(E);if(x.__webglInit===void 0)return;const O=E.source,Q=m.get(O);if(Q){const et=Q[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&B(E),Object.keys(Q).length===0&&m.delete(O)}i.remove(E)}function B(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const O=E.source,Q=m.get(O);delete Q[x.__cacheKey],o.memory.textures--}function k(E){const x=E.texture,O=i.get(E),Q=i.get(x);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)n.deleteFramebuffer(O.__webglFramebuffer[et]),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[et]);else{if(n.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let et=0;et<O.__webglColorRenderbuffer.length;et++)O.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[et]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let et=0,at=x.length;et<at;et++){const b=i.get(x[et]);b.__webglTexture&&(n.deleteTexture(b.__webglTexture),o.memory.textures--),i.remove(x[et])}i.remove(x),i.remove(E)}let nt=0;function q(){nt=0}function X(){const E=nt;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),nt+=1,E}function Z(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function tt(E,x){const O=i.get(E);if(E.isVideoTexture&&Xt(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{At(O,E,x);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function mt(E,x){const O=i.get(E);if(E.version>0&&O.__version!==E.version){At(O,E,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function ct(E,x){const O=i.get(E);if(E.version>0&&O.__version!==E.version){At(O,E,x);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function z(E,x){const O=i.get(E);if(E.version>0&&O.__version!==E.version){Et(O,E,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}const K={[hs]:n.REPEAT,[He]:n.CLAMP_TO_EDGE,[us]:n.MIRRORED_REPEAT},rt={[Ee]:n.NEAREST,[Vs]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[De]:n.LINEAR,[Ul]:n.LINEAR_MIPMAP_NEAREST,[Fi]:n.LINEAR_MIPMAP_LINEAR};function lt(E,x,O){if(O?(n.texParameteri(E,n.TEXTURE_WRAP_S,K[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,K[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,K[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,rt[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,rt[x.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==He||x.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,T(x.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==Ee&&x.minFilter!==De&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ee||x.minFilter!==Pr&&x.minFilter!==Fi||x.type===Dn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Oi&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function C(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",j));const Q=x.source;let et=m.get(Q);et===void 0&&(et={},m.set(Q,et));const at=Z(x);if(at!==E.__cacheKey){et[at]===void 0&&(et[at]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),et[at].usedTimes++;const b=et[E.__cacheKey];b!==void 0&&(et[E.__cacheKey].usedTimes--,b.usedTimes===0&&B(x)),E.__cacheKey=at,E.__webglTexture=et[at].texture}return O}function At(E,x,O){let Q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=n.TEXTURE_3D);const et=C(E,x),at=x.source;e.bindTexture(Q,E.__webglTexture,n.TEXTURE0+O);const b=i.get(at);if(at.version!==b.__version||et===!0){e.activeTexture(n.TEXTURE0+O),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Y=y(x)&&P(x.image)===!1;let F=S(x.image,Y,!1,h);F=fe(x,F);const ot=P(F)||a,ft=s.convert(x.format,x.colorSpace);let gt=s.convert(x.type),ht=W(x.internalFormat,ft,gt,x.colorSpace);lt(Q,x,ot);let pt;const Tt=x.mipmaps,Lt=a&&x.isVideoTexture!==!0,te=b.__version===void 0||et===!0,w=v(x,F,ot);if(x.isDepthTexture)ht=n.DEPTH_COMPONENT,a?x.type===Dn?ht=n.DEPTH_COMPONENT32F:x.type===Ln?ht=n.DEPTH_COMPONENT24:x.type===pi?ht=n.DEPTH24_STENCIL8:ht=n.DEPTH_COMPONENT16:x.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Un&&ht===n.DEPTH_COMPONENT&&x.type!==vo&&x.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ln,gt=s.convert(x.type)),x.format===vi&&ht===n.DEPTH_COMPONENT&&(ht=n.DEPTH_STENCIL,x.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=pi,gt=s.convert(x.type))),te&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,ht,F.width,F.height):e.texImage2D(n.TEXTURE_2D,0,ht,F.width,F.height,0,ft,gt,null));else if(x.isDataTexture)if(Tt.length>0&&ot){Lt&&te&&e.texStorage2D(n.TEXTURE_2D,w,ht,Tt[0].width,Tt[0].height);for(let G=0,$=Tt.length;G<$;G++)pt=Tt[G],Lt?e.texSubImage2D(n.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,gt,pt.data):e.texImage2D(n.TEXTURE_2D,G,ht,pt.width,pt.height,0,ft,gt,pt.data);x.generateMipmaps=!1}else Lt?(te&&e.texStorage2D(n.TEXTURE_2D,w,ht,F.width,F.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,F.width,F.height,ft,gt,F.data)):e.texImage2D(n.TEXTURE_2D,0,ht,F.width,F.height,0,ft,gt,F.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Lt&&te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,w,ht,Tt[0].width,Tt[0].height,F.depth);for(let G=0,$=Tt.length;G<$;G++)pt=Tt[G],x.format!==ke?ft!==null?Lt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,F.depth,ft,pt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,ht,pt.width,pt.height,F.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,F.depth,ft,gt,pt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,G,ht,pt.width,pt.height,F.depth,0,ft,gt,pt.data)}else{Lt&&te&&e.texStorage2D(n.TEXTURE_2D,w,ht,Tt[0].width,Tt[0].height);for(let G=0,$=Tt.length;G<$;G++)pt=Tt[G],x.format!==ke?ft!==null?Lt?e.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(n.TEXTURE_2D,G,ht,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?e.texSubImage2D(n.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,gt,pt.data):e.texImage2D(n.TEXTURE_2D,G,ht,pt.width,pt.height,0,ft,gt,pt.data)}else if(x.isDataArrayTexture)Lt?(te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,w,ht,F.width,F.height,F.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,ft,gt,F.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,ht,F.width,F.height,F.depth,0,ft,gt,F.data);else if(x.isData3DTexture)Lt?(te&&e.texStorage3D(n.TEXTURE_3D,w,ht,F.width,F.height,F.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,ft,gt,F.data)):e.texImage3D(n.TEXTURE_3D,0,ht,F.width,F.height,F.depth,0,ft,gt,F.data);else if(x.isFramebufferTexture){if(te)if(Lt)e.texStorage2D(n.TEXTURE_2D,w,ht,F.width,F.height);else{let G=F.width,$=F.height;for(let ut=0;ut<w;ut++)e.texImage2D(n.TEXTURE_2D,ut,ht,G,$,0,ft,gt,null),G>>=1,$>>=1}}else if(Tt.length>0&&ot){Lt&&te&&e.texStorage2D(n.TEXTURE_2D,w,ht,Tt[0].width,Tt[0].height);for(let G=0,$=Tt.length;G<$;G++)pt=Tt[G],Lt?e.texSubImage2D(n.TEXTURE_2D,G,0,0,ft,gt,pt):e.texImage2D(n.TEXTURE_2D,G,ht,ft,gt,pt);x.generateMipmaps=!1}else Lt?(te&&e.texStorage2D(n.TEXTURE_2D,w,ht,F.width,F.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,gt,F)):e.texImage2D(n.TEXTURE_2D,0,ht,ft,gt,F);R(x,ot)&&U(Q),b.__version=at.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Et(E,x,O){if(x.image.length!==6)return;const Q=C(E,x),et=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);const at=i.get(et);if(et.version!==at.__version||Q===!0){e.activeTexture(n.TEXTURE0+O),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const b=x.isCompressedTexture||x.image[0].isCompressedTexture,Y=x.image[0]&&x.image[0].isDataTexture,F=[];for(let G=0;G<6;G++)!b&&!Y?F[G]=S(x.image[G],!1,!0,c):F[G]=Y?x.image[G].image:x.image[G],F[G]=fe(x,F[G]);const ot=F[0],ft=P(ot)||a,gt=s.convert(x.format,x.colorSpace),ht=s.convert(x.type),pt=W(x.internalFormat,gt,ht,x.colorSpace),Tt=a&&x.isVideoTexture!==!0,Lt=at.__version===void 0||Q===!0;let te=v(x,ot,ft);lt(n.TEXTURE_CUBE_MAP,x,ft);let w;if(b){Tt&&Lt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,te,pt,ot.width,ot.height);for(let G=0;G<6;G++){w=F[G].mipmaps;for(let $=0;$<w.length;$++){const ut=w[$];x.format!==ke?gt!==null?Tt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$,0,0,ut.width,ut.height,gt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$,pt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$,0,0,ut.width,ut.height,gt,ht,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$,pt,ut.width,ut.height,0,gt,ht,ut.data)}}}else{w=x.mipmaps,Tt&&Lt&&(w.length>0&&te++,e.texStorage2D(n.TEXTURE_CUBE_MAP,te,pt,F[0].width,F[0].height));for(let G=0;G<6;G++)if(Y){Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,F[G].width,F[G].height,gt,ht,F[G].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,pt,F[G].width,F[G].height,0,gt,ht,F[G].data);for(let $=0;$<w.length;$++){const _t=w[$].image[G].image;Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$+1,0,0,_t.width,_t.height,gt,ht,_t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$+1,pt,_t.width,_t.height,0,gt,ht,_t.data)}}else{Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,gt,ht,F[G]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,pt,gt,ht,F[G]);for(let $=0;$<w.length;$++){const ut=w[$];Tt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$+1,0,0,gt,ht,ut.image[G]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,$+1,pt,gt,ht,ut.image[G])}}}R(x,ft)&&U(n.TEXTURE_CUBE_MAP),at.__version=et.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function it(E,x,O,Q,et){const at=s.convert(O.format,O.colorSpace),b=s.convert(O.type),Y=W(O.internalFormat,at,b,O.colorSpace);i.get(x).__hasExternalTextures||(et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,0,Y,x.width,x.height,x.depth,0,at,b,null):e.texImage2D(et,0,Y,x.width,x.height,0,at,b,null)),e.bindFramebuffer(n.FRAMEBUFFER,E),Bt(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,et,i.get(O).__webglTexture,0,$t(x)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,et,i.get(O).__webglTexture,0),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(E,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let Q=n.DEPTH_COMPONENT16;if(O||Bt(x)){const et=x.depthTexture;et&&et.isDepthTexture&&(et.type===Dn?Q=n.DEPTH_COMPONENT32F:et.type===Ln&&(Q=n.DEPTH_COMPONENT24));const at=$t(x);Bt(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,Q,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,at,Q,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const Q=$t(x);O&&Bt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,x.width,x.height):Bt(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let et=0;et<Q.length;et++){const at=Q[et],b=s.convert(at.format,at.colorSpace),Y=s.convert(at.type),F=W(at.internalFormat,b,Y,at.colorSpace),ot=$t(x);O&&Bt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,F,x.width,x.height):Bt(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,F,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,F,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),tt(x.depthTexture,0);const Q=i.get(x.depthTexture).__webglTexture,et=$t(x);if(x.depthTexture.format===Un)Bt(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(x.depthTexture.format===vi)Bt(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function vt(E){const x=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");zt(x.__webglFramebuffer,E)}else if(O){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=n.createRenderbuffer(),Mt(x.__webglDepthbuffer[Q],E,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Mt(x.__webglDepthbuffer,E,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(E,x,O){const Q=i.get(E);x!==void 0&&it(Q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),O!==void 0&&vt(E)}function Jt(E){const x=E.texture,O=i.get(E),Q=i.get(x);E.addEventListener("dispose",J),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=x.version,o.memory.textures++);const et=E.isWebGLCubeRenderTarget===!0,at=E.isWebGLMultipleRenderTargets===!0,b=P(E)||a;if(et){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)O.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(O.__webglFramebuffer=n.createFramebuffer(),at)if(r.drawBuffers){const Y=E.texture;for(let F=0,ot=Y.length;F<ot;F++){const ft=i.get(Y[F]);ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Bt(E)===!1){const Y=at?x:[x];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let F=0;F<Y.length;F++){const ot=Y[F];O.__webglColorRenderbuffer[F]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[F]);const ft=s.convert(ot.format,ot.colorSpace),gt=s.convert(ot.type),ht=W(ot.internalFormat,ft,gt,ot.colorSpace,E.isXRRenderTarget===!0),pt=$t(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,ht,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,O.__webglColorRenderbuffer[F])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),lt(n.TEXTURE_CUBE_MAP,x,b);for(let Y=0;Y<6;Y++)it(O.__webglFramebuffer[Y],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y);R(x,b)&&U(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const Y=E.texture;for(let F=0,ot=Y.length;F<ot;F++){const ft=Y[F],gt=i.get(ft);e.bindTexture(n.TEXTURE_2D,gt.__webglTexture),lt(n.TEXTURE_2D,ft,b),it(O.__webglFramebuffer,E,ft,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D),R(ft,b)&&U(n.TEXTURE_2D)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?Y=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Y,Q.__webglTexture),lt(Y,x,b),it(O.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,Y),R(x,b)&&U(Y),e.unbindTexture()}E.depthBuffer&&vt(E)}function jt(E){const x=P(E)||a,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,et=O.length;Q<et;Q++){const at=O[Q];if(R(at,x)){const b=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Y=i.get(at).__webglTexture;e.bindTexture(b,Y),U(b),e.unbindTexture()}}}function ne(E){if(a&&E.samples>0&&Bt(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,Q=E.height;let et=n.COLOR_BUFFER_BIT;const at=[],b=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=i.get(E),F=E.isWebGLMultipleRenderTargets===!0;if(F)for(let ot=0;ot<x.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let ot=0;ot<x.length;ot++){at.push(n.COLOR_ATTACHMENT0+ot),E.depthBuffer&&at.push(b);const ft=Y.__ignoreDepthValues!==void 0?Y.__ignoreDepthValues:!1;if(ft===!1&&(E.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),F&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ot]),ft===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[b]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])),F){const gt=i.get(x[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,O,Q,0,0,O,Q,et,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),F)for(let ot=0;ot<x.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ot]);const ft=i.get(x[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}}function $t(E){return Math.min(d,E.samples)}function Bt(E){const x=i.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Xt(E){const x=o.render.frame;g.get(E)!==x&&(g.set(E,x),E.update())}function fe(E,x){const O=E.colorSpace,Q=E.format,et=E.type;return E.isCompressedTexture===!0||E.format===fs||O!==Ke&&O!==Nn&&(O===wt?a===!1?t.has("EXT_sRGB")===!0&&Q===ke?(E.format=fs,E.minFilter=De,E.generateMipmaps=!1):x=Ao.sRGBToLinear(x):(Q!==ke||et!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.setTexture2D=tt,this.setTexture2DArray=mt,this.setTexture3D=ct,this.setTextureCube=z,this.rebindTextures=Rt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Bt}function cp(n,t,e){const i=e.isWebGL2;function r(s,o=Nn){let a;if(s===Fn)return n.UNSIGNED_BYTE;if(s===Ol)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Bl)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Il)return n.BYTE;if(s===Nl)return n.SHORT;if(s===vo)return n.UNSIGNED_SHORT;if(s===Fl)return n.INT;if(s===Ln)return n.UNSIGNED_INT;if(s===Dn)return n.FLOAT;if(s===Oi)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zl)return n.ALPHA;if(s===ke)return n.RGBA;if(s===Gl)return n.LUMINANCE;if(s===Hl)return n.LUMINANCE_ALPHA;if(s===Un)return n.DEPTH_COMPONENT;if(s===vi)return n.DEPTH_STENCIL;if(s===fs)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===kl)return n.RED;if(s===Vl)return n.RED_INTEGER;if(s===Wl)return n.RG;if(s===Xl)return n.RG_INTEGER;if(s===Yl)return n.RGBA_INTEGER;if(s===Lr||s===Dr||s===Ur||s===Ir)if(o===wt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Lr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Lr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ur)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ir)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ws||s===Xs||s===Ys||s===qs)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ws)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ys)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ql)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===js||s===Ks)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===js)return o===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ks)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zs||s===Js||s===Qs||s===$s||s===ta||s===ea||s===na||s===ia||s===ra||s===sa||s===aa||s===oa||s===la||s===ca)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Js)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$s)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ta)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ea)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===na)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ia)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ra)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sa)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===aa)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===oa)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===la)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ca)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Nr)return o===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===jl||s===ha||s===ua||s===da)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Nr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ha)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ua)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===da)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class hp extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ur extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const up={type:"move"};class is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(up)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ur;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class dp extends Ae{constructor(t,e,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:Un,h!==Un&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Un&&(i=Ln),i===void 0&&h===vi&&(i=pi),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1}}class fp extends zn{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,u=null;const A=[],S=[],P=new Set,y=new Map,R=new Ie;R.layers.enable(1),R.viewport=new ue;const U=new Ie;U.layers.enable(2),U.viewport=new ue;const W=[R,U],v=new hp;v.layers.enable(1),v.layers.enable(2);let T=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=A[z];return K===void 0&&(K=new is,A[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=A[z];return K===void 0&&(K=new is,A[z]=K),K.getGripSpace()},this.getHand=function(z){let K=A[z];return K===void 0&&(K=new is,A[z]=K),K.getHandSpace()};function J(z){const K=S.indexOf(z.inputSource);if(K===-1)return;const rt=A[K];rt!==void 0&&(rt.update(z.inputSource,z.frame,c||o),rt.dispatchEvent({type:z.type,data:z.inputSource}))}function I(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",B);for(let z=0;z<A.length;z++){const K=S[z];K!==null&&(S[z]=null,A[z].disconnect(K))}T=null,j=null,t.setRenderTarget(m),p=null,f=null,d=null,r=null,u=null,ct.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",I),r.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:p}),u=new On(p.framebufferWidth,p.framebufferHeight,{format:ke,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,rt=null,lt=null;_.depth&&(lt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=_.stencil?vi:Un,rt=_.stencil?pi:Ln);const C={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};d=new XRWebGLBinding(r,e),f=d.createProjectionLayer(C),r.updateRenderState({layers:[f]}),u=new On(f.textureWidth,f.textureHeight,{format:ke,type:Fn,depthTexture:new dp(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const At=t.properties.get(u);At.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ct.setContext(r),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(z){for(let K=0;K<z.removed.length;K++){const rt=z.removed[K],lt=S.indexOf(rt);lt>=0&&(S[lt]=null,A[lt].disconnect(rt))}for(let K=0;K<z.added.length;K++){const rt=z.added[K];let lt=S.indexOf(rt);if(lt===-1){for(let At=0;At<A.length;At++)if(At>=S.length){S.push(rt),lt=At;break}else if(S[At]===null){S[At]=rt,lt=At;break}if(lt===-1)break}const C=A[lt];C&&C.connect(rt)}}const k=new L,nt=new L;function q(z,K,rt){k.setFromMatrixPosition(K.matrixWorld),nt.setFromMatrixPosition(rt.matrixWorld);const lt=k.distanceTo(nt),C=K.projectionMatrix.elements,At=rt.projectionMatrix.elements,Et=C[14]/(C[10]-1),it=C[14]/(C[10]+1),Mt=(C[9]+1)/C[5],zt=(C[9]-1)/C[5],vt=(C[8]-1)/C[0],Rt=(At[8]+1)/At[0],Jt=Et*vt,jt=Et*Rt,ne=lt/(-vt+Rt),$t=ne*-vt;K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX($t),z.translateZ(ne),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Bt=Et+ne,Xt=it+ne,fe=Jt-$t,E=jt+(lt-$t),x=Mt*it/Xt*Bt,O=zt*it/Xt*Bt;z.projectionMatrix.makePerspective(fe,E,x,O,Bt,Xt),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function X(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;v.near=U.near=R.near=z.near,v.far=U.far=R.far=z.far,(T!==v.near||j!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,j=v.far);const K=z.parent,rt=v.cameras;X(v,K);for(let lt=0;lt<rt.length;lt++)X(rt[lt],K);rt.length===2?q(v,R,U):v.projectionMatrix.copy(R.projectionMatrix),Z(z,v,K)};function Z(z,K,rt){rt===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(rt.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const lt=z.children;for(let C=0,At=lt.length;C<At;C++)lt[C].updateMatrixWorld(!0);z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Bi*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.getPlanes=function(){return P};let tt=null;function mt(z,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const rt=h.views;p!==null&&(t.setRenderTargetFramebuffer(u,p.framebuffer),t.setRenderTarget(u));let lt=!1;rt.length!==v.cameras.length&&(v.cameras.length=0,lt=!0);for(let C=0;C<rt.length;C++){const At=rt[C];let Et=null;if(p!==null)Et=p.getViewport(At);else{const Mt=d.getViewSubImage(f,At);Et=Mt.viewport,C===0&&(t.setRenderTargetTextures(u,Mt.colorTexture,f.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(u))}let it=W[C];it===void 0&&(it=new Ie,it.layers.enable(C),it.viewport=new ue,W[C]=it),it.matrix.fromArray(At.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(At.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Et.x,Et.y,Et.width,Et.height),C===0&&(v.matrix.copy(it.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),lt===!0&&v.cameras.push(it)}}for(let rt=0;rt<A.length;rt++){const lt=S[rt],C=A[rt];lt!==null&&C!==void 0&&C.update(lt,K,c||o)}if(tt&&tt(z,K),K.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let rt=null;for(const lt of P)K.detectedPlanes.has(lt)||(rt===null&&(rt=[]),rt.push(lt));if(rt!==null)for(const lt of rt)P.delete(lt),y.delete(lt),i.dispatchEvent({type:"planeremoved",data:lt});for(const lt of K.detectedPlanes)if(!P.has(lt))P.add(lt),y.set(lt,K.lastChangedTime),i.dispatchEvent({type:"planeadded",data:lt});else{const C=y.get(lt);lt.lastChangedTime>C&&(y.set(lt,lt.lastChangedTime),i.dispatchEvent({type:"planechanged",data:lt}))}}g=null}const ct=new Io;ct.setAnimationLoop(mt),this.setAnimationLoop=function(z){tt=z},this.dispose=function(){}}}function pp(n,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Po(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,A,S,P){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,P)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,A,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Te&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Te&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const A=t.get(u).envMap;if(A&&(m.envMap.value=A,m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const S=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*S,e(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,A,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*A,m.scale.value=S*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),t.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,A){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Te&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const A=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mp(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,S){const P=S.program;i.uniformBlockBinding(A,P)}function c(A,S){let P=r[A.id];P===void 0&&(g(A),P=h(A),r[A.id]=P,A.addEventListener("dispose",m));const y=S.program;i.updateUBOMapping(A,y);const R=t.render.frame;s[A.id]!==R&&(f(A),s[A.id]=R)}function h(A){const S=d();A.__bindingPointIndex=S;const P=n.createBuffer(),y=A.__size,R=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,y,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,P),P}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const S=r[A.id],P=A.uniforms,y=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,U=P.length;R<U;R++){const W=P[R];if(p(W,R,y)===!0){const v=W.__offset,T=Array.isArray(W.value)?W.value:[W.value];let j=0;for(let J=0;J<T.length;J++){const I=T[J],B=_(I);typeof I=="number"?(W.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,v+j,W.__data)):I.isMatrix3?(W.__data[0]=I.elements[0],W.__data[1]=I.elements[1],W.__data[2]=I.elements[2],W.__data[3]=I.elements[0],W.__data[4]=I.elements[3],W.__data[5]=I.elements[4],W.__data[6]=I.elements[5],W.__data[7]=I.elements[0],W.__data[8]=I.elements[6],W.__data[9]=I.elements[7],W.__data[10]=I.elements[8],W.__data[11]=I.elements[0]):(I.toArray(W.__data,j),j+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,v,W.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,S,P){const y=A.value;if(P[S]===void 0){if(typeof y=="number")P[S]=y;else{const R=Array.isArray(y)?y:[y],U=[];for(let W=0;W<R.length;W++)U.push(R[W].clone());P[S]=U}return!0}else if(typeof y=="number"){if(P[S]!==y)return P[S]=y,!0}else{const R=Array.isArray(P[S])?P[S]:[P[S]],U=Array.isArray(y)?y:[y];for(let W=0;W<R.length;W++){const v=R[W];if(v.equals(U[W])===!1)return v.copy(U[W]),!0}}return!1}function g(A){const S=A.uniforms;let P=0;const y=16;let R=0;for(let U=0,W=S.length;U<W;U++){const v=S[U],T={boundary:0,storage:0},j=Array.isArray(v.value)?v.value:[v.value];for(let J=0,I=j.length;J<I;J++){const B=j[J],k=_(B);T.boundary+=k.boundary,T.storage+=k.storage}if(v.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=P,U>0){R=P%y;const J=y-R;R!==0&&J-T.boundary<0&&(P+=y-R,v.__offset=P)}P+=T.storage}return R=P%y,R>0&&(P+=y-R),A.__size=P,A.__cache={},this}function _(A){const S={boundary:0,storage:0};return typeof A=="number"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function m(A){const S=A.target;S.removeEventListener("dispose",m);const P=o.indexOf(S.__bindingPointIndex);o.splice(P,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function u(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}function gp(){const n=zi("canvas");return n.style.display="block",n}class zo{constructor(t={}){const{canvas:e=gp(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let p=null,g=null;const _=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=wt,this.useLegacyLights=!0,this.toneMapping=ln,this.toneMappingExposure=1;const u=this;let A=!1,S=0,P=0,y=null,R=-1,U=null;const W=new ue,v=new ue;let T=null,j=e.width,J=e.height,I=1,B=null,k=null;const nt=new ue(0,0,j,J),q=new ue(0,0,j,J);let X=!1;const Z=new Uo;let tt=!1,mt=!1,ct=null;const z=new Zt,K=new L,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return y===null?I:1}let C=i;function At(M,N){for(let H=0;H<M.length;H++){const D=M[H],V=e.getContext(D,N);if(V!==null)return V}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ys}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),C===null){const N=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&N.shift(),C=At(N,M),C===null)throw At(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Et,it,Mt,zt,vt,Rt,Jt,jt,ne,$t,Bt,Xt,fe,E,x,O,Q,et,at,b,Y,F,ot,ft;function gt(){Et=new bd(C),it=new xd(C,Et,t),Et.init(it),F=new cp(C,Et,it),Mt=new op(C,Et,it),zt=new Cd(C),vt=new qf,Rt=new lp(C,Et,Mt,vt,it,F,zt),Jt=new Sd(u),jt=new Td(u),ne=new Gc(C,it),ot=new _d(C,Et,ne,it),$t=new wd(C,ne,zt,ot),Bt=new Ud(C,$t,ne,zt),at=new Dd(C,it,Rt),O=new Md(vt),Xt=new Yf(u,Jt,jt,Et,it,ot,O),fe=new pp(u,vt),E=new Kf,x=new ep(Et,it),et=new gd(u,Jt,jt,Mt,Bt,f,l),Q=new ap(u,Bt,it),ft=new mp(C,zt,it,Mt),b=new vd(C,Et,zt,it),Y=new Rd(C,Et,zt,it),zt.programs=Xt.programs,u.capabilities=it,u.extensions=Et,u.properties=vt,u.renderLists=E,u.shadowMap=Q,u.state=Mt,u.info=zt}gt();const ht=new fp(u,C);this.xr=ht,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Et.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Et.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(M){M!==void 0&&(I=M,this.setSize(j,J,!1))},this.getSize=function(M){return M.set(j,J)},this.setSize=function(M,N,H=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,J=N,e.width=Math.floor(M*I),e.height=Math.floor(N*I),H===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(j*I,J*I).floor()},this.setDrawingBufferSize=function(M,N,H){j=M,J=N,I=H,e.width=Math.floor(M*H),e.height=Math.floor(N*H),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(W)},this.getViewport=function(M){return M.copy(nt)},this.setViewport=function(M,N,H,D){M.isVector4?nt.set(M.x,M.y,M.z,M.w):nt.set(M,N,H,D),Mt.viewport(W.copy(nt).multiplyScalar(I).floor())},this.getScissor=function(M){return M.copy(q)},this.setScissor=function(M,N,H,D){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,N,H,D),Mt.scissor(v.copy(q).multiplyScalar(I).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(M){Mt.setScissorTest(X=M)},this.setOpaqueSort=function(M){B=M},this.setTransparentSort=function(M){k=M},this.getClearColor=function(M){return M.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(M=!0,N=!0,H=!0){let D=0;M&&(D|=C.COLOR_BUFFER_BIT),N&&(D|=C.DEPTH_BUFFER_BIT),H&&(D|=C.STENCIL_BUFFER_BIT),C.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),E.dispose(),x.dispose(),vt.dispose(),Jt.dispose(),jt.dispose(),Bt.dispose(),ot.dispose(),ft.dispose(),Xt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",_t),ht.removeEventListener("sessionend",Ht),ct&&(ct.dispose(),ct=null),kt.stop()};function pt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=zt.autoReset,N=Q.enabled,H=Q.autoUpdate,D=Q.needsUpdate,V=Q.type;gt(),zt.autoReset=M,Q.enabled=N,Q.autoUpdate=H,Q.needsUpdate=D,Q.type=V}function Lt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function te(M){const N=M.target;N.removeEventListener("dispose",te),w(N)}function w(M){G(M),vt.remove(M)}function G(M){const N=vt.get(M).programs;N!==void 0&&(N.forEach(function(H){Xt.releaseProgram(H)}),M.isShaderMaterial&&Xt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,H,D,V,xt){N===null&&(N=rt);const St=V.isMesh&&V.matrixWorld.determinant()<0,bt=Yo(M,N,H,D,V);Mt.setMaterial(D,St);let Ct=H.index,Dt=1;D.wireframe===!0&&(Ct=$t.getWireframeAttribute(H),Dt=2);const Ut=H.drawRange,It=H.attributes.position;let Gt=Ut.start*Dt,ve=(Ut.start+Ut.count)*Dt;xt!==null&&(Gt=Math.max(Gt,xt.start*Dt),ve=Math.min(ve,(xt.start+xt.count)*Dt)),Ct!==null?(Gt=Math.max(Gt,0),ve=Math.min(ve,Ct.count)):It!=null&&(Gt=Math.max(Gt,0),ve=Math.min(ve,It.count));const Fe=ve-Gt;if(Fe<0||Fe===1/0)return;ot.setup(V,D,bt,H,Ct);let Sn,ie=b;if(Ct!==null&&(Sn=ne.get(Ct),ie=Y,ie.setIndex(Sn)),V.isMesh)D.wireframe===!0?(Mt.setLineWidth(D.wireframeLinewidth*lt()),ie.setMode(C.LINES)):ie.setMode(C.TRIANGLES);else if(V.isLine){let Ft=D.linewidth;Ft===void 0&&(Ft=1),Mt.setLineWidth(Ft*lt()),V.isLineSegments?ie.setMode(C.LINES):V.isLineLoop?ie.setMode(C.LINE_LOOP):ie.setMode(C.LINE_STRIP)}else V.isPoints?ie.setMode(C.POINTS):V.isSprite&&ie.setMode(C.TRIANGLES);if(V.isInstancedMesh)ie.renderInstances(Gt,Fe,V.count);else if(H.isInstancedBufferGeometry){const Ft=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,br=Math.min(H.instanceCount,Ft);ie.renderInstances(Gt,Fe,br)}else ie.render(Gt,Fe)},this.compile=function(M,N){function H(D,V,xt){D.transparent===!0&&D.side===sn&&D.forceSinglePass===!1?(D.side=Te,D.needsUpdate=!0,Wi(D,V,xt),D.side=hn,D.needsUpdate=!0,Wi(D,V,xt),D.side=sn):Wi(D,V,xt)}g=x.get(M),g.init(),m.push(g),M.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(g.pushLight(D),D.castShadow&&g.pushShadow(D))}),g.setupLights(u.useLegacyLights),M.traverse(function(D){const V=D.material;if(V)if(Array.isArray(V))for(let xt=0;xt<V.length;xt++){const St=V[xt];H(St,M,D)}else H(V,M,D)}),m.pop(),g=null};let $=null;function ut(M){$&&$(M)}function _t(){kt.stop()}function Ht(){kt.start()}const kt=new Io;kt.setAnimationLoop(ut),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(M){$=M,ht.setAnimationLoop(M),M===null?kt.stop():kt.start()},ht.addEventListener("sessionstart",_t),ht.addEventListener("sessionend",Ht),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(N),N=ht.getCamera()),M.isScene===!0&&M.onBeforeRender(u,M,N,y),g=x.get(M,m.length),g.init(),m.push(g),z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(z),mt=this.localClippingEnabled,tt=O.init(this.clippingPlanes,mt),p=E.get(M,_.length),p.init(),_.push(p),pe(M,N,0,u.sortObjects),p.finish(),u.sortObjects===!0&&p.sort(B,k),tt===!0&&O.beginShadows();const H=g.state.shadowsArray;if(Q.render(H,M,N),tt===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(p,M),g.setupLights(u.useLegacyLights),N.isArrayCamera){const D=N.cameras;for(let V=0,xt=D.length;V<xt;V++){const St=D[V];fn(p,M,St,St.viewport)}}else fn(p,M,N);y!==null&&(Rt.updateMultisampleRenderTarget(y),Rt.updateRenderTargetMipmap(y)),M.isScene===!0&&M.onAfterRender(u,M,N),ot.resetDefaultState(),R=-1,U=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function pe(M,N,H,D){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){D&&K.setFromMatrixPosition(M.matrixWorld).applyMatrix4(z);const St=Bt.update(M),bt=M.material;bt.visible&&p.push(M,St,bt,H,K.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Z.intersectsObject(M))){M.isSkinnedMesh&&M.skeleton.frame!==zt.render.frame&&(M.skeleton.update(),M.skeleton.frame=zt.render.frame);const St=Bt.update(M),bt=M.material;if(D&&(St.boundingSphere===null&&St.computeBoundingSphere(),K.copy(St.boundingSphere.center).applyMatrix4(M.matrixWorld).applyMatrix4(z)),Array.isArray(bt)){const Ct=St.groups;for(let Dt=0,Ut=Ct.length;Dt<Ut;Dt++){const It=Ct[Dt],Gt=bt[It.materialIndex];Gt&&Gt.visible&&p.push(M,St,Gt,H,K.z,It)}}else bt.visible&&p.push(M,St,bt,H,K.z,null)}}const xt=M.children;for(let St=0,bt=xt.length;St<bt;St++)pe(xt[St],N,H,D)}function fn(M,N,H,D){const V=M.opaque,xt=M.transmissive,St=M.transparent;g.setupLightsView(H),tt===!0&&O.setGlobalState(u.clippingPlanes,H),xt.length>0&&ee(V,xt,N,H),D&&Mt.viewport(W.copy(D)),V.length>0&&Pe(V,N,H),xt.length>0&&Pe(xt,N,H),St.length>0&&Pe(St,N,H),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function ee(M,N,H,D){if(ct===null){const bt=it.isWebGL2;ct=new On(1024,1024,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?Oi:Fn,minFilter:Fi,samples:bt&&a===!0?4:0})}const V=u.getRenderTarget();u.setRenderTarget(ct),u.clear();const xt=u.toneMapping;u.toneMapping=ln,Pe(M,H,D),Rt.updateMultisampleRenderTarget(ct),Rt.updateRenderTargetMipmap(ct);let St=!1;for(let bt=0,Ct=N.length;bt<Ct;bt++){const Dt=N[bt],Ut=Dt.object,It=Dt.geometry,Gt=Dt.material,ve=Dt.group;if(Gt.side===sn&&Ut.layers.test(D.layers)){const Fe=Gt.side;Gt.side=Te,Gt.needsUpdate=!0,We(Ut,H,D,It,Gt,ve),Gt.side=Fe,Gt.needsUpdate=!0,St=!0}}St===!0&&(Rt.updateMultisampleRenderTarget(ct),Rt.updateRenderTargetMipmap(ct)),u.setRenderTarget(V),u.toneMapping=xt}function Pe(M,N,H){const D=N.isScene===!0?N.overrideMaterial:null;for(let V=0,xt=M.length;V<xt;V++){const St=M[V],bt=St.object,Ct=St.geometry,Dt=D===null?St.material:D,Ut=St.group;bt.layers.test(H.layers)&&We(bt,N,H,Ct,Dt,Ut)}}function We(M,N,H,D,V,xt){M.onBeforeRender(u,N,H,D,V,xt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(u,N,H,D,M,xt),V.transparent===!0&&V.side===sn&&V.forceSinglePass===!1?(V.side=Te,V.needsUpdate=!0,u.renderBufferDirect(H,N,D,V,M,xt),V.side=hn,V.needsUpdate=!0,u.renderBufferDirect(H,N,D,V,M,xt),V.side=sn):u.renderBufferDirect(H,N,D,V,M,xt),M.onAfterRender(u,N,H,D,V,xt)}function Wi(M,N,H){N.isScene!==!0&&(N=rt);const D=vt.get(M),V=g.state.lights,xt=g.state.shadowsArray,St=V.state.version,bt=Xt.getParameters(M,V.state,xt,N,H),Ct=Xt.getProgramCacheKey(bt);let Dt=D.programs;D.environment=M.isMeshStandardMaterial?N.environment:null,D.fog=N.fog,D.envMap=(M.isMeshStandardMaterial?jt:Jt).get(M.envMap||D.environment),Dt===void 0&&(M.addEventListener("dispose",te),Dt=new Map,D.programs=Dt);let Ut=Dt.get(Ct);if(Ut!==void 0){if(D.currentProgram===Ut&&D.lightsStateVersion===St)return Is(M,bt),Ut}else bt.uniforms=Xt.getUniforms(M),M.onBuild(H,bt,u),M.onBeforeCompile(bt,u),Ut=Xt.acquireProgram(bt,Ct),Dt.set(Ct,Ut),D.uniforms=bt.uniforms;const It=D.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(It.clippingPlanes=O.uniform),Is(M,bt),D.needsLights=jo(M),D.lightsStateVersion=St,D.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.directionalShadowMap.value=V.state.directionalShadowMap,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotShadowMap.value=V.state.spotShadowMap,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMap.value=V.state.pointShadowMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix);const Gt=Ut.getUniforms(),ve=_r.seqWithValue(Gt.seq,It);return D.currentProgram=Ut,D.uniformsList=ve,Ut}function Is(M,N){const H=vt.get(M);H.outputColorSpace=N.outputColorSpace,H.instancing=N.instancing,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Yo(M,N,H,D,V){N.isScene!==!0&&(N=rt),Rt.resetTextureUnits();const xt=N.fog,St=D.isMeshStandardMaterial?N.environment:null,bt=y===null?u.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Ke,Ct=(D.isMeshStandardMaterial?jt:Jt).get(D.envMap||St),Dt=D.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ut=!!D.normalMap&&!!H.attributes.tangent,It=!!H.morphAttributes.position,Gt=!!H.morphAttributes.normal,ve=!!H.morphAttributes.color,Fe=D.toneMapped?u.toneMapping:ln,Sn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=Sn!==void 0?Sn.length:0,Ft=vt.get(D),br=g.state.lights;if(tt===!0&&(mt===!0||M!==U)){const be=M===U&&D.id===R;O.setState(D,M,be)}let oe=!1;D.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==br.state.version||Ft.outputColorSpace!==bt||V.isInstancedMesh&&Ft.instancing===!1||!V.isInstancedMesh&&Ft.instancing===!0||V.isSkinnedMesh&&Ft.skinning===!1||!V.isSkinnedMesh&&Ft.skinning===!0||Ft.envMap!==Ct||D.fog===!0&&Ft.fog!==xt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==O.numPlanes||Ft.numIntersection!==O.numIntersection)||Ft.vertexAlphas!==Dt||Ft.vertexTangents!==Ut||Ft.morphTargets!==It||Ft.morphNormals!==Gt||Ft.morphColors!==ve||Ft.toneMapping!==Fe||it.isWebGL2===!0&&Ft.morphTargetsCount!==ie)&&(oe=!0):(oe=!0,Ft.__version=D.version);let En=Ft.currentProgram;oe===!0&&(En=Wi(D,N,V));let Ns=!1,Ei=!1,wr=!1;const xe=En.getUniforms(),yn=Ft.uniforms;if(Mt.useProgram(En.program)&&(Ns=!0,Ei=!0,wr=!0),D.id!==R&&(R=D.id,Ei=!0),Ns||U!==M){if(xe.setValue(C,"projectionMatrix",M.projectionMatrix),it.logarithmicDepthBuffer&&xe.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),U!==M&&(U=M,Ei=!0,wr=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const be=xe.map.cameraPosition;be!==void 0&&be.setValue(C,K.setFromMatrixPosition(M.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&xe.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||V.isSkinnedMesh)&&xe.setValue(C,"viewMatrix",M.matrixWorldInverse)}if(V.isSkinnedMesh){xe.setOptional(C,V,"bindMatrix"),xe.setOptional(C,V,"bindMatrixInverse");const be=V.skeleton;be&&(it.floatVertexTextures?(be.boneTexture===null&&be.computeBoneTexture(),xe.setValue(C,"boneTexture",be.boneTexture,Rt),xe.setValue(C,"boneTextureSize",be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rr=H.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0&&it.isWebGL2===!0)&&at.update(V,H,En),(Ei||Ft.receiveShadow!==V.receiveShadow)&&(Ft.receiveShadow=V.receiveShadow,xe.setValue(C,"receiveShadow",V.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(yn.envMap.value=Ct,yn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Ei&&(xe.setValue(C,"toneMappingExposure",u.toneMappingExposure),Ft.needsLights&&qo(yn,wr),xt&&D.fog===!0&&fe.refreshFogUniforms(yn,xt),fe.refreshMaterialUniforms(yn,D,I,J,ct),_r.upload(C,Ft.uniformsList,yn,Rt)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(_r.upload(C,Ft.uniformsList,yn,Rt),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&xe.setValue(C,"center",V.center),xe.setValue(C,"modelViewMatrix",V.modelViewMatrix),xe.setValue(C,"normalMatrix",V.normalMatrix),xe.setValue(C,"modelMatrix",V.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const be=D.uniformsGroups;for(let Cr=0,Ko=be.length;Cr<Ko;Cr++)if(it.isWebGL2){const Fs=be[Cr];ft.update(Fs,En),ft.bind(Fs,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function qo(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function jo(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(M,N,H){vt.get(M.texture).__webglTexture=N,vt.get(M.depthTexture).__webglTexture=H;const D=vt.get(M);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=H===void 0,D.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,N){const H=vt.get(M);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,H=0){y=M,S=N,P=H;let D=!0,V=null,xt=!1,St=!1;if(M){const Ct=vt.get(M);Ct.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(C.FRAMEBUFFER,null),D=!1):Ct.__webglFramebuffer===void 0?Rt.setupRenderTarget(M):Ct.__hasExternalTextures&&Rt.rebindTextures(M,vt.get(M.texture).__webglTexture,vt.get(M.depthTexture).__webglTexture);const Dt=M.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(St=!0);const Ut=vt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(V=Ut[N],xt=!0):it.isWebGL2&&M.samples>0&&Rt.useMultisampledRTT(M)===!1?V=vt.get(M).__webglMultisampledFramebuffer:V=Ut,W.copy(M.viewport),v.copy(M.scissor),T=M.scissorTest}else W.copy(nt).multiplyScalar(I).floor(),v.copy(q).multiplyScalar(I).floor(),T=X;if(Mt.bindFramebuffer(C.FRAMEBUFFER,V)&&it.drawBuffers&&D&&Mt.drawBuffers(M,V),Mt.viewport(W),Mt.scissor(v),Mt.setScissorTest(T),xt){const Ct=vt.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,H)}else if(St){const Ct=vt.get(M.texture),Dt=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ct.__webglTexture,H||0,Dt)}R=-1},this.readRenderTargetPixels=function(M,N,H,D,V,xt,St){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt){Mt.bindFramebuffer(C.FRAMEBUFFER,bt);try{const Ct=M.texture,Dt=Ct.format,Ut=Ct.type;if(Dt!==ke&&F.convert(Dt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Ut===Oi&&(Et.has("EXT_color_buffer_half_float")||it.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Ut!==Fn&&F.convert(Ut)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===Dn&&(it.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-D&&H>=0&&H<=M.height-V&&C.readPixels(N,H,D,V,F.convert(Dt),F.convert(Ut),xt)}finally{const Ct=y!==null?vt.get(y).__webglFramebuffer:null;Mt.bindFramebuffer(C.FRAMEBUFFER,Ct)}}},this.copyFramebufferToTexture=function(M,N,H=0){const D=Math.pow(2,-H),V=Math.floor(N.image.width*D),xt=Math.floor(N.image.height*D);Rt.setTexture2D(N,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,M.x,M.y,V,xt),Mt.unbindTexture()},this.copyTextureToTexture=function(M,N,H,D=0){const V=N.image.width,xt=N.image.height,St=F.convert(H.format),bt=F.convert(H.type);Rt.setTexture2D(H,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,D,M.x,M.y,V,xt,St,bt,N.image.data):N.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,D,M.x,M.y,N.mipmaps[0].width,N.mipmaps[0].height,St,N.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,D,M.x,M.y,St,bt,N.image),D===0&&H.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(M,N,H,D,V=0){if(u.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=M.max.x-M.min.x+1,St=M.max.y-M.min.y+1,bt=M.max.z-M.min.z+1,Ct=F.convert(D.format),Dt=F.convert(D.type);let Ut;if(D.isData3DTexture)Rt.setTexture3D(D,0),Ut=C.TEXTURE_3D;else if(D.isDataArrayTexture)Rt.setTexture2DArray(D,0),Ut=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const It=C.getParameter(C.UNPACK_ROW_LENGTH),Gt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ve=C.getParameter(C.UNPACK_SKIP_PIXELS),Fe=C.getParameter(C.UNPACK_SKIP_ROWS),Sn=C.getParameter(C.UNPACK_SKIP_IMAGES),ie=H.isCompressedTexture?H.mipmaps[0]:H.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,ie.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ie.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,M.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,M.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,M.min.z),H.isDataTexture||H.isData3DTexture?C.texSubImage3D(Ut,V,N.x,N.y,N.z,xt,St,bt,Ct,Dt,ie.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Ut,V,N.x,N.y,N.z,xt,St,bt,Ct,ie.data)):C.texSubImage3D(Ut,V,N.x,N.y,N.z,xt,St,bt,Ct,Dt,ie),C.pixelStorei(C.UNPACK_ROW_LENGTH,It),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Gt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ve),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Sn),V===0&&D.generateMipmaps&&C.generateMipmap(Ut),Mt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Rt.setTextureCube(M,0):M.isData3DTexture?Rt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Rt.setTexture2DArray(M,0):Rt.setTexture2D(M,0),Mt.unbindTexture()},this.resetState=function(){S=0,P=0,y=null,Mt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?In:xo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===In?wt:Ke}}class _p extends zo{}_p.prototype.isWebGL1Renderer=!0;class vp extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class xp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ds,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Me=new L;class xr{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}setX(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Vt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Vt(e,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ps extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ri;const wi=new L,si=new L,ai=new L,oi=new yt,Ri=new yt,Go=new Zt,dr=new L,Ci=new L,fr=new L,Qa=new yt,rs=new yt,$a=new yt;class Ho extends de{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",ri===void 0){ri=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xp(e,5);ri.setIndex([0,1,2,0,2,3]),ri.setAttribute("position",new xr(i,3,0,!1)),ri.setAttribute("uv",new xr(i,2,3,!1))}this.geometry=ri,this.material=t!==void 0?t:new Ps,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),si.setFromMatrixScale(this.matrixWorld),Go.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ai.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&si.multiplyScalar(-ai.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;pr(dr.set(-.5,-.5,0),ai,o,si,r,s),pr(Ci.set(.5,-.5,0),ai,o,si,r,s),pr(fr.set(.5,.5,0),ai,o,si,r,s),Qa.set(0,0),rs.set(1,0),$a.set(1,1);let a=t.ray.intersectTriangle(dr,Ci,fr,!1,wi);if(a===null&&(pr(Ci.set(-.5,.5,0),ai,o,si,r,s),rs.set(0,1),a=t.ray.intersectTriangle(dr,fr,Ci,!1,wi),a===null))return;const l=t.ray.origin.distanceTo(wi);l<t.near||l>t.far||e.push({distance:l,point:wi.clone(),uv:Ue.getInterpolation(wi,dr,Ci,fr,Qa,rs,$a,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function pr(n,t,e,i,r,s){oi.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Ri.x=s*oi.x-r*oi.y,Ri.y=r*oi.x+s*oi.y):Ri.copy(oi),n.copy(t),n.x+=Ri.x,n.y+=Ri.y,n.applyMatrix4(Go)}class ko extends Mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const to=new Zt,gs=new Ts,mr=new yr,gr=new L;class Mp extends de{constructor(t=new Ve,e=new ko){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(r),mr.radius+=s,t.ray.intersectsSphere(mr)===!1)return;to.copy(r).invert(),gs.copy(t.ray).applyMatrix4(to);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);gr.fromBufferAttribute(d,m),eo(gr,m,l,r,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,_=p;g<_;g++)gr.fromBufferAttribute(d,g),eo(gr,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function eo(n,t,e,i,r,s,o){const a=gs.distanceSqToPoint(n);if(a<e){const l=new L;gs.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Sp extends Ae{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ls extends Ve{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new L,h=new yt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=i+d/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(a,3)),this.setAttribute("uv",new qe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.radius,t.segments,t.thetaStart,t.thetaLength)}}const no={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ep{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const yp=new Ep;class Vo{constructor(t){this.manager=t!==void 0?t:yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Ap extends Vo{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=no.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=zi("img");function l(){h(),no.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),r&&r(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Ds extends Vo{constructor(t){super(t)}load(t,e,i,r){const s=new Ae,o=new Ap(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Tp{constructor(t,e,i=0,r=1/0){this.ray=new Ts(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return _s(t,this,i,e),i.sort(io),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)_s(t[r],this,i,e);return i.sort(io),i}}function io(n,t){return n.distance-t.distance}function _s(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)_s(r[s],t,e,!0)}}class ro{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ys}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ys);const so={type:"change"},ss={type:"start"},ao={type:"end"};class bp extends zn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.DOLLY,RIGHT:Gn.PAN},this.touches={ONE:Hn.ROTATE,TWO:Hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",Xt),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Xt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(so),i.update(),s=r.NONE},this.update=function(){const b=new L,Y=new un().setFromUnitVectors(t.up,new L(0,1,0)),F=Y.clone().invert(),ot=new L,ft=new un,gt=2*Math.PI;return function(){const pt=i.object.position;b.copy(pt).sub(i.target),b.applyQuaternion(Y),a.setFromVector3(b),i.autoRotate&&s===r.NONE&&v(U()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Tt=i.minAzimuthAngle,Lt=i.maxAzimuthAngle;return isFinite(Tt)&&isFinite(Lt)&&(Tt<-Math.PI?Tt+=gt:Tt>Math.PI&&(Tt-=gt),Lt<-Math.PI?Lt+=gt:Lt>Math.PI&&(Lt-=gt),Tt<=Lt?a.theta=Math.max(Tt,Math.min(Lt,a.theta)):a.theta=a.theta>(Tt+Lt)/2?Math.max(Tt,a.theta):Math.min(Lt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),b.setFromSpherical(a),b.applyQuaternion(F),pt.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,d||ot.distanceToSquared(i.object.position)>o||8*(1-ft.dot(i.object.quaternion))>o?(i.dispatchEvent(so),ot.copy(i.object.position),ft.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",x),i.domElement.removeEventListener("pointerdown",Rt),i.domElement.removeEventListener("pointercancel",jt),i.domElement.removeEventListener("wheel",Bt),i.domElement.removeEventListener("pointermove",Jt),i.domElement.removeEventListener("pointerup",jt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Xt),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new ro,l=new ro;let c=1;const h=new L;let d=!1;const f=new yt,p=new yt,g=new yt,_=new yt,m=new yt,u=new yt,A=new yt,S=new yt,P=new yt,y=[],R={};function U(){return 2*Math.PI/60/60*i.autoRotateSpeed}function W(){return Math.pow(.95,i.zoomSpeed)}function v(b){l.theta-=b}function T(b){l.phi-=b}const j=function(){const b=new L;return function(F,ot){b.setFromMatrixColumn(ot,0),b.multiplyScalar(-F),h.add(b)}}(),J=function(){const b=new L;return function(F,ot){i.screenSpacePanning===!0?b.setFromMatrixColumn(ot,1):(b.setFromMatrixColumn(ot,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(F),h.add(b)}}(),I=function(){const b=new L;return function(F,ot){const ft=i.domElement;if(i.object.isPerspectiveCamera){const gt=i.object.position;b.copy(gt).sub(i.target);let ht=b.length();ht*=Math.tan(i.object.fov/2*Math.PI/180),j(2*F*ht/ft.clientHeight,i.object.matrix),J(2*ot*ht/ft.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(F*(i.object.right-i.object.left)/i.object.zoom/ft.clientWidth,i.object.matrix),J(ot*(i.object.top-i.object.bottom)/i.object.zoom/ft.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(b){i.object.isPerspectiveCamera?c/=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(b){i.object.isPerspectiveCamera?c*=b:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/b)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function nt(b){f.set(b.clientX,b.clientY)}function q(b){A.set(b.clientX,b.clientY)}function X(b){_.set(b.clientX,b.clientY)}function Z(b){p.set(b.clientX,b.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const Y=i.domElement;v(2*Math.PI*g.x/Y.clientHeight),T(2*Math.PI*g.y/Y.clientHeight),f.copy(p),i.update()}function tt(b){S.set(b.clientX,b.clientY),P.subVectors(S,A),P.y>0?B(W()):P.y<0&&k(W()),A.copy(S),i.update()}function mt(b){m.set(b.clientX,b.clientY),u.subVectors(m,_).multiplyScalar(i.panSpeed),I(u.x,u.y),_.copy(m),i.update()}function ct(b){b.deltaY<0?k(W()):b.deltaY>0&&B(W()),i.update()}function z(b){let Y=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,i.keyPanSpeed),Y=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,-i.keyPanSpeed),Y=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?v(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(i.keyPanSpeed,0),Y=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?v(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(-i.keyPanSpeed,0),Y=!0;break}Y&&(b.preventDefault(),i.update())}function K(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const b=.5*(y[0].pageX+y[1].pageX),Y=.5*(y[0].pageY+y[1].pageY);f.set(b,Y)}}function rt(){if(y.length===1)_.set(y[0].pageX,y[0].pageY);else{const b=.5*(y[0].pageX+y[1].pageX),Y=.5*(y[0].pageY+y[1].pageY);_.set(b,Y)}}function lt(){const b=y[0].pageX-y[1].pageX,Y=y[0].pageY-y[1].pageY,F=Math.sqrt(b*b+Y*Y);A.set(0,F)}function C(){i.enableZoom&&lt(),i.enablePan&&rt()}function At(){i.enableZoom&&lt(),i.enableRotate&&K()}function Et(b){if(y.length==1)p.set(b.pageX,b.pageY);else{const F=at(b),ot=.5*(b.pageX+F.x),ft=.5*(b.pageY+F.y);p.set(ot,ft)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const Y=i.domElement;v(2*Math.PI*g.x/Y.clientHeight),T(2*Math.PI*g.y/Y.clientHeight),f.copy(p)}function it(b){if(y.length===1)m.set(b.pageX,b.pageY);else{const Y=at(b),F=.5*(b.pageX+Y.x),ot=.5*(b.pageY+Y.y);m.set(F,ot)}u.subVectors(m,_).multiplyScalar(i.panSpeed),I(u.x,u.y),_.copy(m)}function Mt(b){const Y=at(b),F=b.pageX-Y.x,ot=b.pageY-Y.y,ft=Math.sqrt(F*F+ot*ot);S.set(0,ft),P.set(0,Math.pow(S.y/A.y,i.zoomSpeed)),B(P.y),A.copy(S)}function zt(b){i.enableZoom&&Mt(b),i.enablePan&&it(b)}function vt(b){i.enableZoom&&Mt(b),i.enableRotate&&Et(b)}function Rt(b){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",Jt),i.domElement.addEventListener("pointerup",jt)),O(b),b.pointerType==="touch"?fe(b):ne(b))}function Jt(b){i.enabled!==!1&&(b.pointerType==="touch"?E(b):$t(b))}function jt(b){Q(b),y.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",Jt),i.domElement.removeEventListener("pointerup",jt)),i.dispatchEvent(ao),s=r.NONE}function ne(b){let Y;switch(b.button){case 0:Y=i.mouseButtons.LEFT;break;case 1:Y=i.mouseButtons.MIDDLE;break;case 2:Y=i.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Gn.DOLLY:if(i.enableZoom===!1)return;q(b),s=r.DOLLY;break;case Gn.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;X(b),s=r.PAN}else{if(i.enableRotate===!1)return;nt(b),s=r.ROTATE}break;case Gn.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;nt(b),s=r.ROTATE}else{if(i.enablePan===!1)return;X(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ss)}function $t(b){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Z(b);break;case r.DOLLY:if(i.enableZoom===!1)return;tt(b);break;case r.PAN:if(i.enablePan===!1)return;mt(b);break}}function Bt(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(ss),ct(b),i.dispatchEvent(ao))}function Xt(b){i.enabled===!1||i.enablePan===!1||z(b)}function fe(b){switch(et(b),y.length){case 1:switch(i.touches.ONE){case Hn.ROTATE:if(i.enableRotate===!1)return;K(),s=r.TOUCH_ROTATE;break;case Hn.PAN:if(i.enablePan===!1)return;rt(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Hn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;C(),s=r.TOUCH_DOLLY_PAN;break;case Hn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;At(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ss)}function E(b){switch(et(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Et(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;it(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;zt(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;vt(b),i.update();break;default:s=r.NONE}}function x(b){i.enabled!==!1&&b.preventDefault()}function O(b){y.push(b)}function Q(b){delete R[b.pointerId];for(let Y=0;Y<y.length;Y++)if(y[Y].pointerId==b.pointerId){y.splice(Y,1);return}}function et(b){let Y=R[b.pointerId];Y===void 0&&(Y=new yt,R[b.pointerId]=Y),Y.set(b.pageX,b.pageY)}function at(b){const Y=b.pointerId===y[0].pointerId?y[1]:y[0];return R[Y.pointerId]}i.domElement.addEventListener("contextmenu",x),i.domElement.addEventListener("pointerdown",Rt),i.domElement.addEventListener("pointercancel",jt),i.domElement.addEventListener("wheel",Bt,{passive:!1}),this.update()}}class wp extends de{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new yt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const li=new L,oo=new Zt,lo=new Zt,co=new L,ho=new L;class Rp{constructor(t={}){const e=this;let i,r,s,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),oo.copy(g.matrixWorldInverse),lo.multiplyMatrices(g.projectionMatrix,oo),c(p,p,g),f(p)},this.setSize=function(p,g){i=p,r=g,s=i/2,o=r/2,l.style.width=p+"px",l.style.height=g+"px"};function c(p,g,_){if(p.isCSS2DObject){li.setFromMatrixPosition(p.matrixWorld),li.applyMatrix4(lo);const m=p.visible===!0&&li.z>=-1&&li.z<=1&&p.layers.test(_.layers)===!0;if(p.element.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(e,g,_);const A=p.element;A.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(li.x*s+s)+"px,"+(-li.y*o+o)+"px)",A.parentNode!==l&&l.appendChild(A),p.onAfterRender(e,g,_)}const u={distanceToCameraSquared:h(_,p)};a.objects.set(p,u)}for(let m=0,u=p.children.length;m<u;m++)c(p.children[m],g,_)}function h(p,g){return co.setFromMatrixPosition(p.matrixWorld),ho.setFromMatrixPosition(g.matrixWorld),co.distanceToSquared(ho)}function d(p){const g=[];return p.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function f(p){const g=d(p).sort(function(m,u){if(m.renderOrder!==u.renderOrder)return u.renderOrder-m.renderOrder;const A=a.objects.get(m).distanceToCameraSquared,S=a.objects.get(u).distanceToCameraSquared;return A-S}),_=g.length;for(let m=0,u=g.length;m<u;m++)g[m].element.style.zIndex=_-m}}}const Cp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuMTRlY2I0MmYyYywgMjAyMy8wMS8xMy0xMjoyNTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjIgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA0LTEzVDE3OjE1OjUyLTA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNC0xOFQwOTo0MzoxMi0wNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNC0xOFQwOTo0MzoxMi0wNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MGFiMzM2M2QtNjhlMS00NTg2LTk4ZDYtMTU5MzYwODVlZjA2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBhYjMzNjNkLTY4ZTEtNDU4Ni05OGQ2LTE1OTM2MDg1ZWYwNiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjBhYjMzNjNkLTY4ZTEtNDU4Ni05OGQ2LTE1OTM2MDg1ZWYwNiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGFiMzM2M2QtNjhlMS00NTg2LTk4ZDYtMTU5MzYwODVlZjA2IiBzdEV2dDp3aGVuPSIyMDIzLTA0LTEzVDE3OjE1OjUyLTA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuMiAoTWFjaW50b3NoKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6E1u7EAAABD0lEQVRIibWWPW7CQBgFxyCZQ0BFjkC4B4SfeyS3gDY5QxoKOAg0NClQlApxgDTBzUuxXliMF1v2+kmWrJU9U+y3z44k0WRajdJLCGJgDnwCP8AZ+AW+0rVZ+ow/knzXWNJBxTlIevFx8hbbkhYlwNks0ncLBVXgruShYFoDbjN1mZGuYxoD30Cv8siYHIE+kMDtFM0CwAG6mMkjKxgFgN+xXMEwoODZ3rh78Ad0AgkSy2plFoPHFZwCci8sV7APKNjmCTYBBRdWUwftCdO8d5v8VhMO8GrhQG7ZLWv00DLL89X1ewX4h0rWtb0mKv/BuWlQedo0LzGmBMfAAFNkdiN3wBpY8eCQFglqp/G/in8U1YLSxBKbYwAAAABJRU5ErkJggg==",Pp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAi7SURBVHgB7Z3LbhRHFIZ/8wCxs40U02QXKQa8ixQI9i7iEmCXICRglasEbAiXhfGCOGEDSATYAQohYoUJF2XnAUOSnR0mEkuXzQPEzgt06u+uNu3x9EyPp7p7quZ8UtEzhunGc06dS11ODcBDwjAM9GW7brxu1m3IvA7MPwkyPqp0W041vl/UbZ7vBwYG5uEZA3AcI+wx3baZK98PoRioFPOmPeVVK4WCwzinAFrgFC57937dDiC7N5dFohC3tTLU4BjOKIAW/Ji+HEEs9KJ6eLfQQkzr9kArwzQcoKcVQAs96ekn0LtCz0LpVtNt0nU3UTrs7brNhP4wE8YWTGhF6J/gG1nQ7SiEtYT+C76RhbBHFKHSGCCMU7ibiNO3foSB4skqY4RNqAAt+CHdJvTLBfSv8AkzGlqDiTBOb0undAsQxsEQe30AIY3S7VjZYwmlWQDT6y/plzMQ4Tcj0G3GfEelUYoFML5eBJ8fpdt4GbFB4RZAC5+jd3MQ4XdCoNuc/u5OoGAKtQDGnBX+S3jOeW0JJlEQhSiAiWgZ6B2AYAOmiwwQl2EZ6wpg/P19xDN2gj0UCogLrCqABHuFo2BZCawpgAi/NBQsKoEVBRDhl46CJSXoWgFE+JWhYEEJulIAE+1Ljl8dXIo23k120O1AkIzpVwszrZvogg0rgJnNkzy/eg50M3+wIRegH3hcXy5D6CWOaldwGx3SsQKYoI9+37VFmr7DOGC006BwIwrARRwBhF5EIVaC3EFhRzGA8TUBhF4l0G2ikw/ktgBmJc8MBBcYz7uyKJcCSL7vHAo5XUFeF8CoP4DgCgFyrsNoawFM1L8AwUW2tMsK8liAUhcpClZpO0rYUgHM7hUZ7XOXsbDNnsSWLkByfi+oaTcwnvWXmRbA9P4Aguu0tAKZFkB6v1dkWoGmFsBoTADBFzKtQJYL6Gg4UXCCpjJd5wIk7/ea0cZSd80sgPR+f1mX0jezABL8+QuLXb6d/sEaC6CF3wt194TiGGoMBhtdwH4IvnMk/WaNC9Da8S9kqZfvcIp4SzJVvGoBjGkQ4ftPUmo3Iu0CjkDoF1azgbQCyHbu/mE11otigH4Y/FlZ+Q8PHz/Cs9k/UK/XsbT0GssrK9HfDQ0OYnj4XWwdGcHOHR9h3949GBx8C54T6DhgMVEAmoT78BAK+uq1G/jl7q+rAs/D4UOf49yZ7yLF8BRWHLmVuIAxeAZ7/KnTZ/H+yHb8dP1GR8Ind7TC8LOnTp/T9+rss44QufzEAnC59xg8gb3+kz2fYnFpCTbYPDyM3x//5ps14Gkno4kF8CYArNf/sSp8wnvxni/1vT0i4B8DYXwowxw8wHbPb8RDSxDQAngx+EOfX6TwSWIJPIoJIhfghfm/MPVDocJP4DMuTF2EJwR0AdznfxwOQ9PPiL1MXtXnfXAFV2gBNsNxLkz9iLK5eu06PGBwwPUUkP74neH3UDaDevTwVX0uujpMzfkg8OGjJ6gCKl5Vz7aI+1nA7PMXqIpnFT7bFlSAAA5T5eAMJ5UcJ6jk0CiblJH6ZT/7NVzHeQWoclDGhwEh5xVA6A7nFaDKNMzxFDDCeQXgBE11z3Z/UogKoOAwW0c+QFVwCZnjKOctANfwVfbsndU92xLLzluAfXt3V+aL9+3ZDceJFGARDkPhHz70GcqGi0Y9CAJXqADWz6Irm2++/hJlc/bMKXiAct4FEGYC335VnhJQ4arMPiyiBnzZE8BRuQ937IoWhxQJF4H8+fxptJnEA8ZpAebhAfTHRS/Y5L35DE+ET5Y3mVqyzscBhGb53t07hSgB73nv7s++mH7CaiHzyTiAgidwYMi2JUh6vgcDP2kiy58owFN4BHvpX9pP2wgMGfDR53vU8xP+5h/J1rCj6PL8uV6F6wW+n7oY7fXLC3cGHz50SAv/Cx8Fn3BQu4Dpvtkezs2hjx4/wezsC7ys1yPF4GYSQoFT0CPaxH+sh3f36hE+jwK9LKKzBFZrBEl5uL4i2hjKF+nJoAcQ+oXV1D+tANMQ+oXVE0bTLoDLw+kGpFKY36ypFrpqAUzdOHED/rPG0jcuCLkFwXfWdPJmxaKlWqi/KG3pt6R/0GxJ2BUIvlJr/EEzC+BNyRhhHesOklxnAcyJEjUIvlFrdopo1qrgSQi+0VSmrY6N86p2YJ+zLvhLaLUvQKyAP2TKst3RsWIF3Cez95N2O4PECrhPSxm2tABErIDTTOvef7DVP8ijAAHkIElX2dIs9UvTdnOouYG4AveYbCd80tYCEDNVzNHBAIILKMTHxLZd7p9re7i50TEIrnAsj/BJ7voA+oY1yESRC1wxsspFLheQIK6g52mZ8zejowohxqyMw5OtZJ6RyKYjOi4RYyLLkxB6jVxRfyMbqhHE48Yg8UAvQeFfxgboKAZoRMcErCtwAEKVtB3ta0W3CsCgkEPFcuxsNSjkzPez6KpMnHnwQXi0vdwhlG7j3QifdGUBEsx8AS1BAKEMFGLhK3SJFQUgogSloWBJ+MSaAhBRgsJRsCh8YrVUrPmPcTBCQbANV2tbFT6xXivY/Ae591x2G9uD36V14ZNCikUzMjW5qawj6B5O7hzsNtrPwmoM0AwdF5zQlwnIfsNOocBPmlHXwihcAYgEhx2jUJDJb6SU8wKiYkTxNKXMH7SH39FoGcInpViANNoajCEuSRdASKMQr+SpoURKPzHE/ILMEiRAfAO/i9GyhU9KtwBpTGxwCf07o1hD3OsVKqLSM4NMbMB0kQtOFfqHGuIgb7xK4fccLFnLgpWhv8yEcQwktIJfkvmyfGEm7FHBVxoDtCOMY4Tzuu2Ce1kDB3KY0k2bqis9SU8rQJowPtqGbT96d1SRQue4/e0qIvqN4IwCpDHm9Khu21D9cjSFuPYeBT9f1Jh9UTipAGmMm6ASjOGNQhRlIShchfiAjaiYlutRvPMK0IwwLnVHJeA10G2zeZ+0IOOjKnVlW0m9nvcxZfsf8LxICy+D1uIAAAAASUVORK5CYII=",Lp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcbSURBVHgB7d1PbBRlGMfxZ403E7bGs2V71Ii0RxMI25uJiXpUxFBO/CmJcAFqD9AD8uciJKLcbOP/G5qYeKNKjd5ardGbDDXxZmwPnuvzdGfLFHa7s7sz8877zveTvEzpTts0/PK8z/vOzFKTnG1ubjb00NSxX0cjHiPxEeUR6ViPj7/oWLFRq9UiyVFNcqCha+rhNR2vC0HzXaRjUceChnFRMpZZADV0VtXe0XFGWhUO4Yl0zOlYzKoyDh1AgldJNlXP67g5bBCHCqCGz4J3SQheVUU65jSE8zKggQIYLyw+ltbiAoh0TA5SDZ+QPsVVb1kIHx5q6FjWbJyRPvVVAfUHvC+tXg/o5pJWwrm0J6cOoIbPptwpAXqb1xAeS3NiqgBq+GzKHRcgPdvEnuh1Us8eMK58hA/9Go+zs6tdA6jf4KIw7WJwU/G6oauuU3C82r0hwPDO6nTcMUsdAxjv81nfxwYzsmBXTiY67RN2m4LvCuFDdixLHfvBxwKo1W9KuIMF2Wt22qjeMQXHU69Vv4YA2bOpeEyn4vX2Jx6tgLbwaAiQD5uKd1TB7QrIwgMF2VEFkxWwKYQP+dtRBZMV8L4w/aIY61oBn7YPtipg/AxHQ4BijMSZ256CjwpQLHtgrTUFM/3CgUin4bFavPq9L0DxGjYFc6sVXJkkgHBp3AK4XwA3tqbghgBu7LUAcvUDrozYKnhTAEf6fjAdyBIBhFMEEE4RQDhFAOEUAYRTBBBOEUA4RQDhFAGEUwQQThFAOEUA4RQBhFMEEE4RQDhFAOHUk1Jyn372hZyfmZX1jQ0J1Yv7XpDpkyfkyFtvStWU/pb85/dNyIO1NamCa1cuy+lTJ6RKSh/Ap+rPSFXU63X57ttvtipiVdADlsiGthlvHH5761gVBLBkrN24fOW6VAUBLKFbH92WDz68LVVAD1hS1g/+vPS9jI4+KyGjApaU9YEvv/Jq8P0gASyxKvSDBLDkQu8H6QE9EHI/SAX0QMj9IAH0RKj9IAH0SIj9ID2gZ0LrB6mAngmtHySAHgqpHySAngqlH6QH9FgI/SAV0GMh9IME0HO+94MEMAA+94P0gIHwtR+kAgbC136QABakXt8jszPnt556+2/jn63xk1asI4ezexbYx36QKbgANi1a8PaOjnZ83YJj1Wtt7S/Jgk/PFxPAAvy+utw1fG0WwpcONDOZQn16vpgpOGc2xfYKn7FzTp88Llnw6fliApiz6VPpQ3Xw4AHJilXUcxdmpeyYgnNmi41+ZPn72lT899qfUmZUwIAxBUN+WPox9bm/rv4mWcpyiycvBDBn9+4tpT73VoaX02zr59rVy1J29IA5S3uJzPYAn9s3Ltn8zD1bm9xpVt+uUQFz1r5Ettsms71m52RlduaCF+EzBLAAtiVi1e34ydPa561uf/7e0pJeOrumG9CHMnsX2Gm9AjKd0X5iEZiCA2LT/B+rK+ITKmAgrO+zy2++IYCBuH71PW/6viQCGADr+3zY8+uEHtBzPvZ9SVRAj/na9yURQI/52vclEUBP+dz3JdEDesj3vi+JCuiZEPq+JALomRD6viQC6JFQ+r4kekBPhNT3JVEBPRBa35dEAD0QWt+XRABLLsS+L4kesMSs77Nb60fqdQkVFbCk2n1fyOEzBLCkfHquYxgEsIR8e65jGPSAJVOFvi+JClgyVej7kkofwHqF/jHenTlfib4vqfQB/OrzT4L8j5qT7I0kv9Tfc/bCOama0veACBs9IJwigHCKAMIpAginCCCcIoBwigDCKQIIpwggnCKAcIoAwikCCKcIIJwigHCKAMIpAginCCCcIoBwigDCKQIIpwggnLIARgK4EVkA1wVwY50KCJceWAAfCODGigUwvLdehy9W7K05GvrBfQGKN/ZErVaLhD4QxYsse+19wK8FKNai/dEO4B0BirVgf9Taf9Ne8F89jAiQP5t+x+yD5KW4mwIUY679QbICWvWz1TBVEHmyK28T8eL3YQXUT9gLVEHkbaEdPlNLvkIVRM4iHZPJAO64HSuugnMC5GMuGT5T63SWVsK7emgKkJ3tlW9StxtSjwm3aSE7lqXJTi90DGBcJpmKkZXHpt62rrfk6xfcEFbFGN5cnKWOatKD9oPzejgqQP9sy2VqtxN6BtBoCJf1MC5AeisavoleJ6V6Ki7+RgsCpLOQJnwm9WOZcSllYYJebvaadpP6ei5Yv/ElPZwVtmjwOMvEWc3ImX6+KFUP+Kj4Nn7brG4I0Lq59Fi3rZbdDPTOCPaD4l1t27COBFXVrnqTg4TPDFQBk+JqaGXXtmq4iaEa2ndO3YjvHxjY0AFsi4PY1HFRmJpDlVnw2jILYJKGsamHKR2HhDD6LpLWQ2t3NHSLkrFcApgUV8bxeOyXViBHhGCWTSStCmdHe7cMe8OCxUF7u7T+B/tMaRkYWjueAAAAAElFTkSuQmCC",Dp=""+new URL("Attractor - Opacity map-919ce491.png",import.meta.url).href;const vn={quantize:function(n){const e=n/1;return Math.round(e/.1)*.1},hypot:function(n,t){n=Math.abs(n),t=Math.abs(t);var e=Math.min(n,t),i=Math.max(n,t);return i+3*e/32+Math.max(0,2*e-i)/8+Math.max(0,4*e-i)/16},randomNormalized:function(){let e=0,i=0;for(;e===0;)e=Math.random();for(;i===0;)i=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*i)*1+0},randomPlusMinus:function(){return Math.random()<.5?-1:1},randomSkewed:function(n=10,t=10){const e=Math.pow(Math.random(),n),i=Math.pow(Math.random(),t);return e/(e+i)},mapToRange:function(n,t,e){return t+n*e},formatChartNumber:function(n){return n>=1e6?(n/1e6).toFixed(2)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":n.toString()}};class Up{constructor(t){this.csvFileUrl=t,this.data=[],this.domains={},this.parseCSV()}parseCSV(){return fetch(this.csvFileUrl).then(t=>t.text()).then(t=>{const e=t.split(`
`),i=[];for(let r=0;r<e.length;r++){const s=e[r].trim();if(s==="")continue;const o=s.split(","),a=o.length;if(a===2){const l=parseFloat(o[0]),c=parseFloat(o[1]);!isNaN(l)&&!isNaN(c)&&i.push({x:l,y:c})}else if(a===3){const l=parseFloat(o[0]),c=parseFloat(o[1]),h=parseFloat(o[2]);!isNaN(l)&&!isNaN(c)&&!isNaN(h)&&i.push({x:l,y:c,z:h})}}this.data=i,this.calculateDomains()}).catch(t=>{console.error("Error:",t)})}calculateDomains(){const t=Object.keys(this.data[0]);for(let e=0;e<t.length;e++){const i=t[e],r=this.data.map(o=>o[i]),s=[Math.min(...r),Math.max(...r)];this.domains[i]=s}}normalizedValue(t){const e=this.data[t],i={},r=Object.keys(e);for(let s=0;s<r.length;s++){const o=r[s],a=e[o],l=this.domains[o],c=(a-l[0])/(l[1]-l[0]);i[o]=c}return i}}function Ip(n){let t={div:null,obj:null};return t.div=document.createElement("div"),t.div.className="particle-label",t.div.textContent=n,t.obj=new wp(t.div),t}const Mn=.03,Qt=1e3,Ii=ce.Easing.Exponential.InOut;ce.Easing.Exponential.In;const Np=500,Fp="./assets/globe-points.bin",Op=999;new Ot("#f3f4f5");const Gi=new Ot("#0a0e12"),Wo=new Ot("#f3f4f5"),Ni=new Ot("#325CA4"),vr=new Ot().copy(Gi).lerp(Wo,.4),Bp=200,vs=20,zp=new Array(vs),Gp=20,dn=7.4,Hp=.08,kp=.04;for(let n=0;n<=vs;n++){const t=n/vs,e=new Ot().copy(Gi).lerp(Wo,t);zp[n]=e}new Zt().makeRotationX(.6);const Vp="toggle-interact";new Up("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv");const Wp="./assets/user-data.csv",Xp=5,Yp={init:function(){console.log("Audience initializing..."),he.init(()=>{Kt.init(),qt.init(),Ne.init(),rn.init(),xs.init(),Wt.init(),dt.init(),Ms.init(),Yt.init(),Ce.init(),setTimeout(()=>{xs.act(()=>rn.chart(Hi)),Wt.animate()},Np)})}};window.onload=function(){Yp.init()};const qt={innerWidth:0,innerHeight:0,aspectRatio:0,centerX:0,centerY:0,marginX:80,marginY:80,init:function(){console.log("> Initializing Viewport..."),this.update(),window.addEventListener("resize",this.onResize,!1)},update:function(){this.innerWidth=window.innerWidth,this.innerHeight=window.innerHeight,this.centerX=this.innerWidth*.5,this.centerY=this.innerHeight*.5,this.aspectRatio=this.innerWidth/this.innerHeight},onResize:function(n){qt.update(),Wt.updateViewport(),Yt.updateViewport()}},Ne={mouse:null,mouseX:0,mouseY:0,init:function(){console.log("> Initializing Mouse..."),this.mouse=new yt,Kt.orchestra.addEventListener("mousedown",this.onDown,!1),Kt.orchestra.addEventListener("mousemove",this.onMove,!1),Kt.orchestra.addEventListener("mouseup",this.onUp,!1),Kt.orchestra.addEventListener("click",this.onClick,!1)},update:function(n){this.mouseX=n.clientX,this.mouseY=n.clientY,this.mouse.x=this.mouseX/qt.innerWidth*2-1,this.mouse.y=-(this.mouseY/qt.innerHeight)*2+1},onDown:function(n){n.preventDefault(),Yt.isEnabled&&n.target.id==="three"&&Yt.startDrag()},onClick:function(n){},onMove:function(n){n.preventDefault(),Ne.update(n),Wt.mouseMove(n),Ce.mouseMove(n),Yt.isEnabled&&Yt.updateDrag()},onUp:function(n){n.preventDefault(),Yt.isEnabled&&Yt.endDrag()}},Kt={body:null,orchestra:null,interface:null,chartSelector:null,legend:null,orb:null,chartMagnet:null,controlMode:null,scatterPlot:null,markUpUI:`
        <div id="feature-name" class="nav-item">Audience</div>
        <div id="chart-selector" class="pill">Universe</div>
        <div id="legend">100 users</div>
        <div id="orb"></div>
		<div id="scatterplot"><div class="axis" id="x"></div><div class="axis" id="y"></div></div>
       	<div id="chart-magnet"><div class="axis"><div class="line"></div><div class="min"></div><div class="max"></div></div><div class="ring"></div><div id="magnet"><div class="label">Account age</div></div></div>
		<!--<div id="control-mode"><div id="selector"></div><div class="toggle selected" id="toggle-interact"><div class="icon"></div></div><div class="toggle" id="toggle-select"><div class="icon"></div></div></div>-->
		`,init:function(){console.log("> Initializing DOM..."),this.body=document.body,this.orchestra=document.getElementById("orchestra"),this.interface=document.getElementById("interface"),this.interface.innerHTML=this.markUpUI,this.chartSelector=document.getElementById("chart-selector"),this.legend=document.getElementById("legend"),this.orb=document.getElementById("orb"),this.chartMagnet=document.getElementById("chart-magnet"),this.controlMode=document.getElementById("control-mode"),this.scatterPlot=document.getElementById("scatterplot")},addClass:function(n){this.body.classList.add(n)},removeClass:function(n){this.body.classList.remove(n)}},rn={id:"UI",mouseMode:Vp,interactive:!0,init(){console.log("> Initializing UI..."),this.setupKeyboard()},interactivity(n){n==!1?Kt.orchestra.classList.add("locked"):Kt.orchestra.classList.remove("locked"),this.interactive=n},chart(n){this.interactive===!1||Ce.activeChart===n||Ce.changeInProgress===!0||Yt.isSelectionActive===!0||(this.interactivity(!1),Ce.activeChart&&Kt.orchestra.classList.remove(Ce.activeChart.selector),Kt.orchestra.classList.add(n.selector),Kt.chartSelector.textContent=n.uiLabel,Ce.switchTo(n,()=>{this.interactivity(!0)}))},setupKeyboard:function(){function n(t){const i={1:()=>rn.chart(Hi),2:()=>rn.chart(Us),5:()=>rn.chart(Mr),3:()=>rn.chart(Xo),6:()=>rn.chart(Ss),4:()=>rn.chart(Sr)}[t.key];i&&xs.act(i)}window.addEventListener("keypress",n,!1)}},Wt={scene:null,camera:null,renderer:null,controls:null,raycaster:null,targetFps:180,targetTime:null,then:null,fps:0,checkIntersections:!1,init:function(){console.log("> Initializing ThreeJS..."),this.then=performance.now(),this.targetTime=1e3/this.targetFps,this.fps=0,this.scene=new vp,this.camera=new Ie(Gp,qt.aspectRatio,.1,1e3),this.camera.position.z=dn,this.renderer=new zo({antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.setSize(qt.innerWidth,qt.innerHeight),this.renderer.sortObjects=!1,this.renderer.domElement.id="three",this.labelRenderer=new Rp,this.labelRenderer.setSize(qt.innerWidth,qt.innerHeight),this.labelRenderer.domElement.classList.add("label-renderer"),this.raycaster=new Tp,this.raycaster.params.Points.threshold=kp,Kt.orchestra.appendChild(this.renderer.domElement),Kt.orchestra.appendChild(this.labelRenderer.domElement)},updateCameraControls:function(n){this.controls&&(this.controls.enabled=n)},resetCameraControls:function(n){!this.controls&&n===!0?(this.controls=new bp(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enableRotate=!0,this.controls.enablePan=!1,this.controls.enableZoom=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=Hp):this.controls&&n===!1&&(this.controls.dispose(),this.controls=null)},updateViewport:function(){this.camera.aspect=qt.aspectRatio,this.camera.updateProjectionMatrix(),this.renderer.setSize(qt.innerWidth,qt.innerHeight),this.labelRenderer.setSize(qt.innerWidth,qt.innerHeight)},add:function(n){this.scene.add(n)},remove:function(n){this.scene.remove(n)},faceCamera:function(n){n.lookAt(this.camera.position)},cameraFit:function(){const n=new L(1,1,1),t=new L(0,0,0),e=1.2,r=Math.max(n.x,n.y,n.z)/(2*Math.atan(Math.PI*this.camera.fov/360)),s=r/this.camera.aspect,o=e*Math.max(r,s),a=this.controls.target.clone().sub(this.camera.position).normalize().multiplyScalar(o);this.controls.maxDistance=o*10,this.controls.target.copy(t),this.camera.near=o/100,this.camera.far=o*100,this.camera.updateProjectionMatrix(),this.camera.position.copy(this.controls.target).sub(a)},cameraTween:function(n,t){if(n===t)return;const i=1*(n-t);var r=0;new ce.Tween({v:0}).to({v:1},Qt).easing(Ii).onUpdate(function(){var o=i*this._object.v;Wt.camera.translateZ(r-o),r=o}).start()},animate:function(){requestAnimationFrame(this.animate.bind(this)),this.fpsTicker()===!0&&(this.controls&&this.controls.update(),ce.update(),Ce.animate(),dt.animate(),this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera))},fpsTicker:function(){const n=performance.now(),t=n-this.then,e=t>=this.targetTime;return e&&(this.then=n,this.fps=1e3/t),e},mouseMove:function(){this.checkIntersections=!0}},xs={id:"ActionManager",history:[],index:-1,init(){console.log("> Initializing ActionManager...")},act(n){n()},log(n){this.history.splice(this.index+1),this.history.push(n),this.index++;const t={index:this.index},e=`?index=${this.index}`;history.pushState(t,"",e),console.log(`> ${this.id}: Added action to history [${this.history.length} actions]...`)},replay(){const n=this.history[this.index];n&&n()},backButtonClick(){console.log(`> ${this.id}: Going back...`),this.index>0?(this.index--,this.replay()):window.history.back()},forwardButtonClick(){console.log(`> ${this.id}: Going forward...`),this.index<this.history.length-1&&(this.index++,this.replay())}},dt={id:"Particles",total:0,origin:null,container:null,points:null,scales:null,selected:null,positions:null,speed:null,acceleration:null,dataOpacity:null,colors:null,states:null,hovered:null,refreshPositions:!1,refreshOpacity:!1,inverseRotationMatrix:null,opacityLerp:0,tweenPosition:new L,spareVector:new L,init:function(){console.log("> Initializing particle scene..."),this.origin=new L(0,0,0),this.container=new de,this.container.position.set(0,0,0),this.container.rotation.y=Math.PI,this.updateRotationMatrix(),Wt.scene.add(this.container),this.load()},load:function(){this.total=he.total,console.log(`> Loading ${this.total} particles into BufferGeometry...`),this.dataOpacity=new Float32Array(this.total),this.selected=new Array(this.total).fill(!1),this.positions=new Float32Array(this.total*3),this.speed=new Float32Array(this.total),this.acceleration=new Float32Array(this.total*3),this.colors=new Float32Array(this.total*4);const n=new Ve;n.setAttribute("position",new ye(this.positions,3)),n.setAttribute("color",new ye(this.colors,4)),n.computeBoundingSphere();const e=new Ds().load(Cp),i=new ko({size:Mn,map:e,alphaTest:.1,sizeAttenuation:!0,transparent:!0,vertexColors:!0});this.points=new Mp(n,i),this.points.position.set(0,0,0),this.points.rotation.set(0,0,0),this.container.add(this.points)},updateGeometryBuffers:function(){this.points.geometry.setAttribute("position",new ye(this.positions,3)),this.points.geometry.setAttribute("color",new ye(this.colors,4)),this.points.geometry.computeBoundingSphere(),this.updatePointAttributes()},computeBoundingSphere:function(){this.points.geometry.computeBoundingSphere()},killExcess:function(n){const t=this.total-n;let e=0,i={v:0};console.log(`> ${this.id}: Killing off ${t} particles...`);for(let r=n;r<this.total;++r){const s=e/t*Qt;dt.tweenOpacity(r,i,0,s,Qt),e++}},updateLoad:function(n,t){console.log(`> ${this.id}: Updating point geometries from ${this.total} to ${n}...`);const e=new Array(n),i=new Float32Array(n),r=new Float32Array(n*3),s=new Float32Array(n*4),o=new Float32Array(n),a=new Float32Array(n*3);if(e.fill(!1),i.set(this.dataOpacity.subarray(0,n),0),r.set(this.positions.subarray(0,n*3),0),o.set(this.speed.subarray(0,n),0),a.set(this.acceleration.subarray(0,n*3),0),s.set(this.colors.subarray(0,n*4),0),t){let l=this.total;for(;l<n;){const c=n-l,h=Math.min(this.total,c);i.set(this.dataOpacity.subarray(0,h),l),r.set(this.positions.subarray(0,h*3),l*3),o.set(this.speed.subarray(0,h),l),s.set(this.colors.subarray(0,h*4),l*4),l+=h}}this.selected=e,this.dataOpacity=i,this.positions=r,this.speed=o,this.colors=s,this.updateGeometryBuffers(),this.computeBoundingSphere(),this.total=n},animate:function(){if(!this.points&&!this.points.geometry)return;let n=Yt.isCheckNeeded?{v:0}:null,t=1;for(let e=0;e<dt.total;e++){if(Yt.isCheckNeeded){const{color:i,useTween:r}=Yt.checkIfSelected(e);r?this.tweenColor(e,n,i,0,Bp):this.setColor(e,i)}Ce.localAnimation===!0&&Ce.activeChart.particleAnimate(e),Ce.activeChart.particleOpacity&&(this.spareVector.fromBufferAttribute(this.points.geometry.attributes.position,e),t=Ce.activeChart.particleOpacity(e,this.spareVector)),dt.setComputedOpacity(e,t)}this.updatePointAttributes()},updatePointAttributes:function(){this.refreshPositions===!0&&(this.points.geometry.attributes.position.needsUpdate=!0,this.refreshPositions=!1),this.refreshOpacity===!0&&(this.points.geometry.attributes.color.needsUpdate=!0,this.refreshOpacity=!1)},introSpin:function(){new ce.Tween(this.container.rotation).to({y:0},Qt*2).easing(ce.Easing.Exponential.Out).start()},tween:function(n,t,e,i,r){const s=dt.getPosition(n),o=dt.getOpacity(n);dt.setColor(n,0),new ce.Tween(t).to({v:1},r).easing(Ii).delay(i).onUpdate(function(){const l=dt.tweenPosition.lerpVectors(s,e.endPoint,t.v),c=Eo.lerp(o,e.endOpacity,t.v);dt.setPosition(n,l.x,l.y,l.z),dt.setOpacity(n,c)}).start()},tweenTo:function(n,t,e,i,r,s){new ce.Tween(t).to({v:1},s).easing(Ii).delay(r).onUpdate(function(){const a=dt.tweenPosition.lerpVectors(e,i,t.v);dt.setPosition(n,a.x,a.y,a.z)}).start()},tweenColor:function(n,t,e,i,r){const s=new Ot,o=dt.getColor(n);new ce.Tween(t).to({v:1},r).delay(i).onUpdate(function(){s.lerpColors(o,e,t.v),dt.setColor(n,s)}).start()},tweenOpacity:function(n,t,e,i,r){new ce.Tween(t).to({v:e},r).delay(i).onUpdate(function(){dt.setOpacity(n,t.v)}).start()},point2D:function(n,t,e){const i=new L(n,t,e);return i.applyQuaternion(Wt.camera.quaternion),i},point3D:function(n,t,e){const i=new L(n,t,e);return i.applyQuaternion(Wt.camera.quaternion),i},resizeAll:function(n){new ce.Tween(this.points.material).to({size:n},Qt).easing(Ii).start()},updateRotationMatrix:function(){this.inverseRotationMatrix=new Zt().makeRotationY(-this.container.rotation.y)},mouseMove:function(){},mouseOverParticle:function(n){this.hovered!==n&&(Kt.addClass("particle-hover"),this.hovered=n,Ms.hover(n))},mouseOutParticle:function(){this.hovered&&(Kt.removeClass("particle-hover"),Ms.hideMarker(),this.hovered=null)},setSpeed:function(n,t){this.speed[n]=t},getSpeed:function(n){return this.speed[n]},setAcceleration:function(n,t,e,i){n*=3,this.acceleration[n]=t,this.acceleration[n+1]=e,this.acceleration[n+2]=i},getAcceleration:function(n){n*=3;const t=this.acceleration[n],e=this.acceleration[n+1],i=this.acceleration[n+2];return new L(t,e,i)},offsetPosition:function(n,t,e,i){n*=3,this.positions[n]+=t,this.positions[n+1]+=e,this.positions[n+2]+=i},setPosition:function(n,t,e,i){n*=3,this.positions[n]=t,this.positions[n+1]=e,this.positions[n+2]=i,this.refreshPositions=!0},getPosition:function(n){n*=3;const t=this.positions[n],e=this.positions[n+1],i=this.positions[n+2];return new L(t,e,i)},setColor:function(n,t){n*=4,this.colors[n]=t.r,this.colors[n+1]=t.g,this.colors[n+2]=t.b},getColor:function(n){n*=4;const t=this.colors[n],e=this.colors[n+1],i=this.colors[n+2];return new Ot(t,e,i)},getOpacity:function(n){return this.dataOpacity[n]},setOpacity:function(n,t){this.dataOpacity[n]=t},setComputedColor:function(n){let t=Gi;Yt.isSelectionActive?t=this.selected[n]?Ni:vr:Yt.isDragActive&&(t=this.selected[n]?Ni:t),this.setColor(n,t)},setComputedOpacity:function(n,t){const e=t*this.dataOpacity[n],i=this.colors[n*4+3];e!=i&&(this.colors[n*4+3]=e,this.refreshOpacity=!0)},getParticle:function(n){return{index:n,position:this.getPosition(n),endPoint:this.getEndPoint(n),speed:this.getSpeed(n),acceleration:this.getAcceleration(n)}}},Ms={sprite:null,div:null,label:null,scale:Mn*2,material:null,tween:null,init:function(){console.log("> Initializing ParticleMarker...");const t=new Ds().load(Pp);this.material=new Ps({map:t,sizeAttenuation:!0,transparent:!0,depthTest:!1,opacity:0}),this.sprite=new Ho(this.material),this.sprite.position.set(0,0,0),this.sprite.scale.set(this.scale,this.scale,this.scale),this.sprite.renderOrder=Op,dt.container.add(this.sprite)},hover:function(n){this.material.opacity<1&&this.showMarker(),this.moveMarker(n)},showMarker:function(){this.tween&&this.tween.stop(),this.tween=new ce.Tween(this.material).to({opacity:1},200).start()},moveMarker:function(n){this.sprite.position.copy(dt.getPosition(n))},hideMarker:function(){this.tween&&this.tween.stop(),this.tween=new ce.Tween(this.material).to({opacity:0},200).delay(200).start()}},Yt={id:"ParticleSelector",ndcSelection:null,dom:null,dragSelection:null,offsetFromCenter:null,initialWindowHeight:null,totalSelected:0,isEnabled:!1,isSelectionActive:!1,isDragActive:!1,isCheckNeeded:!1,init:function(){function n(e){e.key==="Shift"&&Yt.enable()}function t(e){e.key==="Shift"&&Yt.disable()}window.addEventListener("keydown",n,!1),window.addEventListener("keyup",t,!1)},newSelection:function(){this.ndcSelection={left:0,right:0,top:0,bottom:0},this.dom={box:null,closeBtn:null},this.dragSelection={originX:0,originY:0,x:0,y:0,width:0,height:0},this.offsetFromCenter={left:0,top:0,width:0,height:0}},enable:function(){rn.interactive!==!1&&(this.isEnabled=!0,Wt.updateCameraControls(!1),console.log(Wt.renderer.domElement),Wt.renderer.domElement.classList.add("crosshair"),console.log(`> ${this.id}: Select mode enabled...`))},disable:function(){this.isEnabled===!1||this.isDragActive===!0||this.isSelectionActive===!0||(console.log(`> ${this.id}: Select mode disabled...`),this.isEnabled=!1,Wt.updateCameraControls(!0))},startDrag:function(){this.isSelectionActive||(console.log(`> ${this.id}: Drag select started...`),Kt.orchestra.classList.add("dragging"),this.newSelection(),this.totalSelected=0,this.isDragActive=!0,this.isCheckNeeded=!0,this.dragSelection.originX=Ne.mouseX,this.dragSelection.originY=Ne.mouseY,this.initialWindowHeight=qt.innerHeight,this.dom.box=document.createElement("div"),this.dom.box.className="selection-box",Kt.orchestra.appendChild(this.dom.box),this.dom.box.style.left=this.dragSelection.x+"px",this.dom.box.style.top=this.dragSelection.y+"px")},updateDrag:function(){if(!this.isDragActive)return;this.dragSelection.width=Math.abs(Ne.mouseX-this.dragSelection.originX),this.dragSelection.height=Math.abs(Ne.mouseY-this.dragSelection.originY),this.dragSelection.x=Math.min(this.dragSelection.originX,Ne.mouseX),this.dragSelection.y=Math.min(this.dragSelection.originY,Ne.mouseY);const{box:n}=this.dom;n.style.left=this.dragSelection.x+"px",n.style.top=this.dragSelection.y+"px",n.style.width=this.dragSelection.width+"px",n.style.height=this.dragSelection.height+"px",this.offsetFromCenter={left:this.dragSelection.x-qt.centerX,top:this.dragSelection.y-qt.centerY,width:this.dragSelection.width,height:this.dragSelection.height},this.ndcSelection.left=this.dragSelection.x/qt.innerWidth*2-1,this.ndcSelection.top=-(this.dragSelection.y/qt.innerHeight)*2+1,this.ndcSelection.right=(this.dragSelection.x+this.dragSelection.width)/qt.innerWidth*2-1,this.ndcSelection.bottom=-((this.dragSelection.y+this.dragSelection.height)/qt.innerHeight)*2+1,this.isCheckNeeded=!0},endDrag:function(){this.isDragActive&&(console.log(`> ${this.id}: Drag completed with ${this.totalSelected} particles selected...`),this.dom.closeBtn=document.createElement("div"),this.dom.closeBtn.className="close-btn btn",this.dom.closeBtn.innerHTML='<div class="icon"></div>',this.dom.box.appendChild(this.dom.closeBtn),this.dom.closeBtn.addEventListener("click",this.killSelection),Kt.orchestra.classList.remove("dragging"),this.isDragActive=!1,Wt.renderer.domElement.classList.remove("crosshair"),this.totalSelected>0&&this.dragSelection.width>=20&&this.dragSelection.height>=20?this.isSelectionActive=!0:(this.isSelectionActive=!1,this.killSelection()),this.isCheckNeeded=!0)},killSelection:function(){console.log(`> ${Yt.id}: Ending selection...`),Kt.orchestra.removeChild(Yt.dom.box),Yt.totalSelected=0,Yt.isSelectionActive=!1,Yt.isCheckNeeded=!0,Yt.isEnabled=!1,Wt.updateCameraControls(!0)},checkIfSelected:function(n){let t=Gi,e=!1;if(n===0&&(this.totalSelected=0),this.isDragActive){const i=dt.getPosition(n);i.project(Wt.camera),i.x>=Yt.ndcSelection.left&&i.x<=Yt.ndcSelection.right&&i.y<=Yt.ndcSelection.top&&i.y>=Yt.ndcSelection.bottom&&i.z>-1&&i.z<1?(this.totalSelected++,dt.selected[n]=!0,t=Ni):(dt.selected[n]=!1,t=vr)}else this.isSelectionActive?dt.selected[n]===!0?t=Ni:(t=vr,e=!0):(n===0&&console.log("Should be setting all selections to 0..."),dt.selected[n]=!1,e=!0);return n===dt.total-1&&(this.isCheckNeeded=!1),{color:t,useTween:e}},select:function(n){dt.selected[n]=!0,dt.setColor(n,Ni)},deselect:function(n){dt.selected[n]=!1,dt.setColor(n,Gi)},ghost:function(n){dt.setColor(n,vr)},updateViewport:function(){if(!this.isSelectionActive)return;const{box:n}=this.dom,t=qt.innerHeight/this.initialWindowHeight,{left:e,top:i,width:r,height:s}=this.offsetFromCenter,o=qt.centerX+e*t,a=qt.centerY+i*t,l=r*t,c=s*t;n.style.left=o+"px",n.style.top=a+"px",n.style.width=l+"px",n.style.height=c+"px"}},he={id:"ParticleData",total:0,raw:[],normalized:[],domains:[],columns:[],metrics:[],init:async function(n){console.log("> Initializing ParticleData...");try{const i=(await(await fetch(Wp)).text()).split(`
`);this.total=i.length-1,this.metrics=i[0].split(","),this.columns=this.metrics.length;for(let r=0;r<this.metrics.length;++r)this.raw[r]=[],this.normalized[r]=[];for(let r=1;r<i.length;++r){const s=i[r].split(",");for(let o=0;o<this.metrics.length;++o){const a=parseFloat(s[o]);this.raw[o].push(a)}}this.calculateDomains(),console.log(`> ${this.id}: Finished loading raw for ${this.total} particles...`),n&&n()}catch(t){console.error("Error:",t)}},getNormal:function(n,t){return typeof n=="string"&&(n=this.metricByName(n)),this.normalized[n][t]},metricByName:function(n){return this.metrics.indexOf(n)},getDomain:function(n){typeof n=="string"&&(n=this.metricByName(n));const t=he.domains[n][0],e=he.domains[n][1];return{lowerBound:t,upperBound:e}},calculateDomains:function(){for(let n=1;n<this.metrics.length;n++){const t=this.raw[n],e=[Math.min(...t),Math.max(...t)];this.domains[n]=e,console.log(`> ${this.id}: ${n}, ${e}...`);for(let i=0;i<this.raw[n].length;i++){const s=(this.raw[n][i]-e[0])/(e[1]-e[0]);this.normalized[n][i]=s}}},metricName:function(n){return this.metrics[n]}},Ce={id:"ChartController",charts:[],activeChart:null,totalChanges:0,changeInProgress:!1,localAnimation:!1,rotation:{baseX:0,baseY:0,setX:0,setY:0,velocityX:0,velocityY:0,deceleration:.1,limitX:.1,limitY:.01},init:function(){console.log(`> ${this.id}: Preloading all charts...`),this.charts=[Hi,Us,Mr,Xo,Ss,Sr];for(let n of this.charts)n.preload()},switchTo:function(n,t){this.changeStarted(),console.log(`> ${this.id}: Switching to ${n.id}...`),this.totalChanges===0&&dt.introSpin(),this.activeChart&&this.activeChart.end(),dt.updateRotationMatrix(),dt.resizeAll(n.particleSize);let e=!1,i=n.particlesNeeded>0?n.particlesNeeded:he.total;i>dt.total?(console.log(`> ${this.id}: Load change needed from ${dt.total} to ${i}...`),dt.updateLoad(i,!0)):i<dt.total&&(console.log(`> ${this.id}: Load change needed from ${dt.total} to ${i}...`),dt.killExcess(i),e=!0),Wt.resetCameraControls(n.allowRotation),this.activeChart&&Wt.cameraTween(this.activeChart.cameraZ,n.cameraZ);let r=null;this.activeChart===Hi&&n===Ss&&(r={newPositions:!0}),this.activeChart=n,this.activeChart.start(r),this.totalChanges++,setTimeout(()=>{e&&dt.updateLoad(i,!1),Ce.changeCompleted(),t()},Qt*2)},animate:function(){this.updateChartRotation(),this.activeChart&&this.activeChart.animate()},updateChartRotation:function(){const n=this.rotation.setX-dt.container.rotation.x,t=this.rotation.setY-dt.container.rotation.y;this.rotation.velocityX=(this.rotation.velocityX+n*this.rotation.deceleration)*.5,this.rotation.velocityY=(this.rotation.velocityY+t*this.rotation.deceleration)*.5,dt.container.rotation.x+=this.rotation.velocityX,dt.container.rotation.y+=this.rotation.velocityY},mouseMove:function(n){this.activeChart&&(this.activeChart.allowRotation?(this.rotation.setY=-Ne.mouse.x*.04,this.rotation.setX=Ne.mouse.y*.04):(this.rotation.setY=0,this.rotation.setX=0),this.activeChart.mouseMove&&this.activeChart.mouseMove())},changeStarted:function(){this.changeInProgress=!0,this.localAnimation=!1},changeCompleted:function(){this.changeInProgress=!1,this.localAnimation=!0,dt.computeBoundingSphere(),this.activeChart.ready&&this.activeChart.ready()}},Mr={id:"ChartGlobe",uiLabel:"Geography",selector:"chart-globe",allowRotation:!0,cameraZ:dn,particlesNeeded:0,particleSize:Mn*(1.8/.6),globePoints:null,globeRadius:1,innerRadius:.98,randomIndices:null,innerGlobe:null,globeGradient:null,globeMaterial:null,globeOpacity:1,globeTransition:Qt,time:0,timeIncrement:.02,timeMultiply:1.6,noiseScale:.002,oscillatingPoints:[],preload:function(){console.log(`> ${this.id}: Preloading globe point data...`),this.globeGradient=this.createGradientTexture(),this.globeMaterial=new ws({map:Mr.globeGradient,side:hn,transparent:!0,opacity:0}),fetch(Fp).then(n=>n.arrayBuffer()).then(n=>{this.globePoints=new Float32Array(n),this.particlesNeeded=this.globePoints.length/3,this.randomIndices=Array.from({length:this.particlesNeeded},(t,e)=>e).sort(()=>Math.random()-.5),console.log(`> ${this.id}: Preloaded globe with point count: ${this.particlesNeeded}`)}).catch(n=>{console.error(n)})},start:function(n){console.log(`> ${this.id}: Starting chart...`);let t={v:0};const e=Qt/this.particlesNeeded;for(let i=0;i<this.particlesNeeded;++i){const r=this.randomIndices[i],s=this.globePoints[r*3],o=this.globePoints[r*3+1],a=this.globePoints[r*3+2],l={endPoint:dt.point3D(s,o,a),endOpacity:1},c=i*e;dt.tween(i,t,l,c,Qt)}this.addGlobe(),n&&n()},end:function(){this.removeGlobe()},addGlobe:function(){const t=new Ls(this.innerRadius,128);this.innerGlobe=new on(t,this.globeMaterial),this.innerGlobe.renderOrder=1,Wt.add(this.innerGlobe),this.tweenGlobe(0,this.globeOpacity,0,()=>{this.globeMaterial.transparent=!1})},removeGlobe:function(){this.globeMaterial.transparent=!0,this.tweenGlobe(this.globeOpacity,0,0,()=>{Wt.remove(this.innerGlobe)})},tweenGlobe:function(n,t,e,i){let r=new ce.Tween({opacity:n}).to({opacity:t},this.globeTransition).easing(Ii).delay(e).onUpdate(function(){Mr.globeMaterial.opacity=r._object.opacity}).onComplete(()=>{typeof i=="function"&&i()});r.start()},createGradientTexture:function(){const n=document.createElement("canvas");n.width=256,n.height=256;const t=n.getContext("2d"),e=t.createLinearGradient(0,0,0,n.height);e.addColorStop(0,"#ffffff"),e.addColorStop(.8,"#dddddd"),t.fillStyle=e,t.fillRect(0,0,n.width,n.height);const i=new Sp(n);return i.needsUpdate=!0,i},particleOpacity:function(n,t){const e=n%40===0;let r=(Math.sin(this.time*this.timeMultiply+this.randomIndices[n]*this.noiseScale)+1)*.1+.2;return e===!0&&(r+=.4),r},particleAnimate:function(n){},animate:function(){this.time+=this.timeIncrement,this.innerGlobe&&this.innerGlobe.lookAt(Wt.camera.position)}},Us={id:"ChartMagnet",uiLabel:"Magnet",selector:"chart-magnet",radius:1,metricIndex:0,metricChanges:0,allowRotation:!1,cameraZ:dn,particlesNeeded:0,particleSize:Mn,domAxis:null,domMagnet:null,domMax:null,domMin:null,flipValues:!1,preload:function(){this.particlesNeeded=he.total,this.domAxis=Kt.chartMagnet.querySelector(".axis"),this.domMagnet=Kt.chartMagnet.querySelector("#magnet"),this.domMagnet.addEventListener("click",this.changeMetric.bind(this)),this.domMax=Kt.chartMagnet.querySelector(".max"),this.domMin=Kt.chartMagnet.querySelector(".min")},start:function(n){console.log(`> ${this.id}: Starting chart...`),this.metricChanges=0,this.metricIndex=0,this.changeMetric(),n&&n()},mouseMove:function(){const n=Ne.mouseX-qt.centerX,t=Ne.mouseY-qt.centerY,e=Math.atan2(t,n)*(180/Math.PI);this.domAxis.style.transform=`translate(0px, -50%) rotateZ(${e}deg)`,e>=-90&&e<=90?this.flipValues===!0&&(this.flipValues=!1,this.domAxis.classList.remove("flipped")):this.flipValues===!1&&(this.flipValues=!0,this.domAxis.classList.add("flipped"))},setChartAxis:function(){const n=he.metricName(this.metricIndex),{lowerBound:t,upperBound:e}=he.getDomain(n),i=Math.pow(10,Math.floor(Math.log10(e))),r=Math.floor(t/i)*i,s=Math.ceil(e/i)*i;this.domMax.innerText=vn.formatChartNumber(s),this.domMin.innerText=vn.formatChartNumber(r)},alignParticles:function(){const n=he.metricName(this.metricIndex);this.changeLabel(n);const t=Math.PI*2/this.particlesNeeded;let e={v:0};const i=.01;var r=new Array(this.particlesNeeded);const s=Qt/this.particlesNeeded;for(let o=0;o<this.particlesNeeded;o++){const a=o/t,c=.25+(1-he.normalized[this.metricIndex][o])*.75,h=Math.cos(a),d=Math.sin(a),f=c*h,p=c*d;dt.getPosition(o);const g=dt.point2D(f,p,0);for(let A=0;A<=o;A++){if(A===o)continue;const S=r[A],P=g.distanceTo(S);if(P<i){const y=(i-P)/2,R=Math.sign(Math.random()-.5),U=Math.sign(Math.random()-.5);g.x+=y*R,g.y+=y*U}}r[o]=g;const _=this.metricChanges===0?Qt:Qt*.5,m=o*s,u={endPoint:g,endOpacity:1};dt.tween(o,e,u,m,_)}},end:function(){this.domMagnet.removeEventListener("click",Us.changeMetric)},changeMetric:function(){this.metricIndex++,this.metricIndex>=he.metrics.length&&(this.metricIndex=1),this.alignParticles(),this.setChartAxis(),this.metricChanges++},changeLabel:function(n){const t=this.domMagnet.querySelector(".label");t.textContent=n},particleAnimate:function(){},animate:function(){}},Ss={id:"ChartStarfield",uiLabel:"Universe",selector:"chart-starfield",allowRotation:!0,cameraZ:dn/3,particlesNeeded:0,particleSize:Mn*2,preload:function(){this.particlesNeeded=200},start:function(n){if(console.log(`> ${this.id}: Starting chart...`),!n||n.newPositions===!1){let e={v:0};const i=Qt/this.particlesNeeded;for(let r=0;r<this.particlesNeeded;r++){const s=Math.random(),o=Math.random(),a=2*Math.PI*s,l=Math.acos(2*o-1),c=(.25+Math.random()*.75)*1,h=c*Math.sin(l)*Math.cos(a),d=c*Math.sin(l)*Math.sin(a),f=c*Math.cos(l),p={endPoint:dt.point3D(h,d,f),endOpacity:1},g=r*i;dt.tween(r,e,p,g,Qt)}}},end:function(){},particleOpacity:function(n,t){return dt.points.localToWorld(t),Wt.camera.position.distanceTo(t)-this.cameraZ,1},particleAnimate:function(){},animate:function(){}},Sr={id:"ChartSwarm",uiLabel:"Swarm",selector:"chart-swarm",allowRotation:!0,cameraZ:dn,particlesNeeded:0,particleSize:Mn,randomIndices:null,minSpeed:.002,maxSpeed:.008,throttleSpeed:0,attractorRadius:.32,attractorShares:[.42,.28,.16,.08,.04,.02],contentTags:["sports","politics","entertainment","tech","finance","health"],attractors:[],spriteSize:.1,textScale:.36,particleData:null,preload:function(){this.particlesNeeded=he.total,this.addAttractors()},start:function(n){console.log(`> ${this.id}: Starting chart...`),this.throttleSpeed=0,this.randomizeIndices(),this.setAttractors(),this.showAttractorNodes(),this.setParticles()},ready:function(){let t={v:0};new ce.Tween(t).to({v:1},6e3).onUpdate(function(){Sr.throttleSpeed=t.v}).start()},setParticles:function(){let n={v:0},t=0,e=0,i=this.attractorShares[0];this.attractorShares[0]*this.particlesNeeded,this.particleData=new Array(this.particlesNeeded);let r=new un,s=new L(0,0,1);const o=Qt/this.particlesNeeded;for(let a=0;a<this.particlesNeeded;a++){const l=this.randomIndices[a];e=l/this.particlesNeeded,e>i&&(t++,i+=this.attractorShares[t],this.attractorShares[t]*this.particlesNeeded);const c=this.attractors[t].position;let h=Math.random()*Math.PI*2,d=this.attractorRadius+Math.random()*.08,f=new L(Math.cos(h)*d,Math.sin(h)*d),p=new L().randomDirection();r.setFromUnitVectors(s,p),f.applyQuaternion(r);const g=this.minSpeed+vn.randomSkewed(50,10)*this.maxSpeed;this.particleData[l]={attractor:t,normal:p,basePoint:f};const m={endPoint:new L().copy(f).add(c),endOpacity:1},u=l*o;dt.tween(l,n,m,u,Qt),dt.setSpeed(l,g)}},addAttractors:function(){console.log("> Adding attractors...");const n=this.attractorShares.length,t=new Ds,e=t.load(Lp);t.load(Dp);for(let i=0;i<n;i++){let r=new dt.point3D(0,0,0),s=this.attractorRadius;const o=new Ps({map:e,transparent:!0,alphaTest:.9,opacity:0}),a=new Ho(o);a.scale.set(this.spriteSize,this.spriteSize,this.spriteSize),a.renderOrder=0;const l=Ip(this.contentTags[i]);let c={position:r,radius:s,share:Sr.attractorShares[i],sprite:a,label:l};this.attractors.push(c)}},showAttractorNodes:function(){let n={v:0};const t=Qt;for(let e=0;e<this.attractors.length;e++){const{sprite:i,label:r}=this.attractors[e];i.position.copy(this.attractors[e].position),r.obj.center.set(.5,-1.5),r.obj.position.copy(this.attractors[e].position),Wt.add(i),Wt.add(r.obj);const s=e/this.attractors.length*t;new ce.Tween(n).to({v:1},t).delay(s).onUpdate(function(){const a=Eo.lerp(0,1,n.v);i.material.opacity=a}).start(),setTimeout(()=>{r.div.classList.add("show")},s)}},killAttractorNodes:function(){let n={v:1};const t=Qt*.5;for(let e=0;e<this.attractors.length;e++){const{sprite:i,label:r}=this.attractors[e],s=e/this.attractors.length*t;new ce.Tween(n).to({v:0},t).delay(s).onUpdate(()=>{i.material.opacity=n.v}).onComplete(()=>{Wt.remove(i)}).start(),r.div.classList.remove("show"),setTimeout(()=>{Wt.remove(r.obj)},400)}},setAttractors:function(){console.log("> Setting attractor positions..."),this.attractorShares.sort((r,s)=>s-r);const n=this.attractors,t=this.attractorRadius*2+.2;this.attractorRadius;const e=.1;let i=!0;for(;i;){i=!1;for(let r=0;r<n.length;r++){const s=n[r];for(let o=r+1;o<n.length;o++){const a=n[o];if(Math.sqrt(Math.pow(s.position.x-a.position.x,2)+Math.pow(s.position.y-a.position.y,2)+Math.pow(s.position.z-a.position.z,2))<t){const c={x:vn.randomPlusMinus()*e,y:vn.randomPlusMinus()*e,z:vn.randomPlusMinus()*e};s.position.x+=c.x,s.position.y+=c.y,s.position.z+=c.z,a.position.x-=c.x,a.position.y-=c.y,a.position.z-=c.z,i=!0}}}}},end:function(){this.killAttractorNodes()},particleOpacity:function(n,t){dt.points.localToWorld(t);const e=Wt.camera.position.distanceTo(t)-dn;return e>0?1-e:1},particleAnimate:function(n){const t=this.getParticleAttractor(n).position,e=this.particleData[n].basePoint,i=dt.getSpeed(n)*this.throttleSpeed;e.applyAxisAngle(this.particleData[n].normal,i);const r=new L().copy(e).add(t);dt.setPosition(n,r.x,r.y,r.z)},getParticleAttractor:function(n){return this.attractors[this.particleData[n].attractor]},animate:function(){},randomizeIndices:function(){this.randomIndices=Array.from({length:this.particlesNeeded},(n,t)=>t).sort(()=>Math.random()-.5)}},Xo={id:"ChartScatterplot",uiLabel:"Scatterplot",selector:"chart-scatterplot",allowRotation:!1,cameraZ:dn,metricAxisX:"Total pageviews",metricAxisY:"Total spent",particlesNeeded:0,particleSize:Mn,preload:function(){this.particlesNeeded=he.total},start:function(n){console.log(`> ${this.id}: Starting chart...`),console.log(`> ${this.id}: Charting X: [${this.metricAxisX}] and Y: [${this.metricAxisY}]...`),this.createChartAxis("x"),this.createChartAxis("y");let t={v:0};const e=Qt/this.particlesNeeded;for(let i=0;i<this.particlesNeeded;i++){const r=this.alignPoint(he.getNormal(this.metricAxisX,i)),s=this.alignPoint(he.getNormal(this.metricAxisY,i)),o=dt.point2D(r,s,0),a=i*e,l={endPoint:o,endOpacity:1};dt.tween(i,t,l,a,Qt)}n&&n()},alignPoint:function(n){return n*2-1},createChartAxis:function(n){const t=Xp,e=Kt.scatterPlot.querySelector(`#${n}`),i=n==="x"?this.metricAxisX:this.metricAxisY,{lowerBound:r,upperBound:s}=he.getDomain(i),o=Math.pow(10,Math.floor(Math.log10(s))),a=Math.floor(r/o)*o,c=(Math.ceil(s/o)*o-a)/(t-1);var h="";for(let d=0;d<t;d++){const f=a+c*d,p=vn.formatChartNumber(f),g=d===t-1?`<div class="metric">${i}</div>`:"";h+=`<div class="tick"><div class="value">${p}</div>${g}</div>`,d<t-1&&(h+='<div class="space"></div>')}e.innerHTML=h},end:function(){},particleAnimate:function(){},animate:function(){}},Hi={id:"ChartSphere",uiLabel:"Universe",selector:"chart-sphere",allowRotation:!0,cameraZ:dn,particlesNeeded:0,particleSize:Mn*2,particleData:null,minSpeed:.001,maxSpeed:.004,throttleSpeed:0,preload:function(){this.particlesNeeded=he.total},start:function(n){console.log(`> ${this.id}: Starting chart...`);let t={v:0};this.throttleSpeed=0,this.particleData=new Array(this.particlesNeeded);const e=Qt/this.particlesNeeded;let i=new un,r=new L(0,0,1);for(let s=0;s<this.particlesNeeded;s++){let o=Math.random()*Math.PI*2,a=.5+Math.random()*.5,l=new L(Math.cos(o)*a,Math.sin(o)*a,0),c=new L().randomDirection();i.setFromUnitVectors(r,c),l.applyQuaternion(i);const h=this.minSpeed+vn.randomSkewed(50,10)*this.maxSpeed,d=this.particleOpacity(s,l);this.particleData[s]={endPoint:l,normal:c};const f={endPoint:l,endOpacity:d},p=s*e;dt.tween(s,t,f,p,Qt),dt.setSpeed(s,h)}},ready:function(){let t={v:0};new ce.Tween(t).to({v:1},6e3).onUpdate(function(){Hi.throttleSpeed=t.v}).start()},end:function(){},particleOpacity:function(n,t){dt.points.localToWorld(t);const e=Wt.camera.position.distanceTo(t)-dn;return e>0?1-e:1},particleAnimate:function(n){let t=this.particleData[n].endPoint;const e=dt.getSpeed(n)*this.throttleSpeed;t.applyAxisAngle(this.particleData[n].normal,e),dt.setPosition(n,t.x,t.y,t.z)},animate:function(){}};
//# sourceMappingURL=index-b84fb409.js.map

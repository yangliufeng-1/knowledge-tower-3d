(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Ss="169",mh=0,so=1,uh=2,yc=1,fh=2,ta=3,Ea=0,At=1,Ht=2,ua=0,lr=1,kn=2,oo=3,co=4,gh=5,Da=100,Eh=101,_h=102,yh=103,vh=104,bh=200,xh=201,Ah=202,Th=203,Un=204,Nn=205,Mh=206,Sh=207,Bh=208,wh=209,Ch=210,Ih=211,Dh=212,Ph=213,Rh=214,Fn=0,On=1,Wn=2,ur=3,Zn=4,zn=5,Xn=6,Hn=7,vc=0,Lh=1,kh=2,fa=0,Uh=1,Nh=2,Fh=3,Oh=4,Wh=5,Zh=6,zh=7,bc=300,fr=301,gr=302,Gn=303,Vn=304,Xi=306,qn=1e3,La=1001,jn=1002,xt=1003,Xh=1004,Jr=1005,Ot=1006,en=1007,ka=1008,ia=1009,xc=1010,Ac=1011,Zr=1012,Bs=1013,Wa=1014,qt=1015,Gr=1016,ws=1017,Cs=1018,Er=1020,Tc=35902,Mc=1021,Sc=1022,Zt=1023,Bc=1024,wc=1025,dr=1026,_r=1027,Is=1028,Ds=1029,Cc=1030,Ps=1031,Rs=1033,Ti=33776,Mi=33777,Si=33778,Bi=33779,Yn=35840,Kn=35841,$n=35842,Jn=35843,Qn=36196,es=37492,ts=37496,as=37808,rs=37809,is=37810,ns=37811,ss=37812,os=37813,cs=37814,hs=37815,ls=37816,ds=37817,ps=37818,ms=37819,us=37820,fs=37821,wi=36492,gs=36494,Es=36495,Ic=36283,_s=36284,ys=36285,vs=36286,Hh=3200,Gh=3201,Dc=0,Vh=1,ma="",zt="srgb",va="srgb-linear",Ls="display-p3",Hi="display-p3-linear",Pi="linear",$e="srgb",Ri="rec709",Li="p3",Va=7680,ho=519,qh=512,jh=513,Yh=514,Pc=515,Kh=516,$h=517,Jh=518,Qh=519,lo=35044,el=35048,po="300 es",aa=2e3,ki=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const a=this._listeners;return a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const i=a.indexOf(t);i!==-1&&a.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const a=t.slice(0);for(let i=0,n=a.length;i<n;i++)a[i].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mo=1234567;const Nr=Math.PI/180,zr=180/Math.PI;function br(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[a&255]+pt[a>>8&255]+pt[a>>16&255]+pt[a>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function ks(r,e){return(r%e+e)%e}function tl(r,e,t,a,i){return a+(r-e)*(i-a)/(t-e)}function al(r,e,t){return r!==e?(t-r)/(e-r):0}function Fr(r,e,t){return(1-t)*r+t*e}function rl(r,e,t,a){return Fr(r,e,1-Math.exp(-t*a))}function il(r,e=1){return e-Math.abs(ks(r,e*2)-e)}function nl(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function sl(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ol(r,e){return r+Math.floor(Math.random()*(e-r+1))}function cl(r,e){return r+Math.random()*(e-r)}function hl(r){return r*(.5-Math.random())}function ll(r){r!==void 0&&(mo=r);let e=mo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dl(r){return r*Nr}function pl(r){return r*zr}function ml(r){return(r&r-1)===0&&r!==0}function ul(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function fl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gl(r,e,t,a,i){const n=Math.cos,s=Math.sin,o=n(t/2),c=s(t/2),h=n((e+a)/2),l=s((e+a)/2),u=n((e-a)/2),m=s((e-a)/2),f=n((a-e)/2),E=s((a-e)/2);switch(i){case"XYX":r.set(o*l,c*u,c*m,o*h);break;case"YZY":r.set(c*m,o*l,c*u,o*h);break;case"ZXZ":r.set(c*u,c*m,o*l,o*h);break;case"XZX":r.set(o*l,c*E,c*f,o*h);break;case"YXY":r.set(c*f,o*l,c*E,o*h);break;case"ZYZ":r.set(c*E,c*f,o*l,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Or={DEG2RAD:Nr,RAD2DEG:zr,generateUUID:br,clamp:_t,euclideanModulo:ks,mapLinear:tl,inverseLerp:al,lerp:Fr,damp:rl,pingpong:il,smoothstep:nl,smootherstep:sl,randInt:ol,randFloat:cl,randFloatSpread:hl,seededRandom:ll,degToRad:dl,radToDeg:pl,isPowerOfTwo:ml,ceilPowerOfTwo:ul,floorPowerOfTwo:fl,setQuaternionFromProperEuler:gl,normalize:gt,denormalize:cr};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,i=e.elements;return this.x=i[0]*t+i[3]*a+i[6],this.y=i[1]*t+i[4]*a+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(t,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(_t(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),i=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*a-s*i+e.x,this.y=n*i+s*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,a,i,n,s,o,c,h){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,i,n,s,o,c,h)}set(e,t,a,i,n,s,o,c,h){const l=this.elements;return l[0]=e,l[1]=i,l[2]=o,l[3]=t,l[4]=n,l[5]=c,l[6]=a,l[7]=s,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,i=t.elements,n=this.elements,s=a[0],o=a[3],c=a[6],h=a[1],l=a[4],u=a[7],m=a[2],f=a[5],E=a[8],y=i[0],d=i[3],p=i[6],A=i[1],x=i[4],T=i[7],L=i[2],B=i[5],S=i[8];return n[0]=s*y+o*A+c*L,n[3]=s*d+o*x+c*B,n[6]=s*p+o*T+c*S,n[1]=h*y+l*A+u*L,n[4]=h*d+l*x+u*B,n[7]=h*p+l*T+u*S,n[2]=m*y+f*A+E*L,n[5]=m*d+f*x+E*B,n[8]=m*p+f*T+E*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],i=e[2],n=e[3],s=e[4],o=e[5],c=e[6],h=e[7],l=e[8];return t*s*l-t*o*h-a*n*l+a*o*c+i*n*h-i*s*c}invert(){const e=this.elements,t=e[0],a=e[1],i=e[2],n=e[3],s=e[4],o=e[5],c=e[6],h=e[7],l=e[8],u=l*s-o*h,m=o*c-l*n,f=h*n-s*c,E=t*u+a*m+i*f;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/E;return e[0]=u*y,e[1]=(i*h-l*a)*y,e[2]=(o*a-i*s)*y,e[3]=m*y,e[4]=(l*t-i*c)*y,e[5]=(i*n-o*t)*y,e[6]=f*y,e[7]=(a*c-h*t)*y,e[8]=(s*t-a*n)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,i,n,s,o){const c=Math.cos(n),h=Math.sin(n);return this.set(a*c,a*h,-a*(c*s+h*o)+s+e,-i*h,i*c,-i*(-h*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tn.makeScale(e,t)),this}rotate(e){return this.premultiply(tn.makeRotation(-e)),this}translate(e,t){return this.premultiply(tn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let i=0;i<9;i++)if(t[i]!==a[i])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tn=new De;function Rc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ui(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function El(){const r=Ui("canvas");return r.style.display="block",r}const uo={};function Ci(r){r in uo||(uo[r]=!0,console.warn(r))}function _l(r,e,t){return new Promise(function(a,i){function n(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:a()}}setTimeout(n,t)})}function yl(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vl(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fo=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),go=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[va]:{transfer:Pi,primaries:Ri,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[zt]:{transfer:$e,primaries:Ri,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Hi]:{transfer:Pi,primaries:Li,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(go),fromReference:r=>r.applyMatrix3(fo)},[Ls]:{transfer:$e,primaries:Li,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(go),fromReference:r=>r.applyMatrix3(fo).convertLinearToSRGB()}},bl=new Set([va,Hi]),ze={enabled:!0,_workingColorSpace:va,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!bl.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const a=Mr[e].toReference,i=Mr[t].fromReference;return i(a(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Mr[r].primaries},getTransfer:function(r){return r===ma?Pi:Mr[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Mr[e].luminanceCoefficients)}};function pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function an(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qa;class xl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qa===void 0&&(qa=Ui("canvas")),qa.width=e.width,qa.height=e.height;const a=qa.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),t=qa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ui("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const i=a.getImageData(0,0,e.width,e.height),n=i.data;for(let s=0;s<n.length;s++)n[s]=pr(n[s]/255)*255;return a.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(pr(t[a]/255)*255):t[a]=pr(t[a]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Al=0;class Lc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},i=this.data;if(i!==null){let n;if(Array.isArray(i)){n=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?n.push(rn(i[s].image)):n.push(rn(i[s]))}else n=rn(i);a.url=n}return t||(e.images[this.uuid]=a),a}}function rn(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tl=0;class yt extends vr{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,a=La,i=La,n=Ot,s=ka,o=Zt,c=ia,h=yt.DEFAULT_ANISOTROPY,l=ma){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tl++}),this.uuid=br(),this.name="",this.source=new Lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=i,this.magFilter=n,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qn:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case jn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qn:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case jn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=bc;yt.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,t=0,a=0,i=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,i){return this.x=e,this.y=t,this.z=a,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,i=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*a+s[8]*i+s[12]*n,this.y=s[1]*t+s[5]*a+s[9]*i+s[13]*n,this.z=s[2]*t+s[6]*a+s[10]*i+s[14]*n,this.w=s[3]*t+s[7]*a+s[11]*i+s[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,i,n;const s=e.elements,o=s[0],c=s[4],h=s[8],l=s[1],u=s[5],m=s[9],f=s[2],E=s[6],y=s[10];if(Math.abs(c-l)<.01&&Math.abs(h-f)<.01&&Math.abs(m-E)<.01){if(Math.abs(c+l)<.1&&Math.abs(h+f)<.1&&Math.abs(m+E)<.1&&Math.abs(o+u+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(o+1)/2,A=(u+1)/2,x=(y+1)/2,T=(c+l)/4,L=(h+f)/4,B=(m+E)/4;return p>A&&p>x?p<.01?(a=0,i=.707106781,n=.707106781):(a=Math.sqrt(p),i=T/a,n=L/a):A>x?A<.01?(a=.707106781,i=0,n=.707106781):(i=Math.sqrt(A),a=T/i,n=B/i):x<.01?(a=.707106781,i=.707106781,n=0):(n=Math.sqrt(x),a=L/n,i=B/n),this.set(a,i,n,t),this}let d=Math.sqrt((E-m)*(E-m)+(h-f)*(h-f)+(l-c)*(l-c));return Math.abs(d)<.001&&(d=1),this.x=(E-m)/d,this.y=(h-f)/d,this.z=(l-c)/d,this.w=Math.acos((o+u+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(t,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ml extends vr{constructor(e=1,t=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);const i={width:e,height:t,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const n=new yt(i,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);n.flipY=!1,n.generateMipmaps=a.generateMipmaps,n.internalFormat=a.internalFormat,this.textures=[];const s=a.count;for(let o=0;o<s;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let i=0,n=this.textures.length;i<n;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=a;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,i=e.textures.length;a<i;a++)this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Za extends Ml{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class kc extends yt{constructor(e=null,t=1,a=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sl extends yt{constructor(e=null,t=1,a=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vr{constructor(e=0,t=0,a=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=i}static slerpFlat(e,t,a,i,n,s,o){let c=a[i+0],h=a[i+1],l=a[i+2],u=a[i+3];const m=n[s+0],f=n[s+1],E=n[s+2],y=n[s+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=m,e[t+1]=f,e[t+2]=E,e[t+3]=y;return}if(u!==y||c!==m||h!==f||l!==E){let d=1-o;const p=c*m+h*f+l*E+u*y,A=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),B=Math.atan2(L,p*A);d=Math.sin(d*B)/L,o=Math.sin(o*B)/L}const T=o*A;if(c=c*d+m*T,h=h*d+f*T,l=l*d+E*T,u=u*d+y*T,d===1-o){const L=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=L,h*=L,l*=L,u*=L}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,a,i,n,s){const o=a[i],c=a[i+1],h=a[i+2],l=a[i+3],u=n[s],m=n[s+1],f=n[s+2],E=n[s+3];return e[t]=o*E+l*u+c*f-h*m,e[t+1]=c*E+l*m+h*u-o*f,e[t+2]=h*E+l*f+o*m-c*u,e[t+3]=l*E-o*u-c*m-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,i){return this._x=e,this._y=t,this._z=a,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,i=e._y,n=e._z,s=e._order,o=Math.cos,c=Math.sin,h=o(a/2),l=o(i/2),u=o(n/2),m=c(a/2),f=c(i/2),E=c(n/2);switch(s){case"XYZ":this._x=m*l*u+h*f*E,this._y=h*f*u-m*l*E,this._z=h*l*E+m*f*u,this._w=h*l*u-m*f*E;break;case"YXZ":this._x=m*l*u+h*f*E,this._y=h*f*u-m*l*E,this._z=h*l*E-m*f*u,this._w=h*l*u+m*f*E;break;case"ZXY":this._x=m*l*u-h*f*E,this._y=h*f*u+m*l*E,this._z=h*l*E+m*f*u,this._w=h*l*u-m*f*E;break;case"ZYX":this._x=m*l*u-h*f*E,this._y=h*f*u+m*l*E,this._z=h*l*E-m*f*u,this._w=h*l*u+m*f*E;break;case"YZX":this._x=m*l*u+h*f*E,this._y=h*f*u+m*l*E,this._z=h*l*E-m*f*u,this._w=h*l*u-m*f*E;break;case"XZY":this._x=m*l*u-h*f*E,this._y=h*f*u-m*l*E,this._z=h*l*E+m*f*u,this._w=h*l*u+m*f*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,i=Math.sin(a);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],i=t[4],n=t[8],s=t[1],o=t[5],c=t[9],h=t[2],l=t[6],u=t[10],m=a+o+u;if(m>0){const f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(l-c)*f,this._y=(n-h)*f,this._z=(s-i)*f}else if(a>o&&a>u){const f=2*Math.sqrt(1+a-o-u);this._w=(l-c)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(n+h)/f}else if(o>u){const f=2*Math.sqrt(1+o-a-u);this._w=(n-h)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+u-a-o);this._w=(s-i)/f,this._x=(n+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const i=Math.min(1,t/a);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,i=e._y,n=e._z,s=e._w,o=t._x,c=t._y,h=t._z,l=t._w;return this._x=a*l+s*o+i*h-n*c,this._y=i*l+s*c+n*o-a*h,this._z=n*l+s*h+a*c-i*o,this._w=s*l-a*o-i*c-n*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const a=this._x,i=this._y,n=this._z,s=this._w;let o=s*e._w+a*e._x+i*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=a,this._y=i,this._z=n,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*a+t*this._x,this._y=f*i+t*this._y,this._z=f*n+t*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,o),u=Math.sin((1-t)*l)/h,m=Math.sin(t*l)/h;return this._w=s*u+this._w*m,this._x=a*u+this._x*m,this._y=i*u+this._y*m,this._z=n*u+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),i=Math.sqrt(1-a),n=Math.sqrt(a);return this.set(i*Math.sin(e),i*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,a=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[3]*a+n[6]*i,this.y=n[1]*t+n[4]*a+n[7]*i,this.z=n[2]*t+n[5]*a+n[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,i=this.z,n=e.elements,s=1/(n[3]*t+n[7]*a+n[11]*i+n[15]);return this.x=(n[0]*t+n[4]*a+n[8]*i+n[12])*s,this.y=(n[1]*t+n[5]*a+n[9]*i+n[13])*s,this.z=(n[2]*t+n[6]*a+n[10]*i+n[14])*s,this}applyQuaternion(e){const t=this.x,a=this.y,i=this.z,n=e.x,s=e.y,o=e.z,c=e.w,h=2*(s*i-o*a),l=2*(o*t-n*i),u=2*(n*a-s*t);return this.x=t+c*h+s*u-o*l,this.y=a+c*l+o*h-n*u,this.z=i+c*u+n*l-s*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,i=this.z,n=e.elements;return this.x=n[0]*t+n[4]*a+n[8]*i,this.y=n[1]*t+n[5]*a+n[9]*i,this.z=n[2]*t+n[6]*a+n[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(e,Math.min(t,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,i=e.y,n=e.z,s=t.x,o=t.y,c=t.z;return this.x=i*c-n*o,this.y=n*s-a*c,this.z=a*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return nn.copy(this).projectOnVector(e),this.sub(nn)}reflect(e){return this.sub(nn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(_t(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,i=this.z-e.z;return t*t+a*a+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const i=Math.sin(t)*e;return this.x=i*Math.sin(a),this.y=Math.cos(t)*e,this.z=i*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nn=new C,Eo=new Vr;class za{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(Ut.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(Ut.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=Ut.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const n=a.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=n.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ut):Ut.fromBufferAttribute(n,s),Ut.applyMatrix4(e.matrixWorld),this.expandByPoint(Ut);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Qr.copy(a.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const i=e.children;for(let n=0,s=i.length;n<s;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ut),Ut.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),ei.subVectors(this.max,Sr),ja.subVectors(e.a,Sr),Ya.subVectors(e.b,Sr),Ka.subVectors(e.c,Sr),oa.subVectors(Ya,ja),ca.subVectors(Ka,Ya),Aa.subVectors(ja,Ka);let t=[0,-oa.z,oa.y,0,-ca.z,ca.y,0,-Aa.z,Aa.y,oa.z,0,-oa.x,ca.z,0,-ca.x,Aa.z,0,-Aa.x,-oa.y,oa.x,0,-ca.y,ca.x,0,-Aa.y,Aa.x,0];return!sn(t,ja,Ya,Ka,ei)||(t=[1,0,0,0,1,0,0,0,1],!sn(t,ja,Ya,Ka,ei))?!1:(ti.crossVectors(oa,ca),t=[ti.x,ti.y,ti.z],sn(t,ja,Ya,Ka,ei))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ut).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ut).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kt=[new C,new C,new C,new C,new C,new C,new C,new C],Ut=new C,Qr=new za,ja=new C,Ya=new C,Ka=new C,oa=new C,ca=new C,Aa=new C,Sr=new C,ei=new C,ti=new C,Ta=new C;function sn(r,e,t,a,i){for(let n=0,s=r.length-3;n<=s;n+=3){Ta.fromArray(r,n);const o=i.x*Math.abs(Ta.x)+i.y*Math.abs(Ta.y)+i.z*Math.abs(Ta.z),c=e.dot(Ta),h=t.dot(Ta),l=a.dot(Ta);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const Bl=new za,Br=new C,on=new C;class Xa{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):Bl.setFromPoints(e).getCenter(a);let i=0;for(let n=0,s=e.length;n<s;n++)i=Math.max(i,a.distanceToSquared(e[n]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),i=(a-this.radius)*.5;this.center.addScaledVector(Br,i/a),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(on.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(on)),this.expandByPoint(Br.copy(e.center).sub(on))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new C,cn=new C,ai=new C,ha=new C,hn=new C,ri=new C,ln=new C;class Gi{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,a,i){cn.copy(e).add(t).multiplyScalar(.5),ai.copy(t).sub(e).normalize(),ha.copy(this.origin).sub(cn);const n=e.distanceTo(t)*.5,s=-this.direction.dot(ai),o=ha.dot(this.direction),c=-ha.dot(ai),h=ha.lengthSq(),l=Math.abs(1-s*s);let u,m,f,E;if(l>0)if(u=s*c-o,m=s*o-c,E=n*l,u>=0)if(m>=-E)if(m<=E){const y=1/l;u*=y,m*=y,f=u*(u+s*m+2*o)+m*(s*u+m+2*c)+h}else m=n,u=Math.max(0,-(s*m+o)),f=-u*u+m*(m+2*c)+h;else m=-n,u=Math.max(0,-(s*m+o)),f=-u*u+m*(m+2*c)+h;else m<=-E?(u=Math.max(0,-(-s*n+o)),m=u>0?-n:Math.min(Math.max(-n,-c),n),f=-u*u+m*(m+2*c)+h):m<=E?(u=0,m=Math.min(Math.max(-n,-c),n),f=m*(m+2*c)+h):(u=Math.max(0,-(s*n+o)),m=u>0?n:Math.min(Math.max(-n,-c),n),f=-u*u+m*(m+2*c)+h);else m=s>0?-n:n,u=Math.max(0,-(s*m+o)),f=-u*u+m*(m+2*c)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(cn).addScaledVector(ai,m),f}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const a=$t.dot(this.direction),i=$t.dot($t)-a*a,n=e.radius*e.radius;if(i>n)return null;const s=Math.sqrt(n-i),o=a-s,c=a+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,i,n,s,o,c;const h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,m=this.origin;return h>=0?(a=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(a=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),l>=0?(n=(e.min.y-m.y)*l,s=(e.max.y-m.y)*l):(n=(e.max.y-m.y)*l,s=(e.min.y-m.y)*l),a>s||n>i||((n>a||isNaN(a))&&(a=n),(s<i||isNaN(i))&&(i=s),u>=0?(o=(e.min.z-m.z)*u,c=(e.max.z-m.z)*u):(o=(e.max.z-m.z)*u,c=(e.min.z-m.z)*u),a>c||o>i)||((o>a||a!==a)&&(a=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(a>=0?a:i,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,a,i,n){hn.subVectors(t,e),ri.subVectors(a,e),ln.crossVectors(hn,ri);let s=this.direction.dot(ln),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ha.subVectors(this.origin,e);const c=o*this.direction.dot(ri.crossVectors(ha,ri));if(c<0)return null;const h=o*this.direction.dot(hn.cross(ha));if(h<0||c+h>s)return null;const l=-o*ha.dot(ln);return l<0?null:this.at(l/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,a,i,n,s,o,c,h,l,u,m,f,E,y,d){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,i,n,s,o,c,h,l,u,m,f,E,y,d)}set(e,t,a,i,n,s,o,c,h,l,u,m,f,E,y,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=a,p[12]=i,p[1]=n,p[5]=s,p[9]=o,p[13]=c,p[2]=h,p[6]=l,p[10]=u,p[14]=m,p[3]=f,p[7]=E,p[11]=y,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,a=e.elements,i=1/$a.setFromMatrixColumn(e,0).length(),n=1/$a.setFromMatrixColumn(e,1).length(),s=1/$a.setFromMatrixColumn(e,2).length();return t[0]=a[0]*i,t[1]=a[1]*i,t[2]=a[2]*i,t[3]=0,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=0,t[8]=a[8]*s,t[9]=a[9]*s,t[10]=a[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,i=e.y,n=e.z,s=Math.cos(a),o=Math.sin(a),c=Math.cos(i),h=Math.sin(i),l=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const m=s*l,f=s*u,E=o*l,y=o*u;t[0]=c*l,t[4]=-c*u,t[8]=h,t[1]=f+E*h,t[5]=m-y*h,t[9]=-o*c,t[2]=y-m*h,t[6]=E+f*h,t[10]=s*c}else if(e.order==="YXZ"){const m=c*l,f=c*u,E=h*l,y=h*u;t[0]=m+y*o,t[4]=E*o-f,t[8]=s*h,t[1]=s*u,t[5]=s*l,t[9]=-o,t[2]=f*o-E,t[6]=y+m*o,t[10]=s*c}else if(e.order==="ZXY"){const m=c*l,f=c*u,E=h*l,y=h*u;t[0]=m-y*o,t[4]=-s*u,t[8]=E+f*o,t[1]=f+E*o,t[5]=s*l,t[9]=y-m*o,t[2]=-s*h,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const m=s*l,f=s*u,E=o*l,y=o*u;t[0]=c*l,t[4]=E*h-f,t[8]=m*h+y,t[1]=c*u,t[5]=y*h+m,t[9]=f*h-E,t[2]=-h,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const m=s*c,f=s*h,E=o*c,y=o*h;t[0]=c*l,t[4]=y-m*u,t[8]=E*u+f,t[1]=u,t[5]=s*l,t[9]=-o*l,t[2]=-h*l,t[6]=f*u+E,t[10]=m-y*u}else if(e.order==="XZY"){const m=s*c,f=s*h,E=o*c,y=o*h;t[0]=c*l,t[4]=-u,t[8]=h*l,t[1]=m*u+y,t[5]=s*l,t[9]=f*u-E,t[2]=E*u-f,t[6]=o*l,t[10]=y*u+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wl,e,Cl)}lookAt(e,t,a){const i=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),la.crossVectors(a,Bt),la.lengthSq()===0&&(Math.abs(a.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),la.crossVectors(a,Bt)),la.normalize(),ii.crossVectors(Bt,la),i[0]=la.x,i[4]=ii.x,i[8]=Bt.x,i[1]=la.y,i[5]=ii.y,i[9]=Bt.y,i[2]=la.z,i[6]=ii.z,i[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,i=t.elements,n=this.elements,s=a[0],o=a[4],c=a[8],h=a[12],l=a[1],u=a[5],m=a[9],f=a[13],E=a[2],y=a[6],d=a[10],p=a[14],A=a[3],x=a[7],T=a[11],L=a[15],B=i[0],S=i[4],R=i[8],V=i[12],g=i[1],b=i[5],F=i[9],O=i[13],X=i[2],$=i[6],Z=i[10],Y=i[14],z=i[3],te=i[7],he=i[11],_e=i[15];return n[0]=s*B+o*g+c*X+h*z,n[4]=s*S+o*b+c*$+h*te,n[8]=s*R+o*F+c*Z+h*he,n[12]=s*V+o*O+c*Y+h*_e,n[1]=l*B+u*g+m*X+f*z,n[5]=l*S+u*b+m*$+f*te,n[9]=l*R+u*F+m*Z+f*he,n[13]=l*V+u*O+m*Y+f*_e,n[2]=E*B+y*g+d*X+p*z,n[6]=E*S+y*b+d*$+p*te,n[10]=E*R+y*F+d*Z+p*he,n[14]=E*V+y*O+d*Y+p*_e,n[3]=A*B+x*g+T*X+L*z,n[7]=A*S+x*b+T*$+L*te,n[11]=A*R+x*F+T*Z+L*he,n[15]=A*V+x*O+T*Y+L*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],i=e[8],n=e[12],s=e[1],o=e[5],c=e[9],h=e[13],l=e[2],u=e[6],m=e[10],f=e[14],E=e[3],y=e[7],d=e[11],p=e[15];return E*(+n*c*u-i*h*u-n*o*m+a*h*m+i*o*f-a*c*f)+y*(+t*c*f-t*h*m+n*s*m-i*s*f+i*h*l-n*c*l)+d*(+t*h*u-t*o*f-n*s*u+a*s*f+n*o*l-a*h*l)+p*(-i*o*l-t*c*u+t*o*m+i*s*u-a*s*m+a*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],i=e[2],n=e[3],s=e[4],o=e[5],c=e[6],h=e[7],l=e[8],u=e[9],m=e[10],f=e[11],E=e[12],y=e[13],d=e[14],p=e[15],A=u*d*h-y*m*h+y*c*f-o*d*f-u*c*p+o*m*p,x=E*m*h-l*d*h-E*c*f+s*d*f+l*c*p-s*m*p,T=l*y*h-E*u*h+E*o*f-s*y*f-l*o*p+s*u*p,L=E*u*c-l*y*c-E*o*m+s*y*m+l*o*d-s*u*d,B=t*A+a*x+i*T+n*L;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/B;return e[0]=A*S,e[1]=(y*m*n-u*d*n-y*i*f+a*d*f+u*i*p-a*m*p)*S,e[2]=(o*d*n-y*c*n+y*i*h-a*d*h-o*i*p+a*c*p)*S,e[3]=(u*c*n-o*m*n-u*i*h+a*m*h+o*i*f-a*c*f)*S,e[4]=x*S,e[5]=(l*d*n-E*m*n+E*i*f-t*d*f-l*i*p+t*m*p)*S,e[6]=(E*c*n-s*d*n-E*i*h+t*d*h+s*i*p-t*c*p)*S,e[7]=(s*m*n-l*c*n+l*i*h-t*m*h-s*i*f+t*c*f)*S,e[8]=T*S,e[9]=(E*u*n-l*y*n-E*a*f+t*y*f+l*a*p-t*u*p)*S,e[10]=(s*y*n-E*o*n+E*a*h-t*y*h-s*a*p+t*o*p)*S,e[11]=(l*o*n-s*u*n-l*a*h+t*u*h+s*a*f-t*o*f)*S,e[12]=L*S,e[13]=(l*y*i-E*u*i+E*a*m-t*y*m-l*a*d+t*u*d)*S,e[14]=(E*o*i-s*y*i-E*a*c+t*y*c+s*a*d-t*o*d)*S,e[15]=(s*u*i-l*o*i+l*a*c-t*u*c-s*a*m+t*o*m)*S,this}scale(e){const t=this.elements,a=e.x,i=e.y,n=e.z;return t[0]*=a,t[4]*=i,t[8]*=n,t[1]*=a,t[5]*=i,t[9]*=n,t[2]*=a,t[6]*=i,t[10]*=n,t[3]*=a,t[7]*=i,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,i))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),i=Math.sin(t),n=1-a,s=e.x,o=e.y,c=e.z,h=n*s,l=n*o;return this.set(h*s+a,h*o-i*c,h*c+i*o,0,h*o+i*c,l*o+a,l*c-i*s,0,h*c-i*o,l*c+i*s,n*c*c+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,i,n,s){return this.set(1,a,n,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,a){const i=this.elements,n=t._x,s=t._y,o=t._z,c=t._w,h=n+n,l=s+s,u=o+o,m=n*h,f=n*l,E=n*u,y=s*l,d=s*u,p=o*u,A=c*h,x=c*l,T=c*u,L=a.x,B=a.y,S=a.z;return i[0]=(1-(y+p))*L,i[1]=(f+T)*L,i[2]=(E-x)*L,i[3]=0,i[4]=(f-T)*B,i[5]=(1-(m+p))*B,i[6]=(d+A)*B,i[7]=0,i[8]=(E+x)*S,i[9]=(d-A)*S,i[10]=(1-(m+y))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,a){const i=this.elements;let n=$a.set(i[0],i[1],i[2]).length();const s=$a.set(i[4],i[5],i[6]).length(),o=$a.set(i[8],i[9],i[10]).length();this.determinant()<0&&(n=-n),e.x=i[12],e.y=i[13],e.z=i[14],Nt.copy(this);const c=1/n,h=1/s,l=1/o;return Nt.elements[0]*=c,Nt.elements[1]*=c,Nt.elements[2]*=c,Nt.elements[4]*=h,Nt.elements[5]*=h,Nt.elements[6]*=h,Nt.elements[8]*=l,Nt.elements[9]*=l,Nt.elements[10]*=l,t.setFromRotationMatrix(Nt),a.x=n,a.y=s,a.z=o,this}makePerspective(e,t,a,i,n,s,o=aa){const c=this.elements,h=2*n/(t-e),l=2*n/(a-i),u=(t+e)/(t-e),m=(a+i)/(a-i);let f,E;if(o===aa)f=-(s+n)/(s-n),E=-2*s*n/(s-n);else if(o===ki)f=-s/(s-n),E=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,a,i,n,s,o=aa){const c=this.elements,h=1/(t-e),l=1/(a-i),u=1/(s-n),m=(t+e)*h,f=(a+i)*l;let E,y;if(o===aa)E=(s+n)*u,y=-2*u;else if(o===ki)E=n*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let i=0;i<16;i++)if(t[i]!==a[i])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const $a=new C,Nt=new Xe,wl=new C(0,0,0),Cl=new C(1,1,1),la=new C,ii=new C,Bt=new C,_o=new Xe,yo=new Vr;class jt{constructor(e=0,t=0,a=0,i=jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,i=this._order){return this._x=e,this._y=t,this._z=a,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const i=e.elements,n=i[0],s=i[4],o=i[8],c=i[1],h=i[5],l=i[9],u=i[2],m=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return _o.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_o,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yo.setFromEuler(this),this.setFromQuaternion(yo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jt.DEFAULT_ORDER="XYZ";class Us{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Il=0;const vo=new C,Ja=new Vr,Jt=new Xe,ni=new C,wr=new C,Dl=new C,Pl=new Vr,bo=new C(1,0,0),xo=new C(0,1,0),Ao=new C(0,0,1),To={type:"added"},Rl={type:"removed"},Qa={type:"childadded",child:null},dn={type:"childremoved",child:null};class nt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new C,t=new jt,a=new Vr,i=new C(1,1,1);function n(){a.setFromEuler(t,!1)}function s(){t.setFromQuaternion(a,void 0,!1)}t._onChange(n),a._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new De}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ja.setFromAxisAngle(e,t),this.quaternion.multiply(Ja),this}rotateOnWorldAxis(e,t){return Ja.setFromAxisAngle(e,t),this.quaternion.premultiply(Ja),this}rotateX(e){return this.rotateOnAxis(bo,e)}rotateY(e){return this.rotateOnAxis(xo,e)}rotateZ(e){return this.rotateOnAxis(Ao,e)}translateOnAxis(e,t){return vo.copy(e).applyQuaternion(this.quaternion),this.position.add(vo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bo,e)}translateY(e){return this.translateOnAxis(xo,e)}translateZ(e){return this.translateOnAxis(Ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?ni.copy(e):ni.set(e,t,a);const i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(wr,ni,this.up):Jt.lookAt(ni,wr,this.up),this.quaternion.setFromRotationMatrix(Jt),i&&(Jt.extractRotation(i.matrixWorld),Ja.setFromRotationMatrix(Jt),this.quaternion.premultiply(Ja.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(To),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rl),dn.child=e,this.dispatchEvent(dn),dn.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(To),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,i=this.children.length;a<i;a++){const n=this.children[a].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Dl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Pl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,i=t.length;a<i;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function n(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const u=c[h];n(e.shapes,u)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(n(e.materials,this.material[c]));i.material=o}else i.material=n(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(n(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),h=s(e.textures),l=s(e.images),u=s(e.shapes),m=s(e.skeletons),f=s(e.animations),E=s(e.nodes);o.length>0&&(a.geometries=o),c.length>0&&(a.materials=c),h.length>0&&(a.textures=h),l.length>0&&(a.images=l),u.length>0&&(a.shapes=u),m.length>0&&(a.skeletons=m),f.length>0&&(a.animations=f),E.length>0&&(a.nodes=E)}return a.object=i,a;function s(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const i=e.children[a];this.add(i.clone())}return this}}nt.DEFAULT_UP=new C(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new C,Qt=new C,pn=new C,ea=new C,er=new C,tr=new C,Mo=new C,mn=new C,un=new C,fn=new C,gn=new Ve,En=new Ve,_n=new Ve;class Wt{constructor(e=new C,t=new C,a=new C){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,i){i.subVectors(a,t),Ft.subVectors(e,t),i.cross(Ft);const n=i.lengthSq();return n>0?i.multiplyScalar(1/Math.sqrt(n)):i.set(0,0,0)}static getBarycoord(e,t,a,i,n){Ft.subVectors(i,t),Qt.subVectors(a,t),pn.subVectors(e,t);const s=Ft.dot(Ft),o=Ft.dot(Qt),c=Ft.dot(pn),h=Qt.dot(Qt),l=Qt.dot(pn),u=s*h-o*o;if(u===0)return n.set(0,0,0),null;const m=1/u,f=(h*c-o*l)*m,E=(s*l-o*c)*m;return n.set(1-f-E,E,f)}static containsPoint(e,t,a,i){return this.getBarycoord(e,t,a,i,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(e,t,a,i,n,s,o,c){return this.getBarycoord(e,t,a,i,ea)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,ea.x),c.addScaledVector(s,ea.y),c.addScaledVector(o,ea.z),c)}static getInterpolatedAttribute(e,t,a,i,n,s){return gn.setScalar(0),En.setScalar(0),_n.setScalar(0),gn.fromBufferAttribute(e,t),En.fromBufferAttribute(e,a),_n.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(gn,n.x),s.addScaledVector(En,n.y),s.addScaledVector(_n,n.z),s}static isFrontFacing(e,t,a,i){return Ft.subVectors(a,t),Qt.subVectors(e,t),Ft.cross(Qt).dot(i)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,i){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,a,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Ft.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,i,n){return Wt.getInterpolation(e,this.a,this.b,this.c,t,a,i,n)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,i=this.b,n=this.c;let s,o;er.subVectors(i,a),tr.subVectors(n,a),mn.subVectors(e,a);const c=er.dot(mn),h=tr.dot(mn);if(c<=0&&h<=0)return t.copy(a);un.subVectors(e,i);const l=er.dot(un),u=tr.dot(un);if(l>=0&&u<=l)return t.copy(i);const m=c*u-l*h;if(m<=0&&c>=0&&l<=0)return s=c/(c-l),t.copy(a).addScaledVector(er,s);fn.subVectors(e,n);const f=er.dot(fn),E=tr.dot(fn);if(E>=0&&f<=E)return t.copy(n);const y=f*h-c*E;if(y<=0&&h>=0&&E<=0)return o=h/(h-E),t.copy(a).addScaledVector(tr,o);const d=l*E-f*u;if(d<=0&&u-l>=0&&f-E>=0)return Mo.subVectors(n,i),o=(u-l)/(u-l+(f-E)),t.copy(i).addScaledVector(Mo,o);const p=1/(d+y+m);return s=y*p,o=m*p,t.copy(a).addScaledVector(er,s).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},si={h:0,s:0,l:0};function yn(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class be{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,a,i=ze.workingColorSpace){return this.r=e,this.g=t,this.b=a,ze.toWorkingColorSpace(this,i),this}setHSL(e,t,a,i=ze.workingColorSpace){if(e=ks(e,1),t=_t(t,0,1),a=_t(a,0,1),t===0)this.r=this.g=this.b=a;else{const n=a<=.5?a*(1+t):a+t-a*t,s=2*a-n;this.r=yn(s,n,e+1/3),this.g=yn(s,n,e),this.b=yn(s,n,e-1/3)}return ze.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function a(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=i[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const a=Uc[e.toLowerCase()];return a!==void 0?this.setHex(a,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=an(e.r),this.g=an(e.g),this.b=an(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ze.fromWorkingColorSpace(mt.copy(this),e),Math.round(_t(mt.r*255,0,255))*65536+Math.round(_t(mt.g*255,0,255))*256+Math.round(_t(mt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(mt.copy(this),t);const a=mt.r,i=mt.g,n=mt.b,s=Math.max(a,i,n),o=Math.min(a,i,n);let c,h;const l=(o+s)/2;if(o===s)c=0,h=0;else{const u=s-o;switch(h=l<=.5?u/(s+o):u/(2-s-o),s){case a:c=(i-n)/u+(i<n?6:0);break;case i:c=(n-a)/u+2;break;case n:c=(a-i)/u+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=zt){ze.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,a=mt.g,i=mt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(i*255)})`}offsetHSL(e,t,a){return this.getHSL(da),this.setHSL(da.h+e,da.s+t,da.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(da),e.getHSL(si);const a=Fr(da.h,si.h,t),i=Fr(da.s,si.s,t),n=Fr(da.l,si.l,t);return this.setHSL(a,i,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,i=this.b,n=e.elements;return this.r=n[0]*t+n[3]*a+n[6]*i,this.g=n[1]*t+n[4]*a+n[7]*i,this.b=n[2]*t+n[5]*a+n[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new be;be.NAMES=Uc;let Ll=0;class Ha extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=br(),this.name="",this.type="Material",this.blending=lr,this.side=Ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Un,this.blendDst=Nn,this.blendEquation=Da,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(a):i&&i.isVector3&&a&&a.isVector3?i.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(a.blending=this.blending),this.side!==Ea&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Un&&(a.blendSrc=this.blendSrc),this.blendDst!==Nn&&(a.blendDst=this.blendDst),this.blendEquation!==Da&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ho&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Va&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Va&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Va&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function i(n){const s=[];for(const o in n){const c=n[o];delete c.metadata,s.push(c)}return s}if(t){const n=i(e.textures),s=i(e.images);n.length>0&&(a.textures=n),s.length>0&&(a.images=s)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const i=t.length;a=new Array(i);for(let n=0;n!==i;++n)a[n]=t[n].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ns extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new C,oi=new Pe;class Tt{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=lo,this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let i=0,n=this.itemSize;i<n;i++)this.array[e+i]=t.array[a+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix3(e),this.setXY(t,oi.x,oi.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=cr(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=gt(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),a=gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),a=gt(a,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=i,this}setXYZW(e,t,a,i,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),a=gt(a,this.array),i=gt(i,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=i,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lo&&(e.usage=this.usage),e}}class Nc extends Tt{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class Fc extends Tt{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class lt extends Tt{constructor(e,t,a){super(new Float32Array(e),t,a)}}let kl=0;const Pt=new Xe,vn=new nt,ar=new C,wt=new za,Cr=new za,ht=new C;class ut extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rc(e)?Fc:Nc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const n=new De().getNormalMatrix(e);a.applyNormalMatrix(n),a.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,a){return Pt.makeTranslation(e,t,a),this.applyMatrix4(Pt),this}scale(e,t,a){return Pt.makeScale(e,t,a),this.applyMatrix4(Pt),this}lookAt(e){return vn.lookAt(e),vn.updateMatrix(),this.applyMatrix4(vn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const t=[];for(let a=0,i=e.length;a<i;a++){const n=e[a];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,i=t.length;a<i;a++){const n=t[a];wt.setFromBufferAttribute(n),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const a=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(wt.min,Cr.min),wt.expandByPoint(ht),ht.addVectors(wt.max,Cr.max),wt.expandByPoint(ht)):(wt.expandByPoint(Cr.min),wt.expandByPoint(Cr.max))}wt.getCenter(a);let i=0;for(let n=0,s=e.count;n<s;n++)ht.fromBufferAttribute(e,n),i=Math.max(i,a.distanceToSquared(ht));if(t)for(let n=0,s=t.length;n<s;n++){const o=t[n],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)ht.fromBufferAttribute(o,h),c&&(ar.fromBufferAttribute(e,h),ht.add(ar)),i=Math.max(i,a.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,i=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*a.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<a.count;R++)o[R]=new C,c[R]=new C;const h=new C,l=new C,u=new C,m=new Pe,f=new Pe,E=new Pe,y=new C,d=new C;function p(R,V,g){h.fromBufferAttribute(a,R),l.fromBufferAttribute(a,V),u.fromBufferAttribute(a,g),m.fromBufferAttribute(n,R),f.fromBufferAttribute(n,V),E.fromBufferAttribute(n,g),l.sub(h),u.sub(h),f.sub(m),E.sub(m);const b=1/(f.x*E.y-E.x*f.y);isFinite(b)&&(y.copy(l).multiplyScalar(E.y).addScaledVector(u,-f.y).multiplyScalar(b),d.copy(u).multiplyScalar(f.x).addScaledVector(l,-E.x).multiplyScalar(b),o[R].add(y),o[V].add(y),o[g].add(y),c[R].add(d),c[V].add(d),c[g].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let R=0,V=A.length;R<V;++R){const g=A[R],b=g.start,F=g.count;for(let O=b,X=b+F;O<X;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new C,T=new C,L=new C,B=new C;function S(R){L.fromBufferAttribute(i,R),B.copy(L);const V=o[R];x.copy(V),x.sub(L.multiplyScalar(L.dot(V))).normalize(),T.crossVectors(B,V);const g=T.dot(c[R])<0?-1:1;s.setXYZW(R,x.x,x.y,x.z,g)}for(let R=0,V=A.length;R<V;++R){const g=A[R],b=g.start,F=g.count;for(let O=b,X=b+F;O<X;O+=3)S(e.getX(O+0)),S(e.getX(O+1)),S(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let m=0,f=a.count;m<f;m++)a.setXYZ(m,0,0,0);const i=new C,n=new C,s=new C,o=new C,c=new C,h=new C,l=new C,u=new C;if(e)for(let m=0,f=e.count;m<f;m+=3){const E=e.getX(m+0),y=e.getX(m+1),d=e.getX(m+2);i.fromBufferAttribute(t,E),n.fromBufferAttribute(t,y),s.fromBufferAttribute(t,d),l.subVectors(s,n),u.subVectors(i,n),l.cross(u),o.fromBufferAttribute(a,E),c.fromBufferAttribute(a,y),h.fromBufferAttribute(a,d),o.add(l),c.add(l),h.add(l),a.setXYZ(E,o.x,o.y,o.z),a.setXYZ(y,c.x,c.y,c.z),a.setXYZ(d,h.x,h.y,h.z)}else for(let m=0,f=t.count;m<f;m+=3)i.fromBufferAttribute(t,m+0),n.fromBufferAttribute(t,m+1),s.fromBufferAttribute(t,m+2),l.subVectors(s,n),u.subVectors(i,n),l.cross(u),a.setXYZ(m+0,l.x,l.y,l.z),a.setXYZ(m+1,l.x,l.y,l.z),a.setXYZ(m+2,l.x,l.y,l.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,c){const h=o.array,l=o.itemSize,u=o.normalized,m=new h.constructor(c.length*l);let f=0,E=0;for(let y=0,d=c.length;y<d;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*l;for(let p=0;p<l;p++)m[E++]=h[f++]}return new Tt(m,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ut,a=this.index.array,i=this.attributes;for(const o in i){const c=i[o],h=e(c,a);t.setAttribute(o,h)}const n=this.morphAttributes;for(const o in n){const c=[],h=n[o];for(let l=0,u=h.length;l<u;l++){const m=h[l],f=e(m,a);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const h=s[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const c in a){const h=a[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let n=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let u=0,m=h.length;u<m;u++){const f=h[u];l.push(f.toJSON(e.data))}l.length>0&&(i[c]=l,n=!0)}n&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone(t));const i=e.attributes;for(const h in i){const l=i[h];this.setAttribute(h,l.clone(t))}const n=e.morphAttributes;for(const h in n){const l=[],u=n[h];for(let m=0,f=u.length;m<f;m++)l.push(u[m].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let h=0,l=s.length;h<l;h++){const u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const So=new Xe,Ma=new Gi,ci=new Xa,Bo=new C,hi=new C,li=new C,di=new C,bn=new C,pi=new C,wo=new C,mi=new C;class Lt extends nt{constructor(e=new ut,t=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const a=e[t[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=a.length;i<n;i++){const s=a[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){const a=this.geometry,i=a.attributes.position,n=a.morphAttributes.position,s=a.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(n&&o){pi.set(0,0,0);for(let c=0,h=n.length;c<h;c++){const l=o[c],u=n[c];l!==0&&(bn.fromBufferAttribute(u,e),s?pi.addScaledVector(bn,l):pi.addScaledVector(bn.sub(t),l))}t.add(pi)}return t}raycast(e,t){const a=this.geometry,i=this.material,n=this.matrixWorld;i!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),ci.copy(a.boundingSphere),ci.applyMatrix4(n),Ma.copy(e.ray).recast(e.near),!(ci.containsPoint(Ma.origin)===!1&&(Ma.intersectSphere(ci,Bo)===null||Ma.origin.distanceToSquared(Bo)>(e.far-e.near)**2))&&(So.copy(n).invert(),Ma.copy(e.ray).applyMatrix4(So),!(a.boundingBox!==null&&Ma.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,Ma)))}_computeIntersections(e,t,a){let i;const n=this.geometry,s=this.material,o=n.index,c=n.attributes.position,h=n.attributes.uv,l=n.attributes.uv1,u=n.attributes.normal,m=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(s))for(let E=0,y=m.length;E<y;E++){const d=m[E],p=s[d.materialIndex],A=Math.max(d.start,f.start),x=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let T=A,L=x;T<L;T+=3){const B=o.getX(T),S=o.getX(T+1),R=o.getX(T+2);i=ui(this,p,e,a,h,l,u,B,S,R),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{const E=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let d=E,p=y;d<p;d+=3){const A=o.getX(d),x=o.getX(d+1),T=o.getX(d+2);i=ui(this,s,e,a,h,l,u,A,x,T),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(s))for(let E=0,y=m.length;E<y;E++){const d=m[E],p=s[d.materialIndex],A=Math.max(d.start,f.start),x=Math.min(c.count,Math.min(d.start+d.count,f.start+f.count));for(let T=A,L=x;T<L;T+=3){const B=T,S=T+1,R=T+2;i=ui(this,p,e,a,h,l,u,B,S,R),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{const E=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let d=E,p=y;d<p;d+=3){const A=d,x=d+1,T=d+2;i=ui(this,s,e,a,h,l,u,A,x,T),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}}}function Ul(r,e,t,a,i,n,s,o){let c;if(e.side===At?c=a.intersectTriangle(s,n,i,!0,o):c=a.intersectTriangle(i,n,s,e.side===Ea,o),c===null)return null;mi.copy(o),mi.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(mi);return h<t.near||h>t.far?null:{distance:h,point:mi.clone(),object:r}}function ui(r,e,t,a,i,n,s,o,c,h){r.getVertexPosition(o,hi),r.getVertexPosition(c,li),r.getVertexPosition(h,di);const l=Ul(r,e,t,a,hi,li,di,wo);if(l){const u=new C;Wt.getBarycoord(wo,hi,li,di,u),i&&(l.uv=Wt.getInterpolatedAttribute(i,o,c,h,u,new Pe)),n&&(l.uv1=Wt.getInterpolatedAttribute(n,o,c,h,u,new Pe)),s&&(l.normal=Wt.getInterpolatedAttribute(s,o,c,h,u,new C),l.normal.dot(a.direction)>0&&l.normal.multiplyScalar(-1));const m={a:o,b:c,c:h,normal:new C,materialIndex:0};Wt.getNormal(hi,li,di,m.normal),l.face=m,l.barycoord=u}return l}class xr extends ut{constructor(e=1,t=1,a=1,i=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:i,heightSegments:n,depthSegments:s};const o=this;i=Math.floor(i),n=Math.floor(n),s=Math.floor(s);const c=[],h=[],l=[],u=[];let m=0,f=0;E("z","y","x",-1,-1,a,t,e,s,n,0),E("z","y","x",1,-1,a,t,-e,s,n,1),E("x","z","y",1,1,e,a,t,i,s,2),E("x","z","y",1,-1,e,a,-t,i,s,3),E("x","y","z",1,-1,e,t,a,i,n,4),E("x","y","z",-1,-1,e,t,-a,i,n,5),this.setIndex(c),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(u,2));function E(y,d,p,A,x,T,L,B,S,R,V){const g=T/S,b=L/R,F=T/2,O=L/2,X=B/2,$=S+1,Z=R+1;let Y=0,z=0;const te=new C;for(let he=0;he<Z;he++){const _e=he*b-O;for(let Ue=0;Ue<$;Ue++){const We=Ue*g-F;te[y]=We*A,te[d]=_e*x,te[p]=X,h.push(te.x,te.y,te.z),te[y]=0,te[d]=0,te[p]=B>0?1:-1,l.push(te.x,te.y,te.z),u.push(Ue/S),u.push(1-he/R),Y+=1}}for(let he=0;he<R;he++)for(let _e=0;_e<S;_e++){const Ue=m+_e+$*he,We=m+_e+$*(he+1),H=m+(_e+1)+$*(he+1),Q=m+(_e+1)+$*he;c.push(Ue,We,Q),c.push(We,H,Q),z+=6}o.addGroup(f,z,V),f+=z,m+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(r){const e={};for(const t in r){e[t]={};for(const a in r[t]){const i=r[t][a];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=i.clone():Array.isArray(i)?e[t][a]=i.slice():e[t][a]=i}}return e}function Et(r){const e={};for(let t=0;t<r.length;t++){const a=yr(r[t]);for(const i in a)e[i]=a[i]}return e}function Nl(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Oc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const Fl={clone:yr,merge:Et};var Ol=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _a extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ol,this.fragmentShader=Wl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Nl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const n=this.uniforms[i].value;n&&n.isTexture?t.uniforms[i]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[i]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[i]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[i]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[i]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[i]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[i]={type:"m4",value:n.toArray()}:t.uniforms[i]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const i in this.extensions)this.extensions[i]===!0&&(a[i]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class Wc extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=aa}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pa=new C,Co=new Pe,Io=new Pe;class It extends Wc{constructor(e=50,t=1,a=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pa.x,pa.y).multiplyScalar(-e/pa.z),pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(pa.x,pa.y).multiplyScalar(-e/pa.z)}getViewSize(e,t){return this.getViewBounds(e,Co,Io),t.subVectors(Io,Co)}setViewOffset(e,t,a,i,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=i,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,a=2*t,i=this.aspect*a,n=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,h=s.fullHeight;n+=s.offsetX*i/c,t-=s.offsetY*a/h,i*=s.width/c,a*=s.height/h}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+i,t,t-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,ir=1;class Zl extends nt{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new It(rr,ir,e,t);i.layers=this.layers,this.add(i);const n=new It(rr,ir,e,t);n.layers=this.layers,this.add(n);const s=new It(rr,ir,e,t);s.layers=this.layers,this.add(s);const o=new It(rr,ir,e,t);o.layers=this.layers,this.add(o);const c=new It(rr,ir,e,t);c.layers=this.layers,this.add(c);const h=new It(rr,ir,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,i,n,s,o,c]=t;for(const h of t)this.remove(h);if(e===aa)a.up.set(0,1,0),a.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ki)a.up.set(0,-1,0),a.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,s,o,c,h,l]=this.children,u=e.getRenderTarget(),m=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const y=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,i),e.render(t,n),e.setRenderTarget(a,1,i),e.render(t,s),e.setRenderTarget(a,2,i),e.render(t,o),e.setRenderTarget(a,3,i),e.render(t,c),e.setRenderTarget(a,4,i),e.render(t,h),a.texture.generateMipmaps=y,e.setRenderTarget(a,5,i),e.render(t,l),e.setRenderTarget(u,m,f),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Zc extends yt{constructor(e,t,a,i,n,s,o,c,h,l){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,a,i,n,s,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zl extends Za{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},i=[a,a,a,a,a,a];this.texture=new Zc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xr(5,5,5),n=new _a({name:"CubemapFromEquirect",uniforms:yr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:At,blending:ua});n.uniforms.tEquirect.value=t;const s=new Lt(i,n),o=t.minFilter;return t.minFilter===ka&&(t.minFilter=Ot),new Zl(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,a,i){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,a,i);e.setRenderTarget(n)}}const xn=new C,Xl=new C,Hl=new De;class Ca{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,i){return this.normal.set(e,t,a),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const i=xn.subVectors(a,t).cross(Xl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(xn),i=this.normal.dot(a);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/i;return n<0||n>1?null:t.copy(e.start).addScaledVector(a,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||Hl.getNormalMatrix(e),i=this.coplanarPoint(xn).applyMatrix4(e),n=this.normal.applyMatrix3(a).normalize();return this.constant=-i.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sa=new Xa,fi=new C;class Fs{constructor(e=new Ca,t=new Ca,a=new Ca,i=new Ca,n=new Ca,s=new Ca){this.planes=[e,t,a,i,n,s]}set(e,t,a,i,n,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(a),o[3].copy(i),o[4].copy(n),o[5].copy(s),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=aa){const a=this.planes,i=e.elements,n=i[0],s=i[1],o=i[2],c=i[3],h=i[4],l=i[5],u=i[6],m=i[7],f=i[8],E=i[9],y=i[10],d=i[11],p=i[12],A=i[13],x=i[14],T=i[15];if(a[0].setComponents(c-n,m-h,d-f,T-p).normalize(),a[1].setComponents(c+n,m+h,d+f,T+p).normalize(),a[2].setComponents(c+s,m+l,d+E,T+A).normalize(),a[3].setComponents(c-s,m-l,d-E,T-A).normalize(),a[4].setComponents(c-o,m-u,d-y,T-x).normalize(),t===aa)a[5].setComponents(c+o,m+u,d+y,T+x).normalize();else if(t===ki)a[5].setComponents(o,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sa)}intersectsSprite(e){return Sa.center.set(0,0,0),Sa.radius=.7071067811865476,Sa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sa)}intersectsSphere(e){const t=this.planes,a=e.center,i=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(a)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const i=t[a];if(fi.x=i.normal.x>0?e.max.x:e.min.x,fi.y=i.normal.y>0?e.max.y:e.min.y,fi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zc(){let r=null,e=!1,t=null,a=null;function i(n,s){t(n,s),a=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(a=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function Gl(r){const e=new WeakMap;function t(o,c){const h=o.array,l=o.usage,u=h.byteLength,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,h,l),o.onUploadCallback();let f;if(h instanceof Float32Array)f=r.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=r.SHORT;else if(h instanceof Uint32Array)f=r.UNSIGNED_INT;else if(h instanceof Int32Array)f=r.INT;else if(h instanceof Int8Array)f=r.BYTE;else if(h instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function a(o,c,h){const l=c.array,u=c.updateRanges;if(r.bindBuffer(h,o),u.length===0)r.bufferSubData(h,0,l);else{u.sort((f,E)=>f.start-E.start);let m=0;for(let f=1;f<u.length;f++){const E=u[m],y=u[f];y.start<=E.start+E.count+1?E.count=Math.max(E.count,y.start+y.count-E.start):(++m,u[m]=y)}u.length=m+1;for(let f=0,E=u.length;f<E;f++){const y=u[f];r.bufferSubData(h,y.start*l.BYTES_PER_ELEMENT,l,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,o,c),h.version=o.version}}return{get:i,remove:n,update:s}}class Vi extends ut{constructor(e=1,t=1,a=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:i};const n=e/2,s=t/2,o=Math.floor(a),c=Math.floor(i),h=o+1,l=c+1,u=e/o,m=t/c,f=[],E=[],y=[],d=[];for(let p=0;p<l;p++){const A=p*m-s;for(let x=0;x<h;x++){const T=x*u-n;E.push(T,-A,0),y.push(0,0,1),d.push(x/o),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<o;A++){const x=A+h*p,T=A+h*(p+1),L=A+1+h*(p+1),B=A+1+h*p;f.push(x,T,B),f.push(T,L,B)}this.setIndex(f),this.setAttribute("position",new lt(E,3)),this.setAttribute("normal",new lt(y,3)),this.setAttribute("uv",new lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ql=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$l=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ql=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ed=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nd=`#ifdef USE_IRIDESCENCE
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
#endif`,sd=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fd=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Ed=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Td=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
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
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Fd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ip=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Jp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,em=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sm=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,cm=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lm=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,pm=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,um=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_m=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,xm=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Am=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:Vl,alphahash_pars_fragment:ql,alphamap_fragment:jl,alphamap_pars_fragment:Yl,alphatest_fragment:Kl,alphatest_pars_fragment:$l,aomap_fragment:Jl,aomap_pars_fragment:Ql,batching_pars_vertex:ed,batching_vertex:td,begin_vertex:ad,beginnormal_vertex:rd,bsdfs:id,iridescence_fragment:nd,bumpmap_pars_fragment:sd,clipping_planes_fragment:od,clipping_planes_pars_fragment:cd,clipping_planes_pars_vertex:hd,clipping_planes_vertex:ld,color_fragment:dd,color_pars_fragment:pd,color_pars_vertex:md,color_vertex:ud,common:fd,cube_uv_reflection_fragment:gd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:_d,displacementmap_vertex:yd,emissivemap_fragment:vd,emissivemap_pars_fragment:bd,colorspace_fragment:xd,colorspace_pars_fragment:Ad,envmap_fragment:Td,envmap_common_pars_fragment:Md,envmap_pars_fragment:Sd,envmap_pars_vertex:Bd,envmap_physical_pars_fragment:Fd,envmap_vertex:wd,fog_vertex:Cd,fog_pars_vertex:Id,fog_fragment:Dd,fog_pars_fragment:Pd,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Ld,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Ud,lights_pars_begin:Nd,lights_toon_fragment:Od,lights_toon_pars_fragment:Wd,lights_phong_fragment:Zd,lights_phong_pars_fragment:zd,lights_physical_fragment:Xd,lights_physical_pars_fragment:Hd,lights_fragment_begin:Gd,lights_fragment_maps:Vd,lights_fragment_end:qd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:$d,map_fragment:Jd,map_pars_fragment:Qd,map_particle_fragment:ep,map_particle_pars_fragment:tp,metalnessmap_fragment:ap,metalnessmap_pars_fragment:rp,morphinstance_vertex:ip,morphcolor_vertex:np,morphnormal_vertex:sp,morphtarget_pars_vertex:op,morphtarget_vertex:cp,normal_fragment_begin:hp,normal_fragment_maps:lp,normal_pars_fragment:dp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:gp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:_p,opaque_fragment:yp,packing:vp,premultiplied_alpha_fragment:bp,project_vertex:xp,dithering_fragment:Ap,dithering_pars_fragment:Tp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:wp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Ip,skinbase_vertex:Dp,skinning_pars_vertex:Pp,skinning_vertex:Rp,skinnormal_vertex:Lp,specularmap_fragment:kp,specularmap_pars_fragment:Up,tonemapping_fragment:Np,tonemapping_pars_fragment:Fp,transmission_fragment:Op,transmission_pars_fragment:Wp,uv_pars_fragment:Zp,uv_pars_vertex:zp,uv_vertex:Xp,worldpos_vertex:Hp,background_vert:Gp,background_frag:Vp,backgroundCube_vert:qp,backgroundCube_frag:jp,cube_vert:Yp,cube_frag:Kp,depth_vert:$p,depth_frag:Jp,distanceRGBA_vert:Qp,distanceRGBA_frag:em,equirect_vert:tm,equirect_frag:am,linedashed_vert:rm,linedashed_frag:im,meshbasic_vert:nm,meshbasic_frag:sm,meshlambert_vert:om,meshlambert_frag:cm,meshmatcap_vert:hm,meshmatcap_frag:lm,meshnormal_vert:dm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:um,meshphysical_vert:fm,meshphysical_frag:gm,meshtoon_vert:Em,meshtoon_frag:_m,points_vert:ym,points_frag:vm,shadow_vert:bm,shadow_frag:xm,sprite_vert:Am,sprite_frag:Tm},ae={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Xt={basic:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new be(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Et([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Et([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Et([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new be(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Et([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Et([ae.points,ae.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Et([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Et([ae.common,ae.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Et([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Et([ae.sprite,ae.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Et([ae.common,ae.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Et([ae.lights,ae.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Xt.physical={uniforms:Et([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const gi={r:0,b:0,g:0},Ba=new jt,Mm=new Xe;function Sm(r,e,t,a,i,n,s){const o=new be(0);let c=n===!0?0:1,h,l,u=null,m=0,f=null;function E(A){let x=A.isScene===!0?A.background:null;return x&&x.isTexture&&(x=(A.backgroundBlurriness>0?t:e).get(x)),x}function y(A){let x=!1;const T=E(A);T===null?p(o,c):T&&T.isColor&&(p(T,1),x=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?a.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,s),(r.autoClear||x)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function d(A,x){const T=E(x);T&&(T.isCubeTexture||T.mapping===Xi)?(l===void 0&&(l=new Lt(new xr(1,1,1),new _a({name:"BackgroundCubeMaterial",uniforms:yr(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(L,B,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Ba.copy(x.backgroundRotation),Ba.x*=-1,Ba.y*=-1,Ba.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ba.y*=-1,Ba.z*=-1),l.material.uniforms.envMap.value=T,l.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Ba)),l.material.toneMapped=ze.getTransfer(T.colorSpace)!==$e,(u!==T||m!==T.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=T,m=T.version,f=r.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Lt(new Vi(2,2),new _a({name:"BackgroundMaterial",uniforms:yr(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:Ea,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=ze.getTransfer(T.colorSpace)!==$e,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||m!==T.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=T,m=T.version,f=r.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function p(A,x){A.getRGB(gi,Oc(r)),a.buffers.color.setClear(gi.r,gi.g,gi.b,x,s)}return{getClearColor:function(){return o},setClearColor:function(A,x=1){o.set(A),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,p(o,c)},render:y,addToRenderList:d}}function Bm(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},i=m(null);let n=i,s=!1;function o(g,b,F,O,X){let $=!1;const Z=u(O,F,b);n!==Z&&(n=Z,h(n.object)),$=f(g,O,F,X),$&&E(g,O,F,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,T(g,b,F,O),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return r.createVertexArray()}function h(g){return r.bindVertexArray(g)}function l(g){return r.deleteVertexArray(g)}function u(g,b,F){const O=F.wireframe===!0;let X=a[g.id];X===void 0&&(X={},a[g.id]=X);let $=X[b.id];$===void 0&&($={},X[b.id]=$);let Z=$[O];return Z===void 0&&(Z=m(c()),$[O]=Z),Z}function m(g){const b=[],F=[],O=[];for(let X=0;X<t;X++)b[X]=0,F[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:F,attributeDivisors:O,object:g,attributes:{},index:null}}function f(g,b,F,O){const X=n.attributes,$=b.attributes;let Z=0;const Y=F.getAttributes();for(const z in Y)if(Y[z].location>=0){const te=X[z];let he=$[z];if(he===void 0&&(z==="instanceMatrix"&&g.instanceMatrix&&(he=g.instanceMatrix),z==="instanceColor"&&g.instanceColor&&(he=g.instanceColor)),te===void 0||te.attribute!==he||he&&te.data!==he.data)return!0;Z++}return n.attributesNum!==Z||n.index!==O}function E(g,b,F,O){const X={},$=b.attributes;let Z=0;const Y=F.getAttributes();for(const z in Y)if(Y[z].location>=0){let te=$[z];te===void 0&&(z==="instanceMatrix"&&g.instanceMatrix&&(te=g.instanceMatrix),z==="instanceColor"&&g.instanceColor&&(te=g.instanceColor));const he={};he.attribute=te,te&&te.data&&(he.data=te.data),X[z]=he,Z++}n.attributes=X,n.attributesNum=Z,n.index=O}function y(){const g=n.newAttributes;for(let b=0,F=g.length;b<F;b++)g[b]=0}function d(g){p(g,0)}function p(g,b){const F=n.newAttributes,O=n.enabledAttributes,X=n.attributeDivisors;F[g]=1,O[g]===0&&(r.enableVertexAttribArray(g),O[g]=1),X[g]!==b&&(r.vertexAttribDivisor(g,b),X[g]=b)}function A(){const g=n.newAttributes,b=n.enabledAttributes;for(let F=0,O=b.length;F<O;F++)b[F]!==g[F]&&(r.disableVertexAttribArray(F),b[F]=0)}function x(g,b,F,O,X,$,Z){Z===!0?r.vertexAttribIPointer(g,b,F,X,$):r.vertexAttribPointer(g,b,F,O,X,$)}function T(g,b,F,O){y();const X=O.attributes,$=F.getAttributes(),Z=b.defaultAttributeValues;for(const Y in $){const z=$[Y];if(z.location>=0){let te=X[Y];if(te===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(te=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(te=g.instanceColor)),te!==void 0){const he=te.normalized,_e=te.itemSize,Ue=e.get(te);if(Ue===void 0)continue;const We=Ue.buffer,H=Ue.type,Q=Ue.bytesPerElement,me=H===r.INT||H===r.UNSIGNED_INT||te.gpuType===Bs;if(te.isInterleavedBufferAttribute){const ce=te.data,we=ce.stride,xe=te.offset;if(ce.isInstancedInterleavedBuffer){for(let Ne=0;Ne<z.locationSize;Ne++)p(z.location+Ne,ce.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<z.locationSize;Ne++)d(z.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Ne=0;Ne<z.locationSize;Ne++)x(z.location+Ne,_e/z.locationSize,H,he,we*Q,(xe+_e/z.locationSize*Ne)*Q,me)}else{if(te.isInstancedBufferAttribute){for(let ce=0;ce<z.locationSize;ce++)p(z.location+ce,te.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ce=0;ce<z.locationSize;ce++)d(z.location+ce);r.bindBuffer(r.ARRAY_BUFFER,We);for(let ce=0;ce<z.locationSize;ce++)x(z.location+ce,_e/z.locationSize,H,he,_e*Q,_e/z.locationSize*ce*Q,me)}}else if(Z!==void 0){const he=Z[Y];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(z.location,he);break;case 3:r.vertexAttrib3fv(z.location,he);break;case 4:r.vertexAttrib4fv(z.location,he);break;default:r.vertexAttrib1fv(z.location,he)}}}}A()}function L(){R();for(const g in a){const b=a[g];for(const F in b){const O=b[F];for(const X in O)l(O[X].object),delete O[X];delete b[F]}delete a[g]}}function B(g){if(a[g.id]===void 0)return;const b=a[g.id];for(const F in b){const O=b[F];for(const X in O)l(O[X].object),delete O[X];delete b[F]}delete a[g.id]}function S(g){for(const b in a){const F=a[b];if(F[g.id]===void 0)continue;const O=F[g.id];for(const X in O)l(O[X].object),delete O[X];delete F[g.id]}}function R(){V(),s=!0,n!==i&&(n=i,h(n.object))}function V(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:V,dispose:L,releaseStatesOfGeometry:B,releaseStatesOfProgram:S,initAttributes:y,enableAttribute:d,disableUnusedAttributes:A}}function wm(r,e,t){let a;function i(h){a=h}function n(h,l){r.drawArrays(a,h,l),t.update(l,a,1)}function s(h,l,u){u!==0&&(r.drawArraysInstanced(a,h,l,u),t.update(l,a,u))}function o(h,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,l,0,u);let m=0;for(let f=0;f<u;f++)m+=l[f];t.update(m,a,1)}function c(h,l,u,m){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let E=0;E<h.length;E++)s(h[E],l[E],m[E]);else{f.multiDrawArraysInstancedWEBGL(a,h,0,l,0,m,0,u);let E=0;for(let y=0;y<u;y++)E+=l[y];for(let y=0;y<m.length;y++)t.update(E,a,m[y])}}this.setMode=i,this.render=n,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Cm(r,e,t,a){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(S){return!(S!==Zt&&a.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const R=S===Gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==ia&&a.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==qt&&!R)}function c(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const u=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){const S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:m,maxTextures:f,maxVertexTextures:E,maxTextureSize:y,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:A,maxVaryings:x,maxFragmentUniforms:T,vertexTextures:L,maxSamples:B}}function Im(r){const e=this;let t=null,a=0,i=!1,n=!1;const s=new Ca,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,m){const f=u.length!==0||m||a!==0||i;return i=m,a=u.length,f},this.beginShadows=function(){n=!0,l(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,m){t=l(u,m,0)},this.setState=function(u,m,f){const E=u.clippingPlanes,y=u.clipIntersection,d=u.clipShadows,p=r.get(u);if(!i||E===null||E.length===0||n&&!d)n?l(null):h();else{const A=n?0:a,x=A*4;let T=p.clippingState||null;c.value=T,T=l(E,m,x,f);for(let L=0;L!==x;++L)T[L]=t[L];p.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function l(u,m,f,E){const y=u!==null?u.length:0;let d=null;if(y!==0){if(d=c.value,E!==!0||d===null){const p=f+y*4,A=m.matrixWorldInverse;o.getNormalMatrix(A),(d===null||d.length<p)&&(d=new Float32Array(p));for(let x=0,T=f;x!==y;++x,T+=4)s.copy(u[x]).applyMatrix4(A,o),s.normal.toArray(d,T),d[T+3]=s.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,d}}function Dm(r){let e=new WeakMap;function t(s,o){return o===Gn?s.mapping=fr:o===Vn&&(s.mapping=gr),s}function a(s){if(s&&s.isTexture){const o=s.mapping;if(o===Gn||o===Vn)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const h=new zl(c.height);return h.fromEquirectangularTexture(r,s),e.set(s,h),s.addEventListener("dispose",i),t(h.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function n(){e=new WeakMap}return{get:a,dispose:n}}class Xc extends Wc{constructor(e=-1,t=1,a=1,i=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=i,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,i,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=i,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let n=a-e,s=a+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=h*this.view.offsetX,s=n+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hr=4,Do=[.125,.215,.35,.446,.526,.582],Pa=20,An=new Xc,Po=new be;let Tn=null,Mn=0,Sn=0,Bn=!1;const Ia=(1+Math.sqrt(5))/2,nr=1/Ia,Ro=[new C(-Ia,nr,0),new C(Ia,nr,0),new C(-nr,0,Ia),new C(nr,0,Ia),new C(0,Ia,-nr),new C(0,Ia,nr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Lo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,a=.1,i=100){Tn=this._renderer.getRenderTarget(),Mn=this._renderer.getActiveCubeFace(),Sn=this._renderer.getActiveMipmapLevel(),Bn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,a,i,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=No(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tn,Mn,Sn),this._renderer.xr.enabled=Bn,e.scissorTest=!1,Ei(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tn=this._renderer.getRenderTarget(),Mn=this._renderer.getActiveCubeFace(),Sn=this._renderer.getActiveMipmapLevel(),Bn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Gr,format:Zt,colorSpace:va,depthBuffer:!1},i=ko(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ko(e,t,a);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pm(n)),this._blurMaterial=Rm(n,e,t)}return i}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,An)}_sceneToCubeUV(e,t,a,i){const n=new It(90,1,t,a),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,l=c.toneMapping;c.getClearColor(Po),c.toneMapping=fa,c.autoClear=!1;const u=new Ns({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),m=new Lt(new xr,u);let f=!1;const E=e.background;E?E.isColor&&(u.color.copy(E),e.background=null,f=!0):(u.color.copy(Po),f=!0);for(let y=0;y<6;y++){const d=y%3;d===0?(n.up.set(0,s[y],0),n.lookAt(o[y],0,0)):d===1?(n.up.set(0,0,s[y]),n.lookAt(0,o[y],0)):(n.up.set(0,s[y],0),n.lookAt(0,0,o[y]));const p=this._cubeSize;Ei(i,d*p,y>2?p:0,p,p),c.setRenderTarget(i),f&&c.render(m,n),c.render(e,n)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=l,c.autoClear=h,e.background=E}_textureToCubeUV(e,t){const a=this._renderer,i=e.mapping===fr||e.mapping===gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=No()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());const n=i?this._cubemapMaterial:this._equirectMaterial,s=new Lt(this._lodPlanes[0],n),o=n.uniforms;o.envMap.value=e;const c=this._cubeSize;Ei(t,0,0,3*c,2*c),a.setRenderTarget(t),a.render(s,An)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let n=1;n<i;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Ro[(i-n-1)%Ro.length];this._blur(e,n-1,n,s,o)}t.autoClear=a}_blur(e,t,a,i,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,a,i,"latitudinal",n),this._halfBlur(s,e,a,a,i,"longitudinal",n)}_halfBlur(e,t,a,i,n,s,o){const c=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new Lt(this._lodPlanes[i],h),m=h.uniforms,f=this._sizeLods[a]-1,E=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*Pa-1),y=n/E,d=isFinite(n)?1+Math.floor(l*y):Pa;d>Pa&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Pa}`);const p=[];let A=0;for(let S=0;S<Pa;++S){const R=S/y,V=Math.exp(-R*R/2);p.push(V),S===0?A+=V:S<d&&(A+=2*V)}for(let S=0;S<p.length;S++)p[S]=p[S]/A;m.envMap.value=e.texture,m.samples.value=d,m.weights.value=p,m.latitudinal.value=s==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:x}=this;m.dTheta.value=E,m.mipInt.value=x-a;const T=this._sizeLods[i],L=3*T*(i>x-hr?i-x+hr:0),B=4*(this._cubeSize-T);Ei(t,L,B,3*T,2*T),c.setRenderTarget(t),c.render(u,An)}}function Pm(r){const e=[],t=[],a=[];let i=r;const n=r-hr+1+Do.length;for(let s=0;s<n;s++){const o=Math.pow(2,i);t.push(o);let c=1/o;s>r-hr?c=Do[s-r+hr-1]:s===0&&(c=0),a.push(c);const h=1/(o-2),l=-h,u=1+h,m=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,E=6,y=3,d=2,p=1,A=new Float32Array(y*E*f),x=new Float32Array(d*E*f),T=new Float32Array(p*E*f);for(let B=0;B<f;B++){const S=B%3*2/3-1,R=B>2?0:-1,V=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];A.set(V,y*E*B),x.set(m,d*E*B);const g=[B,B,B,B,B,B];T.set(g,p*E*B)}const L=new ut;L.setAttribute("position",new Tt(A,y)),L.setAttribute("uv",new Tt(x,d)),L.setAttribute("faceIndex",new Tt(T,p)),e.push(L),i>hr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:a}}function ko(r,e,t){const a=new Za(r,e,t);return a.texture.mapping=Xi,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ei(r,e,t,a,i){r.viewport.set(e,t,a,i),r.scissor.set(e,t,a,i)}function Rm(r,e,t){const a=new Float32Array(Pa),i=new C(0,1,0);return new _a({name:"SphericalGaussianBlur",defines:{n:Pa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Os(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Uo(){return new _a({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Os(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function No(){return new _a({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Os(){return`

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
	`}function Lm(r){let e=new WeakMap,t=null;function a(o){if(o&&o.isTexture){const c=o.mapping,h=c===Gn||c===Vn,l=c===fr||c===gr;if(h||l){let u=e.get(o);const m=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return t===null&&(t=new Lo(r)),u=h?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return h&&f&&f.height>0||l&&f&&i(f)?(t===null&&(t=new Lo(r)),u=h?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",n),u.texture):null}}}return o}function i(o){let c=0;const h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function n(o){const c=o.target;c.removeEventListener("dispose",n);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:s}}function km(r){const e={};function t(a){if(e[a]!==void 0)return e[a];let i;switch(a){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(a)}return e[a]=i,i}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const i=t(a);return i===null&&Ci("THREE.WebGLRenderer: "+a+" extension not supported."),i}}}function Um(r,e,t,a){const i={},n=new WeakMap;function s(u){const m=u.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);for(const E in m.morphAttributes){const y=m.morphAttributes[E];for(let d=0,p=y.length;d<p;d++)e.remove(y[d])}m.removeEventListener("dispose",s),delete i[m.id];const f=n.get(m);f&&(e.remove(f),n.delete(m)),a.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(u,m){return i[m.id]===!0||(m.addEventListener("dispose",s),i[m.id]=!0,t.memory.geometries++),m}function c(u){const m=u.attributes;for(const E in m)e.update(m[E],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const E in f){const y=f[E];for(let d=0,p=y.length;d<p;d++)e.update(y[d],r.ARRAY_BUFFER)}}function h(u){const m=[],f=u.index,E=u.attributes.position;let y=0;if(f!==null){const A=f.array;y=f.version;for(let x=0,T=A.length;x<T;x+=3){const L=A[x+0],B=A[x+1],S=A[x+2];m.push(L,B,B,S,S,L)}}else if(E!==void 0){const A=E.array;y=E.version;for(let x=0,T=A.length/3-1;x<T;x+=3){const L=x+0,B=x+1,S=x+2;m.push(L,B,B,S,S,L)}}else return;const d=new(Rc(m)?Fc:Nc)(m,1);d.version=y;const p=n.get(u);p&&e.remove(p),n.set(u,d)}function l(u){const m=n.get(u);if(m){const f=u.index;f!==null&&m.version<f.version&&h(u)}else h(u);return n.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function Nm(r,e,t){let a;function i(m){a=m}let n,s;function o(m){n=m.type,s=m.bytesPerElement}function c(m,f){r.drawElements(a,f,n,m*s),t.update(f,a,1)}function h(m,f,E){E!==0&&(r.drawElementsInstanced(a,f,n,m*s,E),t.update(f,a,E))}function l(m,f,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,f,0,n,m,0,E);let y=0;for(let d=0;d<E;d++)y+=f[d];t.update(y,a,1)}function u(m,f,E,y){if(E===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<m.length;p++)h(m[p]/s,f[p],y[p]);else{d.multiDrawElementsInstancedWEBGL(a,f,0,n,m,0,y,0,E);let p=0;for(let A=0;A<E;A++)p+=f[A];for(let A=0;A<y.length;A++)t.update(p,a,y[A])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function Fm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(n,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(n/3);break;case r.LINES:t.lines+=o*(n/2);break;case r.LINE_STRIP:t.lines+=o*(n-1);break;case r.LINE_LOOP:t.lines+=o*n;break;case r.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:a}}function Om(r,e,t){const a=new WeakMap,i=new Ve;function n(s,o,c){const h=s.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l!==void 0?l.length:0;let m=a.get(o);if(m===void 0||m.count!==u){let f=function(){R.dispose(),a.delete(o),o.removeEventListener("dispose",f)};m!==void 0&&m.texture.dispose();const E=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;E===!0&&(T=1),y===!0&&(T=2),d===!0&&(T=3);let L=o.attributes.position.count*T,B=1;L>e.maxTextureSize&&(B=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const S=new Float32Array(L*B*4*u),R=new kc(S,L,B,u);R.type=qt,R.needsUpdate=!0;const V=T*4;for(let g=0;g<u;g++){const b=p[g],F=A[g],O=x[g],X=L*B*4*g;for(let $=0;$<b.count;$++){const Z=$*V;E===!0&&(i.fromBufferAttribute(b,$),S[X+Z+0]=i.x,S[X+Z+1]=i.y,S[X+Z+2]=i.z,S[X+Z+3]=0),y===!0&&(i.fromBufferAttribute(F,$),S[X+Z+4]=i.x,S[X+Z+5]=i.y,S[X+Z+6]=i.z,S[X+Z+7]=0),d===!0&&(i.fromBufferAttribute(O,$),S[X+Z+8]=i.x,S[X+Z+9]=i.y,S[X+Z+10]=i.z,S[X+Z+11]=O.itemSize===4?i.w:1)}}m={count:u,texture:R,size:new Pe(L,B)},a.set(o,m),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];const E=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",E),c.getUniforms().setValue(r,"morphTargetInfluences",h)}c.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:n}}function Wm(r,e,t,a){let i=new WeakMap;function n(c){const h=a.render.frame,l=c.geometry,u=e.get(c,l);if(i.get(u)!==h&&(e.update(u),i.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return u}function s(){i=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:n,dispose:s}}class Hc extends yt{constructor(e,t,a,i,n,s,o,c,h,l=dr){if(l!==dr&&l!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&l===dr&&(a=Wa),a===void 0&&l===_r&&(a=Er),super(null,i,n,s,o,c,l,a,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=c!==void 0?c:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gc=new yt,Fo=new Hc(1,1),Vc=new kc,qc=new Sl,jc=new Zc,Oo=[],Wo=[],Zo=new Float32Array(16),zo=new Float32Array(9),Xo=new Float32Array(4);function Ar(r,e,t){const a=r[0];if(a<=0||a>0)return r;const i=e*t;let n=Oo[i];if(n===void 0&&(n=new Float32Array(i),Oo[i]=n),e!==0){a.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(n,o)}return n}function ot(r,e){if(r.length!==e.length)return!1;for(let t=0,a=r.length;t<a;t++)if(r[t]!==e[t])return!1;return!0}function ct(r,e){for(let t=0,a=e.length;t<a;t++)r[t]=e[t]}function qi(r,e){let t=Wo[e];t===void 0&&(t=new Int32Array(e),Wo[e]=t);for(let a=0;a!==e;++a)t[a]=r.allocateTextureUnit();return t}function Zm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function zm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2fv(this.addr,e),ct(t,e)}}function Xm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;r.uniform3fv(this.addr,e),ct(t,e)}}function Hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4fv(this.addr,e),ct(t,e)}}function Gm(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,a))return;Xo.set(a),r.uniformMatrix2fv(this.addr,!1,Xo),ct(t,a)}}function Vm(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,a))return;zo.set(a),r.uniformMatrix3fv(this.addr,!1,zo),ct(t,a)}}function qm(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,a))return;Zo.set(a),r.uniformMatrix4fv(this.addr,!1,Zo),ct(t,a)}}function jm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ym(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2iv(this.addr,e),ct(t,e)}}function Km(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3iv(this.addr,e),ct(t,e)}}function $m(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4iv(this.addr,e),ct(t,e)}}function Jm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2uiv(this.addr,e),ct(t,e)}}function eu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3uiv(this.addr,e),ct(t,e)}}function tu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4uiv(this.addr,e),ct(t,e)}}function au(r,e,t){const a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(r.uniform1i(this.addr,i),a[0]=i);let n;this.type===r.SAMPLER_2D_SHADOW?(Fo.compareFunction=Pc,n=Fo):n=Gc,t.setTexture2D(e||n,i)}function ru(r,e,t){const a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(r.uniform1i(this.addr,i),a[0]=i),t.setTexture3D(e||qc,i)}function iu(r,e,t){const a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(r.uniform1i(this.addr,i),a[0]=i),t.setTextureCube(e||jc,i)}function nu(r,e,t){const a=this.cache,i=t.allocateTextureUnit();a[0]!==i&&(r.uniform1i(this.addr,i),a[0]=i),t.setTexture2DArray(e||Vc,i)}function su(r){switch(r){case 5126:return Zm;case 35664:return zm;case 35665:return Xm;case 35666:return Hm;case 35674:return Gm;case 35675:return Vm;case 35676:return qm;case 5124:case 35670:return jm;case 35667:case 35671:return Ym;case 35668:case 35672:return Km;case 35669:case 35673:return $m;case 5125:return Jm;case 36294:return Qm;case 36295:return eu;case 36296:return tu;case 35678:case 36198:case 36298:case 36306:case 35682:return au;case 35679:case 36299:case 36307:return ru;case 35680:case 36300:case 36308:case 36293:return iu;case 36289:case 36303:case 36311:case 36292:return nu}}function ou(r,e){r.uniform1fv(this.addr,e)}function cu(r,e){const t=Ar(e,this.size,2);r.uniform2fv(this.addr,t)}function hu(r,e){const t=Ar(e,this.size,3);r.uniform3fv(this.addr,t)}function lu(r,e){const t=Ar(e,this.size,4);r.uniform4fv(this.addr,t)}function du(r,e){const t=Ar(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function pu(r,e){const t=Ar(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mu(r,e){const t=Ar(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function uu(r,e){r.uniform1iv(this.addr,e)}function fu(r,e){r.uniform2iv(this.addr,e)}function gu(r,e){r.uniform3iv(this.addr,e)}function Eu(r,e){r.uniform4iv(this.addr,e)}function _u(r,e){r.uniform1uiv(this.addr,e)}function yu(r,e){r.uniform2uiv(this.addr,e)}function vu(r,e){r.uniform3uiv(this.addr,e)}function bu(r,e){r.uniform4uiv(this.addr,e)}function xu(r,e,t){const a=this.cache,i=e.length,n=qi(t,i);ot(a,n)||(r.uniform1iv(this.addr,n),ct(a,n));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Gc,n[s])}function Au(r,e,t){const a=this.cache,i=e.length,n=qi(t,i);ot(a,n)||(r.uniform1iv(this.addr,n),ct(a,n));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||qc,n[s])}function Tu(r,e,t){const a=this.cache,i=e.length,n=qi(t,i);ot(a,n)||(r.uniform1iv(this.addr,n),ct(a,n));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||jc,n[s])}function Mu(r,e,t){const a=this.cache,i=e.length,n=qi(t,i);ot(a,n)||(r.uniform1iv(this.addr,n),ct(a,n));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Vc,n[s])}function Su(r){switch(r){case 5126:return ou;case 35664:return cu;case 35665:return hu;case 35666:return lu;case 35674:return du;case 35675:return pu;case 35676:return mu;case 5124:case 35670:return uu;case 35667:case 35671:return fu;case 35668:case 35672:return gu;case 35669:case 35673:return Eu;case 5125:return _u;case 36294:return yu;case 36295:return vu;case 36296:return bu;case 35678:case 36198:case 36298:case 36306:case 35682:return xu;case 35679:case 36299:case 36307:return Au;case 35680:case 36300:case 36308:case 36293:return Tu;case 36289:case 36303:case 36311:case 36292:return Mu}}class Bu{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=su(t.type)}}class wu{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Su(t.type)}}class Cu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const i=this.seq;for(let n=0,s=i.length;n!==s;++n){const o=i[n];o.setValue(e,t[o.id],a)}}}const wn=/(\w+)(\])?(\[|\.)?/g;function Ho(r,e){r.seq.push(e),r.map[e.id]=e}function Iu(r,e,t){const a=r.name,i=a.length;for(wn.lastIndex=0;;){const n=wn.exec(a),s=wn.lastIndex;let o=n[1];const c=n[2]==="]",h=n[3];if(c&&(o=o|0),h===void 0||h==="["&&s+2===i){Ho(t,h===void 0?new Bu(o,r,e):new wu(o,r,e));break}else{let l=t.map[o];l===void 0&&(l=new Cu(o),Ho(t,l)),t=l}}}class Ii{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<a;++i){const n=e.getActiveUniform(t,i),s=e.getUniformLocation(t,n.name);Iu(n,s,this)}}setValue(e,t,a,i){const n=this.map[t];n!==void 0&&n.setValue(e,a,i)}setOptional(e,t,a){const i=t[a];i!==void 0&&this.setValue(e,a,i)}static upload(e,t,a,i){for(let n=0,s=t.length;n!==s;++n){const o=t[n],c=a[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const a=[];for(let i=0,n=e.length;i!==n;++i){const s=e[i];s.id in t&&a.push(s)}return a}}function Go(r,e,t){const a=r.createShader(e);return r.shaderSource(a,t),r.compileShader(a),a}const Du=37297;let Pu=0;function Ru(r,e){const t=r.split(`
`),a=[],i=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let s=i;s<n;s++){const o=s+1;a.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return a.join(`
`)}function Lu(r){const e=ze.getPrimaries(ze.workingColorSpace),t=ze.getPrimaries(r);let a;switch(e===t?a="":e===Li&&t===Ri?a="LinearDisplayP3ToLinearSRGB":e===Ri&&t===Li&&(a="LinearSRGBToLinearDisplayP3"),r){case va:case Hi:return[a,"LinearTransferOETF"];case zt:case Ls:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[a,"LinearTransferOETF"]}}function Vo(r,e,t){const a=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(a&&i==="")return"";const n=/ERROR: 0:(\d+)/.exec(i);if(n){const s=parseInt(n[1]);return t.toUpperCase()+`

`+i+`

`+Ru(r.getShaderSource(e),s)}else return i}function ku(r,e){const t=Lu(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Uu(r,e){let t;switch(e){case Uh:t="Linear";break;case Nh:t="Reinhard";break;case Fh:t="Cineon";break;case Oh:t="ACESFilmic";break;case Zh:t="AgX";break;case zh:t="Neutral";break;case Wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _i=new C;function Nu(){ze.getLuminanceCoefficients(_i);const r=_i.x.toFixed(4),e=_i.y.toFixed(4),t=_i.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fu(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Ou(r){const e=[];for(const t in r){const a=r[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function Wu(r,e){const t={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<a;i++){const n=r.getActiveAttrib(e,i),s=n.name;let o=1;n.type===r.FLOAT_MAT2&&(o=2),n.type===r.FLOAT_MAT3&&(o=3),n.type===r.FLOAT_MAT4&&(o=4),t[s]={type:n.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function Ur(r){return r!==""}function qo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zu=/^[ \t]*#include +<([\w\d./]+)>/gm;function bs(r){return r.replace(Zu,Xu)}const zu=new Map;function Xu(r,e){let t=Ie[e];if(t===void 0){const a=zu.get(e);if(a!==void 0)t=Ie[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return bs(t)}const Hu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yo(r){return r.replace(Hu,Gu)}function Gu(r,e,t,a){let i="";for(let n=parseInt(e);n<parseInt(t);n++)i+=a.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return i}function Ko(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vu(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ta&&(e="SHADOWMAP_TYPE_VSM"),e}function qu(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fr:case gr:e="ENVMAP_TYPE_CUBE";break;case Xi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ju(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function Yu(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vc:e="ENVMAP_BLENDING_MULTIPLY";break;case Lh:e="ENVMAP_BLENDING_MIX";break;case kh:e="ENVMAP_BLENDING_ADD";break}return e}function Ku(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:a,maxMip:t}}function $u(r,e,t,a){const i=r.getContext(),n=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Vu(t),h=qu(t),l=ju(t),u=Yu(t),m=Ku(t),f=Fu(t),E=Ou(n),y=i.createProgram();let d,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ur).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(d=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fa?"#define TONE_MAPPING":"",t.toneMapping!==fa?Ie.tonemapping_pars_fragment:"",t.toneMapping!==fa?Uu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,ku("linearToOutputTexel",t.outputColorSpace),Nu(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),s=bs(s),s=qo(s,t),s=jo(s,t),o=bs(o),o=qo(o,t),o=jo(o,t),s=Yo(s),o=Yo(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=A+d+s,T=A+p+o,L=Go(i,i.VERTEX_SHADER,x),B=Go(i,i.FRAGMENT_SHADER,T);i.attachShader(y,L),i.attachShader(y,B),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function S(b){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(y).trim(),O=i.getShaderInfoLog(L).trim(),X=i.getShaderInfoLog(B).trim();let $=!0,Z=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,y,L,B);else{const Y=Vo(i,L,"vertex"),z=Vo(i,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+Y+`
`+z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||X==="")&&(Z=!1);Z&&(b.diagnostics={runnable:$,programLog:F,vertexShader:{log:O,prefix:d},fragmentShader:{log:X,prefix:p}})}i.deleteShader(L),i.deleteShader(B),R=new Ii(i,y),V=Wu(i,y)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let V;this.getAttributes=function(){return V===void 0&&S(this),V};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=i.getProgramParameter(y,Du)),g},this.destroy=function(){a.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pu++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=B,this}let Ju=0;class Qu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,i=this._getShaderStage(t),n=this._getShaderStage(a),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new ef(e),t.set(e,a)),a}}class ef{constructor(e){this.id=Ju++,this.code=e,this.usedTimes=0}}function tf(r,e,t,a,i,n,s){const o=new Us,c=new Qu,h=new Set,l=[],u=i.logarithmicDepthBuffer,m=i.reverseDepthBuffer,f=i.vertexTextures;let E=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return h.add(g),g===0?"uv":`uv${g}`}function p(g,b,F,O,X){const $=O.fog,Z=X.geometry,Y=g.isMeshStandardMaterial?O.environment:null,z=(g.isMeshStandardMaterial?t:e).get(g.envMap||Y),te=z&&z.mapping===Xi?z.image.height:null,he=y[g.type];g.precision!==null&&(E=i.getMaxPrecision(g.precision),E!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",E,"instead."));const _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ue=_e!==void 0?_e.length:0;let We=0;Z.morphAttributes.position!==void 0&&(We=1),Z.morphAttributes.normal!==void 0&&(We=2),Z.morphAttributes.color!==void 0&&(We=3);let H,Q,me,ce;if(he){const bt=Xt[he];H=bt.vertexShader,Q=bt.fragmentShader}else H=g.vertexShader,Q=g.fragmentShader,c.update(g),me=c.getVertexShaderID(g),ce=c.getFragmentShaderID(g);const we=r.getRenderTarget(),xe=X.isInstancedMesh===!0,Ne=X.isBatchedMesh===!0,He=!!g.map,Fe=!!g.matcap,w=!!z,Mt=!!g.aoMap,Re=!!g.lightMap,Oe=!!g.bumpMap,Te=!!g.normalMap,Ke=!!g.displacementMap,Be=!!g.emissiveMap,M=!!g.metalnessMap,_=!!g.roughnessMap,k=g.anisotropy>0,q=g.clearcoat>0,K=g.dispersion>0,G=g.iridescence>0,ge=g.sheen>0,ie=g.transmission>0,de=k&&!!g.anisotropyMap,Le=q&&!!g.clearcoatMap,ee=q&&!!g.clearcoatNormalMap,ue=q&&!!g.clearcoatRoughnessMap,Me=G&&!!g.iridescenceMap,Se=G&&!!g.iridescenceThicknessMap,le=ge&&!!g.sheenColorMap,ke=ge&&!!g.sheenRoughnessMap,Ce=!!g.specularMap,qe=!!g.specularColorMap,I=!!g.specularIntensityMap,se=ie&&!!g.transmissionMap,W=ie&&!!g.thicknessMap,j=!!g.gradientMap,ne=!!g.alphaMap,re=g.alphaTest>0,je=!!g.alphaHash,at=!!g.extensions;let vt=fa;g.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(vt=r.toneMapping);const Ze={shaderID:he,shaderType:g.type,shaderName:g.name,vertexShader:H,fragmentShader:Q,defines:g.defines,customVertexShaderID:me,customFragmentShaderID:ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:E,batching:Ne,batchingColor:Ne&&X._colorsTexture!==null,instancing:xe,instancingColor:xe&&X.instanceColor!==null,instancingMorph:xe&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:we===null?r.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:va,alphaToCoverage:!!g.alphaToCoverage,map:He,matcap:Fe,envMap:w,envMapMode:w&&z.mapping,envMapCubeUVHeight:te,aoMap:Mt,lightMap:Re,bumpMap:Oe,normalMap:Te,displacementMap:f&&Ke,emissiveMap:Be,normalMapObjectSpace:Te&&g.normalMapType===Vh,normalMapTangentSpace:Te&&g.normalMapType===Dc,metalnessMap:M,roughnessMap:_,anisotropy:k,anisotropyMap:de,clearcoat:q,clearcoatMap:Le,clearcoatNormalMap:ee,clearcoatRoughnessMap:ue,dispersion:K,iridescence:G,iridescenceMap:Me,iridescenceThicknessMap:Se,sheen:ge,sheenColorMap:le,sheenRoughnessMap:ke,specularMap:Ce,specularColorMap:qe,specularIntensityMap:I,transmission:ie,transmissionMap:se,thicknessMap:W,gradientMap:j,opaque:g.transparent===!1&&g.blending===lr&&g.alphaToCoverage===!1,alphaMap:ne,alphaTest:re,alphaHash:je,combine:g.combine,mapUv:He&&d(g.map.channel),aoMapUv:Mt&&d(g.aoMap.channel),lightMapUv:Re&&d(g.lightMap.channel),bumpMapUv:Oe&&d(g.bumpMap.channel),normalMapUv:Te&&d(g.normalMap.channel),displacementMapUv:Ke&&d(g.displacementMap.channel),emissiveMapUv:Be&&d(g.emissiveMap.channel),metalnessMapUv:M&&d(g.metalnessMap.channel),roughnessMapUv:_&&d(g.roughnessMap.channel),anisotropyMapUv:de&&d(g.anisotropyMap.channel),clearcoatMapUv:Le&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:ee&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&d(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:le&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:ke&&d(g.sheenRoughnessMap.channel),specularMapUv:Ce&&d(g.specularMap.channel),specularColorMapUv:qe&&d(g.specularColorMap.channel),specularIntensityMapUv:I&&d(g.specularIntensityMap.channel),transmissionMapUv:se&&d(g.transmissionMap.channel),thicknessMapUv:W&&d(g.thicknessMap.channel),alphaMapUv:ne&&d(g.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Te||k),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Z.attributes.uv&&(He||ne),fog:!!$,useFog:g.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:m,skinning:X.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:We,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:vt,decodeVideoTexture:He&&g.map.isVideoTexture===!0&&ze.getTransfer(g.map.colorSpace)===$e,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ht,flipSided:g.side===At,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:at&&g.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&g.extensions.multiDraw===!0||Ne)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ze.vertexUv1s=h.has(1),Ze.vertexUv2s=h.has(2),Ze.vertexUv3s=h.has(3),h.clear(),Ze}function A(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const F in g.defines)b.push(F),b.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(x(b,g),T(b,g),b.push(r.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function x(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function T(g,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),g.push(o.mask)}function L(g){const b=y[g.type];let F;if(b){const O=Xt[b];F=Fl.clone(O.uniforms)}else F=g.uniforms;return F}function B(g,b){let F;for(let O=0,X=l.length;O<X;O++){const $=l[O];if($.cacheKey===b){F=$,++F.usedTimes;break}}return F===void 0&&(F=new $u(r,b,g,n),l.push(F)),F}function S(g){if(--g.usedTimes===0){const b=l.indexOf(g);l[b]=l[l.length-1],l.pop(),g.destroy()}}function R(g){c.remove(g)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:A,getUniforms:L,acquireProgram:B,releaseProgram:S,releaseShaderCache:R,programs:l,dispose:V}}function af(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function a(s){r.delete(s)}function i(s,o,c){r.get(s)[o]=c}function n(){r=new WeakMap}return{has:e,get:t,remove:a,update:i,dispose:n}}function rf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $o(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jo(){const r=[];let e=0;const t=[],a=[],i=[];function n(){e=0,t.length=0,a.length=0,i.length=0}function s(u,m,f,E,y,d){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:m,material:f,groupOrder:E,renderOrder:u.renderOrder,z:y,group:d},r[e]=p):(p.id=u.id,p.object=u,p.geometry=m,p.material=f,p.groupOrder=E,p.renderOrder=u.renderOrder,p.z=y,p.group=d),e++,p}function o(u,m,f,E,y,d){const p=s(u,m,f,E,y,d);f.transmission>0?a.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,m,f,E,y,d){const p=s(u,m,f,E,y,d);f.transmission>0?a.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function h(u,m){t.length>1&&t.sort(u||rf),a.length>1&&a.sort(m||$o),i.length>1&&i.sort(m||$o)}function l(){for(let u=e,m=r.length;u<m;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:a,transparent:i,init:n,push:o,unshift:c,finish:l,sort:h}}function nf(){let r=new WeakMap;function e(a,i){const n=r.get(a);let s;return n===void 0?(s=new Jo,r.set(a,[s])):i>=n.length?(s=new Jo,n.push(s)):s=n[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function sf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new be};break;case"SpotLight":t={position:new C,direction:new C,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function of(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let cf=0;function hf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lf(r){const e=new sf,t=of(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new C);const i=new C,n=new Xe,s=new Xe;function o(h){let l=0,u=0,m=0;for(let V=0;V<9;V++)a.probe[V].set(0,0,0);let f=0,E=0,y=0,d=0,p=0,A=0,x=0,T=0,L=0,B=0,S=0;h.sort(hf);for(let V=0,g=h.length;V<g;V++){const b=h[V],F=b.color,O=b.intensity,X=b.distance,$=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)l+=F.r*O,u+=F.g*O,m+=F.b*O;else if(b.isLightProbe){for(let Z=0;Z<9;Z++)a.probe[Z].addScaledVector(b.sh.coefficients[Z],O);S++}else if(b.isDirectionalLight){const Z=e.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Y=b.shadow,z=t.get(b);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,a.directionalShadow[f]=z,a.directionalShadowMap[f]=$,a.directionalShadowMatrix[f]=b.shadow.matrix,A++}a.directional[f]=Z,f++}else if(b.isSpotLight){const Z=e.get(b);Z.position.setFromMatrixPosition(b.matrixWorld),Z.color.copy(F).multiplyScalar(O),Z.distance=X,Z.coneCos=Math.cos(b.angle),Z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Z.decay=b.decay,a.spot[y]=Z;const Y=b.shadow;if(b.map&&(a.spotLightMap[L]=b.map,L++,Y.updateMatrices(b),b.castShadow&&B++),a.spotLightMatrix[y]=Y.matrix,b.castShadow){const z=t.get(b);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,a.spotShadow[y]=z,a.spotShadowMap[y]=$,T++}y++}else if(b.isRectAreaLight){const Z=e.get(b);Z.color.copy(F).multiplyScalar(O),Z.halfWidth.set(b.width*.5,0,0),Z.halfHeight.set(0,b.height*.5,0),a.rectArea[d]=Z,d++}else if(b.isPointLight){const Z=e.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),Z.distance=b.distance,Z.decay=b.decay,b.castShadow){const Y=b.shadow,z=t.get(b);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,a.pointShadow[E]=z,a.pointShadowMap[E]=$,a.pointShadowMatrix[E]=b.shadow.matrix,x++}a.point[E]=Z,E++}else if(b.isHemisphereLight){const Z=e.get(b);Z.skyColor.copy(b.color).multiplyScalar(O),Z.groundColor.copy(b.groundColor).multiplyScalar(O),a.hemi[p]=Z,p++}}d>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ae.LTC_FLOAT_1,a.rectAreaLTC2=ae.LTC_FLOAT_2):(a.rectAreaLTC1=ae.LTC_HALF_1,a.rectAreaLTC2=ae.LTC_HALF_2)),a.ambient[0]=l,a.ambient[1]=u,a.ambient[2]=m;const R=a.hash;(R.directionalLength!==f||R.pointLength!==E||R.spotLength!==y||R.rectAreaLength!==d||R.hemiLength!==p||R.numDirectionalShadows!==A||R.numPointShadows!==x||R.numSpotShadows!==T||R.numSpotMaps!==L||R.numLightProbes!==S)&&(a.directional.length=f,a.spot.length=y,a.rectArea.length=d,a.point.length=E,a.hemi.length=p,a.directionalShadow.length=A,a.directionalShadowMap.length=A,a.pointShadow.length=x,a.pointShadowMap.length=x,a.spotShadow.length=T,a.spotShadowMap.length=T,a.directionalShadowMatrix.length=A,a.pointShadowMatrix.length=x,a.spotLightMatrix.length=T+L-B,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=S,R.directionalLength=f,R.pointLength=E,R.spotLength=y,R.rectAreaLength=d,R.hemiLength=p,R.numDirectionalShadows=A,R.numPointShadows=x,R.numSpotShadows=T,R.numSpotMaps=L,R.numLightProbes=S,a.version=cf++)}function c(h,l){let u=0,m=0,f=0,E=0,y=0;const d=l.matrixWorldInverse;for(let p=0,A=h.length;p<A;p++){const x=h[p];if(x.isDirectionalLight){const T=a.directional[u];T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(d),u++}else if(x.isSpotLight){const T=a.spot[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(d),f++}else if(x.isRectAreaLight){const T=a.rectArea[E];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),s.identity(),n.copy(x.matrixWorld),n.premultiply(d),s.extractRotation(n),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),E++}else if(x.isPointLight){const T=a.point[m];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(d),m++}else if(x.isHemisphereLight){const T=a.hemi[y];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(d),y++}}}return{setup:o,setupView:c,state:a}}function Qo(r){const e=new lf(r),t=[],a=[];function i(l){h.camera=l,t.length=0,a.length=0}function n(l){t.push(l)}function s(l){a.push(l)}function o(){e.setup(t)}function c(l){e.setupView(t,l)}const h={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:c,pushLight:n,pushShadow:s}}function df(r){let e=new WeakMap;function t(i,n=0){const s=e.get(i);let o;return s===void 0?(o=new Qo(r),e.set(i,[o])):n>=s.length?(o=new Qo(r),s.push(o)):o=s[n],o}function a(){e=new WeakMap}return{get:t,dispose:a}}class pf extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mf extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ff=`uniform sampler2D shadow_pass;
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
}`;function gf(r,e,t){let a=new Fs;const i=new Pe,n=new Pe,s=new Ve,o=new pf({depthPacking:Gh}),c=new mf,h={},l=t.maxTextureSize,u={[Ea]:At,[At]:Ea,[Ht]:Ht},m=new _a({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:uf,fragmentShader:ff}),f=m.clone();f.defines.HORIZONTAL_PASS=1;const E=new ut;E.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Lt(E,m),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let p=this.type;this.render=function(B,S,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||B.length===0)return;const V=r.getRenderTarget(),g=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),F=r.state;F.setBlending(ua),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==ta&&this.type===ta,X=p===ta&&this.type!==ta;for(let $=0,Z=B.length;$<Z;$++){const Y=B[$],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const te=z.getFrameExtents();if(i.multiply(te),n.copy(z.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(n.x=Math.floor(l/te.x),i.x=n.x*te.x,z.mapSize.x=n.x),i.y>l&&(n.y=Math.floor(l/te.y),i.y=n.y*te.y,z.mapSize.y=n.y)),z.map===null||O===!0||X===!0){const _e=this.type!==ta?{minFilter:xt,magFilter:xt}:{};z.map!==null&&z.map.dispose(),z.map=new Za(i.x,i.y,_e),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const he=z.getViewportCount();for(let _e=0;_e<he;_e++){const Ue=z.getViewport(_e);s.set(n.x*Ue.x,n.y*Ue.y,n.x*Ue.z,n.y*Ue.w),F.viewport(s),z.updateMatrices(Y,_e),a=z.getFrustum(),T(S,R,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===ta&&A(z,R),z.needsUpdate=!1}p=this.type,d.needsUpdate=!1,r.setRenderTarget(V,g,b)};function A(B,S){const R=e.update(y);m.defines.VSM_SAMPLES!==B.blurSamples&&(m.defines.VSM_SAMPLES=B.blurSamples,f.defines.VSM_SAMPLES=B.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Za(i.x,i.y)),m.uniforms.shadow_pass.value=B.map.texture,m.uniforms.resolution.value=B.mapSize,m.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(S,null,R,m,y,null),f.uniforms.shadow_pass.value=B.mapPass.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(S,null,R,f,y,null)}function x(B,S,R,V){let g=null;const b=R.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(b!==void 0)g=b;else if(g=R.isPointLight===!0?c:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const F=g.uuid,O=S.uuid;let X=h[F];X===void 0&&(X={},h[F]=X);let $=X[O];$===void 0&&($=g.clone(),X[O]=$,S.addEventListener("dispose",L)),g=$}if(g.visible=S.visible,g.wireframe=S.wireframe,V===ta?g.side=S.shadowSide!==null?S.shadowSide:S.side:g.side=S.shadowSide!==null?S.shadowSide:u[S.side],g.alphaMap=S.alphaMap,g.alphaTest=S.alphaTest,g.map=S.map,g.clipShadows=S.clipShadows,g.clippingPlanes=S.clippingPlanes,g.clipIntersection=S.clipIntersection,g.displacementMap=S.displacementMap,g.displacementScale=S.displacementScale,g.displacementBias=S.displacementBias,g.wireframeLinewidth=S.wireframeLinewidth,g.linewidth=S.linewidth,R.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const F=r.properties.get(g);F.light=R}return g}function T(B,S,R,V,g){if(B.visible===!1)return;if(B.layers.test(S.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&g===ta)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,B.matrixWorld);const F=e.update(B),O=B.material;if(Array.isArray(O)){const X=F.groups;for(let $=0,Z=X.length;$<Z;$++){const Y=X[$],z=O[Y.materialIndex];if(z&&z.visible){const te=x(B,z,V,g);B.onBeforeShadow(r,B,S,R,F,te,Y),r.renderBufferDirect(R,null,F,te,B,Y),B.onAfterShadow(r,B,S,R,F,te,Y)}}}else if(O.visible){const X=x(B,O,V,g);B.onBeforeShadow(r,B,S,R,F,X,null),r.renderBufferDirect(R,null,F,X,B,null),B.onAfterShadow(r,B,S,R,F,X,null)}}const b=B.children;for(let F=0,O=b.length;F<O;F++)T(b[F],S,R,V,g)}function L(B){B.target.removeEventListener("dispose",L);for(const S in h){const R=h[S],V=B.target.uuid;V in R&&(R[V].dispose(),delete R[V])}}}const Ef={[Fn]:On,[Wn]:Xn,[Zn]:Hn,[ur]:zn,[On]:Fn,[Xn]:Wn,[Hn]:Zn,[zn]:ur};function _f(r){function e(){let I=!1;const se=new Ve;let W=null;const j=new Ve(0,0,0,0);return{setMask:function(ne){W!==ne&&!I&&(r.colorMask(ne,ne,ne,ne),W=ne)},setLocked:function(ne){I=ne},setClear:function(ne,re,je,at,vt){vt===!0&&(ne*=at,re*=at,je*=at),se.set(ne,re,je,at),j.equals(se)===!1&&(r.clearColor(ne,re,je,at),j.copy(se))},reset:function(){I=!1,W=null,j.set(-1,0,0,0)}}}function t(){let I=!1,se=!1,W=null,j=null,ne=null;return{setReversed:function(re){se=re},setTest:function(re){re?me(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(re){W!==re&&!I&&(r.depthMask(re),W=re)},setFunc:function(re){if(se&&(re=Ef[re]),j!==re){switch(re){case Fn:r.depthFunc(r.NEVER);break;case On:r.depthFunc(r.ALWAYS);break;case Wn:r.depthFunc(r.LESS);break;case ur:r.depthFunc(r.LEQUAL);break;case Zn:r.depthFunc(r.EQUAL);break;case zn:r.depthFunc(r.GEQUAL);break;case Xn:r.depthFunc(r.GREATER);break;case Hn:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=re}},setLocked:function(re){I=re},setClear:function(re){ne!==re&&(r.clearDepth(re),ne=re)},reset:function(){I=!1,W=null,j=null,ne=null}}}function a(){let I=!1,se=null,W=null,j=null,ne=null,re=null,je=null,at=null,vt=null;return{setTest:function(Ze){I||(Ze?me(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(Ze){se!==Ze&&!I&&(r.stencilMask(Ze),se=Ze)},setFunc:function(Ze,bt,Yt){(W!==Ze||j!==bt||ne!==Yt)&&(r.stencilFunc(Ze,bt,Yt),W=Ze,j=bt,ne=Yt)},setOp:function(Ze,bt,Yt){(re!==Ze||je!==bt||at!==Yt)&&(r.stencilOp(Ze,bt,Yt),re=Ze,je=bt,at=Yt)},setLocked:function(Ze){I=Ze},setClear:function(Ze){vt!==Ze&&(r.clearStencil(Ze),vt=Ze)},reset:function(){I=!1,se=null,W=null,j=null,ne=null,re=null,je=null,at=null,vt=null}}}const i=new e,n=new t,s=new a,o=new WeakMap,c=new WeakMap;let h={},l={},u=new WeakMap,m=[],f=null,E=!1,y=null,d=null,p=null,A=null,x=null,T=null,L=null,B=new be(0,0,0),S=0,R=!1,V=null,g=null,b=null,F=null,O=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=Z>=2);let z=null,te={};const he=r.getParameter(r.SCISSOR_BOX),_e=r.getParameter(r.VIEWPORT),Ue=new Ve().fromArray(he),We=new Ve().fromArray(_e);function H(I,se,W,j){const ne=new Uint8Array(4),re=r.createTexture();r.bindTexture(I,re),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<W;je++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(se+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return re}const Q={};Q[r.TEXTURE_2D]=H(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=H(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=H(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=H(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),n.setClear(1),s.setClear(0),me(r.DEPTH_TEST),n.setFunc(ur),Re(!1),Oe(so),me(r.CULL_FACE),w(ua);function me(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function ce(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function we(I,se){return l[I]!==se?(r.bindFramebuffer(I,se),l[I]=se,I===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=se),I===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=se),!0):!1}function xe(I,se){let W=m,j=!1;if(I){W=u.get(se),W===void 0&&(W=[],u.set(se,W));const ne=I.textures;if(W.length!==ne.length||W[0]!==r.COLOR_ATTACHMENT0){for(let re=0,je=ne.length;re<je;re++)W[re]=r.COLOR_ATTACHMENT0+re;W.length=ne.length,j=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,j=!0);j&&r.drawBuffers(W)}function Ne(I){return f!==I?(r.useProgram(I),f=I,!0):!1}const He={[Da]:r.FUNC_ADD,[Eh]:r.FUNC_SUBTRACT,[_h]:r.FUNC_REVERSE_SUBTRACT};He[yh]=r.MIN,He[vh]=r.MAX;const Fe={[bh]:r.ZERO,[xh]:r.ONE,[Ah]:r.SRC_COLOR,[Un]:r.SRC_ALPHA,[Ch]:r.SRC_ALPHA_SATURATE,[Bh]:r.DST_COLOR,[Mh]:r.DST_ALPHA,[Th]:r.ONE_MINUS_SRC_COLOR,[Nn]:r.ONE_MINUS_SRC_ALPHA,[wh]:r.ONE_MINUS_DST_COLOR,[Sh]:r.ONE_MINUS_DST_ALPHA,[Ih]:r.CONSTANT_COLOR,[Dh]:r.ONE_MINUS_CONSTANT_COLOR,[Ph]:r.CONSTANT_ALPHA,[Rh]:r.ONE_MINUS_CONSTANT_ALPHA};function w(I,se,W,j,ne,re,je,at,vt,Ze){if(I===ua){E===!0&&(ce(r.BLEND),E=!1);return}if(E===!1&&(me(r.BLEND),E=!0),I!==gh){if(I!==y||Ze!==R){if((d!==Da||x!==Da)&&(r.blendEquation(r.FUNC_ADD),d=Da,x=Da),Ze)switch(I){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kn:r.blendFunc(r.ONE,r.ONE);break;case oo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case co:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case oo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case co:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,A=null,T=null,L=null,B.set(0,0,0),S=0,y=I,R=Ze}return}ne=ne||se,re=re||W,je=je||j,(se!==d||ne!==x)&&(r.blendEquationSeparate(He[se],He[ne]),d=se,x=ne),(W!==p||j!==A||re!==T||je!==L)&&(r.blendFuncSeparate(Fe[W],Fe[j],Fe[re],Fe[je]),p=W,A=j,T=re,L=je),(at.equals(B)===!1||vt!==S)&&(r.blendColor(at.r,at.g,at.b,vt),B.copy(at),S=vt),y=I,R=!1}function Mt(I,se){I.side===Ht?ce(r.CULL_FACE):me(r.CULL_FACE);let W=I.side===At;se&&(W=!W),Re(W),I.blending===lr&&I.transparent===!1?w(ua):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),n.setFunc(I.depthFunc),n.setTest(I.depthTest),n.setMask(I.depthWrite),i.setMask(I.colorWrite);const j=I.stencilWrite;s.setTest(j),j&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ke(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Re(I){V!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),V=I)}function Oe(I){I!==mh?(me(r.CULL_FACE),I!==g&&(I===so?r.cullFace(r.BACK):I===uh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),g=I}function Te(I){I!==b&&($&&r.lineWidth(I),b=I)}function Ke(I,se,W){I?(me(r.POLYGON_OFFSET_FILL),(F!==se||O!==W)&&(r.polygonOffset(se,W),F=se,O=W)):ce(r.POLYGON_OFFSET_FILL)}function Be(I){I?me(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)}function M(I){I===void 0&&(I=r.TEXTURE0+X-1),z!==I&&(r.activeTexture(I),z=I)}function _(I,se,W){W===void 0&&(z===null?W=r.TEXTURE0+X-1:W=z);let j=te[W];j===void 0&&(j={type:void 0,texture:void 0},te[W]=j),(j.type!==I||j.texture!==se)&&(z!==W&&(r.activeTexture(W),z=W),r.bindTexture(I,se||Q[I]),j.type=I,j.texture=se)}function k(){const I=te[z];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(I){Ue.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ue.copy(I))}function le(I){We.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),We.copy(I))}function ke(I,se){let W=c.get(se);W===void 0&&(W=new WeakMap,c.set(se,W));let j=W.get(I);j===void 0&&(j=r.getUniformBlockIndex(se,I.name),W.set(I,j))}function Ce(I,se){const W=c.get(se).get(I);o.get(se)!==W&&(r.uniformBlockBinding(se,W,I.__bindingPointIndex),o.set(se,W))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},z=null,te={},l={},u=new WeakMap,m=[],f=null,E=!1,y=null,d=null,p=null,A=null,x=null,T=null,L=null,B=new be(0,0,0),S=0,R=!1,V=null,g=null,b=null,F=null,O=null,Ue.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),i.reset(),n.reset(),s.reset()}return{buffers:{color:i,depth:n,stencil:s},enable:me,disable:ce,bindFramebuffer:we,drawBuffers:xe,useProgram:Ne,setBlending:w,setMaterial:Mt,setFlipSided:Re,setCullFace:Oe,setLineWidth:Te,setPolygonOffset:Ke,setScissorTest:Be,activeTexture:M,bindTexture:_,unbindTexture:k,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:ue,texImage3D:Me,updateUBOMapping:ke,uniformBlockBinding:Ce,texStorage2D:Le,texStorage3D:ee,texSubImage2D:G,texSubImage3D:ge,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:Se,viewport:le,reset:qe}}function ec(r,e,t,a){const i=yf(a);switch(t){case Mc:return r*e;case Bc:return r*e;case wc:return r*e*2;case Is:return r*e/i.components*i.byteLength;case Ds:return r*e/i.components*i.byteLength;case Cc:return r*e*2/i.components*i.byteLength;case Ps:return r*e*2/i.components*i.byteLength;case Sc:return r*e*3/i.components*i.byteLength;case Zt:return r*e*4/i.components*i.byteLength;case Rs:return r*e*4/i.components*i.byteLength;case Ti:case Mi:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Si:case Bi:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kn:case Jn:return Math.max(r,16)*Math.max(e,8)/4;case Yn:case $n:return Math.max(r,8)*Math.max(e,8)/2;case Qn:case es:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ts:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case as:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rs:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case is:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ns:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ss:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case os:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case cs:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case hs:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ls:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ds:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ps:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ms:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case us:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fs:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wi:case gs:case Es:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ic:case _s:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ys:case vs:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yf(r){switch(r){case ia:case xc:return{byteLength:1,components:1};case Zr:case Ac:case Gr:return{byteLength:2,components:1};case ws:case Cs:return{byteLength:2,components:4};case Wa:case Bs:case qt:return{byteLength:4,components:1};case Tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function vf(r,e,t,a,i,n,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pe,l=new WeakMap;let u;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(M,_){return f?new OffscreenCanvas(M,_):Ui("canvas")}function y(M,_,k){let q=1;const K=Be(M);if((K.width>k||K.height>k)&&(q=k/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const G=Math.floor(q*K.width),ge=Math.floor(q*K.height);u===void 0&&(u=E(G,ge));const ie=_?E(G,ge):u;return ie.width=G,ie.height=ge,ie.getContext("2d").drawImage(M,0,0,G,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+ge+")."),ie}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function d(M){return M.generateMipmaps&&M.minFilter!==xt&&M.minFilter!==Ot}function p(M){r.generateMipmap(M)}function A(M,_,k,q,K=!1){if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=_;if(_===r.RED&&(k===r.FLOAT&&(G=r.R32F),k===r.HALF_FLOAT&&(G=r.R16F),k===r.UNSIGNED_BYTE&&(G=r.R8)),_===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.R8UI),k===r.UNSIGNED_SHORT&&(G=r.R16UI),k===r.UNSIGNED_INT&&(G=r.R32UI),k===r.BYTE&&(G=r.R8I),k===r.SHORT&&(G=r.R16I),k===r.INT&&(G=r.R32I)),_===r.RG&&(k===r.FLOAT&&(G=r.RG32F),k===r.HALF_FLOAT&&(G=r.RG16F),k===r.UNSIGNED_BYTE&&(G=r.RG8)),_===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RG8UI),k===r.UNSIGNED_SHORT&&(G=r.RG16UI),k===r.UNSIGNED_INT&&(G=r.RG32UI),k===r.BYTE&&(G=r.RG8I),k===r.SHORT&&(G=r.RG16I),k===r.INT&&(G=r.RG32I)),_===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RGB8UI),k===r.UNSIGNED_SHORT&&(G=r.RGB16UI),k===r.UNSIGNED_INT&&(G=r.RGB32UI),k===r.BYTE&&(G=r.RGB8I),k===r.SHORT&&(G=r.RGB16I),k===r.INT&&(G=r.RGB32I)),_===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),k===r.UNSIGNED_INT&&(G=r.RGBA32UI),k===r.BYTE&&(G=r.RGBA8I),k===r.SHORT&&(G=r.RGBA16I),k===r.INT&&(G=r.RGBA32I)),_===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),_===r.RGBA){const ge=K?Pi:ze.getTransfer(q);k===r.FLOAT&&(G=r.RGBA32F),k===r.HALF_FLOAT&&(G=r.RGBA16F),k===r.UNSIGNED_BYTE&&(G=ge===$e?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(M,_){let k;return M?_===null||_===Wa||_===Er?k=r.DEPTH24_STENCIL8:_===qt?k=r.DEPTH32F_STENCIL8:_===Zr&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Wa||_===Er?k=r.DEPTH_COMPONENT24:_===qt?k=r.DEPTH_COMPONENT32F:_===Zr&&(k=r.DEPTH_COMPONENT16),k}function T(M,_){return d(M)===!0||M.isFramebufferTexture&&M.minFilter!==xt&&M.minFilter!==Ot?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function L(M){const _=M.target;_.removeEventListener("dispose",L),S(_),_.isVideoTexture&&l.delete(_)}function B(M){const _=M.target;_.removeEventListener("dispose",B),V(_)}function S(M){const _=a.get(M);if(_.__webglInit===void 0)return;const k=M.source,q=m.get(k);if(q){const K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(M),Object.keys(q).length===0&&m.delete(k)}a.remove(M)}function R(M){const _=a.get(M);r.deleteTexture(_.__webglTexture);const k=M.source,q=m.get(k);delete q[_.__cacheKey],s.memory.textures--}function V(M){const _=a.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)r.deleteFramebuffer(_.__webglFramebuffer[q][K]);else r.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)r.deleteFramebuffer(_.__webglFramebuffer[q]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=M.textures;for(let q=0,K=k.length;q<K;q++){const G=a.get(k[q]);G.__webglTexture&&(r.deleteTexture(G.__webglTexture),s.memory.textures--),a.remove(k[q])}a.remove(M)}let g=0;function b(){g=0}function F(){const M=g;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),g+=1,M}function O(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function X(M,_){const k=a.get(M);if(M.isVideoTexture&&Te(M),M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){const q=M.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(k,M,_);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+_)}function $(M,_){const k=a.get(M);if(M.version>0&&k.__version!==M.version){We(k,M,_);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+_)}function Z(M,_){const k=a.get(M);if(M.version>0&&k.__version!==M.version){We(k,M,_);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+_)}function Y(M,_){const k=a.get(M);if(M.version>0&&k.__version!==M.version){H(k,M,_);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+_)}const z={[qn]:r.REPEAT,[La]:r.CLAMP_TO_EDGE,[jn]:r.MIRRORED_REPEAT},te={[xt]:r.NEAREST,[Xh]:r.NEAREST_MIPMAP_NEAREST,[Jr]:r.NEAREST_MIPMAP_LINEAR,[Ot]:r.LINEAR,[en]:r.LINEAR_MIPMAP_NEAREST,[ka]:r.LINEAR_MIPMAP_LINEAR},he={[qh]:r.NEVER,[Qh]:r.ALWAYS,[jh]:r.LESS,[Pc]:r.LEQUAL,[Yh]:r.EQUAL,[Jh]:r.GEQUAL,[Kh]:r.GREATER,[$h]:r.NOTEQUAL};function _e(M,_){if(_.type===qt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ot||_.magFilter===en||_.magFilter===Jr||_.magFilter===ka||_.minFilter===Ot||_.minFilter===en||_.minFilter===Jr||_.minFilter===ka)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(M,r.TEXTURE_WRAP_S,z[_.wrapS]),r.texParameteri(M,r.TEXTURE_WRAP_T,z[_.wrapT]),(M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY)&&r.texParameteri(M,r.TEXTURE_WRAP_R,z[_.wrapR]),r.texParameteri(M,r.TEXTURE_MAG_FILTER,te[_.magFilter]),r.texParameteri(M,r.TEXTURE_MIN_FILTER,te[_.minFilter]),_.compareFunction&&(r.texParameteri(M,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(M,r.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===xt||_.minFilter!==Jr&&_.minFilter!==ka||_.type===qt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||a.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),a.get(_).__currentAnisotropy=_.anisotropy}}}function Ue(M,_){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",L));const q=_.source;let K=m.get(q);K===void 0&&(K={},m.set(q,K));const G=O(_);if(G!==M.__cacheKey){K[G]===void 0&&(K[G]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,k=!0),K[G].usedTimes++;const ge=K[M.__cacheKey];ge!==void 0&&(K[M.__cacheKey].usedTimes--,ge.usedTimes===0&&R(_)),M.__cacheKey=G,M.__webglTexture=K[G].texture}return k}function We(M,_,k){let q=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=r.TEXTURE_3D);const K=Ue(M,_),G=_.source;t.bindTexture(q,M.__webglTexture,r.TEXTURE0+k);const ge=a.get(G);if(G.version!==ge.__version||K===!0){t.activeTexture(r.TEXTURE0+k);const ie=ze.getPrimaries(ze.workingColorSpace),de=_.colorSpace===ma?null:ze.getPrimaries(_.colorSpace),Le=_.colorSpace===ma||ie===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ee=y(_.image,!1,i.maxTextureSize);ee=Ke(_,ee);const ue=n.convert(_.format,_.colorSpace),Me=n.convert(_.type);let Se=A(_.internalFormat,ue,Me,_.colorSpace,_.isVideoTexture);_e(q,_);let le;const ke=_.mipmaps,Ce=_.isVideoTexture!==!0,qe=ge.__version===void 0||K===!0,I=G.dataReady,se=T(_,ee);if(_.isDepthTexture)Se=x(_.format===_r,_.type),qe&&(Ce?t.texStorage2D(r.TEXTURE_2D,1,Se,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Se,ee.width,ee.height,0,ue,Me,null));else if(_.isDataTexture)if(ke.length>0){Ce&&qe&&t.texStorage2D(r.TEXTURE_2D,se,Se,ke[0].width,ke[0].height);for(let W=0,j=ke.length;W<j;W++)le=ke[W],Ce?I&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,le.width,le.height,ue,Me,le.data):t.texImage2D(r.TEXTURE_2D,W,Se,le.width,le.height,0,ue,Me,le.data);_.generateMipmaps=!1}else Ce?(qe&&t.texStorage2D(r.TEXTURE_2D,se,Se,ee.width,ee.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,ue,Me,ee.data)):t.texImage2D(r.TEXTURE_2D,0,Se,ee.width,ee.height,0,ue,Me,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ce&&qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,Se,ke[0].width,ke[0].height,ee.depth);for(let W=0,j=ke.length;W<j;W++)if(le=ke[W],_.format!==Zt)if(ue!==null)if(Ce){if(I)if(_.layerUpdates.size>0){const ne=ec(le.width,le.height,_.format,_.type);for(const re of _.layerUpdates){const je=le.data.subarray(re*ne/le.data.BYTES_PER_ELEMENT,(re+1)*ne/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,re,le.width,le.height,1,ue,je,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,le.width,le.height,ee.depth,ue,le.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Se,le.width,le.height,ee.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,le.width,le.height,ee.depth,ue,Me,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,Se,le.width,le.height,ee.depth,0,ue,Me,le.data)}else{Ce&&qe&&t.texStorage2D(r.TEXTURE_2D,se,Se,ke[0].width,ke[0].height);for(let W=0,j=ke.length;W<j;W++)le=ke[W],_.format!==Zt?ue!==null?Ce?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(r.TEXTURE_2D,W,Se,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?I&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,le.width,le.height,ue,Me,le.data):t.texImage2D(r.TEXTURE_2D,W,Se,le.width,le.height,0,ue,Me,le.data)}else if(_.isDataArrayTexture)if(Ce){if(qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,Se,ee.width,ee.height,ee.depth),I)if(_.layerUpdates.size>0){const W=ec(ee.width,ee.height,_.format,_.type);for(const j of _.layerUpdates){const ne=ee.data.subarray(j*W/ee.data.BYTES_PER_ELEMENT,(j+1)*W/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,ee.width,ee.height,1,ue,Me,ne)}_.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Me,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,ue,Me,ee.data);else if(_.isData3DTexture)Ce?(qe&&t.texStorage3D(r.TEXTURE_3D,se,Se,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Me,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,ue,Me,ee.data);else if(_.isFramebufferTexture){if(qe)if(Ce)t.texStorage2D(r.TEXTURE_2D,se,Se,ee.width,ee.height);else{let W=ee.width,j=ee.height;for(let ne=0;ne<se;ne++)t.texImage2D(r.TEXTURE_2D,ne,Se,W,j,0,ue,Me,null),W>>=1,j>>=1}}else if(ke.length>0){if(Ce&&qe){const W=Be(ke[0]);t.texStorage2D(r.TEXTURE_2D,se,Se,W.width,W.height)}for(let W=0,j=ke.length;W<j;W++)le=ke[W],Ce?I&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,ue,Me,le):t.texImage2D(r.TEXTURE_2D,W,Se,ue,Me,le);_.generateMipmaps=!1}else if(Ce){if(qe){const W=Be(ee);t.texStorage2D(r.TEXTURE_2D,se,Se,W.width,W.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Me,ee)}else t.texImage2D(r.TEXTURE_2D,0,Se,ue,Me,ee);d(_)&&p(q),ge.__version=G.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function H(M,_,k){if(_.image.length!==6)return;const q=Ue(M,_),K=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,M.__webglTexture,r.TEXTURE0+k);const G=a.get(K);if(K.version!==G.__version||q===!0){t.activeTexture(r.TEXTURE0+k);const ge=ze.getPrimaries(ze.workingColorSpace),ie=_.colorSpace===ma?null:ze.getPrimaries(_.colorSpace),de=_.colorSpace===ma||ge===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Le=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let j=0;j<6;j++)!Le&&!ee?ue[j]=y(_.image[j],!0,i.maxCubemapSize):ue[j]=ee?_.image[j].image:_.image[j],ue[j]=Ke(_,ue[j]);const Me=ue[0],Se=n.convert(_.format,_.colorSpace),le=n.convert(_.type),ke=A(_.internalFormat,Se,le,_.colorSpace),Ce=_.isVideoTexture!==!0,qe=G.__version===void 0||q===!0,I=K.dataReady;let se=T(_,Me);_e(r.TEXTURE_CUBE_MAP,_);let W;if(Le){Ce&&qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,se,ke,Me.width,Me.height);for(let j=0;j<6;j++){W=ue[j].mipmaps;for(let ne=0;ne<W.length;ne++){const re=W[ne];_.format!==Zt?Se!==null?Ce?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,re.width,re.height,Se,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,ke,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,re.width,re.height,Se,le,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,ke,re.width,re.height,0,Se,le,re.data)}}}else{if(W=_.mipmaps,Ce&&qe){W.length>0&&se++;const j=Be(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,se,ke,j.width,j.height)}for(let j=0;j<6;j++)if(ee){Ce?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ue[j].width,ue[j].height,Se,le,ue[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,ue[j].width,ue[j].height,0,Se,le,ue[j].data);for(let ne=0;ne<W.length;ne++){const re=W[ne].image[j].image;Ce?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,re.width,re.height,Se,le,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,ke,re.width,re.height,0,Se,le,re.data)}}else{Ce?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Se,le,ue[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,Se,le,ue[j]);for(let ne=0;ne<W.length;ne++){const re=W[ne];Ce?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,Se,le,re.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,ke,Se,le,re.image[j])}}}d(_)&&p(r.TEXTURE_CUBE_MAP),G.__version=K.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Q(M,_,k,q,K,G){const ge=n.convert(k.format,k.colorSpace),ie=n.convert(k.type),de=A(k.internalFormat,ge,ie,k.colorSpace);if(!a.get(_).__hasExternalTextures){const Le=Math.max(1,_.width>>G),ee=Math.max(1,_.height>>G);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,G,de,Le,ee,_.depth,0,ge,ie,null):t.texImage2D(K,G,de,Le,ee,0,ge,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,M),Oe(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,K,a.get(k).__webglTexture,0,Re(_)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,K,a.get(k).__webglTexture,G),t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(M,_,k){if(r.bindRenderbuffer(r.RENDERBUFFER,M),_.depthBuffer){const q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,G=x(_.stencilBuffer,K),ge=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=Re(_);Oe(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,G,_.width,_.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,G,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,G,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,M)}else{const q=_.textures;for(let K=0;K<q.length;K++){const G=q[K],ge=n.convert(G.format,G.colorSpace),ie=n.convert(G.type),de=A(G.internalFormat,ge,ie,G.colorSpace),Le=Re(_);k&&Oe(_)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,de,_.width,_.height):Oe(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,de,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,de,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const k=a.get(_.depthTexture).__webglTexture,q=Re(_);if(_.depthTexture.format===dr)Oe(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0);else if(_.depthTexture.format===_r)Oe(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function we(M){const _=a.get(M),k=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const q=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=q}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ce(_.__webglFramebuffer,M)}else if(k){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=r.createRenderbuffer(),me(_.__webglDepthbuffer[q],M,!1);else{const K=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,G),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,G)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),me(_.__webglDepthbuffer,M,!1);else{const q=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,K)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(M,_,k){const q=a.get(M);_!==void 0&&Q(q.__webglFramebuffer,M,M.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&we(M)}function Ne(M){const _=M.texture,k=a.get(M),q=a.get(_);M.addEventListener("dispose",B);const K=M.textures,G=M.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=_.version,s.memory.textures++),G){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let de=0;de<_.mipmaps.length;de++)k.__webglFramebuffer[ie][de]=r.createFramebuffer()}else k.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)k.__webglFramebuffer[ie]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ge)for(let ie=0,de=K.length;ie<de;ie++){const Le=a.get(K[ie]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),s.memory.textures++)}if(M.samples>0&&Oe(M)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){const de=K[ie];k.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ie]);const Le=n.convert(de.format,de.colorSpace),ee=n.convert(de.type),ue=A(de.internalFormat,Le,ee,de.colorSpace,M.isXRRenderTarget===!0),Me=Re(M);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,ue,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,k.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),me(k.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(G){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),_e(r.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)Q(k.__webglFramebuffer[ie][de],M,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de);else Q(k.__webglFramebuffer[ie],M,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);d(_)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ie=0,de=K.length;ie<de;ie++){const Le=K[ie],ee=a.get(Le);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),_e(r.TEXTURE_2D,Le),Q(k.__webglFramebuffer,M,Le,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,0),d(Le)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ie=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),_e(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)Q(k.__webglFramebuffer[de],M,_,r.COLOR_ATTACHMENT0,ie,de);else Q(k.__webglFramebuffer,M,_,r.COLOR_ATTACHMENT0,ie,0);d(_)&&p(ie),t.unbindTexture()}M.depthBuffer&&we(M)}function He(M){const _=M.textures;for(let k=0,q=_.length;k<q;k++){const K=_[k];if(d(K)){const G=M.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ge=a.get(K).__webglTexture;t.bindTexture(G,ge),p(G),t.unbindTexture()}}}const Fe=[],w=[];function Mt(M){if(M.samples>0){if(Oe(M)===!1){const _=M.textures,k=M.width,q=M.height;let K=r.COLOR_BUFFER_BIT;const G=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=a.get(M),ie=_.length>1;if(ie)for(let de=0;de<_.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<_.length;de++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const Le=a.get(_[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Le,0)}r.blitFramebuffer(0,0,k,q,0,0,k,q,K,r.NEAREST),c===!0&&(Fe.length=0,w.length=0,Fe.push(r.COLOR_ATTACHMENT0+de),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Fe.push(G),w.push(G),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,w)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<_.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);const Le=a.get(_[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,Le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function Re(M){return Math.min(i.maxSamples,M.samples)}function Oe(M){const _=a.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Te(M){const _=s.render.frame;l.get(M)!==_&&(l.set(M,_),M.update())}function Ke(M,_){const k=M.colorSpace,q=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||k!==va&&k!==ma&&(ze.getTransfer(k)===$e?(q!==Zt||K!==ia)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function Be(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(h.width=M.naturalWidth||M.width,h.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(h.width=M.displayWidth,h.height=M.displayHeight):(h.width=M.width,h.height=M.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=b,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=xe,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Oe}function bf(r,e){function t(a,i=ma){let n;const s=ze.getTransfer(i);if(a===ia)return r.UNSIGNED_BYTE;if(a===ws)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Cs)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Tc)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===xc)return r.BYTE;if(a===Ac)return r.SHORT;if(a===Zr)return r.UNSIGNED_SHORT;if(a===Bs)return r.INT;if(a===Wa)return r.UNSIGNED_INT;if(a===qt)return r.FLOAT;if(a===Gr)return r.HALF_FLOAT;if(a===Mc)return r.ALPHA;if(a===Sc)return r.RGB;if(a===Zt)return r.RGBA;if(a===Bc)return r.LUMINANCE;if(a===wc)return r.LUMINANCE_ALPHA;if(a===dr)return r.DEPTH_COMPONENT;if(a===_r)return r.DEPTH_STENCIL;if(a===Is)return r.RED;if(a===Ds)return r.RED_INTEGER;if(a===Cc)return r.RG;if(a===Ps)return r.RG_INTEGER;if(a===Rs)return r.RGBA_INTEGER;if(a===Ti||a===Mi||a===Si||a===Bi)if(s===$e)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(a===Ti)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Mi)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Si)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Bi)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(a===Ti)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Mi)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Si)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Bi)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Yn||a===Kn||a===$n||a===Jn)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(a===Yn)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Kn)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===$n)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Jn)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Qn||a===es||a===ts)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(a===Qn||a===es)return s===$e?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(a===ts)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===as||a===rs||a===is||a===ns||a===ss||a===os||a===cs||a===hs||a===ls||a===ds||a===ps||a===ms||a===us||a===fs)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(a===as)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===rs)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===is)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ns)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ss)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===os)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===cs)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===hs)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ls)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ds)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ps)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ms)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===us)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===fs)return s===$e?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===wi||a===gs||a===Es)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(a===wi)return s===$e?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===gs)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Es)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ic||a===_s||a===ys||a===vs)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(a===wi)return n.COMPRESSED_RED_RGTC1_EXT;if(a===_s)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ys)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===vs)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Er?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:t}}class xf extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ua extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Af={type:"move"};class Cn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let i=null,n=null,s=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){s=!0;for(const y of e.hand.values()){const d=t.getJointPose(y,a),p=this._getHandJoint(h,y);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],m=l.position.distanceTo(u.position),f=.02,E=.005;h.inputState.pinching&&m>f+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=f-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,a),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,a),i===null&&n!==null&&(i=n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Af)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=n!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new Ua;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}const Tf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,a){if(this.texture===null){const i=new yt,n=e.properties.get(i);n.__webglTexture=t.texture,(t.depthNear!=a.depthNear||t.depthFar!=a.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new _a({vertexShader:Tf,fragmentShader:Mf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Vi(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bf extends vr{constructor(e,t){super();const a=this;let i=null,n=1,s=null,o="local-floor",c=1,h=null,l=null,u=null,m=null,f=null,E=null;const y=new Sf,d=t.getContextAttributes();let p=null,A=null;const x=[],T=[],L=new Pe;let B=null;const S=new It;S.layers.enable(1),S.viewport=new Ve;const R=new It;R.layers.enable(2),R.viewport=new Ve;const V=[S,R],g=new xf;g.layers.enable(1),g.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=x[H];return Q===void 0&&(Q=new Cn,x[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=x[H];return Q===void 0&&(Q=new Cn,x[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=x[H];return Q===void 0&&(Q=new Cn,x[H]=Q),Q.getHandSpace()};function O(H){const Q=T.indexOf(H.inputSource);if(Q===-1)return;const me=x[Q];me!==void 0&&(me.update(H.inputSource,H.frame,h||s),me.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",$);for(let H=0;H<x.length;H++){const Q=T[H];Q!==null&&(T[H]=null,x[H].disconnect(Q))}b=null,F=null,y.reset(),e.setRenderTarget(p),f=null,m=null,u=null,i=null,A=null,We.stop(),a.isPresenting=!1,e.setPixelRatio(B),e.setSize(L.width,L.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){n=H,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(H){h=H},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return u},this.getFrame=function(){return E},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",X),i.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:n};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new Za(f.framebufferWidth,f.framebufferHeight,{format:Zt,type:ia,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let Q=null,me=null,ce=null;d.depth&&(ce=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=d.stencil?_r:dr,me=d.stencil?Er:Wa);const we={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:n};u=new XRWebGLBinding(i,t),m=u.createProjectionLayer(we),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),A=new Za(m.textureWidth,m.textureHeight,{format:Zt,type:ia,depthTexture:new Hc(m.textureWidth,m.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),h=null,s=await i.requestReferenceSpace(o),We.setContext(i),We.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(H){for(let Q=0;Q<H.removed.length;Q++){const me=H.removed[Q],ce=T.indexOf(me);ce>=0&&(T[ce]=null,x[ce].disconnect(me))}for(let Q=0;Q<H.added.length;Q++){const me=H.added[Q];let ce=T.indexOf(me);if(ce===-1){for(let xe=0;xe<x.length;xe++)if(xe>=T.length){T.push(me),ce=xe;break}else if(T[xe]===null){T[xe]=me,ce=xe;break}if(ce===-1)break}const we=x[ce];we&&we.connect(me)}}const Z=new C,Y=new C;function z(H,Q,me){Z.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(me.matrixWorld);const ce=Z.distanceTo(Y),we=Q.projectionMatrix.elements,xe=me.projectionMatrix.elements,Ne=we[14]/(we[10]-1),He=we[14]/(we[10]+1),Fe=(we[9]+1)/we[5],w=(we[9]-1)/we[5],Mt=(we[8]-1)/we[0],Re=(xe[8]+1)/xe[0],Oe=Ne*Mt,Te=Ne*Re,Ke=ce/(-Mt+Re),Be=Ke*-Mt;if(Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Be),H.translateZ(Ke),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),we[10]===-1)H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const M=Ne+Ke,_=He+Ke,k=Oe-Be,q=Te+(ce-Be),K=Fe*He/_*M,G=w*He/_*M;H.projectionMatrix.makePerspective(k,q,K,G,M,_),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function te(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let Q=H.near,me=H.far;y.texture!==null&&(y.depthNear>0&&(Q=y.depthNear),y.depthFar>0&&(me=y.depthFar)),g.near=R.near=S.near=Q,g.far=R.far=S.far=me,(b!==g.near||F!==g.far)&&(i.updateRenderState({depthNear:g.near,depthFar:g.far}),b=g.near,F=g.far);const ce=H.parent,we=g.cameras;te(g,ce);for(let xe=0;xe<we.length;xe++)te(we[xe],ce);we.length===2?z(g,S,R):g.projectionMatrix.copy(S.projectionMatrix),he(H,g,ce)};function he(H,Q,me){me===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(me.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=zr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(m===null&&f===null))return c},this.setFoveation=function(H){c=H,m!==null&&(m.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(g)};let _e=null;function Ue(H,Q){if(l=Q.getViewerPose(h||s),E=Q,l!==null){const me=l.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let ce=!1;me.length!==g.cameras.length&&(g.cameras.length=0,ce=!0);for(let xe=0;xe<me.length;xe++){const Ne=me[xe];let He=null;if(f!==null)He=f.getViewport(Ne);else{const w=u.getViewSubImage(m,Ne);He=w.viewport,xe===0&&(e.setRenderTargetTextures(A,w.colorTexture,m.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(A))}let Fe=V[xe];Fe===void 0&&(Fe=new It,Fe.layers.enable(xe),Fe.viewport=new Ve,V[xe]=Fe),Fe.matrix.fromArray(Ne.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ne.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(He.x,He.y,He.width,He.height),xe===0&&(g.matrix.copy(Fe.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ce===!0&&g.cameras.push(Fe)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")){const xe=u.getDepthInformation(me[0]);xe&&xe.isValid&&xe.texture&&y.init(e,xe,i.renderState)}}for(let me=0;me<x.length;me++){const ce=T[me],we=x[me];ce!==null&&we!==void 0&&we.update(ce,Q,h||s)}_e&&_e(H,Q),Q.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Q}),E=null}const We=new zc;We.setAnimationLoop(Ue),this.setAnimationLoop=function(H){_e=H},this.dispose=function(){}}}const wa=new jt,wf=new Xe;function Cf(r,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function a(d,p){p.color.getRGB(d.fogColor.value,Oc(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,A,x,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(d,p):p.isMeshToonMaterial?(n(d,p),u(d,p)):p.isMeshPhongMaterial?(n(d,p),l(d,p)):p.isMeshStandardMaterial?(n(d,p),m(d,p),p.isMeshPhysicalMaterial&&f(d,p,T)):p.isMeshMatcapMaterial?(n(d,p),E(d,p)):p.isMeshDepthMaterial?n(d,p):p.isMeshDistanceMaterial?(n(d,p),y(d,p)):p.isMeshNormalMaterial?n(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?c(d,p,A,x):p.isSpriteMaterial?h(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===At&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===At&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const A=e.get(p),x=A.envMap,T=A.envMapRotation;x&&(d.envMap.value=x,wa.copy(T),wa.x*=-1,wa.y*=-1,wa.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(wa.y*=-1,wa.z*=-1),d.envMapRotation.value.setFromMatrix4(wf.makeRotationFromEuler(wa)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,A,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*A,d.scale.value=x*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function m(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,A){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===At&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function E(d,p){p.matcap&&(d.matcap.value=p.matcap)}function y(d,p){const A=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(A.matrixWorld),d.nearDistance.value=A.shadow.camera.near,d.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:i}}function If(r,e,t,a){let i={},n={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,x){const T=x.program;a.uniformBlockBinding(A,T)}function h(A,x){let T=i[A.id];T===void 0&&(E(A),T=l(A),i[A.id]=T,A.addEventListener("dispose",d));const L=x.program;a.updateUBOMapping(A,L);const B=e.render.frame;n[A.id]!==B&&(m(A),n[A.id]=B)}function l(A){const x=u();A.__bindingPointIndex=x;const T=r.createBuffer(),L=A.__size,B=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,L,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,T),T}function u(){for(let A=0;A<o;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){const x=i[A.id],T=A.uniforms,L=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let B=0,S=T.length;B<S;B++){const R=Array.isArray(T[B])?T[B]:[T[B]];for(let V=0,g=R.length;V<g;V++){const b=R[V];if(f(b,B,V,L)===!0){const F=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let $=0;$<O.length;$++){const Z=O[$],Y=y(Z);typeof Z=="number"||typeof Z=="boolean"?(b.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,F+X,b.__data)):Z.isMatrix3?(b.__data[0]=Z.elements[0],b.__data[1]=Z.elements[1],b.__data[2]=Z.elements[2],b.__data[3]=0,b.__data[4]=Z.elements[3],b.__data[5]=Z.elements[4],b.__data[6]=Z.elements[5],b.__data[7]=0,b.__data[8]=Z.elements[6],b.__data[9]=Z.elements[7],b.__data[10]=Z.elements[8],b.__data[11]=0):(Z.toArray(b.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(A,x,T,L){const B=A.value,S=x+"_"+T;if(L[S]===void 0)return typeof B=="number"||typeof B=="boolean"?L[S]=B:L[S]=B.clone(),!0;{const R=L[S];if(typeof B=="number"||typeof B=="boolean"){if(R!==B)return L[S]=B,!0}else if(R.equals(B)===!1)return R.copy(B),!0}return!1}function E(A){const x=A.uniforms;let T=0;const L=16;for(let S=0,R=x.length;S<R;S++){const V=Array.isArray(x[S])?x[S]:[x[S]];for(let g=0,b=V.length;g<b;g++){const F=V[g],O=Array.isArray(F.value)?F.value:[F.value];for(let X=0,$=O.length;X<$;X++){const Z=O[X],Y=y(Z),z=T%L,te=z%Y.boundary,he=z+te;T+=te,he!==0&&L-he<Y.storage&&(T+=L-he),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=Y.storage}}}const B=T%L;return B>0&&(T+=L-B),A.__size=T,A.__cache={},this}function y(A){const x={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(x.boundary=4,x.storage=4):A.isVector2?(x.boundary=8,x.storage=8):A.isVector3||A.isColor?(x.boundary=16,x.storage=12):A.isVector4?(x.boundary=16,x.storage=16):A.isMatrix3?(x.boundary=48,x.storage=48):A.isMatrix4?(x.boundary=64,x.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),x}function d(A){const x=A.target;x.removeEventListener("dispose",d);const T=s.indexOf(x.__bindingPointIndex);s.splice(T,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete n[x.id]}function p(){for(const A in i)r.deleteBuffer(i[A]);s=[],i={},n={}}return{bind:c,update:h,dispose:p}}class Df{constructor(e={}){const{canvas:t=El(),context:a=null,depth:i=!0,stencil:n=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let m;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=a.getContextAttributes().alpha}else m=s;const f=new Uint32Array(4),E=new Int32Array(4);let y=null,d=null;const p=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=fa,this.toneMappingExposure=1;const x=this;let T=!1,L=0,B=0,S=null,R=-1,V=null;const g=new Ve,b=new Ve;let F=null;const O=new be(0);let X=0,$=t.width,Z=t.height,Y=1,z=null,te=null;const he=new Ve(0,0,$,Z),_e=new Ve(0,0,$,Z);let Ue=!1;const We=new Fs;let H=!1,Q=!1;const me=new Xe,ce=new Xe,we=new C,xe=new Ve,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Fe(){return S===null?Y:1}let w=a;function Mt(v,P){return t.getContext(v,P)}try{const v={alpha:!0,depth:i,stencil:n,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ss}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",re,!1),w===null){const P="webgl2";if(w=Mt(P,v),w===null)throw Mt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Re,Oe,Te,Ke,Be,M,_,k,q,K,G,ge,ie,de,Le,ee,ue,Me,Se,le,ke,Ce,qe,I;function se(){Re=new km(w),Re.init(),Ce=new bf(w,Re),Oe=new Cm(w,Re,e,Ce),Te=new _f(w),Oe.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),Ke=new Fm(w),Be=new af,M=new vf(w,Re,Te,Be,Oe,Ce,Ke),_=new Dm(x),k=new Lm(x),q=new Gl(w),qe=new Bm(w,q),K=new Um(w,q,Ke,qe),G=new Wm(w,K,q,Ke),Se=new Om(w,Oe,M),ee=new Im(Be),ge=new tf(x,_,k,Re,Oe,qe,ee),ie=new Cf(x,Be),de=new nf,Le=new df(Re),Me=new Sm(x,_,k,Te,G,m,c),ue=new gf(x,G,Oe),I=new If(w,Ke,Oe,Te),le=new wm(w,Re,Ke),ke=new Nm(w,Re,Ke),Ke.programs=ge.programs,x.capabilities=Oe,x.extensions=Re,x.properties=Be,x.renderLists=de,x.shadowMap=ue,x.state=Te,x.info=Ke}se();const W=new Bf(x,w);this.xr=W,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=Re.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Re.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(v){v!==void 0&&(Y=v,this.setSize($,Z,!1))},this.getSize=function(v){return v.set($,Z)},this.setSize=function(v,P,U=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=v,Z=P,t.width=Math.floor(v*Y),t.height=Math.floor(P*Y),U===!0&&(t.style.width=v+"px",t.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set($*Y,Z*Y).floor()},this.setDrawingBufferSize=function(v,P,U){$=v,Z=P,Y=U,t.width=Math.floor(v*U),t.height=Math.floor(P*U),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(g)},this.getViewport=function(v){return v.copy(he)},this.setViewport=function(v,P,U,N){v.isVector4?he.set(v.x,v.y,v.z,v.w):he.set(v,P,U,N),Te.viewport(g.copy(he).multiplyScalar(Y).round())},this.getScissor=function(v){return v.copy(_e)},this.setScissor=function(v,P,U,N){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,P,U,N),Te.scissor(b.copy(_e).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(v){Te.setScissorTest(Ue=v)},this.setOpaqueSort=function(v){z=v},this.setTransparentSort=function(v){te=v},this.getClearColor=function(v){return v.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(v=!0,P=!0,U=!0){let N=0;if(v){let D=!1;if(S!==null){const J=S.texture.format;D=J===Rs||J===Ps||J===Ds}if(D){const J=S.texture.type,oe=J===ia||J===Wa||J===Zr||J===Er||J===ws||J===Cs,pe=Me.getClearColor(),fe=Me.getClearAlpha(),Ae=pe.r,ve=pe.g,ye=pe.b;oe?(f[0]=Ae,f[1]=ve,f[2]=ye,f[3]=fe,w.clearBufferuiv(w.COLOR,0,f)):(E[0]=Ae,E[1]=ve,E[2]=ye,E[3]=fe,w.clearBufferiv(w.COLOR,0,E))}else N|=w.COLOR_BUFFER_BIT}P&&(N|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),U&&(N|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",re,!1),de.dispose(),Le.dispose(),Be.dispose(),_.dispose(),k.dispose(),G.dispose(),qe.dispose(),I.dispose(),ge.dispose(),W.dispose(),W.removeEventListener("sessionstart",Js),W.removeEventListener("sessionend",Qs),ba.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const v=Ke.autoReset,P=ue.enabled,U=ue.autoUpdate,N=ue.needsUpdate,D=ue.type;se(),Ke.autoReset=v,ue.enabled=P,ue.autoUpdate=U,ue.needsUpdate=N,ue.type=D}function re(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function je(v){const P=v.target;P.removeEventListener("dispose",je),at(P)}function at(v){vt(v),Be.remove(v)}function vt(v){const P=Be.get(v).programs;P!==void 0&&(P.forEach(function(U){ge.releaseProgram(U)}),v.isShaderMaterial&&ge.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,U,N,D,J){P===null&&(P=Ne);const oe=D.isMesh&&D.matrixWorld.determinant()<0,pe=hh(v,P,U,N,D);Te.setMaterial(N,oe);let fe=U.index,Ae=1;if(N.wireframe===!0){if(fe=K.getWireframeAttribute(U),fe===void 0)return;Ae=2}const ve=U.drawRange,ye=U.attributes.position;let Ge=ve.start*Ae,Qe=(ve.start+ve.count)*Ae;J!==null&&(Ge=Math.max(Ge,J.start*Ae),Qe=Math.min(Qe,(J.start+J.count)*Ae)),fe!==null?(Ge=Math.max(Ge,0),Qe=Math.min(Qe,fe.count)):ye!=null&&(Ge=Math.max(Ge,0),Qe=Math.min(Qe,ye.count));const et=Qe-Ge;if(et<0||et===1/0)return;qe.setup(D,N,pe,U,fe);let st,Je=le;if(fe!==null&&(st=q.get(fe),Je=ke,Je.setIndex(st)),D.isMesh)N.wireframe===!0?(Te.setLineWidth(N.wireframeLinewidth*Fe()),Je.setMode(w.LINES)):Je.setMode(w.TRIANGLES);else if(D.isLine){let Ee=N.linewidth;Ee===void 0&&(Ee=1),Te.setLineWidth(Ee*Fe()),D.isLineSegments?Je.setMode(w.LINES):D.isLineLoop?Je.setMode(w.LINE_LOOP):Je.setMode(w.LINE_STRIP)}else D.isPoints?Je.setMode(w.POINTS):D.isSprite&&Je.setMode(w.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Je.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))Je.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Ee=D._multiDrawStarts,ft=D._multiDrawCounts,xa=D._multiDrawCount,kt=fe?q.get(fe).bytesPerElement:1,Ga=Be.get(N).currentProgram.getUniforms();for(let St=0;St<xa;St++)Ga.setValue(w,"_gl_DrawID",St),Je.render(Ee[St]/kt,ft[St])}else if(D.isInstancedMesh)Je.renderInstances(Ge,et,D.count);else if(U.isInstancedBufferGeometry){const Ee=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,ft=Math.min(U.instanceCount,Ee);Je.renderInstances(Ge,et,ft)}else Je.render(Ge,et)};function Ze(v,P,U){v.transparent===!0&&v.side===Ht&&v.forceSinglePass===!1?(v.side=At,v.needsUpdate=!0,$r(v,P,U),v.side=Ea,v.needsUpdate=!0,$r(v,P,U),v.side=Ht):$r(v,P,U)}this.compile=function(v,P,U=null){U===null&&(U=v),d=Le.get(U),d.init(P),A.push(d),U.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),v!==U&&v.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights();const N=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const J=D.material;if(J)if(Array.isArray(J))for(let oe=0;oe<J.length;oe++){const pe=J[oe];Ze(pe,U,D),N.add(pe)}else Ze(J,U,D),N.add(J)}),A.pop(),d=null,N},this.compileAsync=function(v,P,U=null){const N=this.compile(v,P,U);return new Promise(D=>{function J(){if(N.forEach(function(oe){Be.get(oe).currentProgram.isReady()&&N.delete(oe)}),N.size===0){D(v);return}setTimeout(J,10)}Re.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let bt=null;function Yt(v){bt&&bt(v)}function Js(){ba.stop()}function Qs(){ba.start()}const ba=new zc;ba.setAnimationLoop(Yt),typeof self<"u"&&ba.setContext(self),this.setAnimationLoop=function(v){bt=v,W.setAnimationLoop(v),v===null?ba.stop():ba.start()},W.addEventListener("sessionstart",Js),W.addEventListener("sessionend",Qs),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(P),P=W.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,P,S),d=Le.get(v,A.length),d.init(P),A.push(d),ce.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),We.setFromProjectionMatrix(ce),Q=this.localClippingEnabled,H=ee.init(this.clippingPlanes,Q),y=de.get(v,p.length),y.init(),p.push(y),W.enabled===!0&&W.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&Ki(J,P,-1/0,x.sortObjects)}Ki(v,P,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(z,te),He=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,He&&Me.addToRenderList(y,v),this.info.render.frame++,H===!0&&ee.beginShadows();const U=d.state.shadowsArray;ue.render(U,v,P),H===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=y.opaque,D=y.transmissive;if(d.setupLights(),P.isArrayCamera){const J=P.cameras;if(D.length>0)for(let oe=0,pe=J.length;oe<pe;oe++){const fe=J[oe];to(N,D,v,fe)}He&&Me.render(v);for(let oe=0,pe=J.length;oe<pe;oe++){const fe=J[oe];eo(y,v,fe,fe.viewport)}}else D.length>0&&to(N,D,v,P),He&&Me.render(v),eo(y,v,P);S!==null&&(M.updateMultisampleRenderTarget(S),M.updateRenderTargetMipmap(S)),v.isScene===!0&&v.onAfterRender(x,v,P),qe.resetDefaultState(),R=-1,V=null,A.pop(),A.length>0?(d=A[A.length-1],H===!0&&ee.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Ki(v,P,U,N){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)U=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||We.intersectsSprite(v)){N&&xe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ce);const J=G.update(v),oe=v.material;oe.visible&&y.push(v,J,oe,U,xe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||We.intersectsObject(v))){const J=G.update(v),oe=v.material;if(N&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),xe.copy(v.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),xe.copy(J.boundingSphere.center)),xe.applyMatrix4(v.matrixWorld).applyMatrix4(ce)),Array.isArray(oe)){const pe=J.groups;for(let fe=0,Ae=pe.length;fe<Ae;fe++){const ve=pe[fe],ye=oe[ve.materialIndex];ye&&ye.visible&&y.push(v,J,ye,U,xe.z,ve)}}else oe.visible&&y.push(v,J,oe,U,xe.z,null)}}const D=v.children;for(let J=0,oe=D.length;J<oe;J++)Ki(D[J],P,U,N)}function eo(v,P,U,N){const D=v.opaque,J=v.transmissive,oe=v.transparent;d.setupLightsView(U),H===!0&&ee.setGlobalState(x.clippingPlanes,U),N&&Te.viewport(g.copy(N)),D.length>0&&Kr(D,P,U),J.length>0&&Kr(J,P,U),oe.length>0&&Kr(oe,P,U),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function to(v,P,U,N){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[N.id]===void 0&&(d.state.transmissionRenderTarget[N.id]=new Za(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?Gr:ia,minFilter:ka,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const D=d.state.transmissionRenderTarget[N.id],J=N.viewport||g;D.setSize(J.z,J.w);const oe=x.getRenderTarget();x.setRenderTarget(D),x.getClearColor(O),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),He&&Me.render(U);const pe=x.toneMapping;x.toneMapping=fa;const fe=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),d.setupLightsView(N),H===!0&&ee.setGlobalState(x.clippingPlanes,N),Kr(v,U,N),M.updateMultisampleRenderTarget(D),M.updateRenderTargetMipmap(D),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ve=0,ye=P.length;ve<ye;ve++){const Ge=P[ve],Qe=Ge.object,et=Ge.geometry,st=Ge.material,Je=Ge.group;if(st.side===Ht&&Qe.layers.test(N.layers)){const Ee=st.side;st.side=At,st.needsUpdate=!0,ao(Qe,U,N,et,st,Je),st.side=Ee,st.needsUpdate=!0,Ae=!0}}Ae===!0&&(M.updateMultisampleRenderTarget(D),M.updateRenderTargetMipmap(D))}x.setRenderTarget(oe),x.setClearColor(O,X),fe!==void 0&&(N.viewport=fe),x.toneMapping=pe}function Kr(v,P,U){const N=P.isScene===!0?P.overrideMaterial:null;for(let D=0,J=v.length;D<J;D++){const oe=v[D],pe=oe.object,fe=oe.geometry,Ae=N===null?oe.material:N,ve=oe.group;pe.layers.test(U.layers)&&ao(pe,P,U,fe,Ae,ve)}}function ao(v,P,U,N,D,J){v.onBeforeRender(x,P,U,N,D,J),v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(x,P,U,N,v,J),D.transparent===!0&&D.side===Ht&&D.forceSinglePass===!1?(D.side=At,D.needsUpdate=!0,x.renderBufferDirect(U,P,N,D,v,J),D.side=Ea,D.needsUpdate=!0,x.renderBufferDirect(U,P,N,D,v,J),D.side=Ht):x.renderBufferDirect(U,P,N,D,v,J),v.onAfterRender(x,P,U,N,D,J)}function $r(v,P,U){P.isScene!==!0&&(P=Ne);const N=Be.get(v),D=d.state.lights,J=d.state.shadowsArray,oe=D.state.version,pe=ge.getParameters(v,D.state,J,P,U),fe=ge.getProgramCacheKey(pe);let Ae=N.programs;N.environment=v.isMeshStandardMaterial?P.environment:null,N.fog=P.fog,N.envMap=(v.isMeshStandardMaterial?k:_).get(v.envMap||N.environment),N.envMapRotation=N.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Ae===void 0&&(v.addEventListener("dispose",je),Ae=new Map,N.programs=Ae);let ve=Ae.get(fe);if(ve!==void 0){if(N.currentProgram===ve&&N.lightsStateVersion===oe)return io(v,pe),ve}else pe.uniforms=ge.getUniforms(v),v.onBeforeCompile(pe,x),ve=ge.acquireProgram(pe,fe),Ae.set(fe,ve),N.uniforms=pe.uniforms;const ye=N.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=ee.uniform),io(v,pe),N.needsLights=dh(v),N.lightsStateVersion=oe,N.needsLights&&(ye.ambientLightColor.value=D.state.ambient,ye.lightProbe.value=D.state.probe,ye.directionalLights.value=D.state.directional,ye.directionalLightShadows.value=D.state.directionalShadow,ye.spotLights.value=D.state.spot,ye.spotLightShadows.value=D.state.spotShadow,ye.rectAreaLights.value=D.state.rectArea,ye.ltc_1.value=D.state.rectAreaLTC1,ye.ltc_2.value=D.state.rectAreaLTC2,ye.pointLights.value=D.state.point,ye.pointLightShadows.value=D.state.pointShadow,ye.hemisphereLights.value=D.state.hemi,ye.directionalShadowMap.value=D.state.directionalShadowMap,ye.directionalShadowMatrix.value=D.state.directionalShadowMatrix,ye.spotShadowMap.value=D.state.spotShadowMap,ye.spotLightMatrix.value=D.state.spotLightMatrix,ye.spotLightMap.value=D.state.spotLightMap,ye.pointShadowMap.value=D.state.pointShadowMap,ye.pointShadowMatrix.value=D.state.pointShadowMatrix),N.currentProgram=ve,N.uniformsList=null,ve}function ro(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Ii.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function io(v,P){const U=Be.get(v);U.outputColorSpace=P.outputColorSpace,U.batching=P.batching,U.batchingColor=P.batchingColor,U.instancing=P.instancing,U.instancingColor=P.instancingColor,U.instancingMorph=P.instancingMorph,U.skinning=P.skinning,U.morphTargets=P.morphTargets,U.morphNormals=P.morphNormals,U.morphColors=P.morphColors,U.morphTargetsCount=P.morphTargetsCount,U.numClippingPlanes=P.numClippingPlanes,U.numIntersection=P.numClipIntersection,U.vertexAlphas=P.vertexAlphas,U.vertexTangents=P.vertexTangents,U.toneMapping=P.toneMapping}function hh(v,P,U,N,D){P.isScene!==!0&&(P=Ne),M.resetTextureUnits();const J=P.fog,oe=N.isMeshStandardMaterial?P.environment:null,pe=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:va,fe=(N.isMeshStandardMaterial?k:_).get(N.envMap||oe),Ae=N.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,ve=!!U.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),ye=!!U.morphAttributes.position,Ge=!!U.morphAttributes.normal,Qe=!!U.morphAttributes.color;let et=fa;N.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(et=x.toneMapping);const st=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Je=st!==void 0?st.length:0,Ee=Be.get(N),ft=d.state.lights;if(H===!0&&(Q===!0||v!==V)){const Dt=v===V&&N.id===R;ee.setState(N,v,Dt)}let xa=!1;N.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ft.state.version||Ee.outputColorSpace!==pe||D.isBatchedMesh&&Ee.batching===!1||!D.isBatchedMesh&&Ee.batching===!0||D.isBatchedMesh&&Ee.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ee.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ee.instancing===!1||!D.isInstancedMesh&&Ee.instancing===!0||D.isSkinnedMesh&&Ee.skinning===!1||!D.isSkinnedMesh&&Ee.skinning===!0||D.isInstancedMesh&&Ee.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ee.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ee.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ee.instancingMorph===!1&&D.morphTexture!==null||Ee.envMap!==fe||N.fog===!0&&Ee.fog!==J||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ee.numPlanes||Ee.numIntersection!==ee.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==ve||Ee.morphTargets!==ye||Ee.morphNormals!==Ge||Ee.morphColors!==Qe||Ee.toneMapping!==et||Ee.morphTargetsCount!==Je)&&(xa=!0):(xa=!0,Ee.__version=N.version);let kt=Ee.currentProgram;xa===!0&&(kt=$r(N,P,D));let Ga=!1,St=!1,$i=!1;const tt=kt.getUniforms(),sa=Ee.uniforms;if(Te.useProgram(kt.program)&&(Ga=!0,St=!0,$i=!0),N.id!==R&&(R=N.id,St=!0),Ga||V!==v){Oe.reverseDepthBuffer?(me.copy(v.projectionMatrix),yl(me),vl(me),tt.setValue(w,"projectionMatrix",me)):tt.setValue(w,"projectionMatrix",v.projectionMatrix),tt.setValue(w,"viewMatrix",v.matrixWorldInverse);const Dt=tt.map.cameraPosition;Dt!==void 0&&Dt.setValue(w,we.setFromMatrixPosition(v.matrixWorld)),Oe.logarithmicDepthBuffer&&tt.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&tt.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),V!==v&&(V=v,St=!0,$i=!0)}if(D.isSkinnedMesh){tt.setOptional(w,D,"bindMatrix"),tt.setOptional(w,D,"bindMatrixInverse");const Dt=D.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),tt.setValue(w,"boneTexture",Dt.boneTexture,M))}D.isBatchedMesh&&(tt.setOptional(w,D,"batchingTexture"),tt.setValue(w,"batchingTexture",D._matricesTexture,M),tt.setOptional(w,D,"batchingIdTexture"),tt.setValue(w,"batchingIdTexture",D._indirectTexture,M),tt.setOptional(w,D,"batchingColorTexture"),D._colorsTexture!==null&&tt.setValue(w,"batchingColorTexture",D._colorsTexture,M));const Ji=U.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Se.update(D,U,kt),(St||Ee.receiveShadow!==D.receiveShadow)&&(Ee.receiveShadow=D.receiveShadow,tt.setValue(w,"receiveShadow",D.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(sa.envMap.value=fe,sa.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&P.environment!==null&&(sa.envMapIntensity.value=P.environmentIntensity),St&&(tt.setValue(w,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&lh(sa,$i),J&&N.fog===!0&&ie.refreshFogUniforms(sa,J),ie.refreshMaterialUniforms(sa,N,Y,Z,d.state.transmissionRenderTarget[v.id]),Ii.upload(w,ro(Ee),sa,M)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ii.upload(w,ro(Ee),sa,M),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&tt.setValue(w,"center",D.center),tt.setValue(w,"modelViewMatrix",D.modelViewMatrix),tt.setValue(w,"normalMatrix",D.normalMatrix),tt.setValue(w,"modelMatrix",D.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Dt=N.uniformsGroups;for(let Qi=0,ph=Dt.length;Qi<ph;Qi++){const no=Dt[Qi];I.update(no,kt),I.bind(no,kt)}}return kt}function lh(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function dh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(v,P,U){Be.get(v.texture).__webglTexture=P,Be.get(v.depthTexture).__webglTexture=U;const N=Be.get(v);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=U===void 0,N.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){const U=Be.get(v);U.__webglFramebuffer=P,U.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,U=0){S=v,L=P,B=U;let N=!0,D=null,J=!1,oe=!1;if(v){const pe=Be.get(v);if(pe.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(w.FRAMEBUFFER,null),N=!1;else if(pe.__webglFramebuffer===void 0)M.setupRenderTarget(v);else if(pe.__hasExternalTextures)M.rebindTextures(v,Be.get(v.texture).__webglTexture,Be.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ve=v.depthTexture;if(pe.__boundDepthTexture!==ve){if(ve!==null&&Be.has(ve)&&(v.width!==ve.image.width||v.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(v)}}const fe=v.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(oe=!0);const Ae=Be.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ae[P])?D=Ae[P][U]:D=Ae[P],J=!0):v.samples>0&&M.useMultisampledRTT(v)===!1?D=Be.get(v).__webglMultisampledFramebuffer:Array.isArray(Ae)?D=Ae[U]:D=Ae,g.copy(v.viewport),b.copy(v.scissor),F=v.scissorTest}else g.copy(he).multiplyScalar(Y).floor(),b.copy(_e).multiplyScalar(Y).floor(),F=Ue;if(Te.bindFramebuffer(w.FRAMEBUFFER,D)&&N&&Te.drawBuffers(v,D),Te.viewport(g),Te.scissor(b),Te.setScissorTest(F),J){const pe=Be.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe.__webglTexture,U)}else if(oe){const pe=Be.get(v.texture),fe=P||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,pe.__webglTexture,U||0,fe)}R=-1},this.readRenderTargetPixels=function(v,P,U,N,D,J,oe){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){Te.bindFramebuffer(w.FRAMEBUFFER,pe);try{const fe=v.texture,Ae=fe.format,ve=fe.type;if(!Oe.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-N&&U>=0&&U<=v.height-D&&w.readPixels(P,U,N,D,Ce.convert(Ae),Ce.convert(ve),J)}finally{const fe=S!==null?Be.get(S).__webglFramebuffer:null;Te.bindFramebuffer(w.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(v,P,U,N,D,J,oe){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){const fe=v.texture,Ae=fe.format,ve=fe.type;if(!Oe.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-N&&U>=0&&U<=v.height-D){Te.bindFramebuffer(w.FRAMEBUFFER,pe);const ye=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ye),w.bufferData(w.PIXEL_PACK_BUFFER,J.byteLength,w.STREAM_READ),w.readPixels(P,U,N,D,Ce.convert(Ae),Ce.convert(ve),0);const Ge=S!==null?Be.get(S).__webglFramebuffer:null;Te.bindFramebuffer(w.FRAMEBUFFER,Ge);const Qe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await _l(w,Qe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ye),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,J),w.deleteBuffer(ye),w.deleteSync(Qe),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,U=0){v.isTexture!==!0&&(Ci("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);const N=Math.pow(2,-U),D=Math.floor(v.image.width*N),J=Math.floor(v.image.height*N),oe=P!==null?P.x:0,pe=P!==null?P.y:0;M.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,U,0,0,oe,pe,D,J),Te.unbindTexture()},this.copyTextureToTexture=function(v,P,U=null,N=null,D=0){v.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,v=arguments[1],P=arguments[2],D=arguments[3]||0,U=null);let J,oe,pe,fe,Ae,ve;U!==null?(J=U.max.x-U.min.x,oe=U.max.y-U.min.y,pe=U.min.x,fe=U.min.y):(J=v.image.width,oe=v.image.height,pe=0,fe=0),N!==null?(Ae=N.x,ve=N.y):(Ae=0,ve=0);const ye=Ce.convert(P.format),Ge=Ce.convert(P.type);M.setTexture2D(P,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,P.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,P.unpackAlignment);const Qe=w.getParameter(w.UNPACK_ROW_LENGTH),et=w.getParameter(w.UNPACK_IMAGE_HEIGHT),st=w.getParameter(w.UNPACK_SKIP_PIXELS),Je=w.getParameter(w.UNPACK_SKIP_ROWS),Ee=w.getParameter(w.UNPACK_SKIP_IMAGES),ft=v.isCompressedTexture?v.mipmaps[D]:v.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,ft.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ft.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,pe),w.pixelStorei(w.UNPACK_SKIP_ROWS,fe),v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,D,Ae,ve,J,oe,ye,Ge,ft.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,D,Ae,ve,ft.width,ft.height,ye,ft.data):w.texSubImage2D(w.TEXTURE_2D,D,Ae,ve,J,oe,ye,Ge,ft),w.pixelStorei(w.UNPACK_ROW_LENGTH,Qe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,et),w.pixelStorei(w.UNPACK_SKIP_PIXELS,st),w.pixelStorei(w.UNPACK_SKIP_ROWS,Je),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ee),D===0&&P.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(v,P,U=null,N=null,D=0){v.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,N=arguments[1]||null,v=arguments[2],P=arguments[3],D=arguments[4]||0);let J,oe,pe,fe,Ae,ve,ye,Ge,Qe;const et=v.isCompressedTexture?v.mipmaps[D]:v.image;U!==null?(J=U.max.x-U.min.x,oe=U.max.y-U.min.y,pe=U.max.z-U.min.z,fe=U.min.x,Ae=U.min.y,ve=U.min.z):(J=et.width,oe=et.height,pe=et.depth,fe=0,Ae=0,ve=0),N!==null?(ye=N.x,Ge=N.y,Qe=N.z):(ye=0,Ge=0,Qe=0);const st=Ce.convert(P.format),Je=Ce.convert(P.type);let Ee;if(P.isData3DTexture)M.setTexture3D(P,0),Ee=w.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)M.setTexture2DArray(P,0),Ee=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,P.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,P.unpackAlignment);const ft=w.getParameter(w.UNPACK_ROW_LENGTH),xa=w.getParameter(w.UNPACK_IMAGE_HEIGHT),kt=w.getParameter(w.UNPACK_SKIP_PIXELS),Ga=w.getParameter(w.UNPACK_SKIP_ROWS),St=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,et.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,et.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,fe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ae),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ve),v.isDataTexture||v.isData3DTexture?w.texSubImage3D(Ee,D,ye,Ge,Qe,J,oe,pe,st,Je,et.data):P.isCompressedArrayTexture?w.compressedTexSubImage3D(Ee,D,ye,Ge,Qe,J,oe,pe,st,et.data):w.texSubImage3D(Ee,D,ye,Ge,Qe,J,oe,pe,st,Je,et),w.pixelStorei(w.UNPACK_ROW_LENGTH,ft),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,xa),w.pixelStorei(w.UNPACK_SKIP_PIXELS,kt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ga),w.pixelStorei(w.UNPACK_SKIP_IMAGES,St),D===0&&P.generateMipmaps&&w.generateMipmap(Ee),Te.unbindTexture()},this.initRenderTarget=function(v){Be.get(v).__webglFramebuffer===void 0&&M.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?M.setTextureCube(v,0):v.isData3DTexture?M.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?M.setTexture2DArray(v,0):M.setTexture2D(v,0),Te.unbindTexture()},this.resetState=function(){L=0,B=0,S=null,Te.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ls?"display-p3":"srgb",t.unpackColorSpace=ze.workingColorSpace===Hi?"display-p3":"srgb"}}class Ws{constructor(e,t=1,a=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=a}clone(){return new Ws(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pf extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rf extends yt{constructor(e=null,t=1,a=1,i,n,s,o,c,h=xt,l=xt,u,m){super(null,s,o,c,h,l,i,n,u,m),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tc extends Tt{constructor(e,t,a,i=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sr=new Xe,ac=new Xe,yi=[],rc=new za,Lf=new Xe,Ir=new Lt,Dr=new Xa;class kf extends Lt{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tc(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<a;i++)this.setMatrixAt(i,Lf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new za),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,sr),rc.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(rc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,sr),Dr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const a=t.morphTargetInfluences,i=this.morphTexture.source.data.data,n=a.length+1,s=e*n+1;for(let o=0;o<a.length;o++)a[o]=i[s+o]}raycast(e,t){const a=this.matrixWorld,i=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(a),e.ray.intersectsSphere(Dr)!==!1))for(let n=0;n<i;n++){this.getMatrixAt(n,sr),ac.multiplyMatrices(a,sr),Ir.matrixWorld=ac,Ir.raycast(e,yi);for(let s=0,o=yi.length;s<o;s++){const c=yi[s];c.instanceId=n,c.object=this,t.push(c)}yi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const a=t.morphTargetInfluences,i=a.length+1;this.morphTexture===null&&(this.morphTexture=new Rf(new Float32Array(i*this.count),i,this.count,Is,qt));const n=this.morphTexture.source.data.data;let s=0;for(let h=0;h<a.length;h++)s+=a[h];const o=this.geometry.morphTargetsRelative?1:1-s,c=i*e;n[c]=o,n.set(a,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qr extends Ha{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ni=new C,Fi=new C,ic=new Xe,Pr=new Gi,vi=new Xa,In=new C,nc=new C;class Zs extends nt{constructor(e=new ut,t=new qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[0];for(let i=1,n=t.count;i<n;i++)Ni.fromBufferAttribute(t,i-1),Fi.fromBufferAttribute(t,i),a[i]=a[i-1],a[i]+=Ni.distanceTo(Fi);e.setAttribute("lineDistance",new lt(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const a=this.geometry,i=this.matrixWorld,n=e.params.Line.threshold,s=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),vi.copy(a.boundingSphere),vi.applyMatrix4(i),vi.radius+=n,e.ray.intersectsSphere(vi)===!1)return;ic.copy(i).invert(),Pr.copy(e.ray).applyMatrix4(ic);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,l=a.index,u=a.attributes.position;if(l!==null){const m=Math.max(0,s.start),f=Math.min(l.count,s.start+s.count);for(let E=m,y=f-1;E<y;E+=h){const d=l.getX(E),p=l.getX(E+1),A=bi(this,e,Pr,c,d,p);A&&t.push(A)}if(this.isLineLoop){const E=l.getX(f-1),y=l.getX(m),d=bi(this,e,Pr,c,E,y);d&&t.push(d)}}else{const m=Math.max(0,s.start),f=Math.min(u.count,s.start+s.count);for(let E=m,y=f-1;E<y;E+=h){const d=bi(this,e,Pr,c,E,E+1);d&&t.push(d)}if(this.isLineLoop){const E=bi(this,e,Pr,c,f-1,m);E&&t.push(E)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const a=e[t[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=a.length;i<n;i++){const s=a[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function bi(r,e,t,a,i,n){const s=r.geometry.attributes.position;if(Ni.fromBufferAttribute(s,i),Fi.fromBufferAttribute(s,n),t.distanceSqToSegment(Ni,Fi,In,nc)>a)return;In.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo(In);if(!(o<e.near||o>e.far))return{distance:o,point:nc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const sc=new C,oc=new C;class Yc extends Zs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[];for(let i=0,n=t.count;i<n;i+=2)sc.fromBufferAttribute(t,i),oc.fromBufferAttribute(t,i+1),a[i]=i===0?0:a[i-1],a[i+1]=a[i]+sc.distanceTo(oc);e.setAttribute("lineDistance",new lt(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kc extends Ha{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cc=new Xe,xs=new Gi,xi=new Xa,Ai=new C;class Uf extends nt{constructor(e=new ut,t=new Kc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const a=this.geometry,i=this.matrixWorld,n=e.params.Points.threshold,s=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),xi.copy(a.boundingSphere),xi.applyMatrix4(i),xi.radius+=n,e.ray.intersectsSphere(xi)===!1)return;cc.copy(i).invert(),xs.copy(e.ray).applyMatrix4(cc);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=a.index,l=a.attributes.position;if(h!==null){const u=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let f=u,E=m;f<E;f++){const y=h.getX(f);Ai.fromBufferAttribute(l,y),hc(Ai,y,c,i,e,t,this)}}else{const u=Math.max(0,s.start),m=Math.min(l.count,s.start+s.count);for(let f=u,E=m;f<E;f++)Ai.fromBufferAttribute(l,f),hc(Ai,f,c,i,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const a=e[t[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,n=a.length;i<n;i++){const s=a[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function hc(r,e,t,a,i,n,s){const o=xs.distanceSqToPoint(r);if(o<t){const c=new C;xs.closestPointToPoint(r,c),c.applyMatrix4(a);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;n.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Tr extends ut{constructor(e=[],t=[],a=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:a,detail:i};const n=[],s=[];o(i),h(a),l(),this.setAttribute("position",new lt(n,3)),this.setAttribute("normal",new lt(n.slice(),3)),this.setAttribute("uv",new lt(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(A){const x=new C,T=new C,L=new C;for(let B=0;B<t.length;B+=3)f(t[B+0],x),f(t[B+1],T),f(t[B+2],L),c(x,T,L,A)}function c(A,x,T,L){const B=L+1,S=[];for(let R=0;R<=B;R++){S[R]=[];const V=A.clone().lerp(T,R/B),g=x.clone().lerp(T,R/B),b=B-R;for(let F=0;F<=b;F++)F===0&&R===B?S[R][F]=V:S[R][F]=V.clone().lerp(g,F/b)}for(let R=0;R<B;R++)for(let V=0;V<2*(B-R)-1;V++){const g=Math.floor(V/2);V%2===0?(m(S[R][g+1]),m(S[R+1][g]),m(S[R][g])):(m(S[R][g+1]),m(S[R+1][g+1]),m(S[R+1][g]))}}function h(A){const x=new C;for(let T=0;T<n.length;T+=3)x.x=n[T+0],x.y=n[T+1],x.z=n[T+2],x.normalize().multiplyScalar(A),n[T+0]=x.x,n[T+1]=x.y,n[T+2]=x.z}function l(){const A=new C;for(let x=0;x<n.length;x+=3){A.x=n[x+0],A.y=n[x+1],A.z=n[x+2];const T=d(A)/2/Math.PI+.5,L=p(A)/Math.PI+.5;s.push(T,1-L)}E(),u()}function u(){for(let A=0;A<s.length;A+=6){const x=s[A+0],T=s[A+2],L=s[A+4],B=Math.max(x,T,L),S=Math.min(x,T,L);B>.9&&S<.1&&(x<.2&&(s[A+0]+=1),T<.2&&(s[A+2]+=1),L<.2&&(s[A+4]+=1))}}function m(A){n.push(A.x,A.y,A.z)}function f(A,x){const T=A*3;x.x=e[T+0],x.y=e[T+1],x.z=e[T+2]}function E(){const A=new C,x=new C,T=new C,L=new C,B=new Pe,S=new Pe,R=new Pe;for(let V=0,g=0;V<n.length;V+=9,g+=6){A.set(n[V+0],n[V+1],n[V+2]),x.set(n[V+3],n[V+4],n[V+5]),T.set(n[V+6],n[V+7],n[V+8]),B.set(s[g+0],s[g+1]),S.set(s[g+2],s[g+3]),R.set(s[g+4],s[g+5]),L.copy(A).add(x).add(T).divideScalar(3);const b=d(L);y(B,g+0,A,b),y(S,g+2,x,b),y(R,g+4,T,b)}}function y(A,x,T,L){L<0&&A.x===1&&(s[x]=A.x-1),T.x===0&&T.z===0&&(s[x]=L/2/Math.PI+.5)}function d(A){return Math.atan2(A.z,-A.x)}function p(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.vertices,e.indices,e.radius,e.details)}}class zs extends Tr{constructor(e=1,t=0){const a=(1+Math.sqrt(5))/2,i=1/a,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-a,0,-i,a,0,i,-a,0,i,a,-i,-a,0,-i,a,0,i,-a,0,i,a,0,-a,0,-i,a,0,-i,-a,0,i,a,0,i],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zs(e.radius,e.detail)}}class Xs extends Tr{constructor(e=1,t=0){const a=(1+Math.sqrt(5))/2,i=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,n,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xs(e.radius,e.detail)}}class Hs extends Tr{constructor(e=1,t=0){const a=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(a,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hs(e.radius,e.detail)}}class Gs extends ut{constructor(e=.5,t=1,a=32,i=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:a,phiSegments:i,thetaStart:n,thetaLength:s},a=Math.max(3,a),i=Math.max(1,i);const o=[],c=[],h=[],l=[];let u=e;const m=(t-e)/i,f=new C,E=new Pe;for(let y=0;y<=i;y++){for(let d=0;d<=a;d++){const p=n+d/a*s;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),h.push(0,0,1),E.x=(f.x/t+1)/2,E.y=(f.y/t+1)/2,l.push(E.x,E.y)}u+=m}for(let y=0;y<i;y++){const d=y*(a+1);for(let p=0;p<a;p++){const A=p+d,x=A,T=A+a+1,L=A+a+2,B=A+1;o.push(x,T,B),o.push(T,L,B)}}this.setIndex(o),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vs extends Tr{constructor(e=1,t=0){const a=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(a,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vs(e.radius,e.detail)}}class Nf extends Ha{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qs extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ff extends qs{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Dn=new Xe,lc=new C,dc=new C;class $c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,a=this.matrix;lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(lc),dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dc),t.updateMatrixWorld(),Dn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dn),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Dn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pc=new Xe,Rr=new C,Pn=new C;class Of extends $c{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const a=this.camera,i=this.matrix,n=e.distance||a.far;n!==a.far&&(a.far=n,a.updateProjectionMatrix()),Rr.setFromMatrixPosition(e.matrixWorld),a.position.copy(Rr),Pn.copy(a.position),Pn.add(this._cubeDirections[t]),a.up.copy(this._cubeUps[t]),a.lookAt(Pn),a.updateMatrixWorld(),i.makeTranslation(-Rr.x,-Rr.y,-Rr.z),pc.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc)}}class Wf extends qs{constructor(e,t,a=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=i,this.shadow=new Of}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zf extends $c{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mc extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new Zf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=uc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function uc(){return performance.now()}const fc=new Xe;class Xf{constructor(e,t,a=0,i=1/0){this.ray=new Gi(e,t),this.near=a,this.far=i,this.camera=null,this.layers=new Us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fc),this}intersectObject(e,t=!0,a=[]){return As(e,this,a,t),a.sort(gc),a}intersectObjects(e,t=!0,a=[]){for(let i=0,n=e.length;i<n;i++)As(e[i],this,a,t);return a.sort(gc),a}}function gc(r,e){return r.distance-e.distance}function As(r,e,t,a){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&a===!0){const n=r.children;for(let s=0,o=n.length;s<o;s++)As(n[s],e,t,!0)}}class Hf extends Yc{constructor(e=10,t=10,a=4473924,i=8947848){a=new be(a),i=new be(i);const n=t/2,s=e/t,o=e/2,c=[],h=[];for(let m=0,f=0,E=-o;m<=t;m++,E+=s){c.push(-o,0,E,o,0,E),c.push(E,0,-o,E,0,o);const y=m===n?a:i;y.toArray(h,f),f+=3,y.toArray(h,f),f+=3,y.toArray(h,f),f+=3,y.toArray(h,f),f+=3}const l=new ut;l.setAttribute("position",new lt(c,3)),l.setAttribute("color",new lt(h,3));const u=new qr({vertexColors:!0,toneMapped:!1});super(l,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ss}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ss);const Gf=[{id:"ch1-01",nameZh:"汉语拼音",nameEn:"Pinyin",year:1,eraId:"L1",categoryId:"chinese",importance:5,faces:20,shape:"icosahedron",prereqs:[],descZh:"掌握23个声母、24个韵母与16个整体认读音节，学会拼读与标调。",grade:1,semester:1,stage:"小学",book:"统编版·语文·一年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch1-02",nameZh:"基本笔画与笔顺",nameEn:"Basic Strokes",year:1,eraId:"L1",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:[],descZh:"认识横竖撇捺点等基本笔画，按先横后竖、先撇后捺的规则书写。",grade:1,semester:1,stage:"小学",book:"统编版·语文·一年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch1-03",nameZh:"识字与写字",nameEn:"Recognizing Characters",year:1,eraId:"L1",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch1-02"],descZh:"借助拼音与图画认识常用汉字，理解字形与字义的联系。",grade:1,semester:1,stage:"小学",book:"统编版·语文·一年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch1-04",nameZh:"看图说话",nameEn:"Speaking from Pictures",year:1,eraId:"L1",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch1-01"],descZh:"观察图画，用完整的句子说出图中的人、事、物。",grade:1,semester:2,stage:"小学",book:"统编版·语文·一年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch2-01",nameZh:"部首查字法",nameEn:"Radical Lookup",year:2,eraId:"L1",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch1-03"],descZh:"用部首目录和检字表查字典，独立解决生字读音与字义。",grade:2,semester:1,stage:"小学",book:"统编版·语文·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch2-02",nameZh:"词语积累与搭配",nameEn:"Vocabulary and Collocation",year:2,eraId:"L1",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch1-03"],descZh:"积累AABB、ABAB等词语形式，掌握量词与形容词的恰当搭配。",grade:2,semester:1,stage:"小学",book:"统编版·语文·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch2-03",nameZh:"看图写话",nameEn:"Writing from Pictures",year:2,eraId:"L1",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch1-04"],descZh:"按时间、地点、人物、事情的顺序写几句连贯的话。",grade:2,semester:2,stage:"小学",book:"统编版·语文·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch2-04",nameZh:"古诗启蒙",nameEn:"First Classical Poems",year:2,eraId:"L1",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch1-01"],descZh:"诵读《静夜思》《咏柳》等短诗，感受节奏与画面。",grade:2,semester:1,stage:"小学",book:"统编版·语文·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch3-01",nameZh:"自然段与段落阅读",nameEn:"Reading Paragraphs",year:3,eraId:"L2",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch2-02"],descZh:"认识自然段，找出中心句，概括段意。",grade:3,semester:1,stage:"小学",book:"统编版·语文·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch3-02",nameZh:"习作起步:写一段话",nameEn:"Writing a Paragraph",year:3,eraId:"L2",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch2-03"],descZh:"围绕一个意思把话写清楚，做到语句通顺、标点正确。",grade:3,semester:1,stage:"小学",book:"统编版·语文·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch3-03",nameZh:"复述与概括",nameEn:"Retelling and Summarizing",year:3,eraId:"L2",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch3-01"],descZh:"抓住事情的起因、经过、结果复述，用一句话概括主要内容。",grade:3,semester:2,stage:"小学",book:"统编版·语文·三年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch3-04",nameZh:"童话与寓言",nameEn:"Fairy Tales and Fables",year:3,eraId:"L2",categoryId:"chinese",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ch3-01"],descZh:"读懂故事的情节与寓意，体会拟人化的表达。",grade:3,semester:2,stage:"小学",book:"统编版·语文·三年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch4-01",nameZh:"写景状物",nameEn:"Describing Scenes and Objects",year:4,eraId:"L2",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch3-02"],descZh:"按观察顺序描写景物，抓住形状、颜色、声音等特点。",grade:4,semester:1,stage:"小学",book:"统编版·语文·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch4-02",nameZh:"神话传说",nameEn:"Myths and Legends",year:4,eraId:"L2",categoryId:"chinese",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ch3-04"],descZh:"了解盘古、精卫、普罗米修斯等神话，感受想象的力量。",grade:4,semester:1,stage:"小学",book:"统编版·语文·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch4-03",nameZh:"观察日记",nameEn:"Observation Diary",year:4,eraId:"L2",categoryId:"chinese",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ch4-01"],descZh:"连续观察同一对象，记录变化过程与自己的感受。",grade:4,semester:2,stage:"小学",book:"统编版·语文·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch4-04",nameZh:"比喻与拟人",nameEn:"Simile and Personification",year:4,eraId:"L2",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch3-01"],descZh:"识别并运用比喻、拟人，使表达更生动形象。",grade:4,semester:1,stage:"小学",book:"统编版·语文·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch5-01",nameZh:"说明性文章阅读",nameEn:"Reading Expository Texts",year:5,eraId:"L2",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch3-03"],descZh:"了解举例子、列数字、作比较等说明方法及其作用。",grade:5,semester:1,stage:"小学",book:"统编版·语文·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch5-02",nameZh:"人物描写",nameEn:"Character Description",year:5,eraId:"L2",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch4-01"],descZh:"通过外貌、语言、动作、神态、心理刻画人物形象。",grade:5,semester:1,stage:"小学",book:"统编版·语文·五年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch5-03",nameZh:"古诗文积累",nameEn:"Accumulating Classical Texts",year:5,eraId:"L2",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch2-04"],descZh:"背诵《示儿》《题临安邸》等诗词，理解诗人的情感与时代背景。",grade:5,semester:1,stage:"小学",book:"统编版·语文·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch5-04",nameZh:"缩写与改写",nameEn:"Abbreviation and Rewriting",year:5,eraId:"L2",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch3-03"],descZh:"保留主干、删减细节进行缩写，转换人称与句式进行改写。",grade:5,semester:2,stage:"小学",book:"统编版·语文·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch6-01",nameZh:"文言文启蒙",nameEn:"First Classical Chinese",year:6,eraId:"L2",categoryId:"chinese",importance:5,faces:20,shape:"icosahedron",prereqs:["ch5-03"],descZh:"读《学弈》《两小儿辩日》，掌握之、其、而等常见虚词的初步用法。",grade:6,semester:1,stage:"小学",book:"统编版·语文·六年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch6-02",nameZh:"综合性学习",nameEn:"Integrated Learning",year:6,eraId:"L2",categoryId:"chinese",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ch5-01"],descZh:"围绕主题搜集资料、整理信息、展示成果，形成小课题报告。",grade:6,semester:2,stage:"小学",book:"统编版·语文·六年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch6-03",nameZh:"写人记事作文",nameEn:"Narrative Writing",year:6,eraId:"L2",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch5-02"],descZh:"选取典型事例表现人物特点，把事情的经过写具体。",grade:6,semester:2,stage:"小学",book:"统编版·语文·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch6-04",nameZh:"小升初阅读总复习",nameEn:"Primary Reading Review",year:6,eraId:"L2",categoryId:"chinese",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ch5-01","ch6-01"],descZh:"按记叙、说明、文言三类梳理阅读题型与答题规范。",grade:6,semester:2,stage:"小学",book:"小升初总复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch7-01",nameZh:"记叙文六要素",nameEn:"Six Elements of Narrative",year:7,eraId:"L3",categoryId:"chinese",importance:5,faces:20,shape:"icosahedron",prereqs:["ch6-03"],descZh:"把握时间、地点、人物、起因、经过、结果，理清叙事线索。",grade:7,semester:1,stage:"初中",book:"统编版·语文·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch7-02",nameZh:"散文阅读",nameEn:"Reading Prose",year:7,eraId:"L3",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch7-01"],descZh:"抓住形散神聚的特点，品味语言、体会情感与哲理。",grade:7,semester:1,stage:"初中",book:"统编版·语文·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch7-03",nameZh:"文言文:《论语》十二章",nameEn:"Analects (12 Chapters)",year:7,eraId:"L3",categoryId:"chinese",importance:5,faces:20,shape:"icosahedron",prereqs:["ch6-01"],descZh:"掌握通假字、古今异义，理解儒家关于学习与修身的观点。",grade:7,semester:1,stage:"初中",book:"统编版·语文·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch7-04",nameZh:"比喻、拟人与排比",nameEn:"Figures of Speech",year:7,eraId:"L3",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch4-04"],descZh:"辨析常见修辞并分析其表达效果，学会在写作中运用。",grade:7,semester:1,stage:"初中",book:"统编版·语文·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch7-05",nameZh:"名著阅读:《朝花夕拾》",nameEn:"Reading: Dawn Blossoms",year:7,eraId:"L3",categoryId:"chinese",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ch7-02"],descZh:"梳理十篇散文的内容与主题，理解鲁迅的批判与温情。",grade:7,semester:1,stage:"初中",book:"统编版·语文·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch8-01",nameZh:"说明文阅读:说明方法",nameEn:"Expository Methods",year:8,eraId:"L3",categoryId:"chinese",importance:5,faces:20,shape:"icosahedron",prereqs:["ch5-01"],descZh:"辨识十种说明方法，分析其准确性与说明效果。",grade:8,semester:1,stage:"初中",book:"统编版·语文·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch8-02",nameZh:"新闻特写与消息",nameEn:"News Writing",year:8,eraId:"L3",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch7-01"],descZh:"掌握消息的标题、导语、主体、背景、结语五部分结构。",grade:8,semester:1,stage:"初中",book:"统编版·语文·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch8-03",nameZh:"文言文:《三峡》《记承天寺夜游》",nameEn:"Classical Landscape Essays",year:8,eraId:"L3",categoryId:"chinese",importance:5,faces:20,shape:"icosahedron",prereqs:["ch7-03"],descZh:"积累文言实词，体会写景散文的意境与作者心境。",grade:8,semester:1,stage:"初中",book:"统编版·语文·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch8-04",nameZh:"议论文三要素初识",nameEn:"Elements of Argumentation",year:8,eraId:"L3",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch7-01"],descZh:"认识论点、论据、论证，区分事实论据与道理论据。",grade:8,semester:2,stage:"初中",book:"统编版·语文·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch8-05",nameZh:"名著阅读:《红星照耀中国》",nameEn:"Reading: Red Star Over China",year:8,eraId:"L3",categoryId:"chinese",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ch7-05"],descZh:"了解纪实作品的采访方法与历史价值，把握主要人物形象。",grade:8,semester:1,stage:"初中",book:"统编版·语文·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch9-01",nameZh:"议论文阅读:论点论据论证",nameEn:"Reading Argumentative Texts",year:9,eraId:"L3",categoryId:"chinese",importance:5,faces:20,shape:"icosahedron",prereqs:["ch8-04"],descZh:"准确提取中心论点，分析论证方法(举例、道理、对比、比喻)与论证结构。",grade:9,semester:1,stage:"初中",book:"统编版·语文·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch9-02",nameZh:"小说阅读:人物与环境",nameEn:"Reading Fiction",year:9,eraId:"L3",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch7-01"],descZh:"分析人物形象的塑造方法，理解环境描写的作用与主题。",grade:9,semester:1,stage:"初中",book:"统编版·语文·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch9-03",nameZh:"文言文:《岳阳楼记》《醉翁亭记》",nameEn:"Classical Prose Masterpieces",year:9,eraId:"L3",categoryId:"chinese",importance:5,faces:20,shape:"icosahedron",prereqs:["ch8-03"],descZh:"掌握一词多义与词类活用，理解先忧后乐与与民同乐的思想。",grade:9,semester:1,stage:"初中",book:"统编版·语文·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch9-04",nameZh:"古诗词鉴赏",nameEn:"Appreciating Classical Poetry",year:9,eraId:"L3",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch5-03"],descZh:"从意象、意境、手法、情感四方面赏析，掌握常见答题范式。",grade:9,semester:1,stage:"初中",book:"统编版·语文·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch9-05",nameZh:"中考作文:命题与半命题",nameEn:"Zhongkao Essay Writing",year:9,eraId:"L3",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch7-01"],descZh:"准确审题立意，围绕题目补全半命题并选取合适素材。",grade:9,semester:2,stage:"初中",book:"中考复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ch10-01",nameZh:"现代诗歌鉴赏",nameEn:"Modern Poetry",year:10,eraId:"L4",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch9-04"],descZh:"把握意象与抒情方式，体会《沁园春·长沙》等作品的意境与情怀。",grade:10,semester:1,stage:"高中",book:"统编版·语文·必修上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ch10-02",nameZh:"文言文:《劝学》《师说》",nameEn:"Classical Argumentative Essays",year:10,eraId:"L4",categoryId:"chinese",importance:5,faces:20,shape:"icosahedron",prereqs:["ch9-03"],descZh:"掌握而、之、于等虚词用法，理解比喻论证与对比论证。",grade:10,semester:1,stage:"高中",book:"统编版·语文·必修上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ch10-03",nameZh:"论述类文本阅读",nameEn:"Argumentative Text Reading",year:10,eraId:"L4",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch9-01"],descZh:"梳理论证思路，辨析概念偷换、以偏概全等常见设错方式。",grade:10,semester:1,stage:"高中",book:"统编版·语文·必修上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ch10-04",nameZh:"文学类文本:小说与散文",nameEn:"Literary Texts",year:10,eraId:"L4",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch9-02"],descZh:"从叙述视角、情节结构、语言风格等角度进行深层鉴赏。",grade:10,semester:2,stage:"高中",book:"统编版·语文·必修下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ch10-05",nameZh:"写景抒情散文",nameEn:"Lyrical Prose Writing",year:10,eraId:"L4",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch7-02"],descZh:"借景抒情、情景交融，做到形散神聚、语言有韵味。",grade:10,semester:1,stage:"高中",book:"统编版·语文·必修上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ch11-01",nameZh:"文言文:《赤壁赋》《陈情表》",nameEn:"Classical Masterpieces II",year:11,eraId:"L4",categoryId:"chinese",importance:5,faces:20,shape:"icosahedron",prereqs:["ch10-02"],descZh:"掌握词类活用与特殊句式，理解骈散结合的语言之美。",grade:11,semester:1,stage:"高中",book:"统编版·语文·选择性必修",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ch11-02",nameZh:"古诗词鉴赏进阶",nameEn:"Advanced Poetry Appreciation",year:11,eraId:"L4",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch9-04"],descZh:"辨析表达技巧术语，结合时代背景分析情感与风格。",grade:11,semester:1,stage:"高中",book:"统编版·语文·选择性必修",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ch11-03",nameZh:"实用类文本阅读",nameEn:"Practical Text Reading",year:11,eraId:"L4",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch10-03"],descZh:"阅读新闻、传记、科普等文本，快速筛选与整合信息。",grade:11,semester:2,stage:"高中",book:"统编版·语文·选择性必修",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ch11-04",nameZh:"议论文写作:结构与论证",nameEn:"Argumentative Essay Writing",year:11,eraId:"L4",categoryId:"chinese",importance:5,faces:20,shape:"icosahedron",prereqs:["ch9-01"],descZh:"建立并列式、递进式、对照式结构，使用恰当的论证方法。",grade:11,semester:1,stage:"高中",book:"统编版·语文·选择性必修",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ch11-05",nameZh:"名著与文化经典",nameEn:"Classics and Culture",year:11,eraId:"L4",categoryId:"chinese",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ch8-05"],descZh:"研读《红楼梦》《乡土中国》，理解整本书阅读的方法。",grade:11,semester:2,stage:"高中",book:"统编版·语文·必修下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ch12-01",nameZh:"高考论述类与实用类",nameEn:"Gaokao: Argumentative Texts",year:12,eraId:"L4",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch11-03"],descZh:"训练信息比对与推断题的严谨作答，控制失分。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ch12-02",nameZh:"高考文学类文本",nameEn:"Gaokao: Literary Texts",year:12,eraId:"L4",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch10-04"],descZh:"按题型归纳赏析、作用、意蕴类题目的答题层次。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ch12-03",nameZh:"任务驱动型作文",nameEn:"Task-based Writing",year:12,eraId:"L4",categoryId:"chinese",importance:4,faces:12,shape:"dodecahedron",prereqs:["ch11-04"],descZh:"在具体情境与身份限定下完成写作，兼顾论证力度与交际功能。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ch12-04",nameZh:"名句默写与文化常识",nameEn:"Dictation and Cultural Knowledge",year:12,eraId:"L4",categoryId:"chinese",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ch11-01"],descZh:"按篇目系统默写，梳理古代官职、科举、礼俗等常识。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ch12-05",nameZh:"语言运用:病句与衔接",nameEn:"Language Use",year:12,eraId:"L4",categoryId:"chinese",importance:3,faces:8,shape:"octahedron",prereqs:["ch10-03"],descZh:"辨析六类病句，掌握语句衔接与补写的逻辑依据。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"m1-01",nameZh:"10以内数的认识",nameEn:"Numbers within 10",year:1,eraId:"L1",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:[],descZh:"认识0—10各数，理解基数与序数的含义，学会比较大小和数的组成。",grade:1,semester:1,stage:"小学",book:"人教版·数学·一年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m1-02",nameZh:"10以内加减法",nameEn:"Addition and Subtraction within 10",year:1,eraId:"L1",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m1-01"],descZh:"借助数的组成理解加减法的意义，熟练口算10以内的加减。",grade:1,semester:1,stage:"小学",book:"人教版·数学·一年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m1-03",nameZh:"认识立体与平面图形",nameEn:"Solid and Plane Shapes",year:1,eraId:"L1",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:[],descZh:"辨认长方体、正方体、圆柱、球，再从立体图形的面上分离出长方形、正方形、三角形、圆。",grade:1,semester:1,stage:"小学",book:"人教版·数学·一年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m1-04",nameZh:"11—20各数的认识",nameEn:"Numbers 11 to 20",year:1,eraId:"L1",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m1-01"],descZh:"建立数位的初步概念，理解10个一是一个十。",grade:1,semester:1,stage:"小学",book:"人教版·数学·一年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m1-05",nameZh:"20以内的进位加法",nameEn:"Carrying Addition within 20",year:1,eraId:"L1",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m1-02"],descZh:"用凑十法计算9加几、8加几等，是后续所有竖式计算的起点。",grade:1,semester:1,stage:"小学",book:"人教版·数学·一年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m1-06",nameZh:"20以内的退位减法",nameEn:"Borrowing Subtraction within 20",year:1,eraId:"L1",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m1-05"],descZh:"用破十法、平十法计算十几减几，理解加减互逆关系。",grade:1,semester:2,stage:"小学",book:"人教版·数学·一年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m1-07",nameZh:"100以内数的认识",nameEn:"Numbers within 100",year:1,eraId:"L1",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m1-04"],descZh:"认识个位、十位、百位，会比较大小并读写100以内的数。",grade:1,semester:2,stage:"小学",book:"人教版·数学·一年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m1-08",nameZh:"认识人民币",nameEn:"Chinese Currency",year:1,eraId:"L1",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:[],descZh:"认识元、角、分及其进率，进行简单的购物计算。",grade:1,semester:2,stage:"小学",book:"人教版·数学·一年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m1-09",nameZh:"100以内加减法(一)",nameEn:"Add & Sub within 100 (I)",year:1,eraId:"L1",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m1-06"],descZh:"口算整十数加减与两位数加减一位数。",grade:1,semester:2,stage:"小学",book:"人教版·数学·一年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-01",nameZh:"长度单位:厘米与米",nameEn:"Centimeter and Meter",year:2,eraId:"L1",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:[],descZh:"建立1厘米、1米的长度观念，用尺子测量物体长度。",grade:2,semester:1,stage:"小学",book:"人教版·数学·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-02",nameZh:"100以内加减法(二)",nameEn:"Add & Sub within 100 (II)",year:2,eraId:"L1",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m1-09"],descZh:"列竖式计算两位数加减两位数，理解进位与退位的书写规则。",grade:2,semester:1,stage:"小学",book:"人教版·数学·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-03",nameZh:"角的初步认识",nameEn:"Introduction to Angles",year:2,eraId:"L1",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:[],descZh:"认识角、直角、锐角与钝角，学会用三角尺判断和画角。",grade:2,semester:1,stage:"小学",book:"人教版·数学·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-04",nameZh:"表内乘法",nameEn:"Multiplication Table",year:2,eraId:"L1",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m1-02"],descZh:"理解乘法是求几个相同加数和的简便运算，熟记乘法口诀。",grade:2,semester:1,stage:"小学",book:"人教版·数学·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-05",nameZh:"观察物体",nameEn:"Observing Objects",year:2,eraId:"L1",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:[],descZh:"从不同位置观察同一物体，体会看到的形状可能不同。",grade:2,semester:1,stage:"小学",book:"人教版·数学·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-06",nameZh:"认识时间",nameEn:"Telling Time",year:2,eraId:"L1",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:[],descZh:"认识时、分，读写出钟面上的时刻。",grade:2,semester:1,stage:"小学",book:"人教版·数学·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-07",nameZh:"数据收集与整理",nameEn:"Collecting and Sorting Data",year:2,eraId:"L1",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:[],descZh:"用调查、计数等方式收集数据，用简单的表格呈现结果。",grade:2,semester:2,stage:"小学",book:"人教版·数学·二年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-08",nameZh:"表内除法",nameEn:"Division Table",year:2,eraId:"L1",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m2-04"],descZh:"理解平均分与除法的意义，用乘法口诀求商。",grade:2,semester:2,stage:"小学",book:"人教版·数学·二年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-09",nameZh:"图形的运动:对称与平移",nameEn:"Symmetry and Translation",year:2,eraId:"L1",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:[],descZh:"认识轴对称图形，感受平移与旋转现象。",grade:2,semester:2,stage:"小学",book:"人教版·数学·二年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-10",nameZh:"混合运算",nameEn:"Mixed Operations",year:2,eraId:"L1",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m2-02"],descZh:"掌握同级运算从左到右、先乘除后加减的运算顺序。",grade:2,semester:2,stage:"小学",book:"人教版·数学·二年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-11",nameZh:"有余数的除法",nameEn:"Division with Remainder",year:2,eraId:"L1",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m2-08"],descZh:"理解余数必须小于除数，解决简单的周期问题。",grade:2,semester:2,stage:"小学",book:"人教版·数学·二年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-12",nameZh:"万以内数的认识",nameEn:"Numbers within 10,000",year:2,eraId:"L1",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m1-07"],descZh:"认识千位与万位，掌握数的读写、组成与近似数。",grade:2,semester:2,stage:"小学",book:"人教版·数学·二年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m2-13",nameZh:"克与千克",nameEn:"Gram and Kilogram",year:2,eraId:"L1",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:[],descZh:"建立质量单位观念，用秤称量物体并估重。",grade:2,semester:2,stage:"小学",book:"人教版·数学·二年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-01",nameZh:"时、分、秒",nameEn:"Hours, Minutes, Seconds",year:3,eraId:"L2",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m2-06"],descZh:"掌握时间单位间的进率，进行简单的时间计算。",grade:3,semester:1,stage:"小学",book:"人教版·数学·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-02",nameZh:"万以内的加减法",nameEn:"Add & Sub within 10,000",year:3,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m2-12"],descZh:"笔算三位数加减三位数，掌握连续进位与连续退位。",grade:3,semester:1,stage:"小学",book:"人教版·数学·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-03",nameZh:"测量:毫米、分米、千米、吨",nameEn:"Length and Mass Units",year:3,eraId:"L2",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m2-01"],descZh:"建立毫米、分米、千米、吨的观念，进行单位换算。",grade:3,semester:1,stage:"小学",book:"人教版·数学·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-04",nameZh:"倍的认识",nameEn:"Concept of Multiple",year:3,eraId:"L2",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m2-08"],descZh:"理解一个数是另一个数的几倍，用乘除法解决倍数问题。",grade:3,semester:1,stage:"小学",book:"人教版·数学·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-05",nameZh:"多位数乘一位数",nameEn:"Multi-digit × One-digit",year:3,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m2-04"],descZh:"笔算两位数、三位数乘一位数，处理进位问题。",grade:3,semester:1,stage:"小学",book:"人教版·数学·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-06",nameZh:"长方形与正方形",nameEn:"Rectangles and Squares",year:3,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m2-03"],descZh:"掌握长方形、正方形的特征与周长计算。",grade:3,semester:1,stage:"小学",book:"人教版·数学·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-07",nameZh:"分数的初步认识",nameEn:"Introduction to Fractions",year:3,eraId:"L2",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m2-08"],descZh:"把单位1平均分后用几分之几表示，比较同分母分数大小。",grade:3,semester:1,stage:"小学",book:"人教版·数学·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-08",nameZh:"位置与方向(一)",nameEn:"Position and Direction (I)",year:3,eraId:"L2",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:[],descZh:"用东、南、西、北等八个方向描述物体位置。",grade:3,semester:2,stage:"小学",book:"人教版·数学·三年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-09",nameZh:"除数是一位数的除法",nameEn:"Division by One Digit",year:3,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m2-08"],descZh:"笔算两三位数除以一位数，处理商中间或末尾有0的情况。",grade:3,semester:2,stage:"小学",book:"人教版·数学·三年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-10",nameZh:"复式统计表",nameEn:"Compound Statistical Table",year:3,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m2-07"],descZh:"把两组数据合并在一个统计表中，便于对比分析。",grade:3,semester:2,stage:"小学",book:"人教版·数学·三年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-11",nameZh:"两位数乘两位数",nameEn:"Two-digit × Two-digit",year:3,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m3-05"],descZh:"理解竖式第二层积的位移原理，掌握笔算方法。",grade:3,semester:2,stage:"小学",book:"人教版·数学·三年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-12",nameZh:"面积",nameEn:"Area",year:3,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m3-06"],descZh:"认识面积单位，推导并运用长方形、正方形面积公式。",grade:3,semester:2,stage:"小学",book:"人教版·数学·三年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-13",nameZh:"年、月、日",nameEn:"Year, Month, Day",year:3,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m3-01"],descZh:"认识平年闰年、大小月，计算经过的天数。",grade:3,semester:2,stage:"小学",book:"人教版·数学·三年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m3-14",nameZh:"小数的初步认识",nameEn:"Introduction to Decimals",year:3,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m3-07"],descZh:"结合元角分与长度单位理解一位小数的意义。",grade:3,semester:2,stage:"小学",book:"人教版·数学·三年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-01",nameZh:"大数的认识",nameEn:"Large Numbers",year:4,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m2-12"],descZh:"认识亿以内的数，掌握数位顺序表与改写、省略。",grade:4,semester:1,stage:"小学",book:"人教版·数学·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-02",nameZh:"公顷与平方千米",nameEn:"Hectare and Square Kilometer",year:4,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m3-12"],descZh:"建立大面积单位的观念，进行面积单位换算。",grade:4,semester:1,stage:"小学",book:"人教版·数学·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-03",nameZh:"角的度量",nameEn:"Measuring Angles",year:4,eraId:"L2",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m2-03"],descZh:"用量角器测量与画角，认识角的度数单位。",grade:4,semester:1,stage:"小学",book:"人教版·数学·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-04",nameZh:"三位数乘两位数",nameEn:"Three-digit × Two-digit",year:4,eraId:"L2",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m3-11"],descZh:"笔算三位数乘两位数，理解积的变化规律。",grade:4,semester:1,stage:"小学",book:"人教版·数学·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-05",nameZh:"平行四边形与梯形",nameEn:"Parallelograms and Trapezoids",year:4,eraId:"L2",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m3-06"],descZh:"掌握平行四边形、梯形的特征，认识高与底。",grade:4,semester:1,stage:"小学",book:"人教版·数学·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-06",nameZh:"除数是两位数的除法",nameEn:"Division by Two Digits",year:4,eraId:"L2",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m3-09"],descZh:"用四舍五入试商，笔算两位数除法。",grade:4,semester:1,stage:"小学",book:"人教版·数学·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-07",nameZh:"条形统计图",nameEn:"Bar Chart",year:4,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m3-10"],descZh:"用条形统计图表示数量，读取并分析信息。",grade:4,semester:1,stage:"小学",book:"人教版·数学·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-08",nameZh:"四则运算",nameEn:"Four Arithmetic Operations",year:4,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m2-10"],descZh:"系统梳理加减乘除的意义与各部分关系，含括号的运算顺序。",grade:4,semester:2,stage:"小学",book:"人教版·数学·四年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-09",nameZh:"运算定律",nameEn:"Laws of Operations",year:4,eraId:"L2",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m4-08"],descZh:"掌握加法交换律、结合律与乘法交换律、结合律、分配律，用于简便计算。",grade:4,semester:2,stage:"小学",book:"人教版·数学·四年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-10",nameZh:"小数的意义与性质",nameEn:"Meaning and Properties of Decimals",year:4,eraId:"L2",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m3-14"],descZh:"理解小数的计数单位，掌握小数点移动与小数大小比较。",grade:4,semester:2,stage:"小学",book:"人教版·数学·四年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-11",nameZh:"三角形",nameEn:"Triangles",year:4,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m3-06"],descZh:"掌握三角形三边关系、内角和与分类。",grade:4,semester:2,stage:"小学",book:"人教版·数学·四年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-12",nameZh:"小数加减法",nameEn:"Decimal Addition and Subtraction",year:4,eraId:"L2",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m4-10"],descZh:"小数点对齐后按整数加减法计算。",grade:4,semester:2,stage:"小学",book:"人教版·数学·四年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-13",nameZh:"图形的运动(二)",nameEn:"Motion of Figures (II)",year:4,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m2-09"],descZh:"在方格纸上画轴对称图形的另一半，平移图形。",grade:4,semester:2,stage:"小学",book:"人教版·数学·四年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-14",nameZh:"平均数与条形统计图",nameEn:"Mean and Bar Chart",year:4,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m4-07"],descZh:"理解平均数的统计意义，用复式条形图比较数据。",grade:4,semester:2,stage:"小学",book:"人教版·数学·四年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m4-15",nameZh:"鸡兔同笼",nameEn:"Chicken and Rabbit Problem",year:4,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:[],descZh:"用假设法解决经典问题，体会假设—验证的推理方式。",grade:4,semester:2,stage:"小学",book:"人教版·数学·四年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-01",nameZh:"小数乘法",nameEn:"Decimal Multiplication",year:5,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m4-12"],descZh:"按整数乘法计算后再点小数点，理解积的小数位数规律。",grade:5,semester:1,stage:"小学",book:"人教版·数学·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-02",nameZh:"用数对确定位置",nameEn:"Coordinates in the Plane",year:5,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m3-08"],descZh:"用有序数对表示位置，为平面直角坐标系作准备。",grade:5,semester:1,stage:"小学",book:"人教版·数学·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-03",nameZh:"小数除法",nameEn:"Decimal Division",year:5,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m5-01"],descZh:"把除数转化为整数再除，处理商的小数点与循环小数。",grade:5,semester:1,stage:"小学",book:"人教版·数学·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-04",nameZh:"可能性",nameEn:"Probability Intuition",year:5,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:[],descZh:"用一定、可能、不可能描述事件，比较可能性大小。",grade:5,semester:1,stage:"小学",book:"人教版·数学·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-05",nameZh:"简易方程",nameEn:"Simple Equations",year:5,eraId:"L2",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m4-09"],descZh:"用字母表示数，理解等式性质并解ax±b=c型方程。",grade:5,semester:1,stage:"小学",book:"人教版·数学·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-06",nameZh:"多边形的面积",nameEn:"Areas of Polygons",year:5,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m4-05"],descZh:"用割补、拼摆推导平行四边形、三角形、梯形面积公式。",grade:5,semester:1,stage:"小学",book:"人教版·数学·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-07",nameZh:"植树问题",nameEn:"Planting Trees Problem",year:5,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:[],descZh:"区分两端都栽、只栽一端、两端不栽的间隔数与棵数关系。",grade:5,semester:1,stage:"小学",book:"人教版·数学·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-08",nameZh:"因数与倍数",nameEn:"Factors and Multiples",year:5,eraId:"L2",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m4-09"],descZh:"认识因数、倍数、质数与合数，掌握2、3、5的倍数特征。",grade:5,semester:2,stage:"小学",book:"人教版·数学·五年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-09",nameZh:"长方体和正方体",nameEn:"Cuboids and Cubes",year:5,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m3-12"],descZh:"认识立体图形的表面积与体积，掌握体积单位换算。",grade:5,semester:2,stage:"小学",book:"人教版·数学·五年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-10",nameZh:"分数的意义与性质",nameEn:"Meaning and Properties of Fractions",year:5,eraId:"L2",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m3-07"],descZh:"理解单位1与分数单位，掌握约分、通分与分数与小数互化。",grade:5,semester:2,stage:"小学",book:"人教版·数学·五年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-11",nameZh:"分数加减法",nameEn:"Fraction Addition and Subtraction",year:5,eraId:"L2",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m5-10"],descZh:"异分母分数先通分再加减，结果化成最简分数。",grade:5,semester:2,stage:"小学",book:"人教版·数学·五年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-12",nameZh:"折线统计图",nameEn:"Line Chart",year:5,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m4-14"],descZh:"用折线图表示数据变化趋势，比较单式与复式折线图。",grade:5,semester:2,stage:"小学",book:"人教版·数学·五年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m5-13",nameZh:"找次品",nameEn:"Finding the Defective Item",year:5,eraId:"L2",categoryId:"math",importance:1,faces:4,shape:"tetrahedron",prereqs:[],descZh:"用天平称量，通过分组策略用最少次数找出次品。",grade:5,semester:2,stage:"小学",book:"人教版·数学·五年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m6-01",nameZh:"分数乘法",nameEn:"Fraction Multiplication",year:6,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m5-11"],descZh:"理解分数乘整数、分数乘分数的意义与计算方法。",grade:6,semester:1,stage:"小学",book:"人教版·数学·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m6-02",nameZh:"位置与方向(二)",nameEn:"Position and Direction (II)",year:6,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m5-02"],descZh:"用方向和距离精确描述位置，绘制路线图。",grade:6,semester:1,stage:"小学",book:"人教版·数学·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m6-03",nameZh:"分数除法",nameEn:"Fraction Division",year:6,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m6-01"],descZh:"除以一个数等于乘它的倒数，解决分数乘除实际问题。",grade:6,semester:1,stage:"小学",book:"人教版·数学·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m6-04",nameZh:"比",nameEn:"Ratio",year:6,eraId:"L2",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m5-10"],descZh:"理解比的意义与基本性质，化简比并按比分配。",grade:6,semester:1,stage:"小学",book:"人教版·数学·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m6-05",nameZh:"圆",nameEn:"Circles",year:6,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m3-12"],descZh:"认识圆心、半径、直径，计算圆的周长与面积。",grade:6,semester:1,stage:"小学",book:"人教版·数学·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m6-06",nameZh:"百分数(一)",nameEn:"Percentages (I)",year:6,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m6-04"],descZh:"理解百分数的意义，进行分数、小数、百分数互化。",grade:6,semester:1,stage:"小学",book:"人教版·数学·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m6-07",nameZh:"扇形统计图",nameEn:"Pie Chart",year:6,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m6-06"],descZh:"用扇形表示各部分占总数的百分比。",grade:6,semester:1,stage:"小学",book:"人教版·数学·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m6-08",nameZh:"负数",nameEn:"Negative Numbers",year:6,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m4-01"],descZh:"用正负数表示相反意义的量，在数轴上表示数。",grade:6,semester:2,stage:"小学",book:"人教版·数学·六年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m6-09",nameZh:"圆柱与圆锥",nameEn:"Cylinders and Cones",year:6,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m6-05","m5-09"],descZh:"计算圆柱表面积、体积与圆锥体积，理解三分之一关系。",grade:6,semester:2,stage:"小学",book:"人教版·数学·六年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m6-10",nameZh:"比例",nameEn:"Proportion",year:6,eraId:"L2",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m6-04"],descZh:"理解比例的基本性质，解比例并认识正比例、反比例。",grade:6,semester:2,stage:"小学",book:"人教版·数学·六年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m6-11",nameZh:"小升初总复习",nameEn:"Primary School Review",year:6,eraId:"L2",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m6-03","m6-08","m6-10"],descZh:"系统梳理小学六年的数与代数、图形与几何、统计与概率。",grade:6,semester:2,stage:"小学",book:"人教版·数学·六年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m7-01",nameZh:"有理数",nameEn:"Rational Numbers",year:7,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m6-08"],descZh:"建立有理数体系，掌握数轴、相反数、绝对值与有理数四则运算。",grade:7,semester:1,stage:"初中",book:"人教版·数学·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m7-02",nameZh:"整式的加减",nameEn:"Adding and Subtracting Polynomials",year:7,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m7-01"],descZh:"用字母表示数，识别单项式、多项式的次数与项，合并同类项。",grade:7,semester:1,stage:"初中",book:"人教版·数学·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m7-03",nameZh:"一元一次方程",nameEn:"Linear Equations in One Variable",year:7,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m7-02"],descZh:"用等式性质解ax+b=c型方程，列方程解决实际问题。",grade:7,semester:1,stage:"初中",book:"人教版·数学·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m7-04",nameZh:"几何图形初步",nameEn:"Introduction to Geometry",year:7,eraId:"L3",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m4-03"],descZh:"认识点、线、面、体，掌握直线、射线、线段与角的度量。",grade:7,semester:1,stage:"初中",book:"人教版·数学·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m7-05",nameZh:"相交线与平行线",nameEn:"Intersecting and Parallel Lines",year:7,eraId:"L3",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m7-04"],descZh:"掌握对顶角、邻补角性质与平行线的判定和性质。",grade:7,semester:2,stage:"初中",book:"人教版·数学·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m7-06",nameZh:"实数",nameEn:"Real Numbers",year:7,eraId:"L3",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m7-01"],descZh:"认识平方根、立方根与无理数，建立实数与数轴的一一对应。",grade:7,semester:2,stage:"初中",book:"人教版·数学·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m7-07",nameZh:"平面直角坐标系",nameEn:"Cartesian Coordinate System",year:7,eraId:"L3",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m5-02"],descZh:"用有序数对刻画点的位置，理解象限与坐标平移规律。",grade:7,semester:2,stage:"初中",book:"人教版·数学·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m7-08",nameZh:"二元一次方程组",nameEn:"Systems of Linear Equations",year:7,eraId:"L3",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m7-03"],descZh:"用代入消元法、加减消元法解方程组并解决实际问题。",grade:7,semester:2,stage:"初中",book:"人教版·数学·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m7-09",nameZh:"不等式与不等式组",nameEn:"Inequalities",year:7,eraId:"L3",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m7-03"],descZh:"理解不等式性质，解一元一次不等式(组)并在数轴上表示解集。",grade:7,semester:2,stage:"初中",book:"人教版·数学·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m7-10",nameZh:"数据的收集、整理与描述",nameEn:"Data Collection and Description",year:7,eraId:"L3",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m5-12"],descZh:"设计调查问卷，用统计图表描述数据，理解抽样与总体。",grade:7,semester:2,stage:"初中",book:"人教版·数学·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m8-01",nameZh:"全等三角形",nameEn:"Congruent Triangles",year:8,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m7-05"],descZh:"掌握SSS、SAS、ASA、AAS、HL判定，用全等证明线段与角相等。",grade:8,semester:1,stage:"初中",book:"人教版·数学·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m8-02",nameZh:"轴对称",nameEn:"Axial Symmetry",year:8,eraId:"L3",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m8-01"],descZh:"理解轴对称的性质，掌握等腰三角形与等边三角形的性质。",grade:8,semester:1,stage:"初中",book:"人教版·数学·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m8-03",nameZh:"整式的乘法与因式分解",nameEn:"Polynomial Multiplication and Factoring",year:8,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m7-02"],descZh:"掌握幂的运算、乘法公式，用提公因式法与公式法分解因式。",grade:8,semester:1,stage:"初中",book:"人教版·数学·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m8-04",nameZh:"分式",nameEn:"Rational Expressions",year:8,eraId:"L3",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m8-03"],descZh:"掌握分式的基本性质、四则运算与分式方程的解法。",grade:8,semester:1,stage:"初中",book:"人教版·数学·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m8-05",nameZh:"二次根式",nameEn:"Quadratic Radicals",year:8,eraId:"L3",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m7-06"],descZh:"掌握二次根式的性质、化简与四则运算。",grade:8,semester:2,stage:"初中",book:"人教版·数学·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m8-06",nameZh:"勾股定理",nameEn:"Pythagorean Theorem",year:8,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m8-01"],descZh:"掌握勾股定理及其逆定理，解决距离与最短路径问题。",grade:8,semester:2,stage:"初中",book:"人教版·数学·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m8-07",nameZh:"平行四边形",nameEn:"Parallelograms",year:8,eraId:"L3",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m8-01"],descZh:"掌握平行四边形、矩形、菱形、正方形的判定与性质。",grade:8,semester:2,stage:"初中",book:"人教版·数学·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m8-08",nameZh:"一次函数",nameEn:"Linear Functions",year:8,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m7-07"],descZh:"理解一次函数的解析式、图象与性质，用函数观点看方程与不等式。",grade:8,semester:2,stage:"初中",book:"人教版·数学·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m8-09",nameZh:"数据的分析",nameEn:"Data Analysis",year:8,eraId:"L3",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m7-10"],descZh:"计算平均数、中位数、众数与方差，用统计量刻画数据波动。",grade:8,semester:2,stage:"初中",book:"人教版·数学·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m9-01",nameZh:"一元二次方程",nameEn:"Quadratic Equations",year:9,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m8-03"],descZh:"掌握配方法、公式法、因式分解法，用判别式判断根的情况。",grade:9,semester:1,stage:"初中",book:"人教版·数学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m9-02",nameZh:"二次函数",nameEn:"Quadratic Functions",year:9,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m9-01","m8-08"],descZh:"掌握抛物线的开口、顶点、对称轴，用二次函数解决最值问题。",grade:9,semester:1,stage:"初中",book:"人教版·数学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m9-03",nameZh:"旋转",nameEn:"Rotation",year:9,eraId:"L3",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m8-02"],descZh:"理解旋转的性质，认识中心对称与中心对称图形。",grade:9,semester:1,stage:"初中",book:"人教版·数学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m9-04",nameZh:"圆",nameEn:"Circles (Junior)",year:9,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m6-05","m8-06"],descZh:"掌握垂径定理、圆周角定理、切线的判定与性质。",grade:9,semester:1,stage:"初中",book:"人教版·数学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m9-05",nameZh:"概率初步",nameEn:"Introduction to Probability",year:9,eraId:"L3",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m5-04"],descZh:"用列举法、列表法、树状图求等可能事件的概率。",grade:9,semester:1,stage:"初中",book:"人教版·数学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m9-06",nameZh:"反比例函数",nameEn:"Inverse Proportional Functions",year:9,eraId:"L3",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m8-08"],descZh:"掌握反比例函数的图象与性质，理解k的几何意义。",grade:9,semester:2,stage:"初中",book:"人教版·数学·九年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m9-07",nameZh:"相似",nameEn:"Similarity",year:9,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m9-04"],descZh:"掌握相似三角形的判定与性质，用相似测量与证明。",grade:9,semester:2,stage:"初中",book:"人教版·数学·九年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m9-08",nameZh:"锐角三角函数",nameEn:"Trigonometric Ratios",year:9,eraId:"L3",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m9-07","m8-06"],descZh:"掌握正弦、余弦、正切的定义与特殊角的值，解直角三角形。",grade:9,semester:2,stage:"初中",book:"人教版·数学·九年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m9-09",nameZh:"投影与视图",nameEn:"Projection and Views",year:9,eraId:"L3",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:[],descZh:"认识三视图，由立体图形画视图、由视图想象立体图形。",grade:9,semester:2,stage:"初中",book:"人教版·数学·九年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m9-10",nameZh:"中考总复习",nameEn:"Junior High Review",year:9,eraId:"L3",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m9-02","m9-08"],descZh:"按数与式、方程与不等式、函数、图形、统计概率五大板块系统复习。",grade:9,semester:2,stage:"初中",book:"人教版·数学·九年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"m10-01",nameZh:"集合与常用逻辑用语",nameEn:"Sets and Logic",year:10,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m9-02"],descZh:"理解集合的表示与运算，掌握充分条件、必要条件与量词。",grade:10,semester:1,stage:"高中",book:"人教A版·数学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"m10-02",nameZh:"一元二次函数、方程和不等式",nameEn:"Quadratics, Equations and Inequalities",year:10,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m9-01"],descZh:"用二次函数观点统一处理方程与不等式，掌握基本不等式。",grade:10,semester:1,stage:"高中",book:"人教A版·数学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"m10-03",nameZh:"函数的概念与性质",nameEn:"Functions: Concept and Properties",year:10,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m8-08"],descZh:"理解函数三要素、单调性、奇偶性，建立函数研究的通用框架。",grade:10,semester:1,stage:"高中",book:"人教A版·数学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"m10-04",nameZh:"指数函数与对数函数",nameEn:"Exponential and Logarithmic Functions",year:10,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m10-03"],descZh:"掌握指数、对数运算与两类函数的图象性质及增长差异。",grade:10,semester:1,stage:"高中",book:"人教A版·数学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"m10-05",nameZh:"三角函数",nameEn:"Trigonometric Functions",year:10,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m9-08","m10-03"],descZh:"用单位圆定义三角函数，掌握诱导公式、图象变换与恒等变换。",grade:10,semester:1,stage:"高中",book:"人教A版·数学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"m10-06",nameZh:"平面向量",nameEn:"Plane Vectors",year:10,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m10-05"],descZh:"掌握向量的线性运算、数量积与坐标表示，用它处理几何问题。",grade:10,semester:2,stage:"高中",book:"人教A版·数学·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"m10-07",nameZh:"复数",nameEn:"Complex Numbers",year:10,eraId:"L4",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m7-06"],descZh:"理解复数的代数形式与几何意义，掌握四则运算。",grade:10,semester:2,stage:"高中",book:"人教A版·数学·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"m10-08",nameZh:"立体几何初步",nameEn:"Solid Geometry",year:10,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m9-04"],descZh:"认识空间几何体，掌握点线面位置关系的判定与性质。",grade:10,semester:2,stage:"高中",book:"人教A版·数学·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"m10-09",nameZh:"统计",nameEn:"Statistics",year:10,eraId:"L4",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m8-09"],descZh:"掌握抽样方法、频率分布直方图与百分位数，理解统计推断思想。",grade:10,semester:2,stage:"高中",book:"人教A版·数学·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"m10-10",nameZh:"概率",nameEn:"Probability",year:10,eraId:"L4",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m9-05"],descZh:"理解样本空间、事件的运算，掌握古典概型与独立性。",grade:10,semester:2,stage:"高中",book:"人教A版·数学·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"m11-01",nameZh:"空间向量与立体几何",nameEn:"Space Vectors and Solid Geometry",year:11,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m10-06","m10-08"],descZh:"用空间向量求线面角、二面角与距离，实现几何问题代数化。",grade:11,semester:1,stage:"高中",book:"人教A版·数学·选择性必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"m11-02",nameZh:"直线和圆的方程",nameEn:"Equations of Lines and Circles",year:11,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m7-07","m9-04"],descZh:"掌握直线方程的各种形式与圆的标准方程，用代数方法研究位置关系。",grade:11,semester:1,stage:"高中",book:"人教A版·数学·选择性必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"m11-03",nameZh:"圆锥曲线",nameEn:"Conic Sections",year:11,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m11-02","m9-07"],descZh:"掌握椭圆、双曲线、抛物线的定义、标准方程与几何性质。",grade:11,semester:1,stage:"高中",book:"人教A版·数学·选择性必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"m11-04",nameZh:"数列",nameEn:"Sequences",year:11,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m10-03"],descZh:"掌握等差数列、等比数列的通项与求和，理解递推思想。",grade:11,semester:1,stage:"高中",book:"人教A版·数学·选择性必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"m11-05",nameZh:"一元函数的导数及其应用",nameEn:"Derivatives",year:11,eraId:"L4",categoryId:"math",importance:5,faces:20,shape:"icosahedron",prereqs:["m10-03"],descZh:"理解导数的几何与物理意义，用导数研究单调性、极值与最值。",grade:11,semester:2,stage:"高中",book:"人教A版·数学·选择性必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"m11-06",nameZh:"计数原理",nameEn:"Counting Principles",year:11,eraId:"L4",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m9-05"],descZh:"掌握分类加法、分步乘法计数原理与排列组合、二项式定理。",grade:11,semester:2,stage:"高中",book:"人教A版·数学·选择性必修第三册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"m11-07",nameZh:"随机变量及其分布",nameEn:"Random Variables and Distributions",year:11,eraId:"L4",categoryId:"math",importance:4,faces:12,shape:"dodecahedron",prereqs:["m11-06","m10-10"],descZh:"掌握离散型随机变量的分布列、期望方差与二项分布、正态分布。",grade:11,semester:2,stage:"高中",book:"人教A版·数学·选择性必修第三册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"m11-08",nameZh:"成对数据的统计分析",nameEn:"Bivariate Statistical Analysis",year:11,eraId:"L4",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m10-09"],descZh:"用相关系数与一元线性回归模型刻画变量间关系，理解独立性检验。",grade:11,semester:2,stage:"高中",book:"人教A版·数学·选择性必修第三册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"m12-01",nameZh:"高考专题:函数与导数",nameEn:"Gaokao: Functions and Derivatives",year:12,eraId:"L4",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m11-05"],descZh:"以导数工具处理单调性讨论、极值最值、不等式证明与零点问题。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"m12-02",nameZh:"高考专题:数列与不等式",nameEn:"Gaokao: Sequences and Inequalities",year:12,eraId:"L4",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m11-04"],descZh:"掌握错位相减、裂项相消等求和方法与数列不等式的放缩技巧。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"m12-03",nameZh:"高考专题:解析几何",nameEn:"Gaokao: Analytic Geometry",year:12,eraId:"L4",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m11-03"],descZh:"以韦达定理与设而不求处理直线与圆锥曲线的综合问题。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"m12-04",nameZh:"高考专题:立体几何与概率统计",nameEn:"Gaokao: Geometry and Probability",year:12,eraId:"L4",categoryId:"math",importance:3,faces:8,shape:"octahedron",prereqs:["m11-01","m11-07"],descZh:"规范空间向量解法步骤，掌握分布列与统计案例的完整答题结构。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"m12-05",nameZh:"数学建模与探究",nameEn:"Mathematical Modeling",year:12,eraId:"L4",categoryId:"math",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["m11-05"],descZh:"从实际问题抽象出数学模型，经历建模、求解、检验、反思的完整过程。",grade:12,semester:2,stage:"高中",book:"高中数学建模活动",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"en3-01",nameZh:"字母与音标",nameEn:"Alphabet and Phonics",year:3,eraId:"L2",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:[],descZh:"掌握26个字母的大小写、书写规范与常见字母组合的发音。",grade:3,semester:1,stage:"小学",book:"人教版·英语·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en3-02",nameZh:"问候与自我介绍",nameEn:"Greetings and Self-introduction",year:3,eraId:"L2",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en3-01"],descZh:"用Hello、My name is…、How are you等句式完成初次交流。",grade:3,semester:1,stage:"小学",book:"人教版·英语·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en3-03",nameZh:"数字与颜色",nameEn:"Numbers and Colors",year:3,eraId:"L2",categoryId:"english",importance:3,faces:8,shape:"octahedron",prereqs:["en3-01"],descZh:"认读1—20与基本颜色词，能用How many…问答。",grade:3,semester:2,stage:"小学",book:"人教版·英语·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en4-01",nameZh:"家庭成员与学校场所",nameEn:"Family and School",year:4,eraId:"L2",categoryId:"english",importance:3,faces:8,shape:"octahedron",prereqs:["en3-02"],descZh:"掌握family members与classroom objects词汇，用This is…介绍。",grade:4,semester:1,stage:"小学",book:"人教版·英语·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en4-02",nameZh:"一般现在时",nameEn:"Simple Present Tense",year:4,eraId:"L2",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en3-02"],descZh:"理解一般现在时表示习惯与事实，掌握be动词与实义动词的肯定、否定、疑问。",grade:4,semester:1,stage:"小学",book:"人教版·英语·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en4-03",nameZh:"名词单复数",nameEn:"Singular and Plural Nouns",year:4,eraId:"L2",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en3-03"],descZh:"掌握规则变化与常见不规则复数形式，注意不可数名词。",grade:4,semester:2,stage:"小学",book:"人教版·英语·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en5-01",nameZh:"时间表达",nameEn:"Telling Time in English",year:5,eraId:"L2",categoryId:"english",importance:3,faces:8,shape:"octahedron",prereqs:["en3-03"],descZh:"用What time is it?与顺读法、逆读法表达时刻。",grade:5,semester:1,stage:"小学",book:"人教版·英语·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en5-02",nameZh:"一般现在时第三人称单数",nameEn:"Third Person Singular",year:5,eraId:"L2",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en4-02"],descZh:"掌握动词加-s/-es的变化规则与读音。",grade:5,semester:1,stage:"小学",book:"人教版·英语·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en5-03",nameZh:"情态动词can",nameEn:"Modal Verb Can",year:5,eraId:"L2",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en4-02"],descZh:"用can表达能力与请求，掌握其否定与疑问形式。",grade:5,semester:2,stage:"小学",book:"人教版·英语·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en6-01",nameZh:"一般过去时",nameEn:"Simple Past Tense",year:6,eraId:"L2",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en4-02"],descZh:"掌握动词过去式的规则与不规则变化，叙述过去发生的事。",grade:6,semester:1,stage:"小学",book:"人教版·英语·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en6-02",nameZh:"形容词比较级",nameEn:"Comparative Adjectives",year:6,eraId:"L2",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en4-03"],descZh:"掌握比较级的构成规则与than句式。",grade:6,semester:1,stage:"小学",book:"人教版·英语·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en6-03",nameZh:"be going to 结构",nameEn:"Be Going To",year:6,eraId:"L2",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en6-01"],descZh:"表达计划与预测，与will用法作初步对比。",grade:6,semester:2,stage:"小学",book:"人教版·英语·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en7-01",nameZh:"be动词与一般现在时",nameEn:"Be Verbs and Present Simple",year:7,eraId:"L3",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en4-02"],descZh:"系统梳理am/is/are与实义动词的句型转换，建立英语时态框架起点。",grade:7,semester:1,stage:"初中",book:"人教版·英语·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en7-02",nameZh:"人称代词与物主代词",nameEn:"Personal and Possessive Pronouns",year:7,eraId:"L3",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en4-01"],descZh:"区分主格、宾格、形容词性物主代词与名词性物主代词。",grade:7,semester:1,stage:"初中",book:"人教版·英语·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en7-03",nameZh:"一般过去时进阶",nameEn:"Past Tense Advanced",year:7,eraId:"L3",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en6-01"],descZh:"掌握there be的过去式与过去时的时间状语搭配。",grade:7,semester:2,stage:"初中",book:"人教版·英语·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en7-04",nameZh:"情态动词",nameEn:"Modal Verbs",year:7,eraId:"L3",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en5-03"],descZh:"掌握can、must、may、have to的意义与用法差异。",grade:7,semester:2,stage:"初中",book:"人教版·英语·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en7-05",nameZh:"阅读理解:细节理解",nameEn:"Reading: Detail Questions",year:7,eraId:"L3",categoryId:"english",importance:3,faces:8,shape:"octahedron",prereqs:["en3-02"],descZh:"用题干关键词定位原文，排除偷换概念与范围扩大的干扰项。",grade:7,semester:2,stage:"初中",book:"人教版·英语·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en8-01",nameZh:"现在进行时",nameEn:"Present Continuous",year:8,eraId:"L3",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en7-01"],descZh:"掌握be+doing结构与动词-ing变化，区分与一般现在时的用法。",grade:8,semester:1,stage:"初中",book:"人教版·英语·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en8-02",nameZh:"一般将来时",nameEn:"Simple Future",year:8,eraId:"L3",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en6-03"],descZh:"掌握will与be going to的区别及时间状语。",grade:8,semester:1,stage:"初中",book:"人教版·英语·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en8-03",nameZh:"比较级与最高级",nameEn:"Comparatives and Superlatives",year:8,eraId:"L3",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en6-02"],descZh:"掌握三级变化规则与常用比较句型(as…as, the most…)。",grade:8,semester:1,stage:"初中",book:"人教版·英语·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en8-04",nameZh:"宾语从句",nameEn:"Object Clauses",year:8,eraId:"L3",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en7-01"],descZh:"掌握引导词选择、语序还原与时态呼应的三原则。",grade:8,semester:2,stage:"初中",book:"人教版·英语·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en8-05",nameZh:"阅读理解:主旨大意",nameEn:"Reading: Main Idea",year:8,eraId:"L3",categoryId:"english",importance:3,faces:8,shape:"octahedron",prereqs:["en7-05"],descZh:"通过首尾段、反复出现的关键词归纳文章主旨与标题。",grade:8,semester:2,stage:"初中",book:"人教版·英语·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en9-01",nameZh:"现在完成时",nameEn:"Present Perfect",year:9,eraId:"L3",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en6-01"],descZh:"掌握have/has+过去分词，区分与一般过去时的时间意义。",grade:9,semester:1,stage:"初中",book:"人教版·英语·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en9-02",nameZh:"被动语态",nameEn:"Passive Voice",year:9,eraId:"L3",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en8-01"],descZh:"掌握各时态的被动结构，判断何时需要使用被动。",grade:9,semester:1,stage:"初中",book:"人教版·英语·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en9-03",nameZh:"定语从句",nameEn:"Attributive Clauses",year:9,eraId:"L3",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en8-04"],descZh:"掌握who、which、that的选用与先行词的对应关系。",grade:9,semester:1,stage:"初中",book:"人教版·英语·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en9-04",nameZh:"宾语从句进阶",nameEn:"Object Clauses Advanced",year:9,eraId:"L3",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en8-04"],descZh:"处理含宾语从句的复合句转换与中考常见考法。",grade:9,semester:2,stage:"初中",book:"人教版·英语·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"en10-01",nameZh:"定语从句进阶",nameEn:"Attributive Clauses Advanced",year:10,eraId:"L4",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en9-03"],descZh:"掌握关系副词where、when、why与介词+which结构。",grade:10,semester:1,stage:"高中",book:"人教版·英语·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"en10-02",nameZh:"名词性从句",nameEn:"Noun Clauses",year:10,eraId:"L4",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en8-04"],descZh:"区分主语、宾语、表语、同位语从句，掌握that与what的选用。",grade:10,semester:1,stage:"高中",book:"人教版·英语·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"en10-03",nameZh:"非谓语动词:不定式与动名词",nameEn:"Infinitives and Gerunds",year:10,eraId:"L4",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en10-01"],descZh:"掌握to do与doing作主语、宾语、表语时的意义差异。",grade:10,semester:2,stage:"高中",book:"人教版·英语·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"en10-04",nameZh:"完形填空技巧",nameEn:"Cloze Test Strategies",year:10,eraId:"L4",categoryId:"english",importance:3,faces:8,shape:"octahedron",prereqs:["en8-05"],descZh:"先通读抓主线，再依据上下文逻辑、搭配与情感色彩逐空判断。",grade:10,semester:2,stage:"高中",book:"人教版·英语·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"en11-01",nameZh:"非谓语动词:分词",nameEn:"Participles",year:11,eraId:"L4",categoryId:"english",importance:5,faces:20,shape:"icosahedron",prereqs:["en10-03"],descZh:"掌握现在分词与过去分词作定语、状语、补语时的主动被动区别。",grade:11,semester:1,stage:"高中",book:"人教版·英语·选择性必修",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"en11-02",nameZh:"虚拟语气",nameEn:"Subjunctive Mood",year:11,eraId:"L4",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en9-01"],descZh:"掌握if条件句、wish、as if等结构中的虚拟形式。",grade:11,semester:1,stage:"高中",book:"人教版·英语·选择性必修",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"en11-03",nameZh:"倒装与强调",nameEn:"Inversion and Emphasis",year:11,eraId:"L4",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en10-02"],descZh:"掌握部分倒装、完全倒装与it强调句的结构与识别。",grade:11,semester:2,stage:"高中",book:"人教版·英语·选择性必修",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"en11-04",nameZh:"读后续写入门",nameEn:"Continuation Writing (Intro)",year:11,eraId:"L4",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en10-04"],descZh:"依据前文人物性格与情节线索设计合理发展，注意动作与心理描写。",grade:11,semester:2,stage:"高中",book:"人教版·英语·选择性必修",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"en12-01",nameZh:"应用文写作",nameEn:"Practical Writing",year:12,eraId:"L4",categoryId:"english",importance:3,faces:8,shape:"octahedron",prereqs:["en11-04"],descZh:"掌握书信、通知、演讲稿等体裁的格式与礼貌用语。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"en12-02",nameZh:"读后续写进阶",nameEn:"Continuation Writing (Advanced)",year:12,eraId:"L4",categoryId:"english",importance:4,faces:12,shape:"dodecahedron",prereqs:["en11-04"],descZh:"训练情感升华与首尾呼应，控制语言复杂度与语法准确性。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"en12-03",nameZh:"语法填空与七选五",nameEn:"Grammar Fill and Seven-Choice",year:12,eraId:"L4",categoryId:"english",importance:3,faces:8,shape:"octahedron",prereqs:["en11-01"],descZh:"从句子成分与篇章逻辑双线索切入，稳定得分率。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"en12-04",nameZh:"高考听力与阅读策略",nameEn:"Listening and Reading Strategies",year:12,eraId:"L4",categoryId:"english",importance:3,faces:8,shape:"octahedron",prereqs:["en10-04"],descZh:"抓取听力信号词，按题型分配阅读时间与答题顺序。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ph8-01",nameZh:"机械运动",nameEn:"Mechanical Motion",year:8,eraId:"L3",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:[],descZh:"理解参照物、路程与时间，用速度公式v=s/t描述运动快慢。",grade:8,semester:1,stage:"初中",book:"人教版·物理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph8-02",nameZh:"声现象",nameEn:"Sound",year:8,eraId:"L3",categoryId:"physics",importance:3,faces:8,shape:"octahedron",prereqs:[],descZh:"认识声音的产生与传播条件，理解音调、响度、音色三要素。",grade:8,semester:1,stage:"初中",book:"人教版·物理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph8-03",nameZh:"物态变化",nameEn:"Changes of State",year:8,eraId:"L3",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:[],descZh:"掌握熔化凝固、汽化液化、升华凝华六种变化及吸放热规律。",grade:8,semester:1,stage:"初中",book:"人教版·物理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph8-04",nameZh:"光现象",nameEn:"Light Phenomena",year:8,eraId:"L3",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:[],descZh:"理解光的直线传播、反射定律与平面镜成像特点。",grade:8,semester:1,stage:"初中",book:"人教版·物理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph8-05",nameZh:"透镜及其应用",nameEn:"Lenses",year:8,eraId:"L3",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph8-04"],descZh:"掌握凸透镜成像规律，理解照相机、投影仪、放大镜与近视远视矫正。",grade:8,semester:1,stage:"初中",book:"人教版·物理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph8-06",nameZh:"质量与密度",nameEn:"Mass and Density",year:8,eraId:"L3",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:[],descZh:"用天平和量筒测质量与体积，掌握ρ=m/V及密度鉴别的应用。",grade:8,semester:1,stage:"初中",book:"人教版·物理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph8-07",nameZh:"力",nameEn:"Force",year:8,eraId:"L3",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:[],descZh:"认识力的三要素与作用效果，掌握重力、弹力、摩擦力的特点。",grade:8,semester:2,stage:"初中",book:"人教版·物理·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph8-08",nameZh:"运动和力",nameEn:"Motion and Force",year:8,eraId:"L3",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph8-07","ph8-01"],descZh:"掌握牛顿第一定律、惯性概念与二力平衡条件。",grade:8,semester:2,stage:"初中",book:"人教版·物理·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph8-09",nameZh:"压强",nameEn:"Pressure",year:8,eraId:"L3",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph8-08"],descZh:"掌握p=F/S与液体压强公式p=ρgh，理解大气压与流体压强。",grade:8,semester:2,stage:"初中",book:"人教版·物理·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph8-10",nameZh:"浮力",nameEn:"Buoyancy",year:8,eraId:"L3",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph8-09"],descZh:"掌握阿基米德原理与物体浮沉条件，解决密度计、轮船等问题。",grade:8,semester:2,stage:"初中",book:"人教版·物理·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph8-11",nameZh:"功和机械能",nameEn:"Work and Mechanical Energy",year:8,eraId:"L3",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph8-08"],descZh:"理解功、功率、动能、势能的概念与机械能转化。",grade:8,semester:2,stage:"初中",book:"人教版·物理·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph8-12",nameZh:"简单机械",nameEn:"Simple Machines",year:8,eraId:"L3",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph8-11"],descZh:"掌握杠杆平衡条件、滑轮组特点与机械效率的计算。",grade:8,semester:2,stage:"初中",book:"人教版·物理·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph9-01",nameZh:"内能",nameEn:"Internal Energy",year:9,eraId:"L3",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph8-03"],descZh:"理解分子热运动、内能概念与改变内能的两种方式。",grade:9,semester:1,stage:"初中",book:"人教版·物理·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph9-02",nameZh:"内能的利用",nameEn:"Utilization of Internal Energy",year:9,eraId:"L3",categoryId:"physics",importance:3,faces:8,shape:"octahedron",prereqs:["ph9-01"],descZh:"理解热机工作原理、热值、热机效率与能量守恒定律。",grade:9,semester:1,stage:"初中",book:"人教版·物理·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph9-03",nameZh:"电流和电路",nameEn:"Current and Circuits",year:9,eraId:"L3",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:[],descZh:"认识电荷、电流方向与串并联电路，学会画电路图与连接实物。",grade:9,semester:1,stage:"初中",book:"人教版·物理·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph9-04",nameZh:"电压与电阻",nameEn:"Voltage and Resistance",year:9,eraId:"L3",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph9-03"],descZh:"掌握电压表、电流表的使用与影响电阻大小的因素。",grade:9,semester:1,stage:"初中",book:"人教版·物理·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph9-05",nameZh:"欧姆定律",nameEn:"Ohm's Law",year:9,eraId:"L3",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph9-04"],descZh:"掌握I=U/R及串并联电路规律，完成伏安法测电阻实验。",grade:9,semester:1,stage:"初中",book:"人教版·物理·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph9-06",nameZh:"电功率",nameEn:"Electric Power",year:9,eraId:"L3",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph9-05"],descZh:"掌握P=UI与焦耳定律，计算用电器功率与电能消耗。",grade:9,semester:1,stage:"初中",book:"人教版·物理·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph9-07",nameZh:"电与磁",nameEn:"Electricity and Magnetism",year:9,eraId:"L3",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph9-06"],descZh:"理解磁场、电流的磁效应、电磁铁与电动机、发电机原理。",grade:9,semester:1,stage:"初中",book:"人教版·物理·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph9-08",nameZh:"信息的传递",nameEn:"Information Transmission",year:9,eraId:"L3",categoryId:"physics",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ph9-07"],descZh:"了解电磁波、电话、广播电视与移动通信的基本原理。",grade:9,semester:1,stage:"初中",book:"人教版·物理·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph9-09",nameZh:"能源与可持续发展",nameEn:"Energy and Sustainability",year:9,eraId:"L3",categoryId:"physics",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ph9-02"],descZh:"区分可再生能源与不可再生能源，认识核能与能量转移的方向性。",grade:9,semester:1,stage:"初中",book:"人教版·物理·九年级全一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"ph10-01",nameZh:"运动的描述与匀变速直线运动",nameEn:"Kinematics",year:10,eraId:"L4",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph8-01"],descZh:"用位移、速度、加速度描述运动，掌握匀变速运动的三个基本公式与图象。",grade:10,semester:1,stage:"高中",book:"人教版·物理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ph10-02",nameZh:"相互作用:力与受力分析",nameEn:"Forces and Free-body Diagrams",year:10,eraId:"L4",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph8-07"],descZh:"掌握重力、弹力、摩擦力的定量计算与力的合成分解、正交分解法。",grade:10,semester:1,stage:"高中",book:"人教版·物理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ph10-03",nameZh:"牛顿运动定律",nameEn:"Newton's Laws of Motion",year:10,eraId:"L4",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph8-08","ph10-02"],descZh:"用F=ma解决动力学两类基本问题，理解超重与失重。",grade:10,semester:1,stage:"高中",book:"人教版·物理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ph10-04",nameZh:"曲线运动与抛体运动",nameEn:"Curvilinear and Projectile Motion",year:10,eraId:"L4",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph10-03"],descZh:"用运动的合成与分解处理平抛运动，理解曲线运动的条件。",grade:10,semester:2,stage:"高中",book:"人教版·物理·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ph10-05",nameZh:"圆周运动",nameEn:"Circular Motion",year:10,eraId:"L4",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph10-04"],descZh:"掌握线速度、角速度、向心加速度与向心力公式。",grade:10,semester:2,stage:"高中",book:"人教版·物理·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ph10-06",nameZh:"万有引力与航天",nameEn:"Gravitation and Spaceflight",year:10,eraId:"L4",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph10-05"],descZh:"掌握万有引力定律，推导天体质量、密度与卫星运行参量。",grade:10,semester:2,stage:"高中",book:"人教版·物理·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ph10-07",nameZh:"机械能守恒定律",nameEn:"Conservation of Mechanical Energy",year:10,eraId:"L4",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph8-11","ph10-03"],descZh:"掌握功与能的关系、动能定理与机械能守恒条件。",grade:10,semester:2,stage:"高中",book:"人教版·物理·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"ph11-01",nameZh:"静电场",nameEn:"Electrostatics",year:11,eraId:"L4",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph9-03"],descZh:"掌握库仑定律、电场强度、电势与电势能、电容与带电粒子在电场中的运动。",grade:11,semester:1,stage:"高中",book:"人教版·物理·必修第三册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ph11-02",nameZh:"恒定电流",nameEn:"Steady Current",year:11,eraId:"L4",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph9-05"],descZh:"掌握闭合电路欧姆定律、电功电热与电学实验的设计与误差分析。",grade:11,semester:1,stage:"高中",book:"人教版·物理·必修第三册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ph11-03",nameZh:"磁场",nameEn:"Magnetic Field",year:11,eraId:"L4",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph9-07"],descZh:"掌握磁感应强度、安培力与洛伦兹力，分析带电粒子在磁场中的圆周运动。",grade:11,semester:1,stage:"高中",book:"人教版·物理·选择性必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ph11-04",nameZh:"电磁感应",nameEn:"Electromagnetic Induction",year:11,eraId:"L4",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph11-03"],descZh:"掌握楞次定律与法拉第电磁感应定律，处理导体棒切割磁感线问题。",grade:11,semester:1,stage:"高中",book:"人教版·物理·选择性必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ph11-05",nameZh:"交变电流",nameEn:"Alternating Current",year:11,eraId:"L4",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph11-04"],descZh:"理解正弦交变电流的产生、有效值与变压器、远距离输电原理。",grade:11,semester:2,stage:"高中",book:"人教版·物理·选择性必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ph11-06",nameZh:"动量守恒定律",nameEn:"Conservation of Momentum",year:11,eraId:"L4",categoryId:"physics",importance:5,faces:20,shape:"icosahedron",prereqs:["ph10-07"],descZh:"掌握冲量、动量定理与动量守恒条件，处理碰撞与反冲问题。",grade:11,semester:1,stage:"高中",book:"人教版·物理·选择性必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ph11-07",nameZh:"机械振动",nameEn:"Mechanical Oscillation",year:11,eraId:"L4",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph10-05"],descZh:"掌握简谐运动的描述、单摆周期公式与受迫振动、共振。",grade:11,semester:2,stage:"高中",book:"人教版·物理·选择性必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ph11-08",nameZh:"机械波",nameEn:"Mechanical Waves",year:11,eraId:"L4",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph11-07"],descZh:"理解波长、频率、波速关系，掌握波的图象与干涉、衍射现象。",grade:11,semester:2,stage:"高中",book:"人教版·物理·选择性必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"ph12-01",nameZh:"光学:折射与全反射",nameEn:"Refraction and Total Internal Reflection",year:12,eraId:"L4",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph8-05"],descZh:"掌握折射定律、折射率与全反射条件，分析光纤与棱镜问题。",grade:12,semester:1,stage:"高中",book:"人教版·物理·选择性必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ph12-02",nameZh:"光的波动性",nameEn:"Wave Nature of Light",year:12,eraId:"L4",categoryId:"physics",importance:3,faces:8,shape:"octahedron",prereqs:["ph12-01"],descZh:"理解双缝干涉、薄膜干涉与衍射，认识光的电磁波本质。",grade:12,semester:1,stage:"高中",book:"人教版·物理·选择性必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ph12-03",nameZh:"电磁振荡与电磁波",nameEn:"Electromagnetic Oscillation",year:12,eraId:"L4",categoryId:"physics",importance:3,faces:8,shape:"octahedron",prereqs:["ph11-05"],descZh:"理解LC振荡电路与麦克斯韦电磁场理论，了解电磁波谱。",grade:12,semester:1,stage:"高中",book:"人教版·物理·选择性必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ph12-04",nameZh:"分子动理论与气体实验定律",nameEn:"Kinetic Theory and Gas Laws",year:12,eraId:"L4",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph9-01"],descZh:"掌握分子动理论三个论点、气体三定律与理想气体状态方程。",grade:12,semester:1,stage:"高中",book:"人教版·物理·选择性必修第三册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ph12-05",nameZh:"原子结构与原子核",nameEn:"Atomic and Nuclear Physics",year:12,eraId:"L4",categoryId:"physics",importance:4,faces:12,shape:"dodecahedron",prereqs:["ph11-01"],descZh:"理解能级跃迁、光电效应、核衰变与核反应方程、质能方程。",grade:12,semester:1,stage:"高中",book:"人教版·物理·选择性必修第三册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ph12-06",nameZh:"相对论初步",nameEn:"Special Relativity",year:12,eraId:"L4",categoryId:"physics",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["ph10-06"],descZh:"了解狭义相对论两条基本原理、时间延缓与长度收缩效应。",grade:12,semester:1,stage:"高中",book:"人教版·物理·选择性必修第四册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ph12-07",nameZh:"高考专题:力学综合",nameEn:"Gaokao: Mechanics Synthesis",year:12,eraId:"L4",categoryId:"physics",importance:3,faces:8,shape:"octahedron",prereqs:["ph11-06"],descZh:"整合牛顿定律、功能关系与动量守恒处理多过程综合题。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"ph12-08",nameZh:"高考专题:电磁学综合",nameEn:"Gaokao: Electromagnetism Synthesis",year:12,eraId:"L4",categoryId:"physics",importance:3,faces:8,shape:"octahedron",prereqs:["ph11-04"],descZh:"处理电磁感应中的力学、能量与图象综合问题。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"chem9-01",nameZh:"走进化学世界:实验基本操作",nameEn:"Basic Lab Operations",year:9,eraId:"L3",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:[],descZh:"掌握药品取用、加热、过滤、蒸发等操作规范与安全常识。",grade:9,semester:1,stage:"初中",book:"人教版·化学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem9-02",nameZh:"空气与氧气",nameEn:"Air and Oxygen",year:9,eraId:"L3",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem9-01"],descZh:"认识空气组成，掌握氧气的性质与实验室制法。",grade:9,semester:1,stage:"初中",book:"人教版·化学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem9-03",nameZh:"物质构成的奥秘:分子、原子、离子",nameEn:"Molecules, Atoms, Ions",year:9,eraId:"L3",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem9-02"],descZh:"建立微观粒子观，理解原子结构、相对原子质量与离子的形成。",grade:9,semester:1,stage:"初中",book:"人教版·化学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem9-04",nameZh:"元素与元素符号",nameEn:"Elements and Symbols",year:9,eraId:"L3",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem9-03"],descZh:"掌握常见元素符号与名称，理解元素是质子数相同的一类原子的总称。",grade:9,semester:1,stage:"初中",book:"人教版·化学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem9-05",nameZh:"化学式与化合价",nameEn:"Chemical Formulas and Valence",year:9,eraId:"L3",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem9-04"],descZh:"根据化合价书写化学式，计算相对分子质量与元素质量分数。",grade:9,semester:1,stage:"初中",book:"人教版·化学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem9-06",nameZh:"化学方程式与质量守恒",nameEn:"Chemical Equations",year:9,eraId:"L3",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem9-05","chem9-02"],descZh:"理解质量守恒定律的微观解释，掌握方程式的书写、配平与计算。",grade:9,semester:1,stage:"初中",book:"人教版·化学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem9-07",nameZh:"碳和碳的氧化物",nameEn:"Carbon and Its Oxides",year:9,eraId:"L3",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem9-06"],descZh:"掌握碳单质的性质、二氧化碳的制取与性质、一氧化碳的毒性。",grade:9,semester:1,stage:"初中",book:"人教版·化学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem9-08",nameZh:"燃料及其利用",nameEn:"Fuels and Their Use",year:9,eraId:"L3",categoryId:"chemistry",importance:3,faces:8,shape:"octahedron",prereqs:["chem9-02"],descZh:"认识燃烧条件与灭火原理，了解化石燃料与新能源。",grade:9,semester:1,stage:"初中",book:"人教版·化学·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem9-09",nameZh:"金属和金属材料",nameEn:"Metals and Materials",year:9,eraId:"L3",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem9-06"],descZh:"掌握金属活动性顺序及其应用，理解合金的性质与铁的冶炼。",grade:9,semester:2,stage:"初中",book:"人教版·化学·九年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem9-10",nameZh:"溶液",nameEn:"Solutions",year:9,eraId:"L3",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem9-03"],descZh:"理解溶解度与溶解度曲线，掌握溶质质量分数的计算与配制。",grade:9,semester:2,stage:"初中",book:"人教版·化学·九年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem9-11",nameZh:"酸和碱",nameEn:"Acids and Bases",year:9,eraId:"L3",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem9-10"],descZh:"掌握常见酸碱的性质、中和反应与pH的意义。",grade:9,semester:2,stage:"初中",book:"人教版·化学·九年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem9-12",nameZh:"盐与化肥",nameEn:"Salts and Fertilizers",year:9,eraId:"L3",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem9-11"],descZh:"掌握复分解反应条件、常见盐的性质与粗盐提纯。",grade:9,semester:2,stage:"初中",book:"人教版·化学·九年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"chem10-01",nameZh:"物质的分类及转化",nameEn:"Classification and Conversion",year:10,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem9-12"],descZh:"用树状分类法与交叉分类法梳理物质体系，理解各类物质的转化关系。",grade:10,semester:1,stage:"高中",book:"人教版·化学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-02",nameZh:"离子反应",nameEn:"Ionic Reactions",year:10,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem10-01"],descZh:"掌握电解质电离、离子方程式的书写与离子共存判断。",grade:10,semester:1,stage:"高中",book:"人教版·化学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-03",nameZh:"氧化还原反应",nameEn:"Redox Reactions",year:10,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem10-01"],descZh:"理解化合价升降与电子转移，掌握氧化剂还原剂的判断与配平。",grade:10,semester:1,stage:"高中",book:"人教版·化学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-04",nameZh:"钠及其化合物",nameEn:"Sodium and Its Compounds",year:10,eraId:"L4",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem10-02"],descZh:"掌握钠的性质、氧化钠与过氧化钠、碳酸钠与碳酸氢钠的鉴别。",grade:10,semester:1,stage:"高中",book:"人教版·化学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-05",nameZh:"氯及其化合物",nameEn:"Chlorine and Its Compounds",year:10,eraId:"L4",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem10-03"],descZh:"掌握氯气性质、次氯酸与漂白粉，理解卤素性质的递变。",grade:10,semester:1,stage:"高中",book:"人教版·化学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-06",nameZh:"物质的量",nameEn:"Amount of Substance",year:10,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem9-06"],descZh:"建立摩尔、阿伏加德罗常数、摩尔质量、气体摩尔体积与物质的量浓度的计算体系。",grade:10,semester:1,stage:"高中",book:"人教版·化学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-07",nameZh:"铁及其化合物",nameEn:"Iron and Its Compounds",year:10,eraId:"L4",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem10-03"],descZh:"掌握亚铁与三价铁的转化、氢氧化物的制备与检验。",grade:10,semester:1,stage:"高中",book:"人教版·化学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-08",nameZh:"金属材料与合金",nameEn:"Metal Materials and Alloys",year:10,eraId:"L4",categoryId:"chemistry",importance:3,faces:8,shape:"octahedron",prereqs:["chem9-09"],descZh:"理解合金的结构与性能，认识新型合金与金属的腐蚀防护。",grade:10,semester:1,stage:"高中",book:"人教版·化学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-09",nameZh:"化学键",nameEn:"Chemical Bonds",year:10,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem9-03"],descZh:"理解离子键、共价键的形成与极性，用电子式表示物质结构。",grade:10,semester:2,stage:"高中",book:"人教版·化学·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-10",nameZh:"硫及其化合物",nameEn:"Sulfur and Its Compounds",year:10,eraId:"L4",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem10-03"],descZh:"掌握二氧化硫的还原性与漂白性、硫酸的性质与浓硫酸的强氧化性。",grade:10,semester:2,stage:"高中",book:"人教版·化学·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-11",nameZh:"氮及其化合物",nameEn:"Nitrogen and Its Compounds",year:10,eraId:"L4",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem10-03"],descZh:"掌握氨、硝酸的性质与氮的氧化物转化，理解氮循环。",grade:10,semester:2,stage:"高中",book:"人教版·化学·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-12",nameZh:"化学反应与能量",nameEn:"Chemical Reactions and Energy",year:10,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem10-03"],descZh:"区分吸热放热反应，理解化学键断裂成键与能量变化的关系。",grade:10,semester:2,stage:"高中",book:"人教版·化学·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-13",nameZh:"化学反应速率与限度",nameEn:"Reaction Rate and Limit",year:10,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem10-12"],descZh:"掌握速率的影响因素与可逆反应的限度概念。",grade:10,semester:2,stage:"高中",book:"人教版·化学·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem10-14",nameZh:"有机化合物:烃",nameEn:"Hydrocarbons",year:10,eraId:"L4",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem10-09"],descZh:"认识甲烷、乙烯、乙炔、苯的结构与性质，理解同分异构现象。",grade:10,semester:2,stage:"高中",book:"人教版·化学·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"chem11-01",nameZh:"原子结构与元素周期律",nameEn:"Atomic Structure and Periodic Law",year:11,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem9-04"],descZh:"掌握核外电子排布、周期表结构、电离能与电负性的周期性变化。",grade:11,semester:1,stage:"高中",book:"人教版·化学·选择性必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"chem11-02",nameZh:"分子结构与性质",nameEn:"Molecular Structure",year:11,eraId:"L4",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem10-09"],descZh:"用价层电子对互斥理论判断空间构型，理解杂化轨道与分子极性、氢键。",grade:11,semester:1,stage:"高中",book:"人教版·化学·选择性必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"chem11-03",nameZh:"晶体结构与性质",nameEn:"Crystal Structure",year:11,eraId:"L4",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem11-02"],descZh:"区分四类晶体，掌握晶胞计算与配位数分析。",grade:11,semester:1,stage:"高中",book:"人教版·化学·选择性必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"chem11-04",nameZh:"烃的衍生物",nameEn:"Derivatives of Hydrocarbons",year:11,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem10-14"],descZh:"掌握卤代烃、醇、酚、醛、羧酸、酯的官能团性质与相互转化。",grade:11,semester:2,stage:"高中",book:"人教版·化学·选择性必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"chem11-05",nameZh:"生物大分子与合成高分子",nameEn:"Macromolecules",year:11,eraId:"L4",categoryId:"chemistry",importance:3,faces:8,shape:"octahedron",prereqs:["chem11-04"],descZh:"认识糖类、蛋白质、核酸的结构特点与加聚、缩聚反应。",grade:11,semester:2,stage:"高中",book:"人教版·化学·选择性必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"chem11-06",nameZh:"化学与可持续发展",nameEn:"Chemistry and Sustainability",year:11,eraId:"L4",categoryId:"chemistry",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["chem10-08"],descZh:"理解绿色化学、原子经济性与自然资源的合理开发利用。",grade:11,semester:2,stage:"高中",book:"人教版·化学·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"chem12-01",nameZh:"化学反应的热效应",nameEn:"Thermal Effects",year:12,eraId:"L4",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem10-12"],descZh:"掌握焓变、热化学方程式与盖斯定律的计算。",grade:12,semester:1,stage:"高中",book:"人教版·化学·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"chem12-02",nameZh:"电化学:原电池与电解池",nameEn:"Electrochemistry",year:12,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem10-03","chem12-01"],descZh:"掌握原电池与电解池的工作原理、电极反应式书写与金属腐蚀防护。",grade:12,semester:1,stage:"高中",book:"人教版·化学·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"chem12-03",nameZh:"化学平衡",nameEn:"Chemical Equilibrium",year:12,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem10-13"],descZh:"掌握平衡常数、勒夏特列原理与平衡移动的定量分析。",grade:12,semester:1,stage:"高中",book:"人教版·化学·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"chem12-04",nameZh:"水溶液中的离子平衡",nameEn:"Ionic Equilibrium in Solution",year:12,eraId:"L4",categoryId:"chemistry",importance:5,faces:20,shape:"icosahedron",prereqs:["chem10-02","chem12-03"],descZh:"掌握弱电解质电离、盐类水解、沉淀溶解平衡与pH计算。",grade:12,semester:1,stage:"高中",book:"人教版·化学·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"chem12-05",nameZh:"化学实验方案的设计与评价",nameEn:"Experimental Design",year:12,eraId:"L4",categoryId:"chemistry",importance:4,faces:12,shape:"dodecahedron",prereqs:["chem9-01"],descZh:"掌握物质制备、分离提纯、检验与定量测定的方案设计思路。",grade:12,semester:2,stage:"高中",book:"人教版·化学·选择性必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"chem12-06",nameZh:"高考专题:工艺流程题",nameEn:"Gaokao: Chemical Processes",year:12,eraId:"L4",categoryId:"chemistry",importance:3,faces:8,shape:"octahedron",prereqs:["chem10-07"],descZh:"读懂流程框图，分析原料预处理、反应条件控制与产率问题。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"chem12-07",nameZh:"高考专题:有机合成推断",nameEn:"Gaokao: Organic Synthesis",year:12,eraId:"L4",categoryId:"chemistry",importance:3,faces:8,shape:"octahedron",prereqs:["chem11-04"],descZh:"依据官能团转化关系逆推结构，规范书写同分异构体。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"bio7-01",nameZh:"认识生物与科学探究",nameEn:"Biology and Inquiry",year:7,eraId:"L3",categoryId:"biology",importance:3,faces:8,shape:"octahedron",prereqs:[],descZh:"理解生物的基本特征，掌握观察、调查与对照实验的设计方法。",grade:7,semester:1,stage:"初中",book:"人教版·生物·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-02",nameZh:"生态系统与生物圈",nameEn:"Ecosystem and Biosphere",year:7,eraId:"L3",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio7-01"],descZh:"理解生态系统的组成、食物链与食物网、生态系统的自我调节能力。",grade:7,semester:1,stage:"初中",book:"人教版·生物·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-03",nameZh:"细胞的结构与功能",nameEn:"Cell Structure",year:7,eraId:"L3",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio7-01"],descZh:"掌握动植物细胞的基本结构差异，学会使用显微镜与制作临时装片。",grade:7,semester:1,stage:"初中",book:"人教版·生物·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-04",nameZh:"细胞的生活:物质与能量",nameEn:"Cell Life: Matter and Energy",year:7,eraId:"L3",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio7-03"],descZh:"理解细胞膜控制物质进出、细胞质中的能量转换与细胞核的控制作用。",grade:7,semester:1,stage:"初中",book:"人教版·生物·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-05",nameZh:"细胞的分裂与分化",nameEn:"Cell Division and Differentiation",year:7,eraId:"L3",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio7-03"],descZh:"理解细胞分裂使数目增多、分化形成组织，进而构成器官与系统。",grade:7,semester:1,stage:"初中",book:"人教版·生物·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-06",nameZh:"绿色植物的光合作用",nameEn:"Photosynthesis",year:7,eraId:"L3",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio7-04"],descZh:"掌握光合作用的原料、产物、条件与场所，理解其在生物圈中的意义。",grade:7,semester:1,stage:"初中",book:"人教版·生物·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-07",nameZh:"绿色植物的呼吸作用",nameEn:"Respiration in Plants",year:7,eraId:"L3",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio7-06"],descZh:"理解呼吸作用消耗氧气、分解有机物释放能量的过程。",grade:7,semester:1,stage:"初中",book:"人教版·生物·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-08",nameZh:"人体营养与消化",nameEn:"Nutrition and Digestion",year:7,eraId:"L3",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:[],descZh:"掌握六大营养素的功用与消化系统的组成、消化酶的专一性。",grade:7,semester:2,stage:"初中",book:"人教版·生物·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-09",nameZh:"人体呼吸与气体交换",nameEn:"Respiration and Gas Exchange",year:7,eraId:"L3",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio7-08"],descZh:"理解呼吸运动的原理、肺泡与血液的气体交换过程。",grade:7,semester:2,stage:"初中",book:"人教版·生物·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-10",nameZh:"血液与血液循环",nameEn:"Blood and Circulation",year:7,eraId:"L3",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio7-09"],descZh:"掌握血液成分、血管类型、心脏结构与体循环肺循环路径。",grade:7,semester:2,stage:"初中",book:"人教版·生物·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-11",nameZh:"人体代谢废物的排出",nameEn:"Excretion",year:7,eraId:"L3",categoryId:"biology",importance:3,faces:8,shape:"octahedron",prereqs:["bio7-10"],descZh:"理解泌尿系统的组成与尿的形成过程，认识排泄的意义。",grade:7,semester:2,stage:"初中",book:"人教版·生物·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-12",nameZh:"神经调节与激素调节",nameEn:"Neural and Hormonal Regulation",year:7,eraId:"L3",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio7-05"],descZh:"理解反射弧的结构、条件反射与非条件反射，认识激素的调节作用。",grade:7,semester:2,stage:"初中",book:"人教版·生物·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-13",nameZh:"人的生殖与发育",nameEn:"Human Reproduction",year:7,eraId:"L3",categoryId:"biology",importance:3,faces:8,shape:"octahedron",prereqs:["bio7-05"],descZh:"了解生殖系统的组成、受精与胚胎发育过程、青春期生理变化。",grade:7,semester:2,stage:"初中",book:"人教版·生物·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio7-14",nameZh:"传染病与免疫",nameEn:"Infectious Disease and Immunity",year:7,eraId:"L3",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio7-03"],descZh:"掌握传染病三环节与预防措施，区分特异性免疫与非特异性免疫。",grade:7,semester:2,stage:"初中",book:"人教版·生物·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio8-01",nameZh:"动物的运动与行为",nameEn:"Animal Movement and Behavior",year:8,eraId:"L3",categoryId:"biology",importance:3,faces:8,shape:"octahedron",prereqs:["bio7-05"],descZh:"理解运动系统的组成与骨、关节、肌肉的协调配合，区分先天性行为与学习行为。",grade:8,semester:1,stage:"初中",book:"人教版·生物·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio8-02",nameZh:"细菌和真菌",nameEn:"Bacteria and Fungi",year:8,eraId:"L3",categoryId:"biology",importance:3,faces:8,shape:"octahedron",prereqs:["bio7-03"],descZh:"掌握细菌真菌的形态结构与繁殖方式，理解其在自然界中的作用。",grade:8,semester:1,stage:"初中",book:"人教版·生物·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio8-03",nameZh:"病毒与微生物",nameEn:"Viruses and Microbes",year:8,eraId:"L3",categoryId:"biology",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["bio8-02"],descZh:"了解病毒无细胞结构的特点、寄生方式与人类对病毒的利用。",grade:8,semester:1,stage:"初中",book:"人教版·生物·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio8-04",nameZh:"生物的分类与多样性",nameEn:"Classification and Biodiversity",year:8,eraId:"L3",categoryId:"biology",importance:3,faces:8,shape:"octahedron",prereqs:["bio8-01"],descZh:"掌握生物分类的等级单位与双名法，理解生物多样性的三个层次。",grade:8,semester:1,stage:"初中",book:"人教版·生物·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio8-05",nameZh:"生物的遗传与变异",nameEn:"Heredity and Variation",year:8,eraId:"L3",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio7-05"],descZh:"理解基因、DNA、染色体关系，掌握显隐性性状与人的性别决定。",grade:8,semester:2,stage:"初中",book:"人教版·生物·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio8-06",nameZh:"生物的进化",nameEn:"Evolution",year:8,eraId:"L3",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio8-05"],descZh:"了解生命起源、化石证据与自然选择学说的基本内容。",grade:8,semester:2,stage:"初中",book:"人教版·生物·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"bio10-01",nameZh:"细胞的分子组成",nameEn:"Molecular Composition of Cells",year:10,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio7-04"],descZh:"掌握水、无机盐、糖类、脂质、蛋白质、核酸的元素组成与功能。",grade:10,semester:1,stage:"高中",book:"人教版·生物·必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"bio10-02",nameZh:"细胞的结构与物质运输",nameEn:"Cell Structure and Transport",year:10,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio7-03"],descZh:"掌握细胞器分工与生物膜系统，理解被动运输、主动运输与胞吞胞吐。",grade:10,semester:1,stage:"高中",book:"人教版·生物·必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"bio10-03",nameZh:"酶与ATP",nameEn:"Enzymes and ATP",year:10,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio10-01"],descZh:"理解酶的催化特性与影响因素，认识ATP是直接能源物质。",grade:10,semester:1,stage:"高中",book:"人教版·生物·必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"bio10-04",nameZh:"细胞呼吸",nameEn:"Cellular Respiration",year:10,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio7-07","bio10-03"],descZh:"掌握有氧呼吸三阶段与无氧呼吸产物，理解呼吸原理在生产和生活中的应用。",grade:10,semester:1,stage:"高中",book:"人教版·生物·必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"bio10-05",nameZh:"光合作用(高中)",nameEn:"Photosynthesis (Advanced)",year:10,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio7-06","bio10-04"],descZh:"掌握光反应与暗反应的物质能量变化，分析环境因素对光合速率的影响。",grade:10,semester:1,stage:"高中",book:"人教版·生物·必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"bio10-06",nameZh:"细胞的增殖与有丝分裂",nameEn:"Cell Proliferation",year:10,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio7-05"],descZh:"掌握细胞周期与有丝分裂各时期的特征，理解染色体数目变化规律。",grade:10,semester:1,stage:"高中",book:"人教版·生物·必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"bio10-07",nameZh:"细胞的分化、衰老与凋亡",nameEn:"Differentiation, Senescence, Apoptosis",year:10,eraId:"L4",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio10-06"],descZh:"理解细胞分化的实质是基因的选择性表达，认识细胞衰老与凋亡的特征。",grade:10,semester:1,stage:"高中",book:"人教版·生物·必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"bio10-08",nameZh:"孟德尔遗传定律",nameEn:"Mendel's Laws",year:10,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio8-05"],descZh:"掌握分离定律与自由组合定律，用假说—演绎法分析遗传比例。",grade:10,semester:2,stage:"高中",book:"人教版·生物·必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"bio10-09",nameZh:"基因的表达:转录与翻译",nameEn:"Gene Expression",year:10,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio10-01"],descZh:"掌握中心法则、转录与翻译过程，理解密码子与遗传信息流向。",grade:10,semester:2,stage:"高中",book:"人教版·生物·必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"bio10-10",nameZh:"基因突变与基因重组",nameEn:"Mutation and Recombination",year:10,eraId:"L4",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio10-09"],descZh:"区分基因突变、基因重组与染色体变异，认识育种中的应用。",grade:10,semester:2,stage:"高中",book:"人教版·生物·必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"bio10-11",nameZh:"现代生物进化理论",nameEn:"Modern Evolutionary Theory",year:10,eraId:"L4",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio10-10","bio8-06"],descZh:"掌握种群基因频率的变化、自然选择与物种形成、共同进化与生物多样性。",grade:10,semester:2,stage:"高中",book:"人教版·生物·必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"bio11-01",nameZh:"内环境与稳态",nameEn:"Internal Environment and Homeostasis",year:11,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio10-02"],descZh:"理解内环境的组成与理化性质，掌握稳态的调节机制。",grade:11,semester:1,stage:"高中",book:"人教版·生物·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"bio11-02",nameZh:"神经调节",nameEn:"Neural Regulation",year:11,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio7-12"],descZh:"掌握神经冲动产生与传导、突触传递与大脑皮层功能区。",grade:11,semester:1,stage:"高中",book:"人教版·生物·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"bio11-03",nameZh:"体液调节",nameEn:"Humoral Regulation",year:11,eraId:"L4",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio11-01"],descZh:"掌握激素分级调节、反馈调节与血糖、体温、水盐平衡的调节。",grade:11,semester:1,stage:"高中",book:"人教版·生物·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"bio11-04",nameZh:"免疫调节",nameEn:"Immune Regulation",year:11,eraId:"L4",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio7-14"],descZh:"掌握体液免疫与细胞免疫过程、免疫失调与免疫学应用。",grade:11,semester:1,stage:"高中",book:"人教版·生物·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"bio11-05",nameZh:"植物激素调节",nameEn:"Plant Hormones",year:11,eraId:"L4",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio10-07"],descZh:"掌握生长素的发现、两重性与顶端优势，认识其他植物激素的作用。",grade:11,semester:1,stage:"高中",book:"人教版·生物·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"bio11-06",nameZh:"种群与群落",nameEn:"Populations and Communities",year:11,eraId:"L4",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio7-02"],descZh:"掌握种群数量特征与增长曲线、群落的空间结构与演替。",grade:11,semester:2,stage:"高中",book:"人教版·生物·选择性必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"bio11-07",nameZh:"生态系统结构与能量流动",nameEn:"Ecosystem Structure and Energy Flow",year:11,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio11-06"],descZh:"理解营养结构、能量流动的特点与传递效率、能量金字塔。",grade:11,semester:2,stage:"高中",book:"人教版·生物·选择性必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"bio11-08",nameZh:"生态系统的物质循环与稳定性",nameEn:"Material Cycling and Stability",year:11,eraId:"L4",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio11-07"],descZh:"掌握碳循环、信息传递与生态系统稳定性的维持机制。",grade:11,semester:2,stage:"高中",book:"人教版·生物·选择性必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"bio11-09",nameZh:"生态环境的保护",nameEn:"Ecological Conservation",year:11,eraId:"L4",categoryId:"biology",importance:3,faces:8,shape:"octahedron",prereqs:["bio11-08"],descZh:"认识全球性环境问题，理解生物多样性保护与可持续发展。",grade:11,semester:2,stage:"高中",book:"人教版·生物·选择性必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"bio12-01",nameZh:"基因工程",nameEn:"Genetic Engineering",year:12,eraId:"L4",categoryId:"biology",importance:5,faces:20,shape:"icosahedron",prereqs:["bio10-09"],descZh:"掌握工具酶、载体、操作步骤与基因工程的应用及安全性。",grade:12,semester:1,stage:"高中",book:"人教版·生物·选择性必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"bio12-02",nameZh:"细胞工程",nameEn:"Cell Engineering",year:12,eraId:"L4",categoryId:"biology",importance:4,faces:12,shape:"dodecahedron",prereqs:["bio10-07"],descZh:"掌握植物组织培养、体细胞杂交与动物细胞培养、单克隆抗体技术。",grade:12,semester:1,stage:"高中",book:"人教版·生物·选择性必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"bio12-03",nameZh:"胚胎工程",nameEn:"Embryo Engineering",year:12,eraId:"L4",categoryId:"biology",importance:3,faces:8,shape:"octahedron",prereqs:["bio12-02"],descZh:"理解体外受精、胚胎移植与胚胎分割的技术流程。",grade:12,semester:1,stage:"高中",book:"人教版·生物·选择性必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"bio12-04",nameZh:"发酵工程",nameEn:"Fermentation Engineering",year:12,eraId:"L4",categoryId:"biology",importance:3,faces:8,shape:"octahedron",prereqs:["bio8-02"],descZh:"掌握微生物培养、分离纯化与发酵条件的控制。",grade:12,semester:1,stage:"高中",book:"人教版·生物·选择性必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"bio12-05",nameZh:"高考专题:实验设计与探究",nameEn:"Gaokao: Experimental Design",year:12,eraId:"L4",categoryId:"biology",importance:3,faces:8,shape:"octahedron",prereqs:["bio10-03"],descZh:"训练自变量控制、对照设置与结果预测的规范表述。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"his7-01",nameZh:"中国境内早期人类与文明起源",nameEn:"Early Humans and Origins of Civilization",year:7,eraId:"L3",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:[],descZh:"了解元谋人、北京人、山顶洞人，认识河姆渡、半坡原始农耕与炎黄传说。",grade:7,semester:1,stage:"初中",book:"统编版·历史·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his7-02",nameZh:"夏商周与早期国家",nameEn:"Xia, Shang and Zhou",year:7,eraId:"L3",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his7-01"],descZh:"掌握王位世袭制、分封制与青铜文明，理解早期国家的形态。",grade:7,semester:1,stage:"初中",book:"统编版·历史·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his7-03",nameZh:"春秋战国与百家争鸣",nameEn:"Spring-Autumn and Warring States",year:7,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his7-02"],descZh:"理解铁器牛耕带来的社会变革、商鞅变法与儒墨道法诸家思想。",grade:7,semester:1,stage:"初中",book:"统编版·历史·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his7-04",nameZh:"秦汉统一多民族国家",nameEn:"Qin and Han Empires",year:7,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his7-03"],descZh:"掌握中央集权制度的确立、郡县制、罢黜百家独尊儒术与丝绸之路。",grade:7,semester:1,stage:"初中",book:"统编版·历史·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his7-05",nameZh:"三国两晋南北朝",nameEn:"Three Kingdoms to Northern-Southern Dynasties",year:7,eraId:"L3",categoryId:"history",importance:3,faces:8,shape:"octahedron",prereqs:["his7-04"],descZh:"理解政权分立与民族交融，认识江南地区的开发与北魏孝文帝改革。",grade:7,semester:1,stage:"初中",book:"统编版·历史·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his7-06",nameZh:"隋唐繁荣与开放",nameEn:"Sui and Tang Prosperity",year:7,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his7-05"],descZh:"掌握科举制、三省六部制、贞观之治与开元盛世、中外文化交流。",grade:7,semester:2,stage:"初中",book:"统编版·历史·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his7-07",nameZh:"宋元时期与民族关系",nameEn:"Song and Yuan",year:7,eraId:"L3",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his7-06"],descZh:"理解经济重心南移、行省制度与元朝统一，认识宋元科技与文化成就。",grade:7,semester:2,stage:"初中",book:"统编版·历史·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his7-08",nameZh:"明清时期与闭关锁国",nameEn:"Ming and Qing",year:7,eraId:"L3",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his7-07"],descZh:"掌握明清君主专制的强化、郑和下西洋、闭关锁国政策及其后果。",grade:7,semester:2,stage:"初中",book:"统编版·历史·七年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his8-01",nameZh:"鸦片战争与近代开端",nameEn:"Opium War",year:8,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his7-08"],descZh:"理解战争背景、《南京条约》内容与中国开始沦为半殖民地半封建社会。",grade:8,semester:1,stage:"初中",book:"统编版·历史·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his8-02",nameZh:"太平天国与洋务运动",nameEn:"Taiping Rebellion and Self-strengthening",year:8,eraId:"L3",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his8-01"],descZh:"认识农民战争的历史作用与洋务运动自强求富的局限。",grade:8,semester:1,stage:"初中",book:"统编版·历史·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his8-03",nameZh:"甲午战争与戊戌变法",nameEn:"Sino-Japanese War and Reform Movement",year:8,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his8-02"],descZh:"理解《马关条约》的危害与维新变法在思想启蒙上的意义。",grade:8,semester:1,stage:"初中",book:"统编版·历史·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his8-04",nameZh:"辛亥革命与中华民国",nameEn:"1911 Revolution",year:8,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his8-03"],descZh:"掌握同盟会、三民主义、《中华民国临时约法》与辛亥革命的历史意义。",grade:8,semester:1,stage:"初中",book:"统编版·历史·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his8-05",nameZh:"五四运动与中共成立",nameEn:"May Fourth and the CPC",year:8,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his8-04"],descZh:"理解新文化运动、五四运动的历史意义与中国共产党成立的必然性。",grade:8,semester:1,stage:"初中",book:"统编版·历史·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his8-06",nameZh:"国民革命与十年对峙",nameEn:"National Revolution and the 1927-37 Decade",year:8,eraId:"L3",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his8-05"],descZh:"掌握国共合作、北伐、井冈山道路与红军长征。",grade:8,semester:1,stage:"初中",book:"统编版·历史·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his8-07",nameZh:"抗日战争",nameEn:"War of Resistance",year:8,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his8-06"],descZh:"掌握九一八事变、七七事变、抗日民族统一战线与抗战胜利的意义。",grade:8,semester:1,stage:"初中",book:"统编版·历史·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his8-08",nameZh:"解放战争",nameEn:"War of Liberation",year:8,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his8-07"],descZh:"理解重庆谈判、三大战役与新中国成立的历史条件。",grade:8,semester:1,stage:"初中",book:"统编版·历史·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his9-01",nameZh:"新中国成立与社会主义改造",nameEn:"Founding of the PRC and Socialist Transformation",year:9,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his8-08"],descZh:"掌握开国大典、土地改革、一五计划与三大改造的完成。",grade:9,semester:1,stage:"初中",book:"统编版·历史·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his9-02",nameZh:"社会主义建设道路的探索",nameEn:"Exploring Socialist Construction",year:9,eraId:"L3",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his9-01"],descZh:"认识大跃进、人民公社化运动的教训与改革开放前的曲折探索。",grade:9,semester:1,stage:"初中",book:"统编版·历史·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his9-03",nameZh:"改革开放与现代化建设",nameEn:"Reform and Opening Up",year:9,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his9-02"],descZh:"掌握十一届三中全会、家庭联产承包责任制、经济特区与社会主义市场经济体制的建立。",grade:9,semester:1,stage:"初中",book:"统编版·历史·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his9-04",nameZh:"文艺复兴与新航路开辟",nameEn:"Renaissance and Age of Discovery",year:9,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:[],descZh:"理解人文主义的核心内涵与新航路开辟对世界市场形成的意义。",grade:9,semester:1,stage:"初中",book:"统编版·历史·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his9-05",nameZh:"资产阶级革命与工业革命",nameEn:"Bourgeois Revolutions and Industrial Revolution",year:9,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his9-04"],descZh:"掌握英美法革命的制度成果与两次工业革命的技术与社会影响。",grade:9,semester:1,stage:"初中",book:"统编版·历史·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his9-06",nameZh:"两次世界大战",nameEn:"Two World Wars",year:9,eraId:"L3",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his9-05"],descZh:"理解一战二战的起因、进程与战后国际秩序的建立。",grade:9,semester:1,stage:"初中",book:"统编版·历史·九年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his9-07",nameZh:"冷战与战后世界",nameEn:"Cold War and the Postwar World",year:9,eraId:"L3",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his9-06"],descZh:"掌握两极格局的形成与瓦解、欧洲一体化与发展中国家的崛起。",grade:9,semester:1,stage:"初中",book:"统编版·历史·九年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"his10-01",nameZh:"先秦至秦汉:统一国家的建立",nameEn:"From Pre-Qin to Han: Unification",year:10,eraId:"L4",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his7-04"],descZh:"从政治制度、经济形态与思想演变三条线索梳理统一国家的形成。",grade:10,semester:1,stage:"高中",book:"统编版·中外历史纲要(上)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"his10-02",nameZh:"魏晋至隋唐:制度与文化的成熟",nameEn:"Wei-Jin to Tang: Institutional Maturity",year:10,eraId:"L4",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his7-06"],descZh:"理解三省六部、科举、租庸调与两税法的演变逻辑。",grade:10,semester:1,stage:"高中",book:"统编版·中外历史纲要(上)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"his10-03",nameZh:"宋元明清:经济重心南移与专制强化",nameEn:"Song to Qing: Economy and Autocracy",year:10,eraId:"L4",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his7-08"],descZh:"掌握经济重心南移的完成、商品经济发展与君主专制强化的路径。",grade:10,semester:1,stage:"高中",book:"统编版·中外历史纲要(上)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"his10-04",nameZh:"晚清变局与救亡图存",nameEn:"Late Qing Crisis and National Salvation",year:10,eraId:"L4",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his8-04"],descZh:"系统梳理从器物到制度再到思想的三层递进式探索。",grade:10,semester:1,stage:"高中",book:"统编版·中外历史纲要(上)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"his10-05",nameZh:"新民主主义革命",nameEn:"New Democratic Revolution",year:10,eraId:"L4",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his8-08"],descZh:"理解中共领导革命的道路探索、统一战线策略与胜利原因。",grade:10,semester:1,stage:"高中",book:"统编版·中外历史纲要(上)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"his10-06",nameZh:"古代世界文明",nameEn:"Ancient World Civilizations",year:10,eraId:"L4",categoryId:"history",importance:3,faces:8,shape:"octahedron",prereqs:["his9-04"],descZh:"认识两河、埃及、印度、希腊罗马文明的多元特征与地理条件。",grade:10,semester:2,stage:"高中",book:"统编版·中外历史纲要(下)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"his11-01",nameZh:"中古时期的世界",nameEn:"The Medieval World",year:11,eraId:"L4",categoryId:"history",importance:3,faces:8,shape:"octahedron",prereqs:["his10-06"],descZh:"了解西欧封建社会、拜占庭与阿拉伯帝国、东亚与非洲美洲文明。",grade:11,semester:1,stage:"高中",book:"统编版·中外历史纲要(下)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"his11-02",nameZh:"走向整体的世界:大航海与殖民",nameEn:"Global Integration",year:11,eraId:"L4",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his9-04"],descZh:"理解全球航路的开辟、殖民扩张与物种交换对世界格局的重塑。",grade:11,semester:1,stage:"高中",book:"统编版·中外历史纲要(下)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"his11-03",nameZh:"资本主义制度的确立与扩展",nameEn:"Rise of Capitalism",year:11,eraId:"L4",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his9-05"],descZh:"掌握英美法德等国制度确立的路径差异与资本主义世界体系的形成。",grade:11,semester:1,stage:"高中",book:"统编版·中外历史纲要(下)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"his11-04",nameZh:"工业革命与马克思主义诞生",nameEn:"Industrial Revolution and Marxism",year:11,eraId:"L4",categoryId:"history",importance:5,faces:20,shape:"icosahedron",prereqs:["his11-03"],descZh:"理解工业化的双重后果与《共产党宣言》问世的历史条件。",grade:11,semester:1,stage:"高中",book:"统编版·中外历史纲要(下)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"his11-05",nameZh:"亚非拉民族独立运动",nameEn:"National Independence Movements",year:11,eraId:"L4",categoryId:"history",importance:3,faces:8,shape:"octahedron",prereqs:["his11-04"],descZh:"认识拉美独立、亚洲觉醒与非洲抗争的不同道路。",grade:11,semester:2,stage:"高中",book:"统编版·中外历史纲要(下)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"his11-06",nameZh:"20世纪国际格局演变",nameEn:"20th Century World Order",year:11,eraId:"L4",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his9-07"],descZh:"梳理凡尔赛—华盛顿体系、雅尔塔体系到多极化趋势的演变。",grade:11,semester:2,stage:"高中",book:"统编版·中外历史纲要(下)",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"his12-01",nameZh:"国家制度与社会治理",nameEn:"State Institutions and Governance",year:12,eraId:"L4",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his10-03"],descZh:"从政治制度、官员选拔、法律教化、户籍赋税等专题理解治理逻辑。",grade:12,semester:1,stage:"高中",book:"统编版·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"his12-02",nameZh:"经济与社会生活",nameEn:"Economy and Social Life",year:12,eraId:"L4",categoryId:"history",importance:4,faces:12,shape:"dodecahedron",prereqs:["his11-04"],descZh:"从食物生产、商贸网络、货币信贷、村落城镇等专题看经济变迁。",grade:12,semester:1,stage:"高中",book:"统编版·选择性必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"his12-03",nameZh:"文化交流与传播",nameEn:"Cultural Exchange",year:12,eraId:"L4",categoryId:"history",importance:3,faces:8,shape:"octahedron",prereqs:["his11-02"],descZh:"理解中华文化圈的辐射、人口迁徙与文化认同、战争与文化的互动。",grade:12,semester:1,stage:"高中",book:"统编版·选择性必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"his12-04",nameZh:"高考专题:史料实证与历史解释",nameEn:"Gaokao: Historical Evidence",year:12,eraId:"L4",categoryId:"history",importance:3,faces:8,shape:"octahedron",prereqs:["his12-01"],descZh:"掌握史料类型辨析、互证方法与历史解释的多角度建构。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"geo7-01",nameZh:"地球和地球仪",nameEn:"Earth and Globe",year:7,eraId:"L3",categoryId:"geography",importance:5,faces:20,shape:"icosahedron",prereqs:[],descZh:"掌握经纬度的划分与判读，理解经纬网定位的原理。",grade:7,semester:1,stage:"初中",book:"人教版·地理·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo7-02",nameZh:"地图的阅读与等高线",nameEn:"Maps and Contours",year:7,eraId:"L3",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo7-01"],descZh:"掌握比例尺、方向、图例三要素，用等高线判读地形部位。",grade:7,semester:1,stage:"初中",book:"人教版·地理·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo7-03",nameZh:"陆地和海洋",nameEn:"Land and Ocean",year:7,eraId:"L3",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo7-01"],descZh:"认识海陆分布、大洲大洋界线与板块运动、海陆变迁。",grade:7,semester:1,stage:"初中",book:"人教版·地理·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo7-04",nameZh:"天气与气候",nameEn:"Weather and Climate",year:7,eraId:"L3",categoryId:"geography",importance:5,faces:20,shape:"icosahedron",prereqs:["geo7-03"],descZh:"理解气温与降水的分布规律、主要气候类型及影响因素。",grade:7,semester:1,stage:"初中",book:"人教版·地理·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo7-05",nameZh:"居民与聚落",nameEn:"Population and Settlements",year:7,eraId:"L3",categoryId:"geography",importance:3,faces:8,shape:"octahedron",prereqs:["geo7-04"],descZh:"认识人口分布、人种语言宗教差异与聚落形成的地理条件。",grade:7,semester:2,stage:"初中",book:"人教版·地理·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo7-06",nameZh:"发展与合作",nameEn:"Development and Cooperation",year:7,eraId:"L3",categoryId:"geography",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["geo7-05"],descZh:"理解发达国家与发展中国家的差异、国际经济合作的意义。",grade:7,semester:2,stage:"初中",book:"人教版·地理·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo8-01",nameZh:"中国疆域与人口",nameEn:"China's Territory and Population",year:8,eraId:"L3",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo7-02"],descZh:"掌握领土范围、邻国与濒临海洋，理解人口分布与民族政策。",grade:8,semester:1,stage:"初中",book:"人教版·地理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo8-02",nameZh:"中国的地形与地势",nameEn:"China's Topography",year:8,eraId:"L3",categoryId:"geography",importance:5,faces:20,shape:"icosahedron",prereqs:["geo8-01"],descZh:"掌握三级阶梯、主要山脉与地形区，理解地势对气候河流的影响。",grade:8,semester:1,stage:"初中",book:"人教版·地理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo8-03",nameZh:"中国的气候",nameEn:"China's Climate",year:8,eraId:"L3",categoryId:"geography",importance:5,faces:20,shape:"icosahedron",prereqs:["geo8-02","geo7-04"],descZh:"掌握气温与降水的时空分布、季风气候成因与气候类型分布。",grade:8,semester:1,stage:"初中",book:"人教版·地理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo8-04",nameZh:"中国的河流与湖泊",nameEn:"Rivers and Lakes",year:8,eraId:"L3",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo8-02"],descZh:"区分内外流区，掌握长江黄河的水文特征与治理开发。",grade:8,semester:1,stage:"初中",book:"人教版·地理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo8-05",nameZh:"中国的自然资源",nameEn:"Natural Resources",year:8,eraId:"L3",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo8-04"],descZh:"理解自然资源的基本特征、水土资源分布与跨区域调配。",grade:8,semester:1,stage:"初中",book:"人教版·地理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo8-06",nameZh:"中国的农业与工业",nameEn:"Agriculture and Industry",year:8,eraId:"L3",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo8-05"],descZh:"掌握农业部门与分布差异、工业基地与高新技术产业布局。",grade:8,semester:2,stage:"初中",book:"人教版·地理·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo8-07",nameZh:"中国的交通与区域差异",nameEn:"Transport and Regional Differences",year:8,eraId:"L3",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo8-06"],descZh:"掌握主要铁路干线，理解四大地理区域的划分依据与特征。",grade:8,semester:2,stage:"初中",book:"人教版·地理·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"geo10-01",nameZh:"宇宙中的地球",nameEn:"Earth in the Universe",year:10,eraId:"L4",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:[],descZh:"理解地球的普通性与特殊性、太阳活动与地球圈层结构。",grade:10,semester:1,stage:"高中",book:"人教版·地理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"geo10-02",nameZh:"地球的运动",nameEn:"Earth's Movements",year:10,eraId:"L4",categoryId:"geography",importance:5,faces:20,shape:"icosahedron",prereqs:["geo10-01"],descZh:"掌握自转与公转的地理意义，包括时差、昼夜长短与正午太阳高度。",grade:10,semester:1,stage:"高中",book:"人教版·地理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"geo10-03",nameZh:"大气受热过程与大气环流",nameEn:"Atmospheric Heating and Circulation",year:10,eraId:"L4",categoryId:"geography",importance:5,faces:20,shape:"icosahedron",prereqs:["geo10-02"],descZh:"理解温室效应原理、热力环流与三圈环流、季风环流的形成。",grade:10,semester:1,stage:"高中",book:"人教版·地理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"geo10-04",nameZh:"常见的天气系统",nameEn:"Weather Systems",year:10,eraId:"L4",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo10-03"],descZh:"掌握锋面、气旋与反气旋的结构及其天气表现。",grade:10,semester:1,stage:"高中",book:"人教版·地理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"geo10-05",nameZh:"水循环与洋流",nameEn:"Water Cycle and Ocean Currents",year:10,eraId:"L4",categoryId:"geography",importance:5,faces:20,shape:"icosahedron",prereqs:["geo10-03"],descZh:"理解水循环环节与意义、洋流分布规律及其对地理环境的影响。",grade:10,semester:1,stage:"高中",book:"人教版·地理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"geo10-06",nameZh:"地貌的成因与类型",nameEn:"Landforms",year:10,eraId:"L4",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo10-01"],descZh:"从内力与外力作用解释流水、风成、喀斯特、海岸等主要地貌。",grade:10,semester:1,stage:"高中",book:"人教版·地理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"geo10-07",nameZh:"植被与土壤",nameEn:"Vegetation and Soil",year:10,eraId:"L4",categoryId:"geography",importance:3,faces:8,shape:"octahedron",prereqs:["geo10-06"],descZh:"认识主要植被类型与土壤形成因素、土壤剖面。",grade:10,semester:1,stage:"高中",book:"人教版·地理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"geo10-08",nameZh:"自然灾害与防灾",nameEn:"Natural Disasters",year:10,eraId:"L4",categoryId:"geography",importance:3,faces:8,shape:"octahedron",prereqs:["geo10-06"],descZh:"分析气象、地质、水文灾害的成因与防灾减灾措施。",grade:10,semester:1,stage:"高中",book:"人教版·地理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"geo11-01",nameZh:"人口分布与迁移",nameEn:"Population Distribution and Migration",year:11,eraId:"L4",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo8-01"],descZh:"理解人口分布的影响因素、人口迁移的推拉理论与影响。",grade:11,semester:1,stage:"高中",book:"人教版·地理·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"geo11-02",nameZh:"城市空间结构与城镇化",nameEn:"Urban Structure and Urbanization",year:11,eraId:"L4",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo11-01"],descZh:"掌握城市功能区布局规律、城镇化进程与问题对策。",grade:11,semester:1,stage:"高中",book:"人教版·地理·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"geo11-03",nameZh:"农业区位因素",nameEn:"Agricultural Location",year:11,eraId:"L4",categoryId:"geography",importance:5,faces:20,shape:"icosahedron",prereqs:["geo8-06"],descZh:"从自然与社会经济因素分析农业区位选择与农业地域类型。",grade:11,semester:1,stage:"高中",book:"人教版·地理·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"geo11-04",nameZh:"工业区位与产业转移",nameEn:"Industrial Location",year:11,eraId:"L4",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo11-03"],descZh:"理解工业区位因素的变化、集聚与分散、产业转移的动因。",grade:11,semester:1,stage:"高中",book:"人教版·地理·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"geo11-05",nameZh:"交通运输布局",nameEn:"Transportation Layout",year:11,eraId:"L4",categoryId:"geography",importance:3,faces:8,shape:"octahedron",prereqs:["geo11-04"],descZh:"分析交通线站点位选择的区位因素与交通对区域发展的影响。",grade:11,semester:2,stage:"高中",book:"人教版·地理·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"geo11-06",nameZh:"环境与发展",nameEn:"Environment and Development",year:11,eraId:"L4",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo11-02"],descZh:"理解可持续发展的内涵、环境问题的成因与协调人地关系的途径。",grade:11,semester:2,stage:"高中",book:"人教版·地理·必修第二册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"geo12-01",nameZh:"区域认知与区域差异",nameEn:"Regional Cognition",year:12,eraId:"L4",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo8-07"],descZh:"掌握区域特征分析的基本框架，比较不同区域的差异与联系。",grade:12,semester:1,stage:"高中",book:"人教版·地理·选择性必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"geo12-02",nameZh:"区域发展阶段与产业结构",nameEn:"Regional Development Stages",year:12,eraId:"L4",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo12-01"],descZh:"理解区域生命周期的四阶段与产业结构的升级路径。",grade:12,semester:1,stage:"高中",book:"人教版·地理·选择性必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"geo12-03",nameZh:"资源、环境与国家安全",nameEn:"Resources and National Security",year:12,eraId:"L4",categoryId:"geography",importance:4,faces:12,shape:"dodecahedron",prereqs:["geo11-06"],descZh:"从耕地、水、能源、生态等维度理解资源安全与国家安全的关系。",grade:12,semester:1,stage:"高中",book:"人教版·地理·选择性必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"geo12-04",nameZh:"地理信息技术",nameEn:"Geographic Information Technology",year:12,eraId:"L4",categoryId:"geography",importance:3,faces:8,shape:"octahedron",prereqs:["geo7-02"],descZh:"理解RS、GPS、GIS的功能差异及其在区域研究中的应用。",grade:12,semester:1,stage:"高中",book:"人教版·地理·必修第一册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"geo12-05",nameZh:"高考专题:地理综合题",nameEn:"Gaokao: Comprehensive Questions",year:12,eraId:"L4",categoryId:"geography",importance:3,faces:8,shape:"octahedron",prereqs:["geo12-02"],descZh:"训练区域定位、要素关联分析与规范表述的答题结构。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"pol1-01",nameZh:"校园生活与规则",nameEn:"School Life and Rules",year:1,eraId:"L1",categoryId:"politics",importance:3,faces:8,shape:"octahedron",prereqs:[],descZh:"认识学校生活的规则与秩序，学会与同学友好相处、尊敬师长。",grade:1,semester:1,stage:"小学",book:"统编版·道德与法治·一年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol2-01",nameZh:"家庭与邻里",nameEn:"Family and Neighbors",year:2,eraId:"L1",categoryId:"politics",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["pol1-01"],descZh:"体会家庭亲情，学会做力所能及的家务与邻里互助。",grade:2,semester:1,stage:"小学",book:"统编版·道德与法治·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol3-01",nameZh:"安全与自我保护",nameEn:"Safety and Self-protection",year:3,eraId:"L2",categoryId:"politics",importance:3,faces:8,shape:"octahedron",prereqs:["pol2-01"],descZh:"识别生活中的安全隐患，掌握求助与避险的基本方法。",grade:3,semester:1,stage:"小学",book:"统编版·道德与法治·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol4-01",nameZh:"网络生活与媒介素养",nameEn:"Digital Life and Media Literacy",year:4,eraId:"L2",categoryId:"politics",importance:3,faces:8,shape:"octahedron",prereqs:["pol3-01"],descZh:"认识网络的便利与风险，学会辨别信息、保护个人信息。",grade:4,semester:1,stage:"小学",book:"统编版·道德与法治·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol5-01",nameZh:"公共生活与公德",nameEn:"Public Life and Civility",year:5,eraId:"L2",categoryId:"politics",importance:3,faces:8,shape:"octahedron",prereqs:["pol4-01"],descZh:"理解公共秩序与公共道德，在公共场所承担责任。",grade:5,semester:1,stage:"小学",book:"统编版·道德与法治·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol6-01",nameZh:"法律初步与公民权利",nameEn:"Introduction to Law and Rights",year:6,eraId:"L2",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol5-01"],descZh:"认识法律的规范作用，了解未成年人保护法与公民基本权利。",grade:6,semester:1,stage:"小学",book:"统编版·道德与法治·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol7-01",nameZh:"成长的节拍与自我认识",nameEn:"Growing Up and Self-awareness",year:7,eraId:"L3",categoryId:"politics",importance:3,faces:8,shape:"octahedron",prereqs:["pol6-01"],descZh:"理解中学阶段的身心变化，学会客观认识与接纳自己。",grade:7,semester:1,stage:"初中",book:"统编版·道德与法治·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol7-02",nameZh:"友谊与师生交往",nameEn:"Friendship and Teacher-Student Relations",year:7,eraId:"L3",categoryId:"politics",importance:3,faces:8,shape:"octahedron",prereqs:["pol7-01"],descZh:"掌握建立与维护友谊的方法，理解尊重与沟通在师生关系中的作用。",grade:7,semester:1,stage:"初中",book:"统编版·道德与法治·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol7-03",nameZh:"生命教育与情绪管理",nameEn:"Life Education and Emotions",year:7,eraId:"L3",categoryId:"politics",importance:3,faces:8,shape:"octahedron",prereqs:["pol7-01"],descZh:"认识生命的可贵，学会调节情绪、应对挫折。",grade:7,semester:1,stage:"初中",book:"统编版·道德与法治·七年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B8%83%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol8-01",nameZh:"社会生活与亲社会行为",nameEn:"Social Life and Prosocial Behavior",year:8,eraId:"L3",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol7-02"],descZh:"理解个人与社会的关系，养成亲社会行为与责任意识。",grade:8,semester:1,stage:"初中",book:"统编版·道德与法治·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol8-02",nameZh:"规则与法律:违法与犯罪",nameEn:"Rules, Law, Crime",year:8,eraId:"L3",categoryId:"politics",importance:5,faces:20,shape:"icosahedron",prereqs:["pol6-01"],descZh:"区分一般违法与犯罪，理解犯罪的基本特征与法律后果。",grade:8,semester:1,stage:"初中",book:"统编版·道德与法治·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol8-03",nameZh:"国家利益与国家安全",nameEn:"National Interests and Security",year:8,eraId:"L3",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol8-01"],descZh:"理解国家利益的内涵与总体国家安全观。",grade:8,semester:1,stage:"初中",book:"统编版·道德与法治·八年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol8-04",nameZh:"宪法与公民权利义务",nameEn:"Constitution and Citizenship",year:8,eraId:"L3",categoryId:"politics",importance:5,faces:20,shape:"icosahedron",prereqs:["pol8-02"],descZh:"理解宪法的地位与公民基本权利、基本义务的一致性。",grade:8,semester:2,stage:"初中",book:"统编版·道德与法治·八年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E5%85%AB%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol9-01",nameZh:"富强与创新",nameEn:"Prosperity and Innovation",year:9,eraId:"L3",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol8-04"],descZh:"理解改革开放的意义与创新驱动发展战略。",grade:9,semester:1,stage:"初中",book:"统编版·道德与法治·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol9-02",nameZh:"民主与法治",nameEn:"Democracy and Rule of Law",year:9,eraId:"L3",categoryId:"politics",importance:5,faces:20,shape:"icosahedron",prereqs:["pol9-01"],descZh:"理解社会主义民主的本质与全面依法治国的要求。",grade:9,semester:1,stage:"初中",book:"统编版·道德与法治·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol9-03",nameZh:"文化与中华优秀传统文化",nameEn:"Culture and Heritage",year:9,eraId:"L3",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol9-01"],descZh:"认识中华文化的特点与价值，理解文化自信的来源。",grade:9,semester:1,stage:"初中",book:"统编版·道德与法治·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol9-04",nameZh:"生态文明与绿色发展",nameEn:"Ecological Civilization",year:9,eraId:"L3",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol9-03"],descZh:"理解人与自然和谐共生、绿水青山就是金山银山的理念。",grade:9,semester:1,stage:"初中",book:"统编版·道德与法治·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol9-05",nameZh:"中国梦与个人理想",nameEn:"Chinese Dream and Personal Goals",year:9,eraId:"L3",categoryId:"politics",importance:3,faces:8,shape:"octahedron",prereqs:["pol9-02"],descZh:"把个人理想融入国家发展，理解两个一百年奋斗目标。",grade:9,semester:2,stage:"初中",book:"统编版·道德与法治·九年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%88%9D%E4%B8%AD/%E4%B9%9D%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"pol10-01",nameZh:"中国特色社会主义",nameEn:"Socialism with Chinese Characteristics",year:10,eraId:"L4",categoryId:"politics",importance:5,faces:20,shape:"icosahedron",prereqs:["pol9-05"],descZh:"理解科学社会主义在中国的实践、新时代的主要矛盾与历史方位。",grade:10,semester:1,stage:"高中",book:"统编版·思想政治·必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"pol10-02",nameZh:"生产资料所有制与收入分配",nameEn:"Ownership and Distribution",year:10,eraId:"L4",categoryId:"politics",importance:5,faces:20,shape:"icosahedron",prereqs:["pol10-01"],descZh:"掌握公有制为主体、多种所有制共同发展与按劳分配为主体的分配制度。",grade:10,semester:1,stage:"高中",book:"统编版·思想政治·必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"pol10-03",nameZh:"社会主义市场经济体制",nameEn:"Socialist Market Economy",year:10,eraId:"L4",categoryId:"politics",importance:5,faces:20,shape:"icosahedron",prereqs:["pol10-02"],descZh:"理解市场决定作用与政府宏观调控的有机结合。",grade:10,semester:1,stage:"高中",book:"统编版·思想政治·必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"pol10-04",nameZh:"新发展理念与高质量发展",nameEn:"New Development Philosophy",year:10,eraId:"L4",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol10-03"],descZh:"掌握创新协调绿色开放共享五大理念与现代化经济体系。",grade:10,semester:1,stage:"高中",book:"统编版·思想政治·必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%80",wikiEn:""},{id:"pol11-01",nameZh:"中国共产党的领导",nameEn:"Leadership of the CPC",year:11,eraId:"L4",categoryId:"politics",importance:5,faces:20,shape:"icosahedron",prereqs:["pol10-01"],descZh:"理解党的性质宗旨、执政方式与全面从严治党的意义。",grade:11,semester:1,stage:"高中",book:"统编版·思想政治·必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"pol11-02",nameZh:"人民代表大会制度",nameEn:"People's Congress System",year:11,eraId:"L4",categoryId:"politics",importance:5,faces:20,shape:"icosahedron",prereqs:["pol11-01"],descZh:"掌握人民代表大会制度的组织活动原则与我国的基本政治制度。",grade:11,semester:1,stage:"高中",book:"统编版·思想政治·必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"pol11-03",nameZh:"法治中国建设",nameEn:"Building the Rule of Law",year:11,eraId:"L4",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol11-02"],descZh:"理解科学立法、严格执法、公正司法、全民守法的整体格局。",grade:11,semester:1,stage:"高中",book:"统编版·思想政治·必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"pol11-04",nameZh:"马克思主义哲学:唯物论与辩证法",nameEn:"Dialectical Materialism",year:11,eraId:"L4",categoryId:"politics",importance:5,faces:20,shape:"icosahedron",prereqs:["pol10-01"],descZh:"掌握物质与意识、联系与发展、矛盾分析法等基本原理。",grade:11,semester:1,stage:"高中",book:"统编版·思想政治·必修4",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"pol11-05",nameZh:"认识论与历史唯物主义",nameEn:"Epistemology and Historical Materialism",year:11,eraId:"L4",categoryId:"politics",importance:5,faces:20,shape:"icosahedron",prereqs:["pol11-04"],descZh:"理解实践与认识的辩证关系、社会存在与社会意识、人民群众的历史作用。",grade:11,semester:2,stage:"高中",book:"统编版·思想政治·必修4",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"pol11-06",nameZh:"文化传承与创新",nameEn:"Cultural Inheritance and Innovation",year:11,eraId:"L4",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol9-03"],descZh:"理解文化的民族性与时代性，把握文化创新的途径。",grade:11,semester:2,stage:"高中",book:"统编版·思想政治·必修4",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%BA%8C",wikiEn:""},{id:"pol12-01",nameZh:"国家与国际组织",nameEn:"States and International Organizations",year:12,eraId:"L4",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol11-01"],descZh:"理解国家性质与政体类型、联合国与主要国际组织的功能。",grade:12,semester:1,stage:"高中",book:"统编版·思想政治·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"pol12-02",nameZh:"经济全球化与对外开放",nameEn:"Globalization and Opening Up",year:12,eraId:"L4",categoryId:"politics",importance:5,faces:20,shape:"icosahedron",prereqs:["pol10-04"],descZh:"分析全球化的表现与影响，理解我国对外开放的基本战略。",grade:12,semester:1,stage:"高中",book:"统编版·思想政治·选择性必修1",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"pol12-03",nameZh:"民事权利与婚姻家庭",nameEn:"Civil Rights and Family Law",year:12,eraId:"L4",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol8-04"],descZh:"掌握民事主体、物权合同侵权责任与婚姻家庭法律规范。",grade:12,semester:1,stage:"高中",book:"统编版·思想政治·选择性必修2",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"pol12-04",nameZh:"逻辑与思维",nameEn:"Logic and Thinking",year:12,eraId:"L4",categoryId:"politics",importance:4,faces:12,shape:"dodecahedron",prereqs:["pol11-05"],descZh:"掌握概念、判断、推理的形式规则与辩证思维方法。",grade:12,semester:1,stage:"高中",book:"统编版·思想政治·选择性必修3",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"pol12-05",nameZh:"高考专题:政治主观题",nameEn:"Gaokao: Essay Questions",year:12,eraId:"L4",categoryId:"politics",importance:3,faces:8,shape:"octahedron",prereqs:["pol12-02"],descZh:"按设问类型建立知识调用与材料分析的答题模板。",grade:12,semester:1,stage:"高中",book:"高三一轮复习",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E9%AB%98%E4%B8%AD/%E9%AB%98%E4%B8%89",wikiEn:""},{id:"sci1-01",nameZh:"观察植物与动物",nameEn:"Observing Plants and Animals",year:1,eraId:"L1",categoryId:"science",importance:3,faces:8,shape:"octahedron",prereqs:[],descZh:"用眼看、手摸、鼻闻等方式观察身边的动植物，说出它们的特征。",grade:1,semester:1,stage:"小学",book:"教科版·科学·一年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci1-02",nameZh:"我们的身体",nameEn:"Our Body",year:1,eraId:"L1",categoryId:"science",importance:2,faces:7,shape:"heptagonal_prism",prereqs:["sci1-01"],descZh:"认识身体的主要外部器官及其功能，养成卫生习惯。",grade:1,semester:2,stage:"小学",book:"教科版·科学·一年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%80%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci2-01",nameZh:"材料与它们的性质",nameEn:"Materials and Properties",year:2,eraId:"L1",categoryId:"science",importance:3,faces:8,shape:"octahedron",prereqs:[],descZh:"比较木头、金属、塑料、玻璃等材料的软硬、吸水性与透明度。",grade:2,semester:1,stage:"小学",book:"教科版·科学·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci2-02",nameZh:"天气与季节变化",nameEn:"Weather and Seasons",year:2,eraId:"L1",categoryId:"science",importance:3,faces:8,shape:"octahedron",prereqs:["sci1-01"],descZh:"用气温、云量、风等描述天气，记录一周天气并总结季节特点。",grade:2,semester:2,stage:"小学",book:"教科版·科学·二年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%8C%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci3-01",nameZh:"水与水的三态变化",nameEn:"Water and Its States",year:3,eraId:"L2",categoryId:"science",importance:4,faces:12,shape:"dodecahedron",prereqs:["sci2-02"],descZh:"通过实验观察水的蒸发、凝结、结冰与融化，理解状态变化与温度的关系。",grade:3,semester:1,stage:"小学",book:"教科版·科学·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci3-02",nameZh:"空气与风",nameEn:"Air and Wind",year:3,eraId:"L2",categoryId:"science",importance:3,faces:8,shape:"octahedron",prereqs:["sci2-02"],descZh:"证明空气占据空间、有质量，用简易风向标观测风向。",grade:3,semester:1,stage:"小学",book:"教科版·科学·三年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci3-03",nameZh:"植物的生长与繁殖",nameEn:"Plant Growth and Reproduction",year:3,eraId:"L2",categoryId:"science",importance:4,faces:12,shape:"dodecahedron",prereqs:["sci1-01"],descZh:"观察种子萌发条件与植物一生的变化，认识花、果实、种子的作用。",grade:3,semester:2,stage:"小学",book:"教科版·科学·三年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%B8%89%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci4-01",nameZh:"声音的产生与传播",nameEn:"Sound Production and Transmission",year:4,eraId:"L2",categoryId:"science",importance:4,faces:12,shape:"dodecahedron",prereqs:[],descZh:"通过音叉、鼓面等实验理解振动发声，比较不同介质中的传播效果。",grade:4,semester:1,stage:"小学",book:"教科版·科学·四年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci4-02",nameZh:"简单电路与导体绝缘体",nameEn:"Simple Circuits",year:4,eraId:"L2",categoryId:"science",importance:5,faces:20,shape:"icosahedron",prereqs:["sci2-01"],descZh:"用电池、导线、灯泡组成通路，区分导体与绝缘体，理解开关的作用。",grade:4,semester:1,stage:"小学",book:"教科版·科学·四年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci4-03",nameZh:"岩石与土壤",nameEn:"Rocks and Soil",year:4,eraId:"L2",categoryId:"science",importance:3,faces:8,shape:"octahedron",prereqs:[],descZh:"观察岩石的颜色、颗粒与硬度，用沉积实验分析土壤成分。",grade:4,semester:2,stage:"小学",book:"教科版·科学·四年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%9B%9B%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci5-01",nameZh:"光与影子",nameEn:"Light and Shadows",year:5,eraId:"L2",categoryId:"science",importance:4,faces:12,shape:"dodecahedron",prereqs:["sci4-01"],descZh:"理解光沿直线传播，探究影子大小方向与光源位置的关系，认识光的反射。",grade:5,semester:1,stage:"小学",book:"教科版·科学·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci5-02",nameZh:"热传递与保温",nameEn:"Heat Transfer",year:5,eraId:"L2",categoryId:"science",importance:3,faces:8,shape:"octahedron",prereqs:["sci4-02"],descZh:"区分传导、对流、辐射三种方式，设计保温杯并测试效果。",grade:5,semester:1,stage:"小学",book:"教科版·科学·五年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci5-03",nameZh:"地球的运动与昼夜四季",nameEn:"Earth's Motion",year:5,eraId:"L2",categoryId:"science",importance:4,faces:12,shape:"dodecahedron",prereqs:["sci2-02"],descZh:"用地球仪和手电筒模拟自转公转，解释昼夜交替与四季变化。",grade:5,semester:2,stage:"小学",book:"教科版·科学·五年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci5-04",nameZh:"生物与环境:食物链",nameEn:"Organisms and Environment",year:5,eraId:"L2",categoryId:"science",importance:4,faces:12,shape:"dodecahedron",prereqs:["sci3-03"],descZh:"理解食物链食物网、生态瓶实验与生物对环境的适应。",grade:5,semester:2,stage:"小学",book:"教科版·科学·五年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E4%BA%94%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci6-01",nameZh:"能量的形式与转换",nameEn:"Forms and Conversion of Energy",year:6,eraId:"L2",categoryId:"science",importance:5,faces:20,shape:"icosahedron",prereqs:["sci4-02"],descZh:"认识电能、光能、热能、机械能的相互转换，制作简易能量转换装置。",grade:6,semester:1,stage:"小学",book:"教科版·科学·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci6-02",nameZh:"物质的变化:物理与化学",nameEn:"Physical and Chemical Changes",year:6,eraId:"L2",categoryId:"science",importance:5,faces:20,shape:"icosahedron",prereqs:["sci3-01"],descZh:"通过小苏打与白醋、铁钉生锈等实验区分物理变化与化学变化。",grade:6,semester:1,stage:"小学",book:"教科版·科学·六年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci6-03",nameZh:"宇宙与太阳系",nameEn:"Universe and Solar System",year:6,eraId:"L2",categoryId:"science",importance:4,faces:12,shape:"dodecahedron",prereqs:["sci5-03"],descZh:"认识太阳系八大行星、月相变化与星座，了解人类探索宇宙的历程。",grade:6,semester:2,stage:"小学",book:"教科版·科学·六年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci6-04",nameZh:"健康生活与人体系统",nameEn:"Healthy Living and Body Systems",year:6,eraId:"L2",categoryId:"science",importance:4,faces:12,shape:"dodecahedron",prereqs:["sci1-02"],descZh:"认识消化、呼吸、循环、神经系统的协同，制定个人健康计划。",grade:6,semester:2,stage:"小学",book:"教科版·科学·六年级上册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""},{id:"sci6-05",nameZh:"工程设计:制作与改进",nameEn:"Engineering Design",year:6,eraId:"L2",categoryId:"science",importance:3,faces:8,shape:"octahedron",prereqs:["sci6-01"],descZh:"经历明确问题、设计方案、制作测试、迭代改进的完整工程流程。",grade:6,semester:2,stage:"小学",book:"教科版·科学·六年级下册",repoPath:"https://github.com/TapXWorld/ChinaTextbook/tree/master/%E5%B0%8F%E5%AD%A6/%E5%85%AD%E5%B9%B4%E7%BA%A7",wikiEn:""}],Vf=[{id:"L1",nameZh:"启蒙层",nameEn:"Foundation I",subtitle:"小学 1-2 年级",yearStart:1,yearEnd:3,order:1,axisLabel:"年级"},{id:"L2",nameZh:"基础层",nameEn:"Foundation II",subtitle:"小学 3-6 年级",yearStart:3,yearEnd:7,order:2,axisLabel:"年级"},{id:"L3",nameZh:"进阶层",nameEn:"Intermediate",subtitle:"初中 7-9 年级",yearStart:7,yearEnd:10,order:3,axisLabel:"年级"},{id:"L4",nameZh:"高阶层",nameEn:"Advanced",subtitle:"高中 10-12 年级",yearStart:10,yearEnd:13,order:4,axisLabel:"年级"}],qf=[{id:"chinese",nameZh:"语文",nameEn:"Chinese",color:"#E35D6A",shape:"auto",order:0},{id:"math",nameZh:"数学",nameEn:"Mathematics",color:"#4C8FE0",shape:"auto",order:1},{id:"english",nameZh:"英语",nameEn:"English",color:"#9B6DD6",shape:"auto",order:2},{id:"physics",nameZh:"物理",nameEn:"Physics",color:"#29A8A0",shape:"auto",order:3},{id:"chemistry",nameZh:"化学",nameEn:"Chemistry",color:"#E9A33C",shape:"auto",order:4},{id:"biology",nameZh:"生物",nameEn:"Biology",color:"#63C062",shape:"auto",order:5},{id:"history",nameZh:"历史",nameEn:"History",color:"#C08552",shape:"auto",order:6},{id:"geography",nameZh:"地理",nameEn:"Geography",color:"#D8C13F",shape:"auto",order:7},{id:"politics",nameZh:"道法·政治",nameEn:"Politics",color:"#D9719E",shape:"auto",order:8},{id:"science",nameZh:"科学",nameEn:"Science",color:"#7E93A8",shape:"auto",order:9}],Jc={1:.75,2:.9,3:1.05,4:1.25,5:1.55},jf=r=>Math.PI*(Jc[r]+.5)**2,Yf=22,Kf=12,$f=.5,Jf=78,Qf=4.5;function eg(r,e,t){const a=[...e].sort((E,y)=>E.yearStart-y.yearStart),i=[...t].sort((E,y)=>E.order-y.order),n=[],s=[];let o=0;for(const E of a){const y=r.filter(S=>S.eraId===E.id).sort((S,R)=>S.year-R.year||S.nameZh.localeCompare(R.nameZh)),d=y.length||1,p=new Map;for(const S of y)p.set(S.categoryId,(p.get(S.categoryId)??0)+1);const A=[];let x=0;for(const S of i){const R=p.get(S.id);if(!R)continue;const V=R/d*Math.PI*2;A.push({cat:S,angleStart:x,angleEnd:x+V,count:R}),x+=V}let T=0;for(const S of A){const R=y.filter(g=>g.categoryId===S.cat.id).reduce((g,b)=>g+jf(b.importance),0),V=(S.angleEnd-S.angleStart)/(Math.PI*2);V>0&&(T=Math.max(T,R/V))}const L=Math.max(Kf,Math.sqrt(T/(Math.PI*$f))),B=[];for(const S of A){const R=y.filter(O=>O.categoryId===S.cat.id),V=S.angleEnd-S.angleStart,g=Math.max(1,Math.ceil(Math.sqrt(R.length/2))),b=Math.min(3.5,L*.25);let F=0;for(let O=0;O<g;O++){const X=b+(L-b)*(O+.6)/g,$=R.length-F,Z=Math.max(1,Math.floor(V*X/2.9)),Y=O===g-1?$:Math.min(Z,$);for(let z=0;z<Y;z++,F++){const te=R[F],he=S.angleStart+V*(z+.5)/Y+(O%2?V/Y/4:0),_e=X+(O%2?.8:-.4),Ue=new C(Math.cos(he)*_e,o,Math.sin(he)*_e),We={...te,pos:Ue,angle:he,radius:Jc[te.importance]??1,ringIndex:s.length,appearTime:0};B.push(We)}}}tg(n.concat(B),B,o,L),n.push(...B),s.push({era:E,y:o,radius:L,sectors:A,dwell:Qf+y.length*.16,clockStart:0,count:y.length}),o+=Yf+L*.5}const c=s.reduce((E,y)=>E+y.dwell,0),h=Jf/Math.max(1,c);let l=0;for(const E of s){E.dwell*=h,E.clockStart=l;const y=n.filter(p=>p.ringIndex===s.indexOf(E)).sort((p,A)=>p.year-A.year||p.nameZh.localeCompare(A.nameZh)),d=E.dwell/Math.max(1,y.length);y.forEach((p,A)=>{p.appearTime=l+A*d}),l+=E.dwell}const u=new Map(n.map(E=>[E.id,E])),m=[],f=1.5;for(const E of n)for(const y of E.prereqs){const d=u.get(y);if(!d)continue;let p=d.appearTime+f*.25;const A=Math.max(E.appearTime,p+.2);A-p>f&&(p=A-f),m.push({from:d,to:E,growStart:p,growEnd:A,crossEra:d.eraId!==E.eraId})}return{nodes:n,edges:m,rings:s,topY:o+10,tourDuration:l}}function tg(r,e,t,a){const i=(n,s)=>(n.radius+s.radius)*1.35;for(let n=0;n<6;n++){let s=!1;for(let o=0;o<e.length;o++)for(let c=o+1;c<e.length;c++){const h=e[o],l=e[c],u=l.pos.x-h.pos.x,m=l.pos.z-h.pos.z,f=Math.hypot(u,m),E=i(h,l);if(f>=E||f<1e-6)continue;const y=(E-f)/2,d=u/f,p=m/f;h.pos.x-=d*y,h.pos.z-=p*y,l.pos.x+=d*y,l.pos.z+=p*y,s=!0}for(const o of e){const c=Math.hypot(o.pos.x,o.pos.z),h=a*1.02;if(c>h){const l=h/c;o.pos.x*=l,o.pos.z*=l}o.pos.y=t,o.angle=Math.atan2(o.pos.z,o.pos.x)}if(!s)break}}function ag(r){switch(r){case 5:return new Xs(1,1);case 4:return new zs(1,0);case 3:return new Hs(1,1);case 2:return new xr(1.25,1.25,1.25);default:return new Vs(1.3,0)}}const Gt=new nt;function Na(r,e,t=1,a=!0,i=1){const n=a?r.baseScale[e]*t*i:1e-4;Gt.position.copy(r.basePos[e]),Gt.scale.setScalar(n),Gt.rotation.set(0,0,0),Gt.updateMatrix(),r.mesh.setMatrixAt(e,Gt.matrix),r.mesh.instanceMatrix.needsUpdate=!0}function rg(r,e=1){const t=new Ua,a=new Map;for(const s of r)a.has(s.importance)||a.set(s.importance,[]),a.get(s.importance).push(s);const i=[],n=new Map;for(const[s,o]of[...a.entries()].sort((c,h)=>c[0]-h[0])){const c=ag(s),h=new Nf({color:16777215,roughness:.42,metalness:.08,flatShading:!0,transparent:!0,opacity:e,emissive:new be(1118481),envMapIntensity:.6}),l=new kf(c,h,o.length);l.instanceMatrix.setUsage(el),l.frustumCulled=!1;const u=new be,m=[],f=[],E=[];o.forEach((d,p)=>{Gt.position.copy(d.pos),Gt.scale.setScalar(d.radius),Gt.rotation.set(0,0,0),Gt.updateMatrix(),l.setMatrixAt(p,Gt.matrix),u.set(d.categoryColor),l.setColorAt(p,u),m.push(d.radius),f.push(d.pos.clone()),E.push(u.clone())}),l.instanceColor.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0;const y={importance:s,mesh:l,map:o,material:h,baseScale:m,basePos:f,baseColor:E};i.push(y),o.forEach((d,p)=>n.set(d.id,{batch:y,instanceId:p})),t.add(l)}return{batches:i,index:n,group:t}}function ig(r,e){const t=r.edges.length*60,a=new Float32Array(t),i=new Float32Array(t);r.edges.forEach((h,l)=>{const u=e.get(h.to.categoryId)??"#888888",m=new be(u),f=l*60;for(let E=0;E<10;E++)for(let y=0;y<2;y++){const d=f+(E*2+y)*3;i[d]=m.r*.55,i[d+1]=m.g*.55,i[d+2]=m.b*.55}});const n=new ut;n.setAttribute("position",new Tt(a,3)),n.setAttribute("color",new Tt(i,3));const s=new qr({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,blending:kn}),o=new Yc(n,s);o.frustumCulled=!1;const c=r.edges.map((h,l)=>({edgeIdx:l,offset:l*60}));return{lines:o,positions:a,ranges:c}}new C;new C,new C,new C,new C;function ng(r,e){const t=new Ua;for(const a of r.rings){const i=new Gs(a.radius*.985,a.radius*1.015,128,1),n=new Ns({color:16777215,transparent:!0,opacity:.09,side:Ht,depthWrite:!1}),s=new Lt(i,n);s.rotation.x=-Math.PI/2,s.position.y=a.y,s.userData.ringIndex=r.rings.indexOf(a),t.add(s);for(const o of a.sectors){const c=new ut,h=[],l=24;for(let f=0;f<=l;f++){const E=o.angleStart+(o.angleEnd-o.angleStart)*f/l;h.push(Math.cos(E)*a.radius,0,Math.sin(E)*a.radius)}c.setAttribute("position",new lt(h,3));const u=new qr({color:new be(e.get(o.cat.id)??"#ffffff"),transparent:!0,opacity:.22,depthWrite:!1}),m=new Zs(c,u);m.position.y=a.y+.02,m.userData.ringIndex=r.rings.indexOf(a),t.add(m)}}return t}function sg(r){const e=new Pf;e.background=new be("#0a0e16"),e.fog=new Ws("#0a0e16",r*1.2,r*3.2);const t=new Ff(12375295,1778227,.85);e.add(t);const a=new mc(16777215,1.5);a.position.set(60,120,80),e.add(a);const i=new mc(8368383,.75);i.position.set(-80,40,-70),e.add(i);const n=new Wf(16777215,.5,0,1.4);return n.position.set(0,r*.55,0),e.add(n),{scene:e,lights:[t,a,i,n]}}function og(r){const e=new Ua,t=new ut().setFromPoints([new C(0,-2,0),new C(0,r+6,0)]),a=new Zs(t,new qr({color:3820134,transparent:!0,opacity:.55}));e.add(a);const i=new Hf(260,26,1976893,1317929);i.material.transparent=!0,i.material.opacity=.55,i.position.y=-2,e.add(i);const n=900,s=new Float32Array(n*3);for(let h=0;h<n;h++){const l=300+Math.random()*380,u=Math.random()*Math.PI*2,m=Math.acos(2*Math.random()-1);s[h*3]=l*Math.sin(m)*Math.cos(u),s[h*3+1]=l*Math.cos(m)*.6+r*.5,s[h*3+2]=l*Math.sin(m)*Math.sin(u)}const o=new ut;o.setAttribute("position",new Tt(s,3));const c=new Uf(o,new Kc({color:9414344,size:1.1,transparent:!0,opacity:.55,sizeAttenuation:!0}));return e.add(c),e}class cg{constructor(e,t){this.target=new C(0,0,0),this.distance=120,this.theta=Math.PI*.25,this.phi=Math.PI*.32,this.minDistance=12,this.maxDistance=420,this.enabled=!0,this.dragging=null,this.last={x:0,y:0},this.pointers=new Map,this.pinchDist=0,this.damping={theta:0,phi:0},this.camera=e,this.canvas=t,this.bind(),this.update()}clearInertia(){this.damping.theta=0,this.damping.phi=0}bind(){const e=this.canvas;e.addEventListener("contextmenu",a=>a.preventDefault()),e.addEventListener("pointerdown",a=>{this.enabled&&(this.pointers.set(a.pointerId,{x:a.clientX,y:a.clientY}),e.setPointerCapture(a.pointerId),this.pointers.size===1?(this.dragging=a.button===2||a.button===1?"pan":"rotate",this.last={x:a.clientX,y:a.clientY}):this.pointers.size===2&&(this.dragging=null,this.pinchDist=this.pointerGap()))}),e.addEventListener("pointermove",a=>{if(!this.pointers.has(a.pointerId))return;if(this.pointers.set(a.pointerId,{x:a.clientX,y:a.clientY}),this.pointers.size===2){const s=this.pointerGap();this.pinchDist>0&&this.zoom((this.pinchDist-s)*.02),this.pinchDist=s;return}if(!this.dragging)return;const i=a.clientX-this.last.x,n=a.clientY-this.last.y;this.last={x:a.clientX,y:a.clientY},this.dragging==="rotate"?(this.damping.theta-=i*.005,this.damping.phi-=n*.004):this.pan(i,n)});const t=a=>{this.pointers.delete(a.pointerId),this.pointers.size===0&&(this.dragging=null),this.pointers.size<2&&(this.pinchDist=0)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("wheel",a=>{this.enabled&&(a.preventDefault(),this.zoom(a.deltaY*.06))},{passive:!1})}pointerGap(){const e=[...this.pointers.values()];return Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)}zoom(e){this.distance=Or.clamp(this.distance*(1+e*.01),this.minDistance,this.maxDistance)}pan(e,t){const a=this.distance*.0016,i=new C().setFromMatrixColumn(this.camera.matrix,0),n=new C(0,1,0);this.target.addScaledVector(i,-e*a),this.target.addScaledVector(n,t*a)}focusRing(e,t){const a=t*e.topY;this.target.set(0,a,0)}update(){this.theta+=this.damping.theta,this.phi+=this.damping.phi,this.damping.theta*=.82,this.damping.phi*=.82,this.phi=Or.clamp(this.phi,.06,Math.PI-.06),this.target.y=Or.clamp(this.target.y,-20,400);const e=Math.sin(this.phi);this.camera.position.set(this.target.x+this.distance*e*Math.cos(this.theta),this.target.y+this.distance*Math.cos(this.phi),this.target.z+this.distance*e*Math.sin(this.theta)),this.camera.lookAt(this.target),this.onChange?.()}dispose(){this.enabled=!1}}class hg{constructor(e,t){this.items=[],this.w=1,this.h=1,this.root=e,this.camera=t}build(e,t){this.root.innerHTML="",this.items=[];for(const a of e.rings)for(let i=0;i<4;i++){const n=Math.PI*2*i/4+Math.PI/4,s=document.createElement("div");s.className="era-label",s.innerHTML=`<b>${a.era.nameZh}</b><span>${a.era.subtitle??""}</span>`,s.dataset.ring=String(e.rings.indexOf(a)),this.root.appendChild(s),this.items.push({el:s,pos:new C(Math.cos(n)*(a.radius+5),a.y+1.2,Math.sin(n)*(a.radius+5)),kind:"era",ringIndex:e.rings.indexOf(a),priority:1e3,baseOpacity:.9})}e.rings.forEach((a,i)=>{for(const n of a.sectors){const s=document.createElement("div");s.className="sector-label",s.style.setProperty("--c",t.get(n.cat.id)??"#8aa"),s.innerHTML=`<b>${n.cat.nameZh}</b><em>${n.count}</em>`,this.root.appendChild(s);const o=(n.angleStart+n.angleEnd)/2;this.items.push({el:s,pos:new C(Math.cos(o)*(a.radius+3.2),a.y+.2,Math.sin(o)*(a.radius+3.2)),kind:"sector",ringIndex:i,priority:500,baseOpacity:.9})}});for(const a of e.nodes){const i=document.createElement("div");i.className="node-label",i.innerHTML=a.nameEn?`<b>${a.nameZh}</b><i>${a.nameEn}</i>`:`<b>${a.nameZh}</b>`,i.style.setProperty("--c",t.get(a.categoryId)??"#8aa"),this.root.appendChild(i),this.items.push({el:i,pos:a.pos.clone().add(new C(0,a.radius+1.1,0)),nodeId:a.id,kind:"node",priority:a.importance*1e3-a.year,baseOpacity:.72})}}setSize(e,t){this.w=e,this.h=t}updateTour(e,t,a=60){const i=new C,n=this.camera.position;for(const c of this.items){if(c.kind==="node")continue;if(c.ringIndex!==e){c.el.style.display="none";continue}if(i.copy(c.pos).project(this.camera),i.z>=1||i.z<=-1){c.el.style.display="none";continue}const h=(i.x*.5+.5)*this.w,l=(-i.y*.5+.5)*this.h;c.el.style.display="block",c.el.style.transform=`translate(-50%,-50%) translate(${h.toFixed(1)}px,${l.toFixed(1)}px)`,c.el.style.opacity=String(c.baseOpacity)}const s=[];for(const c of this.items)if(c.kind==="node"){if(!c.nodeId||!(t?.has(c.nodeId)??!1)){c.el.style.display="none";continue}if(i.copy(c.pos).project(this.camera),i.z>=1||i.z<=-1){c.el.style.display="none";continue}s.push({item:c,d:n.distanceTo(c.pos),x:(i.x*.5+.5)*this.w,y:(-i.y*.5+.5)*this.h})}s.sort((c,h)=>h.item.priority-c.item.priority||c.d-h.d);const o=new Set(s.slice(0,a).map(c=>c.item));for(const c of s){if(!o.has(c.item)){c.item.el.style.display="none";continue}c.item.el.style.display="block",c.item.el.style.transform=`translate(-50%,-50%) translate(${c.x.toFixed(1)}px,${c.y.toFixed(1)}px)`,c.item.el.style.opacity=String(c.item.baseOpacity)}}update(e,t,a){const i=new C,n=this.camera.position,s=[];for(const h of this.items){i.copy(h.pos).project(this.camera);const l=i.z<1&&i.z>-1;s.push({item:h,d:n.distanceTo(h.pos),x:(i.x*.5+.5)*this.w,y:(-i.y*.5+.5)*this.h,vis:l})}const o=s.filter(h=>h.item.kind==="node"&&h.vis).sort((h,l)=>h.d-l.d),c=new Set(o.slice(0,e).map(h=>h.item));for(const h of s){const l=h.item.el;if(!h.vis){l.style.display="none";continue}if(t&&t(h.item.nodeId)){l.style.display="none";continue}if(h.item.kind==="sector"){l.style.display="block",l.style.transform=`translate(-50%,-50%) translate(${h.x.toFixed(1)}px,${h.y.toFixed(1)}px)`,l.style.opacity=String(.55*Or.clamp(1-(h.d-60)/200,.2,1));continue}if(h.item.kind==="node"&&!c.has(h.item)&&!(h.item.nodeId&&a?.has(h.item.nodeId))){l.style.display="none";continue}l.style.display="block",l.style.transform=`translate(-50%,-50%) translate(${h.x.toFixed(1)}px,${h.y.toFixed(1)}px)`;const u=Or.clamp(1-(h.d-60)/160,.15,1);l.style.opacity=String(h.item.baseOpacity*u)}}}const Ec=26,lg=1.72;class dg{constructor(e){this.state={active:!1,time:0,currentRing:0},this.res=e}get duration(){return this.res.tourDuration}start(){this.state={active:!0,time:0,currentRing:0}}stop(){this.state.active=!1}tick(e){if(!this.state.active)return null;this.state.time+=e;const t=this.state.time;let a=0;for(let u=0;u<this.res.rings.length;u++){const m=this.res.rings[u];t>=m.clockStart&&(a=u)}this.state.currentRing=a;const i=this.res.rings,n=i[a],s=i[a+1],o=(t-n.clockStart)/Math.max(.001,n.dwell);let c;if(s){const u=pg(Math.min(1,Math.max(0,(o-.7)/.3)));c=n.y+(s.y-n.y)*u}else c=n.y;c+=Ec;const h=t*lg*Math.PI/180,l=this.res.topY+Ec+4;return t>=this.duration&&(this.state.active=!1,this.onEnd?.()),{y:Math.min(c,l),roll:h,progress:Math.min(1,t/this.duration),layerProgress:Math.min(1,Math.max(0,o))}}visibleAt(e){return this.state.time>=e}}function pg(r){return r*r*(3-2*r)}function mg(r,e){const t=Math.atan(r*1.12/e);return Math.min(112,Math.max(30,t*2*180/Math.PI))}function ug(r){if(r<0)return 0;if(r<.18){const e=r/.18;return 2.5*(1-e)+1.55*e}if(r<.5){const e=(r-.18)/.32;return 1.55+(1-1.55)*gg(e)}return 1}function fg(r){return r<0||r>.35?0:Math.max(0,1-r/.35)*.85}function gg(r){return 1-(1-r)**3}function Eg(r){return new Map(r.map(e=>[e.id,e.color]))}function _g(r,e,t){const a=new Map(e.map(n=>[n.id,n])),i=new Map(t.map(n=>[n.id,n]));return r.map(n=>({...n,categoryColor:a.get(n.categoryId)?.color??"#8899aa",categoryName:a.get(n.categoryId)?.nameZh??n.categoryId,eraName:i.get(n.eraId)?.nameZh??n.eraId}))}const Qc=Vf,jr=qf,yg=Gf,ji=Eg(jr),Ye=eg(yg,Qc,jr),ra=_g(Ye.nodes,jr,Qc),Oa=new Map(ra.map(r=>[r.id,r])),Lr={nodes:ra.length,edges:Ye.edges.length,eras:Ye.rings.length,cats:jr.length,roots:ra.filter(r=>r.prereqs.length===0).length,maxDepth:(()=>{const r=new Map,e=t=>{if(r.has(t))return r.get(t);const a=Oa.get(t),i=!a||a.prereqs.length===0?0:1+Math.max(...a.prereqs.map(e));return r.set(t,i),i};return Math.max(...ra.map(t=>e(t.id)))})()},mr=document.getElementById("stage"),vg=document.getElementById("labels"),Yi=new Df({canvas:mr,antialias:!0,powerPreference:"high-performance"});Yi.setPixelRatio(Math.min(devicePixelRatio,2));Yi.setSize(innerWidth,innerHeight);const Rt=new It(46,innerWidth/innerHeight,.5,4e3),{scene:Yr}=sg(Ye.topY);Yr.add(og(Ye.topY));const ya=rg(ra);Yr.add(ya.group);const dt=ig(Ye,ji);Yr.add(dt.lines);const eh=ng(Ye,ji);Yr.add(eh);const Xr=new hg(vg,Rt);Xr.build(Ye,ji);Xr.setSize(innerWidth,innerHeight);const it=new cg(Rt,mr);it.target.set(0,Ye.topY*.42,0);it.distance=Ye.topY*1.55;it.phi=Math.PI*.36;function bg(){Rt.aspect=innerWidth/innerHeight,Rt.updateProjectionMatrix(),Yi.setSize(innerWidth,innerHeight),Xr.setSize(innerWidth,innerHeight)}addEventListener("resize",bg);const th=new Map,Wr=new Map;for(const r of ra){th.set(r.id,r.prereqs);for(const e of r.prereqs)Wr.has(e)||Wr.set(e,[]),Wr.get(e).push(r.id)}function js(r,e=new Set){for(const t of th.get(r)??[])e.has(t)||(e.add(t),js(t,e));return e}function Ys(r,e=new Set){for(const t of Wr.get(r)??[])e.has(t)||(e.add(t),Ys(t,e));return e}const Ts=new Xf;Ts.params.Line={threshold:.1};const _c=new Pe;let na=null,Vt=new Set,Oi=new Set,Hr=new Set;const Ra=document.getElementById("card"),Fa=document.getElementById("tooltip");mr.addEventListener("pointermove",r=>{if(Ct.state.active)return;_c.set(r.clientX/innerWidth*2-1,-(r.clientY/innerHeight)*2+1),Ts.setFromCamera(_c,Rt);const e=Ts.intersectObjects(ya.batches.map(a=>a.mesh),!1);let t=null;if(e.length){const a=e[0],i=ya.batches.find(s=>s.mesh===a.object),n=a.instanceId;i&&n!==void 0&&(t=i.map[n].id)}if(t!==na)if(na=t,t){const a=Oa.get(t);Oi=js(t),Hr=Ys(t),Vt=new Set([...Oi,...Hr,t]),xg(a,r.clientX,r.clientY),mr.style.cursor="pointer"}else Vt=new Set,Fa.style.display="none",mr.style.cursor="grab";else t&&ah(r.clientX,r.clientY)});mr.addEventListener("click",()=>{Ct.state.active||na&&rh(na)});function xg(r,e,t){Fa.innerHTML=`<b>${r.nameZh}</b><span>${r.nameEn}</span>
    <div class="t-meta"><i style="background:${r.categoryColor}"></i>${r.categoryName} · ${r.eraName} · ${r.grade} 年级</div>
    <div class="t-stars">${"★".repeat(r.importance)}${"☆".repeat(5-r.importance)}</div>`,Fa.style.display="block",ah(e,t)}function ah(r,e){const t=Fa.offsetWidth,a=Fa.offsetHeight;Fa.style.left=Math.min(r+16,innerWidth-t-12)+"px",Fa.style.top=Math.min(e+16,innerHeight-a-12)+"px"}function rh(r){const e=Oa.get(r),t=e.prereqs.map(i=>`<span class="lnk" data-id="${i}">${Oa.get(i)?.nameZh??i}</span>`).join("")||'<i class="none">无（起点知识点）</i>',a=(Wr.get(r)??[]).map(i=>`<span class="lnk" data-id="${i}">${Oa.get(i)?.nameZh??i}</span>`).join("")||'<i class="none">暂无后续</i>';Ra.innerHTML=`
    <button class="x" title="关闭">✕</button>
    <h3>${e.nameZh}</h3>
    <p class="en">${e.nameEn}</p>
    <div class="meta">
      <span class="pill" style="background:${e.categoryColor}">${e.categoryName}</span>
      <span class="pill" style="background:#4b5a72">${e.eraName}</span>
      <span class="stars">${"★".repeat(e.importance)}${"☆".repeat(5-e.importance)}</span>
      <div class="kv">年级 ${e.grade}${e.semester?` · 第 ${e.semester} 学期`:""} · ${e.stage||""}</div>
      ${e.book?`<div class="kv">教材 ${e.book}</div>`:""}
    </div>
    <p class="desc">${e.descZh}</p>
    <div class="sec"><b>前置知识点（先学）</b><div>${t}</div></div>
    <div class="sec"><b>后续知识点（后学）</b><div>${a}</div></div>
    ${e.repoPath?`<a class="repo" href="${e.repoPath}" target="_blank" rel="noopener">📖 对应教材目录</a>`:""}
  `,Ra.style.display="block",Ra.querySelector(".x")?.addEventListener("click",()=>Ra.style.display="none"),Ra.querySelectorAll(".lnk").forEach(i=>i.addEventListener("click",()=>ih(i.dataset.id)))}function ih(r){const e=Oa.get(r);e&&(rh(r),it.target.copy(e.pos),it.distance=Math.min(it.distance,90),na=r,Oi=js(r),Hr=Ys(r),Vt=new Set([...Oi,...Hr,r]))}const Ag=document.getElementById("legendList"),ga=new Set;jr.forEach(r=>{const e=document.createElement("button");e.className="lg",e.innerHTML=`<i style="background:${r.color}"></i>${r.nameZh}<em>${ra.filter(t=>t.categoryId===r.id).length}</em>`,e.addEventListener("click",()=>{ga.has(r.id)?ga.delete(r.id):ga.add(r.id),e.classList.toggle("off"),Tg()}),Ag.appendChild(e)});function Tg(){for(const r of ya.batches)r.map.forEach((e,t)=>{const a=ga.has(e.categoryId);Na(r,t,1,!a)});for(let r=0;r<Ye.edges.length;r++){const e=Ye.edges[r];(ga.has(e.from.categoryId)||ga.has(e.to.categoryId))&&dt.positions.fill(0,r*180,r*180+180)}dt.lines.geometry.attributes.position.needsUpdate=!0}const Ms=document.getElementById("labelCount"),nh=document.getElementById("labelCountVal");let Wi=Number(Ms.value);Ms.addEventListener("input",()=>{Wi=Number(Ms.value),nh.textContent=String(Wi)});nh.textContent=String(Wi);const Ct=new dg(Ye),Mg=document.getElementById("btnTour"),Sg=document.getElementById("btnReset"),Ks=document.getElementById("tourBar"),Bg=document.getElementById("tourFill"),sh=document.body,Di=10,Zi=Di*2*3;function zi(r,e){const t=Ye.edges[r],a=r*Zi,i=dt.positions;if(e<=0){i.fill(0,a,a+Zi);return}const n=t.from.pos,s=t.to.pos,o=new C(n.x,n.y+(s.y-n.y)*.45,n.z),c=new C(s.x,s.y-(s.y-n.y)*.45,s.z),h=new C().addVectors(n,s).multiplyScalar(.5),l=n.distanceTo(s)*.1,u=new C(h.x,0,h.z).normalize().multiplyScalar(l);o.add(u),c.add(u);let m=n.x,f=n.y,E=n.z;for(let y=0;y<=Di;y++){const d=y/Di,p=1-d,A=p**3*n.x+3*p*p*d*o.x+3*p*d*d*c.x+d**3*s.x,x=p**3*n.y+3*p*p*d*o.y+3*p*d*d*c.y+d**3*s.y,T=p**3*n.z+3*p*p*d*o.z+3*p*d*d*c.z+d**3*s.z;if(y>0){const L=a+(y-1)*6;(y-1)/Di<=e?(i[L]=m,i[L+1]=f,i[L+2]=E,i[L+3]=A,i[L+4]=x,i[L+5]=T):i[L]=i[L+1]=i[L+2]=i[L+3]=i[L+4]=i[L+5]=0}m=A,f=x,E=T}}function oh(){Ct.start(),it.enabled=!1,sh.classList.add("touring"),Ks.style.display="block";for(const r of ya.batches)for(let e=0;e<r.map.length;e++)Na(r,e,1,!1);for(let r=0;r<Ye.edges.length;r++)zi(r,0);dt.lines.geometry.attributes.position.needsUpdate=!0}function $s(){Ct.stop(),it.enabled=!0,sh.classList.remove("touring"),Ks.style.display="none",Rt.fov=46,Rt.updateProjectionMatrix();for(const r of ya.batches)for(let e=0;e<r.map.length;e++)Na(r,e,1,!0)}Mg.addEventListener("click",()=>Ct.state.active?$s():oh());Sg.addEventListener("click",()=>{it.target.set(0,Ye.topY*.42,0),it.distance=Ye.topY*1.55,it.theta=Math.PI*.25,it.phi=Math.PI*.36,Ra.style.display="none",na=null,Vt=new Set});addEventListener("keydown",r=>{r.key==="Escape"&&(Ct.state.active?$s():(Ra.style.display="none",Vt=new Set,na=null)),r.key==="/"&&(r.preventDefault(),document.getElementById("searchInput")?.focus())});Ks.addEventListener("click",()=>$s());const Rn=document.getElementById("searchInput"),kr=document.getElementById("searchResults");Rn.addEventListener("input",()=>{const r=Rn.value.trim().toLowerCase();if(!r){kr.style.display="none";return}const e=ra.filter(t=>t.nameZh.toLowerCase().includes(r)||t.nameEn.toLowerCase().includes(r)).slice(0,24);kr.innerHTML=e.length?e.map(t=>`<button data-id="${t.id}"><i style="background:${t.categoryColor}"></i>${t.nameZh}<em>${t.categoryName} · ${t.eraName}</em></button>`).join(""):'<p class="empty">没有匹配的知识点</p>',kr.style.display="block",kr.querySelectorAll("button[data-id]").forEach(t=>t.addEventListener("click",()=>{kr.style.display="none",Rn.value="",ih(t.dataset.id)}))});const wg=new zf,or=new be,Ln=new Set;function ch(){const r=Math.min(wg.getDelta(),.05);if(Ct.state.active){const e=Ct.tick(r);if(e){const t=Ye.rings[Ct.state.currentRing];it.target.set(0,e.y,0),it.distance=(t?.radius??20)*1.9+14,it.phi=.03,it.clearInertia(),it.enabled=!1,Rt.fov=mg(t?.radius??20,it.distance),Rt.updateProjectionMatrix(),eh.children.forEach(i=>{const n=i.userData.ringIndex,s=n!==void 0&&Ye.rings[n]&&Ct.state.time>=Ye.rings[n].clockStart;i.visible=!!s});const a=Ct.state.time;for(const i of ya.batches)i.map.forEach((n,s)=>{const o=a-n.appearTime;if(o<0){Na(i,s,1,!1);return}const c=ug(o);Na(i,s,1,!0,c);const h=fg(o);h>0?(or.copy(i.baseColor[s]).lerp(new be(16777215),h),i.mesh.setColorAt(s,or),i.mesh.instanceColor.needsUpdate=!0):i.mesh.instanceColor&&(i.mesh.setColorAt(s,i.baseColor[s]),i.mesh.instanceColor.needsUpdate=!0)});for(let i=0;i<Ye.edges.length;i++){const n=Ye.edges[i];let s=0;a>=n.growEnd?s=1:a>n.growStart&&(s=(a-n.growStart)/Math.max(.001,n.growEnd-n.growStart)),zi(i,s)}dt.lines.geometry.attributes.position.needsUpdate=!0,dt.lines.material.opacity=.42,Rt.up.set(Math.sin(e.roll),Math.cos(e.roll),0),Bg.style.width=(e.progress*100).toFixed(1)+"%",Ln.clear();for(const i of ra)Ct.state.time>=i.appearTime&&Ln.add(i.id);Xr.updateTour(Ct.state.currentRing,Ln,60),it.update()}}else{Rt.up.set(0,1,0),dt.lines.material.opacity=.3,it.update();const e=na!==null;for(const t of ya.batches)t.map.forEach((a,i)=>{if(ga.has(a.categoryId)){Na(t,i,1,!1);return}const n=e&&Vt.has(a.id),s=e&&!n;Na(t,i,s?.86:n?1.12:1,!0),t.mesh.instanceColor&&(or.copy(t.baseColor[i]),s?or.multiplyScalar(.28):n&&or.lerp(new be(16777215),a.id===na?.35:.12),t.mesh.setColorAt(i,or))}),t.mesh.instanceColor&&(t.mesh.instanceColor.needsUpdate=!0);for(let t=0;t<Ye.edges.length;t++){const a=Ye.edges[t],i=e&&Vt.has(a.from.id)&&Vt.has(a.to.id);(i||!dt.drawn?.has(t))&&(zi(t,1),dt.drawn&&dt.drawn.add(t));const n=t*Zi,s=i?Hr.has(a.to.id)?8372479:16757631:0,o=new be(s),c=dt.lines.geometry.attributes.color;for(let h=0;h<Zi;h+=3)if(i)c.array[n+h]=o.r,c.array[n+h+1]=o.g,c.array[n+h+2]=o.b;else{const l=new be(ji.get(a.to.categoryId)??"#888").multiplyScalar(.55);c.array[n+h]=l.r,c.array[n+h+1]=l.g,c.array[n+h+2]=l.b}}dt.lines.geometry.attributes.color.needsUpdate=!0,dt.lines.geometry.attributes.position.needsUpdate=!0,Xr.update(Wi,t=>t?ga.has(Oa.get(t)?.categoryId??""):!1,Vt.size?Vt:void 0)}Yi.render(Yr,Rt),requestAnimationFrame(ch)}dt.drawn=new Set;for(let r=0;r<Ye.edges.length;r++)zi(r,1);dt.lines.geometry.attributes.position.needsUpdate=!0;dt.drawn=new Set([...Array(Ye.edges.length).keys()]);const Cg=document.getElementById("stats");Cg.innerHTML=`
  <span><b>${Lr.nodes}</b> 知识点</span>
  <span><b>${Lr.edges}</b> 先修关系</span>
  <span><b>${Lr.eras}</b> 认知层次</span>
  <span><b>${Lr.cats}</b> 学科轨道</span>
  <span>最长先修链 <b>${Lr.maxDepth}</b> 步</span>`;new URLSearchParams(location.search).has("tour")&&setTimeout(oh,600);ch();

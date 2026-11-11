(()=>{var $t={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},en={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bf=0,Kh=1,Ff=2;var pd=1,Lf=2,Yn=3,cn=0,Jt=1,Yt=2,vi=0,Zn=1,jh=2,Zh=3,Jh=4,sl=5,Gi=100,Uf=101,Of=102,Nf=103,Hf=104,zf=200,kf=201,Vf=202,Gf=203,ws=204,Cs=205,Wf=206,Xf=207,qf=208,Yf=209,Qf=210,Kf=211,jf=212,Zf=213,Jf=214,Qa=0,Ka=1,ja=2,Rs=3,Za=4,Ja=5,$a=6,ec=7,md=0,$f=1,ep=2,Mi=0,tp=1,np=2,ip=3,sp=4,rp=5,op=6,ap=7,$h="attached",cp="detached",gd=300,Is=301,Ps=302,tc=303,nc=304,Qo=306,qi=1e3,Kn=1001,xr=1002,Vt=1003,rl=1004;var Ms=1005;var jt=1006,fr=1007;var Ln=1008;var Rn=1009,xd=1010,yd=1011,yr=1012,ol=1013,ln=1014,Zt=1015,Ii=1016,al=1017,cl=1018,Ds=1020,Ad=35902,_d=1021,Sd=1022,Ot=1023,vd=1024,Md=1025,Ei=1026,Bs=1027,ll=1028,wr=1029,Ko=1030,hl=1031;var ts=1033,go=33776,xo=33777,yo=33778,Ao=33779,ic=35840,sc=35841,rc=35842,oc=35843,ac=36196,cc=37492,lc=37496,hc=37808,uc=37809,dc=37810,fc=37811,pc=37812,mc=37813,gc=37814,xc=37815,yc=37816,Ac=37817,_c=37818,Sc=37819,vc=37820,Mc=37821,_o=36492,Ec=36494,Tc=36495,Ed=36283,bc=36284,wc=36285,Cc=36286;var Fs=2300,Ls=2301,ga=2302,eu=2400,tu=2401,nu=2402,lp=2500;var Td=0,jo=1,Cr=2,hp=3200,up=3201;var bd=0,dp=1,_i="",_t="srgb",Wt="srgb-linear",Zo="linear",ht="srgb";var cs=7680;var iu=519,fp=512,pp=513,mp=514,wd=515,gp=516,xp=517,yp=518,Ap=519,Rc=35044,Cd=35048;var su="300 es",jn=2e3,So=2001,In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=1234567,pr=Math.PI/180,Us=180/Math.PI;function Cn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function ul(s,e){return(s%e+e)%e}function _p(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Sp(s,e,t){return s!==e?(t-s)/(e-s):0}function mr(s,e,t){return(1-t)*s+t*e}function vp(s,e,t,n){return mr(s,e,1-Math.exp(-t*n))}function Mp(s,e=1){return e-Math.abs(ul(s,e*2)-e)}function Ep(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function bp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wp(s,e){return s+Math.random()*(e-s)}function Cp(s){return s*(.5-Math.random())}function Rp(s){s!==void 0&&(ru=s);let e=ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ip(s){return s*pr}function Pp(s){return s*Us}function Dp(s){return(s&s-1)===0&&s!==0}function Bp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Fp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lp(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Pi={DEG2RAD:pr,RAD2DEG:Us,generateUUID:Cn,clamp:Ft,euclideanModulo:ul,mapLinear:_p,inverseLerp:Sp,lerp:mr,damp:vp,pingpong:Mp,smoothstep:Ep,smootherstep:Tp,randInt:bp,randFloat:wp,randFloatSpread:Cp,seededRandom:Rp,degToRad:Ip,radToDeg:Pp,isPowerOfTwo:Dp,ceilPowerOfTwo:Bp,floorPowerOfTwo:Fp,setQuaternionFromProperEuler:Lp,normalize:ct,denormalize:bn},ce=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],m=i[3],p=i[6],_=i[1],y=i[4],A=i[7],T=i[2],S=i[5],v=i[8];return r[0]=o*x+a*_+c*T,r[3]=o*m+a*y+c*S,r[6]=o*p+a*A+c*v,r[1]=l*x+h*_+u*T,r[4]=l*m+h*y+u*S,r[7]=l*p+h*A+u*v,r[2]=f*x+d*_+g*T,r[5]=f*m+d*y+g*S,r[8]=f*p+d*A+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xa.makeScale(e,t)),this}rotate(e){return this.premultiply(xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xa=new Ue;function Rd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Up(){let s=Ar("canvas");return s.style.display="block",s}var ou={};function ur(s){s in ou||(ou[s]=!0,console.warn(s))}function Op(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Np(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hp(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var je={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?Zo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var au=[.64,.33,.3,.6,.15,.06],cu=[.2126,.7152,.0722],lu=[.3127,.329],hu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Wt]:{primaries:au,whitePoint:lu,transfer:Zo,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:cu,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:au,whitePoint:lu,transfer:ht,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:cu,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});var ls,Ic=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Ar("canvas")),ls.width=e.width,ls.height=e.height;let n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ar("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zp=0,vo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ya(i[o].image)):r.push(ya(i[o]))}else r=ya(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ic.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kp=0,Nt=class s extends In{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Kn,i=Kn,r=jt,o=Ln,a=Ot,c=Rn,l=s.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Cn(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=gd;Nt.DEFAULT_ANISOTROPY=1;var Je=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,A=(d+1)/2,T=(p+1)/2,S=(h+f)/4,v=(u+x)/4,w=(g+m)/4;return y>A&&y>T?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=S/n,r=v/n):A>T?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=S/i,r=w/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=v/r,i=w/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pc=class extends In{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Mo=class extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dc=class extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let T=Math.sqrt(y),S=Math.atan2(T,p*_);m=Math.sin(m*S)/T,a=Math.sin(a*S)/T}let A=a*_;if(c=c*m+f*A,l=l*m+d*A,h=h*m+g*A,u=u*m+x*A,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Aa=new I,du=new $e,Ct=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Gr.subVectors(this.max,ir),hs.subVectors(e.a,ir),us.subVectors(e.b,ir),ds.subVectors(e.c,ir),pi.subVectors(us,hs),mi.subVectors(ds,us),Ui.subVectors(hs,ds);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ui.z,Ui.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ui.z,0,-Ui.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ui.y,Ui.x,0];return!_a(t,hs,us,ds,Gr)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,hs,us,ds,Gr))?!1:(Wr.crossVectors(pi,mi),t=[Wr.x,Wr.y,Wr.z],_a(t,hs,us,ds,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},kn=[new I,new I,new I,new I,new I,new I,new I,new I],Mn=new I,Vr=new Ct,hs=new I,us=new I,ds=new I,pi=new I,mi=new I,Ui=new I,ir=new I,Gr=new I,Wr=new I,Oi=new I;function _a(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Oi.fromArray(s,r);let a=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),c=e.dot(Oi),l=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Vp=new Ct,sr=new I,Sa=new I,hn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);let t=sr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Sa)),this.expandByPoint(sr.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new I,va=new I,Xr=new I,gi=new I,Ma=new I,qr=new I,Ea=new I,Un=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){va.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(va);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xr),a=gi.dot(this.direction),c=-gi.dot(Xr),l=gi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(va).addScaledVector(Xr,f),d}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);let n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,r){Ma.subVectors(t,e),qr.subVectors(n,e),Ea.crossVectors(Ma,qr);let o=this.direction.dot(Ea),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);let c=a*this.direction.dot(qr.crossVectors(gi,qr));if(c<0)return null;let l=a*this.direction.dot(Ma.cross(gi));if(l<0||c+l>o)return null;let h=-a*gi.dot(Ea);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,x,m)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gp,e,Wp)}lookAt(e,t,n){let i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),xi.crossVectors(n,rn),xi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),xi.crossVectors(n,rn)),xi.normalize(),Yr.crossVectors(rn,xi),i[0]=xi.x,i[4]=Yr.x,i[8]=rn.x,i[1]=xi.y,i[5]=Yr.y,i[9]=rn.y,i[2]=xi.z,i[6]=Yr.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],y=n[7],A=n[11],T=n[15],S=i[0],v=i[4],w=i[8],E=i[12],M=i[1],C=i[5],B=i[9],F=i[13],U=i[2],N=i[6],L=i[10],X=i[14],H=i[3],W=i[7],K=i[11],se=i[15];return r[0]=o*S+a*M+c*U+l*H,r[4]=o*v+a*C+c*N+l*W,r[8]=o*w+a*B+c*L+l*K,r[12]=o*E+a*F+c*X+l*se,r[1]=h*S+u*M+f*U+d*H,r[5]=h*v+u*C+f*N+d*W,r[9]=h*w+u*B+f*L+d*K,r[13]=h*E+u*F+f*X+d*se,r[2]=g*S+x*M+m*U+p*H,r[6]=g*v+x*C+m*N+p*W,r[10]=g*w+x*B+m*L+p*K,r[14]=g*E+x*F+m*X+p*se,r[3]=_*S+y*M+A*U+T*H,r[7]=_*v+y*C+A*N+T*W,r[11]=_*w+y*B+A*L+T*K,r[15]=_*E+y*F+A*X+T*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+x*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=u*m*l-x*f*l+x*c*d-a*m*d-u*c*p+a*f*p,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,A=h*x*l-g*u*l+g*a*d-o*x*d-h*a*p+o*u*p,T=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,S=t*_+n*y+i*A+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/S;return e[0]=_*v,e[1]=(x*f*r-u*m*r-x*i*d+n*m*d+u*i*p-n*f*p)*v,e[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*p+n*c*p)*v,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*v,e[4]=y*v,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*v,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*v,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*d+t*c*d)*v,e[8]=A*v,e[9]=(g*u*r-h*x*r-g*n*d+t*x*d+h*n*p-t*u*p)*v,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*v,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*v,e[12]=T*v,e[13]=(h*x*i-g*u*i+g*n*f-t*x*f-h*n*m+t*u*m)*v,e[14]=(g*a*i-o*x*i-g*n*c+t*x*c+o*n*m-t*a*m)*v,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*v,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,_=c*l,y=c*h,A=c*u,T=n.x,S=n.y,v=n.z;return i[0]=(1-(x+p))*T,i[1]=(d+A)*T,i[2]=(g-y)*T,i[3]=0,i[4]=(d-A)*S,i[5]=(1-(f+p))*S,i[6]=(m+_)*S,i[7]=0,i[8]=(g+y)*v,i[9]=(m-_)*v,i[10]=(1-(f+x))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=fs.set(i[0],i[1],i[2]).length(),o=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);let l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=jn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(a===jn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===So)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=jn){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,d=(n+i)*h,g,x;if(a===jn)g=(o+r)*u,x=-2*u;else if(a===So)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fs=new I,En=new ye,Gp=new I(0,0,0),Wp=new I(1,1,1),xi=new I,Yr=new I,rn=new I,fu=new ye,pu=new $e,On=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xp=0,mu=new I,ps=new $e,Gn=new ye,Qr=new I,rr=new I,qp=new I,Yp=new $e,gu=new I(1,0,0),xu=new I(0,1,0),yu=new I(0,0,1),Au={type:"added"},Qp={type:"removed"},ms={type:"childadded",child:null},Ta={type:"childremoved",child:null},rt=class s extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new On,n=new $e,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new Ue}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(gu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(rr,Qr,this.up):Gn.lookAt(Qr,rr,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Gn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qp),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};rt.DEFAULT_UP=new I(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new I,Wn=new I,ba=new I,Xn=new I,gs=new I,xs=new I,_u=new I,wa=new I,Ca=new I,Ra=new I,Ia=new Je,Pa=new Je,Da=new Je,Wi=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tn.subVectors(i,t),Wn.subVectors(n,t),ba.subVectors(e,t);let o=Tn.dot(Tn),a=Tn.dot(Wn),c=Tn.dot(ba),l=Wn.dot(Wn),h=Wn.dot(ba),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ia.setScalar(0),Pa.setScalar(0),Da.setScalar(0),Ia.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ia,r.x),o.addScaledVector(Pa,r.y),o.addScaledVector(Da,r.z),o}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),Wn.subVectors(e,t),Tn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Tn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;gs.subVectors(i,n),xs.subVectors(r,n),wa.subVectors(e,n);let c=gs.dot(wa),l=xs.dot(wa);if(c<=0&&l<=0)return t.copy(n);Ca.subVectors(e,i);let h=gs.dot(Ca),u=xs.dot(Ca);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(gs,o);Ra.subVectors(e,r);let d=gs.dot(Ra),g=xs.dot(Ra);if(g>=0&&d<=g)return t.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(xs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return _u.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(_u,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(gs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Ba(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=ul(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ba(o,r,e+1/3),this.g=Ba(o,r,e),this.b=Ba(o,r,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=Id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return je.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ft(kt.r*255,0,255))*65536+Math.round(Ft(kt.g*255,0,255))*256+Math.round(Ft(kt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(kt.copy(this),t);let n=kt.r,i=kt.g,r=kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=_t){je.fromWorkingColorSpace(kt.copy(this),e);let t=kt.r,n=kt.g,i=kt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Kr);let n=mr(yi.h,Kr.h,t),i=mr(yi.s,Kr.s,t),r=mr(yi.l,Kr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new Ce;Ce.NAMES=Id;var Kp=0,un=class extends In{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Cn(),this.name="",this.blending=Zn,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ws,this.blendDst=Cs,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ws&&(n.blendSrc=this.blendSrc),this.blendDst!==Cs&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gt=class extends un{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qn=jp();function jp(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Zp(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ft(s,-65504,65504),Qn.floatView[0]=s;let e=Qn.uint32View[0],t=e>>23&511;return Qn.baseTable[t]+((e&8388607)>>Qn.shiftTable[t])}function Jp(s){let e=s>>10;return Qn.uint32View[0]=Qn.mantissaTable[Qn.offsetTable[e]+(s&1023)]+Qn.exponentTable[e],Qn.floatView[0]}var Ws={toHalfFloat:Zp,fromHalfFloat:Jp},wt=new I,jr=new ce,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=Zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}};var To=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var bo=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},$p=0,xn=new ye,Fa=new rt,ys=new I,on=new Ct,or=new Ct,Bt=new I,St=class s extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rd(e)?bo:To)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(on.min,or.min),on.expandByPoint(Bt),Bt.addVectors(on.max,or.max),on.expandByPoint(Bt)):(on.expandByPoint(or.min),on.expandByPoint(or.max))}on.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(ys.fromBufferAttribute(e,l),Bt.add(ys)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new I,c[w]=new I;let l=new I,h=new I,u=new I,f=new ce,d=new ce,g=new ce,x=new I,m=new I;function p(w,E,M){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[w].add(x),a[E].add(x),a[M].add(x),c[w].add(m),c[E].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let w=0,E=_.length;w<E;++w){let M=_[w],C=M.start,B=M.count;for(let F=C,U=C+B;F<U;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let y=new I,A=new I,T=new I,S=new I;function v(w){T.fromBufferAttribute(i,w),S.copy(T);let E=a[w];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),A.crossVectors(S,E);let C=A.dot(c[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,C)}for(let w=0,E=_.length;w<E;++w){let M=_[w],C=M.start,B=M.count;for(let F=C,U=C+B;F<U;F+=3)v(e.getX(F+0)),v(e.getX(F+1)),v(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Et(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Su=new ye,Ni=new Un,Zr=new hn,vu=new I,Jr=new I,$r=new I,eo=new I,La=new I,to=new I,Mu=new I,no=new I,lt=class extends rt{constructor(e=new St,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(La.fromBufferAttribute(u,e),o?to.addScaledVector(La,h):to.addScaledVector(La.sub(t),h))}t.add(to)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(Zr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Zr,vu)===null||Ni.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(Su.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let A=_,T=y;A<T;A+=3){let S=a.getX(A),v=a.getX(A+1),w=a.getX(A+2);i=io(this,p,e,n,l,h,u,S,v,w),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),y=a.getX(m+1),A=a.getX(m+2);i=io(this,o,e,n,l,h,u,_,y,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let A=_,T=y;A<T;A+=3){let S=A,v=A+1,w=A+2;i=io(this,p,e,n,l,h,u,S,v,w),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let _=m,y=m+1,A=m+2;i=io(this,o,e,n,l,h,u,_,y,A),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function em(s,e,t,n,i,r,o,a){let c;if(e.side===Jt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===cn,a),c===null)return null;no.copy(a),no.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(no);return l<t.near||l>t.far?null:{distance:l,point:no.clone(),object:s}}function io(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Jr),s.getVertexPosition(c,$r),s.getVertexPosition(l,eo);let h=em(s,e,t,n,Jr,$r,eo,Mu);if(h){let u=new I;Wi.getBarycoord(Mu,Jr,$r,eo,u),i&&(h.uv=Wi.getInterpolatedAttribute(i,a,c,l,u,new ce)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,a,c,l,u,new ce)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new I,materialIndex:0};Wi.getNormal(Jr,$r,eo,f.normal),h.face=f,h.barycoord=u}return h}var Yi=class s extends St{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function g(x,m,p,_,y,A,T,S,v,w,E){let M=A/v,C=T/w,B=A/2,F=T/2,U=S/2,N=v+1,L=w+1,X=0,H=0,W=new I;for(let K=0;K<L;K++){let se=K*C-F;for(let Ee=0;Ee<N;Ee++){let Te=Ee*M-B;W[x]=Te*_,W[m]=se*y,W[p]=U,l.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[p]=S>0?1:-1,h.push(W.x,W.y,W.z),u.push(Ee/v),u.push(1-K/w),X+=1}}for(let K=0;K<w;K++)for(let se=0;se<v;se++){let Ee=f+se+N*K,Te=f+se+N*(K+1),j=f+(se+1)+N*(K+1),Z=f+(se+1)+N*K;c.push(Ee,Te,Z),c.push(Te,j,Z),H+=6}a.addGroup(d,H,E),d+=H,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Os(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){let e={};for(let t=0;t<s.length;t++){let n=Os(s[t]);for(let i in n)e[i]=n[i]}return e}function tm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pd(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var nm={clone:Os,merge:qt},im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends un{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=im,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},wo=class extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ai=new I,Eu=new ce,Tu=new ce,Mt=class extends wo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Eu,Tu),t.subVectors(Tu,Eu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},As=-90,_s=1,Bc=class extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Mt(As,_s,e,t);i.layers=this.layers,this.add(i);let r=new Mt(As,_s,e,t);r.layers=this.layers,this.add(r);let o=new Mt(As,_s,e,t);o.layers=this.layers,this.add(o);let a=new Mt(As,_s,e,t);a.layers=this.layers,this.add(a);let c=new Mt(As,_s,e,t);c.layers=this.layers,this.add(c);let l=new Mt(As,_s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===So)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Co=class extends Nt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fc=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Co(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yi(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:vi});r.uniforms.tEquirect.value=t;let o=new lt(i,r),a=t.minFilter;return t.minFilter===Ln&&(t.minFilter=jt),new Bc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Ua=new I,rm=new I,om=new Ue,an=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ua.subVectors(n,t).cross(rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||om.getNormalMatrix(e),i=this.coplanarPoint(Ua).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new hn,so=new I,_r=class{constructor(e=new an,t=new an,n=new an,i=new an,r=new an,o=new an){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],x=i[10],m=i[11],p=i[12],_=i[13],y=i[14],A=i[15];if(n[0].setComponents(c-r,f-l,m-d,A-p).normalize(),n[1].setComponents(c+r,f+l,m+d,A+p).normalize(),n[2].setComponents(c+o,f+h,m+g,A+_).normalize(),n[3].setComponents(c-o,f-h,m-g,A-_).normalize(),n[4].setComponents(c-a,f-u,m-x,A-y).normalize(),t===jn)n[5].setComponents(c+a,f+u,m+x,A+y).normalize();else if(t===So)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(so.x=i.normal.x>0?e.max.x:e.min.x,so.y=i.normal.y>0?e.max.y:e.min.y,so.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function am(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Qi=class s extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*f-o;for(let y=0;y<l;y++){let A=y*u-r;g.push(A,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let y=_+l*p,A=_+l*(p+1),T=_+1+l*(p+1),S=_+1+l*p;d.push(y,A,S),d.push(A,T,S)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
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
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
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
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
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
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,vm=`#ifdef USE_BUMPMAP
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pm=`#define PI 3.141592653589793
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
} // validated`,Dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
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
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,og=`struct PhysicalMaterial {
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
}`,ag=`
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,p0=`#if DEPTH_PACKING == 3200
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
}`,m0=`#define DISTANCE
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
}`,g0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`uniform float scale;
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
}`,_0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,v0=`uniform vec3 diffuse;
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
}`,M0=`#define LAMBERT
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
}`,E0=`#define LAMBERT
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
}`,T0=`#define MATCAP
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
}`,b0=`#define MATCAP
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
}`,w0=`#define NORMAL
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
}`,C0=`#define NORMAL
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
}`,R0=`#define PHONG
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
}`,I0=`#define PHONG
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
}`,P0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
}`,B0=`#define TOON
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
}`,F0=`#define TOON
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
}`,L0=`uniform float size;
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
}`,U0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,N0=`uniform vec3 color;
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
}`,H0=`uniform float rotation;
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
}`,z0=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:cm,alphahash_pars_fragment:lm,alphamap_fragment:hm,alphamap_pars_fragment:um,alphatest_fragment:dm,alphatest_pars_fragment:fm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:xm,begin_vertex:ym,beginnormal_vertex:Am,bsdfs:_m,iridescence_fragment:Sm,bumpmap_pars_fragment:vm,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:bm,color_fragment:wm,color_pars_fragment:Cm,color_pars_vertex:Rm,color_vertex:Im,common:Pm,cube_uv_reflection_fragment:Dm,defaultnormal_vertex:Bm,displacementmap_pars_vertex:Fm,displacementmap_vertex:Lm,emissivemap_fragment:Um,emissivemap_pars_fragment:Om,colorspace_fragment:Nm,colorspace_pars_fragment:Hm,envmap_fragment:zm,envmap_common_pars_fragment:km,envmap_pars_fragment:Vm,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:eg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:Qm,gradientmap_pars_fragment:Km,lightmap_pars_fragment:jm,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:Jm,lights_pars_begin:$m,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:cg,lights_fragment_end:lg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:fg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:xg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:Ag,morphinstance_vertex:_g,morphcolor_vertex:Sg,morphnormal_vertex:vg,morphtarget_pars_vertex:Mg,morphtarget_vertex:Eg,normal_fragment_begin:Tg,normal_fragment_maps:bg,normal_pars_fragment:wg,normal_pars_vertex:Cg,normal_vertex:Rg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:Fg,opaque_fragment:Lg,packing:Ug,premultiplied_alpha_fragment:Og,project_vertex:Ng,dithering_fragment:Hg,dithering_pars_fragment:zg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:Qg,skinning_vertex:Kg,skinnormal_vertex:jg,specularmap_fragment:Zg,specularmap_pars_fragment:Jg,tonemapping_fragment:$g,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:o0,background_vert:a0,background_frag:c0,backgroundCube_vert:l0,backgroundCube_frag:h0,cube_vert:u0,cube_frag:d0,depth_vert:f0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:x0,equirect_frag:y0,linedashed_vert:A0,linedashed_frag:_0,meshbasic_vert:S0,meshbasic_frag:v0,meshlambert_vert:M0,meshlambert_frag:E0,meshmatcap_vert:T0,meshmatcap_frag:b0,meshnormal_vert:w0,meshnormal_frag:C0,meshphong_vert:R0,meshphong_frag:I0,meshphysical_vert:P0,meshphysical_frag:D0,meshtoon_vert:B0,meshtoon_frag:F0,points_vert:L0,points_frag:U0,shadow_vert:O0,shadow_frag:N0,sprite_vert:H0,sprite_frag:z0},fe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Fn={basic:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:qt([fe.points,fe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:qt([fe.common,fe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:qt([fe.sprite,fe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:qt([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:qt([fe.lights,fe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Fn.physical={uniforms:qt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var ro={r:0,b:0,g:0},zi=new On,k0=new ye;function V0(s,e,t,n,i,r,o){let a=new Ce(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function x(_){let y=!1,A=g(_);A===null?p(a,c):A&&A.isColor&&(p(A,1),y=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===Qo)?(h===void 0&&(h=new lt(new Yi(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Os(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zi.copy(y.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(zi)),h.material.toneMapped=je.getTransfer(A.colorSpace)!==ht,(u!==A||f!==A.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new lt(new Qi(2,2),new Lt({name:"BackgroundMaterial",uniforms:Os(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=je.getTransfer(A.colorSpace)!==ht,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(ro,Pd(s)),n.buffers.color.setClear(ro.r,ro.g,ro.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:m}}function G0(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(M,C,B,F,U){let N=!1,L=u(F,B,C);r!==L&&(r=L,l(r.object)),N=d(M,F,B,U),N&&g(M,F,B,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,A(M,C,B,F),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,C,B){let F=B.wireframe===!0,U=n[M.id];U===void 0&&(U={},n[M.id]=U);let N=U[C.id];N===void 0&&(N={},U[C.id]=N);let L=N[F];return L===void 0&&(L=f(c()),N[F]=L),L}function f(M){let C=[],B=[],F=[];for(let U=0;U<t;U++)C[U]=0,B[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,C,B,F){let U=r.attributes,N=C.attributes,L=0,X=B.getAttributes();for(let H in X)if(X[H].location>=0){let K=U[H],se=N[H];if(se===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;L++}return r.attributesNum!==L||r.index!==F}function g(M,C,B,F){let U={},N=C.attributes,L=0,X=B.getAttributes();for(let H in X)if(X[H].location>=0){let K=N[H];K===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));let se={};se.attribute=K,K&&K.data&&(se.data=K.data),U[H]=se,L++}r.attributes=U,r.attributesNum=L,r.index=F}function x(){let M=r.newAttributes;for(let C=0,B=M.length;C<B;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){let B=r.newAttributes,F=r.enabledAttributes,U=r.attributeDivisors;B[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),U[M]!==C&&(s.vertexAttribDivisor(M,C),U[M]=C)}function _(){let M=r.newAttributes,C=r.enabledAttributes;for(let B=0,F=C.length;B<F;B++)C[B]!==M[B]&&(s.disableVertexAttribArray(B),C[B]=0)}function y(M,C,B,F,U,N,L){L===!0?s.vertexAttribIPointer(M,C,B,U,N):s.vertexAttribPointer(M,C,B,F,U,N)}function A(M,C,B,F){x();let U=F.attributes,N=B.getAttributes(),L=C.defaultAttributeValues;for(let X in N){let H=N[X];if(H.location>=0){let W=U[X];if(W===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){let K=W.normalized,se=W.itemSize,Ee=e.get(W);if(Ee===void 0)continue;let Te=Ee.buffer,j=Ee.type,Z=Ee.bytesPerElement,re=j===s.INT||j===s.UNSIGNED_INT||W.gpuType===ol;if(W.isInterleavedBufferAttribute){let te=W.data,ge=te.stride,Se=W.offset;if(te.isInstancedInterleavedBuffer){for(let Le=0;Le<H.locationSize;Le++)p(H.location+Le,te.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Le=0;Le<H.locationSize;Le++)m(H.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Le=0;Le<H.locationSize;Le++)y(H.location+Le,se/H.locationSize,j,K,ge*Z,(Se+se/H.locationSize*Le)*Z,re)}else{if(W.isInstancedBufferAttribute){for(let te=0;te<H.locationSize;te++)p(H.location+te,W.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let te=0;te<H.locationSize;te++)m(H.location+te);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let te=0;te<H.locationSize;te++)y(H.location+te,se/H.locationSize,j,K,se*Z,se/H.locationSize*te*Z,re)}}else if(L!==void 0){let K=L[X];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(H.location,K);break;case 3:s.vertexAttrib3fv(H.location,K);break;case 4:s.vertexAttrib4fv(H.location,K);break;default:s.vertexAttrib1fv(H.location,K)}}}}_()}function T(){w();for(let M in n){let C=n[M];for(let B in C){let F=C[B];for(let U in F)h(F[U].object),delete F[U];delete C[B]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let B in C){let F=C[B];for(let U in F)h(F[U].object),delete F[U];delete C[B]}delete n[M.id]}function v(M){for(let C in n){let B=n[C];if(B[M.id]===void 0)continue;let F=B[M.id];for(let U in F)h(F[U].object),delete F[U];delete B[M.id]}}function w(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function W0(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function X0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(v){return!(v!==Ot&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let w=v===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Rn&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Zt&&!w)}function c(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:A,vertexTextures:T,maxSamples:S}}function q0(s){let e=this,t=null,n=0,i=!1,r=!1,o=new an,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,y=_*4,A=p.clippingState||null;c.value=A,A=h(g,f,y,d);for(let T=0;T!==y;++T)A[T]=t[T];p.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,A=d;y!==x;++y,A+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,A),m[A+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Y0(s){let e=new WeakMap;function t(o,a){return a===tc?o.mapping=Is:a===nc&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===tc||a===nc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Fc(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var $n=class extends wo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Es=4,bu=[.125,.215,.35,.446,.526,.582],Xi=20,Oa=new $n,wu=new Ce,Na=null,Ha=0,za=0,ka=!1,Vi=(1+Math.sqrt(5))/2,Ss=1/Vi,Cu=[new I(-Vi,Ss,0),new I(Vi,Ss,0),new I(-Ss,0,Vi),new I(Ss,0,Vi),new I(0,Vi,-Ss),new I(0,Vi,Ss),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Na=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Ha,za),this._renderer.xr.enabled=ka,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Ii,format:Ot,colorSpace:Wt,depthBuffer:!1},i=Ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q0(r)),this._blurMaterial=K0(r,e,t)}return i}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,n,i){let a=new Mt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(wu),h.toneMapping=Mi,h.autoClear=!1;let d=new Gt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new lt(new Yi,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(wu),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let y=this._cubeSize;oo(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Is||e.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;oo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Oa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cu[(i-r-1)%Cu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new lt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Xi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let p=[],_=0;for(let v=0;v<Xi;++v){let w=v/x,E=Math.exp(-w*w/2);p.push(E),v===0?_+=E:v<m&&(_+=2*E)}for(let v=0;v<p.length;v++)p[v]=p[v]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let A=this._sizeLods[i],T=3*A*(i>y-Es?i-y+Es:0),S=4*(this._cubeSize-A);oo(t,T,S,3*A,2*A),c.setRenderTarget(t),c.render(u,Oa)}};function Q0(s){let e=[],t=[],n=[],i=s,r=s-Es+1+bu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Es?c=bu[o-s+Es-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*d),y=new Float32Array(m*g*d),A=new Float32Array(p*g*d);for(let S=0;S<d;S++){let v=S%3*2/3-1,w=S>2?0:-1,E=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];_.set(E,x*g*S),y.set(f,m*g*S);let M=[S,S,S,S,S,S];A.set(M,p*g*S)}let T=new St;T.setAttribute("position",new Et(_,x)),T.setAttribute("uv",new Et(y,m)),T.setAttribute("faceIndex",new Et(A,p)),e.push(T),i>Es&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ru(s,e,t){let n=new Pn(s,e,t);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function K0(s,e,t){let n=new Float32Array(Xi),i=new I(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dl(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Iu(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Pu(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}function j0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===tc||c===nc,h=c===Is||c===Ps;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ro(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Ro(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Z0(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function J0(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],s.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let _=d.array;x=d.version;for(let y=0,A=_.length;y<A;y+=3){let T=_[y+0],S=_[y+1],v=_[y+2];f.push(T,S,S,v,v,T)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,A=_.length/3-1;y<A;y+=3){let T=y+0,S=y+1,v=y+2;f.push(T,S,S,v,v,T)}}else return;let m=new(Rd(f)?bo:To)(f,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function $0(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*x[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ex(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tx(s,e,t){let n=new WeakMap,i=new Je;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let A=a.attributes.position.count*y,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let S=new Float32Array(A*T*4*u),v=new Mo(S,A,T,u);v.type=Zt,v.needsUpdate=!0;let w=y*4;for(let M=0;M<u;M++){let C=m[M],B=p[M],F=_[M],U=A*T*4*M;for(let N=0;N<C.count;N++){let L=N*w;d===!0&&(i.fromBufferAttribute(C,N),S[U+L+0]=i.x,S[U+L+1]=i.y,S[U+L+2]=i.z,S[U+L+3]=0),g===!0&&(i.fromBufferAttribute(B,N),S[U+L+4]=i.x,S[U+L+5]=i.y,S[U+L+6]=i.z,S[U+L+7]=0),x===!0&&(i.fromBufferAttribute(F,N),S[U+L+8]=i.x,S[U+L+9]=i.y,S[U+L+10]=i.z,S[U+L+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:v,size:new ce(A,T)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function nx(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Ns=class extends Nt{constructor(e,t,n,i,r,o,a,c,l,h=Ei){if(h!==Ei&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=ln),n===void 0&&h===Bs&&(n=Ds),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=c!==void 0?c:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bd=new Nt,Du=new Ns(1,1),Fd=new Mo,Ld=new Dc,Ud=new Co,Bu=[],Fu=[],Lu=new Float32Array(16),Uu=new Float32Array(9),Ou=new Float32Array(4);function Xs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Bu[i];if(r===void 0&&(r=new Float32Array(i),Bu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Rt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function It(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Jo(s,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ix(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2fv(this.addr,e),It(t,e)}}function rx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;s.uniform3fv(this.addr,e),It(t,e)}}function ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4fv(this.addr,e),It(t,e)}}function ax(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;Ou.set(n),s.uniformMatrix2fv(this.addr,!1,Ou),It(t,n)}}function cx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;Uu.set(n),s.uniformMatrix3fv(this.addr,!1,Uu),It(t,n)}}function lx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,n))return;Lu.set(n),s.uniformMatrix4fv(this.addr,!1,Lu),It(t,n)}}function hx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2iv(this.addr,e),It(t,e)}}function dx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3iv(this.addr,e),It(t,e)}}function fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4iv(this.addr,e),It(t,e)}}function px(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2uiv(this.addr,e),It(t,e)}}function gx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3uiv(this.addr,e),It(t,e)}}function xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4uiv(this.addr,e),It(t,e)}}function yx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Du.compareFunction=wd,r=Du):r=Bd,t.setTexture2D(e||r,i)}function Ax(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ld,i)}function _x(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ud,i)}function Sx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fd,i)}function vx(s){switch(s){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ox;case 35674:return ax;case 35675:return cx;case 35676:return lx;case 5124:case 35670:return hx;case 35667:case 35671:return ux;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return Sx}}function Mx(s,e){s.uniform1fv(this.addr,e)}function Ex(s,e){let t=Xs(e,this.size,2);s.uniform2fv(this.addr,t)}function Tx(s,e){let t=Xs(e,this.size,3);s.uniform3fv(this.addr,t)}function bx(s,e){let t=Xs(e,this.size,4);s.uniform4fv(this.addr,t)}function wx(s,e){let t=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cx(s,e){let t=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Rx(s,e){let t=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ix(s,e){s.uniform1iv(this.addr,e)}function Px(s,e){s.uniform2iv(this.addr,e)}function Dx(s,e){s.uniform3iv(this.addr,e)}function Bx(s,e){s.uniform4iv(this.addr,e)}function Fx(s,e){s.uniform1uiv(this.addr,e)}function Lx(s,e){s.uniform2uiv(this.addr,e)}function Ux(s,e){s.uniform3uiv(this.addr,e)}function Ox(s,e){s.uniform4uiv(this.addr,e)}function Nx(s,e,t){let n=this.cache,i=e.length,r=Jo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Bd,r[o])}function Hx(s,e,t){let n=this.cache,i=e.length,r=Jo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ld,r[o])}function zx(s,e,t){let n=this.cache,i=e.length,r=Jo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ud,r[o])}function kx(s,e,t){let n=this.cache,i=e.length,r=Jo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Fd,r[o])}function Vx(s){switch(s){case 5126:return Mx;case 35664:return Ex;case 35665:return Tx;case 35666:return bx;case 35674:return wx;case 35675:return Cx;case 35676:return Rx;case 5124:case 35670:return Ix;case 35667:case 35671:return Px;case 35668:case 35672:return Dx;case 35669:case 35673:return Bx;case 5125:return Fx;case 36294:return Lx;case 36295:return Ux;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return kx}}var Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vx(t.type)}},Uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vx(t.type)}},Oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Va=/(\w+)(\])?(\[|\.)?/g;function Nu(s,e){s.seq.push(e),s.map[e.id]=e}function Gx(s,e,t){let n=s.name,i=n.length;for(Va.lastIndex=0;;){let r=Va.exec(n),o=Va.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Nu(t,l===void 0?new Lc(a,s,e):new Uc(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Oc(a),Nu(t,u)),t=u}}}var bs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Gx(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Hu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Wx=37297,Xx=0;function qx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var zu=new Ue;function Yx(s){je._getMatrix(zu,je.workingColorSpace,s);let e=`mat3( ${zu.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Zo:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ku(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+qx(s.getShaderSource(e),o)}else return i}function Qx(s,e){let t=Yx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kx(s,e){let t;switch(e){case tp:t="Linear";break;case np:t="Reinhard";break;case ip:t="Cineon";break;case sp:t="ACESFilmic";break;case op:t="AgX";break;case ap:t="Neutral";break;case rp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ao=new I;function jx(){je.getLuminanceCoefficients(ao);let s=ao.x.toFixed(4),e=ao.y.toFixed(4),t=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Jx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $x(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function dr(s){return s!==""}function Vu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(s){return s.replace(ey,ny)}var ty=new Map;function ny(s,e){let t=We[e];if(t===void 0){let n=ty.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}var iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(s){return s.replace(iy,sy)}function sy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ry(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function oy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Ps:e="ENVMAP_TYPE_CUBE";break;case Qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ay(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function cy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case md:e="ENVMAP_BLENDING_MULTIPLY";break;case $f:e="ENVMAP_BLENDING_MIX";break;case ep:e="ENVMAP_BLENDING_ADD";break}return e}function ly(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function hy(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=ry(t),l=oy(t),h=ay(t),u=cy(t),f=ly(t),d=Zx(t),g=Jx(r),x=i.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(m=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?We.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Qx("linearToOutputTexel",t.outputColorSpace),jx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=Nc(o),o=Vu(o,t),o=Gu(o,t),a=Nc(a),a=Vu(a,t),a=Gu(a,t),o=Wu(o),a=Wu(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+m+o,A=_+p+a,T=Hu(i,i.VERTEX_SHADER,y),S=Hu(i,i.FRAGMENT_SHADER,A);i.attachShader(x,T),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function v(C){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(T).trim(),U=i.getShaderInfoLog(S).trim(),N=!0,L=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,S);else{let X=ku(i,T,"vertex"),H=ku(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+X+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||U==="")&&(L=!1);L&&(C.diagnostics={runnable:N,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:U,prefix:p}})}i.deleteShader(T),i.deleteShader(S),w=new bs(i,x),E=$x(i,x)}let w;this.getUniforms=function(){return w===void 0&&v(this),w};let E;this.getAttributes=function(){return E===void 0&&v(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,Wx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=S,this}var uy=0,Hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zc(e),t.set(e,n)),n}},zc=class{constructor(e){this.id=uy++,this.code=e,this.usedTimes=0}};function dy(s,e,t,n,i,r,o){let a=new Eo,c=new Hc,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,B,F){let U=B.fog,N=F.geometry,L=E.isMeshStandardMaterial?B.environment:null,X=(E.isMeshStandardMaterial?t:e).get(E.envMap||L),H=X&&X.mapping===Qo?X.image.height:null,W=g[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=K!==void 0?K.length:0,Ee=0;N.morphAttributes.position!==void 0&&(Ee=1),N.morphAttributes.normal!==void 0&&(Ee=2),N.morphAttributes.color!==void 0&&(Ee=3);let Te,j,Z,re;if(W){let at=Fn[W];Te=at.vertexShader,j=at.fragmentShader}else Te=E.vertexShader,j=E.fragmentShader,c.update(E),Z=c.getVertexShaderID(E),re=c.getFragmentShaderID(E);let te=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Se=F.isInstancedMesh===!0,Le=F.isBatchedMesh===!0,Ve=!!E.map,Re=!!E.matcap,Ye=!!X,O=!!E.aoMap,Xe=!!E.lightMap,Be=!!E.bumpMap,ze=!!E.normalMap,Ae=!!E.displacementMap,qe=!!E.emissiveMap,be=!!E.metalnessMap,P=!!E.roughnessMap,b=E.anisotropy>0,G=E.clearcoat>0,ee=E.dispersion>0,ie=E.iridescence>0,$=E.sheen>0,we=E.transmission>0,me=b&&!!E.anisotropyMap,ve=G&&!!E.clearcoatMap,Ke=G&&!!E.clearcoatNormalMap,oe=G&&!!E.clearcoatRoughnessMap,D=ie&&!!E.iridescenceMap,ne=ie&&!!E.iridescenceThicknessMap,_e=$&&!!E.sheenColorMap,le=$&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ne=!!E.specularColorMap,Ze=!!E.specularIntensityMap,z=we&&!!E.transmissionMap,de=we&&!!E.thicknessMap,Q=!!E.gradientMap,J=!!E.alphaMap,pe=E.alphaTest>0,ue=!!E.alphaHash,He=!!E.extensions,dt=Mi;E.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(dt=s.toneMapping);let Ht={shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:Te,fragmentShader:j,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Le,batchingColor:Le&&F._colorsTexture!==null,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Wt,alphaToCoverage:!!E.alphaToCoverage,map:Ve,matcap:Re,envMap:Ye,envMapMode:Ye&&X.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Xe,bumpMap:Be,normalMap:ze,displacementMap:f&&Ae,emissiveMap:qe,normalMapObjectSpace:ze&&E.normalMapType===dp,normalMapTangentSpace:ze&&E.normalMapType===bd,metalnessMap:be,roughnessMap:P,anisotropy:b,anisotropyMap:me,clearcoat:G,clearcoatMap:ve,clearcoatNormalMap:Ke,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:ie,iridescenceMap:D,iridescenceThicknessMap:ne,sheen:$,sheenColorMap:_e,sheenRoughnessMap:le,specularMap:Oe,specularColorMap:Ne,specularIntensityMap:Ze,transmission:we,transmissionMap:z,thicknessMap:de,gradientMap:Q,opaque:E.transparent===!1&&E.blending===Zn&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:pe,alphaHash:ue,combine:E.combine,mapUv:Ve&&x(E.map.channel),aoMapUv:O&&x(E.aoMap.channel),lightMapUv:Xe&&x(E.lightMap.channel),bumpMapUv:Be&&x(E.bumpMap.channel),normalMapUv:ze&&x(E.normalMap.channel),displacementMapUv:Ae&&x(E.displacementMap.channel),emissiveMapUv:qe&&x(E.emissiveMap.channel),metalnessMapUv:be&&x(E.metalnessMap.channel),roughnessMapUv:P&&x(E.roughnessMap.channel),anisotropyMapUv:me&&x(E.anisotropyMap.channel),clearcoatMapUv:ve&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:D&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:le&&x(E.sheenRoughnessMap.channel),specularMapUv:Oe&&x(E.specularMap.channel),specularColorMapUv:Ne&&x(E.specularColorMap.channel),specularIntensityMapUv:Ze&&x(E.specularIntensityMap.channel),transmissionMapUv:z&&x(E.transmissionMap.channel),thicknessMapUv:de&&x(E.thicknessMap.channel),alphaMapUv:J&&x(E.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ze||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Ve||J),fog:!!U,useFog:E.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ge,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:Ve&&E.map.isVideoTexture===!0&&je.getTransfer(E.map.colorSpace)===ht,decodeVideoTextureEmissive:qe&&E.emissiveMap.isVideoTexture===!0&&je.getTransfer(E.emissiveMap.colorSpace)===ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yt,flipSided:E.side===Jt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:He&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&E.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(_(M,E),y(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function A(E){let M=g[E.type],C;if(M){let B=Fn[M];C=nm.clone(B.uniforms)}else C=E.uniforms;return C}function T(E,M){let C;for(let B=0,F=h.length;B<F;B++){let U=h[B];if(U.cacheKey===M){C=U,++C.usedTimes;break}}return C===void 0&&(C=new hy(s,M,E,r),h.push(C)),C}function S(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function v(E){c.remove(E)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:T,releaseProgram:S,releaseShaderCache:v,programs:h,dispose:w}}function fy(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function py(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Yu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,x,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||py),n.length>1&&n.sort(f||qu),i.length>1&&i.sort(f||qu)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function my(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Yu,s.set(n,[o])):i>=r.length?(o=new Yu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function gy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ce};break;case"SpotLight":t={position:new I,direction:new I,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function xy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var yy=0;function Ay(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _y(s){let e=new gy,t=xy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,r=new ye,o=new ye;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,_=0,y=0,A=0,T=0,S=0,v=0;l.sort(Ay);for(let E=0,M=l.length;E<M;E++){let C=l[E],B=C.color,F=C.intensity,U=C.distance,N=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=B.r*F,u+=B.g*F,f+=B.b*F;else if(C.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(C.sh.coefficients[L],F);v++}else if(C.isDirectionalLight){let L=e.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,H=t.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=C.shadow.matrix,_++}n.directional[d]=L,d++}else if(C.isSpotLight){let L=e.get(C);L.position.setFromMatrixPosition(C.matrixWorld),L.color.copy(B).multiplyScalar(F),L.distance=U,L.coneCos=Math.cos(C.angle),L.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),L.decay=C.decay,n.spot[x]=L;let X=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,X.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[x]=X.matrix,C.castShadow){let H=t.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=N,A++}x++}else if(C.isRectAreaLight){let L=e.get(C);L.color.copy(B).multiplyScalar(F),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=L,m++}else if(C.isPointLight){let L=e.get(C);if(L.color.copy(C.color).multiplyScalar(C.intensity),L.distance=C.distance,L.decay=C.decay,C.castShadow){let X=C.shadow,H=t.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=L,g++}else if(C.isHemisphereLight){let L=e.get(C);L.skyColor.copy(C.color).multiplyScalar(F),L.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=L,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let w=n.hash;(w.directionalLength!==d||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==_||w.numPointShadows!==y||w.numSpotShadows!==A||w.numSpotMaps!==T||w.numLightProbes!==v)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=A+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=v,w.directionalLength=d,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=_,w.numPointShadows=y,w.numSpotShadows=A,w.numSpotMaps=T,w.numLightProbes=v,n.version=yy++)}function c(l,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let y=l[p];if(y.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(m),u++}else if(y.isSpotLight){let A=n.spot[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let A=n.rectArea[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let A=n.hemi[x];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Qu(s){let e=new _y(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Sy(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Qu(s),e.set(i,[a])):r>=o.length?(a=new Qu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var kc=class extends un{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vc=class extends un{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,My=`uniform sampler2D shadow_pass;
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
}`;function Ey(s,e,t){let n=new _r,i=new ce,r=new ce,o=new Je,a=new kc({depthPacking:up}),c=new Vc,l={},h=t.maxTextureSize,u={[cn]:Jt,[Jt]:cn,[Yt]:Yt},f=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:vy,fragmentShader:My}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new St;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let p=this.type;this.render=function(S,v,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let E=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),B=s.state;B.setBlending(vi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=p!==Yn&&this.type===Yn,U=p===Yn&&this.type!==Yn;for(let N=0,L=S.length;N<L;N++){let X=S[N],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let W=H.getFrameExtents();if(i.multiply(W),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,H.mapSize.y=r.y)),H.map===null||F===!0||U===!0){let se=this.type!==Yn?{minFilter:Vt,magFilter:Vt}:{};H.map!==null&&H.map.dispose(),H.map=new Pn(i.x,i.y,se),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let K=H.getViewportCount();for(let se=0;se<K;se++){let Ee=H.getViewport(se);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),B.viewport(o),H.updateMatrices(X,se),n=H.getFrustum(),A(v,w,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Yn&&_(H,w),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,M,C)};function _(S,v){let w=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Pn(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(v,null,w,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(v,null,w,d,x,null)}function y(S,v,w,E){let M=null,C=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)M=C;else if(M=w.isPointLight===!0?c:a,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let B=M.uuid,F=v.uuid,U=l[B];U===void 0&&(U={},l[B]=U);let N=U[F];N===void 0&&(N=M.clone(),U[F]=N,v.addEventListener("dispose",T)),M=N}if(M.visible=v.visible,M.wireframe=v.wireframe,E===Yn?M.side=v.shadowSide!==null?v.shadowSide:v.side:M.side=v.shadowSide!==null?v.shadowSide:u[v.side],M.alphaMap=v.alphaMap,M.alphaTest=v.alphaTest,M.map=v.map,M.clipShadows=v.clipShadows,M.clippingPlanes=v.clippingPlanes,M.clipIntersection=v.clipIntersection,M.displacementMap=v.displacementMap,M.displacementScale=v.displacementScale,M.displacementBias=v.displacementBias,M.wireframeLinewidth=v.wireframeLinewidth,M.linewidth=v.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=s.properties.get(M);B.light=w}return M}function A(S,v,w,E,M){if(S.visible===!1)return;if(S.layers.test(v.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Yn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let F=e.update(S),U=S.material;if(Array.isArray(U)){let N=F.groups;for(let L=0,X=N.length;L<X;L++){let H=N[L],W=U[H.materialIndex];if(W&&W.visible){let K=y(S,W,E,M);S.onBeforeShadow(s,S,v,w,F,K,H),s.renderBufferDirect(w,null,F,K,S,H),S.onAfterShadow(s,S,v,w,F,K,H)}}}else if(U.visible){let N=y(S,U,E,M);S.onBeforeShadow(s,S,v,w,F,N,null),s.renderBufferDirect(w,null,F,N,S,null),S.onAfterShadow(s,S,v,w,F,N,null)}}let B=S.children;for(let F=0,U=B.length;F<U;F++)A(B[F],v,w,E,M)}function T(S){S.target.removeEventListener("dispose",T);for(let w in l){let E=l[w],M=S.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var Ty={[Qa]:Ka,[ja]:$a,[Za]:ec,[Rs]:Ja,[Ka]:Qa,[$a]:ja,[ec]:Za,[Ja]:Rs};function by(s,e){function t(){let z=!1,de=new Je,Q=null,J=new Je(0,0,0,0);return{setMask:function(pe){Q!==pe&&!z&&(s.colorMask(pe,pe,pe,pe),Q=pe)},setLocked:function(pe){z=pe},setClear:function(pe,ue,He,dt,Ht){Ht===!0&&(pe*=dt,ue*=dt,He*=dt),de.set(pe,ue,He,dt),J.equals(de)===!1&&(s.clearColor(pe,ue,He,dt),J.copy(de))},reset:function(){z=!1,Q=null,J.set(-1,0,0,0)}}}function n(){let z=!1,de=!1,Q=null,J=null,pe=null;return{setReversed:function(ue){if(de!==ue){let He=e.get("EXT_clip_control");de?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);let dt=pe;pe=null,this.setClear(dt)}de=ue},getReversed:function(){return de},setTest:function(ue){ue?te(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(ue){Q!==ue&&!z&&(s.depthMask(ue),Q=ue)},setFunc:function(ue){if(de&&(ue=Ty[ue]),J!==ue){switch(ue){case Qa:s.depthFunc(s.NEVER);break;case Ka:s.depthFunc(s.ALWAYS);break;case ja:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case Za:s.depthFunc(s.EQUAL);break;case Ja:s.depthFunc(s.GEQUAL);break;case $a:s.depthFunc(s.GREATER);break;case ec:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ue}},setLocked:function(ue){z=ue},setClear:function(ue){pe!==ue&&(de&&(ue=1-ue),s.clearDepth(ue),pe=ue)},reset:function(){z=!1,Q=null,J=null,pe=null,de=!1}}}function i(){let z=!1,de=null,Q=null,J=null,pe=null,ue=null,He=null,dt=null,Ht=null;return{setTest:function(at){z||(at?te(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(at){de!==at&&!z&&(s.stencilMask(at),de=at)},setFunc:function(at,Sn,Hn){(Q!==at||J!==Sn||pe!==Hn)&&(s.stencilFunc(at,Sn,Hn),Q=at,J=Sn,pe=Hn)},setOp:function(at,Sn,Hn){(ue!==at||He!==Sn||dt!==Hn)&&(s.stencilOp(at,Sn,Hn),ue=at,He=Sn,dt=Hn)},setLocked:function(at){z=at},setClear:function(at){Ht!==at&&(s.clearStencil(at),Ht=at)},reset:function(){z=!1,de=null,Q=null,J=null,pe=null,ue=null,He=null,dt=null,Ht=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,y=null,A=null,T=null,S=null,v=new Ce(0,0,0),w=0,E=!1,M=null,C=null,B=null,F=null,U=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,X=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),L=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),L=X>=2);let W=null,K={},se=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),Te=new Je().fromArray(se),j=new Je().fromArray(Ee);function Z(z,de,Q,J){let pe=new Uint8Array(4),ue=s.createTexture();s.bindTexture(z,ue),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Q;He++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(de+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return ue}let re={};re[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(s.DEPTH_TEST),o.setFunc(Rs),Be(!1),ze(Kh),te(s.CULL_FACE),O(vi);function te(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function ge(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function Se(z,de){return u[z]!==de?(s.bindFramebuffer(z,de),u[z]=de,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=de),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=de),!0):!1}function Le(z,de){let Q=d,J=!1;if(z){Q=f.get(de),Q===void 0&&(Q=[],f.set(de,Q));let pe=z.textures;if(Q.length!==pe.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,He=pe.length;ue<He;ue++)Q[ue]=s.COLOR_ATTACHMENT0+ue;Q.length=pe.length,J=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,J=!0);J&&s.drawBuffers(Q)}function Ve(z){return g!==z?(s.useProgram(z),g=z,!0):!1}let Re={[Gi]:s.FUNC_ADD,[Uf]:s.FUNC_SUBTRACT,[Of]:s.FUNC_REVERSE_SUBTRACT};Re[Nf]=s.MIN,Re[Hf]=s.MAX;let Ye={[zf]:s.ZERO,[kf]:s.ONE,[Vf]:s.SRC_COLOR,[ws]:s.SRC_ALPHA,[Qf]:s.SRC_ALPHA_SATURATE,[qf]:s.DST_COLOR,[Wf]:s.DST_ALPHA,[Gf]:s.ONE_MINUS_SRC_COLOR,[Cs]:s.ONE_MINUS_SRC_ALPHA,[Yf]:s.ONE_MINUS_DST_COLOR,[Xf]:s.ONE_MINUS_DST_ALPHA,[Kf]:s.CONSTANT_COLOR,[jf]:s.ONE_MINUS_CONSTANT_COLOR,[Zf]:s.CONSTANT_ALPHA,[Jf]:s.ONE_MINUS_CONSTANT_ALPHA};function O(z,de,Q,J,pe,ue,He,dt,Ht,at){if(z===vi){x===!0&&(ge(s.BLEND),x=!1);return}if(x===!1&&(te(s.BLEND),x=!0),z!==sl){if(z!==m||at!==E){if((p!==Gi||A!==Gi)&&(s.blendEquation(s.FUNC_ADD),p=Gi,A=Gi),at)switch(z){case Zn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jh:s.blendFunc(s.ONE,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Zn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}_=null,y=null,T=null,S=null,v.set(0,0,0),w=0,m=z,E=at}return}pe=pe||de,ue=ue||Q,He=He||J,(de!==p||pe!==A)&&(s.blendEquationSeparate(Re[de],Re[pe]),p=de,A=pe),(Q!==_||J!==y||ue!==T||He!==S)&&(s.blendFuncSeparate(Ye[Q],Ye[J],Ye[ue],Ye[He]),_=Q,y=J,T=ue,S=He),(dt.equals(v)===!1||Ht!==w)&&(s.blendColor(dt.r,dt.g,dt.b,Ht),v.copy(dt),w=Ht),m=z,E=!1}function Xe(z,de){z.side===Yt?ge(s.CULL_FACE):te(s.CULL_FACE);let Q=z.side===Jt;de&&(Q=!Q),Be(Q),z.blending===Zn&&z.transparent===!1?O(vi):O(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let J=z.stencilWrite;a.setTest(J),J&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),qe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(z){M!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),M=z)}function ze(z){z!==Bf?(te(s.CULL_FACE),z!==C&&(z===Kh?s.cullFace(s.BACK):z===Ff?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),C=z}function Ae(z){z!==B&&(L&&s.lineWidth(z),B=z)}function qe(z,de,Q){z?(te(s.POLYGON_OFFSET_FILL),(F!==de||U!==Q)&&(s.polygonOffset(de,Q),F=de,U=Q)):ge(s.POLYGON_OFFSET_FILL)}function be(z){z?te(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function P(z){z===void 0&&(z=s.TEXTURE0+N-1),W!==z&&(s.activeTexture(z),W=z)}function b(z,de,Q){Q===void 0&&(W===null?Q=s.TEXTURE0+N-1:Q=W);let J=K[Q];J===void 0&&(J={type:void 0,texture:void 0},K[Q]=J),(J.type!==z||J.texture!==de)&&(W!==Q&&(s.activeTexture(Q),W=Q),s.bindTexture(z,de||re[z]),J.type=z,J.texture=de)}function G(){let z=K[W];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ke(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function D(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(z){Te.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Te.copy(z))}function le(z){j.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function Oe(z,de){let Q=l.get(de);Q===void 0&&(Q=new WeakMap,l.set(de,Q));let J=Q.get(z);J===void 0&&(J=s.getUniformBlockIndex(de,z.name),Q.set(z,J))}function Ne(z,de){let J=l.get(de).get(z);c.get(de)!==J&&(s.uniformBlockBinding(de,J,z.__bindingPointIndex),c.set(de,J))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},W=null,K={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,_=null,y=null,A=null,T=null,S=null,v=new Ce(0,0,0),w=0,E=!1,M=null,C=null,B=null,F=null,U=null,Te.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:ge,bindFramebuffer:Se,drawBuffers:Le,useProgram:Ve,setBlending:O,setMaterial:Xe,setFlipSided:Be,setCullFace:ze,setLineWidth:Ae,setPolygonOffset:qe,setScissorTest:be,activeTexture:P,bindTexture:b,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:D,texImage3D:ne,updateUBOMapping:Oe,uniformBlockBinding:Ne,texStorage2D:Ke,texStorage3D:oe,texSubImage2D:$,texSubImage3D:we,compressedTexSubImage2D:me,compressedTexSubImage3D:ve,scissor:_e,viewport:le,reset:Ze}}function Ku(s,e,t,n){let i=wy(n);switch(t){case _d:return s*e;case vd:return s*e;case Md:return s*e*2;case ll:return s*e/i.components*i.byteLength;case wr:return s*e/i.components*i.byteLength;case Ko:return s*e*2/i.components*i.byteLength;case hl:return s*e*2/i.components*i.byteLength;case Sd:return s*e*3/i.components*i.byteLength;case Ot:return s*e*4/i.components*i.byteLength;case ts:return s*e*4/i.components*i.byteLength;case go:case xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yo:case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sc:case oc:return Math.max(s,16)*Math.max(e,8)/4;case ic:case rc:return Math.max(s,8)*Math.max(e,8)/2;case ac:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _o:case Ec:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ed:case bc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case wc:case Cc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wy(s){switch(s){case Rn:case xd:return{byteLength:1,components:1};case yr:case yd:case Ii:return{byteLength:2,components:1};case al:case cl:return{byteLength:2,components:4};case ln:case ol:case Zt:return{byteLength:4,components:1};case Ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Cy(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return d?new OffscreenCanvas(P,b):Ar("canvas")}function x(P,b,G){let ee=1,ie=be(P);if((ie.width>G||ie.height>G)&&(ee=G/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let $=Math.floor(ee*ie.width),we=Math.floor(ee*ie.height);u===void 0&&(u=g($,we));let me=b?g($,we):u;return me.width=$,me.height=we,me.getContext("2d").drawImage(P,0,0,$,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+$+"x"+we+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(P,b,G,ee,ie=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=b;if(b===s.RED&&(G===s.FLOAT&&($=s.R32F),G===s.HALF_FLOAT&&($=s.R16F),G===s.UNSIGNED_BYTE&&($=s.R8)),b===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.R8UI),G===s.UNSIGNED_SHORT&&($=s.R16UI),G===s.UNSIGNED_INT&&($=s.R32UI),G===s.BYTE&&($=s.R8I),G===s.SHORT&&($=s.R16I),G===s.INT&&($=s.R32I)),b===s.RG&&(G===s.FLOAT&&($=s.RG32F),G===s.HALF_FLOAT&&($=s.RG16F),G===s.UNSIGNED_BYTE&&($=s.RG8)),b===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RG8UI),G===s.UNSIGNED_SHORT&&($=s.RG16UI),G===s.UNSIGNED_INT&&($=s.RG32UI),G===s.BYTE&&($=s.RG8I),G===s.SHORT&&($=s.RG16I),G===s.INT&&($=s.RG32I)),b===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGB8UI),G===s.UNSIGNED_SHORT&&($=s.RGB16UI),G===s.UNSIGNED_INT&&($=s.RGB32UI),G===s.BYTE&&($=s.RGB8I),G===s.SHORT&&($=s.RGB16I),G===s.INT&&($=s.RGB32I)),b===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGBA8UI),G===s.UNSIGNED_SHORT&&($=s.RGBA16UI),G===s.UNSIGNED_INT&&($=s.RGBA32UI),G===s.BYTE&&($=s.RGBA8I),G===s.SHORT&&($=s.RGBA16I),G===s.INT&&($=s.RGBA32I)),b===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),b===s.RGBA){let we=ie?Zo:je.getTransfer(ee);G===s.FLOAT&&($=s.RGBA32F),G===s.HALF_FLOAT&&($=s.RGBA16F),G===s.UNSIGNED_BYTE&&($=we===ht?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function A(P,b){let G;return P?b===null||b===ln||b===Ds?G=s.DEPTH24_STENCIL8:b===Zt?G=s.DEPTH32F_STENCIL8:b===yr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ln||b===Ds?G=s.DEPTH_COMPONENT24:b===Zt?G=s.DEPTH_COMPONENT32F:b===yr&&(G=s.DEPTH_COMPONENT16),G}function T(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==jt?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function S(P){let b=P.target;b.removeEventListener("dispose",S),w(b),b.isVideoTexture&&h.delete(b)}function v(P){let b=P.target;b.removeEventListener("dispose",v),M(b)}function w(P){let b=n.get(P);if(b.__webglInit===void 0)return;let G=P.source,ee=f.get(G);if(ee){let ie=ee[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(P),Object.keys(ee).length===0&&f.delete(G)}n.remove(P)}function E(P){let b=n.get(P);s.deleteTexture(b.__webglTexture);let G=P.source,ee=f.get(G);delete ee[b.__cacheKey],o.memory.textures--}function M(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let ie=0;ie<b.__webglFramebuffer[ee].length;ie++)s.deleteFramebuffer(b.__webglFramebuffer[ee][ie]);else s.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)s.deleteFramebuffer(b.__webglFramebuffer[ee]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=P.textures;for(let ee=0,ie=G.length;ee<ie;ee++){let $=n.get(G[ee]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[ee])}n.remove(P)}let C=0;function B(){C=0}function F(){let P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function U(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function N(P,b){let G=n.get(P);if(P.isVideoTexture&&Ae(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){let ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,P,b);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+b)}function L(P,b){let G=n.get(P);if(P.version>0&&G.__version!==P.version){j(G,P,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+b)}function X(P,b){let G=n.get(P);if(P.version>0&&G.__version!==P.version){j(G,P,b);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+b)}function H(P,b){let G=n.get(P);if(P.version>0&&G.__version!==P.version){Z(G,P,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+b)}let W={[qi]:s.REPEAT,[Kn]:s.CLAMP_TO_EDGE,[xr]:s.MIRRORED_REPEAT},K={[Vt]:s.NEAREST,[rl]:s.NEAREST_MIPMAP_NEAREST,[Ms]:s.NEAREST_MIPMAP_LINEAR,[jt]:s.LINEAR,[fr]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},se={[fp]:s.NEVER,[Ap]:s.ALWAYS,[pp]:s.LESS,[wd]:s.LEQUAL,[mp]:s.EQUAL,[yp]:s.GEQUAL,[gp]:s.GREATER,[xp]:s.NOTEQUAL};function Ee(P,b){if(b.type===Zt&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===jt||b.magFilter===fr||b.magFilter===Ms||b.magFilter===Ln||b.minFilter===jt||b.minFilter===fr||b.minFilter===Ms||b.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,W[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,W[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,W[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,K[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,K[b.minFilter]),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Vt||b.minFilter!==Ms&&b.minFilter!==Ln||b.type===Zt&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Te(P,b){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",S));let ee=b.source,ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));let $=U(b);if($!==P.__cacheKey){ie[$]===void 0&&(ie[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[$].usedTimes++;let we=ie[P.__cacheKey];we!==void 0&&(ie[P.__cacheKey].usedTimes--,we.usedTimes===0&&E(b)),P.__cacheKey=$,P.__webglTexture=ie[$].texture}return G}function j(P,b,G){let ee=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=s.TEXTURE_3D);let ie=Te(P,b),$=b.source;t.bindTexture(ee,P.__webglTexture,s.TEXTURE0+G);let we=n.get($);if($.version!==we.__version||ie===!0){t.activeTexture(s.TEXTURE0+G);let me=je.getPrimaries(je.workingColorSpace),ve=b.colorSpace===_i?null:je.getPrimaries(b.colorSpace),Ke=b.colorSpace===_i||me===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let oe=x(b.image,!1,i.maxTextureSize);oe=qe(b,oe);let D=r.convert(b.format,b.colorSpace),ne=r.convert(b.type),_e=y(b.internalFormat,D,ne,b.colorSpace,b.isVideoTexture);Ee(ee,b);let le,Oe=b.mipmaps,Ne=b.isVideoTexture!==!0,Ze=we.__version===void 0||ie===!0,z=$.dataReady,de=T(b,oe);if(b.isDepthTexture)_e=A(b.format===Bs,b.type),Ze&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,_e,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,_e,oe.width,oe.height,0,D,ne,null));else if(b.isDataTexture)if(Oe.length>0){Ne&&Ze&&t.texStorage2D(s.TEXTURE_2D,de,_e,Oe[0].width,Oe[0].height);for(let Q=0,J=Oe.length;Q<J;Q++)le=Oe[Q],Ne?z&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,le.width,le.height,D,ne,le.data):t.texImage2D(s.TEXTURE_2D,Q,_e,le.width,le.height,0,D,ne,le.data);b.generateMipmaps=!1}else Ne?(Ze&&t.texStorage2D(s.TEXTURE_2D,de,_e,oe.width,oe.height),z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,D,ne,oe.data)):t.texImage2D(s.TEXTURE_2D,0,_e,oe.width,oe.height,0,D,ne,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ne&&Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,_e,Oe[0].width,Oe[0].height,oe.depth);for(let Q=0,J=Oe.length;Q<J;Q++)if(le=Oe[Q],b.format!==Ot)if(D!==null)if(Ne){if(z)if(b.layerUpdates.size>0){let pe=Ku(le.width,le.height,b.format,b.type);for(let ue of b.layerUpdates){let He=le.data.subarray(ue*pe/le.data.BYTES_PER_ELEMENT,(ue+1)*pe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,ue,le.width,le.height,1,D,He)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,oe.depth,D,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,_e,le.width,le.height,oe.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,oe.depth,D,ne,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,_e,le.width,le.height,oe.depth,0,D,ne,le.data)}else{Ne&&Ze&&t.texStorage2D(s.TEXTURE_2D,de,_e,Oe[0].width,Oe[0].height);for(let Q=0,J=Oe.length;Q<J;Q++)le=Oe[Q],b.format!==Ot?D!==null?Ne?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,le.width,le.height,D,le.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,_e,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?z&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,le.width,le.height,D,ne,le.data):t.texImage2D(s.TEXTURE_2D,Q,_e,le.width,le.height,0,D,ne,le.data)}else if(b.isDataArrayTexture)if(Ne){if(Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,_e,oe.width,oe.height,oe.depth),z)if(b.layerUpdates.size>0){let Q=Ku(oe.width,oe.height,b.format,b.type);for(let J of b.layerUpdates){let pe=oe.data.subarray(J*Q/oe.data.BYTES_PER_ELEMENT,(J+1)*Q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,D,ne,pe)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,D,ne,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,oe.width,oe.height,oe.depth,0,D,ne,oe.data);else if(b.isData3DTexture)Ne?(Ze&&t.texStorage3D(s.TEXTURE_3D,de,_e,oe.width,oe.height,oe.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,D,ne,oe.data)):t.texImage3D(s.TEXTURE_3D,0,_e,oe.width,oe.height,oe.depth,0,D,ne,oe.data);else if(b.isFramebufferTexture){if(Ze)if(Ne)t.texStorage2D(s.TEXTURE_2D,de,_e,oe.width,oe.height);else{let Q=oe.width,J=oe.height;for(let pe=0;pe<de;pe++)t.texImage2D(s.TEXTURE_2D,pe,_e,Q,J,0,D,ne,null),Q>>=1,J>>=1}}else if(Oe.length>0){if(Ne&&Ze){let Q=be(Oe[0]);t.texStorage2D(s.TEXTURE_2D,de,_e,Q.width,Q.height)}for(let Q=0,J=Oe.length;Q<J;Q++)le=Oe[Q],Ne?z&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,D,ne,le):t.texImage2D(s.TEXTURE_2D,Q,_e,D,ne,le);b.generateMipmaps=!1}else if(Ne){if(Ze){let Q=be(oe);t.texStorage2D(s.TEXTURE_2D,de,_e,Q.width,Q.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,D,ne,oe)}else t.texImage2D(s.TEXTURE_2D,0,_e,D,ne,oe);m(b)&&p(ee),we.__version=$.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Z(P,b,G){if(b.image.length!==6)return;let ee=Te(P,b),ie=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);let $=n.get(ie);if(ie.version!==$.__version||ee===!0){t.activeTexture(s.TEXTURE0+G);let we=je.getPrimaries(je.workingColorSpace),me=b.colorSpace===_i?null:je.getPrimaries(b.colorSpace),ve=b.colorSpace===_i||we===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Ke=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,D=[];for(let J=0;J<6;J++)!Ke&&!oe?D[J]=x(b.image[J],!0,i.maxCubemapSize):D[J]=oe?b.image[J].image:b.image[J],D[J]=qe(b,D[J]);let ne=D[0],_e=r.convert(b.format,b.colorSpace),le=r.convert(b.type),Oe=y(b.internalFormat,_e,le,b.colorSpace),Ne=b.isVideoTexture!==!0,Ze=$.__version===void 0||ee===!0,z=ie.dataReady,de=T(b,ne);Ee(s.TEXTURE_CUBE_MAP,b);let Q;if(Ke){Ne&&Ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Oe,ne.width,ne.height);for(let J=0;J<6;J++){Q=D[J].mipmaps;for(let pe=0;pe<Q.length;pe++){let ue=Q[pe];b.format!==Ot?_e!==null?Ne?z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,ue.width,ue.height,_e,ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Oe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,ue.width,ue.height,_e,le,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,Oe,ue.width,ue.height,0,_e,le,ue.data)}}}else{if(Q=b.mipmaps,Ne&&Ze){Q.length>0&&de++;let J=be(D[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Oe,J.width,J.height)}for(let J=0;J<6;J++)if(oe){Ne?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,D[J].width,D[J].height,_e,le,D[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Oe,D[J].width,D[J].height,0,_e,le,D[J].data);for(let pe=0;pe<Q.length;pe++){let He=Q[pe].image[J].image;Ne?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,He.width,He.height,_e,le,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Oe,He.width,He.height,0,_e,le,He.data)}}else{Ne?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e,le,D[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Oe,_e,le,D[J]);for(let pe=0;pe<Q.length;pe++){let ue=Q[pe];Ne?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,_e,le,ue.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,Oe,_e,le,ue.image[J])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),$.__version=ie.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function re(P,b,G,ee,ie,$){let we=r.convert(G.format,G.colorSpace),me=r.convert(G.type),ve=y(G.internalFormat,we,me,G.colorSpace),Ke=n.get(b),oe=n.get(G);if(oe.__renderTarget=b,!Ke.__hasExternalTextures){let D=Math.max(1,b.width>>$),ne=Math.max(1,b.height>>$);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,$,ve,D,ne,b.depth,0,we,me,null):t.texImage2D(ie,$,ve,D,ne,0,we,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ze(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,ie,oe.__webglTexture,0,Be(b)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,ie,oe.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(P,b,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer){let ee=b.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,$=A(b.stencilBuffer,ie),we=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=Be(b);ze(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,$,b.width,b.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,$,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,$,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,P)}else{let ee=b.textures;for(let ie=0;ie<ee.length;ie++){let $=ee[ie],we=r.convert($.format,$.colorSpace),me=r.convert($.type),ve=y($.internalFormat,we,me,$.colorSpace),Ke=Be(b);G&&ze(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,ve,b.width,b.height):ze(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,ve,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ve,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=n.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N(b.depthTexture,0);let ie=ee.__webglTexture,$=Be(b);if(b.depthTexture.format===Ei)ze(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(b.depthTexture.format===Bs)ze(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Se(P){let b=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let ee=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){let ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=ee}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ge(b.__webglFramebuffer,P)}else if(G){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=s.createRenderbuffer(),te(b.__webglDepthbuffer[ee],P,!1);else{let ie=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,$)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),te(b.__webglDepthbuffer,P,!1);else{let ee=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,ie)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(P,b,G){let ee=n.get(P);b!==void 0&&re(ee.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Se(P)}function Ve(P){let b=P.texture,G=n.get(P),ee=n.get(b);P.addEventListener("dispose",v);let ie=P.textures,$=P.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=b.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let ve=0;ve<b.mipmaps.length;ve++)G.__webglFramebuffer[me][ve]=s.createFramebuffer()}else G.__webglFramebuffer[me]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)G.__webglFramebuffer[me]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(we)for(let me=0,ve=ie.length;me<ve;me++){let Ke=n.get(ie[me]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ze(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<ie.length;me++){let ve=ie[me];G.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[me]);let Ke=r.convert(ve.format,ve.colorSpace),oe=r.convert(ve.type),D=y(ve.internalFormat,Ke,oe,ve.colorSpace,P.isXRRenderTarget===!0),ne=Be(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,D,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,G.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),te(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,b);for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)re(G.__webglFramebuffer[me][ve],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else re(G.__webglFramebuffer[me],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(b)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let me=0,ve=ie.length;me<ve;me++){let Ke=ie[me],oe=n.get(Ke);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),Ee(s.TEXTURE_2D,Ke),re(G.__webglFramebuffer,P,Ke,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),m(Ke)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,ee.__webglTexture),Ee(me,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)re(G.__webglFramebuffer[ve],P,b,s.COLOR_ATTACHMENT0,me,ve);else re(G.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,me,0);m(b)&&p(me),t.unbindTexture()}P.depthBuffer&&Se(P)}function Re(P){let b=P.textures;for(let G=0,ee=b.length;G<ee;G++){let ie=b[G];if(m(ie)){let $=_(P),we=n.get(ie).__webglTexture;t.bindTexture($,we),p($),t.unbindTexture()}}}let Ye=[],O=[];function Xe(P){if(P.samples>0){if(ze(P)===!1){let b=P.textures,G=P.width,ee=P.height,ie=s.COLOR_BUFFER_BIT,$=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(P),me=b.length>1;if(me)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let Ke=n.get(b[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,G,ee,0,0,G,ee,ie,s.NEAREST),c===!0&&(Ye.length=0,O.length=0,Ye.push(s.COLOR_ATTACHMENT0+ve),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ye.push($),O.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);let Ke=n.get(b[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let b=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Be(P){return Math.min(i.maxSamples,P.samples)}function ze(P){let b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ae(P){let b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function qe(P,b){let G=P.colorSpace,ee=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Wt&&G!==_i&&(je.getTransfer(G)===ht?(ee!==Ot||ie!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=N,this.setTexture2DArray=L,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Le,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=re,this.useMultisampledRTT=ze}function fl(s,e){function t(n,i=_i){let r,o=je.getTransfer(i);if(n===Rn)return s.UNSIGNED_BYTE;if(n===al)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ad)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xd)return s.BYTE;if(n===yd)return s.SHORT;if(n===yr)return s.UNSIGNED_SHORT;if(n===ol)return s.INT;if(n===ln)return s.UNSIGNED_INT;if(n===Zt)return s.FLOAT;if(n===Ii)return s.HALF_FLOAT;if(n===_d)return s.ALPHA;if(n===Sd)return s.RGB;if(n===Ot)return s.RGBA;if(n===vd)return s.LUMINANCE;if(n===Md)return s.LUMINANCE_ALPHA;if(n===Ei)return s.DEPTH_COMPONENT;if(n===Bs)return s.DEPTH_STENCIL;if(n===ll)return s.RED;if(n===wr)return s.RED_INTEGER;if(n===Ko)return s.RG;if(n===hl)return s.RG_INTEGER;if(n===ts)return s.RGBA_INTEGER;if(n===go||n===xo||n===yo||n===Ao)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===sc||n===rc||n===oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===cc||n===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===cc)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===yc||n===Ac||n===_c||n===Sc||n===vc||n===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===Ec||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ed||n===bc||n===wc||n===Cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Gc=class extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},wn=class extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ry={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ry)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Py=`
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

}`,Wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Nt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:Iy,fragmentShader:Py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xc=class extends In{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=new Wc,m=t.getContextAttributes(),p=null,_=null,y=[],A=[],T=new ce,S=null,v=new Mt;v.viewport=new Je;let w=new Mt;w.viewport=new Je;let E=[v,w],M=new Gc,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=y[j];return Z===void 0&&(Z=new gr,y[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=y[j];return Z===void 0&&(Z=new gr,y[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=y[j];return Z===void 0&&(Z=new gr,y[j]=Z),Z.getHandSpace()};function F(j){let Z=A.indexOf(j.inputSource);if(Z===-1)return;let re=y[Z];re!==void 0&&(re.update(j.inputSource,j.frame,l||o),re.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",N);for(let j=0;j<y.length;j++){let Z=A[j];Z!==null&&(A[j]=null,y[j].disconnect(Z))}C=null,B=null,x.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,_=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",U),i.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){let Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Pn(d.framebufferWidth,d.framebufferHeight,{format:Ot,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,re=null,te=null;m.depth&&(te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Bs:Ei,re=m.stencil?Ds:ln);let ge={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ge),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Pn(f.textureWidth,f.textureHeight,{format:Ot,type:Rn,depthTexture:new Ns(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Te.setContext(i),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(j){for(let Z=0;Z<j.removed.length;Z++){let re=j.removed[Z],te=A.indexOf(re);te>=0&&(A[te]=null,y[te].disconnect(re))}for(let Z=0;Z<j.added.length;Z++){let re=j.added[Z],te=A.indexOf(re);if(te===-1){for(let Se=0;Se<y.length;Se++)if(Se>=A.length){A.push(re),te=Se;break}else if(A[Se]===null){A[Se]=re,te=Se;break}if(te===-1)break}let ge=y[te];ge&&ge.connect(re)}}let L=new I,X=new I;function H(j,Z,re){L.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(re.matrixWorld);let te=L.distanceTo(X),ge=Z.projectionMatrix.elements,Se=re.projectionMatrix.elements,Le=ge[14]/(ge[10]-1),Ve=ge[14]/(ge[10]+1),Re=(ge[9]+1)/ge[5],Ye=(ge[9]-1)/ge[5],O=(ge[8]-1)/ge[0],Xe=(Se[8]+1)/Se[0],Be=Le*O,ze=Le*Xe,Ae=te/(-O+Xe),qe=Ae*-O;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(qe),j.translateZ(Ae),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ge[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let be=Le+Ae,P=Ve+Ae,b=Be-qe,G=ze+(te-qe),ee=Re*Ve/P*be,ie=Ye*Ve/P*be;j.projectionMatrix.makePerspective(b,G,ee,ie,be,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function W(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Z=j.near,re=j.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(re=x.depthFar)),M.near=w.near=v.near=Z,M.far=w.far=v.far=re,(C!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,B=M.far),v.layers.mask=j.layers.mask|2,w.layers.mask=j.layers.mask|4,M.layers.mask=v.layers.mask|w.layers.mask;let te=j.parent,ge=M.cameras;W(M,te);for(let Se=0;Se<ge.length;Se++)W(ge[Se],te);ge.length===2?H(M,v,w):M.projectionMatrix.copy(v.projectionMatrix),K(j,M,te)};function K(j,Z,re){re===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Us*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let se=null;function Ee(j,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){let re=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let te=!1;re.length!==M.cameras.length&&(M.cameras.length=0,te=!0);for(let Se=0;Se<re.length;Se++){let Le=re[Se],Ve=null;if(d!==null)Ve=d.getViewport(Le);else{let Ye=u.getViewSubImage(f,Le);Ve=Ye.viewport,Se===0&&(e.setRenderTargetTextures(_,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(_))}let Re=E[Se];Re===void 0&&(Re=new Mt,Re.layers.enable(Se),Re.viewport=new Je,E[Se]=Re),Re.matrix.fromArray(Le.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Le.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Se===0&&(M.matrix.copy(Re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),te===!0&&M.cameras.push(Re)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")){let Se=u.getDepthInformation(re[0]);Se&&Se.isValid&&Se.texture&&x.init(e,Se,i.renderState)}}for(let re=0;re<y.length;re++){let te=A[re],ge=y[re];te!==null&&ge!==void 0&&ge.update(te,Z,l||o)}se&&se(j,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let Te=new Dd;Te.setAnimationLoop(Ee),this.setAnimationLoop=function(j){se=j},this.dispose=function(){}}},ki=new On,Dy=new ye;function By(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),y=_.envMap,A=_.envMapRotation;y&&(m.envMap.value=y,ki.copy(A),ki.x*=-1,ki.y*=-1,ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(ki)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fy(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){let A=y.program;n.uniformBlockBinding(_,A)}function l(_,y){let A=i[_.id];A===void 0&&(g(_),A=h(_),i[_.id]=A,_.addEventListener("dispose",m));let T=y.program;n.updateUBOMapping(_,T);let S=e.render.frame;r[_.id]!==S&&(f(_),r[_.id]=S)}function h(_){let y=u();_.__bindingPointIndex=y;let A=s.createBuffer(),T=_.__size,S=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,T,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,A),A}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let y=i[_.id],A=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let S=0,v=A.length;S<v;S++){let w=Array.isArray(A[S])?A[S]:[A[S]];for(let E=0,M=w.length;E<M;E++){let C=w[E];if(d(C,S,E,T)===!0){let B=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],U=0;for(let N=0;N<F.length;N++){let L=F[N],X=x(L);typeof L=="number"||typeof L=="boolean"?(C.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,B+U,C.__data)):L.isMatrix3?(C.__data[0]=L.elements[0],C.__data[1]=L.elements[1],C.__data[2]=L.elements[2],C.__data[3]=0,C.__data[4]=L.elements[3],C.__data[5]=L.elements[4],C.__data[6]=L.elements[5],C.__data[7]=0,C.__data[8]=L.elements[6],C.__data[9]=L.elements[7],C.__data[10]=L.elements[8],C.__data[11]=0):(L.toArray(C.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,y,A,T){let S=_.value,v=y+"_"+A;if(T[v]===void 0)return typeof S=="number"||typeof S=="boolean"?T[v]=S:T[v]=S.clone(),!0;{let w=T[v];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return T[v]=S,!0}else if(w.equals(S)===!1)return w.copy(S),!0}return!1}function g(_){let y=_.uniforms,A=0,T=16;for(let v=0,w=y.length;v<w;v++){let E=Array.isArray(y[v])?y[v]:[y[v]];for(let M=0,C=E.length;M<C;M++){let B=E[M],F=Array.isArray(B.value)?B.value:[B.value];for(let U=0,N=F.length;U<N;U++){let L=F[U],X=x(L),H=A%T,W=H%X.boundary,K=H+W;A+=W,K!==0&&T-K<X.storage&&(A+=T-K),B.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=A,A+=X.storage}}}let S=A%T;return S>0&&(A+=T-S),_.__size=A,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let A=o.indexOf(y.__bindingPointIndex);o.splice(A,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Ki=class{constructor(e={}){let{canvas:t=Up(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=Mi,this.toneMappingExposure=1;let A=this,T=!1,S=0,v=0,w=null,E=-1,M=null,C=new Je,B=new Je,F=null,U=new Ce(0),N=0,L=t.width,X=t.height,H=1,W=null,K=null,se=new Je(0,0,L,X),Ee=new Je(0,0,L,X),Te=!1,j=new _r,Z=!1,re=!1,te=new ye,ge=new ye,Se=new I,Le=new Je,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Ye(){return w===null?H:1}let O=n;function Xe(R,k){return t.getContext(R,k)}try{let R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),O===null){let k="webgl2";if(O=Xe(k,R),O===null)throw Xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Be,ze,Ae,qe,be,P,b,G,ee,ie,$,we,me,ve,Ke,oe,D,ne,_e,le,Oe,Ne,Ze,z;function de(){Be=new Z0(O),Be.init(),Ne=new fl(O,Be),ze=new X0(O,Be,e,Ne),Ae=new by(O,Be),ze.reverseDepthBuffer&&f&&Ae.buffers.depth.setReversed(!0),qe=new ex(O),be=new fy,P=new Cy(O,Be,Ae,be,ze,Ne,qe),b=new Y0(A),G=new j0(A),ee=new am(O),Ze=new G0(O,ee),ie=new J0(O,ee,qe,Ze),$=new nx(O,ie,ee,qe),_e=new tx(O,ze,P),oe=new q0(be),we=new dy(A,b,G,Be,ze,Ze,oe),me=new By(A,be),ve=new my,Ke=new Sy(Be),ne=new V0(A,b,G,Ae,$,d,c),D=new Ey(A,$,ze),z=new Fy(O,qe,ze,Ae),le=new W0(O,Be,qe),Oe=new $0(O,Be,qe),qe.programs=we.programs,A.capabilities=ze,A.extensions=Be,A.properties=be,A.renderLists=ve,A.shadowMap=D,A.state=Ae,A.info=qe}de();let Q=new Xc(A,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let R=Be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(L,X,!1))},this.getSize=function(R){return R.set(L,X)},this.setSize=function(R,k,q=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,X=k,t.width=Math.floor(R*H),t.height=Math.floor(k*H),q===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(L*H,X*H).floor()},this.setDrawingBufferSize=function(R,k,q){L=R,X=k,H=q,t.width=Math.floor(R*q),t.height=Math.floor(k*q),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,k,q,Y){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,k,q,Y),Ae.viewport(C.copy(se).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(Ee)},this.setScissor=function(R,k,q,Y){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,k,q,Y),Ae.scissor(B.copy(Ee).multiplyScalar(H).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(R){Ae.setScissorTest(Te=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(R=!0,k=!0,q=!0){let Y=0;if(R){let V=!1;if(w!==null){let ae=w.texture.format;V=ae===ts||ae===hl||ae===wr}if(V){let ae=w.texture.type,xe=ae===Rn||ae===ln||ae===yr||ae===Ds||ae===al||ae===cl,Ie=ne.getClearColor(),Pe=ne.getClearAlpha(),ke=Ie.r,Ge=Ie.g,De=Ie.b;xe?(g[0]=ke,g[1]=Ge,g[2]=De,g[3]=Pe,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=ke,x[1]=Ge,x[2]=De,x[3]=Pe,O.clearBufferiv(O.COLOR,0,x))}else Y|=O.COLOR_BUFFER_BIT}k&&(Y|=O.DEPTH_BUFFER_BIT),q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ve.dispose(),Ke.dispose(),be.dispose(),b.dispose(),G.dispose(),$.dispose(),Ze.dispose(),z.dispose(),we.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",kh),Q.removeEventListener("sessionend",Vh),Li.stop()};function J(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let R=qe.autoReset,k=D.enabled,q=D.autoUpdate,Y=D.needsUpdate,V=D.type;de(),qe.autoReset=R,D.enabled=k,D.autoUpdate=q,D.needsUpdate=Y,D.type=V}function ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function He(R){let k=R.target;k.removeEventListener("dispose",He),dt(k)}function dt(R){Ht(R),be.remove(R)}function Ht(R){let k=be.get(R).programs;k!==void 0&&(k.forEach(function(q){we.releaseProgram(q)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,q,Y,V,ae){k===null&&(k=Ve);let xe=V.isMesh&&V.matrixWorld.determinant()<0,Ie=If(R,k,q,Y,V);Ae.setMaterial(Y,xe);let Pe=q.index,ke=1;if(Y.wireframe===!0){if(Pe=ie.getWireframeAttribute(q),Pe===void 0)return;ke=2}let Ge=q.drawRange,De=q.attributes.position,et=Ge.start*ke,ft=(Ge.start+Ge.count)*ke;ae!==null&&(et=Math.max(et,ae.start*ke),ft=Math.min(ft,(ae.start+ae.count)*ke)),Pe!==null?(et=Math.max(et,0),ft=Math.min(ft,Pe.count)):De!=null&&(et=Math.max(et,0),ft=Math.min(ft,De.count));let mt=ft-et;if(mt<0||mt===1/0)return;Ze.setup(V,Y,Ie,q,Pe);let Kt,it=le;if(Pe!==null&&(Kt=ee.get(Pe),it=Oe,it.setIndex(Kt)),V.isMesh)Y.wireframe===!0?(Ae.setLineWidth(Y.wireframeLinewidth*Ye()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(V.isLine){let Fe=Y.linewidth;Fe===void 0&&(Fe=1),Ae.setLineWidth(Fe*Ye()),V.isLineSegments?it.setMode(O.LINES):V.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else V.isPoints?it.setMode(O.POINTS):V.isSprite&&it.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)it.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))it.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Fe=V._multiDrawStarts,zn=V._multiDrawCounts,st=V._multiDrawCount,vn=Pe?ee.get(Pe).bytesPerElement:1,as=be.get(Y).currentProgram.getUniforms();for(let sn=0;sn<st;sn++)as.setValue(O,"_gl_DrawID",sn),it.render(Fe[sn]/vn,zn[sn])}else if(V.isInstancedMesh)it.renderInstances(et,mt,V.count);else if(q.isInstancedBufferGeometry){let Fe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,zn=Math.min(q.instanceCount,Fe);it.renderInstances(et,mt,zn)}else it.render(et,mt)};function at(R,k,q){R.transparent===!0&&R.side===Yt&&R.forceSinglePass===!1?(R.side=Jt,R.needsUpdate=!0,kr(R,k,q),R.side=cn,R.needsUpdate=!0,kr(R,k,q),R.side=Yt):kr(R,k,q)}this.compile=function(R,k,q=null){q===null&&(q=R),p=Ke.get(q),p.init(k),y.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),R!==q&&R.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let Y=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ae=V.material;if(ae)if(Array.isArray(ae))for(let xe=0;xe<ae.length;xe++){let Ie=ae[xe];at(Ie,q,V),Y.add(Ie)}else at(ae,q,V),Y.add(ae)}),y.pop(),p=null,Y},this.compileAsync=function(R,k,q=null){let Y=this.compile(R,k,q);return new Promise(V=>{function ae(){if(Y.forEach(function(xe){be.get(xe).currentProgram.isReady()&&Y.delete(xe)}),Y.size===0){V(R);return}setTimeout(ae,10)}Be.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Sn=null;function Hn(R){Sn&&Sn(R)}function kh(){Li.stop()}function Vh(){Li.start()}let Li=new Dd;Li.setAnimationLoop(Hn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){Sn=R,Q.setAnimationLoop(R),R===null?Li.stop():Li.start()},Q.addEventListener("sessionstart",kh),Q.addEventListener("sessionend",Vh),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,k,w),p=Ke.get(R,y.length),p.init(k),y.push(p),ge.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(ge),re=this.localClippingEnabled,Z=oe.init(this.clippingPlanes,re),m=ve.get(R,_.length),m.init(),_.push(m),Q.enabled===!0&&Q.isPresenting===!0){let ae=A.xr.getDepthSensingMesh();ae!==null&&ma(ae,k,-1/0,A.sortObjects)}ma(R,k,0,A.sortObjects),m.finish(),A.sortObjects===!0&&m.sort(W,K),Re=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Re&&ne.addToRenderList(m,R),this.info.render.frame++,Z===!0&&oe.beginShadows();let q=p.state.shadowsArray;D.render(q,R,k),Z===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,V=m.transmissive;if(p.setupLights(),k.isArrayCamera){let ae=k.cameras;if(V.length>0)for(let xe=0,Ie=ae.length;xe<Ie;xe++){let Pe=ae[xe];Wh(Y,V,R,Pe)}Re&&ne.render(R);for(let xe=0,Ie=ae.length;xe<Ie;xe++){let Pe=ae[xe];Gh(m,R,Pe,Pe.viewport)}}else V.length>0&&Wh(Y,V,R,k),Re&&ne.render(R),Gh(m,R,k);w!==null&&(P.updateMultisampleRenderTarget(w),P.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(A,R,k),Ze.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],Z===!0&&oe.setGlobalState(A.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ma(R,k,q,Y){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){Y&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);let xe=$.update(R),Ie=R.material;Ie.visible&&m.push(R,xe,Ie,q,Le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||j.intersectsObject(R))){let xe=$.update(R),Ie=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Le.copy(xe.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(Ie)){let Pe=xe.groups;for(let ke=0,Ge=Pe.length;ke<Ge;ke++){let De=Pe[ke],et=Ie[De.materialIndex];et&&et.visible&&m.push(R,xe,et,q,Le.z,De)}}else Ie.visible&&m.push(R,xe,Ie,q,Le.z,null)}}let ae=R.children;for(let xe=0,Ie=ae.length;xe<Ie;xe++)ma(ae[xe],k,q,Y)}function Gh(R,k,q,Y){let V=R.opaque,ae=R.transmissive,xe=R.transparent;p.setupLightsView(q),Z===!0&&oe.setGlobalState(A.clippingPlanes,q),Y&&Ae.viewport(C.copy(Y)),V.length>0&&zr(V,k,q),ae.length>0&&zr(ae,k,q),xe.length>0&&zr(xe,k,q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Wh(R,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Pn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Ii:Rn,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let ae=p.state.transmissionRenderTarget[Y.id],xe=Y.viewport||C;ae.setSize(xe.z,xe.w);let Ie=A.getRenderTarget();A.setRenderTarget(ae),A.getClearColor(U),N=A.getClearAlpha(),N<1&&A.setClearColor(16777215,.5),A.clear(),Re&&ne.render(q);let Pe=A.toneMapping;A.toneMapping=Mi;let ke=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Z===!0&&oe.setGlobalState(A.clippingPlanes,Y),zr(R,q,Y),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let De=0,et=k.length;De<et;De++){let ft=k[De],mt=ft.object,Kt=ft.geometry,it=ft.material,Fe=ft.group;if(it.side===Yt&&mt.layers.test(Y.layers)){let zn=it.side;it.side=Jt,it.needsUpdate=!0,Xh(mt,q,Y,Kt,it,Fe),it.side=zn,it.needsUpdate=!0,Ge=!0}}Ge===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}A.setRenderTarget(Ie),A.setClearColor(U,N),ke!==void 0&&(Y.viewport=ke),A.toneMapping=Pe}function zr(R,k,q){let Y=k.isScene===!0?k.overrideMaterial:null;for(let V=0,ae=R.length;V<ae;V++){let xe=R[V],Ie=xe.object,Pe=xe.geometry,ke=Y===null?xe.material:Y,Ge=xe.group;Ie.layers.test(q.layers)&&Xh(Ie,k,q,Pe,ke,Ge)}}function Xh(R,k,q,Y,V,ae){R.onBeforeRender(A,k,q,Y,V,ae),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(A,k,q,Y,R,ae),V.transparent===!0&&V.side===Yt&&V.forceSinglePass===!1?(V.side=Jt,V.needsUpdate=!0,A.renderBufferDirect(q,k,Y,V,R,ae),V.side=cn,V.needsUpdate=!0,A.renderBufferDirect(q,k,Y,V,R,ae),V.side=Yt):A.renderBufferDirect(q,k,Y,V,R,ae),R.onAfterRender(A,k,q,Y,V,ae)}function kr(R,k,q){k.isScene!==!0&&(k=Ve);let Y=be.get(R),V=p.state.lights,ae=p.state.shadowsArray,xe=V.state.version,Ie=we.getParameters(R,V.state,ae,k,q),Pe=we.getProgramCacheKey(Ie),ke=Y.programs;Y.environment=R.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(R.isMeshStandardMaterial?G:b).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",He),ke=new Map,Y.programs=ke);let Ge=ke.get(Pe);if(Ge!==void 0){if(Y.currentProgram===Ge&&Y.lightsStateVersion===xe)return Yh(R,Ie),Ge}else Ie.uniforms=we.getUniforms(R),R.onBeforeCompile(Ie,A),Ge=we.acquireProgram(Ie,Pe),ke.set(Pe,Ge),Y.uniforms=Ie.uniforms;let De=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(De.clippingPlanes=oe.uniform),Yh(R,Ie),Y.needsLights=Df(R),Y.lightsStateVersion=xe,Y.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Ge,Y.uniformsList=null,Ge}function qh(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=bs.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Yh(R,k){let q=be.get(R);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function If(R,k,q,Y,V){k.isScene!==!0&&(k=Ve),P.resetTextureUnits();let ae=k.fog,xe=Y.isMeshStandardMaterial?k.environment:null,Ie=w===null?A.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Wt,Pe=(Y.isMeshStandardMaterial?G:b).get(Y.envMap||xe),ke=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color,mt=Mi;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=A.toneMapping);let Kt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,it=Kt!==void 0?Kt.length:0,Fe=be.get(Y),zn=p.state.lights;if(Z===!0&&(re===!0||R!==M)){let gn=R===M&&Y.id===E;oe.setState(Y,R,gn)}let st=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==zn.state.version||Fe.outputColorSpace!==Ie||V.isBatchedMesh&&Fe.batching===!1||!V.isBatchedMesh&&Fe.batching===!0||V.isBatchedMesh&&Fe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Fe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Fe.instancing===!1||!V.isInstancedMesh&&Fe.instancing===!0||V.isSkinnedMesh&&Fe.skinning===!1||!V.isSkinnedMesh&&Fe.skinning===!0||V.isInstancedMesh&&Fe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Fe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Fe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Fe.instancingMorph===!1&&V.morphTexture!==null||Fe.envMap!==Pe||Y.fog===!0&&Fe.fog!==ae||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==oe.numPlanes||Fe.numIntersection!==oe.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==Ge||Fe.morphTargets!==De||Fe.morphNormals!==et||Fe.morphColors!==ft||Fe.toneMapping!==mt||Fe.morphTargetsCount!==it)&&(st=!0):(st=!0,Fe.__version=Y.version);let vn=Fe.currentProgram;st===!0&&(vn=kr(Y,k,V));let as=!1,sn=!1,tr=!1,gt=vn.getUniforms(),Bn=Fe.uniforms;if(Ae.useProgram(vn.program)&&(as=!0,sn=!0,tr=!0),Y.id!==E&&(E=Y.id,sn=!0),as||M!==R){Ae.buffers.depth.getReversed()?(te.copy(R.projectionMatrix),Np(te),Hp(te),gt.setValue(O,"projectionMatrix",te)):gt.setValue(O,"projectionMatrix",R.projectionMatrix),gt.setValue(O,"viewMatrix",R.matrixWorldInverse);let di=gt.map.cameraPosition;di!==void 0&&di.setValue(O,Se.setFromMatrixPosition(R.matrixWorld)),ze.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&gt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,sn=!0,tr=!0)}if(V.isSkinnedMesh){gt.setOptional(O,V,"bindMatrix"),gt.setOptional(O,V,"bindMatrixInverse");let gn=V.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),gt.setValue(O,"boneTexture",gn.boneTexture,P))}V.isBatchedMesh&&(gt.setOptional(O,V,"batchingTexture"),gt.setValue(O,"batchingTexture",V._matricesTexture,P),gt.setOptional(O,V,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",V._indirectTexture,P),gt.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",V._colorsTexture,P));let nr=q.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&_e.update(V,q,vn),(sn||Fe.receiveShadow!==V.receiveShadow)&&(Fe.receiveShadow=V.receiveShadow,gt.setValue(O,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Bn.envMap.value=Pe,Bn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Bn.envMapIntensity.value=k.environmentIntensity),sn&&(gt.setValue(O,"toneMappingExposure",A.toneMappingExposure),Fe.needsLights&&Pf(Bn,tr),ae&&Y.fog===!0&&me.refreshFogUniforms(Bn,ae),me.refreshMaterialUniforms(Bn,Y,H,X,p.state.transmissionRenderTarget[R.id]),bs.upload(O,qh(Fe),Bn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(bs.upload(O,qh(Fe),Bn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&gt.setValue(O,"center",V.center),gt.setValue(O,"modelViewMatrix",V.modelViewMatrix),gt.setValue(O,"normalMatrix",V.normalMatrix),gt.setValue(O,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let gn=Y.uniformsGroups;for(let di=0,fi=gn.length;di<fi;di++){let Qh=gn[di];z.update(Qh,vn),z.bind(Qh,vn)}}return vn}function Pf(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Df(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,k,q){be.get(R.texture).__webglTexture=k,be.get(R.depthTexture).__webglTexture=q;let Y=be.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,k){let q=be.get(R);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,q=0){w=R,S=k,v=q;let Y=!0,V=null,ae=!1,xe=!1;if(R){let Pe=be.get(R);if(Pe.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(O.FRAMEBUFFER,null),Y=!1;else if(Pe.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Pe.__hasExternalTextures)P.rebindTextures(R,be.get(R.texture).__webglTexture,be.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let De=R.depthTexture;if(Pe.__boundDepthTexture!==De){if(De!==null&&be.has(De)&&(R.width!==De.image.width||R.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);let Ge=be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?V=Ge[k][q]:V=Ge[k],ae=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?V=be.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?V=Ge[q]:V=Ge,C.copy(R.viewport),B.copy(R.scissor),F=R.scissorTest}else C.copy(se).multiplyScalar(H).floor(),B.copy(Ee).multiplyScalar(H).floor(),F=Te;if(Ae.bindFramebuffer(O.FRAMEBUFFER,V)&&Y&&Ae.drawBuffers(R,V),Ae.viewport(C),Ae.scissor(B),Ae.setScissorTest(F),ae){let Pe=be.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,q)}else if(xe){let Pe=be.get(R.texture),ke=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.__webglTexture,q||0,ke)}E=-1},this.readRenderTargetPixels=function(R,k,q,Y,V,ae,xe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xe!==void 0&&(Ie=Ie[xe]),Ie){Ae.bindFramebuffer(O.FRAMEBUFFER,Ie);try{let Pe=R.texture,ke=Pe.format,Ge=Pe.type;if(!ze.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-Y&&q>=0&&q<=R.height-V&&O.readPixels(k,q,Y,V,Ne.convert(ke),Ne.convert(Ge),ae)}finally{let Pe=w!==null?be.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(R,k,q,Y,V,ae,xe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xe!==void 0&&(Ie=Ie[xe]),Ie){let Pe=R.texture,ke=Pe.format,Ge=Pe.type;if(!ze.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=R.width-Y&&q>=0&&q<=R.height-V){Ae.bindFramebuffer(O.FRAMEBUFFER,Ie);let De=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.bufferData(O.PIXEL_PACK_BUFFER,ae.byteLength,O.STREAM_READ),O.readPixels(k,q,Y,V,Ne.convert(ke),Ne.convert(Ge),0);let et=w!==null?be.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,et);let ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Op(O,ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ae),O.deleteBuffer(De),O.deleteSync(ft),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,k=null,q=0){R.isTexture!==!0&&(ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,R=arguments[1]);let Y=Math.pow(2,-q),V=Math.floor(R.image.width*Y),ae=Math.floor(R.image.height*Y),xe=k!==null?k.x:0,Ie=k!==null?k.y:0;P.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,xe,Ie,V,ae),Ae.unbindTexture()},this.copyTextureToTexture=function(R,k,q=null,Y=null,V=0){R.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],k=arguments[2],V=arguments[3]||0,q=null);let ae,xe,Ie,Pe,ke,Ge,De,et,ft,mt=R.isCompressedTexture?R.mipmaps[V]:R.image;q!==null?(ae=q.max.x-q.min.x,xe=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,Pe=q.min.x,ke=q.min.y,Ge=q.isBox3?q.min.z:0):(ae=mt.width,xe=mt.height,Ie=mt.depth||1,Pe=0,ke=0,Ge=0),Y!==null?(De=Y.x,et=Y.y,ft=Y.z):(De=0,et=0,ft=0);let Kt=Ne.convert(k.format),it=Ne.convert(k.type),Fe;k.isData3DTexture?(P.setTexture3D(k,0),Fe=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Fe=O.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Fe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let zn=O.getParameter(O.UNPACK_ROW_LENGTH),st=O.getParameter(O.UNPACK_IMAGE_HEIGHT),vn=O.getParameter(O.UNPACK_SKIP_PIXELS),as=O.getParameter(O.UNPACK_SKIP_ROWS),sn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,mt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),O.pixelStorei(O.UNPACK_SKIP_ROWS,ke),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ge);let tr=R.isDataArrayTexture||R.isData3DTexture,gt=k.isDataArrayTexture||k.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Bn=be.get(R),nr=be.get(k),gn=be.get(Bn.__renderTarget),di=be.get(nr.__renderTarget);Ae.bindFramebuffer(O.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let fi=0;fi<Ie;fi++)tr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.get(R).__webglTexture,V,Ge+fi),R.isDepthTexture?(gt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.get(k).__webglTexture,V,ft+fi),O.blitFramebuffer(Pe,ke,ae,xe,De,et,ae,xe,O.DEPTH_BUFFER_BIT,O.NEAREST)):gt?O.copyTexSubImage3D(Fe,V,De,et,ft+fi,Pe,ke,ae,xe):O.copyTexSubImage2D(Fe,V,De,et,ft+fi,Pe,ke,ae,xe);Ae.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gt?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Fe,V,De,et,ft,ae,xe,Ie,Kt,it,mt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Fe,V,De,et,ft,ae,xe,Ie,Kt,mt.data):O.texSubImage3D(Fe,V,De,et,ft,ae,xe,Ie,Kt,it,mt):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,De,et,ae,xe,Kt,it,mt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,De,et,mt.width,mt.height,Kt,mt.data):O.texSubImage2D(O.TEXTURE_2D,V,De,et,ae,xe,Kt,it,mt);O.pixelStorei(O.UNPACK_ROW_LENGTH,zn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st),O.pixelStorei(O.UNPACK_SKIP_PIXELS,vn),O.pixelStorei(O.UNPACK_SKIP_ROWS,as),O.pixelStorei(O.UNPACK_SKIP_IMAGES,sn),V===0&&k.generateMipmaps&&O.generateMipmap(Fe),Ae.unbindTexture()},this.copyTextureToTexture3D=function(R,k,q=null,Y=null,V=0){return R.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],k=arguments[3],V=arguments[4]||0),ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,k,q,Y,V)},this.initRenderTarget=function(R){be.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Ae.unbindTexture()},this.resetState=function(){S=0,v=0,w=null,Ae.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var Hs=class extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Xt=new I,vr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ju=new I,Zu=new Je,Ju=new Je,Ly=new I,$u=new ye,co=new I,Ga=new hn,ed=new ye,Wa=new Un,Io=class extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$h,this.bindMatrix=new ye,this.bindMatrixInverse=new ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ct),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingSphere.expandByPoint(co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(i),e.ray.intersectsSphere(Ga)!==!1&&(ed.copy(i).invert(),Wa.copy(e.ray).applyMatrix4(ed),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Zu.fromBufferAttribute(i.attributes.skinIndex,e),Ju.fromBufferAttribute(i.attributes.skinWeight,e),ju.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Ju.getComponent(r);if(o!==0){let a=Zu.getComponent(r);$u.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ly.copy(ju).applyMatrix4($u),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Mr=class extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},dn=class extends Nt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Vt,h=Vt,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},td=new ye,Uy=new ye,Po=class s{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Uy;td.multiplyMatrices(a,t[r]),td.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new dn(t,e,e,Ot,Zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Mr),this.bones.push(o),this.boneInverses.push(new ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ei=class extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vs=new ye,nd=new ye,lo=[],id=new Ct,Oy=new ye,ar=new lt,cr=new hn,Do=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Oy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),id.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),cr.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vs),nd.multiplyMatrices(n,vs),ar.matrixWorld=nd,ar.raycast(e,lo);for(let o=0,a=lo.length;o<a;o++){let c=lo[o];c.instanceId=r,c.object=this,t.push(c)}lo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new dn(new Float32Array(i*this.count),i,this.count,ll,Zt));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var zs=class extends un{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bo=new I,Fo=new I,sd=new ye,lr=new Un,ho=new hn,Xa=new I,rd=new I,ks=class extends rt{constructor(e=new St,t=new zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Bo.fromBufferAttribute(t,i-1),Fo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bo.distanceTo(Fo);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;sd.copy(i).invert(),lr.copy(e.ray).applyMatrix4(sd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=h.getX(x),_=h.getX(x+1),y=uo(this,e,lr,c,p,_);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=uo(this,e,lr,c,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=uo(this,e,lr,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=uo(this,e,lr,c,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function uo(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(Bo.fromBufferAttribute(o,i),Fo.fromBufferAttribute(o,r),t.distanceSqToSegment(Bo,Fo,Xa,rd)>n)return;Xa.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Xa);if(!(c<e.near||c>e.far))return{distance:c,point:rd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var od=new I,ad=new I,Er=class extends ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)od.fromBufferAttribute(t,i),ad.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+od.distanceTo(ad);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Lo=class extends ks{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ji=class extends un{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cd=new ye,qc=new Un,fo=new hn,po=new I,Zi=class extends rt{constructor(e=new St,t=new ji){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(i),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;cd.copy(i).invert(),qc.copy(e.ray).applyMatrix4(cd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=l.getX(g);po.fromBufferAttribute(u,m),ld(po,m,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)po.fromBufferAttribute(u,g),ld(po,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ld(s,e,t,n,i,r,o){let a=qc.distanceSqToPoint(s);if(a<t){let c=new I;qc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Vs=class s extends St{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(d,2));function _(){let A=new I,T=new I,S=0,v=(t-e)/n;for(let w=0;w<=r;w++){let E=[],M=w/r,C=M*(t-e)+e;for(let B=0;B<=i;B++){let F=B/i,U=F*c+a,N=Math.sin(U),L=Math.cos(U);T.x=C*N,T.y=-M*n+m,T.z=C*L,u.push(T.x,T.y,T.z),A.set(N,v,L).normalize(),f.push(A.x,A.y,A.z),d.push(F,1-M),E.push(g++)}x.push(E)}for(let w=0;w<i;w++)for(let E=0;E<r;E++){let M=x[E][w],C=x[E+1][w],B=x[E+1][w+1],F=x[E][w+1];(e>0||E!==0)&&(h.push(M,C,F),S+=3),(t>0||E!==r-1)&&(h.push(C,B,F),S+=3)}l.addGroup(p,S,0),p+=S}function y(A){let T=g,S=new ce,v=new I,w=0,E=A===!0?e:t,M=A===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let C=g;for(let B=0;B<=i;B++){let U=B/i*c+a,N=Math.cos(U),L=Math.sin(U);v.x=E*L,v.y=m*M,v.z=E*N,u.push(v.x,v.y,v.z),f.push(0,M,0),S.x=N*.5+.5,S.y=L*.5*M+.5,d.push(S.x,S.y),g++}for(let B=0;B<i;B++){let F=T+B,U=C+B;A===!0?h.push(U,U+1,F):h.push(U+1,U,F),w+=3}l.addGroup(p,w,A===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Uo=class s extends Vs{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Tr=class s extends St{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,f=new I,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],y=p/n,A=0;p===0&&o===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let T=0;T<=t;T++){let S=T/t;u.x=-e*Math.cos(i+S*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+S*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(S+A,1-y),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let y=h[p][_+1],A=h[p][_],T=h[p+1][_],S=h[p+1][_+1];(p!==0||o>0)&&d.push(y,A,S),(p!==n-1||c<Math.PI)&&d.push(A,T,S)}this.setIndex(d),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Gs=class extends un{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fn=class extends Gs{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function mo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ny(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Hy(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Od(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Ti=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yc=class extends Ti{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eu,endingEnd:eu}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case tu:r=e,a=2*t-n;break;case nu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case tu:o=e,c=2*n-t;break;case nu:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,A=d*m-d*x;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+_*o[l+T]+y*o[c+T]+A*o[u+T];return r}},Qc=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Kc=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mo(t,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mo(e.times,Array),values:mo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Ny(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ga,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Ls;var bi=class extends yn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Fs;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends yn{};Oo.prototype.ValueTypeName="color";var ti=class extends yn{};ti.prototype.ValueTypeName="number";var jc=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)$e.slerpFlat(r,0,o,l-a,o,l,c);return r}},ni=class extends yn{InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}};ni.prototype.ValueTypeName="quaternion";ni.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends yn{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Fs;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends yn{};ii.prototype.ValueTypeName="vector";var No=class{constructor(e="",t=-1,n=[],i=lp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ky(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Hy(c);c=hd(c,1,h),l=hd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ti(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,x){if(d.length!==0){let m=[],p=[];Od(d,m,p,g),m.length!==0&&x.push(new u(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let _=0;_!==f[g].morphTargets.length;++_){let y=f[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new ti(".morphTargetInfluence["+x+"]",m,p))}c=d.length*o}else{let d=".bones["+t[u].name+"]";n(ii,d+".position",f,"pos",i),n(ni,d+".quaternion",f,"rot",i),n(ii,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function zy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ti;case"vector":case"vector2":case"vector3":case"vector4":return ii;case"color":return Oo;case"quaternion":return ni;case"bool":case"boolean":return bi;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ky(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zy(s.type);if(s.times===void 0){let t=[],n=[];Od(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Zc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Vy=new Zc,Dn=class{constructor(e){this.manager=e!==void 0?e:Vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Dn.DEFAULT_MATERIAL_NAME="__DEFAULT";var qn={},Jc=class extends Error{constructor(e,t){super(e),this.response=t}},Ji=class extends Dn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Si.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:i});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=qn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:A})=>{if(y)p.close();else{x+=A.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let S=0,v=h.length;S<v;S++){let w=h[S];w.onProgress&&w.onProgress(T)}p.enqueue(A),_()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Jc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Si.add(e,l);let h=qn[e];delete qn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=qn[e];if(h===void 0)throw this.manager.itemError(e),l;delete qn[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var $c=class extends Dn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Ar("img");function c(){h(),Si.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ho=class extends Dn{constructor(e){super(e)}load(e,t,n,i){let r=new Nt,o=new $c(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},$i=class extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},zo=class extends $i{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},qa=new ye,ud=new I,dd=new I,br=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},el=class extends br{constructor(){super(new Mt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ko=class extends $i{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new el}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fd=new ye,hr=new I,Ya=new I,tl=class extends br{constructor(){super(new Mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(hr),Ya.copy(n.position),Ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ya),n.updateMatrixWorld(),i.makeTranslation(-hr.x,-hr.y,-hr.z),fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}},Vo=class extends $i{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},nl=class extends br{constructor(){super(new $n(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends $i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new nl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Go=class extends $i{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ci=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Wo=class extends St{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Xo=class extends Dn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Si.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Si.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Si.add(e,c),r.manager.itemStart(e)}};var pl="\\[\\]\\.:\\/",Gy=new RegExp("["+pl+"]","g"),ml="[^"+pl+"]",Wy="[^"+pl.replace("\\.","")+"]",Xy=/((?:WC+[\/:])*)/.source.replace("WC",ml),qy=/(WCOD+)?/.source.replace("WCOD",Wy),Yy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ml),Qy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ml),Ky=new RegExp("^"+Xy+qy+Yy+Qy+"$"),jy=["material","materials","bones","map"],il=class{constructor(e,t,n){let i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gy,"")}static parseTrackName(e){let t=Ky.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);jy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=il;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sS=new Float32Array(1);var Ri=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var qo=class extends Er{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ce(n),i=new Ce(i);let r=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let x=f===r?n:i;x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3}let h=new St;h.setAttribute("position",new tt(c,3)),h.setAttribute("color",new tt(l,3));let u=new zs({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Yo=class extends In{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Nd={type:"change"},xl={type:"start"},zd={type:"end"},$o=new Un,Hd=new an,Jy=Math.cos(70*Pi.DEG2RAD),Pt=new I,tn=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gl=1e-6,ea=class extends Yo{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$t.ROTATE,MIDDLE:$t.DOLLY,RIGHT:$t.PAN},this.touches={ONE:en.ROTATE,TWO:en.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new $e,this._lastTargetPosition=new I,this._quat=new $e().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ri,this._sphericalDelta=new Ri,this._scale=1,this._panOffset=new I,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new I,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eA.bind(this),this._onPointerDown=$y.bind(this),this._onPointerUp=tA.bind(this),this._onContextMenu=cA.bind(this),this._onMouseWheel=sA.bind(this),this._onKeyDown=rA.bind(this),this._onTouchStart=oA.bind(this),this._onTouchMove=aA.bind(this),this._onMouseDown=nA.bind(this),this._onMouseMove=iA.bind(this),this._interceptControlDown=lA.bind(this),this._interceptControlUp=hA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nd),this.update(),this.state=ut.NONE}update(e=null){let t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Pt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($o.origin.copy(this.object.position),$o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($o.direction))<Jy?this.object.lookAt(this.target):(Hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),$o.intersectPlane(Hd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gl||this._lastTargetPosition.distanceToSquared(this.target)>gl?(this.dispatchEvent(Nd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Pt.copy(i).sub(this.target);let r=Pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function $y(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function eA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function tA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zd),this.state=ut.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ut.DOLLY;break;case $t.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}break;case $t.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(xl)}function iA(s){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function sA(s){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(s.preventDefault(),this.dispatchEvent(xl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(zd))}function rA(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function oA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case en.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ut.TOUCH_ROTATE;break;case en.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case en.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ut.TOUCH_DOLLY_PAN;break;case en.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(xl)}function aA(s){switch(this._trackPointer(s),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ut.NONE}}function cA(s){this.enabled!==!1&&s.preventDefault()}function lA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hA(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yl(s,e){if(e===Td)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Cr||e===jo){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Cr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ta=class extends Dn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tl(t)}),this.register(function(t){return new bl(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new Ol(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new Pl(t)}),this.register(function(t){return new El(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new wl(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new vl(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new Hl(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ci.extractUrlBase(e);o=Ci.resolveURL(l,this.path)}else o=Ci.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ji(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Xd){try{o[Qe.KHR_BINARY_GLTF]=new zl(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Yl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:o[u]=new Ml;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new kl(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[u]=new Vl;break;case Qe.KHR_MESH_QUANTIZATION:o[u]=new Gl;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function uA(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},vl=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Wt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new es(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vo(h),l.distance=u;break;case"spot":l=new ko(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Ml=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,n){let i=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,_t))}return Promise.all(i)}},El=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Tl=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(a,a)}return Promise.all(r)}},bl=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},wl=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Cl=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,_t)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Rl=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Il=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(a[0],a[1],a[2],Wt),Promise.all(r)}},Pl=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Dl=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,_t)),Promise.all(r)}},Bl=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Fl=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Ll=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ul=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ol=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Nl=class{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Hl=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==An.TRIANGLES&&l.mode!==An.TRIANGLE_STRIP&&l.mode!==An.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let x=new ye,m=new I,p=new $e,_=new I(1,1,1),y=new Do(g.geometry,g.material,f);for(let A=0;A<f;A++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,A),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,A),c.SCALE&&_.fromBufferAttribute(c.SCALE,A),y.setMatrixAt(A,x.compose(m,p,_));for(let A in c)if(A==="_COLOR_0"){let T=c[A];y.instanceColor=new ei(T.array,T.itemSize,T.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&g.geometry.setAttribute(A,c[A]);rt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Xd="glTF",Rr=12,kd={JSON:1313821514,BIN:5130562},zl=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Rr,r=new DataView(e,Rr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===kd.JSON){let l=new Uint8Array(e,Rr+o,a);this.content=n.decode(l)}else if(c===kd.BIN){let l=Rr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},kl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Xl[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Xl[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=qs[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(d)},a,l,Wt,f)})})}},Vl=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Gl=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},na=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,x=g-l,m=-2*d+3*f,p=d-f,_=1-m,y=p-f+u;for(let A=0;A!==a;A++){let T=o[x+A+a],S=o[x+A+c]*h,v=o[g+A+a],w=o[g+A]*h;r[A]=_*T+y*S+m*v+p*w}return r}},dA=new $e,Wl=class extends na{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return dA.fromArray(r).normalize().toArray(r),r}},An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vd={9728:Vt,9729:jt,9984:rl,9985:fr,9986:Ms,9987:Ln},Gd={33071:Kn,33648:xr,10497:qi},Al={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fA={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Fs},_l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pA(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Gs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cn})),s.DefaultMaterial}function ns(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function si(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mA(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function gA(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xA(s){let e,t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sl(t.attributes):e=s.indices+":"+Sl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Sl(s.targets[n]);return e}function Sl(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ql(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yA(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var AA=new ye,Yl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ho(this.options.manager):this.textureLoader=new Xo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ji(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ns(r,a,i),si(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ci.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Al[i.type],a=qs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Et(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Al[i.type],l=qs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(d&&d!==u){let p=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(_);y||(x=new l(a,p*d,i.count*d/h),y=new Sr(x,d/h),t.cache.add(_,y)),m=new vr(y,c,f%d/h,g)}else a===null?x=new l(i.count*c):x=new l(a,f,i.count*c),m=new Et(x,c,g);if(i.sparse!==void 0){let p=Al.SCALAR,_=qs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,A=i.sparse.values.byteOffset||0,T=new _(o[1],y,i.sparse.count*p),S=new l(o[2],A,i.sparse.count*c);a!==null&&(m=new Et(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,w=T.length;v<w;v++){let E=T[v];if(m.setX(E,S[v*c]),c>=2&&m.setY(E,S[v*c+1]),c>=3&&m.setZ(E,S[v*c+2]),c>=4&&m.setW(E,S[v*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Vd[f.magFilter]||jt,h.minFilter=Vd[f.minFilter]||Ln,h.wrapS=Gd[f.wrapS]||qi,h.wrapT=Gd[f.wrapT]||qi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==jt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Nt(x);m.needsUpdate=!0,f(m)}),t.load(Ci.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),si(u,o),u.userData.mimeType=o.mimeType||yA(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ji,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new zs,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Gs}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Qe.KHR_MATERIALS_UNLIT]){let u=i[Qe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Wt),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,_t)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Yt);let h=r.alphaMode||_l.OPAQUE;if(h===_l.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_l.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Gt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Gt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Gt){let u=r.emissiveFactor;a.emissive=new Ce().setRGB(u[0],u[1],u[2],Wt)}return r.emissiveTexture!==void 0&&o!==Gt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,_t)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),si(u,r),t.associations.set(u,{materials:e}),r.extensions&&ns(i,u,r),u})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=xA(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Wd(new St,l,t),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?pA(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],m=o[d],p,_=l[d];if(m.mode===An.TRIANGLES||m.mode===An.TRIANGLE_STRIP||m.mode===An.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Io(x,_):new lt(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===An.TRIANGLE_STRIP?p.geometry=yl(p.geometry,jo):m.mode===An.TRIANGLE_FAN&&(p.geometry=yl(p.geometry,Cr));else if(m.mode===An.LINES)p=new Er(x,_);else if(m.mode===An.LINE_STRIP)p=new ks(x,_);else if(m.mode===An.LINE_LOOP)p=new Lo(x,_);else if(m.mode===An.POINTS)p=new Zi(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&gA(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),si(p,r),m.extensions&&ns(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ns(i,u[0],r),u[0];let f=new wn;r.extensions&&ns(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Mt(Pi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new $n(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),si(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new ye;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Po(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],x=d.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let _=0,y=f.length;_<y;_++){let A=f[_],T=d[_],S=g[_],v=x[_],w=m[_];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let E=n._createAnimationTracks(A,T,S,v,w);if(E)for(let M=0;M<E.length;M++)p.push(E[M])}return new No(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,AA)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Mr:l.length>1?h=new wn:l.length===1?h=l[0]:h=new rt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),si(h,r),r.extensions&&ns(n,h,r),r.matrix!==void 0){let u=new ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new wn;n.name&&(r.name=i.createUniqueName(n.name)),si(r,n),n.extensions&&ns(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof un||f instanceof Nt)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Di[r.path]===Di.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Di[r.path]){case Di.weights:l=ti;break;case Di.rotation:l=ni;break;case Di.position:case Di.scale:l=ii;break;default:switch(n.itemSize){case 1:l=ti;break;case 2:case 3:default:l=ii;break}break}let h=i.interpolation!==void 0?fA[i.interpolation]:Ls,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+Di[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ql(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ni?Wl:na;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _A(s,e,t){let n=e.attributes,i=new Ct;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let h=ql(qs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=ql(qs[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new hn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Wd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Xl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return je.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),si(s,e),_A(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?mA(s,e.targets,t):s})}var nn=new Ce,ia=class extends Dn{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,n,i){let r=this,o=new Ji(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(m,p=0){let _=/^ply([\s\S]*)end_header(\r\n|\r|\n)/,y="",A=_.exec(m);A!==null&&(y=A[1]);let T={comments:[],elements:[],headerLength:p,objInfo:""},S=y.split(/\r\n|\r|\n/),v;function w(E,M){let C={type:E[0]};return C.type==="list"?(C.name=E[3],C.countType=E[1],C.itemType=E[2]):C.name=E[1],C.name in M&&(C.name=M[C.name]),C}for(let E=0;E<S.length;E++){let M=S[E];if(M=M.trim(),M==="")continue;let C=M.split(/\s+/),B=C.shift();switch(M=C.join(" "),B){case"format":T.format=C[0],T.version=C[1];break;case"comment":T.comments.push(M);break;case"element":v!==void 0&&T.elements.push(v),v={},v.name=C[0],v.count=parseInt(C[1]),v.properties=[];break;case"property":v.properties.push(w(C,x.propertyNameMapping));break;case"obj_info":T.objInfo=M;break;default:console.log("unhandled",B,C)}}return v!==void 0&&T.elements.push(v),T}function n(m,p){switch(p){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(m);case"float":case"double":case"float32":case"float64":return parseFloat(m)}}function i(m,p){let _={};for(let y=0;y<m.length;y++){if(p.empty())return null;if(m[y].type==="list"){let A=[],T=n(p.next(),m[y].countType);for(let S=0;S<T;S++){if(p.empty())return null;A.push(n(p.next(),m[y].itemType))}_[m[y].name]=A}else _[m[y].name]=n(p.next(),m[y].type)}return _}function r(){let m={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(let p of Object.keys(x.customPropertyMapping))m[p]=[];return m}function o(m){let p=m.map(y=>y.name);function _(y){for(let A=0,T=y.length;A<T;A++){let S=y[A];if(p.includes(S))return S}return null}return{attrX:_(["x","px","posx"])||"x",attrY:_(["y","py","posy"])||"y",attrZ:_(["z","pz","posz"])||"z",attrNX:_(["nx","normalx"]),attrNY:_(["ny","normaly"]),attrNZ:_(["nz","normalz"]),attrS:_(["s","u","texture_u","tx"]),attrT:_(["t","v","texture_v","ty"]),attrR:_(["red","diffuse_red","r","diffuse_r"]),attrG:_(["green","diffuse_green","g","diffuse_g"]),attrB:_(["blue","diffuse_blue","b","diffuse_b"])}}function a(m,p){let _=r(),y=/end_header\s+(\S[\s\S]*\S|\S)\s*$/,A,T;(T=y.exec(m))!==null?A=T[1].split(/\s+/):A=[];let S=new Ql(A);e:for(let v=0;v<p.elements.length;v++){let w=p.elements[v],E=o(w.properties);for(let M=0;M<w.count;M++){let C=i(w.properties,S);if(!C)break e;l(_,w.name,C,E)}}return c(_)}function c(m){let p=new St;m.indices.length>0&&p.setIndex(m.indices),p.setAttribute("position",new tt(m.vertices,3)),m.normals.length>0&&p.setAttribute("normal",new tt(m.normals,3)),m.uvs.length>0&&p.setAttribute("uv",new tt(m.uvs,2)),m.colors.length>0&&p.setAttribute("color",new tt(m.colors,3)),(m.faceVertexUvs.length>0||m.faceVertexColors.length>0)&&(p=p.toNonIndexed(),m.faceVertexUvs.length>0&&p.setAttribute("uv",new tt(m.faceVertexUvs,2)),m.faceVertexColors.length>0&&p.setAttribute("color",new tt(m.faceVertexColors,3)));for(let _ of Object.keys(x.customPropertyMapping))m[_].length>0&&p.setAttribute(_,new tt(m[_],x.customPropertyMapping[_].length));return p.computeBoundingSphere(),p}function l(m,p,_,y){if(p==="vertex"){m.vertices.push(_[y.attrX],_[y.attrY],_[y.attrZ]),y.attrNX!==null&&y.attrNY!==null&&y.attrNZ!==null&&m.normals.push(_[y.attrNX],_[y.attrNY],_[y.attrNZ]),y.attrS!==null&&y.attrT!==null&&m.uvs.push(_[y.attrS],_[y.attrT]),y.attrR!==null&&y.attrG!==null&&y.attrB!==null&&(nn.setRGB(_[y.attrR]/255,_[y.attrG]/255,_[y.attrB]/255,_t),m.colors.push(nn.r,nn.g,nn.b));for(let A of Object.keys(x.customPropertyMapping))for(let T of x.customPropertyMapping[A])m[A].push(_[T])}else if(p==="face"){let A=_.vertex_indices||_.vertex_index,T=_.texcoord;A.length===3?(m.indices.push(A[0],A[1],A[2]),T&&T.length===6&&(m.faceVertexUvs.push(T[0],T[1]),m.faceVertexUvs.push(T[2],T[3]),m.faceVertexUvs.push(T[4],T[5]))):A.length===4&&(m.indices.push(A[0],A[1],A[3]),m.indices.push(A[1],A[2],A[3])),y.attrR!==null&&y.attrG!==null&&y.attrB!==null&&(nn.setRGB(_[y.attrR]/255,_[y.attrG]/255,_[y.attrB]/255,_t),m.faceVertexColors.push(nn.r,nn.g,nn.b),m.faceVertexColors.push(nn.r,nn.g,nn.b),m.faceVertexColors.push(nn.r,nn.g,nn.b))}}function h(m,p){let _={},y=0;for(let A=0;A<p.length;A++){let T=p[A],S=T.valueReader;if(T.type==="list"){let v=[],w=T.countReader.read(m+y);y+=T.countReader.size;for(let E=0;E<w;E++)v.push(S.read(m+y)),y+=S.size;_[T.name]=v}else _[T.name]=S.read(m+y),y+=S.size}return[_,y]}function u(m,p,_){function y(A,T,S){switch(T){case"int8":case"char":return{read:v=>A.getInt8(v),size:1};case"uint8":case"uchar":return{read:v=>A.getUint8(v),size:1};case"int16":case"short":return{read:v=>A.getInt16(v,S),size:2};case"uint16":case"ushort":return{read:v=>A.getUint16(v,S),size:2};case"int32":case"int":return{read:v=>A.getInt32(v,S),size:4};case"uint32":case"uint":return{read:v=>A.getUint32(v,S),size:4};case"float32":case"float":return{read:v=>A.getFloat32(v,S),size:4};case"float64":case"double":return{read:v=>A.getFloat64(v,S),size:8}}}for(let A=0,T=m.length;A<T;A++){let S=m[A];S.type==="list"?(S.countReader=y(p,S.countType,_),S.valueReader=y(p,S.itemType,_)):S.valueReader=y(p,S.type,_)}}function f(m,p){let _=r(),y=p.format==="binary_little_endian",A=new DataView(m,p.headerLength),T,S=0;for(let v=0;v<p.elements.length;v++){let w=p.elements[v],E=w.properties,M=o(E);u(E,A,y);for(let C=0;C<w.count;C++){T=h(S,E),S+=T[1];let B=T[0];l(_,w.name,B,M)}}return c(_)}function d(m){let p=0,_=!0,y="",A=[],T=new TextDecoder().decode(m.subarray(0,5)),S=/^ply\r\n/.test(T);do{let v=String.fromCharCode(m[p++]);v!==`
`&&v!=="\r"?y+=v:(y==="end_header"&&(_=!1),y!==""&&(A.push(y),y=""))}while(_&&p<m.length);return S===!0&&p++,{headerText:A.join("\r")+"\r",headerLength:p}}let g,x=this;if(e instanceof ArrayBuffer){let m=new Uint8Array(e),{headerText:p,headerLength:_}=d(m),y=t(p,_);if(y.format==="ascii"){let A=new TextDecoder().decode(m);g=a(A,y)}else g=f(e,y)}else g=a(e,t(e));return g}},Ql=class{constructor(e){this.arr=e,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}};var Br=class s{static idGen=0;constructor(e,t){let n,i;this.promise=new Promise((l,h)=>{n=l,i=h});let r=n.bind(this),o=i.bind(this),a=(...l)=>{r(...l)},c=l=>{o(l)};e(a.bind(this),c.bind(this)),this.abortHandler=t,this.id=s.idGen++}then(e){return new s((t,n)=>{this.promise=this.promise.then((...i)=>{let r=e(...i);r instanceof Promise||r instanceof s?r.then((...o)=>{t(...o)}):t(r)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new s(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}},ha=class extends Error{constructor(e){super(e)}},mS=(function(){let s=new Float32Array(1),e=new Int32Array(s.buffer);return function(t){s[0]=t;let n=e[0],i=n>>16&32768,r=n>>12&2047,o=n>>23&255;return o<103?i:o>142?(i|=31744,i|=(o==255?0:1)&&n&8388607,i):o<113?(r|=2048,i|=(r>>114-o)+(r>>113-o&1),i):(i|=o-112<<10|r>>1,i+=r&1,i)}})(),Kl=(function(){let s=new Float32Array(1),e=new Int32Array(s.buffer);return function(t){return s[0]=t,e[0]}})();var SA=function(s,e){return s[e]+(s[e+1]<<8)+(s[e+2]<<16)+(s[e+3]<<24)},fa=function(s,e,t=!0,n){let i=new AbortController,r=i.signal,o=!1,a=h=>{i.abort(h),o=!0},c=!1,l=(h,u,f,d)=>{e&&!c&&(e(h,u,f,d),h===100&&(c=!0))};return new Br((h,u)=>{let f={signal:r};n&&(f.headers=n),fetch(s,f).then(async d=>{if(!d.ok){let y=await d.text();u(new Error(`Fetch failed: ${d.status} ${d.statusText} ${y}`));return}let g=d.body.getReader(),x=0,m=d.headers.get("Content-Length"),p=m?parseInt(m):void 0,_=[];for(;!o;)try{let{value:y,done:A}=await g.read();if(A){if(l(100,"100%",y,p),t){let v=new Blob(_).arrayBuffer();h(v)}else h();break}x+=y.length;let T,S;p!==void 0&&(T=x/p*100,S=`${T.toFixed(2)}%`),t&&_.push(y),l(T,S,y,p)}catch(y){u(y);return}}).catch(d=>{u(new ha(d))})},a)},At=function(s,e,t){return Math.max(Math.min(s,t),e)},Ys=function(){return performance.now()/1e3},js=s=>{if(s.geometry&&(s.geometry.dispose(),s.geometry=null),s.material&&(s.material.dispose(),s.material=null),s.children)for(let e of s.children)js(e)},pn=(s,e)=>new Promise(t=>{window.setTimeout(()=>{t(s?s():void 0)},e?1:50)}),Js=(s=0)=>{let e=0;if(s===1)e=9;else if(s===2)e=24;else if(s===3)e=45;else if(s>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},Ch=()=>{let s,e;return{promise:new Promise((n,i)=>{s=n,e=i}),resolve:s,reject:e}},jl=s=>{let e,t;return s||(s=()=>{}),{promise:new Br((i,r)=>{e=i,t=r},s),resolve:e,reject:t}},ih=class{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}};function Rh(){let s=navigator.userAgent;return s.indexOf("iPhone")>0||s.indexOf("iPad")>0}function _f(){if(Rh()){let s=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new ih(parseInt(s[1]||0,10),parseInt(s[2]||0,10),parseInt(s[3]||0,10))}else return null}var vA=14,he=class s{static OFFSET={X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37};constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=Js(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+vA,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){let t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0],n=Js(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){let e=s.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,r,o,a,c,l,h,u,f,d,g,...x){let m=[e,t,n,i,r,o,a,c,l,h,u,f,d,g,...this.defaultSphericalHarmonics];for(let p=0;p<x.length&&p<this.sphericalHarmonicsCount;p++)m[p]=x[p];return this.addSplat(m),m}addSplatFromArray(e,t){let n=e.splats[t],i=s.createSplat(this.sphericalHarmonicsDegree);for(let r=0;r<this.componentCount&&r<n.length;r++)i[r]=n[r];this.addSplat(i)}},nt=class{static DefaultSplatSortDistanceMapPrecision=16;static MemoryPageSize=65536;static BytesPerFloat=4;static BytesPerInt=4;static MaxScenes=32;static ProgressiveLoadSectionSize=262144;static ProgressiveLoadSectionDelayDuration=15;static SphericalHarmonics8BitCompressionRange=3},MA=nt.SphericalHarmonics8BitCompressionRange,Bi=MA/2,Dt=Ws.toHalfFloat.bind(Ws),Ih=Ws.fromHalfFloat.bind(Ws),yt=(s,e,t=!1,n,i)=>{if(e===0)return s;if(e===1||e===2&&!t)return Ws.fromHalfFloat(s);if(e===2)return Ph(s,n,i)},Ir=(s,e,t)=>{s=At(s,e,t);let n=t-e;return At(Math.floor((s-e)/n*255),0,255)},Ph=(s,e,t)=>{let n=t-e;return s/255*n+e},Sf=(s,e,t)=>Ir(Ih(s,e,t)),EA=(s,e,t)=>Dt(Ph(s,e,t)),ot=(s,e,t,n=!1)=>t===0?s.getFloat32(e*4,!0):t===1||t===2&&!n?s.getUint16(e*2,!0):s.getUint8(e,!0),TA=(function(){let s=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let r=s;return t===2&&i?n===1?r=EA:n==0&&(r=Ph):t===2||t===1?n===0?r=Ih:n==2&&(i?r=Sf:r=s):t===0&&(n===1?r=Dt:n==2&&(i?r=Ir:r=Dt)),r(e)}})(),Qs=(s,e,t,n,i=0)=>{let r=new Uint8Array(s,e),o=new Uint8Array(t,n);for(let a=0;a<i;a++)o[a]=r[a]},Me=class s{static CurrentMajorVersion=0;static CurrentMinorVersion=1;static CenterComponentCount=3;static ScaleComponentCount=3;static RotationComponentCount=4;static ColorComponentCount=4;static CovarianceComponentCount=6;static SplatScaleOffsetFloat=3;static SplatRotationOffsetFloat=6;static CompressionLevels={0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}};static CovarianceSizeFloats=6;static HeaderSizeBytes=4096;static SectionHeaderSizeBytes=1024;static BucketStorageSizeBytes=12;static BucketStorageSizeFloats=3;static BucketBlockSize=5;static BucketSize=256;constructor(e,t=!0){this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){let n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n,i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let r=i;n=e.fullBucketCount;let o=0;for(;r<e.splatCount;){let a=e.partiallyFilledBucketLengths[o];if(t>=r&&t<r+a)break;r+=a,n++,o++}}return n}getSplatCenter(e,t,n){let i=this.globalSplatIndexToSectionMap[e],r=this.sections[i],o=e-r.splatCountOffset,a=r.bytesPerSplat*o,c=new DataView(this.bufferData,r.dataBase+a),l=ot(c,0,this.compressionLevel),h=ot(c,1,this.compressionLevel),u=ot(c,2,this.compressionLevel);if(this.compressionLevel>=1){let d=this.getBucketIndex(r,o)*s.BucketStorageSizeFloats,g=r.compressionScaleFactor,x=r.compressionScaleRange;t.x=(l-x)*g+r.bucketArray[d],t.y=(h-x)*g+r.bucketArray[d+1],t.z=(u-x)*g+r.bucketArray[d+2]}else t.x=l,t.y=h,t.z=u;n&&t.applyMatrix4(n)}getSplatScaleAndRotation=(function(){let e=new ye,t=new ye,n=new ye,i=new I,r=new I,o=new $e;return function(a,c,l,h,u){let f=this.globalSplatIndexToSectionMap[a],d=this.sections[f],g=a-d.splatCountOffset,x=d.bytesPerSplat*g+s.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,d.dataBase+x);r.set(yt(ot(m,0,this.compressionLevel),this.compressionLevel),yt(ot(m,1,this.compressionLevel),this.compressionLevel),yt(ot(m,2,this.compressionLevel),this.compressionLevel)),u&&(u.x!==void 0&&(r.x=u.x),u.y!==void 0&&(r.y=u.y),u.z!==void 0&&(r.z=u.z)),o.set(yt(ot(m,4,this.compressionLevel),this.compressionLevel),yt(ot(m,5,this.compressionLevel),this.compressionLevel),yt(ot(m,6,this.compressionLevel),this.compressionLevel),yt(ot(m,3,this.compressionLevel),this.compressionLevel)),h?(e.makeScale(r.x,r.y,r.z),t.makeRotationFromQuaternion(o),n.copy(e).multiply(t).multiply(h),n.decompose(i,l,c)):(c.copy(r),l.copy(o))}})();getSplatColor(e,t){let n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],r=e-i.splatCountOffset,o=i.bytesPerSplat*r+s.CompressionLevels[this.compressionLevel].ColorOffsetBytes,a=new Uint8Array(this.bufferData,i.dataBase+o,4);t.set(a[0],a[1],a[2],a[3])}fillSplatCenterArray(e,t,n,i,r){let o=this.splatCount;n=n||0,i=i||o-1,r===void 0&&(r=n);let a=new I;for(let c=n;c<=i;c++){let l=this.globalSplatIndexToSectionMap[c],h=this.sections[l],u=c-h.splatCountOffset,f=(c-n+r)*s.CenterComponentCount,d=h.bytesPerSplat*u,g=new DataView(this.bufferData,h.dataBase+d),x=ot(g,0,this.compressionLevel),m=ot(g,1,this.compressionLevel),p=ot(g,2,this.compressionLevel);if(this.compressionLevel>=1){let y=this.getBucketIndex(h,u)*s.BucketStorageSizeFloats,A=h.compressionScaleFactor,T=h.compressionScaleRange;a.x=(x-T)*A+h.bucketArray[y],a.y=(m-T)*A+h.bucketArray[y+1],a.z=(p-T)*A+h.bucketArray[y+2]}else a.x=x,a.y=m,a.z=p;t&&a.applyMatrix4(t),e[f]=a.x,e[f+1]=a.y,e[f+2]=a.z}}fillSplatScaleRotationArray=(function(){let e=new ye,t=new ye,n=new ye,i=new I,r=new $e,o=new I,a=c=>{let l=c.w<0?-1:1;c.x*=l,c.y*=l,c.z*=l,c.w*=l};return function(c,l,h,u,f,d,g,x){let m=this.splatCount;u=u||0,f=f||m-1,d===void 0&&(d=u);let p=(_,y)=>(y===void 0&&(y=this.compressionLevel),TA(_,y,g));for(let _=u;_<=f;_++){let y=this.globalSplatIndexToSectionMap[_],A=this.sections[y],T=_-A.splatCountOffset,S=A.bytesPerSplat*T+s.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,v=(_-u+d)*s.ScaleComponentCount,w=(_-u+d)*s.RotationComponentCount,E=new DataView(this.bufferData,A.dataBase+S),M=x&&x.x!==void 0?x.x:ot(E,0,this.compressionLevel),C=x&&x.y!==void 0?x.y:ot(E,1,this.compressionLevel),B=x&&x.z!==void 0?x.z:ot(E,2,this.compressionLevel),F=ot(E,3,this.compressionLevel),U=ot(E,4,this.compressionLevel),N=ot(E,5,this.compressionLevel),L=ot(E,6,this.compressionLevel);i.set(yt(M,this.compressionLevel),yt(C,this.compressionLevel),yt(B,this.compressionLevel)),r.set(yt(U,this.compressionLevel),yt(N,this.compressionLevel),yt(L,this.compressionLevel),yt(F,this.compressionLevel)).normalize(),h&&(o.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(r),n.identity().premultiply(e).premultiply(t),n.premultiply(h),n.decompose(o,r,i),r.normalize()),a(r),c&&(c[v]=p(i.x,0),c[v+1]=p(i.y,0),c[v+2]=p(i.z,0)),l&&(l[w]=p(r.x,0),l[w+1]=p(r.y,0),l[w+2]=p(r.z,0),l[w+3]=p(r.w,0))}}})();static computeCovariance=(function(){let e=new ye,t=new Ue,n=new Ue,i=new Ue,r=new Ue,o=new Ue,a=new Ue;return function(c,l,h,u,f=0,d){e.makeScale(c.x,c.y,c.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(l),n.setFromMatrix4(e),i.copy(n).multiply(t),r.copy(i).transpose().premultiply(i),h&&(o.setFromMatrix4(h),a.copy(o).transpose(),r.multiply(a),r.premultiply(o)),d>=1?(u[f]=Dt(r.elements[0]),u[f+1]=Dt(r.elements[3]),u[f+2]=Dt(r.elements[6]),u[f+3]=Dt(r.elements[4]),u[f+4]=Dt(r.elements[7]),u[f+5]=Dt(r.elements[8])):(u[f]=r.elements[0],u[f+1]=r.elements[3],u[f+2]=r.elements[6],u[f+3]=r.elements[4],u[f+4]=r.elements[7],u[f+5]=r.elements[8])}})();fillSplatCovarianceArray(e,t,n,i,r,o){let a=this.splatCount,c=new I,l=new $e;n=n||0,i=i||a-1,r===void 0&&(r=n);for(let h=n;h<=i;h++){let u=this.globalSplatIndexToSectionMap[h],f=this.sections[u],d=h-f.splatCountOffset,g=(h-n+r)*s.CovarianceComponentCount,x=f.bytesPerSplat*d+s.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,f.dataBase+x);c.set(yt(ot(m,0,this.compressionLevel),this.compressionLevel),yt(ot(m,1,this.compressionLevel),this.compressionLevel),yt(ot(m,2,this.compressionLevel),this.compressionLevel)),l.set(yt(ot(m,4,this.compressionLevel),this.compressionLevel),yt(ot(m,5,this.compressionLevel),this.compressionLevel),yt(ot(m,6,this.compressionLevel),this.compressionLevel),yt(ot(m,3,this.compressionLevel),this.compressionLevel)),s.computeCovariance(c,l,t,e,g,o)}}fillSplatColorArray(e,t,n,i,r){let o=this.splatCount;n=n||0,i=i||o-1,r===void 0&&(r=n);for(let a=n;a<=i;a++){let c=this.globalSplatIndexToSectionMap[a],l=this.sections[c],h=a-l.splatCountOffset,u=(a-n+r)*s.ColorComponentCount,f=l.bytesPerSplat*h+s.CompressionLevels[this.compressionLevel].ColorOffsetBytes,d=new Uint8Array(this.bufferData,l.dataBase+f),g=d[3];g=g>=t?g:0,e[u]=d[0],e[u+1]=d[1],e[u+2]=d[2],e[u+3]=g}}fillSphericalHarmonicsArray=(function(){let e=[];for(let N=0;N<15;N++)e[N]=new I;let t=new Ue,n=new ye,i=new I,r=new I,o=new $e,a=[],c=[],l=[],h=[],u=[],f=[],d=[],g=[],x=[],m=[],p=[],_=[],y=[],A=[],T=[],S=[],v=[],w=[],E=N=>N,M=(N,L,X,H)=>{N[0]=L,N[1]=X,N[2]=H},C=(N,L,X,H,W)=>{N[0]=ot(L,H,W,!0),N[1]=ot(L,H+X,W,!0),N[2]=ot(L,H+X+X,W,!0)},B=(N,L)=>{L[0]=N[0],L[1]=N[1],L[2]=N[2]},F=(N,L,X,H)=>{L[X]=H(N[0]),L[X+1]=H(N[1]),L[X+2]=H(N[2])},U=(N,L,X,H,W)=>(L[0]=yt(N[0],X,!0,H,W),L[1]=yt(N[1],X,!0,H,W),L[2]=yt(N[2],X,!0,H,W),L);return function(N,L,X,H,W,K,se){let Ee=this.splatCount;H=H||0,W=W||Ee-1,K===void 0&&(K=H),X&&L>=1&&(n.copy(X),n.decompose(i,o,r),o.normalize(),n.makeRotationFromQuaternion(o),t.setFromMatrix4(n),M(a,t.elements[4],-t.elements[7],t.elements[1]),M(c,-t.elements[5],t.elements[8],-t.elements[2]),M(l,t.elements[3],-t.elements[6],t.elements[0]));let Te=Z=>Sf(Z,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),j=Z=>Ir(Z,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Z=H;Z<=W;Z++){let re=this.globalSplatIndexToSectionMap[Z],te=this.sections[re];L=Math.min(L,te.sphericalHarmonicsDegree);let ge=Js(L),Se=Z-te.splatCountOffset,Le=te.bytesPerSplat*Se+s.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Ve=new DataView(this.bufferData,te.dataBase+Le),Re=(Z-H+K)*ge,Ye=X?0:this.compressionLevel,O=E;Ye!==se&&(Ye===1?se===0?O=Ih:se==2&&(O=Te):Ye===0&&(se===1?O=Dt:se==2&&(O=j)));let Xe=this.minSphericalHarmonicsCoeff,Be=this.maxSphericalHarmonicsCoeff;L>=1&&(C(x,Ve,3,0,this.compressionLevel),C(m,Ve,3,1,this.compressionLevel),C(p,Ve,3,2,this.compressionLevel),X?(U(x,x,this.compressionLevel,Xe,Be),U(m,m,this.compressionLevel,Xe,Be),U(p,p,this.compressionLevel,Xe,Be),s.rotateSphericalHarmonics3(x,m,p,a,c,l,A,T,S)):(B(x,A),B(m,T),B(p,S)),F(A,N,Re,O),F(T,N,Re+3,O),F(S,N,Re+6,O),L>=2&&(C(x,Ve,5,9,this.compressionLevel),C(m,Ve,5,10,this.compressionLevel),C(p,Ve,5,11,this.compressionLevel),C(_,Ve,5,12,this.compressionLevel),C(y,Ve,5,13,this.compressionLevel),X?(U(x,x,this.compressionLevel,Xe,Be),U(m,m,this.compressionLevel,Xe,Be),U(p,p,this.compressionLevel,Xe,Be),U(_,_,this.compressionLevel,Xe,Be),U(y,y,this.compressionLevel,Xe,Be),s.rotateSphericalHarmonics5(x,m,p,_,y,a,c,l,h,u,f,d,g,A,T,S,v,w)):(B(x,A),B(m,T),B(p,S),B(_,v),B(y,w)),F(A,N,Re+9,O),F(T,N,Re+12,O),F(S,N,Re+15,O),F(v,N,Re+18,O),F(w,N,Re+21,O)))}}})();static dot3=(e,t,n,i,r)=>{r[0]=r[1]=r[2]=0;let o=i[0],a=i[1],c=i[2];s.addInto3(e[0]*o,e[1]*o,e[2]*o,r),s.addInto3(t[0]*a,t[1]*a,t[2]*a,r),s.addInto3(n[0]*c,n[1]*c,n[2]*c,r)};static addInto3=(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n};static dot5=(e,t,n,i,r,o,a)=>{a[0]=a[1]=a[2]=0;let c=o[0],l=o[1],h=o[2],u=o[3],f=o[4];s.addInto3(e[0]*c,e[1]*c,e[2]*c,a),s.addInto3(t[0]*l,t[1]*l,t[2]*l,a),s.addInto3(n[0]*h,n[1]*h,n[2]*h,a),s.addInto3(i[0]*u,i[1]*u,i[2]*u,a),s.addInto3(r[0]*f,r[1]*f,r[2]*f,a)};static rotateSphericalHarmonics3=(e,t,n,i,r,o,a,c,l)=>{s.dot3(e,t,n,i,a),s.dot3(e,t,n,r,c),s.dot3(e,t,n,o,l)};static rotateSphericalHarmonics5=(e,t,n,i,r,o,a,c,l,h,u,f,d,g,x,m,p,_)=>{let y=Math.sqrt(.25),A=Math.sqrt(3/4),T=Math.sqrt(1/3),S=Math.sqrt(4/3),v=Math.sqrt(1/12);l[0]=y*(c[2]*o[0]+c[0]*o[2]+(o[2]*c[0]+o[0]*c[2])),l[1]=c[1]*o[0]+o[1]*c[0],l[2]=A*(c[1]*o[1]+o[1]*c[1]),l[3]=c[1]*o[2]+o[1]*c[2],l[4]=y*(c[2]*o[2]-c[0]*o[0]+(o[2]*c[2]-o[0]*c[0])),s.dot5(e,t,n,i,r,l,g),h[0]=y*(a[2]*o[0]+a[0]*o[2]+(o[2]*a[0]+o[0]*a[2])),h[1]=a[1]*o[0]+o[1]*a[0],h[2]=A*(a[1]*o[1]+o[1]*a[1]),h[3]=a[1]*o[2]+o[1]*a[2],h[4]=y*(a[2]*o[2]-a[0]*o[0]+(o[2]*a[2]-o[0]*a[0])),s.dot5(e,t,n,i,r,h,x),u[0]=T*(a[2]*a[0]+a[0]*a[2])+-v*(c[2]*c[0]+c[0]*c[2]+(o[2]*o[0]+o[0]*o[2])),u[1]=S*a[1]*a[0]+-T*(c[1]*c[0]+o[1]*o[0]),u[2]=a[1]*a[1]+-y*(c[1]*c[1]+o[1]*o[1]),u[3]=S*a[1]*a[2]+-T*(c[1]*c[2]+o[1]*o[2]),u[4]=T*(a[2]*a[2]-a[0]*a[0])+-v*(c[2]*c[2]-c[0]*c[0]+(o[2]*o[2]-o[0]*o[0])),s.dot5(e,t,n,i,r,u,m),f[0]=y*(a[2]*c[0]+a[0]*c[2]+(c[2]*a[0]+c[0]*a[2])),f[1]=a[1]*c[0]+c[1]*a[0],f[2]=A*(a[1]*c[1]+c[1]*a[1]),f[3]=a[1]*c[2]+c[1]*a[2],f[4]=y*(a[2]*c[2]-a[0]*c[0]+(c[2]*a[2]-c[0]*a[0])),s.dot5(e,t,n,i,r,f,p),d[0]=y*(c[2]*c[0]+c[0]*c[2]-(o[2]*o[0]+o[0]*o[2])),d[1]=c[1]*c[0]-o[1]*o[0],d[2]=A*(c[1]*c[1]-o[1]*o[1]),d[3]=c[1]*c[2]-o[1]*o[2],d[4]=y*(c[2]*c[2]-c[0]*c[0]-(o[2]*o[2]-o[0]*o[0])),s.dot5(e,t,n,i,r,d,_)};static parseHeader(e){let t=new Uint8Array(e,0,s.HeaderSizeBytes),n=new Uint16Array(e,0,s.HeaderSizeBytes/2),i=new Uint32Array(e,0,s.HeaderSizeBytes/4),r=new Float32Array(e,0,s.HeaderSizeBytes/4),o=t[0],a=t[1],c=i[1],l=i[2],h=i[3],u=i[4],f=n[10],d=new I(r[6],r[7],r[8]),g=r[9]||-Bi,x=r[10]||Bi;return{versionMajor:o,versionMinor:a,maxSectionCount:c,sectionCount:l,maxSplatCount:h,splatCount:u,compressionLevel:f,sceneCenter:d,minSphericalHarmonicsCoeff:g,maxSphericalHarmonicsCoeff:x}}static writeHeaderCountsToBuffer(e,t,n){let i=new Uint32Array(n,0,s.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){let n=new Uint8Array(t,0,s.HeaderSizeBytes),i=new Uint16Array(t,0,s.HeaderSizeBytes/2),r=new Uint32Array(t,0,s.HeaderSizeBytes/4),o=new Float32Array(t,0,s.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,r[1]=e.maxSectionCount,r[2]=e.sectionCount,r[3]=e.maxSplatCount,r[4]=e.splatCount,i[10]=e.compressionLevel,o[6]=e.sceneCenter.x,o[7]=e.sceneCenter.y,o[8]=e.sceneCenter.z,o[9]=e.minSphericalHarmonicsCoeff||-Bi,o[10]=e.maxSphericalHarmonicsCoeff||Bi}static parseSectionHeaders(e,t,n=0,i){let r=e.compressionLevel,o=e.maxSectionCount,a=new Uint16Array(t,n,o*s.SectionHeaderSizeBytes/2),c=new Uint32Array(t,n,o*s.SectionHeaderSizeBytes/4),l=new Float32Array(t,n,o*s.SectionHeaderSizeBytes/4),h=[],u=0,f=u/2,d=u/4,g=s.HeaderSizeBytes+e.maxSectionCount*s.SectionHeaderSizeBytes,x=0;for(let m=0;m<o;m++){let p=c[d+1],_=c[d+2],y=c[d+3],A=l[d+4],T=A/2,S=a[f+10],v=c[d+6]||s.CompressionLevels[r].ScaleRange,w=c[d+8],E=c[d+9],M=E*4,C=S*y+M,B=a[f+20],{bytesPerSplat:F}=s.calculateComponentStorage(r,B),U=F*p,N=U+C,L={bytesPerSplat:F,splatCountOffset:x,splatCount:i?p:0,maxSplatCount:p,bucketSize:_,bucketCount:y,bucketBlockSize:A,halfBucketBlockSize:T,bucketStorageSizeBytes:S,bucketsStorageSizeBytes:C,splatDataStorageSizeBytes:U,storageSizeBytes:N,compressionScaleRange:v,compressionScaleFactor:T/v,base:g,bucketsBase:g+M,dataBase:g+C,fullBucketCount:w,partiallyFilledBucketCount:E,sphericalHarmonicsDegree:B};h[m]=L,g+=N,u+=s.SectionHeaderSizeBytes,f=u/2,d=u/4,x+=p}return h}static writeSectionHeaderToBuffer(e,t,n,i=0){let r=new Uint16Array(n,i,s.SectionHeaderSizeBytes/2),o=new Uint32Array(n,i,s.SectionHeaderSizeBytes/4),a=new Float32Array(n,i,s.SectionHeaderSizeBytes/4);o[0]=e.splatCount,o[1]=e.maxSplatCount,o[2]=t>=1?e.bucketSize:0,o[3]=t>=1?e.bucketCount:0,a[4]=t>=1?e.bucketBlockSize:0,r[10]=t>=1?s.BucketStorageSizeBytes:0,o[6]=t>=1?e.compressionScaleRange:0,o[7]=e.storageSizeBytes,o[8]=t>=1?e.fullBucketCount:0,o[9]=t>=1?e.partiallyFilledBucketCount:0,r[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){let i=new Uint32Array(t,n,s.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];let n=s.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new I().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=s.parseSectionHeaders(n,this.bufferData,s.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){let n=s.CompressionLevels[e].BytesPerCenter,i=s.CompressionLevels[e].BytesPerScale,r=s.CompressionLevels[e].BytesPerRotation,o=s.CompressionLevels[e].BytesPerColor,a=Js(t),c=s.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*a,l=n+i+r+o+c;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:r,bytesPerColor:o,sphericalHarmonicsComponentsPerSplat:a,sphericalHarmonicsBytesPerSplat:c,bytesPerSplat:l}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){let t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*s.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){let n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){let r=e+i;this.globalSplatIndexToLocalSplatIndexMap[r]=i,this.globalSplatIndexToSectionMap[r]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){s.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){let n=s.HeaderSizeBytes+s.SectionHeaderSizeBytes*e;s.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static writeSplatDataToSectionBuffer=(function(){let e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),r=new ArrayBuffer(256),o=new $e,a=new I,c=new I,{X:l,Y:h,Z:u,SCALE0:f,SCALE1:d,SCALE2:g,ROTATION0:x,ROTATION1:m,ROTATION2:p,ROTATION3:_,FDC0:y,FDC1:A,FDC2:T,OPACITY:S,FRC0:v,FRC9:w}=he.OFFSET,E=(M,C,B)=>{let F=B*2+1;return M=Math.round(M*C)+B,At(M,0,F)};return function(M,C,B,F,U,N,L,X,H=-Bi,W=Bi){let K=Js(U),se=s.CompressionLevels[F].BytesPerCenter,Ee=s.CompressionLevels[F].BytesPerScale,Te=s.CompressionLevels[F].BytesPerRotation,j=s.CompressionLevels[F].BytesPerColor,Z=B,re=Z+se,te=re+Ee,ge=te+Te,Se=ge+j;if(M[x]!==void 0?(o.set(M[x],M[m],M[p],M[_]),o.normalize()):o.set(1,0,0,0),M[f]!==void 0?a.set(M[f]||0,M[d]||0,M[g]||0):a.set(0,0,0),F===0){let Ve=new Float32Array(C,Z,s.CenterComponentCount),Re=new Float32Array(C,te,s.RotationComponentCount),Ye=new Float32Array(C,re,s.ScaleComponentCount);if(Re.set([o.x,o.y,o.z,o.w]),Ye.set([a.x,a.y,a.z]),Ve.set([M[l],M[h],M[u]]),U>0){let O=new Float32Array(C,Se,K);if(U>=1){for(let Xe=0;Xe<9;Xe++)O[Xe]=M[v+Xe]||0;if(U>=2)for(let Xe=0;Xe<15;Xe++)O[Xe+9]=M[w+Xe]||0}}}else{let Ve=new Uint16Array(e,0,s.CenterComponentCount),Re=new Uint16Array(n,0,s.RotationComponentCount),Ye=new Uint16Array(t,0,s.ScaleComponentCount);if(Re.set([Dt(o.x),Dt(o.y),Dt(o.z),Dt(o.w)]),Ye.set([Dt(a.x),Dt(a.y),Dt(a.z)]),c.set(M[l],M[h],M[u]).sub(N),c.x=E(c.x,L,X),c.y=E(c.y,L,X),c.z=E(c.z,L,X),Ve.set([c.x,c.y,c.z]),U>0){let O=F===1?Uint16Array:Uint8Array,Xe=F===1?2:1,Be=new O(r,0,K);if(U>=1){for(let Ae=0;Ae<9;Ae++){let qe=M[v+Ae]||0;Be[Ae]=F===1?Dt(qe):Ir(qe,H,W)}let ze=9*Xe;if(Qs(Be.buffer,0,C,Se,ze),U>=2){for(let Ae=0;Ae<15;Ae++){let qe=M[w+Ae]||0;Be[Ae+9]=F===1?Dt(qe):Ir(qe,H,W)}Qs(Be.buffer,ze,C,Se+ze,15*Xe)}}}Qs(Ve.buffer,0,C,Z,6),Qs(Ye.buffer,0,C,re,6),Qs(Re.buffer,0,C,te,8)}let Le=new Uint8ClampedArray(i,0,4);Le.set([M[y]||0,M[A]||0,M[T]||0]),Le[3]=M[S]||0,Qs(Le.buffer,0,C,ge,4)}})();static generateFromUncompressedSplatArrays(e,t,n,i,r,o,a=[]){let c=0;for(let T=0;T<e.length;T++){let S=e[T];c=Math.max(S.sphericalHarmonicsDegree,c)}let l,h;for(let T=0;T<e.length;T++){let S=e[T];for(let v=0;v<S.splats.length;v++){let w=S.splats[v];for(let E=he.OFFSET.FRC0;E<he.OFFSET.FRC23&&E<w.length;E++)(!l||w[E]<l)&&(l=w[E]),(!h||w[E]>h)&&(h=w[E])}}l=l||-Bi,h=h||Bi;let{bytesPerSplat:u}=s.calculateComponentStorage(n,c),f=s.CompressionLevels[n].ScaleRange,d=[],g=[],x=0;for(let T=0;T<e.length;T++){let S=e[T],v=new he(c);for(let Z=0;Z<S.splatCount;Z++){let re=S.splats[Z];(re[he.OFFSET.OPACITY]||0)>=t&&v.addSplat(re)}let w=a[T]||{},E=(w.blockSizeFactor||1)*(r||s.BucketBlockSize),M=Math.ceil((w.bucketSizeFactor||1)*(o||s.BucketSize)),C=s.computeBucketsForUncompressedSplatArray(v,E,M),B=C.fullBuckets.length,F=C.partiallyFullBuckets.map(Z=>Z.splats.length),U=F.length,N=[...C.fullBuckets,...C.partiallyFullBuckets],L=v.splats.length*u,X=U*4,H=n>=1?N.length*s.BucketStorageSizeBytes+X:0,W=L+H,K=new ArrayBuffer(W),se=f/(E*.5),Ee=new I,Te=0;for(let Z=0;Z<N.length;Z++){let re=N[Z];Ee.fromArray(re.center);for(let te=0;te<re.splats.length;te++){let ge=re.splats[te],Se=v.splats[ge],Le=H+Te*u;s.writeSplatDataToSectionBuffer(Se,K,Le,n,c,Ee,se,f,l,h),Te++}}if(x+=Te,n>=1){let Z=new Uint32Array(K,0,F.length*4);for(let te=0;te<F.length;te++)Z[te]=F[te];let re=new Float32Array(K,X,N.length*s.BucketStorageSizeFloats);for(let te=0;te<N.length;te++){let ge=N[te],Se=te*3;re[Se]=ge.center[0],re[Se+1]=ge.center[1],re[Se+2]=ge.center[2]}}d.push(K);let j=new ArrayBuffer(s.SectionHeaderSizeBytes);s.writeSectionHeaderToBuffer({maxSplatCount:Te,splatCount:Te,bucketSize:M,bucketCount:N.length,bucketBlockSize:E,compressionScaleRange:f,storageSizeBytes:W,fullBucketCount:B,partiallyFilledBucketCount:U,sphericalHarmonicsDegree:c},n,j,0),g.push(j)}let m=0;for(let T of d)m+=T.byteLength;let p=s.HeaderSizeBytes+s.SectionHeaderSizeBytes*d.length+m,_=new ArrayBuffer(p);s.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:d.length,sectionCount:d.length,maxSplatCount:x,splatCount:x,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:l,maxSphericalHarmonicsCoeff:h},_);let y=s.HeaderSizeBytes;for(let T of g)new Uint8Array(_,y,s.SectionHeaderSizeBytes).set(new Uint8Array(T)),y+=s.SectionHeaderSizeBytes;for(let T of d)new Uint8Array(_,y,T.byteLength).set(new Uint8Array(T)),y+=T.byteLength;return new s(_)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount,r=t/2,o=new I,a=new I;for(let x=0;x<i;x++){let m=e.splats[x],p=[m[he.OFFSET.X],m[he.OFFSET.Y],m[he.OFFSET.Z]];(x===0||p[0]<o.x)&&(o.x=p[0]),(x===0||p[0]>a.x)&&(a.x=p[0]),(x===0||p[1]<o.y)&&(o.y=p[1]),(x===0||p[1]>a.y)&&(a.y=p[1]),(x===0||p[2]<o.z)&&(o.z=p[2]),(x===0||p[2]>a.z)&&(a.z=p[2])}let c=new I().copy(a).sub(o),l=Math.ceil(c.y/t),h=Math.ceil(c.z/t),u=new I,f=[],d={};for(let x=0;x<i;x++){let m=e.splats[x],p=[m[he.OFFSET.X],m[he.OFFSET.Y],m[he.OFFSET.Z]],_=Math.floor((p[0]-o.x)/t),y=Math.floor((p[1]-o.y)/t),A=Math.floor((p[2]-o.z)/t);u.x=_*t+o.x+r,u.y=y*t+o.y+r,u.z=A*t+o.z+r;let T=_*(l*h)+y*h+A,S=d[T];S||(d[T]=S={splats:[],center:u.toArray()}),S.splats.push(x),S.splats.length>=n&&(f.push(S),d[T]=null)}let g=[];for(let x in d)if(d.hasOwnProperty(x)){let m=d[x];m&&g.push(m)}return{fullBuckets:f,partiallyFullBuckets:g}}static preallocateUncompressed(e,t){let n=s.CompressionLevels[0].SphericalHarmonicsDegrees[t],i=s.HeaderSizeBytes+s.SectionHeaderSizeBytes,r=i+n.BytesPerSplat*e,o=new ArrayBuffer(r);return s.writeHeaderToBuffer({versionMajor:s.CurrentMajorVersion,versionMinor:s.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new I},o),s.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,o,s.HeaderSizeBytes),{splatBuffer:new s(o,!0),splatBufferDataOffsetBytes:i}}},qd=new Uint8Array([112,108,121,10]),Yd=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),Zl="end_header",Jl=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),Nn=(s,e)=>{let t=(1<<e)-1;return(s&t)/t},Qd=(s,e)=>{s.x=Nn(e>>>21,11),s.y=Nn(e>>>11,10),s.z=Nn(e,11)},bA=(s,e)=>{s.x=Nn(e>>>24,8),s.y=Nn(e>>>16,8),s.z=Nn(e>>>8,8),s.w=Nn(e,8)},wA=(s,e)=>{let t=1/(Math.sqrt(2)*.5),n=(Nn(e>>>20,10)-.5)*t,i=(Nn(e>>>10,10)-.5)*t,r=(Nn(e,10)-.5)*t,o=Math.sqrt(1-(n*n+i*i+r*r));switch(e>>>30){case 0:s.set(o,n,i,r);break;case 1:s.set(n,o,i,r);break;case 2:s.set(n,i,o,r);break;case 3:s.set(n,i,r,o);break}},ri=(s,e,t)=>s*(1-t)+e*t,vt=(s,e)=>s.properties.find(t=>t.name===e&&t.storage)?.storage,ai=class s{static decodeHeaderText(e){let t,n,i,r,o=e.split(`
`).filter(u=>!u.startsWith("comment ")),a=0,c=!1;for(let u=1;u<o.length;++u){let f=o[u].split(" ");switch(f[0]){case"format":if(f[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:f[1],count:parseInt(f[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?i=t:t.name==="sh"&&(r=t);break;case"property":{if(!Jl.has(f[1]))throw new Error(`Unrecognized property data type '${f[1]}' in ply header`);let d=Jl.get(f[1]),g=d.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(a+=d.BYTES_PER_ELEMENT),t.properties.push({type:f[1],name:f[2],storage:null,byteSize:d.BYTES_PER_ELEMENT,storageSizeByes:g}),t.storageSizeBytes+=g;break}case Zl:c=!0;break;default:throw new Error(`Unrecognized header value '${f[0]}' in ply header`)}if(c)break}let l=0,h=0;return r&&(h=r.properties.length,r.properties.length>=45?l=3:r.properties.length>=24?l=2:r.properties.length>=9&&(l=1)),{chunkElement:n,vertexElement:i,shElement:r,bytesPerSplat:a,headerSizeBytes:e.indexOf(Zl)+Zl.length+1,sphericalHarmonicsDegree:l,sphericalHarmonicsPerSplat:h}}static decodeHeader(e){let t=(d,g)=>{let x=d.length-g.length,m,p;for(m=0;m<=x;++m){for(p=0;p<g.length&&d[m+p]===g[p];++p);if(p===g.length)return m}return-1},n=(d,g)=>{if(d.length<g.length)return!1;for(let x=0;x<g.length;++x)if(d[x]!==g[x])return!1;return!0},i=new Uint8Array(e),r;if(i.length>=qd.length&&!n(i,qd))throw new Error("Invalid PLY header");if(r=t(i,Yd),r===-1)throw new Error("End of PLY header not found");let o=new TextDecoder("ascii").decode(i.slice(0,r)),{chunkElement:a,vertexElement:c,shElement:l,sphericalHarmonicsDegree:h,sphericalHarmonicsPerSplat:u,bytesPerSplat:f}=s.decodeHeaderText(o);return{headerSizeBytes:r+Yd.length,bytesPerSplat:f,chunkElement:a,vertexElement:c,shElement:l,sphericalHarmonicsDegree:h,sphericalHarmonicsPerSplat:u}}static readElementData(e,t,n,i,r,o=null){let a=t instanceof DataView?t:new DataView(t);i=i||0,r=r||e.count-1;for(let c=i;c<=r;++c)for(let l=0;l<e.properties.length;++l){let h=e.properties[l],u=Jl.get(h.type),f=u.BYTES_PER_ELEMENT*e.count;if((!h.storage||h.storage.byteLength<f)&&(!o||o(h.name))&&(h.storage=new u(e.count)),h.storage)switch(h.type){case"char":h.storage[c]=a.getInt8(n);break;case"uchar":h.storage[c]=a.getUint8(n);break;case"short":h.storage[c]=a.getInt16(n,!0);break;case"ushort":h.storage[c]=a.getUint16(n,!0);break;case"int":h.storage[c]=a.getInt32(n,!0);break;case"uint":h.storage[c]=a.getUint32(n,!0);break;case"float":h.storage[c]=a.getFloat32(n,!0);break;case"double":h.storage[c]=a.getFloat64(n,!0);break}n+=h.byteSize}return n}static readPly(e,t=null){let n=s.decodeHeader(e),i=s.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return i=s.readElementData(n.vertexElement,e,i,null,null,t),s.readElementData(n.shElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){let i={};if(t){let r=vt(e,"min_r"),o=vt(e,"min_g"),a=vt(e,"min_b"),c=vt(e,"max_r"),l=vt(e,"max_g"),h=vt(e,"max_b"),u=vt(e,"min_x"),f=vt(e,"min_y"),d=vt(e,"min_z"),g=vt(e,"max_x"),x=vt(e,"max_y"),m=vt(e,"max_z"),p=vt(e,"min_scale_x"),_=vt(e,"min_scale_y"),y=vt(e,"min_scale_z"),A=vt(e,"max_scale_x"),T=vt(e,"max_scale_y"),S=vt(e,"max_scale_z"),v=vt(t,"packed_position"),w=vt(t,"packed_rotation"),E=vt(t,"packed_scale"),M=vt(t,"packed_color");i.colorExtremes={minR:r,maxR:c,minG:o,maxG:l,minB:a,maxB:h},i.positionExtremes={minX:u,maxX:g,minY:f,maxY:x,minZ:d,maxZ:m},i.scaleExtremes={minScaleX:p,maxScaleX:A,minScaleY:_,maxScaleY:T,minScaleZ:y,maxScaleZ:S},i.position=v,i.rotation=w,i.scale=E,i.color=M}if(n){let r={};for(let o=0;o<45;o++){let a=`f_rest_${o}`,c=vt(n,a);if(c)r[a]=c;else break}i.sh=r}return i}static decompressBaseSplat=(function(){let e=new I,t=new $e,n=new I,i=new Je,r=he.OFFSET;return function(o,a,c,l,h,u,f,d,g,x){x=x||he.createSplat();let m=Math.floor((a+o)/256);return Qd(e,c[o]),wA(t,f[o]),Qd(n,h[o]),bA(i,g[o]),x[r.X]=ri(l.minX[m],l.maxX[m],e.x),x[r.Y]=ri(l.minY[m],l.maxY[m],e.y),x[r.Z]=ri(l.minZ[m],l.maxZ[m],e.z),x[r.ROTATION0]=t.x,x[r.ROTATION1]=t.y,x[r.ROTATION2]=t.z,x[r.ROTATION3]=t.w,x[r.SCALE0]=Math.exp(ri(u.minScaleX[m],u.maxScaleX[m],n.x)),x[r.SCALE1]=Math.exp(ri(u.minScaleY[m],u.maxScaleY[m],n.y)),x[r.SCALE2]=Math.exp(ri(u.minScaleZ[m],u.maxScaleZ[m],n.z)),d.minR&&d.maxR?x[r.FDC0]=At(Math.round(ri(d.minR[m],d.maxR[m],i.x)*255),0,255):x[r.FDC0]=At(Math.floor(i.x*255),0,255),d.minG&&d.maxG?x[r.FDC1]=At(Math.round(ri(d.minG[m],d.maxG[m],i.y)*255),0,255):x[r.FDC1]=At(Math.floor(i.y*255),0,255),d.minB&&d.maxB?x[r.FDC2]=At(Math.round(ri(d.minB[m],d.maxB[m],i.z)*255),0,255):x[r.FDC2]=At(Math.floor(i.z*255),0,255),x[r.OPACITY]=At(Math.floor(i.w*255),0,255),x}})();static decompressSphericalHarmonics=(function(){let e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,i,r,o,a){a=a||he.createSplat();let c=e[r],l=e[o];for(let h=0;h<3;++h)for(let u=0;u<15;++u){let f=t[h*15+u];u<c&&u<l&&(a[he.OFFSET.FRC0+f]=i[h*l+u][n]*(8/255)-4)}return a}})();static parseToUncompressedSplatBufferSection(e,t,n,i,r,o,a,c,l=null){s.readElementData(t,o,0,n,i,l);let h=Me.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:u,scaleExtremes:f,colorExtremes:d,position:g,rotation:x,scale:m,color:p}=s.getElementStorageArrays(e,t),_=he.createSplat();for(let y=n;y<=i;++y){s.decompressBaseSplat(y,r,g,u,m,f,x,d,p,_);let A=y*h+c;Me.writeSplatDataToSectionBuffer(_,a,A,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,r,o,a,c=null){s.readElementData(t,o,0,n,i,c);let{positionExtremes:l,scaleExtremes:h,colorExtremes:u,position:f,rotation:d,scale:g,color:x}=s.getElementStorageArrays(e,t);for(let m=n;m<=i;++m){let p=he.createSplat();s.decompressBaseSplat(m,r,f,l,g,h,d,u,x,p),a.addSplat(p)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,i,r,o,a,c,l,h=null){s.readElementData(t,r,o,n,i,h);let{sh:u}=s.getElementStorageArrays(e,void 0,t),f=Object.values(u);for(let d=n;d<=i;++d)s.decompressSphericalHarmonics(d,f,a,c,l.splats[d])}static parseToUncompressedSplatArray(e,t){let{chunkElement:n,vertexElement:i,shElement:r,sphericalHarmonicsDegree:o}=s.readPly(e);t=Math.min(t,o);let a=new he(t),{positionExtremes:c,scaleExtremes:l,colorExtremes:h,position:u,rotation:f,scale:d,color:g}=s.getElementStorageArrays(n,i),x;if(t>0){let{sh:m}=s.getElementStorageArrays(n,void 0,r);x=Object.values(m)}for(let m=0;m<i.count;++m){a.addDefaultSplat();let p=a.getSplat(a.splatCount-1);s.decompressBaseSplat(m,0,u,c,d,l,f,h,g,p),t>0&&s.decompressSphericalHarmonics(m,x,t,o,p)}return a}static parseToUncompressedSplatBuffer(e,t){let{chunkElement:n,vertexElement:i,shElement:r,sphericalHarmonicsDegree:o}=s.readPly(e);t=Math.min(t,o);let{splatBuffer:a,splatBufferDataOffsetBytes:c}=Me.preallocateUncompressed(i.count,t),{positionExtremes:l,scaleExtremes:h,colorExtremes:u,position:f,rotation:d,scale:g,color:x}=s.getElementStorageArrays(n,i),m;if(t>0){let{sh:y}=s.getElementStorageArrays(n,void 0,r);m=Object.values(y)}let p=Me.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,_=he.createSplat(t);for(let y=0;y<i.count;++y){s.decompressBaseSplat(y,0,f,l,g,h,d,u,x,_),t>0&&s.decompressSphericalHarmonics(y,m,t,o,_);let A=y*p+c;Me.writeSplatDataToSectionBuffer(_,a.bufferData,A,0,t)}return a}},Qt={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[vf,Dh,Bh,Fh,Lh,Uh,Oh]=[0,1,2,3,4,5,6],Kd={double:vf,int:Dh,uint:Bh,float:Fh,short:Lh,ushort:Uh,uchar:Oh},CA={[vf]:8,[Dh]:4,[Bh]:4,[Fh]:4,[Lh]:2,[Uh]:2,[Oh]:1},Tt=class s{static HeaderEndToken="end_header";static decodeSectionHeader(e,t,n=0){let i=[],r=!1,o=-1,a=0,c=!1,l=null,h=[],u=[],f=[],d=[],g={};for(let _=n;_<e.length;_++){let y=e[_].trim();if(y.startsWith("element"))if(r){o--;break}else{r=!0,n=_,o=_;let A=y.split(" "),T=0;for(let S of A){let v=S.trim();v.length>0&&(T++,T===2?l=v:T===3&&(a=parseInt(v)))}}else if(y.startsWith("property")){let A=y.match(/(\w+)\s+(\w+)\s+(\w+)/);if(A){let T=A[2],S=A[3];f.push(S);let v=t[S];g[S]=T;let w=Kd[T];v!==void 0&&(d.push(S),h.push(v),u[v]=w)}}if(y===s.HeaderEndToken){c=!0;break}r&&(i.push(y),o++)}let x=[],m=0;for(let _ of f){let y=g[_];if(g.hasOwnProperty(_)){let A=t[_];A!==void 0&&(x[A]=m)}m+=CA[Kd[y]]}let p=s.decodeSphericalHarmonicsFromSectionHeader(f,t);return{headerLines:i,headerStartLine:n,headerEndLine:o,fieldTypes:u,fieldIds:h,fieldOffsets:x,bytesPerVertex:m,vertexCount:a,dataSizeBytes:m*a,endOfHeader:c,sectionName:l,sphericalHarmonicsDegree:p.degree,sphericalHarmonicsCoefficientsPerChannel:p.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:p.degree1Fields,sphericalHarmonicsDegree2Fields:p.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let c of e)c.startsWith("f_rest")&&n++;i=n/3;let r=0;i>=3&&(r=1),i>=8&&(r=2);let o=[],a=[];for(let c=0;c<3;c++){if(r>=1)for(let l=0;l<3;l++)o.push(t["f_rest_"+(l+i*c)]);if(r>=2)for(let l=0;l<5;l++)a.push(t["f_rest_"+(l+i*c+3)])}return{degree:r,coefficientsPerChannel:i,degree1Fields:o,degree2Fields:a}}static getHeaderSectionNames(e){let t=[];for(let n of e)if(n.startsWith("element")){let i=n.split(" "),r=0;for(let o of i){let a=o.trim();a.length>0&&(r++,r===2&&t.push(a))}}return t}static checkTextForEndHeader(e){return!!e.includes(s.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){let r=new Uint8Array(e,Math.max(0,t-n),n),o=i.decode(r);return s.checkTextForEndHeader(o)}static extractHeaderFromBufferToText(e){let t=new TextDecoder,n=0,i="",r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");let o=new Uint8Array(e,n,r);if(i+=t.decode(o),n+=r,s.checkBufferForEndHeader(e,n,r*2,t))break}return i}static readHeaderFromBuffer(e){let t=new TextDecoder,n=0,i="",r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");let o=new Uint8Array(e,n,r);if(i+=t.decode(o),n+=r,s.checkBufferForEndHeader(e,n,r*2,t))break}return i}static convertHeaderTextToLines(e){let t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){let r=t[i].trim();if(n.push(r),r===s.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){let t=s.convertHeaderTextToLines(e),n=Qt.INRIAV1;for(let i=0;i<t.length;i++){let r=t[i].trim();if(r.startsWith("element chunk")||r.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Qt.PlayCanvasCompressed;else if(r.startsWith("element codebook_centers"))n=Qt.INRIAV2;else if(r===s.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){let t=s.extractHeaderFromBufferToText(e);return s.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,r,o,a=!0){let c=n*t.bytesPerVertex+i,l=t.fieldOffsets,h=t.fieldTypes;for(let u of r){let f=h[u];f===Fh?o[u]=e.getFloat32(c+l[u],!0):f===Lh?o[u]=e.getInt16(c+l[u],!0):f===Uh?o[u]=e.getUint16(c+l[u],!0):f===Dh?o[u]=e.getInt32(c+l[u],!0):f===Bh?o[u]=e.getUint32(c+l[u],!0):f===Oh&&(a?o[u]=e.getUint8(c+l[u])/255:o[u]=e.getUint8(c+l[u]))}}},Mf=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],RA=Mf.map((s,e)=>e),[jd,IA,PA,DA,BA,FA,LA,UA,OA,NA,Zd,HA,zA,Jd,$d,kA,VA,GA]=RA,ci=class s{static decodeHeaderLines(e){let t=0;e.forEach(h=>{h.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let r=Array.from(Array(Math.max(n-1,0))).map((h,u)=>`f_rest_${u+1}`),o=[...Mf,...r],a=o.map((h,u)=>u),c=a.reduce((h,u)=>(h[o[u]]=u,h),{}),l=Tt.decodeSectionHeader(e,c,0);return l.splatCount=l.vertexCount,l.bytesPerSplat=l.bytesPerVertex,l.fieldsToReadIndexes=a,l}static decodeHeaderText(e){let t=Tt.convertHeaderTextToLines(e),n=s.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(Tt.HeaderEndToken)+Tt.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){let t=Tt.readHeaderFromBuffer(e);return s.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,i,r,o,a,c=0){c=Math.min(c,e.sphericalHarmonicsDegree);let l=Me.CompressionLevels[0].SphericalHarmonicsDegrees[c].BytesPerSplat;for(let h=t;h<=n;h++){let u=s.parseToUncompressedSplat(i,h,e,r,c),f=h*l+a;Me.writeSplatDataToSectionBuffer(u,o,f,0,c)}}static parseToUncompressedSplatArraySection(e,t,n,i,r,o,a=0){a=Math.min(a,e.sphericalHarmonicsDegree);for(let c=t;c<=n;c++){let l=s.parseToUncompressedSplat(i,c,e,r,a);o.addSplat(l)}}static decodeSectionSplatData(e,t,n,i,r=!0){if(i=Math.min(i,n.sphericalHarmonicsDegree),r){let o=new he(i);for(let a=0;a<t;a++){let c=s.parseToUncompressedSplat(e,a,n,0,i);o.addSplat(c)}return o}else{let{splatBuffer:o,splatBufferDataOffsetBytes:a}=Me.preallocateUncompressed(t,i);return s.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,o.bufferData,a,i),o}}static parseToUncompressedSplat=(function(){let e=[],t=new $e,n=he.OFFSET.X,i=he.OFFSET.Y,r=he.OFFSET.Z,o=he.OFFSET.SCALE0,a=he.OFFSET.SCALE1,c=he.OFFSET.SCALE2,l=he.OFFSET.ROTATION0,h=he.OFFSET.ROTATION1,u=he.OFFSET.ROTATION2,f=he.OFFSET.ROTATION3,d=he.OFFSET.FDC0,g=he.OFFSET.FDC1,x=he.OFFSET.FDC2,m=he.OFFSET.OPACITY,p=[];for(let _=0;_<45;_++)p[_]=he.OFFSET.FRC0+_;return function(_,y,A,T=0,S=0){S=Math.min(S,A.sphericalHarmonicsDegree),s.readSplat(_,A,y,T,e);let v=he.createSplat(S);if(e[jd]!==void 0?(v[o]=Math.exp(e[jd]),v[a]=Math.exp(e[IA]),v[c]=Math.exp(e[PA])):(v[o]=.01,v[a]=.01,v[c]=.01),e[Zd]!==void 0){let w=.28209479177387814;v[d]=(.5+w*e[Zd])*255,v[g]=(.5+w*e[HA])*255,v[x]=(.5+w*e[zA])*255}else e[$d]!==void 0?(v[d]=e[$d]*255,v[g]=e[kA]*255,v[x]=e[VA]*255):(v[d]=0,v[g]=0,v[x]=0);if(e[Jd]!==void 0&&(v[m]=1/(1+Math.exp(-e[Jd]))*255),v[d]=At(Math.floor(v[d]),0,255),v[g]=At(Math.floor(v[g]),0,255),v[x]=At(Math.floor(v[x]),0,255),v[m]=At(Math.floor(v[m]),0,255),S>=1&&e[GA]!==void 0){for(let w=0;w<9;w++)v[p[w]]=e[A.sphericalHarmonicsDegree1Fields[w]];if(S>=2)for(let w=0;w<15;w++)v[p[9+w]]=e[A.sphericalHarmonicsDegree2Fields[w]]}return t.set(e[DA],e[BA],e[FA],e[LA]),t.normalize(),v[l]=t.x,v[h]=t.y,v[u]=t.z,v[f]=t.w,v[n]=e[UA],v[i]=e[OA],v[r]=e[NA],v}})();static readSplat(e,t,n,i,r){return Tt.readVertex(e,t,n,i,t.fieldsToReadIndexes,r,!0)}static parseToUncompressedSplatArray(e,t=0){let{header:n,splatCount:i,splatData:r}=ef(e);return s.decodeSectionSplatData(r,i,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){let{header:n,splatCount:i,splatData:r}=ef(e);return s.decodeSectionSplatData(r,i,n,t,!1)}};function ef(s){let e=ci.decodeHeaderFromBuffer(s),t=e.splatCount,n=ci.findSplatData(s,e);return{header:e,splatCount:t,splatData:n}}var Ef=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],sa=Ef.map((s,e)=>e),[ra,WA,XA,tf,oa,qA,$l]=[0,1,4,16,17,18,19],Tf=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],sh=Tf.map((s,e)=>e),[nf,YA,QA,KA,jA,ZA,JA,$A,e_,t_,rh,bf,wf,sf]=sh,rf=rh,n_=bf,i_=wf,aa=s=>{let e=(31744&s)>>10,t=1023&s;return(s>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},oh=class s{static decodeSectionHeadersFromHeaderLines(e){let t=sh.reduce((h,u)=>(h[Tf[u]]=u,h),{}),n=sa.reduce((h,u)=>(h[Ef[u]]=u,h),{}),i=Tt.getHeaderSectionNames(e),r;for(let h=0;h<i.length;h++)i[h]==="codebook_centers"&&(r=h);let o=0,a=!1,c=[],l=0;for(;!a;){let h;l===r?h=Tt.decodeSectionHeader(e,n,o):h=Tt.decodeSectionHeader(e,t,o),a=h.endOfHeader,o=h.headerEndLine+1,a||(h.splatCount=h.vertexCount,h.bytesPerSplat=h.bytesPerVertex),c.push(h),l++}return c}static decodeSectionHeadersFromHeaderText(e){let t=Tt.convertHeaderTextToLines(e);return s.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){let t=e.indexOf(Tt.HeaderEndToken)+Tt.HeaderEndToken.length+1,n=s.decodeSectionHeadersFromHeaderText(e),i=s.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}static decodeHeaderFromBuffer(e){let t=Tt.readHeaderFromBuffer(e);return s.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let i=t.headerSizeBytes;for(let r=0;r<n&&r<t.sectionHeaders.length;r++){let o=t.sectionHeaders[r];i+=o.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){let n=[],i=[];for(let r=0;r<t.vertexCount;r++){Tt.readVertex(e,t,r,0,sa,n);for(let o of sa){let a=sa[o],c=i[a];c||(i[a]=c=[]),c.push(n[o])}}for(let r=0;r<i.length;r++){let o=i[r],a=.28209479177387814;for(let c=0;c<o.length;c++){let l=aa(o[c]);r===tf?o[c]=Math.round(1/(1+Math.exp(-l))*255):r===ra?o[c]=Math.round((.5+a*l)*255):r===oa?o[c]=Math.exp(l):o[c]=l}}return i}static decodeSectionSplatData(e,t,n,i,r){r=Math.min(r,n.sphericalHarmonicsDegree);let o=new he(r);for(let a=0;a<t;a++){let c=s.parseToUncompressedSplat(e,a,n,i,0,r);o.addSplat(c)}return o}static parseToUncompressedSplat=(function(){let e=[],t=new $e,n=he.OFFSET.X,i=he.OFFSET.Y,r=he.OFFSET.Z,o=he.OFFSET.SCALE0,a=he.OFFSET.SCALE1,c=he.OFFSET.SCALE2,l=he.OFFSET.ROTATION0,h=he.OFFSET.ROTATION1,u=he.OFFSET.ROTATION2,f=he.OFFSET.ROTATION3,d=he.OFFSET.FDC0,g=he.OFFSET.FDC1,x=he.OFFSET.FDC2,m=he.OFFSET.OPACITY,p=[];for(let _=0;_<45;_++)p[_]=he.OFFSET.FRC0+_;return function(_,y,A,T,S=0,v=0){v=Math.min(v,A.sphericalHarmonicsDegree),s.readSplat(_,A,y,S,e);let w=he.createSplat(v);if(e[nf]!==void 0?(w[o]=T[oa][e[nf]],w[a]=T[oa][e[YA]],w[c]=T[oa][e[QA]]):(w[o]=.01,w[a]=.01,w[c]=.01),e[rh]!==void 0?(w[d]=T[ra][e[rh]],w[g]=T[ra][e[bf]],w[x]=T[ra][e[wf]]):e[rf]!==void 0?(w[d]=e[rf]*255,w[g]=e[n_]*255,w[x]=e[i_]*255):(w[d]=0,w[g]=0,w[x]=0),e[sf]!==void 0&&(w[m]=T[tf][e[sf]]),w[d]=At(Math.floor(w[d]),0,255),w[g]=At(Math.floor(w[g]),0,255),w[x]=At(Math.floor(w[x]),0,255),w[m]=At(Math.floor(w[m]),0,255),v>=1&&A.sphericalHarmonicsDegree>=1){for(let F=0;F<9;F++){let U=T[WA+F%3];w[p[F]]=U[e[A.sphericalHarmonicsDegree1Fields[F]]]}if(v>=2&&A.sphericalHarmonicsDegree>=2)for(let F=0;F<15;F++){let U=T[XA+F%5];w[p[9+F]]=U[e[A.sphericalHarmonicsDegree2Fields[F]]]}}let E=T[qA][e[KA]],M=T[$l][e[jA]],C=T[$l][e[ZA]],B=T[$l][e[JA]];return t.set(E,M,C,B),t.normalize(),w[l]=t.x,w[h]=t.y,w[u]=t.z,w[f]=t.w,w[n]=aa(e[$A]),w[i]=aa(e[e_]),w[r]=aa(e[t_]),w}})();static readSplat(e,t,n,i,r){return Tt.readVertex(e,t,n,i,sh,r,!1)}static parseToUncompressedSplatArray(e,t=0){let n=[],i=s.decodeHeaderFromBuffer(e,t),r;for(let a=0;a<i.sectionHeaders.length;a++){let c=i.sectionHeaders[a];if(c.sectionName==="codebook_centers"){let l=s.findVertexData(e,i,a);r=s.decodeCodeBook(l,c)}}for(let a=0;a<i.sectionHeaders.length;a++){let c=i.sectionHeaders[a];if(c.sectionName!=="codebook_centers"){let l=c.vertexCount,h=s.findVertexData(e,i,a),u=s.decodeSectionSplatData(h,l,c,r,t);n.push(u)}}let o=new he(t);for(let a of n)for(let c of a.splats)o.addSplat(c);return o}},ua=class{static parseToUncompressedSplatArray(e,t=0){let n=Tt.determineHeaderFormatFromPlyBuffer(e);if(n===Qt.PlayCanvasCompressed)return ai.parseToUncompressedSplatArray(e,t);if(n===Qt.INRIAV1)return ci.parseToUncompressedSplatArray(e,t);if(n===Qt.INRIAV2)return oh.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){let n=Tt.determineHeaderFormatFromPlyBuffer(e);if(n===Qt.PlayCanvasCompressed)return ai.parseToUncompressedSplatBuffer(e,t);if(n===Qt.INRIAV1)return ci.parseToUncompressedSplatBuffer(e,t);if(n===Qt.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}},ah=class s{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){let o=this.partitionGenerator(e);t=o.groupingParameters,n=o.sectionCount,i=o.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;let r=[];for(let o=0;o<n;o++){let a=new he(e.sphericalHarmonicsDegree),c=i[o];for(let l=0;l<e.splatCount;l++)c(l)&&a.addSplat(e.splats[l]);r.push(a)}return{splatArrays:r,parameters:t}}static getStandardPartitioner(e=0,t=new I,n=Me.BucketBlockSize,i=Me.BucketSize){let r=o=>{let a=he.OFFSET.X,c=he.OFFSET.Y,l=he.OFFSET.Z;e<=0&&(e=o.splatCount);let h=new I,u=.5,f=p=>{p.x=Math.floor(p.x/u)*u,p.y=Math.floor(p.y/u)*u,p.z=Math.floor(p.z/u)*u};o.splats.forEach(p=>{h.set(p[a],p[c],p[l]).sub(t),f(h),p.centerDist=h.lengthSq()}),o.splats.sort((p,_)=>{let y=p.centerDist,A=_.centerDist;return y>A?1:-1});let d=[],g=[];e=Math.min(o.splatCount,e);let x=Math.ceil(o.splatCount/e),m=0;for(let p=0;p<x;p++){let _=m;d.push(y=>y>=_&&y<_+e),g.push({blocksSize:n,bucketSize:i}),m+=e}return{sectionCount:d.length,sectionFilters:d,groupingParameters:g}};return new s(void 0,void 0,void 0,r)}},Fr=class s{constructor(e,t,n,i,r,o,a){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=r?new I().copy(r):void 0,this.blockSize=o,this.bucketSize=a}generateFromUncompressedSplatArray(e){let t=this.splatPartitioner.partitionUncompressedSplatArray(e);return Me.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new I,r=Me.BucketBlockSize,o=Me.BucketSize){let a=ah.getStandardPartitioner(n,i,r,o);return new s(a,e,t,n,i,r,o)}},bt={Downloading:0,Processing:1,Done:2},er=class extends Error{constructor(e){super(e)}},xt={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function of(s,e){let t=0;for(let i of s)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of s)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function af(s,e,t,n,i,r,o,a){return e?Fr.getStandardGenerator(t,n,i,r,o,a).generateFromUncompressedSplatArray(s):Me.generateFromUncompressedSplatArrays([s],t,0,new I)}var ch=class s{static loadFromURL(e,t,n,i,r,o,a=!0,c=0,l,h,u,f,d){let g;!n&&!a?g=xt.DownloadBeforeProcessing:a?g=xt.ProgressiveToSplatArray:g=xt.ProgressiveToSplatBuffer;let x=nt.ProgressiveLoadSectionSize,m=Me.HeaderSizeBytes+Me.SectionHeaderSizeBytes,p=1,_,y,A,T,S,v=0,w=0,E=0,M=!1,C=!1,B=!1,F=Ch(),U=0,N=0,L=0,X=0,H="",W=null,K=[],se,Ee=new TextDecoder,Te=(j,Z,re)=>{let te=j>=100;if(re&&(K.push({data:re,sizeBytes:re.byteLength,startBytes:L,endBytes:L+re.byteLength}),L+=re.byteLength),g===xt.DownloadBeforeProcessing)te&&F.resolve(K);else{if(M){if(_===Qt.PlayCanvasCompressed&&!C){let ge=W.headerSizeBytes+W.chunkElement.storageSizeBytes;S=of(K,S),S.byteLength>=ge&&(ai.readElementData(W.chunkElement,S,W.headerSizeBytes),U=ge,N=ge,C=!0)}}else if(H+=Ee.decode(re),Tt.checkTextForEndHeader(H)){if(_=Tt.determineHeaderFormatFromHeaderText(H),_===Qt.INRIAV1)W=ci.decodeHeaderText(H),c=Math.min(c,W.sphericalHarmonicsDegree),v=W.splatCount,C=!0,X=W.headerSizeBytes+W.bytesPerSplat*v;else if(_===Qt.PlayCanvasCompressed){if(W=ai.decodeHeaderText(H),c=Math.min(c,W.sphericalHarmonicsDegree),g===xt.ProgressiveToSplatBuffer&&c>0)throw new er("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");v=W.vertexElement.count,X=W.headerSizeBytes+W.bytesPerSplat*v+W.chunkElement.storageSizeBytes}else{if(g===xt.ProgressiveToSplatBuffer)throw new er("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");g=xt.DownloadBeforeProcessing;return}if(g===xt.ProgressiveToSplatBuffer){let ge=Me.CompressionLevels[0].SphericalHarmonicsDegrees[c],Se=m+ge.BytesPerSplat*v;A=new ArrayBuffer(Se),Me.writeHeaderToBuffer({versionMajor:Me.CurrentMajorVersion,versionMinor:Me.CurrentMinorVersion,maxSectionCount:p,sectionCount:p,maxSplatCount:v,splatCount:0,compressionLevel:0,sceneCenter:new I},A)}else se=new he(c);U=W.headerSizeBytes,N=W.headerSizeBytes,M=!0}if(M&&C&&K.length>0&&(y=of(K,y),L-U>x||L>=X&&!B||te)){let Se=B?W.sphericalHarmonicsPerSplat:W.bytesPerSplat,Ve=(B?L:Math.min(X,L))-N,Re=Math.floor(Ve/Se),Ye=Re*Se,O=L-N-Ye,Xe=N-K[0].startBytes,Be=new DataView(y,Xe,Ye);if(B)_===Qt.PlayCanvasCompressed&&g===xt.ProgressiveToSplatArray&&(ai.parseSphericalHarmonicsToUncompressedSplatArraySection(W.chunkElement,W.shElement,E,E+Re-1,Be,0,c,W.sphericalHarmonicsDegree,se),E+=Re);else{if(g===xt.ProgressiveToSplatBuffer){let ze=Me.CompressionLevels[0].SphericalHarmonicsDegrees[c],Ae=w*ze.BytesPerSplat+m;_===Qt.PlayCanvasCompressed?ai.parseToUncompressedSplatBufferSection(W.chunkElement,W.vertexElement,0,Re-1,w,Be,A,Ae):ci.parseToUncompressedSplatBufferSection(W,0,Re-1,Be,0,A,Ae,c)}else _===Qt.PlayCanvasCompressed?ai.parseToUncompressedSplatArraySection(W.chunkElement,W.vertexElement,0,Re-1,w,Be,se):ci.parseToUncompressedSplatArraySection(W,0,Re-1,Be,0,se,c);w+=Re,g===xt.ProgressiveToSplatBuffer&&(T||(Me.writeSectionHeaderToBuffer({maxSplatCount:v,splatCount:w,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:c},0,A,Me.HeaderSizeBytes),T=new Me(A,!1)),T.updateLoadedCounts(1,w)),L>=X&&(B=!0)}if(O===0)K=[];else{let ze=[],Ae=0;for(let qe=K.length-1;qe>=0;qe--){let be=K[qe];if(Ae+=be.sizeBytes,ze.unshift(be),Ae>=O)break}K=ze}U+=x,N+=Ye}i&&T&&i(T,te),te&&(g===xt.ProgressiveToSplatBuffer?F.resolve(T):F.resolve(se))}t&&t(j,Z,bt.Downloading)};return t&&t(0,"0%",bt.Downloading),fa(e,Te,!1,l).then(()=>(t&&t(0,"0%",bt.Processing),F.promise.then(j=>{if(t&&t(100,"100%",bt.Done),g===xt.DownloadBeforeProcessing){let Z=K.map(re=>re.data);return new Blob(Z).arrayBuffer().then(re=>s.loadFromFileData(re,r,o,a,c,h,u,f,d))}else return g===xt.ProgressiveToSplatBuffer?j:pn(()=>af(j,a,r,o,h,u,f,d))})))}static loadFromFileData(e,t,n,i,r=0,o,a,c,l){return i?pn(()=>ua.parseToUncompressedSplatArray(e,r)).then(h=>af(h,i,t,n,o,a,c,l)):pn(()=>ua.parseToUncompressedSplatBuffer(e,r))}},s_=s=>new ReadableStream({async start(e){e.enqueue(s),e.close()}});async function r_(s){try{let e=s_(s);if(!e)throw new Error("Failed to create stream from data");return await o_(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function o_(s){let e=s.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}var a_=1347635022,c_=1,l_=.15;function h_(s){let e=s>>15&1,t=s>>10&31,n=s&1023,i=e===1?-1:1;return t===0?i*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:i*(1/0):i*Math.pow(2,t-15)*(1+n/1024)}function u_(s){return(s-128)/128}function ss(s){switch(s){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${s}`),0}}var d_=(function(){let s=[],e=new $e,t=he.OFFSET.X,n=he.OFFSET.Y,i=he.OFFSET.Z,r=he.OFFSET.SCALE0,o=he.OFFSET.SCALE1,a=he.OFFSET.SCALE2,c=he.OFFSET.ROTATION0,l=he.OFFSET.ROTATION1,h=he.OFFSET.ROTATION2,u=he.OFFSET.ROTATION3,f=he.OFFSET.FDC0,d=he.OFFSET.FDC1,g=he.OFFSET.FDC2,x=he.OFFSET.OPACITY,m=[];for(let y=0;y<45;y++)m[y]=he.OFFSET.FRC0+y;let p=[ss(0),ss(1),ss(2),ss(3)],_=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(y,A,T){T=Math.min(A,T);let S=he.createSplat(T);y.scale[0]!==void 0?(S[r]=y.scale[0],S[o]=y.scale[1],S[a]=y.scale[2]):(S[r]=.01,S[o]=.01,S[a]=.01),y.color[0]!==void 0?(S[f]=y.color[0],S[d]=y.color[1],S[g]=y.color[2]):s[RED]!==void 0?(S[f]=s[RED]*255,S[d]=s[GREEN]*255,S[g]=s[BLUE]*255):(S[f]=0,S[d]=0,S[g]=0),y.alpha!==void 0&&(S[x]=y.alpha),S[f]=At(Math.floor(S[f]),0,255),S[d]=At(Math.floor(S[d]),0,255),S[g]=At(Math.floor(S[g]),0,255),S[x]=At(Math.floor(S[x]),0,255);let v=p[T],w=p[A];for(let E=0;E<3;++E)for(let M=0;M<15;++M){let C=_[E*15+M];M<v&&M<w&&(S[he.OFFSET.FRC0+C]=y.sh[E*w+M])}return e.set(y.rotation[3],y.rotation[0],y.rotation[1],y.rotation[2]),e.normalize(),S[c]=e.x,S[l]=e.y,S[h]=e.z,S[u]=e.w,S[t]=y.position[0],S[n]=y.position[1],S[i]=y.position[2],S}})();function f_(s,e,t,n){return!(s.positions.length!==e*3*(n?2:3)||s.scales.length!==e*3||s.rotations.length!==e*3||s.alphas.length!==e||s.colors.length!==e*3||s.sh.length!==e*t*3)}function cf(s,e,t,n,i){e=Math.min(e,s.shDegree);let r=s.numPoints,o=ss(s.shDegree),a=s.positions.length===r*3*2;if(!f_(s,r,o,a))return null;let c={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]},l;a&&(l=new Uint16Array(s.positions.buffer,s.positions.byteOffset,r*3));let h=1/(1<<s.fractionalBits),u=ss(s.shDegree),f=.28209479177387814;for(let d=0;d<r;d++){if(a)for(let _=0;_<3;_++)c.position[_]=h_(l[d*3+_]);else for(let _=0;_<3;_++){let y=d*9+_*3,A=s.positions[y];A|=s.positions[y+1]<<8,A|=s.positions[y+2]<<16,A|=A&8388608?4278190080:0,c.position[_]=A*h}for(let _=0;_<3;_++)c.scale[_]=Math.exp(s.scales[d*3+_]/16-10);let g=s.rotations.subarray(d*3,d*3+3),x=[g[0]/127.5-1,g[1]/127.5-1,g[2]/127.5-1];c.rotation[0]=x[0],c.rotation[1]=x[1],c.rotation[2]=x[2];let m=x[0]*x[0]+x[1]*x[1]+x[2]*x[2];c.rotation[3]=Math.sqrt(Math.max(0,1-m)),c.alpha=Math.floor(s.alphas[d]);for(let _=0;_<3;_++)c.color[_]=Math.floor(((s.colors[d*3+_]/255-.5)/l_*f+.5)*255);for(let _=0;_<3;_++)for(let y=0;y<u;y++)c.sh[_*u+y]=u_(s.sh[u*3*d+y*3+_]);let p=d_(c,s.shDegree,e);if(t){let _=Me.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,y=d*_+i;Me.writeSplatDataToSectionBuffer(p,n,y,0,e)}else n.addSplat(p)}}var p_=16,m_=1e7;function g_(s){let e=new DataView(s),t=0,n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=p_,n.magic!==a_)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>m_)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;let i=n.numPoints,r=ss(n.shDegree),o=n.version===1,a={numPoints:i,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&c_)!==0,positions:new Uint8Array(i*3*(o?2:3)),scales:new Uint8Array(i*3),rotations:new Uint8Array(i*3),alphas:new Uint8Array(i),colors:new Uint8Array(i*3),sh:new Uint8Array(i*r*3)};try{let c=new Uint8Array(s),l=a.positions.length,h=t;if(a.positions.set(c.slice(h,h+l)),h+=l,a.alphas.set(c.slice(h,h+a.alphas.length)),h+=a.alphas.length,a.colors.set(c.slice(h,h+a.colors.length)),h+=a.colors.length,a.scales.set(c.slice(h,h+a.scales.length)),h+=a.scales.length,a.rotations.set(c.slice(h,h+a.rotations.length)),h+=a.rotations.length,a.sh.set(c.slice(h,h+a.sh.length)),h+a.sh.length!==s.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(c){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",c),null}return a}async function x_(s){try{let e=await r_(s);return g_(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}var lh=class s{static loadFromURL(e,t,n,i,r=!0,o=0,a,c,l,h,u){return t&&t(0,"0%",bt.Downloading),fa(e,t,!0,a).then(f=>(t&&t(0,"0%",bt.Processing),s.loadFromFileData(f,n,i,r,o,c,l,h,u)))}static async loadFromFileData(e,t,n,i,r=0,o,a,c,l){await pn();let h=await x_(e);r=Math.min(h.shDegree,r);let u=new he(r);if(i)return cf(h,r,!1,u,0),Fr.getStandardGenerator(t,n,o,a,c,l).generateFromUncompressedSplatArray(u);{let{splatBuffer:f,splatBufferDataOffsetBytes:d}=Me.preallocateUncompressed(h.numPoints,r);return cf(h,r,!0,f.bufferData,d),f}}},is=class s{static RowSizeBytes=32;static CenterSizeBytes=12;static ScaleSizeBytes=12;static RotationSizeBytes=4;static ColorSizeBytes=4;static parseToUncompressedSplatBufferSection(e,t,n,i,r,o){let a=Me.CompressionLevels[0].BytesPerCenter,c=Me.CompressionLevels[0].BytesPerScale,l=Me.CompressionLevels[0].BytesPerRotation,h=Me.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let u=e;u<=t;u++){let f=u*s.RowSizeBytes+i,d=new Float32Array(n,f,3),g=new Float32Array(n,f+s.CenterSizeBytes,3),x=new Uint8Array(n,f+s.CenterSizeBytes+s.ScaleSizeBytes,4),m=new Uint8Array(n,f+s.CenterSizeBytes+s.ScaleSizeBytes+s.RotationSizeBytes,4),p=new $e((m[1]-128)/128,(m[2]-128)/128,(m[3]-128)/128,(m[0]-128)/128);p.normalize();let _=u*h+o,y=new Float32Array(r,_,3),A=new Float32Array(r,_+a,3),T=new Float32Array(r,_+a+c,4),S=new Uint8Array(r,_+a+c+l,4);y[0]=d[0],y[1]=d[1],y[2]=d[2],A[0]=g[0],A[1]=g[1],A[2]=g[2],T[0]=p.w,T[1]=p.x,T[2]=p.y,T[3]=p.z,S[0]=x[0],S[1]=x[1],S[2]=x[2],S[3]=x[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,r){for(let o=e;o<=t;o++){let a=o*s.RowSizeBytes+i,c=new Float32Array(n,a,3),l=new Float32Array(n,a+s.CenterSizeBytes,3),h=new Uint8Array(n,a+s.CenterSizeBytes+s.ScaleSizeBytes,4),u=new Uint8Array(n,a+s.CenterSizeBytes+s.ScaleSizeBytes+s.RotationSizeBytes,4),f=new $e((u[1]-128)/128,(u[2]-128)/128,(u[3]-128)/128,(u[0]-128)/128);f.normalize(),r.addSplatFromComonents(c[0],c[1],c[2],l[0],l[1],l[2],f.w,f.x,f.y,f.z,h[0],h[1],h[2],h[3])}}static parseStandardSplatToUncompressedSplatArray(e){let t=e.byteLength/s.RowSizeBytes,n=new he;for(let i=0;i<t;i++){let r=i*s.RowSizeBytes,o=new Float32Array(e,r,3),a=new Float32Array(e,r+s.CenterSizeBytes,3),c=new Uint8Array(e,r+s.CenterSizeBytes+s.ScaleSizeBytes,4),l=new Uint8Array(e,r+s.CenterSizeBytes+s.ScaleSizeBytes+s.ColorSizeBytes,4),h=new $e((l[1]-128)/128,(l[2]-128)/128,(l[3]-128)/128,(l[0]-128)/128);h.normalize(),n.addSplatFromComonents(o[0],o[1],o[2],a[0],a[1],a[2],h.w,h.x,h.y,h.z,c[0],c[1],c[2],c[3])}return n}};function lf(s,e,t,n,i,r,o,a){return e?Fr.getStandardGenerator(t,n,i,r,o,a).generateFromUncompressedSplatArray(s):Me.generateFromUncompressedSplatArrays([s],t,0,new I)}var hh=class s{static loadFromURL(e,t,n,i,r,o,a=!0,c,l,h,u,f){let d=n?xt.ProgressiveToSplatBuffer:xt.ProgressiveToSplatArray;a&&(d=xt.ProgressiveToSplatArray);let g=Me.HeaderSizeBytes+Me.SectionHeaderSizeBytes,x=nt.ProgressiveLoadSectionSize,m=1,p,_,y,A=0,T=0,S,v=Ch(),w=0,E=0,M=[],C=(B,F,U,N)=>{let L=B>=100;if(U&&M.push(U),d===xt.DownloadBeforeProcessing){L&&v.resolve(M);return}if(!N){if(n)throw new er("Cannon directly load .splat because no file size info is available.");d=xt.DownloadBeforeProcessing;return}if(!p){A=N/is.RowSizeBytes,p=new ArrayBuffer(N);let X=Me.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,H=g+X*A;d===xt.ProgressiveToSplatBuffer?(_=new ArrayBuffer(H),Me.writeHeaderToBuffer({versionMajor:Me.CurrentMajorVersion,versionMinor:Me.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:A,splatCount:T,compressionLevel:0,sceneCenter:new I},_)):S=new he(0)}if(U){new Uint8Array(p,E,U.byteLength).set(new Uint8Array(U)),E+=U.byteLength;let X=E-w;if(X>x||L){let W=(L?X:x)/is.RowSizeBytes,K=T+W;d===xt.ProgressiveToSplatBuffer?is.parseToUncompressedSplatBufferSection(T,K-1,p,0,_,g):is.parseToUncompressedSplatArraySection(T,K-1,p,0,S),T=K,d===xt.ProgressiveToSplatBuffer&&(y||(Me.writeSectionHeaderToBuffer({maxSplatCount:A,splatCount:T,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,_,Me.HeaderSizeBytes),y=new Me(_,!1)),y.updateLoadedCounts(1,T),i&&i(y,L)),w+=x}}L&&(d===xt.ProgressiveToSplatBuffer?v.resolve(y):v.resolve(S)),t&&t(B,F,bt.Downloading)};return t&&t(0,"0%",bt.Downloading),fa(e,C,!1,c).then(()=>(t&&t(0,"0%",bt.Processing),v.promise.then(B=>(t&&t(100,"100%",bt.Done),d===xt.DownloadBeforeProcessing?new Blob(M).arrayBuffer().then(F=>s.loadFromFileData(F,r,o,a,l,h,u,f)):d===xt.ProgressiveToSplatBuffer?B:pn(()=>lf(B,a,r,o,l,h,u,f))))))}static loadFromFileData(e,t,n,i,r,o,a,c){return pn(()=>{let l=is.parseStandardSplatToUncompressedSplatArray(e);return lf(l,i,t,n,r,o,a,c)})}},uh=class s{static checkVersion(e){let t=Me.CurrentMajorVersion,n=Me.CurrentMinorVersion,i=Me.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i,r){let o,a,c,l,h=!1,u=!1,f,d=[],g=!1,x=!1,m=0,p=0,_=0,y=!1,A=!1,T=!1,S=[],v=Ch(),w=()=>{!h&&!u&&m>=Me.HeaderSizeBytes&&(u=!0,new Blob(S).arrayBuffer().then(N=>{c=new ArrayBuffer(Me.HeaderSizeBytes),new Uint8Array(c).set(new Uint8Array(N,0,Me.HeaderSizeBytes)),s.checkVersion(c),u=!1,h=!0,l=Me.parseHeader(c),window.setTimeout(()=>{C()},1)}))},E=0,M=()=>{E===0&&(E++,window.setTimeout(()=>{E--,B()},1))},C=()=>{let U=()=>{x=!0,new Blob(S).arrayBuffer().then(L=>{x=!1,g=!0,f=new ArrayBuffer(l.maxSectionCount*Me.SectionHeaderSizeBytes),new Uint8Array(f).set(new Uint8Array(L,Me.HeaderSizeBytes,l.maxSectionCount*Me.SectionHeaderSizeBytes)),d=Me.parseSectionHeaders(l,f,0,!1);let X=0;for(let W=0;W<l.maxSectionCount;W++)X+=d[W].storageSizeBytes;let H=Me.HeaderSizeBytes+l.maxSectionCount*Me.SectionHeaderSizeBytes+X;if(!o){o=new ArrayBuffer(H);let W=0;for(let K=0;K<S.length;K++){let se=S[K];new Uint8Array(o,W,se.byteLength).set(new Uint8Array(se)),W+=se.byteLength}}_=Me.HeaderSizeBytes+Me.SectionHeaderSizeBytes*l.maxSectionCount;for(let W=0;W<=d.length&&W<l.maxSectionCount;W++)_+=d[W].storageSizeBytes;M()})};!x&&!g&&h&&m>=Me.HeaderSizeBytes+Me.SectionHeaderSizeBytes*l.maxSectionCount&&U()},B=()=>{if(T)return;T=!0;let U=()=>{if(T=!1,g){if(A)return;if(y=m>=_,m-p>nt.ProgressiveLoadSectionSize||y){p+=nt.ProgressiveLoadSectionSize,A=p>=_,a||(a=new Me(o,!1));let L=Me.HeaderSizeBytes+Me.SectionHeaderSizeBytes*l.maxSectionCount,X=0,H=0,W=0;for(let Ee=0;Ee<l.maxSectionCount;Ee++){let Te=d[Ee],j=X+Te.partiallyFilledBucketCount*4+Te.bucketStorageSizeBytes*Te.bucketCount,Z=L+j;if(p>=Z){H++;let re=p-Z,Se=Me.CompressionLevels[l.compressionLevel].SphericalHarmonicsDegrees[Te.sphericalHarmonicsDegree].BytesPerSplat,Le=Math.floor(re/Se);Le=Math.min(Le,Te.maxSplatCount),W+=Le,a.updateLoadedCounts(H,W),a.updateSectionLoadedCounts(Ee,Le)}else break;X+=Te.storageSizeBytes}i(a,A);let K=p/_*100,se=K.toFixed(2)+"%";t&&t(K,se,bt.Downloading),A?v.resolve(a):B()}}};window.setTimeout(U,nt.ProgressiveLoadSectionDelayDuration)};return fa(e,(U,N,L)=>{L&&(S.push(L),o&&new Uint8Array(o,m,L.byteLength).set(new Uint8Array(L)),m+=L.byteLength),n?(w(),C(),B()):t&&t(U,N,bt.Downloading)},!n,r).then(U=>(t&&t(0,"0%",bt.Processing),(n?v.promise:s.loadFromFileData(U)).then(L=>(t&&t(100,"100%",bt.Done),L))))}static loadFromFileData(e){return pn(()=>(s.checkVersion(e),new Me(e)))}static downloadFile=(function(){let e;return function(t,n){let i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}})()},Ut={Splat:0,KSplat:1,Ply:2,Spz:3},hf=s=>s.endsWith(".ply")?Ut.Ply:s.endsWith(".splat")?Ut.Splat:s.endsWith(".ksplat")?Ut.KSplat:s.endsWith(".spz")?Ut.Spz:null;var uf={type:"change"},eh={type:"start"},df={type:"end"},ca=new Un,ff=new an,y_=Math.cos(70*Pi.DEG2RAD),Zs=class extends In{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:$t.ROTATE,MIDDLE:$t.DOLLY,RIGHT:$t.PAN},this.touches={ONE:en.ROTATE,TWO:en.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",ee),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ee),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(uf),n.update(),r=i.NONE},this.clearDampedRotation=function(){c.theta=0,c.phi=0},this.clearDampedPan=function(){h.set(0,0,0)},this.update=(function(){let D=new I,ne=new $e().setFromUnitVectors(e.up,new I(0,1,0)),_e=ne.clone().invert(),le=new I,Oe=new $e,Ne=new I,Ze=2*Math.PI;return function(){ne.setFromUnitVectors(e.up,new I(0,1,0)),_e.copy(ne).invert();let de=n.object.position;D.copy(de).sub(n.target),D.applyQuaternion(ne),a.setFromVector3(D),n.autoRotate&&r===i.NONE&&C(E()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Q=n.minAzimuthAngle,J=n.maxAzimuthAngle;isFinite(Q)&&isFinite(J)&&(Q<-Math.PI?Q+=Ze:Q>Math.PI&&(Q-=Ze),J<-Math.PI?J+=Ze:J>Math.PI&&(J-=Ze),Q<=J?a.theta=Math.max(Q,Math.min(J,a.theta)):a.theta=a.theta>(Q+J)/2?Math.max(Q,a.theta):Math.min(J,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&S||n.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*l),D.setFromSpherical(a),D.applyQuaternion(_e),de.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let pe=!1;if(n.zoomToCursor&&S){let ue=null;if(n.object.isPerspectiveCamera){let He=D.length();ue=W(He*l);let dt=He-ue;n.object.position.addScaledVector(A,dt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let He=new I(T.x,T.y,0);He.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),pe=!0;let dt=new I(T.x,T.y,0);dt.unproject(n.object),n.object.position.sub(dt).add(He),n.object.updateMatrixWorld(),ue=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ue!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ue).add(n.object.position):(ca.origin.copy(n.object.position),ca.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ca.direction))<y_?e.lookAt(n.target):(ff.setFromNormalAndCoplanarPoint(n.object.up,n.target),ca.intersectPlane(ff,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),pe=!0);return l=1,S=!1,pe||le.distanceToSquared(n.object.position)>o||8*(1-Oe.dot(n.object.quaternion))>o||Ne.distanceToSquared(n.target)>0?(n.dispatchEvent(uf),le.copy(n.object.position),Oe.copy(n.object.quaternion),Ne.copy(n.target),pe=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",we),n.domElement.removeEventListener("pointerdown",Ae),n.domElement.removeEventListener("pointercancel",be),n.domElement.removeEventListener("wheel",G),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",be),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ee),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,o=1e-6,a=new Ri,c=new Ri,l=1,h=new I,u=new ce,f=new ce,d=new ce,g=new ce,x=new ce,m=new ce,p=new ce,_=new ce,y=new ce,A=new I,T=new ce,S=!1,v=[],w={};function E(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function C(D){c.theta-=D}function B(D){c.phi-=D}let F=(function(){let D=new I;return function(_e,le){D.setFromMatrixColumn(le,0),D.multiplyScalar(-_e),h.add(D)}})(),U=(function(){let D=new I;return function(_e,le){n.screenSpacePanning===!0?D.setFromMatrixColumn(le,1):(D.setFromMatrixColumn(le,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(_e),h.add(D)}})(),N=(function(){let D=new I;return function(_e,le){let Oe=n.domElement;if(n.object.isPerspectiveCamera){let Ne=n.object.position;D.copy(Ne).sub(n.target);let Ze=D.length();Ze*=Math.tan(n.object.fov/2*Math.PI/180),F(2*_e*Ze/Oe.clientHeight,n.object.matrix),U(2*le*Ze/Oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(_e*(n.object.right-n.object.left)/n.object.zoom/Oe.clientWidth,n.object.matrix),U(le*(n.object.top-n.object.bottom)/n.object.zoom/Oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function L(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(D){if(!n.zoomToCursor)return;S=!0;let ne=n.domElement.getBoundingClientRect(),_e=D.clientX-ne.left,le=D.clientY-ne.top,Oe=ne.width,Ne=ne.height;T.x=_e/Oe*2-1,T.y=-(le/Ne)*2+1,A.set(T.x,T.y,1).unproject(e).sub(e.position).normalize()}function W(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function K(D){u.set(D.clientX,D.clientY)}function se(D){H(D),p.set(D.clientX,D.clientY)}function Ee(D){g.set(D.clientX,D.clientY)}function Te(D){f.set(D.clientX,D.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let ne=n.domElement;C(2*Math.PI*d.x/ne.clientHeight),B(2*Math.PI*d.y/ne.clientHeight),u.copy(f),n.update()}function j(D){_.set(D.clientX,D.clientY),y.subVectors(_,p),y.y>0?L(M()):y.y<0&&X(M()),p.copy(_),n.update()}function Z(D){x.set(D.clientX,D.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(x),n.update()}function re(D){H(D),D.deltaY<0?X(M()):D.deltaY>0&&L(M()),n.update()}function te(D){let ne=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),ne=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),ne=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),ne=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),ne=!0;break}ne&&(D.preventDefault(),n.update())}function ge(){if(v.length===1)u.set(v[0].pageX,v[0].pageY);else{let D=.5*(v[0].pageX+v[1].pageX),ne=.5*(v[0].pageY+v[1].pageY);u.set(D,ne)}}function Se(){if(v.length===1)g.set(v[0].pageX,v[0].pageY);else{let D=.5*(v[0].pageX+v[1].pageX),ne=.5*(v[0].pageY+v[1].pageY);g.set(D,ne)}}function Le(){let D=v[0].pageX-v[1].pageX,ne=v[0].pageY-v[1].pageY,_e=Math.sqrt(D*D+ne*ne);p.set(0,_e)}function Ve(){n.enableZoom&&Le(),n.enablePan&&Se()}function Re(){n.enableZoom&&Le(),n.enableRotate&&ge()}function Ye(D){if(v.length==1)f.set(D.pageX,D.pageY);else{let _e=oe(D),le=.5*(D.pageX+_e.x),Oe=.5*(D.pageY+_e.y);f.set(le,Oe)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let ne=n.domElement;C(2*Math.PI*d.x/ne.clientHeight),B(2*Math.PI*d.y/ne.clientHeight),u.copy(f)}function O(D){if(v.length===1)x.set(D.pageX,D.pageY);else{let ne=oe(D),_e=.5*(D.pageX+ne.x),le=.5*(D.pageY+ne.y);x.set(_e,le)}m.subVectors(x,g).multiplyScalar(n.panSpeed),N(m.x,m.y),g.copy(x)}function Xe(D){let ne=oe(D),_e=D.pageX-ne.x,le=D.pageY-ne.y,Oe=Math.sqrt(_e*_e+le*le);_.set(0,Oe),y.set(0,Math.pow(_.y/p.y,n.zoomSpeed)),L(y.y),p.copy(_)}function Be(D){n.enableZoom&&Xe(D),n.enablePan&&O(D)}function ze(D){n.enableZoom&&Xe(D),n.enableRotate&&Ye(D)}function Ae(D){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",qe),n.domElement.addEventListener("pointerup",be)),me(D),D.pointerType==="touch"?ie(D):P(D))}function qe(D){n.enabled!==!1&&(D.pointerType==="touch"?$(D):b(D))}function be(D){ve(D),v.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",be)),n.dispatchEvent(df),r=i.NONE}function P(D){let ne;switch(D.button){case 0:ne=n.mouseButtons.LEFT;break;case 1:ne=n.mouseButtons.MIDDLE;break;case 2:ne=n.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case $t.DOLLY:if(n.enableZoom===!1)return;se(D),r=i.DOLLY;break;case $t.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;Ee(D),r=i.PAN}else{if(n.enableRotate===!1)return;K(D),r=i.ROTATE}break;case $t.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;K(D),r=i.ROTATE}else{if(n.enablePan===!1)return;Ee(D),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(eh)}function b(D){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Te(D);break;case i.DOLLY:if(n.enableZoom===!1)return;j(D);break;case i.PAN:if(n.enablePan===!1)return;Z(D);break}}function G(D){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(D.preventDefault(),n.dispatchEvent(eh),re(D),n.dispatchEvent(df))}function ee(D){n.enabled===!1||n.enablePan===!1||te(D)}function ie(D){switch(Ke(D),v.length){case 1:switch(n.touches.ONE){case en.ROTATE:if(n.enableRotate===!1)return;ge(),r=i.TOUCH_ROTATE;break;case en.PAN:if(n.enablePan===!1)return;Se(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case en.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ve(),r=i.TOUCH_DOLLY_PAN;break;case en.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Re(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(eh)}function $(D){switch(Ke(D),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ye(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;O(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ze(D),n.update();break;default:r=i.NONE}}function we(D){n.enabled!==!1&&D.preventDefault()}function me(D){v.push(D)}function ve(D){delete w[D.pointerId];for(let ne=0;ne<v.length;ne++)if(v[ne].pointerId==D.pointerId){v.splice(ne,1);return}}function Ke(D){let ne=w[D.pointerId];ne===void 0&&(ne=new ce,w[D.pointerId]=ne),ne.set(D.pageX,D.pageY)}function oe(D){let ne=D.pointerId===v[0].pointerId?v[1]:v[0];return w[ne.pointerId]}n.domElement.addEventListener("contextmenu",we),n.domElement.addEventListener("pointerdown",Ae),n.domElement.addEventListener("pointercancel",be),n.domElement.addEventListener("wheel",G,{passive:!1}),this.update()}},A_=(s,e,t,n,i)=>{let r=performance.now(),o=s.style.display==="none"?0:parseFloat(s.style.opacity);isNaN(o)&&(o=1);let a=window.setInterval(()=>{let l=performance.now()-r,h=Math.min(l/n,1);h>.999&&(h=1);let u;e?(u=(1-h)*o,u<1e-4&&(u=0)):u=(1-o)*h+o,u>0?(s.style.display=t,s.style.opacity=u):s.style.display="none",h>=1&&(i&&i(),window.clearInterval(a))},16);return a};var __=500,dh=class s{static elementIDGen=0;constructor(e,t){this.taskIDGen=0,this.elementID=s.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);let n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){let t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){let n=(i,r,o,a,c)=>{o?i.style.display=r?a:"none":this.fadeTransitions[c]=A_(i,!r,a,__,()=>{this.fadeTransitions[c]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}},fh=class{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);let t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}},ph=class{constructor(e){this.container=e||document.body,this.infoCells={};let t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");let n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";let i=document.createElement("div");i.style.display="table";for(let r of t){let o=document.createElement("div");o.style.display="table-row",o.className="info-panel-row";let a=document.createElement("div");a.style.display="table-cell",a.innerHTML=`${r[0]}: `,a.classList.add("info-panel-cell","label-cell");let c=document.createElement("div");c.style.display="table-cell",c.style.width="10px",c.innerHTML=" ",c.className="info-panel-cell";let l=document.createElement("div");l.style.display="table-cell",l.innerHTML="",l.className="info-panel-cell",this.infoCells[r[1]]=l,o.appendChild(a),o.appendChild(c),o.appendChild(l),i.appendChild(o)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}update=function(e,t,n,i,r,o,a,c,l,h,u,f,d,g){let x=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==x&&(this.infoCells.cameraPosition.innerHTML=x),n){let p=n,_=`${p.x.toFixed(5)}, ${p.y.toFixed(5)}, ${p.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==_&&(this.infoCells.cameraLookAt.innerHTML=_)}let m=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==m&&(this.infoCells.cameraUp.innerHTML=m),this.infoCells.orthographicCamera.innerHTML=r?"Orthographic":"Perspective",o){let p=o,_=`${p.x.toFixed(5)}, ${p.y.toFixed(5)}, ${p.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=_}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=a,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${l} splats out of ${c} (${h.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${u.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${f.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${d.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${g}`};setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}},pf=new I,mh=class extends rt{constructor(e=new I(0,0,1),t=new I(0,0,0),n=1,i=.1,r=16776960,o=n*.2,a=o*.2){super(),this.type="ArrowHelper";let c=new Vs(i,i,n,32);c.translate(0,n/2,0);let l=new Vs(0,a,o,32);l.translate(0,n,0),this.position.copy(t),this.line=new lt(c,new Gt({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new lt(l,new Gt({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{pf.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(pf,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},gh=class s{constructor(e){this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new Pn(e,t,{format:Ot,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Ns(e,t),this.splatRenderTarget.depthTexture.format=Ei,this.splatRenderTarget.depthTexture.type=ln}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){let e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new Lt({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:sl,blendSrc:ws,blendSrcAlpha:ws,blendDst:Cs,blendDstAlpha:Cs});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new lt(new Qi(2,2),t),this.renderTargetCopyCamera=new $n(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(js(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){let e=new Uo(.5,1.5,32),t=new Gt({color:16777215}),n=new lt(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);let i=new lt(e,t);i.position.set(0,-1,0);let r=new lt(e,t);r.rotation.set(0,0,Math.PI/2),r.position.set(1,0,0);let o=new lt(e,t);o.rotation.set(0,0,-Math.PI/2),o.position.set(-1,0,0),this.meshCursor=new rt,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(r),this.meshCursor.add(o),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(js(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){let e=new Tr(.5,32,32),t=s.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new lt(e,t)}}destroyFocusMarker(){this.focusMarker&&(js(this.focusMarker),this.focusMarker=null)}updateFocusMarker=(function(){let e=new I,t=new ye,n=new I;return function(i,r,o){t.copy(r.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(r.matrixWorld),n.copy(r.position).sub(i);let a=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(a,a,a),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(o),this.focusMarker.material.uniformsNeedUpdate=!0}})();setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){let e=new Qi(1,1);e.rotateX(-Math.PI/2);let t=new Gt({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=Yt;let n=new lt(e,t),i=new I(0,1,0);i.normalize();let r=new I(0,0,0),o=.5,a=.01,c=56576,l=new mh(i,r,o,a,c,.1,.03);this.controlPlane=new rt,this.controlPlane.add(n),this.controlPlane.add(l)}}destroyControlPlane(){this.controlPlane&&(js(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}positionAndOrientControlPlane=(function(){let e=new $e,t=new I(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}})();addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(js(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){let t=new Tr(1,32,32),n=new rt,i=(r,o)=>{let a=new lt(t,s.buildDebugMaterial(r));a.renderOrder=e,n.add(a),a.position.fromArray(o)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){let t=new Yi(3,3,3),n=new rt,i=12303291,r=a=>{let c=new lt(t,s.buildDebugMaterial(i));c.renderOrder=e,n.add(c),c.position.fromArray(a)},o=10;return r([-o,0,-o]),r([-o,0,o]),r([o,0,-o]),r([o,0,o]),n}static buildDebugMaterial(e){let t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,i={color:{type:"v3",value:new Ce(e)}},r=new Lt({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:cn});return r.extensions.fragDepth=!0,r}static buildFocusMarkerMaterial(e){let t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,i={color:{type:"v3",value:new Ce(e)},realFocusPosition:{type:"v3",value:new I},viewport:{type:"v2",value:new ce},opacity:{value:0}};return new Lt({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:cn})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}},S_=new I(1,0,0),v_=new I(0,1,0),M_=new I(0,0,1),Pr=class{constructor(e=new I,t=new I){this.origin=new I,this.direction=new I,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}intersectBox=(function(){let e=new I,t=[],n=[],i=[];return function(r,o){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(r,this.origin,1e-4))return o&&(o.origin.copy(this.origin),o.normal.set(0,0,0),o.distance=-1),!0;for(let a=0;a<3;a++){if(i[a]==0)continue;let c=a==0?S_:a==1?v_:M_,l=i[a]<0?r.max:r.min,h=-Math.sign(i[a]);t[0]=a==0?l.x:a==1?l.y:l.z;let u=t[0]-n[a];if(u*h<0){let f=(a+1)%3,d=(a+2)%3;if(t[2]=i[f]/i[a]*u+n[f],t[1]=i[d]/i[a]*u+n[d],e.set(t[a],t[d],t[f]),this.boxContainsPoint(r,e,1e-4))return o&&(o.origin.copy(e),o.normal.copy(c).multiplyScalar(h),o.distance=e.sub(this.origin).length()),!0}}return!1}})();intersectSphere=(function(){let e=new I;return function(t,n,i){e.copy(t).sub(this.origin);let r=e.dot(this.direction),o=r*r,c=e.dot(e)-o,l=n*n;if(c>l)return!1;let h=Math.sqrt(l-c),u=r-h,f=r+h;if(f<0)return!1;let d=u<0?f:u;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,d),i.normal.copy(i.origin).sub(t).normalize(),i.distance=d),!0}})()},xh=class s{constructor(){this.origin=new I,this.normal=new I,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){let e=new s;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}},oi={ThreeD:0,TwoD:1},yh=class{constructor(e,t,n=!1){this.ray=new Pr(e,t),this.raycastAgainstTrueSplatEllipsoid=n}setFromCameraAndScreenPosition=(function(){let e=new ce;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}})();intersectSplatMesh=(function(){let e=new ye,t=new ye,n=new ye,i=new Pr,r=new I;return function(o,a=[]){let c=o.getSplatTree();if(c){for(let l=0;l<c.subTrees.length;l++){let h=c.subTrees[l];t.copy(o.matrixWorld),o.dynamicMode&&(o.getSceneTransform(l,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();let u=[];h.rootNode&&this.castRayAtSplatTreeNode(i,c,h.rootNode,u),u.forEach(f=>{f.origin.applyMatrix4(t),f.normal.applyMatrix4(t).normalize(),f.distance=r.copy(f.origin).sub(this.ray.origin).length()}),a.push(...u)}return a.sort((l,h)=>l.distance>h.distance?1:-1),a}}})();castRayAtSplatTreeNode=(function(){let e=new Je,t=new I,n=new I,i=new $e,r=new xh,o=1e-7,a=new I(0,0,0),c=new ye,l=new ye,h=new ye,u=new ye,f=new ye,d=new Pr;return function(g,x,m,p=[]){if(g.intersectBox(m.boundingBox)){if(m.data&&m.data.indexes&&m.data.indexes.length>0)for(let _=0;_<m.data.indexes.length;_++){let y=m.data.indexes[_],A=x.splatMesh.getSceneIndexForSplat(y);if(x.splatMesh.getScene(A).visible&&(x.splatMesh.getSplatColor(y,e),x.splatMesh.getSplatCenter(y,t),x.splatMesh.getSplatScaleAndRotation(y,n,i),!(n.x<=o||n.y<=o||x.splatMesh.splatRenderMode===oi.ThreeD&&n.z<=o)))if(this.raycastAgainstTrueSplatEllipsoid){l.makeScale(n.x,n.y,n.z),h.makeRotationFromQuaternion(i);let S=Math.log10(e.w)*2;if(c.makeScale(S,S,S),f.copy(c).multiply(h).multiply(l),u.copy(f).invert(),d.origin.copy(g.origin).sub(t).applyMatrix4(u),d.direction.copy(g.origin).add(g.direction).sub(t),d.direction.applyMatrix4(u).sub(d.origin).normalize(),d.intersectSphere(a,1,r)){let v=r.clone();v.splatIndex=y,v.origin.applyMatrix4(f).add(t),p.push(v)}}else{let S=n.x+n.y,v=2;if(x.splatMesh.splatRenderMode===oi.ThreeD&&(S+=n.z,v=3),S=S/v,g.intersectSphere(t,S,r)){let w=r.clone();w.splatIndex=y,p.push(w)}}}if(m.children&&m.children.length>0)for(let _ of m.children)this.castRayAtSplatTreeNode(g,x,_,p);return p}}})()},Fi=class{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let r=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(r+=`
            uniform float sceneOpacity[${nt.MaxScenes}];
            uniform int sceneVisibility[${nt.MaxScenes}];
        `),e&&(r+=`
            uniform highp mat4 transforms[${nt.MaxScenes}];
        `),r+=`
        ${i}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${nt.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${nt.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(r+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?r+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:r+="mat4 transformModelViewMatrix = modelViewMatrix;",r+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(r+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?r+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:r+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,r+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(r+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?r+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(r+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),r+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(r+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(r+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),r+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),r+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),r}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,i=1,r=!1){let o={sceneCenter:{type:"v3",value:new I},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new ce},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new ce},basisViewport:{type:"v2",value:new ce},debugColor:{type:"v3",value:new Ce},centersColorsTextureSize:{type:"v2",value:new ce(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new ce(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:r?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new ce(1024,1024)},sceneCount:{type:"i",value:1}};for(let a=0;a<nt.MaxScenes;a++)o.sphericalHarmonics8BitCompressionRangeMin.value.push(-nt.SphericalHarmonics8BitCompressionRange/2),o.sphericalHarmonics8BitCompressionRangeMax.value.push(nt.SphericalHarmonics8BitCompressionRange/2);if(t){let a=[];for(let l=0;l<nt.MaxScenes;l++)a.push(1);o.sceneOpacity={type:"f",value:a};let c=[];for(let l=0;l<nt.MaxScenes;l++)c.push(1);o.sceneVisibility={type:"i",value:c}}if(e){let a=[];for(let c=0;c<nt.MaxScenes;c++)a.push(new ye);o.transforms={type:"mat4",value:a}}return o}},Ah=class s{static build(e=!1,t=!1,n=!1,i=2048,r=1,o=!1,a=0,c=.3){let h=Fi.buildVertexShaderBase(e,t,a,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);h+=s.buildVertexShaderProjection(n,t,i,c);let u=s.buildFragmentShader(),f=Fi.getUniforms(e,t,a,r,o);return f.covariancesTextureSize={type:"v2",value:new ce(1024,1024)},f.covariancesTexture={type:"t",value:null},f.covariancesTextureHalfFloat={type:"t",value:null},f.covariancesAreHalfFloat={type:"i",value:0},new Lt({uniforms:f,vertexShader:h,fragmentShader:u,transparent:!0,alphaTest:1,blending:Zn,depthTest:!0,depthWrite:!1,side:Yt})}static buildVertexShaderProjection(e,t,n,i){let r=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?r+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:r+=`
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
            `,r+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(r+=`
                vColor.a *= splatOpacityFromScene;
            `),r+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,r+=Fi.getVertexShaderFadeIn(),r+="}",r}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}},_h=class s{static build(e=!1,t=!1,n=1,i=!1,r=0){let a=Fi.buildVertexShaderBase(e,t,r,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);a+=s.buildVertexShaderProjection();let c=s.buildFragmentShader(),l=Fi.getUniforms(e,t,r,n,i);return l.scaleRotationsTexture={type:"t",value:null},l.scaleRotationsTextureSize={type:"v2",value:new ce(1024,1024)},new Lt({uniforms:l,vertexShader:a,fragmentShader:c,transparent:!0,alphaTest:1,blending:Zn,depthTest:!0,depthWrite:!1,side:Yt})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Fi.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}},Sh=class{static build(e){let t=new St;t.setIndex([0,1,2,0,2,3]);let n=new Float32Array(12),i=new Et(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;let r=new Wo().copy(t),o=new Uint32Array(e),a=new ei(o,1,!1);return a.setUsage(Cd),r.setAttribute("splatIndex",a),r.instanceCount=0,r}},vh=class extends rt{constructor(e,t=new I,n=new $e,i=new I(1,1,1),r=1,o=1,a=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new ye,this.minimumAlpha=r,this.opacity=o,this.visible=a}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}},Mh=class s{static idGen=0;constructor(e,t,n,i){this.min=new I().copy(e),this.max=new I().copy(t),this.boundingBox=new Ct(this.min,this.max),this.center=new I().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||s.idGen++}},Eh=class s{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new I,this.sceneMin=new I,this.sceneMax=new I,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){let t=new I().fromArray(e.min),n=new I().fromArray(e.max),i=new Mh(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let r of e.data.indexes)i.data.indexes.push(r)}if(e.children)for(let r of e.children)i.children.push(s.convertWorkerSubTreeNode(r));return i}static convertWorkerSubTree(e,t){let n=new s(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new I().fromArray(e.sceneMin),n.sceneMax=new I().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=s.convertWorkerSubTreeNode(e.rootNode);let i=(r,o)=>{r.children.length===0&&o(r);for(let a of r.children)i(a,o)};return n.nodesWithIndexes=[],i(n.rootNode,r=>{r.data&&r.data.indexes&&r.data.indexes.length>0&&n.nodesWithIndexes.push(r)}),n}};function E_(s){let e=0;class t{constructor(c,l){this.min=[c[0],c[1],c[2]],this.max=[l[0],l[1],l[2]]}containsPoint(c){return c[0]>=this.min[0]&&c[0]<=this.max[0]&&c[1]>=this.min[1]&&c[1]<=this.max[1]&&c[2]>=this.min[2]&&c[2]<=this.max[2]}}class n{constructor(c,l){this.maxDepth=c,this.maxCentersPerNode=l,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(c,l,h,u){this.min=[c[0],c[1],c[2]],this.max=[l[0],l[1],l[2]],this.center=[(l[0]-c[0])*.5+c[0],(l[1]-c[1])*.5+c[1],(l[2]-c[2])*.5+c[2]],this.depth=h,this.children=[],this.data=null,this.id=u||e++}}processSplatTreeNode=function(a,c,l,h){let u=c.data.indexes.length;if(u<a.maxCentersPerNode||c.depth>a.maxDepth){let y=[];for(let A=0;A<c.data.indexes.length;A++)a.addedIndexes[c.data.indexes[A]]||(y.push(c.data.indexes[A]),a.addedIndexes[c.data.indexes[A]]=!0);c.data.indexes=y,c.data.indexes.sort((A,T)=>A>T?1:-1),a.nodesWithIndexes.push(c);return}let f=[c.max[0]-c.min[0],c.max[1]-c.min[1],c.max[2]-c.min[2]],d=[f[0]*.5,f[1]*.5,f[2]*.5],g=[c.min[0]+d[0],c.min[1]+d[1],c.min[2]+d[2]],x=[new t([g[0]-d[0],g[1],g[2]-d[2]],[g[0],g[1]+d[1],g[2]]),new t([g[0],g[1],g[2]-d[2]],[g[0]+d[0],g[1]+d[1],g[2]]),new t([g[0],g[1],g[2]],[g[0]+d[0],g[1]+d[1],g[2]+d[2]]),new t([g[0]-d[0],g[1],g[2]],[g[0],g[1]+d[1],g[2]+d[2]]),new t([g[0]-d[0],g[1]-d[1],g[2]-d[2]],[g[0],g[1],g[2]]),new t([g[0],g[1]-d[1],g[2]-d[2]],[g[0]+d[0],g[1],g[2]]),new t([g[0],g[1]-d[1],g[2]],[g[0]+d[0],g[1],g[2]+d[2]]),new t([g[0]-d[0],g[1]-d[1],g[2]],[g[0],g[1],g[2]+d[2]])],m=[],p=[];for(let y=0;y<x.length;y++)m[y]=0,p[y]=[];let _=[0,0,0];for(let y=0;y<u;y++){let A=c.data.indexes[y],T=l[A];_[0]=h[T],_[1]=h[T+1],_[2]=h[T+2];for(let S=0;S<x.length;S++)x[S].containsPoint(_)&&(m[S]++,p[S].push(A))}for(let y=0;y<x.length;y++){let A=new i(x[y].min,x[y].max,c.depth+1);A.data={indexes:p[y]},c.children.push(A)}c.data={};for(let y of c.children)processSplatTreeNode(a,y,l,h)};let r=(a,c,l)=>{let h=[0,0,0],u=[0,0,0],f=[],d=Math.floor(a.length/4);for(let x=0;x<d;x++){let m=x*4,p=a[m],_=a[m+1],y=a[m+2],A=Math.round(a[m+3]);(x===0||p<h[0])&&(h[0]=p),(x===0||p>u[0])&&(u[0]=p),(x===0||_<h[1])&&(h[1]=_),(x===0||_>u[1])&&(u[1]=_),(x===0||y<h[2])&&(h[2]=y),(x===0||y>u[2])&&(u[2]=y),f.push(A)}let g=new n(c,l);return g.sceneMin=h,g.sceneMax=u,g.rootNode=new i(g.sceneMin,g.sceneMax,0),g.rootNode.data={indexes:f},g};function o(a,c,l){let h=[];for(let f of a){let d=Math.floor(f.length/4);for(let g=0;g<d;g++){let x=g*4,m=Math.round(f[x+3]);h[m]=x}}let u=[];for(let f of a){let d=r(f,c,l);u.push(d),processSplatTreeNode(d,d.rootNode,h,f)}s.postMessage({subTrees:u})}s.onmessage=a=>{a.data.process&&o(a.data.process.centers,a.data.process.maxDepth,a.data.process.maxCentersPerNode)}}function T_(s,e,t,n,i){s.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function b_(){return new Worker(URL.createObjectURL(new Blob(["(",E_.toString(),")(self)"],{type:"application/javascript"})))}var Th=class{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}processSplatMesh=function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=b_()),this.splatMesh=e,this.subTrees=[];let r=new I,o=(a,c)=>{let l=new Float32Array(c*4),h=0;for(let u=0;u<c;u++){let f=u+a;if(t(f)){e.getSplatCenter(f,r);let d=h*4;l[d]=r.x,l[d+1]=r.y,l[d+2]=r.z,l[d+3]=f,h++}}return l};return new Promise(a=>{let c=()=>this.disposed?(this.diposeSplatTreeWorker(),a(),!0):!1;n&&n(!1),pn(()=>{if(c())return;let l=[];if(e.dynamicMode){let h=0;for(let u=0;u<e.scenes.length;u++){let d=e.getScene(u).splatBuffer.getSplatCount(),g=o(h,d);l.push(g),h+=d}}else{let h=o(0,e.getSplatCount());l.push(h)}this.splatTreeWorker.onmessage=h=>{c()||h.data.subTrees&&(i&&i(!1),pn(()=>{if(!c()){for(let u of h.data.subTrees){let f=Eh.convertWorkerSubTree(u,e);this.subTrees.push(f)}this.diposeSplatTreeWorker(),i&&i(!0),pn(()=>{a()})}}))},pn(()=>{if(c())return;n&&n(!0);let h=l.map(u=>u.buffer);T_(this.splatTreeWorker,l,h,this.maxDepth,this.maxCentersPerNode)})})})};countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){let t=(n,i)=>{n.children.length===0&&i(n);for(let r of n.children)t(r,i)};for(let n of this.subTrees)t(n.rootNode,e)}};function w_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function C_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,A=o||e.has("OES_texture_float"),T=y&&A,S=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:A,floatVertexTextures:T,maxSamples:S}}var rs={Default:0,Gradual:1,Instant:2},$s={None:0,Error:1,Warning:2,Info:3,Debug:4},mf=new St,R_=new Gt,la=6,I_=4,P_=4,D_=4,B_=6,F_=8,th=4,nh=4,gf=1,L_=.012,U_=.003,xf=1,yf=16777216,bh=class s extends lt{constructor(e=oi.ThreeD,t=!1,n=!1,i=!1,r=1,o=!0,a=!1,c=!1,l=1024,h=$s.None,u=0,f=1,d=.3){super(mf,R_),this.renderer=void 0,this.splatRenderMode=e,this.dynamicMode=t,this.enableOptionalEffects=n,this.halfPrecisionCovariancesOnGPU=i,this.devicePixelRatio=r,this.enableDistancesComputationOnGPU=o,this.integerBasedDistancesComputation=a,this.antialiased=c,this.kernel2DSize=d,this.maxScreenSpaceSplatSize=l,this.logLevel=h,this.sphericalHarmonicsDegree=u,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=f,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Ct,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(e,t,n){let i=[];i.length=t.length;for(let r=0;r<t.length;r++){let o=t[r],a=n[r]||{},c=a.position||[0,0,0],l=a.rotation||[0,0,0,1],h=a.scale||[1,1,1],u=new I().fromArray(c),f=new $e().fromArray(l),d=new I().fromArray(h),g=s.createScene(o,u,f,d,a.splatAlphaRemovalThreshold||1,a.opacity,a.visible);e.add(g),i[r]=g}return i}static createScene(e,t,n,i,r,o=1,a=!0){return new vh(e,t,n,i,r,o,a)}static buildSplatIndexMaps(e){let t=[],n=[],i=0;for(let r=0;r<e.length;r++){let a=e[r].getMaxSplatCount();for(let c=0;c<a;c++)t[i]=c,n[i]=r,i++}return{localSplatIndexMap:t,sceneIndexMap:n}}buildSplatTree=function(e=[],t,n){return new Promise(i=>{this.disposeSplatTree(),this.baseSplatTree=new Th(8,1e3);let r=performance.now(),o=new Je;this.baseSplatTree.processSplatMesh(this,a=>{this.getSplatColor(a,o);let c=this.getSceneIndexForSplat(a),l=e[c]||1;return o.w>=l},t,n).then(()=>{let a=performance.now()-r;if(this.logLevel>=$s.Info&&console.log("SplatTree build: "+a+" ms"),this.disposed)i();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let c=0,l=0,h=0,u=0;this.splatTree.visitLeaves(f=>{let d=f.data.indexes.length;d>0&&(l+=d,h=Math.max(h,d),u++,c++)}),this.logLevel>=$s.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${c}`),l=l/u,console.log(`Avg splat count per node: ${l}`),console.log(`Total splat count: ${this.getSplatCount()}`)),i()}})})};build(e,t,n=!0,i=!1,r,o,a=!0){this.sceneOptions=t,this.finalBuild=i;let c=s.getTotalMaxSplatCountForSplatBuffers(e),l=s.buildScenes(this,e,t);if(n)for(let x=0;x<this.scenes.length&&x<l.length;x++){let m=l[x],p=this.getScene(x);m.copyTransformData(p)}this.scenes=l;let h=3;for(let x of e){let m=x.getMinSphericalHarmonicsDegree();m<h&&(h=m)}this.minSphericalHarmonicsDegree=Math.min(h,this.sphericalHarmonicsDegree);let u=!1;if(e.length!==this.lastBuildScenes.length)u=!0;else for(let x=0;x<e.length;x++)if(e[x]!==this.lastBuildScenes[x].splatBuffer){u=!0;break}let f=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==c||u)&&(f=!1),!f){this.boundingBox=new Ct,a||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=Sh.build(c),this.splatRenderMode===oi.ThreeD?this.material=Ah.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=_h.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);let x=s.buildSplatIndexMaps(e);this.globalSplatIndexToLocalSplatIndexMap=x.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=x.sceneIndexMap}let d=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();let g=this.refreshGPUDataFromSplatBuffers(f);for(let x=0;x<this.scenes.length;x++)this.lastBuildScenes[x]=this.scenes[x];return this.lastBuildSplatCount=d,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,i&&this.scenes.length>0&&this.buildSplatTree(t.map(x=>x.splatAlphaRemovalThreshold||1),r,o).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,g}freeIntermediateSplatData(){let e=t=>{delete t.source.data,delete t.image,t.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{e(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{e(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{e(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(t=>{t.needsUpdate=!0,t.onUpdate=()=>{e(t)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{e(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Ct,this.calculatedSceneCenter=new I,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==mf&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let e in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(e)){let t=this.splatDataTextures[e];t.texture&&(t.texture.dispose(),t.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(e){this.onSplatTreeReadyCallback=e}getDataForDistancesComputation(e,t){let n=this.integerBasedDistancesComputation?this.getIntegerCenters(e,t,!0):this.getFloatCenters(e,t,!0),i=this.getSceneIndexes(e,t);return{centers:n,sceneIndexes:i}}refreshGPUDataFromSplatBuffers(e){let t=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(e);let n=e?this.lastBuildSplatCount:0,{centers:i,sceneIndexes:r}=this.getDataForDistancesComputation(n,t-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(i,r,e),{from:n,to:t-1,count:t-n,centers:i,sceneIndexes:r}}refreshGPUBuffersForDistancesComputation(e,t,n=!1){let i=n?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(n,e,i),this.updateGPUTransformIndexesBufferForDistancesComputation(n,t,i)}refreshDataTexturesFromSplatBuffers(e){let t=this.getSplatCount(!0),n=this.lastBuildSplatCount,i=t-1;e?this.updateBaseDataFromSplatBuffers(n,i):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(n,i),this.updateVisibleRegion(e)}setupDataTextures(){let e=this.getMaxSplatCount(),t=this.getSplatCount(!0);this.disposeTextures();let n=(v,w)=>{let E=new ce(4096,1024);for(;E.x*E.y*v<e*w;)E.y*=2;return E},i=v=>v>=1?B_:P_,r=v=>{let w=i(v),E=n(w,6);return{elementsPerTexelStored:w,texSize:E}},o=this.getTargetCovarianceCompressionLevel(),a=0,c=this.getTargetSphericalHarmonicsCompressionLevel(),l,h,u;if(this.splatRenderMode===oi.ThreeD){let v=r(o);v.texSize.x*v.texSize.y>yf&&o===0&&(o=1),l=new Float32Array(e*la)}else h=new Float32Array(e*3),u=new Float32Array(e*4);let f=new Float32Array(e*3),d=new Uint8Array(e*4),g=Float32Array;c===1?g=Uint16Array:c===2&&(g=Uint8Array);let x=Js(this.minSphericalHarmonicsDegree),m=this.minSphericalHarmonicsDegree?new g(e*x):void 0,p=n(nh,4),_=new Uint32Array(p.x*p.y*nh);s.updateCenterColorsPaddedData(0,t-1,f,d,_);let y=new dn(_,p.x,p.y,ts,ln);if(y.internalFormat="RGBA32UI",y.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=y,this.material.uniforms.centersColorsTextureSize.value.copy(p),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:l,scales:h,rotations:u,centers:f,colors:d,sphericalHarmonics:m},centerColors:{data:_,texture:y,size:p}},this.splatRenderMode===oi.ThreeD){let v=r(o),w=v.elementsPerTexelStored,E=v.texSize,M=o>=1?Uint32Array:Float32Array,C=o>=1?F_:D_,B=new M(E.x*E.y*C);o===0?B.set(l):s.updatePaddedCompressedCovariancesTextureData(l,B,0,0,l.length);let F;if(o>=1)F=new dn(B,E.x,E.y,ts,ln),F.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=F;else{F=new dn(B,E.x,E.y,Ot,Zt),this.material.uniforms.covariancesTexture.value=F;let U=new dn(new Uint32Array(32),2,2,ts,ln);U.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=U,U.needsUpdate=!0}F.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=o>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(E),this.splatDataTextures.covariances={data:B,texture:F,size:E,compressionLevel:o,elementsPerTexelStored:w,elementsPerTexelAllocated:C}}else{let w=n(th,6),E=a>=1?Uint16Array:Float32Array,M=a>=1?Ii:Zt,C=new E(w.x*w.y*th);s.updateScaleRotationsPaddedData(0,t-1,h,u,C);let B=new dn(C,w.x,w.y,Ot,M);B.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=B,this.material.uniforms.scaleRotationsTextureSize.value.copy(w),this.splatDataTextures.scaleRotations={data:C,texture:B,size:w,compressionLevel:a}}if(m){let v=c===2?Rn:Ii,w=x;w%2!==0&&w++;let E=4,M=E===4?Ot:Ko,C=n(E,w);if(C.x*C.y<=yf){let B=C.x*C.y*E,F=new g(B);for(let N=0;N<t;N++){let L=x*N,X=w*N;for(let H=0;H<x;H++)F[X+H]=m[L+H]}let U=new dn(F,C.x,C.y,M,v);U.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=U,this.splatDataTextures.sphericalHarmonics={componentCount:x,paddedComponentCount:w,data:F,textureCount:1,texture:U,size:C,compressionLevel:c,elementsPerTexel:E}}else{let B=x/3;w=B,w%2!==0&&w++,C=n(E,w);let F=C.x*C.y*E,U=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],N=[],L=[];for(let X=0;X<3;X++){let H=new g(F);N.push(H);for(let K=0;K<t;K++){let se=x*K,Ee=w*K;if(B>=3){for(let Te=0;Te<3;Te++)H[Ee+Te]=m[se+X*3+Te];if(B>=8)for(let Te=0;Te<5;Te++)H[Ee+3+Te]=m[se+9+X*5+Te]}}let W=new dn(H,C.x,C.y,M,v);L.push(W),W.needsUpdate=!0,U[X].value=W}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:x,componentCountPerChannel:B,paddedComponentCount:w,data:N,textureCount:3,textures:L,size:C,compressionLevel:c,elementsPerTexel:E}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(C),this.material.uniforms.sphericalHarmonics8BitMode.value=c===2?1:0;for(let B=0;B<this.scenes.length;B++){let F=this.scenes[B].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[B]=F.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[B]=F.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}let A=n(gf,4),T=new Uint32Array(A.x*A.y*gf);for(let v=0;v<t;v++)T[v]=this.globalSplatIndexToSceneIndexMap[v];let S=new dn(T,A.x,A.y,wr,ln);S.internalFormat="R32UI",S.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=S,this.material.uniforms.sceneIndexesTextureSize.value.copy(A),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:T,texture:S,size:A},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(e,t){let n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,r=this.splatDataTextures.scaleRotations,o=r?r.compressionLevel:void 0,a=this.splatDataTextures.sphericalHarmonics,c=a?a.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,i,o,c,e,t,e)}updateDataTexturesFromBaseData(e,t){let n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,r=this.splatDataTextures.scaleRotations,o=r?r.compressionLevel:void 0,a=this.splatDataTextures.sphericalHarmonics,c=a?a.compressionLevel:0,l=this.splatDataTextures.centerColors,h=l.data,u=l.texture;s.updateCenterColorsPaddedData(e,t,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,h);let f=this.renderer?this.renderer.properties.get(u):null;if(!f||!f.__webglTexture?u.needsUpdate=!0:this.updateDataTexture(h,l.texture,l.size,f,nh,I_,4,e,t),n){let _=n.texture,y=e*la,A=t*la;if(i===0)for(let S=y;S<=A;S++){let v=this.splatDataTextures.baseData.covariances[S];n.data[S]=v}else s.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,n.data,e*n.elementsPerTexelAllocated,y,A);let T=this.renderer?this.renderer.properties.get(_):null;!T||!T.__webglTexture?_.needsUpdate=!0:i===0?this.updateDataTexture(n.data,n.texture,n.size,T,n.elementsPerTexelStored,la,4,e,t):this.updateDataTexture(n.data,n.texture,n.size,T,n.elementsPerTexelAllocated,n.elementsPerTexelAllocated,2,e,t)}if(r){let _=r.data,y=r.texture,A=6,T=o===0?4:2;s.updateScaleRotationsPaddedData(e,t,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,_);let S=this.renderer?this.renderer.properties.get(y):null;!S||!S.__webglTexture?y.needsUpdate=!0:this.updateDataTexture(_,r.texture,r.size,S,th,A,T,e,t)}let d=this.splatDataTextures.baseData.sphericalHarmonics;if(d){let _=4;c===1?_=2:c===2&&(_=1);let y=(S,v,w,E,M)=>{let C=this.renderer?this.renderer.properties.get(S):null;!C||!C.__webglTexture?S.needsUpdate=!0:this.updateDataTexture(E,S,v,C,w,M,_,e,t)},A=a.componentCount,T=a.paddedComponentCount;if(a.textureCount===1){let S=a.data;for(let v=e;v<=t;v++){let w=A*v,E=T*v;for(let M=0;M<A;M++)S[E+M]=d[w+M]}y(a.texture,a.size,a.elementsPerTexel,S,T)}else{let S=a.componentCountPerChannel;for(let v=0;v<3;v++){let w=a.data[v];for(let E=e;E<=t;E++){let M=A*E,C=T*E;if(S>=3){for(let B=0;B<3;B++)w[C+B]=d[M+v*3+B];if(S>=8)for(let B=0;B<5;B++)w[C+3+B]=d[M+9+v*5+B]}}y(a.textures[v],a.size,a.elementsPerTexel,w,T)}}}let g=this.splatDataTextures.sceneIndexes,x=g.data;for(let _=this.lastBuildSplatCount;_<=t;_++)x[_]=this.globalSplatIndexToSceneIndexMap[_];let m=g.texture,p=this.renderer?this.renderer.properties.get(m):null;!p||!p.__webglTexture?m.needsUpdate=!0:this.updateDataTexture(x,g.texture,g.size,p,1,1,1,this.lastBuildSplatCount,t)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){let i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel>e)&&(e=i.compressionLevel)}return e}getMinimumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){let i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel<e)&&(e=i.compressionLevel)}return e}static computeTextureUpdateRegion(e,t,n,i,r){let o=r/i,a=e*o,c=Math.floor(a/n),l=c*n*i,h=t*o,u=Math.floor(h/n),f=u*n*i+n*i;return{dataStart:l,dataEnd:f,startRow:c,endRow:u}}updateDataTexture(e,t,n,i,r,o,a,c,l){let h=this.renderer.getContext(),u=s.computeTextureUpdateRegion(c,l,n.x,r,o),f=u.dataEnd-u.dataStart,d=new e.constructor(e.buffer,u.dataStart*a,f),g=u.endRow-u.startRow+1,x=this.webGLUtils.convert(t.type),m=this.webGLUtils.convert(t.format,t.colorSpace),p=h.getParameter(h.TEXTURE_BINDING_2D);h.bindTexture(h.TEXTURE_2D,i.__webglTexture),h.texSubImage2D(h.TEXTURE_2D,0,0,u.startRow,n.x,g,m,x,d),h.bindTexture(h.TEXTURE_2D,p)}static updatePaddedCompressedCovariancesTextureData(e,t,n,i,r){let o=new DataView(t.buffer),a=n,c=0;for(let l=i;l<=r;l+=2)o.setUint16(a*2,e[l],!0),o.setUint16(a*2+2,e[l+1],!0),a+=2,c++,c>=3&&(a+=2,c=0)}static updateCenterColorsPaddedData(e,t,n,i,r){for(let o=e;o<=t;o++){let a=o*4,c=o*3,l=o*4;r[l]=SA(i,a),r[l+1]=Kl(n[c]),r[l+2]=Kl(n[c+1]),r[l+3]=Kl(n[c+2])}}static updateScaleRotationsPaddedData(e,t,n,i,r){for(let a=e;a<=t;a++){let c=a*3,l=a*4,h=a*6;r[h]=n[c],r[h+1]=n[c+1],r[h+2]=n[c+2],r[h+3]=i[l],r[h+4]=i[l+1],r[h+5]=i[l+2]}}updateVisibleRegion(e){let t=this.getSplatCount(!0),n=new I;if(!e){let r=new I;this.scenes.forEach(o=>{r.add(o.splatBuffer.sceneCenter)}),r.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(r),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}let i=e?this.lastBuildSplatCount:0;for(let r=i;r<t;r++){this.getSplatCenter(r,n,!0);let o=n.sub(this.calculatedSceneCenter).length();o>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=o)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>xf&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-xf,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(e=rs.Default){let t=L_*this.sceneFadeInRateMultiplier,n=U_*this.sceneFadeInRateMultiplier,i=this.finalBuild?t:n,r=e===rs.Default?i:n;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*r+this.visibleRegionFadeStartRadius;let a=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,c=a||e===rs.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=c,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!a}updateRenderIndexes(e,t){let n=this.geometry;n.attributes.splatIndex.set(e),n.attributes.splatIndex.needsUpdate=!0,t>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),n.instanceCount=t,n.setDrawRange(0,t)}updateTransforms(){for(let e=0;e<this.scenes.length;e++)this.getScene(e).updateTransform(this.dynamicMode)}updateUniforms=(function(){let e=new ce;return function(t,n,i,r,o,a){if(this.getSplatCount()>0){if(e.set(t.x*this.devicePixelRatio,t.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(e),this.material.uniforms.basisViewport.value.set(1/e.x,1/e.y),this.material.uniforms.focal.value.set(n,i),this.material.uniforms.orthographicMode.value=r?1:0,this.material.uniforms.orthoZoom.value=o,this.material.uniforms.inverseFocalAdjustment.value=a,this.dynamicMode)for(let l=0;l<this.scenes.length;l++)this.material.uniforms.transforms.value[l].copy(this.getScene(l).transform);if(this.enableOptionalEffects)for(let l=0;l<this.scenes.length;l++)this.material.uniforms.sceneOpacity.value[l]=At(this.getScene(l).opacity,0,1),this.material.uniforms.sceneVisibility.value[l]=this.getScene(l).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}})();setSplatScale(e=1){this.splatScale=e,this.material.uniforms.splatScale.value=e,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(e){this.pointCloudModeEnabled=e,this.material.uniforms.pointCloudModeEnabled.value=e?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(e=!1){return e?s.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getSplatCount());return t}static getTotalSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getSplatCount();return t}getMaxSplatCount(){return s.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getMaxSplatCount());return t}static getTotalMaxSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getMaxSplatCount();return t}disposeDistancesComputationGPUResources(){if(!this.renderer)return;let e=this.renderer.getContext();this.distancesTransformFeedback.vao&&(e.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(e.deleteProgram(this.distancesTransformFeedback.program),e.deleteShader(this.distancesTransformFeedback.vertexShader),e.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(e.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;let e=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,e.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(e.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(e){if(e!==this.renderer){this.renderer=e;let t=this.renderer.getContext(),n=new w_(t),i=new C_(t,n,{});if(n.init(i),this.webGLUtils=new fl(t,n,i),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();let{centers:r,sceneIndexes:o}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(r,o)}}}setupDistancesComputationTransformFeedback=(function(){let e;return function(){let t=this.getMaxSplatCount();if(!this.renderer)return;let n=this.lastRenderer!==this.renderer,i=e!==t;if(!n&&!i)return;n?this.disposeDistancesComputationGPUResources():i&&this.disposeDistancesComputationGPUBufferResources();let r=this.renderer.getContext(),o=(f,d,g)=>{let x=f.createShader(d);if(!x)return console.error("Fatal error: gl could not create a shader object."),null;if(f.shaderSource(x,g),f.compileShader(x),!f.getShaderParameter(x,f.COMPILE_STATUS)){let p="unknown";d===f.VERTEX_SHADER?p="vertex shader":d===f.FRAGMENT_SHADER&&(p="fragement shader");let _=f.getShaderInfoLog(x);return console.error("Failed to compile "+p+" with these errors:"+_),f.deleteShader(x),null}return x},a;this.integerBasedDistancesComputation?(a=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?a+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${nt.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:a+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(a=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?a+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${nt.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:a+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);let c=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,l=r.getParameter(r.VERTEX_ARRAY_BINDING),h=r.getParameter(r.CURRENT_PROGRAM),u=h?r.getProgramParameter(h,r.DELETE_STATUS):!1;if(n&&(this.distancesTransformFeedback.vao=r.createVertexArray()),r.bindVertexArray(this.distancesTransformFeedback.vao),n){let f=r.createProgram(),d=o(r,r.VERTEX_SHADER,a),g=o(r,r.FRAGMENT_SHADER,c);if(!d||!g)throw new Error("Could not compile shaders for distances computation on GPU.");if(r.attachShader(f,d),r.attachShader(f,g),r.transformFeedbackVaryings(f,["distance"],r.SEPARATE_ATTRIBS),r.linkProgram(f),!r.getProgramParameter(f,r.LINK_STATUS)){let m=r.getProgramInfoLog(f);throw console.error("Fatal error: Failed to link program: "+m),r.deleteProgram(f),r.deleteShader(g),r.deleteShader(d),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=f,this.distancesTransformFeedback.vertexShader=d,this.distancesTransformFeedback.vertexShader=g}if(r.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=r.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=r.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let f=0;f<this.scenes.length;f++)this.distancesTransformFeedback.transformsLocs[f]=r.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${f}]`)}else this.distancesTransformFeedback.modelViewProjLoc=r.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(n||i)&&(this.distancesTransformFeedback.centersBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?r.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,r.INT,0,0):r.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,r.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),r.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,r.UNSIGNED_INT,0,0))),(n||i)&&(this.distancesTransformFeedback.outDistancesBuffer=r.createBuffer()),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),r.bufferData(r.ARRAY_BUFFER,t*4,r.STATIC_READ),n&&(this.distancesTransformFeedback.id=r.createTransformFeedback()),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),h&&u!==!0&&r.useProgram(h),l&&r.bindVertexArray(l),this.lastRenderer=this.renderer,e=t}})();updateGPUCentersBufferForDistancesComputation(e,t,n){if(!this.renderer)return;let i=this.renderer.getContext(),r=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);let o=this.integerBasedDistancesComputation?Uint32Array:Float32Array,a=16,c=n*a;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,c,t);else{let l=new o(this.getMaxSplatCount()*a);l.set(t),i.bufferData(i.ARRAY_BUFFER,l,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),r&&i.bindVertexArray(r)}updateGPUTransformIndexesBufferForDistancesComputation(e,t,n){if(!this.renderer||!this.dynamicMode)return;let i=this.renderer.getContext(),r=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);let o=n*4;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,o,t);else{let a=new Uint32Array(this.getMaxSplatCount()*4);a.set(t),i.bufferData(i.ARRAY_BUFFER,a,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),r&&i.bindVertexArray(r)}getSceneIndexes(e,t){let n,i=t-e+1;n=new Uint32Array(i);for(let r=e;r<=t;r++)n[r]=this.globalSplatIndexToSceneIndexMap[r];return n}fillTransformsArray=(function(){let e=[];return function(t){e.length!==t.length&&(e.length=t.length);for(let n=0;n<this.scenes.length;n++){let r=this.getScene(n).transform.elements;for(let o=0;o<16;o++)e[n*16+o]=r[o]}t.set(e)}})();computeDistancesOnGPU=(function(){let e=new ye;return function(t,n){if(!this.renderer)return;let i=this.renderer.getContext(),r=i.getParameter(i.VERTEX_ARRAY_BINDING),o=i.getParameter(i.CURRENT_PROGRAM),a=o?i.getProgramParameter(o,i.DELETE_STATUS):!1;if(i.bindVertexArray(this.distancesTransformFeedback.vao),i.useProgram(this.distancesTransformFeedback.program),i.enable(i.RASTERIZER_DISCARD),this.dynamicMode)for(let h=0;h<this.scenes.length;h++)if(e.copy(this.getScene(h).transform),e.premultiply(t),this.integerBasedDistancesComputation){let u=s.getIntegerMatrixArray(e),f=[u[2],u[6],u[10],u[14]];i.uniform4i(this.distancesTransformFeedback.transformsLocs[h],f[0],f[1],f[2],f[3])}else i.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[h],!1,e.elements);else if(this.integerBasedDistancesComputation){let h=s.getIntegerMatrixArray(t),u=[h[2],h[6],h[10]];i.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,u[0],u[1],u[2])}else{let h=[t.elements[2],t.elements[6],t.elements[10]];i.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,h[0],h[1],h[2])}i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?i.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,i.INT,0,0):i.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,i.FLOAT,!1,0,0),this.dynamicMode&&(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),i.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,i.UNSIGNED_INT,0,0)),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),i.beginTransformFeedback(i.POINTS),i.drawArrays(i.POINTS,0,this.getSplatCount()),i.endTransformFeedback(),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,null),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,null),i.disable(i.RASTERIZER_DISCARD);let c=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);i.flush();let l=new Promise(h=>{let u=()=>{if(this.disposed)h();else switch(i.clientWaitSync(c,0,0)){case i.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(u),this.computeDistancesOnGPUSyncTimeout;case i.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,i.deleteSync(c);let x=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao),i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),i.getBufferSubData(i.ARRAY_BUFFER,0,n),i.bindBuffer(i.ARRAY_BUFFER,null),x&&i.bindVertexArray(x),h()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(u)});return o&&a!==!0&&i.useProgram(o),r&&i.bindVertexArray(r),l}})();getLocalSplatParameters(e,t,n){n==null&&(n=!this.dynamicMode),t.splatBuffer=this.getSplatBufferForSplat(e),t.localIndex=this.getSplatLocalIndex(e),t.sceneTransform=n?this.getSceneTransformForSplat(e):null}fillSplatDataArrays(e,t,n,i,r,o,a,c=0,l=0,h=1,u,f,d=0,g){let x=new I;x.x=void 0,x.y=void 0,this.splatRenderMode===oi.ThreeD?x.z=void 0:x.z=1;let m=new ye,p=0,_=this.scenes.length-1;g!=null&&g>=0&&g<=this.scenes.length&&(p=g,_=g);for(let y=p;y<=_;y++){a==null&&(a=!this.dynamicMode);let A=this.getScene(y),T=A.splatBuffer,S;if(a&&(this.getSceneTransform(y,m),S=m),e&&T.fillSplatCovarianceArray(e,S,u,f,d,c),t||n){if(!t||!n)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');T.fillSplatScaleRotationArray(t,n,S,u,f,d,l,x)}i&&T.fillSplatCenterArray(i,S,u,f,d),r&&T.fillSplatColorArray(r,A.minimumAlpha,u,f,d),o&&T.fillSphericalHarmonicsArray(o,this.minSphericalHarmonicsDegree,S,u,f,d,h),d+=T.getSplatCount()}}getIntegerCenters(e,t,n=!1){let i=t-e+1,r=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,r,null,null,void 0,void 0,void 0,void 0,e);let o,a=n?4:3;o=new Int32Array(i*a);for(let c=0;c<i;c++){for(let l=0;l<3;l++)o[c*a+l]=Math.round(r[c*3+l]*1e3);n&&(o[c*a+3]=1e3)}return o}getFloatCenters(e,t,n=!1){let i=t-e+1,r=new Float32Array(i*3);if(this.fillSplatDataArrays(null,null,null,r,null,null,void 0,void 0,void 0,void 0,e),!n)return r;let o=new Float32Array(i*4);for(let a=0;a<i;a++){for(let c=0;c<3;c++)o[a*4+c]=r[a*3+c];o[a*4+3]=1}return o}getSplatCenter=(function(){let e={};return function(t,n,i){this.getLocalSplatParameters(t,e,i),e.splatBuffer.getSplatCenter(e.localIndex,n,e.sceneTransform)}})();getSplatScaleAndRotation=(function(){let e={},t=new I;return function(n,i,r,o){this.getLocalSplatParameters(n,e,o),t.x=void 0,t.y=void 0,t.z=void 0,this.splatRenderMode===oi.TwoD&&(t.z=0),e.splatBuffer.getSplatScaleAndRotation(e.localIndex,i,r,e.sceneTransform,t)}})();getSplatColor=(function(){let e={};return function(t,n){this.getLocalSplatParameters(t,e),e.splatBuffer.getSplatColor(e.localIndex,n)}})();getSceneTransform(e,t){let n=this.getScene(e);n.updateTransform(this.dynamicMode),t.copy(n.transform)}getScene(e){if(e<0||e>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[e]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).splatBuffer}getSceneIndexForSplat(e){return this.globalSplatIndexToSceneIndexMap[e]}getSceneTransformForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).transform}getSplatLocalIndex(e){return this.globalSplatIndexToLocalSplatIndexMap[e]}static getIntegerMatrixArray(e){let t=e.elements,n=[];for(let i=0;i<16;i++)n[i]=Math.round(t[i]*1e3);return n}computeBoundingBox(e=!1,t){let n=this.getSplatCount();if(t!=null){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");n=this.scenes[t].splatBuffer.getSplatCount()}let i=new Float32Array(n*3);this.fillSplatDataArrays(null,null,null,i,null,null,e,void 0,void 0,void 0,void 0,t);let r=new I,o=new I;for(let a=0;a<n;a++){let c=a*3,l=i[c],h=i[c+1],u=i[c+2];(a===0||l<r.x)&&(r.x=l),(a===0||h<r.y)&&(r.y=h),(a===0||u<r.z)&&(r.z=u),(a===0||l>o.x)&&(o.x=l),(a===0||h>o.y)&&(o.y=h),(a===0||u>o.z)&&(o.z=u)}return new Ct(r,o)}},O_="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",Af="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",N_="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",H_="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function z_(s){let e,t,n,i,r,o,a,c,l,h,u,f,d,g,x,m,p,_,y,A;function T(S,v,w,E,M,C,B){let F=performance.now();if(!n&&(new Uint32Array(t,a,M.byteLength/A.BytesPerInt).set(M),new Float32Array(t,h,B.byteLength/A.BytesPerFloat).set(B),E)){let H;i?H=new Int32Array(t,u,C.byteLength/A.BytesPerInt):H=new Float32Array(t,u,C.byteLength/A.BytesPerFloat),H.set(C)}m||(m=new Uint32Array(_)),new Float32Array(t,x,16).set(w),new Uint32Array(t,d,_).set(m),e.exports.sortIndexes(a,g,u,f,d,x,c,l,h,_,S,v,o,E,i,r);let U={sortDone:!0,splatSortCount:S,splatRenderCount:v,sortTime:0};if(!n){let L=new Uint32Array(t,c,v);(!p||p.length<v)&&(p=new Uint32Array(v)),p.set(L),U.sortedIndexes=p}let N=performance.now();U.sortTime=N-F,s.postMessage(U)}s.onmessage=S=>{if(S.data.centers)centers=S.data.centers,sceneIndexes=S.data.sceneIndexes,i?new Int32Array(t,g+S.data.range.from*A.BytesPerInt*4,S.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,g+S.data.range.from*A.BytesPerFloat*4,S.data.range.count*4).set(new Float32Array(centers)),r&&new Uint32Array(t,l+S.data.range.from*4,S.data.range.count).set(new Uint32Array(sceneIndexes)),y=S.data.range.from+S.data.range.count;else if(S.data.sort){let v=Math.min(S.data.sort.splatRenderCount||0,y),w=Math.min(S.data.sort.splatSortCount||0,y),E=S.data.sort.usePrecomputedDistances,M,C,B;n||(M=S.data.sort.indexesToSort,B=S.data.sort.transforms,E&&(C=S.data.sort.precomputedDistances)),T(w,v,S.data.sort.modelViewProj,E,M,C,B)}else if(S.data.init){A=S.data.init.Constants,o=S.data.init.splatCount,n=S.data.init.useSharedMemory,i=S.data.init.integerBasedSort,r=S.data.init.dynamicMode,_=S.data.init.distanceMapRange,y=0;let v=i?A.BytesPerInt*4:A.BytesPerFloat*4,w=new Uint8Array(S.data.init.sorterWasmBytes),E=16*A.BytesPerFloat,M=o*A.BytesPerInt,C=o*v,B=E,F=i?o*A.BytesPerInt:o*A.BytesPerFloat,U=o*A.BytesPerInt,N=o*A.BytesPerInt,L=i?_*A.BytesPerInt*2:_*A.BytesPerFloat*2,X=r?o*A.BytesPerInt:0,H=r?A.MaxScenes*E:0,W=A.MemoryPageSize*32,K=M+C+B+F+U+L+N+X+H+W,se=Math.floor(K/A.MemoryPageSize)+1,Ee={module:{},env:{memory:new WebAssembly.Memory({initial:se,maximum:se,shared:!0})}};WebAssembly.compile(w).then(Te=>WebAssembly.instantiate(Te,Ee)).then(Te=>{e=Te,a=0,g=a+M,x=g+C,u=x+B,f=u+F,d=f+U,c=d+L,l=c+N,h=l+X,t=Ee.env.memory.buffer,n?s.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:a,sortedIndexesBuffer:t,sortedIndexesOffset:c,precomputedDistancesBuffer:t,precomputedDistancesOffset:u,transformsBuffer:t,transformsOffset:h}):s.postMessage({sortSetupPhase1Complete:!0})})}}}function k_(s,e,t,n,i,r=nt.DefaultSplatSortDistanceMapPrecision){let o=new Worker(URL.createObjectURL(new Blob(["(",z_.toString(),")(self)"],{type:"application/javascript"}))),a=O_,c=Rh()?_f():null;!t&&!e?(a=Af,c&&c.major<=16&&c.minor<4&&(a=H_)):t?e||c&&c.major<=16&&c.minor<4&&(a=N_):a=Af;let l=atob(a),h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u);return o.postMessage({init:{sorterWasmBytes:h.buffer,splatCount:s,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<r,Constants:{BytesPerFloat:nt.BytesPerFloat,BytesPerInt:nt.BytesPerInt,MemoryPageSize:nt.MemoryPageSize,MaxScenes:nt.MaxScenes}}}),o}var Ks={None:0,VR:1,AR:2},Lr=class s{static createButton(e,t={}){let n=document.createElement("button");function i(){let l=null;async function h(d){d.addEventListener("end",u),await e.xr.setSession(d),n.textContent="EXIT VR",l=d}function u(){l.removeEventListener("end",u),n.textContent="ENTER VR",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";let f={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",f).then(h):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(h).catch(d=>{console.warn(d)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="VR NOT SUPPORTED"}function a(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="VR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?i():o(),l&&s.xrSessionIsGranted&&n.click()}).catch(a),n;{let l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{s.xrSessionIsGranted=!0})}}};Lr.xrSessionIsGranted=!1;Lr.registerSessionGrantedListener();var wh=class{static createButton(e,t={}){let n=document.createElement("button");function i(){if(t.domOverlay===void 0){let f=document.createElement("div");f.style.display="none",document.body.appendChild(f);let d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("width",38),d.setAttribute("height",38),d.style.position="absolute",d.style.right="20px",d.style.top="20px",d.addEventListener("click",function(){l.end()}),f.appendChild(d);let g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),d.appendChild(g),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:f}}let l=null;async function h(f){f.addEventListener("end",u),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(f),n.textContent="STOP AR",t.domOverlay.root.style.display="",l=f}function u(){l.removeEventListener("end",u),n.textContent="START AR",t.domOverlay.root.style.display="none",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-ar",t).then(h):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(f=>{console.warn(f)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="AR NOT SUPPORTED"}function a(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="AR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-ar").then(function(l){l?i():o()}).catch(a),n;{let l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}},Dr={Always:0,OnChange:1,Never:2},V_=50,G_=.75,W_=15e5,X_=10,q_=2.5,Y_=60,da=class s{constructor(e={}){if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new I().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new I().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new I().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||Ks.None,this.webXRMode!==Ks.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||Dr.Always,this.sceneRevealMode=e.sceneRevealMode||rs.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||$s.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,Rh()){let n=_f();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=oi.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||nt.DefaultSplatSortDistanceMapPrecision;let t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=At(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new yh,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new I,this.nextCameraTarget=new I,this.mousePosition=new ce,this.mouseDownPosition=new ce,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new dh(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new fh(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new ph(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new bh(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new Hs,this.sceneHelper=new gh(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){let e=new ce;this.getRenderDimensions(e),this.perspectiveCamera=new Mt(V_,e.x/e.y,.1,1e3),this.orthographicCamera=new $n(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){let e=new ce;this.getRenderDimensions(e),this.renderer=new Ki({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new Ce(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===Ks.VR?this.rootElement.appendChild(Lr.createButton(this.renderer,e)):this.webXRMode===Ks.AR&&this.rootElement.appendChild(wh.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===Ks.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Zs(this.camera,this.renderer.domElement):this.perspectiveControls=new Zs(this.camera,this.renderer.domElement):(this.perspectiveControls=new Zs(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Zs(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===Ks.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onKeyDown=(function(){let e=new I,t=new ye,n=new ye;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}})();onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Ys()}onMouseUp=(function(){let e=new ce;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Ys()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}})();onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}checkForFocalPointChange=(function(){let e=new ce,t=new I,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){let r=n[0].origin;t.copy(r).sub(this.camera.position),t.length()>G_&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(r),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Ys())}}})();getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;let t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){let i=a=>{a.saveState(),a.reset()},r=this.controls,o=e?this.orthographicControls:this.perspectiveControls;i(o),i(r),o.target.copy(r.target),e?s.setCameraZoomFromPosition(n,t,r):s.setCameraPositionFromZoom(n,t,o),this.controls=o,this.camera.lookAt(this.controls.target)}}static setCameraPositionFromZoom=(function(){let e=new I;return function(t,n,i){let r=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(r).negate(),t.position.copy(i.target).add(e)}})();static setCameraZoomFromPosition=(function(){let e=new I;return function(t,n,i){let r=e.copy(i.target).sub(n.position).length();t.zoom=1/(r*.001)}})();updateSplatMesh=(function(){let e=new ce;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);let n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,r=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,o=this.focalAdjustment*r,a=1/o;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*o,i*o,this.camera.isOrthographicCamera,this.camera.zoom||1,a)}}})();adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){let n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);let n=t.format!==void 0&&t.format!==null?t.format:hf(e),i=s.isProgressivelyLoadable(n)&&t.progressiveLoad,r=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0,o=null;r&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));let a=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},c=(x,m,p)=>{if(r)if(p===bt.Downloading)if(x==100)this.loadingSpinner.setMessageForTask(o,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(o,"Downloading splats...");else{let _=m?`: ${m}`:"...";this.loadingSpinner.setMessageForTask(o,`Downloading${_}`)}else p===bt.Processing&&this.loadingSpinner.setMessageForTask(o,"Processing splats...")},l=!1,h=0,u=(x,m)=>{r&&((x&&i||m&&!i)&&(this.loadingSpinner.removeTask(o),!m&&!l&&this.loadingProgressBar.show()),i&&(m?(l=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(h)))},f=(x,m,p)=>{h=x,c(x,m,p),t.onProgress&&t.onProgress(x,m,p)},d=(x,m,p)=>{!i&&t.onProgress&&t.onProgress(0,"0%",bt.Processing);let _={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([x],[_],p,m&&r,r,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",bt.Processing),u(m,p)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,d.bind(this),f,a.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,r,o,a){let c=this.downloadSplatSceneToSplatBuffer(e,n,r,!1,void 0,t,a),l=jl(c.abortHandler);return c.then(h=>(this.removeSplatSceneDownloadPromise(c),i(h,!0,!0).then(()=>{l.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(h=>{o&&o(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(c),l.reject(this.updateError(h,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(c),this.setSplatSceneDownloadAndBuildPromise(l.promise),l.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,r,o,a){let c=0,l=!1,h=[],u=()=>{if(h.length>0&&!l&&!this.isDisposingOrDisposed()){l=!0;let m=h.shift();i(m.splatBuffer,m.firstBuild,m.finalBuild).then(()=>{l=!1,m.firstBuild?g.resolve():m.finalBuild&&(x.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),h.length>0&&pn(()=>u())})}},f=(m,p)=>{this.isDisposingOrDisposed()||(p||h.length===0||m.getSplatCount()>h[0].splatBuffer.getSplatCount())&&(h.push({splatBuffer:m,firstBuild:c===0,finalBuild:p}),c++,u())},d=this.downloadSplatSceneToSplatBuffer(e,n,r,!0,f,t,a),g=jl(d.abortHandler),x=jl();return this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(x.promise),d.then(()=>{this.removeSplatSceneDownloadPromise(d)}).catch(m=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(d);let p=this.updateError(m,"Viewer::addSplatScene -> Could not load one or more scenes");g.reject(p),o&&o(p)}),g.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");let i=e.length,r=[],o;t&&(this.loadingSpinner.removeAllTasks(),o=this.loadingSpinner.addTask("Downloading..."));let a=(u,f,d,g)=>{r[u]=f;let x=0;for(let m=0;m<i;m++)x+=r[m]||0;x=x/i,d=`${x.toFixed(2)}%`,t&&g===bt.Downloading&&this.loadingSpinner.setMessageForTask(o,x==100?"Download complete!":`Downloading: ${d}`),n&&n(x,d,g)},c=[],l=[];for(let u=0;u<e.length;u++){let f=e[u],d=f.format!==void 0&&f.format!==null?f.format:hf(f.path),g=this.downloadSplatSceneToSplatBuffer(f.path,f.splatAlphaRemovalThreshold,a.bind(this,u),!1,void 0,d,f.headers);c.push(g),l.push(g.promise)}let h=new Br((u,f)=>{Promise.all(l).then(d=>{t&&this.loadingSpinner.removeTask(o),n&&n(0,"0%",bt.Processing),this.addSplatBuffers(d,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",bt.Processing),this.clearSplatSceneDownloadAndBuildPromise(),u()})}).catch(d=>{t&&this.loadingSpinner.removeTask(o),this.clearSplatSceneDownloadAndBuildPromise(),f(this.updateError(d,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(h)})},u=>{for(let f of c)f.abort(u)});return this.addSplatSceneDownloadPromise(h),this.setSplatSceneDownloadAndBuildPromise(h),h}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,r=void 0,o,a){try{if(o===Ut.Splat||o===Ut.KSplat||o===Ut.Ply){let c=i?!1:this.optimizeSplatData;if(o===Ut.Splat)return hh.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,c,a);if(o===Ut.KSplat)return uh.loadFromURL(e,n,i,r,a);if(o===Ut.Ply)return ch.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,c,this.sphericalHarmonicsDegree,a)}else if(o===Ut.Spz)return lh.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,a)}catch(c){throw this.updateError(c,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===Ut.Splat||e===Ut.KSplat||e===Ut.Ply}addSplatBuffers=(function(){return function(e,t=[],n=!0,i=!0,r=!0,o=!1,a=!1,c=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let l=null,h=()=>{l!==null&&(this.loadingSpinner.removeTask(l),l=null)};return this.splatRenderReady=!1,new Promise(u=>{i&&(l=this.loadingSpinner.addTask("Processing splats...")),pn(()=>{if(this.isDisposingOrDisposed())u();else{let f=this.addSplatBuffersToMesh(e,t,n,r,o,c),d=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==d&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:f.centers.buffer,sceneIndexes:f.sceneIndexes.buffer,range:{from:f.from,to:f.to,count:f.count}}),(!this.sortWorker&&d>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(x=>{!this.sortWorker||!x?(this.splatRenderReady=!0,h(),u()):(a?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{h(),u()}))})})}},!0)})}})();addSplatBuffersToMesh=(function(){let e;return function(t,n,i=!0,r=!1,o=!1,a=!0){if(this.isDisposingOrDisposed())return;let c=[],l=[];o||(c=this.splatMesh.scenes.map(d=>d.splatBuffer)||[],l=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(d=>d):[]),c.push(...t),l.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);let h=d=>{if(this.isDisposingOrDisposed())return;let g=this.splatMesh.getSplatCount();r&&g>=W_&&!d&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},u=d=>{this.isDisposingOrDisposed()||d&&e&&(this.loadingSpinner.removeTask(e),e=null)},f=this.splatMesh.build(c,l,!0,i,h,u,a);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),f}})();setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{let n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),r=e.getMaxSplatCount();this.sortWorker=k_(r,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=o=>{if(o.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,o.data.splatRenderCount);else{let a=new Uint32Array(o.data.sortedIndexes.buffer,0,o.data.splatRenderCount);this.splatMesh.updateRenderIndexes(a,o.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=o.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(a=>{a()}),this.runAfterNextSort.length=0)}else if(o.data.sortCanceled)this.sortRunning=!1;else if(o.data.sortSetupPhase1Complete){this.logLevel>=$s.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(o.data.sortedIndexesBuffer,o.data.sortedIndexesOffset,r),this.sortWorkerIndexesToSort=new Uint32Array(o.data.indexesToSortBuffer,o.data.indexesToSortOffset,r),this.sortWorkerPrecomputedDistances=new n(o.data.precomputedDistancesBuffer,o.data.precomputedDistancesOffset,r),this.sortWorkerTransforms=new Float32Array(o.data.transformsBuffer,o.data.transformsOffset,nt.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(r),this.sortWorkerPrecomputedDistances=new n(r),this.sortWorkerTransforms=new Float32Array(nt.MaxScenes*16));for(let a=0;a<i;a++)this.sortWorkerIndexesToSort[a]=a;if(this.sortWorker.maxSplatCount=r,this.logLevel>=$s.Info){console.log("Sorting web worker ready.");let a=this.splatMesh.getSplatDataTextures(),c=a.covariances.size,l=a.centerColors.size;console.log("Covariances texture size: "+c.x+" x "+c.y),console.log("Centers/colors texture size: "+l.x+" x "+l.y)}t()}}})}updateError(e,t){return e instanceof ha?e:e instanceof er?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,r)=>{let o;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),o=this.loadingSpinner.addTask("Removing splat scene..."));let a=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(o))},c=h=>{a(),this.splatSceneRemovalPromise=null,h?r(h):i()},l=()=>this.isDisposingOrDisposed()?(c(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(l())return;let h=[],u=[],f=[];for(let d=0;d<this.splatMesh.scenes.length;d++){let g=!1;for(let x of e)if(x===d){g=!0;break}if(!g){let x=this.splatMesh.scenes[d];h.push(x.splatBuffer),u.push(this.splatMesh.sceneOptions[d]),f.push({position:x.position.clone(),quaternion:x.quaternion.clone(),scale:x.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=rs.Instant,this.createSplatMesh(),this.addSplatBuffers(h,u,!0,!1,!0).then(()=>{l()||(a(),this.splatMesh.scenes.forEach((d,g)=>{d.position.copy(f[g].position),d.quaternion.copy(f[g].quaternion),d.scale.copy(f[g].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(l()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,c()})}))}).catch(d=>{c(d)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){let i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}shouldRender=(function(){let e=0,t=new I,n=new $e,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let r=!1,o=!1;if(this.camera){let a=this.camera.position,c=this.camera.quaternion;o=Math.abs(a.x-t.x)>i||Math.abs(a.y-t.y)>i||Math.abs(a.z-t.z)>i||Math.abs(c.x-n.x)>i||Math.abs(c.y-n.y)>i||Math.abs(c.z-n.z)>i||Math.abs(c.w-n.w)>i}return r=this.renderMode!==Dr.Never&&(e===0||this.splatMesh.visibleRegionChanging||o||this.renderMode===Dr.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,r}})();render=(function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;let e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}})();update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&s.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateFPS=(function(){let e=Ys(),t=0;return function(){if(this.consecutiveRenderFrames>Y_){let n=Ys();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}})();updateForRendererSizeChanges=(function(){let e=new ce,t=new ce,n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}})();timingSensitiveUpdates=(function(){let e;return function(){let t=Ys();e||(e=t);let n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}})();updateCameraTransition=(function(){let e=new I,t=new I,n=new I;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();let r=Math.acos(t.dot(n)),a=(r/(Math.PI/3)*.65+.3)/r*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,a),this.camera.lookAt(e),this.controls.target.copy(e),a>=1&&(this.transitioningCameraTarget=!1)}}})();updateFocusMarker=(function(){let e=new ce,t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);let i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0),r=Math.min(i+X_*n,1);this.sceneHelper.setFocusMarkerOpacity(r),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let r=Math.max(i-q_*n,0);this.sceneHelper.setFocusMarkerOpacity(r),r===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}})();updateMeshCursor=(function(){let e=[],t=new ce;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}})();updateInfoPanel=(function(){let e=new ce;return function(){if(!this.showInfo)return;let t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);let n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,r=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,r,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}})();updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}runSplatSort=(function(){let e=new ye,t=[],n=new I(0,0,-1),i=new I(0,0,-1),r=new I,o=new I,a=[],c=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(l=!1,h=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let u=0,f=0,d=!1,g=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),u=i.dot(n),f=o.copy(this.camera.position).sub(r).length(),!l&&!this.splatMesh.dynamicMode&&a.length===0&&(u<=.99&&(d=!0),f>=1&&(g=!0),!d&&!g))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:x,shouldSortAll:m}=this.gatherSceneNodesForSort();m=m||h,this.splatRenderCount=x,e.copy(this.camera.matrixWorld).invert();let p=this.perspectiveCamera||this.camera;e.premultiply(p.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let _=Promise.resolve(!0);return this.gpuAcceleratedSort&&(a.length<=1||a.length%2===0)&&(_=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),_.then(()=>{if(a.length===0)if(this.splatMesh.dynamicMode||m)a.push(this.splatRenderCount);else{for(let T of c)if(u<T.angleThreshold){for(let S of T.sortFractions)a.push(Math.floor(this.splatRenderCount*S));break}a.push(this.splatRenderCount)}let y=Math.min(a.shift(),this.splatRenderCount);this.splatSortCount=y,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;let A={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:y,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(A.indexesToSort=this.sortWorkerIndexesToSort,A.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(A.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(T=>{this.sortPromiseResolver=T}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(T=>{this.sortWorker.postMessage(T)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:A}),a.length===0&&(r.copy(this.camera.position),n.copy(i)),!0}),_}})();gatherSceneNodesForSort=(function(){let e=[],t=null,n=new I,i=new I,r=new I,o=new ye,a=new ye,c=new ye,l=new I,h=new I(0,0,-1),u=new I,f=d=>u.copy(d.max).sub(d.min).length();return function(d=!1){this.getRenderDimensions(l);let g=l.y/2/Math.tan(this.camera.fov/2*Pi.DEG2RAD),x=Math.atan(l.x/2/g),m=Math.atan(l.y/2/g),p=Math.cos(x),_=Math.cos(m),y=this.splatMesh.getSplatTree();if(y){a.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||a.multiply(this.splatMesh.matrixWorld);let A=0,T=0;for(let v=0;v<y.subTrees.length;v++){let w=y.subTrees[v];o.copy(a),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(v,c),o.multiply(c));let E=w.nodesWithIndexes.length;for(let M=0;M<E;M++){let C=w.nodesWithIndexes[M];if(!C.data||!C.data.indexes||C.data.indexes.length===0)continue;r.copy(C.center).applyMatrix4(o);let B=r.length();r.normalize(),n.copy(r).setX(0).normalize(),i.copy(r).setY(0).normalize();let F=h.dot(i),U=h.dot(n),N=f(C),L=U<_-.6,X=F<p-.6;!d&&(X||L)&&B>N||(T+=C.data.indexes.length,e[A]=C,C.data.distanceToNode=B,A++)}}e.length=A,e.sort((v,w)=>v.data.distanceToNode<w.data.distanceToNode?-1:1);let S=T*nt.BytesPerInt;for(let v=0;v<A;v++){let w=e[v],E=w.data.indexes.length,M=E*nt.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,S-M,E).set(w.data.indexes),S-=M}return{splatRenderCount:T,shouldSortAll:!1}}else{let A=this.splatMesh.getSplatCount();if(!t||t.length!==A){t=new Uint32Array(A);for(let T=0;T<A;T++)t[T]=T}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:A,shouldSortAll:!0}}}})();getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};var pa=new Map;if(typeof URL<"u"&&typeof URL.createObjectURL=="function"){let s=URL.createObjectURL.bind(URL),e=URL.revokeObjectURL.bind(URL);URL.createObjectURL=t=>{let n=s(t);return t instanceof Blob&&pa.set(n,t),n},URL.revokeObjectURL=t=>(pa.delete(t),e(t))}if(typeof window<"u"&&typeof window.fetch=="function"){let s=window.fetch.bind(window);window.fetch=async(e,t)=>{let n=typeof e=="string"?e:e&&e.url||"";if(n.startsWith("blob:")&&pa.has(n)){let i=pa.get(n);return new Response(i,{status:200,headers:{"Content-Type":i.type||"application/octet-stream"}})}return s(e,t)}}var _n=document.querySelector("main"),ui=document.querySelector("#status"),li=document.querySelector("#reset"),Q_=document.querySelector("#controls"),Ur=document.querySelector("#stats"),Rf=new URL(location.href).searchParams,mn=(Rf.get("format")||"").trim().replace(/^\./,"").toLowerCase(),Or=(Rf.get("role")||"gaussian").trim().toLowerCase(),Cf={ply:Ut.Ply,splat:Ut.Splat,spz:Ut.Spz};function hi(){let s=Math.floor(_n.clientWidth||window.innerWidth||0),e=Math.floor(_n.clientHeight||window.innerHeight||0);return{w:s,h:e}}async function Nh(s=3e3){let e=hi();return e.w>8&&e.h>8?e:new Promise(t=>{let n=!1,i=()=>{if(n)return;n=!0,r&&r.disconnect();let a=hi();t({w:Math.max(320,a.w),h:Math.max(320,a.h)})},r=null;typeof ResizeObserver<"u"&&(r=new ResizeObserver(()=>{let a=hi();a.w>8&&a.h>8&&i()}),r.observe(_n));let o=()=>{if(n)return;let a=hi();a.w>8&&a.h>8?i():requestAnimationFrame(o)};requestAnimationFrame(o),setTimeout(i,s)})}function Hr(s,e){if(!Ur)return;Ur.innerHTML="";let t=document.createElement("strong");t.textContent=s,Ur.appendChild(t),e&&Ur.appendChild(document.createTextNode(" \xB7 "+e)),Ur.hidden=!1}function os(s,e){let t=document.createElement("button");return t.type="button",t.textContent=s,t.addEventListener("click",()=>e(t)),Q_.appendChild(t),t}function Nr(s){return s>=1e6?(s/1e6).toFixed(2)+"M":s>=1e3?(s/1e3).toFixed(1)+"k":String(s)}function Hh(s){ui.textContent=s||"L\u2019actiu no es pot renderitzar al visor m\xF2bil. Pots exportar-lo o pujar-lo a MosaicEarth.",ui.hidden=!1,li.disabled=!0,document.body.dataset.viewer="error"}function K_(){try{return new Ki({antialias:!0,alpha:!1})}catch{return new Ki({antialias:!1,alpha:!1})}}function j_(s){s.updateMatrixWorld(!0);let e=new Ct().setFromObject(s),t=[],n=[],i=[],r=new I;if(s.traverse(l=>{let h=l.geometry,u=h&&h.getAttribute&&h.getAttribute("position");if(!u||u.count<=0)return;let f=Math.max(1,Math.floor(u.count/3e3));for(let d=0;d<u.count;d+=f)r.fromBufferAttribute(u,d).applyMatrix4(l.matrixWorld),Number.isFinite(r.x)&&Number.isFinite(r.y)&&Number.isFinite(r.z)&&(t.push(r.x),n.push(r.y),i.push(r.z))}),t.length>=16){t.sort((m,p)=>m-p),n.sort((m,p)=>m-p),i.sort((m,p)=>m-p);let l=(m,p)=>m[Math.min(m.length-1,Math.max(0,Math.floor((m.length-1)*p)))],h=new I(.5*(l(t,.12)+l(t,.88)),.5*(l(n,.12)+l(n,.88)),.5*(l(i,.12)+l(i,.88))),u=new I(l(t,.92)-l(t,.08),l(n,.92)-l(n,.08),l(i,.92)-l(i,.08)),f=e.getSize(new I),d=Math.max(.02,u.x,u.y,u.z),g=Math.max(d,f.x,f.y,f.z),x=l(n,.03);return{center:h,coreSize:u,coreExtent:d,fullExtent:g,floorY:x}}let o=e.getCenter(new I),a=e.getSize(new I),c=Math.max(.02,a.x,a.y,a.z);return{center:o,coreSize:a,coreExtent:c,fullExtent:c,floorY:e.min.y}}async function zh(){let s=await Nh(),e=new Hs;e.background=new Ce(593675);let t=Math.max(64,s.w),n=Math.max(64,s.h),i=new Mt(48,t/n,.01,4e3),r=K_();r.outputColorSpace=_t,r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(t,n),r.domElement.addEventListener("webglcontextlost",p=>{p.preventDefault(),Hh("Context WebGL perdut per l\xEDmit de mem\xF2ria gr\xE0fica.")}),_n.innerHTML="",_n.appendChild(r.domElement);let o=new zo(16777215,1912355,1.35);e.add(o);let a=new es(16777215,1.2);a.position.set(5,10,7),e.add(a);let c=new es(14283492,.5);c.position.set(-6,4,-5),e.add(c),e.add(new Go(16777215,.45));let l=new ea(i,r.domElement);l.enableDamping=!0,l.dampingFactor=.08;let h=0,u=()=>{h=requestAnimationFrame(u),l.update(),r.render(e,i)};u();let f=()=>{let p=hi();p.w<=4||p.h<=4||(i.aspect=p.w/p.h,i.updateProjectionMatrix(),r.setSize(p.w,p.h))};window.addEventListener("resize",f);let d=null;typeof ResizeObserver<"u"&&(d=new ResizeObserver(f),d.observe(_n));let g=null,x=!1;return{scene:e,frameObject:p=>{let{center:_,coreSize:y,coreExtent:A,fullExtent:T,floorY:S}=j_(p);g&&e.remove(g);let v=Math.max(.25,Math.max(y.x,y.z)*1.45);return g=new qo(v,16,4943413,1846049),g.position.set(_.x,S-A*.005,_.z),e.add(g),x||(x=!0,os("Graella",E=>{g&&(g.visible=!g.visible,E.classList.toggle("active",g.visible))}).classList.add("active")),f(),i.near=Math.max(5e-4,A*.001),i.far=Math.max(60,T*250),i.position.copy(_).add(new I(.66*A,.56*A,1.18*A)),i.updateProjectionMatrix(),l.target.copy(_),l.update(),l.saveState(),li.onclick=()=>{l.reset(),l.update()},li.disabled=!1,ui.hidden=!0,document.body.dataset.viewer="ready",{extent:A}},stop:()=>{cancelAnimationFrame(h),d&&d.disconnect()}}}async function Z_(){ui.textContent="Carregant malla 3D texturitzada (.glb)\u2026";let s=await zh(),e=await fetch("/model/scene."+mn);if(!e.ok)throw new Error("No s'ha pogut llegir el fitxer GLB ("+e.status+")");let t=await e.arrayBuffer(),i=await new ta().parseAsync(t,"");if(!i||!i.scene)throw new Error("Fitxer GLB buit");let r=0,o=0,a=[];i.scene.traverse(l=>{if(l.isMesh&&l.geometry){let h=l.geometry.getAttribute("position");h&&(o+=h.count),l.geometry.index?r+=Math.floor(l.geometry.index.count/3):h&&(r+=Math.floor(h.count/3)),l.material&&(Array.isArray(l.material)?a.push(...l.material):a.push(l.material))}}),s.scene.add(i.scene),s.frameObject(i.scene);let c=!1;os("Filferro",l=>{c=!c;for(let h of a)h.wireframe=c;l.classList.toggle("active",c)}),Hr("MALLA 3D",`${Nr(r)} tris \xB7 ${Nr(o)} v\xE8rtexs`)}async function J_(){ui.textContent="Carregant n\xFAvol de punts 3D (.ply)\u2026";let s=await zh(),e=await fetch("/model/scene."+mn);if(!e.ok)throw new Error("No s'ha pogut llegir el n\xFAvol PLY ("+e.status+")");let t=await e.arrayBuffer(),i=new ia().parse(t),r=i.getAttribute("position");if(!r||r.count<=0)throw new Error("N\xFAvol PLY buit");i.computeBoundingBox();let o=i.boundingBox,a=o?o.getSize(new I):new I(1,1,1),c=Math.max(.02,a.x,a.y,a.z),l=!!i.getAttribute("color"),h=Math.max(c*.006,.004),u=new ji({size:h,vertexColors:l,color:l?16777215:10079232,sizeAttenuation:!0}),f=new Zi(i,u);f.rotation.x=-Math.PI/2,s.scene.add(f);let{extent:d}=s.frameObject(f);h=Math.max(d*.0075,.004),u.size=h,os("Punts \u2212",()=>{h=Math.max(d*.001,h*.75),u.size=h}),os("Punts +",()=>{h=Math.min(d*.08,h*1.33),u.size=h}),Hr("N\xDAVOL PLY",`${Nr(r.count)} punts`)}function $_(s){let e=new DataView(s);if(s.byteLength<8)return null;let t=e.getUint8(0)===73&&e.getUint8(1)===73,n=e.getUint8(0)===77&&e.getUint8(1)===77;if(!t&&!n)return null;let i=p=>e.getUint16(p,t),r=p=>e.getUint32(p,t),o=r(4);if(o+2>s.byteLength)return null;let a=i(o),c=0,l=0,h=1,u=8,f=1,d=1,g=0;for(let p=0;p<a;p++){let _=o+2+p*12;if(_+12>s.byteLength)break;let y=i(_),A=i(_+2),T=r(_+4),S=_+8,v=()=>A===3?i(S):r(S);y===256?c=v():y===257?l=v():y===258?u=A===3&&T>2?i(r(S)):i(S):y===259?f=v():y===273?g=T===1?v():r(r(S)):y===277?h=v():y===339&&(d=A===3&&T>2?i(r(S)):i(S))}if(f!==1||c<=0||l<=0||g<=0)return null;let x=new ImageData(c,l),m=x.data;if(u===8&&(h===3||h===4)){let p=new Uint8Array(s,g,Math.min(s.byteLength-g,c*l*h));for(let _=0,y=0;_<c*l&&y+h<=p.length;_++,y+=h)m[_*4]=p[y],m[_*4+1]=p[y+1],m[_*4+2]=p[y+2],m[_*4+3]=h===4?p[y+3]:255;return x}if(u===32&&d===3&&h===1){let p=1/0,_=-1/0,y=c*l;for(let T=0;T<y;T++){let S=e.getFloat32(g+T*4,t);Number.isFinite(S)&&S>-9e3&&(S<p&&(p=S),S>_&&(_=S))}let A=Math.max(.01,_-p);for(let T=0;T<y;T++){let S=e.getFloat32(g+T*4,t);if(!Number.isFinite(S)||S<=-9e3)m[T*4+3]=0;else{let v=Math.max(0,Math.min(1,(S-p)/A));m[T*4]=Math.round(35+185*v),m[T*4+1]=Math.round(95+135*Math.sin(Math.PI*v)),m[T*4+2]=Math.round(70+80*(1-v)),m[T*4+3]=255}}return x}return null}async function eS(){await Nh(),ui.textContent="Carregant capa r\xE0ster GeoTIFF\u2026";let s=null;try{let d=await fetch("/model/preview.png");if(d.ok){let g=await d.blob();s=await createImageBitmap(g)}}catch{}if(!s){let d=await fetch("/model/scene."+mn);if(!d.ok)throw new Error("Missing raster");let g=await d.arrayBuffer(),x=$_(g);if(!x)throw new Error("Unsupported TIFF compression");s=await createImageBitmap(x)}let e=document.createElement("canvas");e.className="raster-view",_n.innerHTML="",_n.appendChild(e);let t=e.getContext("2d"),n=1,i=0,r=0,o=!0,a=()=>{let d=hi(),g=Math.max(64,d.w),x=Math.max(64,d.h);e.width=g*(window.devicePixelRatio||1),e.height=x*(window.devicePixelRatio||1),n=Math.min(e.width/s.width,e.height/s.height)*.9,i=(e.width-s.width*n)*.5,r=(e.height-s.height*n)*.5,c()},c=()=>{if(t.setTransform(1,0,0,1,0,0),t.fillStyle="#090f0b",t.fillRect(0,0,e.width,e.height),o){t.strokeStyle="rgba(153, 204, 0, 0.08)",t.lineWidth=1;let d=48*(window.devicePixelRatio||1);for(let g=i%d;g<e.width;g+=d)t.beginPath(),t.moveTo(g,0),t.lineTo(g,e.height),t.stroke();for(let g=r%d;g<e.height;g+=d)t.beginPath(),t.moveTo(0,g),t.lineTo(e.width,g),t.stroke()}t.imageSmoothingEnabled=n<2.5,t.setTransform(n,0,0,n,i,r),t.drawImage(s,0,0),t.strokeStyle="rgba(153, 204, 0, 0.5)",t.lineWidth=Math.max(1/n,.5),t.strokeRect(0,0,s.width,s.height)},l=new Map,h=0;e.addEventListener("pointerdown",d=>{e.setPointerCapture(d.pointerId),l.set(d.pointerId,{x:d.clientX,y:d.clientY})}),e.addEventListener("pointermove",d=>{if(!l.has(d.pointerId))return;let g=window.devicePixelRatio||1,x=l.get(d.pointerId),m={x:d.clientX,y:d.clientY};if(l.set(d.pointerId,m),l.size===1)i+=(m.x-x.x)*g,r+=(m.y-x.y)*g,c();else if(l.size===2){let p=Array.from(l.values()),_=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);if(h>0){let y=_/h,A=(p[0].x+p[1].x)*.5*g,T=(p[0].y+p[1].y)*.5*g,S=Math.max(.08,Math.min(40,n*y));i=A-(A-i)/n*S,r=T-(T-r)/n*S,n=S,c()}h=_}});let u=d=>{l.delete(d.pointerId),l.size<2&&(h=0)};e.addEventListener("pointerup",u),e.addEventListener("pointercancel",u),e.addEventListener("wheel",d=>{d.preventDefault();let g=window.devicePixelRatio||1,x=d.offsetX*g,m=d.offsetY*g,p=d.deltaY<0?1.18:.85,_=Math.max(.08,Math.min(40,n*p));i=x-(x-i)/n*_,r=m-(m-r)/n*_,n=_,c()},{passive:!1}),os("Zoom +",()=>{n=Math.min(40,n*1.35),c()}),os("Zoom \u2212",()=>{n=Math.max(.08,n*.74),c()}),window.addEventListener("resize",a),li.onclick=a,li.disabled=!1,a(),ui.hidden=!0,document.body.dataset.viewer="ready",Hr(Or==="dsm"?"MDS GEOTIFF":"ORTOFOTO GEOTIFF",`${s.width} \xD7 ${s.height} px`)}async function tS(){let s=await fetch("/model/scene."+mn);if(!s.ok)throw new Error("No s'ha pogut llegir el fitxer Gaussian");let e=await s.arrayBuffer(),t=new Uint8Array(e),n=new DataView(e),i=0,r=null,o=null,a=null;if(mn==="splat"){i=Math.floor(e.byteLength/32),r=new Float32Array(i*3),o=new Float32Array(i*4),a=new Float32Array(i);for(let d=0;d<i;d++){let g=d*32;r[d*3]=n.getFloat32(g,!0),r[d*3+1]=n.getFloat32(g+4,!0),r[d*3+2]=n.getFloat32(g+8,!0);let x=n.getFloat32(g+12,!0),m=n.getFloat32(g+16,!0),p=n.getFloat32(g+20,!0);a[d]=Math.max(.002,Math.min(.25,(x+m+p)/3)),o[d*4]=t[g+24]/255,o[d*4+1]=t[g+25]/255,o[d*4+2]=t[g+26]/255,o[d*4+3]=t[g+27]/255}}else if(mn==="ply"){let d=Math.min(t.length,16384),g=-1,x=`end_header
`,m=new TextDecoder("ascii").decode(t.subarray(0,d)),p=m.indexOf(x),_=m.indexOf(`end_header\r
`);if(_>=0?g=_+12:p>=0&&(g=p+11),g<0)throw new Error("Invalid Gaussian PLY header");let y=m.slice(0,g).split(/\r?\n/).map(K=>K.trim()),A=y.find(K=>K.startsWith("element vertex "));if(i=A?parseInt(A.split(/\s+/)[2],10):0,i<=0)throw new Error("Empty Gaussian PLY");let T={},S=0,v=!1,w={float:4,float32:4,double:8,uchar:1,uint8:1,char:1,int8:1,short:2,ushort:2,int:4,uint:4};for(let K of y){if(K.startsWith("element vertex ")){v=!0;continue}if((K.startsWith("element ")||K==="end_header")&&v)break;if(v&&K.startsWith("property ")){let[,se,Ee]=K.split(/\s+/);T[Ee]=S,S+=w[se]||4}}r=new Float32Array(i*3),o=new Float32Array(i*4),a=new Float32Array(i);let E=.28209479177387814,M=T.x??0,C=T.y??4,B=T.z??8,F=T.opacity,U=T.scale_0,N=T.scale_1,L=T.scale_2,X=T.f_dc_0,H=T.f_dc_1,W=T.f_dc_2;for(let K=0;K<i;K++){let se=g+K*S;if(se+S>e.byteLength){i=K;break}r[K*3]=n.getFloat32(se+M,!0),r[K*3+1]=n.getFloat32(se+C,!0),r[K*3+2]=n.getFloat32(se+B,!0);let Ee=F!==void 0?n.getFloat32(se+F,!0):2,Te=1/(1+Math.exp(-Math.max(-12,Math.min(12,Ee)))),j=U!==void 0?Math.exp(Math.max(-10,Math.min(2,n.getFloat32(se+U,!0)))):.015,Z=N!==void 0?Math.exp(Math.max(-10,Math.min(2,n.getFloat32(se+N,!0)))):.015,re=L!==void 0?Math.exp(Math.max(-10,Math.min(2,n.getFloat32(se+L,!0)))):.015;a[K]=Math.max(.002,Math.min(.18,(j+Z+re)/3));let te=X!==void 0?Math.max(0,Math.min(1,.5+E*n.getFloat32(se+X,!0))):.7,ge=H!==void 0?Math.max(0,Math.min(1,.5+E*n.getFloat32(se+H,!0))):.8,Se=W!==void 0?Math.max(0,Math.min(1,.5+E*n.getFloat32(se+W,!0))):.7;o[K*4]=te,o[K*4+1]=ge,o[K*4+2]=Se,o[K*4+3]=Te}}else throw new Error("Unsupported fallback format");let c=await zh(),l=new St;l.setAttribute("position",new tt(r.subarray(0,i*3),3)),l.setAttribute("splatColor",new tt(o.subarray(0,i*4),4)),l.setAttribute("splatScale",new tt(a.subarray(0,i),1));let h=Math.max(300,hi().h*Math.min(window.devicePixelRatio||1,2)),u=new Lt({transparent:!0,depthWrite:!0,depthTest:!0,uniforms:{uViewportScale:{value:h},uGain:{value:2.2}},vertexShader:`
            attribute vec4 splatColor;
            attribute float splatScale;
            uniform float uViewportScale;
            uniform float uGain;
            varying vec4 vColor;
            void main() {
                vColor = splatColor;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                float dist = max(0.05, -mvPosition.z);
                gl_PointSize = clamp((splatScale * uGain * uViewportScale) / dist, 1.5, 64.0);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,fragmentShader:`
            varying vec4 vColor;
            void main() {
                vec2 c = gl_PointCoord * 2.0 - 1.0;
                float r2 = dot(c, c);
                if (r2 > 1.0) discard;
                float gauss = exp(-2.2 * r2);
                float a = vColor.a * gauss;
                if (a < 0.08) discard;
                gl_FragColor = vec4(vColor.rgb, a);
            }
        `}),f=new Zi(l,u);f.rotation.x=-Math.PI/2,c.scene.add(f),c.frameObject(f),Hr("3D GAUSSIAN SPLAT",`${Nr(i)} splats`)}async function nS(){if(!Object.prototype.hasOwnProperty.call(Cf,mn))throw new Error("Format");let s=await Nh();ui.textContent="Carregant el model 3D Gaussian Splat\u2026",_n.innerHTML="";let e=null;try{e=new da({rootElement:_n,cameraUp:[0,1,0],initialCameraPosition:[0,0,5],initialCameraLookAt:[0,0,0],sharedMemoryForWorkers:!1,gpuAcceleratedSort:!1,enableSIMDInSort:!1,integerBasedSort:!1,halfPrecisionCovariancesOnGPU:!0,ignoreDevicePixelRatio:!1,sphericalHarmonicsDegree:1,sceneRevealMode:rs.Instant,renderMode:Dr.Always}),e.renderer.setClearColor(new Ce(593675),1),e.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.renderer.setSize(Math.max(64,s.w),Math.max(64,s.h)),e.camera.aspect=Math.max(64,s.w)/Math.max(64,s.h),e.camera.updateProjectionMatrix(),typeof ResizeObserver<"u"&&new ResizeObserver(()=>{let m=hi();m.w>8&&m.h>8&&e&&e.camera&&e.renderer&&(e.camera.aspect=m.w/m.h,e.camera.updateProjectionMatrix(),e.renderer.setSize(m.w,m.h),e.forceRenderNextFrame())}).observe(_n),e.renderer.domElement.addEventListener("webglcontextlost",x=>{x.preventDefault(),Hh("Context WebGL perdut per l\xEDmit de mem\xF2ria gr\xE0fica.")}),await e.addSplatScene("/model/scene."+mn,{format:Cf[mn],rotation:[-Math.SQRT1_2,0,0,Math.SQRT1_2],progressiveLoad:!1,showLoadingUI:!1});let t=e.splatMesh.getSplatCount();if(t<=0)throw new Error("Empty model");let n=[[],[],[]],i=new I,r=Math.max(1,Math.floor(t/4096));for(let x=0;x<t;x+=r)e.splatMesh.getSplatCenter(x,i),Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z)&&(n[0].push(i.x),n[1].push(i.y),n[2].push(i.z));if(!n[0].length)throw new Error("Invalid bounds");for(let x of n)x.sort((m,p)=>m-p);let o=(x,m)=>x[Math.min(x.length-1,Math.max(0,Math.floor((x.length-1)*m)))],a=new I(...n.map(x=>.5*(o(x,.15)+o(x,.85)))),c=Math.max(.05,...n.map(x=>o(x,.88)-o(x,.12))),l=Math.max(c,...n.map(x=>o(x,.99)-o(x,.01))),h=a.clone().add(new I(.58,.42,1.08).multiplyScalar(c)),u=hi();u.w>8&&u.h>8&&(e.camera.aspect=u.w/u.h),e.camera.near=Math.max(.001,c*.001),e.camera.far=Math.max(60,l*180),e.camera.updateProjectionMatrix(),e.camera.position.copy(h),e.controls.target.copy(a),e.controls.update(),e.controls.saveState();let f=async()=>{e.sortPromise&&await e.sortPromise,e.camera.updateMatrixWorld(),await e.runSplatSort(!0,!0),e.sortPromise&&await e.sortPromise,e.forceRenderNextFrame()};e.start(),await f();let d=[[0,1,0],[0,-1,0],[0,0,1]],g=0;os("Gira eix",async()=>{g=(g+1)%d.length,e.camera.up.set(...d[g]),e.controls.update(),await f()}),li.onclick=async()=>{li.disabled=!0,g=0,e.camera.up.set(0,1,0),e.controls.reset();try{await f()}finally{li.disabled=!1}},li.disabled=!1,ui.hidden=!0,document.body.dataset.viewer="ready",document.body.dataset.splats=String(t),Hr("3D GAUSSIAN SPLAT",`${Nr(t)} splats`)}catch(t){console.warn("Primary Gaussian viewer fallback triggered:",t);try{e&&await e.dispose()}catch{}_n.innerHTML="",await tS()}}async function iS(){mn==="glb"||Or==="mesh"?await Z_():mn==="tif"||mn==="tiff"||Or==="orthophoto"||Or==="dsm"?await eS():mn==="ply"&&Or==="pointcloud"?await J_():await nS()}iS().catch(s=>{console.error(s);let e=s&&s.message?` (${s.message})`:"";Hh(`L\u2019actiu no s\u2019ha pogut mostrar al visor m\xF2bil${e}.`)});})();

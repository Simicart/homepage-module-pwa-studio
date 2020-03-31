/*!
 * @version v5.0.1-alpha.1-0-gb47e3439-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3svd":function(e,t,o){e.exports=o("uwVh")},"4bAy":function(e,t,o){var i=o("zm0f"),a=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||function fallback(e){var t=+new Date,o=Math.max(0,16-(t-n)),i=setTimeout(e,o)
return n=t,i},n=+new Date
var s=i.cancelAnimationFrame||i.webkitCancelAnimationFrame||i.mozCancelAnimationFrame||clearTimeout
Function.prototype.bind&&(a=a.bind(i),s=s.bind(i)),(e.exports=a).cancel=s},"6Nim":function(e,t,o){"use strict"
o.r(t),o.d(t,"default",function(){return jarallaxElement})
var i=o("NyMY"),a=o.n(i)
function jarallaxElement(e=a.a.jarallax){if(void 0===e)return
const t=e.constructor;["initImg","canInitParallax","init","destroy","clipContainer","coverImage","isVisible","onScroll","onResize"].forEach(e=>{const o=t.prototype[e]
t.prototype[e]=function(){const t=this,i=arguments||[]
if("initImg"===e&&null!==t.$item.getAttribute("data-jarallax-element")&&(t.options.type="element",t.pureOptions.speed=t.$item.getAttribute("data-jarallax-element")||t.pureOptions.speed),"element"!==t.options.type)return o.apply(t,i)
switch(t.pureOptions.threshold=t.$item.getAttribute("data-threshold")||"",e){case"init":const a=t.pureOptions.speed.split(" ")
t.options.speed=t.pureOptions.speed||0,t.options.speedY=a[0]?parseFloat(a[0]):0,t.options.speedX=a[1]?parseFloat(a[1]):0
const n=t.pureOptions.threshold.split(" ")
t.options.thresholdY=n[0]?parseFloat(n[0]):null,t.options.thresholdX=n[1]?parseFloat(n[1]):null,o.apply(t,i)
const s=t.$item.getAttribute("data-jarallax-original-styles")
return s&&t.$item.setAttribute("style",s),!0
case"onResize":const l=t.css(t.$item,"transform")
t.css(t.$item,{transform:""})
const r=t.$item.getBoundingClientRect()
t.itemData={width:r.width,height:r.height,y:r.top+t.getWindowData().y,x:r.left},t.css(t.$item,{transform:l})
break
case"onScroll":const p=t.getWindowData(),d=(p.y+p.height/2-t.itemData.y-t.itemData.height/2)/(p.height/2),m=d*t.options.speedY,c=d*t.options.speedX
let u=m,y=c
null!==t.options.thresholdY&&m>t.options.thresholdY&&(u=0),null!==t.options.thresholdX&&c>t.options.thresholdX&&(y=0),t.css(t.$item,{transform:`translate3d(${y}px,${u}px,0)`})
break
case"initImg":case"isVisible":case"clipContainer":case"coverImage":return!0}return o.apply(t,i)}})}},NyMY:function(e,t,o){(function(t){var o
o="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=o}).call(this,o("fRV1"))},PNuo:function(e,t,o){"use strict"
o.r(t),o.d(t,"default",function(){return jarallaxVideo})
var i=o("3svd"),a=o.n(i),n=o("NyMY"),s=o.n(n)
function jarallaxVideo(e=s.a.jarallax){if(void 0===e)return
const t=e.constructor,o=t.prototype.onScroll
t.prototype.onScroll=function(){const e=this
o.apply(e),!e.isVideoInserted&&e.video&&(!e.options.videoLazyLoading||e.isElementInViewport)&&!e.options.disableVideo()&&(e.isVideoInserted=!0,e.video.getVideo(t=>{const o=t.parentNode
e.css(t,{position:e.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",margin:0,zIndex:-1}),e.$video=t,e.image.$container.appendChild(t),o.parentNode.removeChild(o)}))}
const i=t.prototype.coverImage
t.prototype.coverImage=function(){const e=this,t=i.apply(e),o=!!e.image.$item&&e.image.$item.nodeName
if(t&&e.video&&o&&("IFRAME"===o||"VIDEO"===o)){let i=t.image.height,a=i*e.image.width/e.image.height,n=(t.container.width-a)/2,s=t.image.marginTop
t.container.width>a&&(i=(a=t.container.width)*e.image.height/e.image.width,n=0,s+=(t.image.height-i)/2),"IFRAME"===o&&(i+=400,s-=200),e.css(e.$video,{width:`${a}px`,marginLeft:`${n}px`,height:`${i}px`,marginTop:`${s}px`})}return t}
const n=t.prototype.initImg
t.prototype.initImg=function(){const e=this,t=n.apply(e)
return e.options.videoSrc||(e.options.videoSrc=e.$item.getAttribute("data-jarallax-video")||null),e.options.videoSrc?(e.defaultInitImgResult=t,!0):t}
const l=t.prototype.canInitParallax
t.prototype.canInitParallax=function(){const e=this,t=l.apply(e)
if(!e.options.videoSrc)return t
const o=new a.a(e.options.videoSrc,{autoplay:!0,loop:e.options.videoLoop,showContols:!1,startTime:e.options.videoStartTime||0,endTime:e.options.videoEndTime||0,mute:e.options.videoVolume?0:1,volume:e.options.videoVolume||0})
if(o.isValid())if(t){if(o.on("ready",()=>{if(e.options.videoPlayOnlyVisible){const t=e.onScroll
e.onScroll=function(){t.apply(e),(e.options.videoLoop||!e.options.videoLoop&&!e.videoEnded)&&(e.isVisible()?o.play():o.pause())}}else o.play()}),o.on("started",()=>{e.image.$default_item=e.image.$item,e.image.$item=e.$video,e.image.width=e.video.videoWidth||1280,e.image.height=e.video.videoHeight||720,e.coverImage(),e.clipContainer(),e.onScroll(),e.image.$default_item&&(e.image.$default_item.style.display="none")}),o.on("ended",()=>{e.videoEnded=!0,e.options.videoLoop||e.image.$default_item&&(e.image.$item=e.image.$default_item,e.image.$item.style.display="block",e.coverImage(),e.clipContainer(),e.onScroll())}),e.video=o,!e.defaultInitImgResult)return e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7","local"===o.type||(o.getImageURL(t=>{e.image.bgImage=`url("${t}")`,e.init()}),!1)}else e.defaultInitImgResult||o.getImageURL(t=>{const o=e.$item.getAttribute("style")
o&&e.$item.setAttribute("data-jarallax-original-styles",o),e.css(e.$item,{"background-image":`url("${t}")`,"background-position":"center","background-size":"cover"})})
return t}
const r=t.prototype.destroy
t.prototype.destroy=function(){const e=this
e.image.$default_item&&(e.image.$item=e.image.$default_item,delete e.image.$default_item),r.apply(e)}}},"Rv+O":function(e,t,o){"use strict"
o.r(t),function(e){var i=o("hh9J"),a=o.n(i),n=o("4bAy"),s=o.n(n),l=o("NyMY")
const r=navigator.userAgent.indexOf("MSIE ")>-1||navigator.userAgent.indexOf("Trident/")>-1||navigator.userAgent.indexOf("Edge/")>-1,p=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),d=(()=>{const e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div")
for(let o=0;o<e.length;o++)if(t&&void 0!==t.style[e[o]])return e[o]
return!1})()
let m,c,u,y
let g=!1,h=!1
function updateWndVars(e){c=l.window.innerWidth||document.documentElement.clientWidth,u=p?function getDeviceHeight(){return!m&&document.body&&((m=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(m)),(m?m.clientHeight:0)||l.window.innerHeight||document.documentElement.clientHeight}():l.window.innerHeight||document.documentElement.clientHeight,"object"!=typeof e||"load"!==e.type&&"dom-loaded"!==e.type||(g=!0)}updateWndVars(),l.window.addEventListener("resize",updateWndVars),l.window.addEventListener("orientationchange",updateWndVars),l.window.addEventListener("load",updateWndVars),a()(()=>{updateWndVars({type:"dom-loaded"})})
const f=[]
let v=!1
function updateParallax(){if(!f.length)return
y=void 0!==l.window.pageYOffset?l.window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop
const e=g||!v||v.width!==c||v.height!==u,t=h||e||!v||v.y!==y
g=!1,h=!1,(e||t)&&(f.forEach(o=>{e&&o.onResize(),t&&o.onScroll()}),v={width:c,height:u,y}),s()(updateParallax)}const b=!!e.ResizeObserver&&new e.ResizeObserver(e=>{e&&e.length&&s()(()=>{e.forEach(e=>{e.target&&e.target.jarallax&&(g||e.target.jarallax.onResize(),h=!0)})})})
let $=0
class Jarallax{constructor(e,t){const o=this
o.instanceID=$++,o.$item=e,o.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,automaticResize:!0,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null}
const i=o.$item.dataset||{},a={}
if(Object.keys(i).forEach(e=>{const t=e.substr(0,1).toLowerCase()+e.substr(1)
t&&void 0!==o.defaults[t]&&(a[t]=i[e])}),o.options=o.extend({},o.defaults,a,t),o.pureOptions=o.extend({},o.options),Object.keys(o.options).forEach(e=>{"true"===o.options[e]?o.options[e]=!0:"false"===o.options[e]&&(o.options[e]=!1)}),o.options.speed=Math.min(2,Math.max(-1,parseFloat(o.options.speed))),"string"==typeof o.options.disableParallax&&(o.options.disableParallax=new RegExp(o.options.disableParallax)),o.options.disableParallax instanceof RegExp){const e=o.options.disableParallax
o.options.disableParallax=(()=>e.test(navigator.userAgent))}if("function"!=typeof o.options.disableParallax&&(o.options.disableParallax=(()=>!1)),"string"==typeof o.options.disableVideo&&(o.options.disableVideo=new RegExp(o.options.disableVideo)),o.options.disableVideo instanceof RegExp){const e=o.options.disableVideo
o.options.disableVideo=(()=>e.test(navigator.userAgent))}"function"!=typeof o.options.disableVideo&&(o.options.disableVideo=(()=>!1))
let n=o.options.elementInViewport
n&&"object"==typeof n&&void 0!==n.length&&([n]=n),n instanceof Element||(n=null),o.options.elementInViewport=n,o.image={src:o.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(navigator.userAgent)?"absolute":"fixed"},o.initImg()&&o.canInitParallax()&&o.init()}css(e,t){return"string"==typeof t?l.window.getComputedStyle(e).getPropertyValue(t):(t.transform&&d&&(t[d]=t.transform),Object.keys(t).forEach(o=>{e.style[o]=t[o]}),e)}extend(e){return e=e||{},Object.keys(arguments).forEach(t=>{arguments[t]&&Object.keys(arguments[t]).forEach(o=>{e[o]=arguments[t][o]})}),e}getWindowData(){return{width:c,height:u,y}}initImg(){const e=this
let t=e.options.imgElement
return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!(!e.image.bgImage||"none"===e.image.bgImage))}canInitParallax(){return d&&!this.options.disableParallax()}init(){const e=this,t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"}
let o={}
if(!e.options.keepImg){const t=e.$item.getAttribute("style")
if(t&&e.$item.setAttribute("data-jarallax-original-styles",t),e.image.useImgTag){const t=e.image.$item.getAttribute("style")
t&&e.image.$item.setAttribute("data-jarallax-original-styles",t)}}if("static"===e.css(e.$item,"position")&&e.css(e.$item,{position:"relative"}),"auto"===e.css(e.$item,"z-index")&&e.css(e.$item,{zIndex:0}),e.image.$container=document.createElement("div"),e.css(e.image.$container,t),e.css(e.image.$container,{"z-index":e.options.zIndex}),r&&e.css(e.image.$container,{opacity:.9999}),e.image.$container.setAttribute("id",`jarallax-container-${e.instanceID}`),e.$item.appendChild(e.image.$container),e.image.useImgTag?o=e.extend({"object-fit":e.options.imgSize,"object-position":e.options.imgPosition,"font-family":`object-fit: ${e.options.imgSize}; object-position: ${e.options.imgPosition};`,"max-width":"none"},t,o):(e.image.$item=document.createElement("div"),e.image.src&&(o=e.extend({"background-position":e.options.imgPosition,"background-size":e.options.imgSize,"background-repeat":e.options.imgRepeat,"background-image":e.image.bgImage||`url("${e.image.src}")`},t,o))),"opacity"!==e.options.type&&"scale"!==e.options.type&&"scale-opacity"!==e.options.type&&1!==e.options.speed||(e.image.position="absolute"),"fixed"===e.image.position){let t=0,o=e.$item
for(;null!==o&&o!==document&&0===t;){const i=e.css(o,"-webkit-transform")||e.css(o,"-moz-transform")||e.css(o,"transform")
i&&"none"!==i&&(t=1,e.image.position="absolute"),o=o.parentNode}}o.position=e.image.position,e.css(e.image.$item,o),e.image.$container.appendChild(e.image.$item),e.onResize(),e.onScroll(!0),e.options.automaticResize&&b&&b.observe(e.$item),e.options.onInit&&e.options.onInit.call(e),"none"!==e.css(e.$item,"background-image")&&e.css(e.$item,{"background-image":"none"}),e.addToParallaxList()}addToParallaxList(){f.push(this),1===f.length&&updateParallax()}removeFromParallaxList(){const e=this
f.forEach((t,o)=>{t.instanceID===e.instanceID&&f.splice(o,1)})}destroy(){const e=this
e.removeFromParallaxList()
const t=e.$item.getAttribute("data-jarallax-original-styles")
if(e.$item.removeAttribute("data-jarallax-original-styles"),t?e.$item.setAttribute("style",t):e.$item.removeAttribute("style"),e.image.useImgTag){const o=e.image.$item.getAttribute("data-jarallax-original-styles")
e.image.$item.removeAttribute("data-jarallax-original-styles"),o?e.image.$item.setAttribute("style",t):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)}e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}clipContainer(){if("fixed"!==this.image.position)return
const e=this,t=e.image.$container.getBoundingClientRect(),{width:o,height:i}=t
if(!e.$clipStyles){e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id",`jarallax-clip-${e.instanceID}`),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)}const a=`#jarallax-container-${e.instanceID} {\n           clip: rect(0 ${o}px ${i}px 0);\n           clip: rect(0, ${o}px, ${i}px, 0);\n        }`
e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=a:e.$clipStyles.innerHTML=a}coverImage(){const e=this,t=e.image.$container.getBoundingClientRect(),o=t.height,{speed:i}=e.options,a="scroll"===e.options.type||"scroll-opacity"===e.options.type
let n=0,s=o,l=0
return a&&(i<0?(n=i*Math.max(o,u),u<o&&(n-=i*(o-u))):n=i*(o+u),i>1?s=Math.abs(n-u):i<0?s=n/i+Math.abs(n):s+=(u-o)*(1-i),n/=2),e.parallaxScrollDistance=n,l=a?(u-s)/2:(o-s)/2,e.css(e.image.$item,{height:`${s}px`,marginTop:`${l}px`,left:"fixed"===e.image.position?`${t.left}px`:"0",width:`${t.width}px`}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:s,marginTop:l},container:t}}isVisible(){return this.isElementInViewport||!1}onScroll(e){const t=this,o=t.$item.getBoundingClientRect(),i=o.top,a=o.height,n={}
let s=o
if(t.options.elementInViewport&&(s=t.options.elementInViewport.getBoundingClientRect()),t.isElementInViewport=s.bottom>=0&&s.right>=0&&s.top<=u&&s.left<=c,!e&&!t.isElementInViewport)return
const l=Math.max(0,i),r=Math.max(0,a+i),p=Math.max(0,-i),d=Math.max(0,i+a-u),m=Math.max(0,a-(i+a-u)),y=Math.max(0,-i+u-a),g=1-2*(u-i)/(u+a)
let h=1
if(a<u?h=1-(p||d)/a:r<=u?h=r/u:m<=u&&(h=m/u),"opacity"!==t.options.type&&"scale-opacity"!==t.options.type&&"scroll-opacity"!==t.options.type||(n.transform="translate3d(0,0,0)",n.opacity=h),"scale"===t.options.type||"scale-opacity"===t.options.type){let e=1
t.options.speed<0?e-=t.options.speed*h:e+=t.options.speed*(1-h),n.transform=`scale(${e}) translate3d(0,0,0)`}if("scroll"===t.options.type||"scroll-opacity"===t.options.type){let e=t.parallaxScrollDistance*g
"absolute"===t.image.position&&(e-=i),n.transform=`translate3d(0,${e}px,0)`}t.css(t.image.$item,n),t.options.onScroll&&t.options.onScroll.call(t,{section:o,beforeTop:l,beforeTopEnd:r,afterTop:p,beforeBottom:d,beforeBottomEnd:m,afterBottom:y,visiblePercent:h,fromViewportCenter:g})}onResize(){this.coverImage(),this.clipContainer()}}const I=function(e){("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e])
const t=arguments[1],o=Array.prototype.slice.call(arguments,2),i=e.length
let a,n=0
for(;n<i;n++)if("object"==typeof t||void 0===t?e[n].jarallax||(e[n].jarallax=new Jarallax(e[n],t)):e[n].jarallax&&(a=e[n].jarallax[t].apply(e[n].jarallax,o)),void 0!==a)return a
return e}
I.constructor=Jarallax,t.default=I}.call(this,o("fRV1"))},hh9J:function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},kumE:function(e,t,o){const i=o("Rv+O").default,a=o("PNuo").default,n=o("6Nim").default
e.exports={jarallax:i,jarallaxElement:()=>n(i),jarallaxVideo:()=>a(i)}},uwVh:function(e,t,o){"use strict"
function Deferred(){this._done=[],this._fail=[]}o.r(t),o.d(t,"default",function(){return VideoWorker}),Deferred.prototype={execute(e,t){let o=e.length
for(t=Array.prototype.slice.call(t);o--;)e[o].apply(null,t)},resolve(){this.execute(this._done,arguments)},reject(){this.execute(this._fail,arguments)},done(e){this._done.push(e)},fail(e){this._fail.push(e)}}
let i=0,a=0,n=0,s=0,l=0
const r=new Deferred,p=new Deferred
class VideoWorker{constructor(e,t){const o=this
o.url=e,o.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,startTime:0,endTime:0},o.options=o.extend({},o.options_default,t),o.videoID=o.parseURL(e),o.videoID&&(o.ID=i++,o.loadAPI(),o.init())}extend(e){return e=e||{},Object.keys(arguments).forEach(t=>{arguments[t]&&Object.keys(arguments[t]).forEach(o=>{e[o]=arguments[t][o]})}),e}parseURL(e){const t=function getYoutubeID(e){const t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)
return!(!t||11!==t[1].length)&&t[1]}(e),o=function getVimeoID(e){const t=e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/)
return!(!t||!t[3])&&t[3]}(e),i=function getLocalVideos(e){const t=e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),o={}
let i=0
return t.forEach(e=>{const t=e.match(/^(mp4|webm|ogv|ogg)\:(.*)/)
t&&t[1]&&t[2]&&(o["ogv"===t[1]?"ogg":t[1]]=t[2],i=1)}),!!i&&o}(e)
return t?(this.type="youtube",t):o?(this.type="vimeo",o):!!i&&(this.type="local",i)}isValid(){return!!this.videoID}on(e,t){this.userEventsList=this.userEventsList||[],(this.userEventsList[e]||(this.userEventsList[e]=[])).push(t)}off(e,t){this.userEventsList&&this.userEventsList[e]&&(t?this.userEventsList[e].forEach((o,i)=>{o===t&&(this.userEventsList[e][i]=!1)}):delete this.userEventsList[e])}fire(e){const t=[].slice.call(arguments,1)
this.userEventsList&&void 0!==this.userEventsList[e]&&this.userEventsList[e].forEach(e=>{e&&e.apply(this,t)})}play(e){const t=this
t.player&&("youtube"===t.type&&t.player.playVideo&&(void 0!==e&&t.player.seekTo(e||0),YT.PlayerState.PLAYING!==t.player.getPlayerState()&&t.player.playVideo()),"vimeo"===t.type&&(void 0!==e&&t.player.setCurrentTime(e),t.player.getPaused().then(e=>{e&&t.player.play()})),"local"===t.type&&(void 0!==e&&(t.player.currentTime=e),t.player.paused&&t.player.play()))}pause(){const e=this
e.player&&("youtube"===e.type&&e.player.pauseVideo&&YT.PlayerState.PLAYING===e.player.getPlayerState()&&e.player.pauseVideo(),"vimeo"===e.type&&e.player.getPaused().then(t=>{t||e.player.pause()}),"local"===e.type&&(e.player.paused||e.player.pause()))}mute(){const e=this
e.player&&("youtube"===e.type&&e.player.mute&&e.player.mute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(0),"local"===e.type&&(e.$video.muted=!0))}unmute(){const e=this
e.player&&("youtube"===e.type&&e.player.mute&&e.player.unMute(),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(e.options.volume),"local"===e.type&&(e.$video.muted=!1))}setVolume(e=!1){const t=this
t.player&&e&&("youtube"===t.type&&t.player.setVolume&&t.player.setVolume(e),"vimeo"===t.type&&t.player.setVolume&&t.player.setVolume(e),"local"===t.type&&(t.$video.volume=e/100))}getVolume(e){const t=this
t.player?("youtube"===t.type&&t.player.getVolume&&e(t.player.getVolume()),"vimeo"===t.type&&t.player.getVolume&&t.player.getVolume().then(t=>{e(t)}),"local"===t.type&&e(100*t.$video.volume)):e(!1)}getMuted(e){const t=this
t.player?("youtube"===t.type&&t.player.isMuted&&e(t.player.isMuted()),"vimeo"===t.type&&t.player.getVolume&&t.player.getVolume().then(t=>{e(!!t)}),"local"===t.type&&e(t.$video.muted)):e(null)}getImageURL(e){const t=this
if(t.videoImage)e(t.videoImage)
else{if("youtube"===t.type){const o=["maxresdefault","sddefault","hqdefault","0"]
let i=0
const a=new Image
a.onload=function(){120!==(this.naturalWidth||this.width)||i===o.length-1?(t.videoImage=`https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`,e(t.videoImage)):(i++,this.src=`https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`)},a.src=`https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`}if("vimeo"===t.type){let o=new XMLHttpRequest
o.open("GET",`https://vimeo.com/api/v2/video/${t.videoID}.json`,!0),o.onreadystatechange=function(){if(4===this.readyState&&this.status>=200&&this.status<400){const o=JSON.parse(this.responseText)
t.videoImage=o[0].thumbnail_large,e(t.videoImage)}},o.send(),o=null}}}getIframe(e){this.getVideo(e)}getVideo(e){const t=this
t.$video?e(t.$video):t.onAPIready(()=>{let o
if(t.$video||((o=document.createElement("div")).style.display="none"),"youtube"===t.type){let e,i
t.playerOptions={},t.playerOptions.videoId=t.videoID,t.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,playsinline:1},t.options.showContols||(t.playerOptions.playerVars.iv_load_policy=3,t.playerOptions.playerVars.modestbranding=1,t.playerOptions.playerVars.controls=0,t.playerOptions.playerVars.showinfo=0,t.playerOptions.playerVars.disablekb=1),t.playerOptions.events={onReady(e){if(t.options.mute?e.target.mute():t.options.volume&&e.target.setVolume(t.options.volume),t.options.autoplay&&t.play(t.options.startTime),t.fire("ready",e),t.options.loop&&!t.options.endTime){const e=.1
t.options.endTime=t.player.getDuration()-e}setInterval(()=>{t.getVolume(o=>{t.options.volume!==o&&(t.options.volume=o,t.fire("volumechange",e))})},150)},onStateChange(o){t.options.loop&&o.data===YT.PlayerState.ENDED&&t.play(t.options.startTime),e||o.data!==YT.PlayerState.PLAYING||(e=1,t.fire("started",o)),o.data===YT.PlayerState.PLAYING&&t.fire("play",o),o.data===YT.PlayerState.PAUSED&&t.fire("pause",o),o.data===YT.PlayerState.ENDED&&t.fire("ended",o),o.data===YT.PlayerState.PLAYING?i=setInterval(()=>{t.fire("timeupdate",o),t.options.endTime&&t.player.getCurrentTime()>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())},150):clearInterval(i)}}
const a=!t.$video
if(a){const e=document.createElement("div")
e.setAttribute("id",t.playerID),o.appendChild(e),document.body.appendChild(o)}t.player=t.player||new window.YT.Player(t.playerID,t.playerOptions),a&&(t.$video=document.getElementById(t.playerID),t.videoWidth=parseInt(t.$video.getAttribute("width"),10)||1280,t.videoHeight=parseInt(t.$video.getAttribute("height"),10)||720)}if("vimeo"===t.type){if(t.playerOptions={id:t.videoID,autopause:0,transparent:0,autoplay:t.options.autoplay?1:0,loop:t.options.loop?1:0,muted:t.options.mute?1:0},t.options.volume&&(t.playerOptions.volume=t.options.volume),t.options.showContols||(t.playerOptions.badge=0,t.playerOptions.byline=0,t.playerOptions.portrait=0,t.playerOptions.title=0),!t.$video){let e=""
Object.keys(t.playerOptions).forEach(o=>{""!==e&&(e+="&"),e+=`${o}=${encodeURIComponent(t.playerOptions[o])}`}),t.$video=document.createElement("iframe"),t.$video.setAttribute("id",t.playerID),t.$video.setAttribute("src",`https://player.vimeo.com/video/${t.videoID}?${e}`),t.$video.setAttribute("frameborder","0"),t.$video.setAttribute("mozallowfullscreen",""),t.$video.setAttribute("allowfullscreen",""),o.appendChild(t.$video),document.body.appendChild(o)}let e
t.player=t.player||new Vimeo.Player(t.$video,t.playerOptions),t.options.startTime&&t.options.autoplay&&t.player.setCurrentTime(t.options.startTime),t.player.getVideoWidth().then(e=>{t.videoWidth=e||1280}),t.player.getVideoHeight().then(e=>{t.videoHeight=e||720}),t.player.on("timeupdate",o=>{e||(t.fire("started",o),e=1),t.fire("timeupdate",o),t.options.endTime&&t.options.endTime&&o.seconds>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())}),t.player.on("play",e=>{t.fire("play",e),t.options.startTime&&0===e.seconds&&t.play(t.options.startTime)}),t.player.on("pause",e=>{t.fire("pause",e)}),t.player.on("ended",e=>{t.fire("ended",e)}),t.player.on("loaded",e=>{t.fire("ready",e)}),t.player.on("volumechange",e=>{t.fire("volumechange",e)})}if("local"===t.type){let e
t.$video||(t.$video=document.createElement("video"),t.options.showContols&&(t.$video.controls=!0),t.options.mute?t.$video.muted=!0:t.$video.volume&&(t.$video.volume=t.options.volume/100),t.options.loop&&(t.$video.loop=!0),t.$video.setAttribute("playsinline",""),t.$video.setAttribute("webkit-playsinline",""),t.$video.setAttribute("id",t.playerID),o.appendChild(t.$video),document.body.appendChild(o),Object.keys(t.videoID).forEach(e=>{!function addSourceToLocal(e,t,o){const i=document.createElement("source")
i.src=t,i.type=o,e.appendChild(i)}(t.$video,t.videoID[e],`video/${e}`)})),t.player=t.player||t.$video,t.player.addEventListener("playing",o=>{e||t.fire("started",o),e=1}),t.player.addEventListener("timeupdate",function(e){t.fire("timeupdate",e),t.options.endTime&&t.options.endTime&&this.currentTime>=t.options.endTime&&(t.options.loop?t.play(t.options.startTime):t.pause())}),t.player.addEventListener("play",e=>{t.fire("play",e)}),t.player.addEventListener("pause",e=>{t.fire("pause",e)}),t.player.addEventListener("ended",e=>{t.fire("ended",e)}),t.player.addEventListener("loadedmetadata",function(){t.videoWidth=this.videoWidth||1280,t.videoHeight=this.videoHeight||720,t.fire("ready"),t.options.autoplay&&t.play(t.options.startTime)}),t.player.addEventListener("volumechange",e=>{t.getVolume(e=>{t.options.volume=e}),t.fire("volumechange",e)})}e(t.$video)})}init(){this.playerID=`VideoWorker-${this.ID}`}loadAPI(){if(a&&n)return
let e=""
if("youtube"!==this.type||a||(a=1,e="https://www.youtube.com/iframe_api"),"vimeo"!==this.type||n||(n=1,e="https://player.vimeo.com/api/player.js"),!e)return
let t=document.createElement("script"),o=document.getElementsByTagName("head")[0]
t.src=e,o.appendChild(t),o=null,t=null}onAPIready(e){if("youtube"===this.type&&("undefined"!=typeof YT&&0!==YT.loaded||s?"object"==typeof YT&&1===YT.loaded?e():r.done(()=>{e()}):(s=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,r.resolve("done"),e()})),"vimeo"===this.type)if("undefined"!=typeof Vimeo||l)"undefined"!=typeof Vimeo?e():p.done(()=>{e()})
else{l=1
const t=setInterval(()=>{"undefined"!=typeof Vimeo&&(clearInterval(t),p.resolve("done"),e())},20)}"local"===this.type&&e()}}},zm0f:function(e,t,o){(function(t){var o
o="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=o}).call(this,o("fRV1"))}}])

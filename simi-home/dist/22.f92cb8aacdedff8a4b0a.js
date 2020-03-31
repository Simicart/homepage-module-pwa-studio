/*!
 * @version v5.0.1-alpha.1-0-gb47e3439-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"FC+5":function(t,n,r){"use strict"
r.r(n)
var i=r("RhWx"),o=r.n(i),e=r("tQaH"),a=r.n(e),s=r("ddV6"),d=r.n(s),l=r("ERkP"),g=r.n(l),c=r("cmCr"),u=r.n(c),p=r("aWzz"),f=r("HMMy"),b=function Buttons(t){var n=Object(f.b)(u.a,t.classes),r=t.appearance,i=t.isSameWidth,e=t.textAlign,s=t.border,c=t.borderColor,p=t.borderWidth,b=t.borderRadius,m=t.marginTop,h=t.marginRight,x=t.marginBottom,v=t.marginLeft,y=t.paddingTop,w=t.paddingRight,R=t.paddingBottom,C=t.paddingLeft,W=t.children,j=t.cssClasses,k=void 0===j?[]:j,B=n["".concat(r)],O=Object(l.useRef)(null),L=g.a.useState(0),T=d()(L,2),Q=T[0],S=T[1],A={"--buttonMinWidth":Q?Q+"px":null},J=a()({border:s,borderColor:c,borderWidth:p,borderRadius:b,marginTop:m,marginRight:h,marginBottom:x,marginLeft:v,paddingTop:y,paddingRight:w,paddingBottom:R,paddingLeft:C},A)
Object(l.useLayoutEffect)(function(){if(i){var t=O.current,n=0,r=!0,o=!1,e=void 0
try{for(var a,s=t.querySelectorAll("button")[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var d=a.value.offsetWidth
d>n&&(n=d)}}catch(t){o=!0,e=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw e}}S(n)}},[i])
return J.justifyContent="flex-start",e&&(J.justifyContent={left:"flex-start",center:"center",right:"flex-end"}[e]||"flex-start",J.textAlign=e),g.a.createElement("div",{ref:O,style:J,className:[n.root,B].concat(o()(k)).join(" ")},W)}
b.propTypes={appearance:Object(p.oneOf)(["inline","stacked"]),classes:Object(p.shape)({root:p.string,stacked:p.string,inline:p.string}),isSameWidth:p.bool,textAlign:p.string,border:p.string,borderColor:p.string,borderWidth:p.string,borderRadius:p.string,marginTop:p.string,marginRight:p.string,marginBottom:p.string,marginLeft:p.string,paddingTop:p.string,paddingRight:p.string,paddingBottom:p.string,paddingLeft:p.string,cssClasses:Object(p.arrayOf)(p.string)}
var m=b
r.d(n,"default",function(){return m})},cmCr:function(t,n,r){var i=r("sJ9D")
"string"==typeof i&&(i=[[t.i,i,""]])
var o={hmr:!0,transform:void 0,insertInto:void 0}
r("cuK8")(i,o)
i.locals&&(t.exports=i.locals)},sJ9D:function(t,n,r){(n=t.exports=r("PBB4")(!1)).push([t.i,".buttons-root-32Q {\n    max-width: 100%;\n}\n.buttons-root-32Q > div {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    max-width: 100%;\n}\n.buttons-root-32Q button[class] {\n    max-width: 100%;\n    overflow: hidden;\n    min-width: var(--buttonMinWidth);\n}\n.buttons-stacked-3hx {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.buttons-inline-1dV > div {\n    margin-inline-end: 0.5rem;\n}\n",""]),n.locals={root:"buttons-root-32Q",stacked:"buttons-stacked-3hx",inline:"buttons-inline-1dV"}}}])

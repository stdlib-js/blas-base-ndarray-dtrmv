"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var g=l(function(S,q){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),c=require('@stdlib/ndarray-base-strides/dist'),f=require('@stdlib/ndarray-base-stride/dist'),s=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-data-buffer/dist'),u=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/blas-base-dtrmv/dist').ndarray;function p(e){var r,a,n,v,t,i;return t=e[0],i=e[1],a=u(e[2]),r=u(e[3]),n=u(e[4]),v=c(t,!1),m(a,r,n,o(t,0),d(t),v[0],v[1],s(t),d(i),f(i,0),s(i)),i}q.exports=p
});var x=g();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

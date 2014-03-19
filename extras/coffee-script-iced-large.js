/**
 * IcedCoffeeScript Compiler v1.7.1-a
 * http://iced-coffee-script.github.io/iced-coffee-script
 *
 * Copyright 2011, Jeremy Ashkenas, Maxwell Krohn
 * Released under the MIT License
 */
(function(e){var t=function(){function e(t){return e[t]}return e["./iced"]=function(){var e={},t={exports:e};return function(){var t,n=[].slice;e.generator=t=function(e,t,i){var r,o,s,a,c,u;return t.transform=function(e,t){return e.icedTransform(t)},t["const"]=r={k:"__iced_k",k_noop:"__iced_k_noop",param:"__iced_p_",ns:"iced",runtime:"runtime",Deferrals:"Deferrals",deferrals:"__iced_deferrals",fulfill:"_fulfill",b_while:"_break",t_while:"_while",c_while:"_continue",n_while:"_next",n_arg:"__iced_next_arg",context:"context",defer_method:"defer",slot:"__slot",assign_fn:"assign_fn",autocb:"autocb",retslot:"ret",trace:"__iced_trace",passed_deferral:"__iced_passed_deferral",findDeferral:"findDeferral",lineno:"lineno",parent:"parent",filename:"filename",funcname:"funcname",catchExceptions:"catchExceptions",runtime_modes:["node","inline","window","none","browserify"],trampoline:"trampoline"},e.makeDeferReturn=function(t,i,o,s,a){var c,u,l,h;l={};for(c in s)h=s[c],l[c]=h;return l[r.lineno]=null!=i?i[r.lineno]:void 0,u=function(){var r,s,c;return r=arguments.length>=1?n.call(arguments,0):[],null!=i&&null!=(c=i.assign_fn)&&c.apply(null,r),t?(s=t,a||(t=null),s._fulfill(o,l)):e._warn("overused deferral at "+e._trace_to_string(l))},u[r.trace]=l,u},e.__c=0,e.tickCounter=function(t){return e.__c++,0===e.__c%t?(e.__c=0,!0):!1},e.__active_trace=null,e._trace_to_string=function(e){var t;return t=e[r.funcname]||"<anonymous>",""+t+" ("+e[r.filename]+":"+(e[r.lineno]+1)+")"},e._warn=function(e){return"undefined"!=typeof console&&null!==console?console.log("ICED warning: "+e):void 0},i.trampoline=function(t){return e.tickCounter(500)?"undefined"!=typeof process&&null!==process?process.nextTick(t):setTimeout(t):t()},i.Deferrals=o=function(){function t(e,t){this.trace=t,this.continuation=e,this.count=1,this.ret=null}return t.prototype._call=function(t){var n;return this.continuation?(e.__active_trace=t,n=this.continuation,this.continuation=null,n(this.ret)):e._warn("Entered dead await at "+e._trace_to_string(t))},t.prototype._fulfill=function(e,t){return--this.count>0?void 0:i.trampoline(function(e){return function(){return e._call(t)}}(this))},t.prototype.defer=function(t){var n;return this.count++,n=this,e.makeDeferReturn(n,t,null,this.trace)},t.prototype._defer=function(e){return this.defer(e)},t}(),i.findDeferral=c=function(e){var t,n,i;for(n=0,i=e.length;i>n;n++)if(t=e[n],null!=t?t[r.trace]:void 0)return t;return null},i.Rendezvous=s=function(){function t(){this.completed=[],this.waiters=[],this.defer_id=0}var n;return n=function(){function e(e,t,n){this.rv=e,this.id=t,this.multi=n}return e.prototype.defer=function(e){return this.rv._deferWithId(this.id,e,this.multi)},e}(),t.prototype.wait=function(e){var t;return this.completed.length?(t=this.completed.shift(),e(t)):this.waiters.push(e)},t.prototype.defer=function(e){var t;return t=this.defer_id++,this.deferWithId(t,e)},t.prototype.id=function(e,t){return null==t&&(t=!1),new n(this,e,t)},t.prototype._fulfill=function(e){var t;return this.waiters.length?(t=this.waiters.shift(),t(e)):this.completed.push(e)},t.prototype._deferWithId=function(t,n,i){return this.count++,e.makeDeferReturn(this,n,t,{},i)},t}(),i.stackWalk=u=function(t){var n,i,o,s;for(i=[],o=t?t[r.trace]:e.__active_trace;o;)n="   at "+e._trace_to_string(o),i.push(n),o=null!=o?null!=(s=o[r.parent])?s[r.trace]:void 0:void 0;return i},i.exceptionHandler=a=function(e,t){var n;return t||(t=console.log),t(e.stack),n=u(),n.length?(t("Iced callback trace:"),t(n.join("\n"))):void 0},i.catchExceptions=function(e){return"undefined"!=typeof process&&null!==process?process.on("uncaughtException",function(t){return a(t,e),process.exit(1)}):void 0}},e.runtime={},t(this,e,e.runtime)}.call(this),t.exports}(),e["./icedlib"]=function(){var t={},n={exports:t};return function(){var n,i,r,o,s,a,c,u,l=[].slice;o=s=function(){},r=e("./iced"),t.iced=i=r.runtime,u=function(e,t,n,r){var o,a,c,u,h,p;p=s,u=i.findDeferral(arguments),a=new i.Rendezvous,r[0]=a.id(!0).defer({assign_fn:function(){return function(){return function(){return o=l.call(arguments,0)}}}(this)(),lineno:17,context:h}),setTimeout(a.id(!1).defer({lineno:18,context:h}),t),function(){return function(e){h=new i.Deferrals(e,{parent:u,filename:"/Users/max/src/iced/coffee-script/src/icedlib.coffee"}),a.wait(h.defer({assign_fn:function(){return function(){return c=arguments[0]}}(),lineno:19})),h._fulfill()}}(this)(function(){return function(){return n&&(n[0]=c),e.apply(null,o)}}(this))},t.timeout=function(e,t,n){var i;return i=[],u(e,t,n,i),i[0]},a=function(e,t,n){var r,o,a,c;c=s,o=i.findDeferral(arguments),function(){return function(e){a=new i.Deferrals(e,{parent:o,filename:"/Users/max/src/iced/coffee-script/src/icedlib.coffee"}),n[0]=a.defer({assign_fn:function(){return function(){return r=arguments[0]}}(),lineno:34}),a._fulfill()}}(this)(function(){return function(){return r||(t[0]=!1),e()}}(this))},t.iand=function(e,t){var n;return n=[],a(e,t,n),n[0]},c=function(e,t,n){var r,o,a,c;c=s,o=i.findDeferral(arguments),function(){return function(e){a=new i.Deferrals(e,{parent:o,filename:"/Users/max/src/iced/coffee-script/src/icedlib.coffee"}),n[0]=a.defer({assign_fn:function(){return function(){return r=arguments[0]}}(),lineno:51}),a._fulfill()}}(this)(function(){return function(){return r&&(t[0]=!0),e()}}(this))},t.ior=function(e,t){var n;return n=[],c(e,t,n),n[0]},t.Pipeliner=n=function(){function e(e,t){this.window=e||1,this.delay=t||0,this.queue=[],this.n_out=0,this.cb=null,this[r["const"].deferrals]=this,this.defer=this._defer}return e.prototype.waitInQueue=function(e){var t,n,r;r=s,t=i.findDeferral(arguments),function(e){return function(r){var o,s;o=[],s=function(r){var a,c,u;return a=function(){return r(o)},c=function(){return i.trampoline(function(){return s(r)})},u=function(e){return o.push(e),c()},e.n_out>=e.window?(function(r){n=new i.Deferrals(r,{parent:t,filename:"/Users/max/src/iced/coffee-script/src/icedlib.coffee",funcname:"Pipeliner.waitInQueue"}),e.cb=n.defer({lineno:88}),n._fulfill()}(u),void 0):a()},s(r)}}(this)(function(r){return function(){r.n_out++,function(e){return r.delay?(function(e){n=new i.Deferrals(e,{parent:t,filename:"/Users/max/src/iced/coffee-script/src/icedlib.coffee",funcname:"Pipeliner.waitInQueue"}),setTimeout(n.defer({lineno:96}),r.delay),n._fulfill()}(e),void 0):e()}(function(){return e()})}}(this))},e.prototype.__defer=function(e,t){var n,r,o,a,c;c=s,o=i.findDeferral(arguments),function(){return function(n){a=new i.Deferrals(n,{parent:o,filename:"/Users/max/src/iced/coffee-script/src/icedlib.coffee",funcname:"Pipeliner.__defer"}),r=a.defer({lineno:109}),e[0]=function(){var e,n;return e=arguments.length>=1?l.call(arguments,0):[],null!=(n=t.assign_fn)&&n.apply(null,e),r()},a._fulfill()}}(this)(function(e){return function(){return e.n_out--,e.cb?(n=e.cb,e.cb=null,n()):void 0}}(this))},e.prototype._defer=function(e){var t;return t=[],this.__defer(t,e),t[0]},e.prototype.flush=function(e){var t,n,r,o;n=e,t=i.findDeferral(arguments),r=[],o=function(e){var n;return function(s){var a,c,u;return a=function(){return s(r)},c=function(){return i.trampoline(function(){return o(s)})},u=function(e){return r.push(e),c()},e.n_out?(function(r){n=new i.Deferrals(r,{parent:t,filename:"/Users/max/src/iced/coffee-script/src/icedlib.coffee",funcname:"Pipeliner.flush"}),e.cb=n.defer({lineno:136}),n._fulfill()}(u),void 0):a()}}(this),o(n)},e}()}.call(this),n.exports}(),e["./icedlib"]}();"function"==typeof define&&define.amd?(define(function(){return t}),define(function(){return t.iced})):(e.icedlib=t,e.iced=t.iced)})(this);
"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1804],{7655:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var o=n(5697),s=n.n(o),i=n(8661),r=n(8429),u=n(2915),c=n(6727),l=n(8389),a=n(5322),d=n(111),_=n(65),h=n(7503);const m=(0,c.ZP)({resolved:{},chunkName:()=>"app-components-GameInfoButton",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>n.e(493).then(n.bind(n,8165)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return 8165}});function v(e){let{gameId:t,rating:o}=e;const s=(0,r.I0)(),c=(0,r.v9)(a.eP),v=(0,r.v9)(d.B),f=(0,r.v9)((e=>(0,a.i5)(e,t))),[p,g]=(0,i.useState)(0),[A,D]=(0,i.useState)(!1),[E,b]=(0,i.useState)(!1);if(null==o||!o.rating)return null;(0,i.useEffect)((()=>{0===f?(D(!1),b(!1)):1===f?(D(!0),b(!1)):(D(!1),b(!0))}),[f]);const x=async(e,o)=>{if(!c){s((0,l.m3)());const e=await Promise.all([n.e(4406),n.e(258),n.e(6086)]).then(n.bind(n,6086));h.Go.next((0,u.l)(...Object.values(e)))}(0,_.u)(),Date.now()<p||(f===e&&(e=0),s((0,l.Ns)({gameId:t,direction:e,source:o})),g({noVoteBefore:Date.now()+500}))},w=e=>e?e>1e6?"".concat((e/1e6).toFixed(1),"M"):e>1e3?"".concat((e/1e3).toFixed(1),"K"):e:0,y=o.up_count?w(o.up_count+(A?1:0)):"",L=o.down_count?w(o.down_count+(E?1:0)):"";return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,{iconName:"thumbsUp",text:y,hoverText:A?v.remove_vote:v.i_like_it,onClick:()=>x(1,"thumbsUp"),isHighlighted:A}),i.default.createElement(m,{iconName:"thumbsUp",text:L,hoverText:E?v.remove_vote:v.i_dont_like_it,onClick:()=>x(-1,"thumbsDown"),isHighlighted:E,inverted:!0}))}}}]);
"use strict";(self.webpackChunkpumpfun_screener=self.webpackChunkpumpfun_screener||[]).push([[206],{488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>V,contentTitle:()=>E,default:()=>q,frontMatter:()=>C,metadata:()=>a,toc:()=>R});const a=JSON.parse('{"id":"data-api/real-time-updates","title":"Real-time Token Aggregation","description":"Connect to the PumpPortal WebSocket at//pumpfunscreener.com/api/data.","source":"@site/docs/data-api/real-time-updates.mdx","sourceDirName":"data-api","slug":"/data-api/real-time-updates","permalink":"/data-api/real-time-updates","draft":false,"unlisted":false,"editUrl":"https://github.com/PumpFun-Screener/docs/edit/main/docs/data-api/real-time-updates.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Data API","permalink":"/category/data-api"},"next":{"title":"Terms & Conditions","permalink":"/legal"}}');var r=t(4848),s=t(8453),o=t(6540),i=t(4164),l=t(5627),c=t(6347),u=t(372),d=t(604),p=t(1861),m=t(8749);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,p.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,c.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=g(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[l,c]=f({queryString:t,groupId:a}),[d,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,m.Dv)(t);return[a,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),h=(()=>{const e=l??d;return b({value:e,tabValues:r})?e:null})();(0,u.A)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),p(e)}),[c,p,r]),tabValues:r}}var x=t(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=o[t].value;r!==a&&(u(n),s(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{c.push(e)},onKeyDown:p,onClick:d,...s,className:(0,i.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=v(e);return(0,r.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,r.jsx)(y,{...n,...e}),(0,r.jsx)(k,{...n,...e})]})}function S(e){const n=(0,x.A)();return(0,r.jsx)(w,{...e,children:h(e.children)},String(n))}const T={tabItem:"tabItem_Ymn6"};function A(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(T.tabItem,a),hidden:t,children:n})}const C={sidebar_position:1},E="Real-time Token Aggregation",V={},R=[{value:"\u2705 Supported Method",id:"-supported-method",level:2},{value:"<code>subscribeTokenAggregation</code>",id:"subscribetokenaggregation",level:3},{value:"\ud83d\udce6 Payload Format",id:"-payload-format",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Received data Example",id:"received-data-example",level:2},{value:"Notes",id:"notes",level:2}];function N(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"real-time-token-aggregation",children:"Real-time Token Aggregation"})}),"\n",(0,r.jsxs)(n.p,{children:["Connect to the PumpPortal WebSocket at: ",(0,r.jsx)(n.code,{children:"wss://pumpfunscreener.com/api/data"}),".\nThis stream provides real-time ",(0,r.jsx)(n.strong,{children:"aggregated trading data"})," for tokens created on ",(0,r.jsx)(n.a,{href:"https://pump.fun",children:"Pump.fun"}),". The server supports ",(0,r.jsx)(n.strong,{children:"only one subscription method"})," and one type of payload."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-supported-method",children:"\u2705 Supported Method"}),"\n",(0,r.jsx)(n.h3,{id:"subscribetokenaggregation",children:(0,r.jsx)(n.code,{children:"subscribeTokenAggregation"})}),"\n",(0,r.jsx)(n.p,{children:"Subscribe to aggregated token updates across the Pump.fun ecosystem."}),"\n",(0,r.jsxs)(n.p,{children:["You only need to send this method once per connection. Closing the WebSocket will automatically stop the stream\u2014no explicit ",(0,r.jsx)(n.code,{children:"unsubscribe"})," is needed."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"-payload-format",children:"\ud83d\udce6 Payload Format"}),"\n",(0,r.jsx)(n.p,{children:"You must send the following message after connecting:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "method": "subscribeTokenAggregation"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n","\n",(0,r.jsxs)(S,{groupId:"programming-language",children:[(0,r.jsx)(A,{value:"javascript",label:"JavaScript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import WebSocket from 'ws';\n\nconst ws = new WebSocket('wss://pumpfunscreener.com/api/data');\n\nws.on('open', () => {\nws.send(JSON.stringify({ method: 'subscribeTokenAggregation' }));\n});\n\nws.on('message', (data) => {\nconst message = JSON.parse(data);\nconsole.log('Received aggregation:', message);\n});\n\n// Close connection to stop streaming\nsetTimeout(() => ws.close(), 10000); // Stops after 10 seconds\n"})})}),(0,r.jsx)(A,{value:"python",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'import asyncio\nimport websockets\nimport json\n\nasync def main():\n    uri = "wss://pumpfunscreener.com/api/data"\n    async with websockets.connect(uri) as websocket:\n        await websocket.send(json.dumps({"method": "subscribeTokenAggregation"}))\n\n        async for message in websocket:\n            data = json.loads(message)\n            print("Received aggregation:", data)\n\n# Run the listener\nasyncio.run(main())\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"received-data-example",children:"Received data Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "time": "2025-03-31T15:57:47.451Z",\n    "age": 1588.254,\n    "mint": "AZoRLqw9XHiZShASgM8Lh4LQRBNqHS4wSmtLzmRcpump",\n    "symbol": "",\n    "lastPrice": 2.3792005476236903e-7,\n    "priceChanged5sec": -0.9856558530545358,\n    "priceChanged10sec": -3.0229512526977573,\n    "priceChanged30sec": -4.493443375678899,\n    "priceChanged1min": -2.684657358858088,\n    "priceChanged5min": -3.29427400754686,\n    "priceChanged10min": 13.574088647506596,\n    "totalTrades": 3031,\n    "countOfBuys": 1690,\n    "countOfSells": 1341,\n    "amountInWallets": 10505519302.734539,\n    "totalHolders": 86,\n    "top10Traders": [\n      {"trader": "HAN61KQbgzjDBC4RpZJ1ET8v32S4zdKAjoD7EApJ96q6", "percent": 7.2107825769993905},\n      {"trader": "CFpFtatJUBj1tbTV5tCHHLUriPRBxSpqqg4evXDJXdKC", "percent": 5.852630336446155},\n      {"trader": "FbVbRbGqLk7DtprRHV1THa26ynoRZjUC6RuAxT9yaohM", "percent": 3.9395700437951957},\n      {"trader": "8CuHzxZvrmrkfeDgd8r7grugasVpZBLsGMvGsVrb5Fnm", "percent": 3.781979994650993},\n      {"trader": "2BcPmw6acbbATvU7xhdx3H8toDbkG7EyWeuiagEz3Fgc", "percent": 3.210596904159434},\n      {"trader": "Cv778SjPepXHAhbSwKGaN8UK697paYWh7PEzqmwqFSSD", "percent": 3.191921932814776},\n      {"trader": "2YccFbKBnGtCne2DdHAyLnybUAfwpmVy4A7URAb91qhQ", "percent": 2.962311352752224},\n      {"trader": "AxnuoEMdrFRJHGtoiotpzv3UQTWbeGuppA2Cj3G6Fguk", "percent": 2.9054128098257497},\n      {"trader": "8ak5XQ9eqWcdjux7UejCfyyQrybd1P6UWgbjd5v1iwoU", "percent": 2.752652745247176},\n      {"trader": "5T229oePmJGE5Cefys8jE9Jq8C7qfGNNWy3RVA7SmwEP", "percent": 2.646368030295263}\n    ],\n    "lastSignature": "2w2aU1FQyRTYo17uocJ2BE2YRJmcs81fSazG6eVQVub1EiVh8TdqaikWgVJpv9E6LazyttEhyjDREr3CBYbWFQSf"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.p,{children:"You don't need to manage subscriptions manually. Just open a WebSocket, send the subscription message, and stream begins."}),"\n",(0,r.jsxs)(n.p,{children:["To stop streaming, simply ",(0,r.jsx)(n.strong,{children:"close the WebSocket connection"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Make sure to keep the connection alive if you want to continue receiving data."})]})}function q(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(6540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
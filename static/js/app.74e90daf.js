(function(){"use strict";var e={20493:function(e,t,a){var s=a(93169),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("el-row",[t("el-col",{attrs:{span:24}},[t("div",{staticStyle:{"font-size":"30px"}},[e._v("Dubbo 基准测试")])])],1),t("el-row",[t("el-col",{attrs:{span:24}},[t("div",{staticStyle:{"font-size":"15px","text-align":"right"}},[e._v("Ubuntu 2核4线程7GB内存")])])],1),t("el-row",[t("el-divider",[t("span",{staticStyle:{"font-size":"20px"}},[e._v("提交性能趋势")])]),t("el-col",{attrs:{span:12}},[t("PullRequest")],1),t("el-col",{attrs:{span:12}},[t("ScheduledTask")],1)],1),t("el-row",[t("el-divider",[t("span",{staticStyle:{"font-size":"20px"}},[e._v("相同场景对比")])]),t("el-col",{attrs:{span:12}},[t("RpcTask")],1),t("el-col",{attrs:{span:12}},[t("SerializationTask")],1)],1),t("el-row",[t("el-col",{attrs:{span:24}},[t("TraceDetail")],1)],1),t("el-row",{staticStyle:{"margin-top":"100px"}},[t("el-divider",[t("span",{staticStyle:{"font-size":"20px"}},[e._v("手动触发对比")])]),t("el-col",{attrs:{span:24}},[t("trigger-trace-detail")],1)],1)],1)},i=[],l=function(){var e=this;e._self._c;return e._m(0)},o=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"PullRequestSample"}}),t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"PullRequestThrpt"}})])}],n=(a(86564),{name:"PullRequest",data(){return{resultList:[]}},mounted(){this.init(),this.sampleEcharts(),this.thrptEcharts()},methods:{init(){let e;this.$.ajax({type:"GET",async:!1,url:"https://raw.githubusercontent.com/wxbty/jmh_result/main/test-results/pr/merged_results.json",success:function(t){e=t}});try{this.resultList=JSON.parse(e)}catch(t){console.error("解析JMH结果字符串出错：",t)}},sampleEcharts(){const e=this.$echarts.init(document.getElementById("PullRequestSample"));let t=this.resultList.filter((e=>"sample"===e.mode)).reduce(((e,t)=>{let{time:a,serialization:s,protocol:r}=t.params,i={time:Number(a),score:Math.round(1e3*t.primaryMetric.scorePercentiles["99.0"]),serialization:s,protocol:r,commitId:t.commitId},l=r+"-"+s;return e[l]||(e[l]=[]),e[l].push(i),e}),{}),a={};function s(e){var t=new Date(e);return t.toLocaleDateString("en-US")+" "+t.toLocaleTimeString("en-US")}Object.entries(t).forEach((([e,t])=>{let s=t.sort(((e,t)=>e.time-t.time));a[e]={time:s.map((e=>e.time)),score:s.map((e=>e.score)),commitId:s.map((e=>e.commitId))}}));let r=Object.keys(a).map((e=>{let t=a[e].time.map(((t,r)=>({name:s(t),value:[t,a[e].score[r],a[e].commitId[r]]})));return{name:e,type:"line",showSymbol:!0,hoverAnimation:!1,symbolSize:10,markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Avg"}]},data:t}})),i={title:{text:"提交记录 P99",x:"center"},tooltip:{trigger:"axis",formatter:function(e){let t=e[0].axisValueLabel+"<br/>";return e.forEach((e=>{t+=e.marker+" "+(null!==e.data.value[2]?e.data.value[2]:"")+"："+(null!==e.data.value[1]?e.data.value[1]:"-")+"ms<br/>"})),t}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"time",boundaryGap:!1},yAxis:{type:"value",name:"耗时(ms)"},series:r};e.setOption(i)},thrptEcharts(){const e=this.$echarts.init(document.getElementById("PullRequestThrpt"));let t=this.resultList.filter((e=>"thrpt"===e.mode)).reduce(((e,t)=>{let{time:a,serialization:s,protocol:r}=t.params,i={time:Number(a),score:Math.round(t.primaryMetric.scorePercentiles["99.0"]),serialization:s,protocol:r},l=r+"-"+s;return e[l]||(e[l]=[]),e[l].push(i),e}),{}),a={};function s(e){var t=new Date(e);return t.toLocaleDateString("en-US")+" "+t.toLocaleTimeString("en-US")}Object.entries(t).forEach((([e,t])=>{let s=t.sort(((e,t)=>e.time-t.time));a[e]={time:s.map((e=>e.time)),score:s.map((e=>e.score))}}));let r=Object.keys(a).map((e=>{let t=a[e].time.map(((t,r)=>({name:s(t),value:[t,a[e].score[r]]})));return{name:e,type:"line",showSymbol:!0,hoverAnimation:!1,symbolSize:10,markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Avg"}]},data:t}})),i={title:{text:"提交 QPS",x:"center"},tooltip:{trigger:"axis",formatter:function(e){let t=e[0].axisValueLabel+"<br/>";return e.forEach((e=>{t+=e.marker+" "+(null!==e.data.value[1]?e.data.value[1]:"-")+"ops/s<br/>"})),t}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"time",boundaryGap:!1},yAxis:{type:"value",name:"ops/s"},series:r};e.setOption(i)}}}),c=n,p=a(64008),u=(0,p.A)(c,l,o,!1,null,"2e44c556",null),h=u.exports,d=function(){var e=this;e._self._c;return e._m(0)},m=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"ScheduledTask"}}),t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"ScheduledTaskThrpt"}})])}],b={name:"ScheduledTask",data(){return{resultList:[]}},mounted(){this.init(),this.sampleEcharts(),this.thrptEcharts()},methods:{init(){let e;this.$.ajax({type:"GET",async:!1,url:"https://raw.githubusercontent.com/wxbty/jmh_result/main/test-results/scheduled/merged_results.json",success:function(t){e=t}});try{this.resultList=JSON.parse(e)}catch(t){console.error("解析JMH结果字符串出错：",t)}},sampleEcharts(){const e=this.$echarts.init(document.getElementById("ScheduledTask"));let t=this.resultList.filter((e=>"sample"===e.mode)).reduce(((e,t)=>{let{time:a,serialization:s,protocol:r}=t.params,i={time:Number(a),score:Math.round(1e3*t.primaryMetric.scorePercentiles["99.0"]),serialization:s,protocol:r},l=r+"-"+s;return e[l]||(e[l]=[]),e[l].push(i),e}),{}),a={};function s(e){var t=new Date(e);return t.toLocaleDateString("en-US")+" "+t.toLocaleTimeString("en-US")}Object.entries(t).forEach((([e,t])=>{let s=t.sort(((e,t)=>e.time-t.time));a[e]={time:s.map((e=>e.time)),score:s.map((e=>e.score))}}));let r=Object.keys(a).map((e=>{let t=a[e].time.map(((t,r)=>({name:s(t),value:[t,a[e].score[r]]})));return{name:e,type:"line",showSymbol:!0,hoverAnimation:!1,symbolSize:10,markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Avg"}]},data:t}})),i={title:{text:"定时 P99",x:"center"},tooltip:{trigger:"axis",formatter:function(e){let t=e[0].axisValueLabel+"<br/>";return e.forEach((e=>{t+=e.marker+" "+(null!==e.data.value[1]?e.data.value[1]:"-")+"ms<br/>"})),t}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"time",boundaryGap:!1},yAxis:{type:"value",name:"耗时(ms)"},series:r};e.setOption(i)},thrptEcharts(){const e=this.$echarts.init(document.getElementById("ScheduledTaskThrpt"));let t=this.resultList.filter((e=>"thrpt"===e.mode)).reduce(((e,t)=>{let{time:a,serialization:s,protocol:r}=t.params,i={time:Number(a),score:Math.round(t.primaryMetric.scorePercentiles["99.0"]),serialization:s,protocol:r},l=r+"-"+s;return e[l]||(e[l]=[]),e[l].push(i),e}),{}),a={};function s(e){var t=new Date(e);return t.toLocaleDateString("en-US")+" "+t.toLocaleTimeString("en-US")}Object.entries(t).forEach((([e,t])=>{let s=t.sort(((e,t)=>e.time-t.time));a[e]={time:s.map((e=>e.time)),score:s.map((e=>e.score))}}));let r=Object.keys(a).map((e=>{let t=a[e].time.map(((t,r)=>({name:s(t),value:[t,a[e].score[r]]})));return{name:e,type:"line",showSymbol:!0,hoverAnimation:!1,symbolSize:10,markPoint:{data:[{type:"max",name:"Max"},{type:"min",name:"Min"}]},markLine:{data:[{type:"average",name:"Avg"}]},data:t}})),i={title:{text:"定时 QPS",x:"center"},tooltip:{trigger:"axis",formatter:function(e){let t=e[0].axisValueLabel+"<br/>";return e.forEach((e=>{t+=e.marker+" "+(null!==e.data.value[1]?e.data.value[1]:"-")+"ops/s<br/>"})),t}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"time",boundaryGap:!1},yAxis:{type:"value",name:"ops/s"},series:r};e.setOption(i)}}},g=b,f=(0,p.A)(g,d,m,!1,null,"55df43f4",null),y=f.exports,v=function(){var e=this,t=e._self._c;return t("div",[t("el-row",[t("el-col",{attrs:{span:6}},[t("span",[e._v("选择两个配置对比")]),t("el-cascader",{attrs:{"show-all-levels":!1,props:e.props,options:e.cascaderOptions,clearable:""},on:{change:e.handleCascaderChange},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-header",[t("h1",[e._v(e._s(e.leftTableTitle))])]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.leftTableDate,"row-key":"spanId_",border:"",lazy:"","default-expand-all":"","tree-props":{children:"children"}}},[t("el-table-column",{attrs:{prop:"operationName_",label:"方法名","min-width":"90%"}}),t("el-table-column",{attrs:{prop:"cost",label:"耗时（ms）","min-width":"10%"}})],1)],1),t("el-col",{attrs:{span:12}},[t("el-header",[t("h1",[e._v(e._s(e.rightTableTitle))])]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.rightTableDate,"row-key":"spanId_",border:"",lazy:"","default-expand-all":"","tree-props":{children:"children"}}},[t("el-table-column",{attrs:{prop:"operationName_",label:"方法名","min-width":"90%"}}),t("el-table-column",{attrs:{prop:"cost",label:"耗时（ms）","min-width":"10%"}})],1)],1)],1)],1)},T=[],x={name:"TraceDetail",data(){return{rpcTable:[],serializationTable:[],leftTableTitle:"",leftTableDate:[],rightTableDate:[],rightTableTitle:"",selectedOptions:[],disabledRoots:[],disabledChildren:[],props:{multiple:!0},cascaderOptions:[{value:"rpc",label:"RPC 协议",children:[{value:"dubbo",label:"Dubbo协议"},{value:"rmi",label:"Rmi协议"},{value:"tri",label:"Triple协议"}]},{value:"serialization",label:"序列化",children:[{value:"hessian2",label:"Hessian2"},{value:"fastjson2",label:"Fastjson2"},{value:"fastjson",label:"Fastjson"},{value:"avro",label:"Avro"},{value:"fst",label:"Fst"},{value:"gson",label:"Gson"},{value:"kryo",label:"Kryo"},{value:"msgpack",label:"Msgpack"}]}],tmpCascaderOptions:[{value:"rpc",label:"RPC 协议",children:[{value:"dubbo",label:"Dubbo协议"},{value:"rmi",label:"Rmi协议"},{value:"tri",label:"Triple协议"}]},{value:"serialization",label:"序列化",children:[{value:"hessian2",label:"Hessian2"},{value:"fastjson2",label:"Fastjson2"},{value:"fastjson",label:"Fastjson"},{value:"avro",label:"Avro"},{value:"fst",label:"Fst"},{value:"gson",label:"Gson"},{value:"kryo",label:"Kryo"},{value:"msgpack",label:"Msgpack"}]}]}},mounted(){this.initTable(),this.selectedOptions=[["serialization","hessian2"],["serialization","fastjson2"]],this.handleCascaderChange(this.selectedOptions)},methods:{initTable(){let e,t;this.$.ajax({type:"GET",async:!1,url:"https://raw.githubusercontent.com/wxbty/jmh_result/main/test-results/fixed/rpc/merged_prop_traces.json",success:function(t){e=t}});try{this.rpcTable=JSON.parse(e),console.log("this.rpcTable",this.rpcTable)}catch(a){console.error("解析JMH结果字符串出错：",a)}this.$.ajax({type:"GET",async:!1,url:"https://raw.githubusercontent.com/wxbty/jmh_result/main/test-results/fixed/serialization/merged_prop_traces.json",success:function(e){t=e}});try{this.serializationTable=JSON.parse(t),console.log("this.serializationResultList",this.serializationTable)}catch(a){console.error("解析JMH结果字符串出错：",a)}},createSpanTree(e){console.log(e);let t=new Map,a=[];for(let s of e)t.set(s.spanId_,{...s,spanId_:s.spanId_.toString(),cost:s.endTime_-s.startTime_,children:[]}),-1===s.parentSpanId_&&a.push(t.get(s.spanId_));for(let s of e)if(-1!==s.parentSpanId_){let e=t.get(s.parentSpanId_);e&&e.children.push(t.get(s.spanId_))}return console.log(a),a},handleCascaderChange(e){let t;if(console.log("this.value",e),console.log("this.selectedOptions",this.selectedOptions),this.cascaderOptions=this.deepCopy2DArray(this.tmpCascaderOptions),null!=e&&e.length>0&&(t=this.cascaderOptions.find((t=>t.value===e[0][0]))),t)if(this.disabledRoots=this.cascaderOptions.filter((e=>e.value!==t.value)).map((e=>e.value)),e.length>2){this.selectedOptions.splice(2),e=this.selectedOptions;let a=e.map((e=>e[1]));this.disabledChildren=t.children.filter(((e,t)=>t>=2&&!a.includes(e.value))).map((e=>e.value))}else if(2===e.length){let a=e.map((e=>e[1]));this.disabledChildren=t.children.filter((e=>!a.includes(e.value))).map((e=>e.value))}else this.disabledChildren=[];else this.disabledRoots=[],this.disabledChildren=[];this.updateCascaderOptions(t),this.updateTable()},updateCascaderOptions(e){e&&(e.children=e.children.map((e=>({...e,disabled:this.disabledChildren.includes(e.value)})))),this.cascaderOptions=this.cascaderOptions.map((e=>({...e,disabled:this.disabledRoots.includes(e.value)})))},deepCopy2DArray(e){return JSON.parse(JSON.stringify(e))},updateTable(){if(null==this.selectedOptions||0===this.selectedOptions.length)return this.leftTableDate=[],this.rightTableDate=[],this.leftTableTitle="",void(this.rightTableTitle="");let e=this.selectedOptions[0][0],t=this.selectedOptions.map((e=>e[1]));if("rpc"===e){let e=this.rpcTable.find((e=>t[0]===JSON.parse(e.prop)["dubbo.protocol.name"])),a=this.rpcTable.find((e=>t[1]===JSON.parse(e.prop)["dubbo.protocol.name"]));this.leftTableDate=e?this.createSpanTree(e.spans_):[],this.rightTableDate=a?this.createSpanTree(a.spans_):[],this.leftTableTitle=e?JSON.parse(e.prop)["dubbo.protocol.name"]:"",this.rightTableTitle=a?JSON.parse(a.prop)["dubbo.protocol.name"]:""}if("serialization"===e){let e=this.serializationTable.find((e=>t[0]===JSON.parse(e.prop)["dubbo.protocol.serialization"])),a=this.serializationTable.find((e=>t[1]===JSON.parse(e.prop)["dubbo.protocol.serialization"]));this.leftTableDate=e?this.createSpanTree(e.spans_):[],this.rightTableDate=a?this.createSpanTree(a.spans_):[],this.leftTableTitle=e?JSON.parse(e.prop)["dubbo.protocol.serialization"]:"",this.rightTableTitle=a?JSON.parse(a.prop)["dubbo.protocol.serialization"]:""}}}},S=x,O=(0,p.A)(S,v,T,!1,null,"81f8100e",null),_=O.exports,w=function(){var e=this;e._self._c;return e._m(0)},j=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"RpcTaskP99"}}),t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"RpcTaskQPS"}})])}],k={name:"RpcTask",data(){return{resultList:[]}},mounted(){this.init(),this.sampleEcharts(),this.thrptEcharts()},methods:{init(){let e;this.$.ajax({type:"GET",async:!1,url:"https://raw.githubusercontent.com/wxbty/jmh_result/main/test-results/fixed/rpc/merged_prop_results.json",success:function(t){e=t}});try{this.resultList=JSON.parse(e)}catch(t){console.error("解析JMH结果字符串出错：",t)}},sampleEcharts(){const e=this.$echarts.init(document.getElementById("RpcTaskP99"));let t=this.resultList[0].params.time,a=this.resultList.filter((e=>"sample"===e.mode)).map((e=>{let t=JSON.parse(e.params.prop)["dubbo.protocol.name"];return{score:Math.round(1e3*e.primaryMetric.scorePercentiles["99.0"]),protocol:t}})),s={title:{text:"RPC协议 P99对比",x:"center",subtext:this.timestampToTime(t)},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].data.score+"ms"}},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value",name:"耗时(ms)"},dataset:{dimensions:["protocol","score"],source:a},series:[{barWidth:"35%",type:"bar",label:{show:!0,position:"top",textStyle:{fontSize:"30px",color:"#666"}}}]};e.setOption(s)},thrptEcharts(){const e=this.$echarts.init(document.getElementById("RpcTaskQPS"));let t=this.resultList[0].params.time,a=this.resultList.filter((e=>"thrpt"===e.mode)).map((e=>{let t=JSON.parse(e.params.prop)["dubbo.protocol.name"];return{score:Math.round(e.primaryMetric.scorePercentiles["99.0"]),protocol:t}})),s={title:{text:"RPC协议 QPS对比",x:"center",subtext:this.timestampToTime(t)},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].data.score+"ops/s"}},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value",name:"ops/s"},dataset:{dimensions:["protocol","score"],source:a},series:[{barWidth:"35%",type:"bar",label:{show:!0,position:"top",textStyle:{fontSize:"30px",color:"#666"}}}]};e.setOption(s)},timestampToTime(e){let t=new Date(Number(e)),a=t.getFullYear()+"-",s=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",r=t.getDate()+" ",i=t.getHours()+":",l=t.getMinutes()+":",o=t.getSeconds();return a+s+r+i+l+o}}},z=k,M=(0,p.A)(z,w,j,!1,null,"56999342",null),A=M.exports,L=function(){var e=this;e._self._c;return e._m(0)},P=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"SerializationTaskP99"}}),t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"SerializationTaskQPS"}})])}],E={name:"RpcTask",data(){return{resultList:[]}},mounted(){this.init(),this.sampleEcharts(),this.thrptEcharts()},methods:{init(){let e;this.$.ajax({type:"GET",async:!1,url:"https://raw.githubusercontent.com/wxbty/jmh_result/main/test-results/fixed/serialization/merged_prop_results.json",success:function(t){e=t}});try{this.resultList=JSON.parse(e)}catch(t){console.error("解析JMH结果字符串出错：",t)}},sampleEcharts(){const e=this.$echarts.init(document.getElementById("SerializationTaskP99"));let t=this.resultList[0].params.time,a=this.resultList.filter((e=>"sample"===e.mode)).map((e=>{let t=JSON.parse(e.params.prop)["dubbo.protocol.serialization"];return{score:Math.round(1e3*e.primaryMetric.scorePercentiles["99.0"]),protocol:t}})),s={title:{text:"序列化协议 P99对比",x:"center",subtext:this.timestampToTime(t)},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].data.score+"ms"}},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value",name:"耗时(ms)"},dataset:{dimensions:["protocol","score"],source:a},series:[{type:"bar",label:{show:!0,position:"top",textStyle:{fontSize:"30px",color:"#666"}}}]};e.setOption(s)},thrptEcharts(){const e=this.$echarts.init(document.getElementById("SerializationTaskQPS"));let t=this.resultList[0].params.time,a=this.resultList.filter((e=>"thrpt"===e.mode)).map((e=>{let t=JSON.parse(e.params.prop)["dubbo.protocol.serialization"];return{score:Math.round(e.primaryMetric.scorePercentiles["99.0"]),protocol:t}})),s={title:{text:"序列化协议 QPS对比",x:"center",subtext:this.timestampToTime(t)},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].data.score+"ops/s"}},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value",name:"ops/s"},dataset:{dimensions:["protocol","score"],source:a},series:[{type:"bar",label:{show:!0,position:"top",textStyle:{fontSize:"30px",color:"#666"}}}]};e.setOption(s)},timestampToTime(e){let t=new Date(Number(e)),a=t.getFullYear()+"-",s=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",r=t.getDate()+" ",i=t.getHours()+":",l=t.getMinutes()+":",o=t.getSeconds();return a+s+r+i+l+o}}},I=E,D=(0,p.A)(I,L,P,!1,null,"1f5aff10",null),N=D.exports,J=function(){var e=this,t=e._self._c;return t("div",[t("el-row",[t("el-button",{attrs:{type:"primary"},on:{click:e.open}},[e._v("触发Actions")])],1),t("el-row",[t("el-col",{attrs:{span:6}},[t("span",[e._v("选择具体配置")]),t("el-cascader",{attrs:{options:e.cascaderOptions,clearable:""},model:{value:e.leftSelectedOptions,callback:function(t){e.leftSelectedOptions=t},expression:"leftSelectedOptions"}}),t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"TriggerP99"}})],1),t("el-col",{attrs:{span:6}},[t("span",[e._v("选择具体配置")]),t("el-cascader",{attrs:{options:e.cascaderOptions,clearable:""},model:{value:e.rightSelectedOptions,callback:function(t){e.rightSelectedOptions=t},expression:"rightSelectedOptions"}}),t("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"TriggerQps"}})],1),t("el-col",{attrs:{span:6}},[t("el-header",[t("h1",[e._v(e._s(e.leftTableTitle))])]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.leftTableDate,"row-key":"spanId_",border:"",lazy:"","default-expand-all":"","tree-props":{children:"children"}}},[t("el-table-column",{attrs:{prop:"operationName_",label:"方法名","min-width":"90%"}}),t("el-table-column",{attrs:{prop:"cost",label:"耗时（ms）","min-width":"10%"}})],1)],1),t("el-col",{attrs:{span:6}},[t("el-header",[t("h1",[e._v(e._s(e.rightTableTitle))])]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.rightTableDate,"row-key":"spanId_",border:"",lazy:"","default-expand-all":"","tree-props":{children:"children"}}},[t("el-table-column",{attrs:{prop:"operationName_",label:"方法名","min-width":"90%"}}),t("el-table-column",{attrs:{prop:"cost",label:"耗时（ms）","min-width":"10%"}})],1)],1)],1)],1)},R=[],$=(a(91713),{name:"TriggerTraceDetail",data(){return{triggerTable:[],leftTableTitle:"",leftTableDate:[],rightTableDate:[],rightTableTitle:"",leftSelectedOptions:[],rightSelectedOptions:[],resultList:[],cascaderOptions:[{value:"dubbo",label:"Dubbo协议",children:[{value:"hessian2",label:"Hessian2"},{value:"fastjson2",label:"Fastjson2"},{value:"fastjson",label:"Fastjson"},{value:"avro",label:"Avro"},{value:"fst",label:"Fst"},{value:"gson",label:"Gson"},{value:"kryo",label:"Kryo"},{value:"msgpack",label:"Msgpack"}]},{value:"rmi",label:"Rmi协议",children:[{value:"hessian2",label:"Hessian2"},{value:"fastjson2",label:"Fastjson2"},{value:"fastjson",label:"Fastjson"},{value:"avro",label:"Avro"},{value:"fst",label:"Fst"},{value:"gson",label:"Gson"},{value:"kryo",label:"Kryo"},{value:"msgpack",label:"Msgpack"}]},{value:"tri",label:"Triple协议",children:[{value:"hessian2",label:"Hessian2"},{value:"fastjson2",label:"Fastjson2"},{value:"fastjson",label:"Fastjson"},{value:"avro",label:"Avro"},{value:"fst",label:"Fst"},{value:"gson",label:"Gson"},{value:"kryo",label:"Kryo"},{value:"msgpack",label:"Msgpack"}]}]}},mounted(){try{this.init()}catch(e){console.error("init：",e)}try{this.initTable()}catch(e){console.error("initTable：",e)}try{this.sampleEcharts()}catch(e){console.error("sampleEcharts：",e)}try{this.thrptEcharts()}catch(e){console.error("thrptEcharts：",e)}},methods:{init(){let e;this.$.ajax({type:"GET",async:!1,url:"https://raw.githubusercontent.com/wxbty/jmh_result/main/test-results/scenario/merged_prop_results.json",success:function(t){e=t}});try{this.resultList=JSON.parse(e)}catch(t){console.error("解析JMH结果字符串出错：",t)}},sampleEcharts(){const e=this.$echarts.init(document.getElementById("TriggerP99"));let t=this.resultList[0].params.time,a=this.resultList.filter((e=>"sample"===e.mode)).map((e=>{let t=JSON.parse(e.params.prop)["dubbo.protocol.name"],a=JSON.parse(e.params.prop)["dubbo.protocol.serialization"];return{score:Math.round(1e3*e.primaryMetric.scorePercentiles["99.0"]),protocol:t+"-"+a}})),s={title:{text:"P99对比",x:"center",subtext:this.timestampToTime(t)},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].data.score+"ms"}},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value",name:"耗时(ms)"},dataset:{dimensions:["protocol","score"],source:a},series:[{barWidth:"25%",type:"bar",label:{show:!0,position:"top",textStyle:{fontSize:"30px",color:"#666"}}}]};e.setOption(s)},thrptEcharts(){const e=this.$echarts.init(document.getElementById("TriggerQps"));let t=this.resultList[0].params.time,a=this.resultList.filter((e=>"thrpt"===e.mode)).map((e=>{let t=JSON.parse(e.params.prop)["dubbo.protocol.name"],a=JSON.parse(e.params.prop)["dubbo.protocol.serialization"];return{score:Math.round(e.primaryMetric.scorePercentiles["99.0"]),protocol:t+"-"+a}})),s={title:{text:"QPS对比",x:"center",subtext:this.timestampToTime(t)},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].data.score+"ops/s"}},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value",name:"ops/s"},dataset:{dimensions:["protocol","score"],source:a},series:[{barWidth:"25%",type:"bar",label:{show:!0,position:"top",textStyle:{fontSize:"30px",color:"#666"}}}]};e.setOption(s)},timestampToTime(e){let t=new Date(Number(e)),a=t.getFullYear()+"-",s=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",r=t.getDate()+" ",i=t.getHours()+":",l=t.getMinutes()+":",o=t.getSeconds();return a+s+r+i+l+o},initTable(){let e;this.$.ajax({type:"GET",async:!1,url:"https://raw.githubusercontent.com/wxbty/jmh_result/main/test-results/scenario/merged_prop_traces.json",success:function(t){e=t}});try{this.triggerTable=JSON.parse(e),console.log("this.rpcTable",this.triggerTable)}catch(t){console.error("解析JMH结果字符串出错：",t)}this.leftTableDate=this.createSpanTree(null!=this.triggerTable&&this.triggerTable.length>0?this.triggerTable[0].spans_:[]),this.rightTableDate=this.createSpanTree(null!=this.triggerTable&&this.triggerTable.length>1?this.triggerTable[1].spans_:[]),this.leftTableTitle=null!=this.triggerTable&&this.triggerTable.length>0?this.triggerTable[0].prop:"",this.rightTableTitle=null!=this.triggerTable&&this.triggerTable.length>1?this.triggerTable[1].prop:""},createSpanTree(e){console.log(e);let t=new Map,a=[];for(let s of e)t.set(s.spanId_,{...s,spanId_:s.spanId_.toString(),cost:s.endTime_-s.startTime_,children:[]}),-1===s.parentSpanId_&&a.push(t.get(s.spanId_));for(let s of e)if(-1!==s.parentSpanId_){let e=t.get(s.parentSpanId_);e&&e.children.push(t.get(s.spanId_))}return console.log(a),a},open(){if((null==this.leftSelectedOptions||0===this.leftSelectedOptions.length)&&(null==this.rightSelectedOptions||0===this.rightSelectedOptions.length))return void this.$message({type:"warning",message:"请选择至少一个"});let e=null,t=null;console.log(this.leftSelectedOptions),this.leftSelectedOptions.length>0&&(e=this.leftSelectedOptions[0],t=this.leftSelectedOptions[1]);let a=null,s=null;this.rightSelectedOptions.length>0&&(a=this.rightSelectedOptions[0],s=this.rightSelectedOptions[1]);const r=this.$createElement;this.$msgbox({title:"消息",message:r("p",null,[r("p",null,"左边内容：rpc协议："+(null==e?"":e)+"序列化："+(null==t?"":t)),r("p",null,"右边内容：rpc协议："+(null==a?"":a)+"序列化："+(null==s?"":s))]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:(r,i,l)=>{if("confirm"===r){let r="";e&&(r+="dubbo.protocol.name|"+e),t&&(e&&(r+="|"),r+="dubbo.protocol.serialization|"+t);let o="";a&&(o+="dubbo.protocol.name|"+a),s&&(a&&(o+="|"),o+="dubbo.protocol.serialization|"+s);let n=r+(r?"@":"")+o;i.confirmButtonLoading=!0,i.confirmButtonText="执行中...",this.$.ajax({url:"https://api.github.com/repos/wxbty/dubbo/dispatches",type:"POST",beforeSend:function(e){e.setRequestHeader("Authorization","Basic "+btoa("username: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")),e.setRequestHeader("Content-Type","application/json"),e.setRequestHeader("Accept","application/vnd.github.everest-preview+json")},data:JSON.stringify({event_type:"manual-trigger",client_payload:{prop:n}}),success:function(e){i.confirmButtonLoading=!1,console.log("Success:",e),l()},error:(e,t,a)=>{i.confirmButtonLoading=!1,console.error("Error:",a),this.$message({type:"error",message:"触发失败"})}})}else l()}}).then((()=>{this.$message({type:"success",message:"触发成功！结果将在一小时内显示"})})).catch((()=>{this.$message({type:"info",message:"已取消"})}))}}}),C=$,F=(0,p.A)(C,J,R,!1,null,"a8d2a524",null),H=F.exports;const B=(e,t)=>{let a=null;return function(){let s=this,r=arguments;clearTimeout(a),a=setTimeout((function(){e.apply(s,r)}),t)}},G=window.ResizeObserver;window.ResizeObserver=class extends G{constructor(e){e=B(e,16),super(e)}};var q={name:"App",components:{TriggerTraceDetail:H,SerializationTask:N,RpcTask:A,TraceDetail:_,ScheduledTask:y,PullRequest:h}},Q=q,U=(0,p.A)(Q,r,i,!1,null,null,null),K=U.exports,V=a(31568),W=a.n(V),Y=a(48010),Z=a.n(Y),X=a(31795),ee=a.n(X);s["default"].prototype.$=ee(),s["default"].prototype.$echarts=Z(),s["default"].use(W()),s["default"].config.productionTip=!1,new s["default"]({render:e=>e(K)}).$mount("#app")}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,s,r,i){if(!s){var l=1/0;for(p=0;p<e.length;p++){s=e[p][0],r=e[p][1],i=e[p][2];for(var o=!0,n=0;n<s.length;n++)(!1&i||l>=i)&&Object.keys(a.O).every((function(e){return a.O[e](s[n])}))?s.splice(n--,1):(o=!1,i<l&&(l=i));if(o){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[s,r,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,i,l=s[0],o=s[1],n=s[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(n)var p=n(a)}for(t&&t(s);c<l.length;c++)i=l[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(p)},s=self["webpackChunkdubbo_benchmark"]=self["webpackChunkdubbo_benchmark"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(20493)}));s=a.O(s)})();
//# sourceMappingURL=app.74e90daf.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d80f20e","chunk-e2ef1232","chunk-2d20955d"],{"1a2c":function(t,e,o){"use strict";o("dfbc")},2855:function(t,e,o){"use strict";o.r(e);var a,n,c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"left-board"},[o("div",{staticClass:"logo-wrapper"},[o("div",{staticClass:"logo"},[o("img",{attrs:{src:t.logo,alt:"logo"}}),t._v(" Form Generator ")])]),o("el-scrollbar",{staticClass:"left-scrollbar"},[o("div",{staticClass:"components-list"},[o("div",{staticClass:"components-title"},[o("svg-icon",{attrs:{"icon-class":"component"}}),t._v("输入型组件 ")],1),o("draggable",{staticClass:"components-draggable",attrs:{list:t.inputComponents,group:{name:"componentsGroup",pull:"clone",put:!1},clone:t.cloneComponent,draggable:".components-item",sort:!1},on:{end:t.onEnd}},t._l(t.inputComponents,(function(e,a){return o("div",{key:a,staticClass:"components-item",on:{click:function(o){return t.addComponent(e)}}},[o("div",{staticClass:"components-body"},[o("svg-icon",{attrs:{"icon-class":e.tagIcon}}),t._v(" "+t._s(e.label)+" ")],1)])})),0),o("div",{staticClass:"components-title"},[o("svg-icon",{attrs:{"icon-class":"component"}}),t._v("选择型组件 ")],1),o("draggable",{staticClass:"components-draggable",attrs:{list:t.selectComponents,group:{name:"componentsGroup",pull:"clone",put:!1},clone:t.cloneComponent,draggable:".components-item",sort:!1},on:{end:t.onEnd}},t._l(t.selectComponents,(function(e,a){return o("div",{key:a,staticClass:"components-item",on:{click:function(o){return t.addComponent(e)}}},[o("div",{staticClass:"components-body"},[o("svg-icon",{attrs:{"icon-class":e.tagIcon}}),t._v(" "+t._s(e.label)+" ")],1)])})),0),o("div",{staticClass:"components-title"},[o("svg-icon",{attrs:{"icon-class":"component"}}),t._v(" 布局型组件 ")],1),o("draggable",{staticClass:"components-draggable",attrs:{list:t.layoutComponents,group:{name:"componentsGroup",pull:"clone",put:!1},clone:t.cloneComponent,draggable:".components-item",sort:!1},on:{end:t.onEnd}},t._l(t.layoutComponents,(function(e,a){return o("div",{key:a,staticClass:"components-item",on:{click:function(o){return t.addComponent(e)}}},[o("div",{staticClass:"components-body"},[o("svg-icon",{attrs:{"icon-class":e.tagIcon}}),t._v(" "+t._s(e.label)+" ")],1)])})),0)],1)])],1),o("div",{staticClass:"center-board"},[o("div",{staticClass:"action-bar"},[o("el-button",{attrs:{icon:"el-icon-download",type:"text"},on:{click:t.download}},[t._v(" 导出vue文件 ")]),o("el-button",{staticClass:"copy-btn-main",attrs:{icon:"el-icon-document-copy",type:"text"},on:{click:t.copy}},[t._v(" 复制代码 ")]),o("el-button",{staticClass:"delete-btn",attrs:{icon:"el-icon-delete",type:"text"},on:{click:t.empty}},[t._v(" 清空 ")])],1),o("el-scrollbar",{staticClass:"center-scrollbar"},[o("el-row",{staticClass:"center-board-row",attrs:{gutter:t.formConf.gutter}},[o("el-form",{attrs:{size:t.formConf.size,"label-position":t.formConf.labelPosition,disabled:t.formConf.disabled,"label-width":t.formConf.labelWidth+"px"}},[o("draggable",{staticClass:"drawing-board",attrs:{list:t.drawingList,animation:340,group:"componentsGroup"}},t._l(t.drawingList,(function(e,a){return o("draggable-item",{key:e.renderKey,attrs:{"drawing-list":t.drawingList,element:e,index:a,"active-id":t.activeId,"form-conf":t.formConf},on:{activeItem:t.activeFormItem,copyItem:t.drawingItemCopy,deleteItem:t.drawingItemDelete}})})),1),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.drawingList.length,expression:"!drawingList.length"}],staticClass:"empty-info"},[t._v(" 从左侧拖入或点选组件进行表单设计 ")])],1)],1)],1)],1),o("right-panel",{attrs:{"active-data":t.activeData,"form-conf":t.formConf,"show-field":!!t.drawingList.length},on:{"tag-change":t.tagChange}}),o("code-type-dialog",{attrs:{visible:t.dialogVisible,title:"选择生成类型","show-file-name":t.showFileName},on:{"update:visible":function(e){t.dialogVisible=e},confirm:t.generate}}),o("input",{attrs:{id:"copyNode",type:"hidden"}})],1)},i=[],l=o("53ca"),r=o("5530"),s=(o("ac1f"),o("5319"),o("e9c4"),o("d81d"),o("a434"),o("d3b7"),o("159b"),o("b64b"),o("c740"),o("b76a")),d=o.n(s),u=o("e552"),p=o.n(u),_=o("b311"),f=o.n(_),m=o("a85b"),h=o("766b"),b=o("2e2a"),v=o("ed08");o("99af"),o("a15b"),o("b0c0");function g(t){return'<el-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose" title="Dialog Titile">\n    '.concat(t,'\n    <div slot="footer">\n      <el-button @click="close">取消</el-button>\n      <el-button type="primary" @click="handelConfirm">确定</el-button>\n    </div>\n  </el-dialog>')}function y(t){return"<template>\n    <div>\n      ".concat(t,"\n    </div>\n  </template>")}function w(t){return"<script>\n    ".concat(t,"\n  <\/script>")}function O(t){return"<style>\n    ".concat(t,"\n  </style>")}function E(t,e,o){var a="";"right"!==t.labelPosition&&(a='label-position="'.concat(t.labelPosition,'"'));var c=t.disabled?':disabled="'.concat(t.disabled,'"'):"",i='<el-form ref="'.concat(t.formRef,'" :model="').concat(t.formModel,'" :rules="').concat(t.formRules,'" size="').concat(t.size,'" ').concat(c,' label-width="').concat(t.labelWidth,'px" ').concat(a,">\n      ").concat(e,"\n      ").concat(D(t,o),"\n    </el-form>");return n&&(i='<el-row :gutter="'.concat(t.gutter,'">\n        ').concat(i,"\n      </el-row>")),i}function D(t,e){var o="";return t.formBtns&&"file"===e&&(o='<el-form-item size="large">\n          <el-button type="primary" @click="submitForm">提交</el-button>\n          <el-button @click="resetForm">重置</el-button>\n        </el-form-item>',n&&(o='<el-col :span="24">\n          '.concat(o,"\n        </el-col>"))),o}function M(t,e){return n||24!==t.span?'<el-col :span="'.concat(t.span,'">\n      ').concat(e,"\n    </el-col>"):e}var C={colFormItem:function(t){var e="";t.labelWidth&&t.labelWidth!==a.labelWidth&&(e='label-width="'.concat(t.labelWidth,'px"'));var o=!b["e"][t.tag]&&t.required?"required":"",n=x[t.tag]?x[t.tag](t):null,c="<el-form-item ".concat(e,' label="').concat(t.label,'" prop="').concat(t.vModel,'" ').concat(o,">\n        ").concat(n,"\n      </el-form-item>");return c=M(t,c),c},rowFormItem:function(t){var e="default"===t.type?"":'type="'.concat(t.type,'"'),o="default"===t.type?"":'justify="'.concat(t.justify,'"'),a="default"===t.type?"":'align="'.concat(t.align,'"'),n=t.gutter?'gutter="'.concat(t.gutter,'"'):"",c=t.children.map((function(t){return C[t.layout](t)})),i="<el-row ".concat(e," ").concat(o," ").concat(a," ").concat(n,">\n      ").concat(c.join("\n"),"\n    </el-row>");return i=M(t,i),i}},x={"el-button":function(t){var e=I(t),o=(e.tag,e.disabled),a=t.type?'type="'.concat(t.type,'"'):"",n=t.icon?'icon="'.concat(t.icon,'"'):"",c=t.size?'size="'.concat(t.size,'"'):"",i=j(t);return i&&(i="\n".concat(i,"\n")),"<".concat(t.tag," ").concat(a," ").concat(n," ").concat(c," ").concat(o,">").concat(i,"</").concat(t.tag,">")},"el-input":function(t){var e=I(t),o=e.disabled,a=e.vModel,n=e.clearable,c=e.placeholder,i=e.width,l=t.maxlength?':maxlength="'.concat(t.maxlength,'"'):"",r=t["show-word-limit"]?"show-word-limit":"",s=t.readonly?"readonly":"",d=t["prefix-icon"]?"prefix-icon='".concat(t["prefix-icon"],"'"):"",u=t["suffix-icon"]?"suffix-icon='".concat(t["suffix-icon"],"'"):"",p=t["show-password"]?"show-password":"",_=t.type?'type="'.concat(t.type,'"'):"",f=t.autosize&&t.autosize.minRows?':autosize="{minRows: '.concat(t.autosize.minRows,", maxRows: ").concat(t.autosize.maxRows,'}"'):"",m=k(t);return m&&(m="\n".concat(m,"\n")),"<".concat(t.tag," ").concat(a," ").concat(_," ").concat(c," ").concat(l," ").concat(r," ").concat(s," ").concat(o," ").concat(n," ").concat(d," ").concat(u," ").concat(p," ").concat(f," ").concat(i,">").concat(m,"</").concat(t.tag,">")},"el-input-number":function(t){var e=I(t),o=e.disabled,a=e.vModel,n=e.placeholder,c=t["controls-position"]?"controls-position=".concat(t["controls-position"]):"",i=t.min?":min='".concat(t.min,"'"):"",l=t.max?":max='".concat(t.max,"'"):"",r=t.step?":step='".concat(t.step,"'"):"",s=t["step-strictly"]?"step-strictly":"",d=t.precision?":precision='".concat(t.precision,"'"):"";return"<".concat(t.tag," ").concat(a," ").concat(n," ").concat(r," ").concat(s," ").concat(d," ").concat(c," ").concat(i," ").concat(l," ").concat(o,"></").concat(t.tag,">")},"el-select":function(t){var e=I(t),o=e.disabled,a=e.vModel,n=e.clearable,c=e.placeholder,i=e.width,l=t.filterable?"filterable":"",r=t.multiple?"multiple":"",s=P(t);return s&&(s="\n".concat(s,"\n")),"<".concat(t.tag," ").concat(a," ").concat(c," ").concat(o," ").concat(r," ").concat(l," ").concat(n," ").concat(i,">").concat(s,"</").concat(t.tag,">")},"el-radio-group":function(t){var e=I(t),o=e.disabled,a=e.vModel,n='size="'.concat(t.size,'"'),c=A(t);return c&&(c="\n".concat(c,"\n")),"<".concat(t.tag," ").concat(a," ").concat(n," ").concat(o,">").concat(c,"</").concat(t.tag,">")},"el-checkbox-group":function(t){var e=I(t),o=e.disabled,a=e.vModel,n='size="'.concat(t.size,'"'),c=t.min?':min="'.concat(t.min,'"'):"",i=t.max?':max="'.concat(t.max,'"'):"",l=L(t);return l&&(l="\n".concat(l,"\n")),"<".concat(t.tag," ").concat(a," ").concat(c," ").concat(i," ").concat(n," ").concat(o,">").concat(l,"</").concat(t.tag,">")},"el-switch":function(t){var e=I(t),o=e.disabled,a=e.vModel,n=t["active-text"]?'active-text="'.concat(t["active-text"],'"'):"",c=t["inactive-text"]?'inactive-text="'.concat(t["inactive-text"],'"'):"",i=t["active-color"]?'active-color="'.concat(t["active-color"],'"'):"",l=t["inactive-color"]?'inactive-color="'.concat(t["inactive-color"],'"'):"",r=!0!==t["active-value"]?":active-value='".concat(JSON.stringify(t["active-value"]),"'"):"",s=!1!==t["inactive-value"]?":inactive-value='".concat(JSON.stringify(t["inactive-value"]),"'"):"";return"<".concat(t.tag," ").concat(a," ").concat(n," ").concat(c," ").concat(i," ").concat(l," ").concat(r," ").concat(s," ").concat(o,"></").concat(t.tag,">")},"el-cascader":function(t){var e=I(t),o=e.disabled,a=e.vModel,n=e.clearable,c=e.placeholder,i=e.width,l=t.options?':options="'.concat(t.vModel,'Options"'):"",r=t.props?':props="'.concat(t.vModel,'Props"'):"",s=t["show-all-levels"]?"":':show-all-levels="false"',d=t.filterable?"filterable":"",u="/"===t.separator?"":'separator="'.concat(t.separator,'"');return"<".concat(t.tag," ").concat(a," ").concat(l," ").concat(r," ").concat(i," ").concat(s," ").concat(c," ").concat(u," ").concat(d," ").concat(n," ").concat(o,"></").concat(t.tag,">")},"el-slider":function(t){var e=I(t),o=e.disabled,a=e.vModel,n=t.min?":min='".concat(t.min,"'"):"",c=t.max?":max='".concat(t.max,"'"):"",i=t.step?":step='".concat(t.step,"'"):"",l=t.range?"range":"",r=t["show-stops"]?':show-stops="'.concat(t["show-stops"],'"'):"";return"<".concat(t.tag," ").concat(n," ").concat(c," ").concat(i," ").concat(a," ").concat(l," ").concat(r," ").concat(o,"></").concat(t.tag,">")},"el-time-picker":function(t){var e=I(t),o=e.disabled,a=e.vModel,n=e.clearable,c=e.placeholder,i=e.width,l=t["start-placeholder"]?'start-placeholder="'.concat(t["start-placeholder"],'"'):"",r=t["end-placeholder"]?'end-placeholder="'.concat(t["end-placeholder"],'"'):"",s=t["range-separator"]?'range-separator="'.concat(t["range-separator"],'"'):"",d=t["is-range"]?"is-range":"",u=t.format?'format="'.concat(t.format,'"'):"",p=t["value-format"]?'value-format="'.concat(t["value-format"],'"'):"",_=t["picker-options"]?":picker-options='".concat(JSON.stringify(t["picker-options"]),"'"):"";return"<".concat(t.tag," ").concat(a," ").concat(d," ").concat(u," ").concat(p," ").concat(_," ").concat(i," ").concat(c," ").concat(l," ").concat(r," ").concat(s," ").concat(n," ").concat(o,"></").concat(t.tag,">")},"el-date-picker":function(t){var e=I(t),o=e.disabled,a=e.vModel,n=e.clearable,c=e.placeholder,i=e.width,l=t["start-placeholder"]?'start-placeholder="'.concat(t["start-placeholder"],'"'):"",r=t["end-placeholder"]?'end-placeholder="'.concat(t["end-placeholder"],'"'):"",s=t["range-separator"]?'range-separator="'.concat(t["range-separator"],'"'):"",d=t.format?'format="'.concat(t.format,'"'):"",u=t["value-format"]?'value-format="'.concat(t["value-format"],'"'):"",p="date"===t.type?"":'type="'.concat(t.type,'"'),_=t.readonly?"readonly":"";return"<".concat(t.tag," ").concat(p," ").concat(a," ").concat(d," ").concat(u," ").concat(i," ").concat(c," ").concat(l," ").concat(r," ").concat(s," ").concat(n," ").concat(_," ").concat(o,"></").concat(t.tag,">")},"el-rate":function(t){var e=I(t),o=e.disabled,a=e.vModel,n=(t.max&&":max='".concat(t.max,"'"),t["allow-half"]?"allow-half":""),c=t["show-text"]?"show-text":"",i=t["show-score"]?"show-score":"";return"<".concat(t.tag," ").concat(a," ").concat(n," ").concat(c," ").concat(i," ").concat(o,"></").concat(t.tag,">")},"el-color-picker":function(t){var e=I(t),o=e.disabled,a=e.vModel,n='size="'.concat(t.size,'"'),c=t["show-alpha"]?"show-alpha":"",i=t["color-format"]?'color-format="'.concat(t["color-format"],'"'):"";return"<".concat(t.tag," ").concat(a," ").concat(n," ").concat(c," ").concat(i," ").concat(o,"></").concat(t.tag,">")},"el-upload":function(t){var e=t.disabled?":disabled='true'":"",o=t.action?':action="'.concat(t.vModel,'Action"'):"",a=t.multiple?"multiple":"",n="text"!==t["list-type"]?'list-type="'.concat(t["list-type"],'"'):"",c=t.accept?'accept="'.concat(t.accept,'"'):"",i="file"!==t.name?'name="'.concat(t.name,'"'):"",l=!1===t["auto-upload"]?':auto-upload="false"':"",r=':before-upload="'.concat(t.vModel,'BeforeUpload"'),s=':file-list="'.concat(t.vModel,'fileList"'),d='ref="'.concat(t.vModel,'"'),u=T(t);return u&&(u="\n".concat(u,"\n")),"<".concat(t.tag," ").concat(d," ").concat(s," ").concat(o," ").concat(l," ").concat(a," ").concat(r," ").concat(n," ").concat(c," ").concat(i," ").concat(e,">").concat(u,"</").concat(t.tag,">")}};function I(t){return{vModel:'v-model="'.concat(a.formModel,".").concat(t.vModel,'"'),clearable:t.clearable?"clearable":"",placeholder:t.placeholder?'placeholder="'.concat(t.placeholder,'"'):"",width:t.style&&t.style.width?":style=\"{width: '100%'}\"":"",disabled:t.disabled?":disabled='true'":""}}function j(t){var e=[];return t.default&&e.push(t.default),e.join("\n")}function k(t){var e=[];return t.prepend&&e.push('<template slot="prepend">'.concat(t.prepend,"</template>")),t.append&&e.push('<template slot="append">'.concat(t.append,"</template>")),e.join("\n")}function P(t){var e=[];return t.options&&t.options.length&&e.push('<el-option v-for="(item, index) in '.concat(t.vModel,'Options" :key="index" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>')),e.join("\n")}function A(t){var e=[];if(t.options&&t.options.length){var o="button"===t.optionType?"el-radio-button":"el-radio",a=t.border?"border":"";e.push("<".concat(o,' v-for="(item, index) in ').concat(t.vModel,'Options" :key="index" :label="item.value" :disabled="item.disabled" ').concat(a,">{{item.label}}</").concat(o,">"))}return e.join("\n")}function L(t){var e=[];if(t.options&&t.options.length){var o="button"===t.optionType?"el-checkbox-button":"el-checkbox",a=t.border?"border":"";e.push("<".concat(o,' v-for="(item, index) in ').concat(t.vModel,'Options" :key="index" :label="item.value" :disabled="item.disabled" ').concat(a,">{{item.label}}</").concat(o,">"))}return e.join("\n")}function T(t){var e=[];return"picture-card"===t["list-type"]?e.push('<i class="el-icon-plus"></i>'):e.push('<el-button size="small" type="primary" icon="el-icon-upload">'.concat(t.buttonText,"</el-button>")),t.showTip&&e.push('<div slot="tip" class="el-upload__tip">只能上传不超过 '.concat(t.fileSize).concat(t.sizeUnit," 的").concat(t.accept,"文件</div>")),e.join("\n")}function R(t,e){var o=[];a=t,n=t.fields.some((function(t){return 24!==t.span})),t.fields.forEach((function(t){o.push(C[t.layout](t))}));var c=o.join("\n"),i=E(t,c,e);return"dialog"===e&&(i=g(i)),a=null,i}var B=o("80de"),K={"el-rate":".el-rate{display: inline-block; vertical-align: text-top;}","el-upload":".el-upload__tip{line-height: 1.2;}"};function U(t,e){var o=K[e.tag];o&&-1===t.indexOf(o)&&t.push(o),e.children&&e.children.forEach((function(e){return U(t,e)}))}function W(t){var e=[];return t.fields.forEach((function(t){return U(e,t)})),e.join("\n")}var N,z,F=[{layout:"colFormItem",tagIcon:"input",label:"手机号",vModel:"mobile",formId:6,tag:"el-input",placeholder:"请输入手机号",defaultValue:"",span:24,style:{width:"100%"},clearable:!0,prepend:"",append:"","prefix-icon":"el-icon-mobile","suffix-icon":"",maxlength:11,"show-word-limit":!0,readonly:!1,disabled:!1,required:!0,changeTag:!0,regList:[{pattern:"/^1(3|4|5|7|8|9)\\d{9}$/",message:"手机号格式错误"}]}],q=o("81a5"),$=o.n(q),S=o("a92a"),G=o("4923"),J={components:{draggable:d.a,render:m["a"],RightPanel:h["default"],CodeTypeDialog:S["default"],DraggableItem:G["default"]},data:function(){return{logo:$.a,idGlobal:100,formConf:b["a"],inputComponents:b["b"],selectComponents:b["d"],layoutComponents:b["c"],labelWidth:100,drawingList:F,drawingData:{},activeId:F[0].formId,drawerVisible:!1,formData:{},dialogVisible:!1,generateConf:null,showFileName:!1,activeData:F[0]}},created:function(){document.body.ondrop=function(t){t.preventDefault(),t.stopPropagation()}},watch:{"activeData.label":function(t,e){void 0!==this.activeData.placeholder&&this.activeData.tag&&N===this.activeId&&(this.activeData.placeholder=this.activeData.placeholder.replace(e,"")+t)},activeId:{handler:function(t){N=t},immediate:!0}},mounted:function(){var t=this,e=new f.a("#copyNode",{text:function(e){var o=t.generateCode();return t.$notify({title:"成功",message:"代码已复制到剪切板，可粘贴。",type:"success"}),o}});e.on("error",(function(e){t.$message.error("代码复制失败")}))},methods:{activeFormItem:function(t){this.activeData=t,this.activeId=t.formId},onEnd:function(t,e){t.from!==t.to&&(this.activeData=z,this.activeId=this.idGlobal)},addComponent:function(t){var e=this.cloneComponent(t);this.drawingList.push(e),this.activeFormItem(e)},cloneComponent:function(t){var e=JSON.parse(JSON.stringify(t));return e.formId=++this.idGlobal,e.span=b["a"].span,e.renderKey=+new Date,e.layout||(e.layout="colFormItem"),"colFormItem"===e.layout?(e.vModel="field".concat(this.idGlobal),void 0!==e.placeholder&&(e.placeholder+=e.label),z=e):"rowFormItem"===e.layout&&(delete e.label,e.componentName="row".concat(this.idGlobal),e.gutter=this.formConf.gutter,z=e),z},AssembleFormData:function(){this.formData=Object(r["a"])({fields:JSON.parse(JSON.stringify(this.drawingList))},this.formConf)},generate:function(t){var e=this["exec".concat(Object(v["h"])(this.operationType))];this.generateConf=t,e&&e(t)},execRun:function(t){this.AssembleFormData(),this.drawerVisible=!0},execDownload:function(t){var e=this.generateCode(),o=new Blob([e],{type:"text/plain;charset=utf-8"});this.$download.saveAs(o,t.fileName)},execCopy:function(t){document.getElementById("copyNode").click()},empty:function(){var t=this;this.$confirm("确定要清空所有组件吗？","提示",{type:"warning"}).then((function(){t.drawingList=[]}))},drawingItemCopy:function(t,e){var o=JSON.parse(JSON.stringify(t));o=this.createIdAndKey(o),e.push(o),this.activeFormItem(o)},createIdAndKey:function(t){var e=this;return t.formId=++this.idGlobal,t.renderKey=+new Date,"colFormItem"===t.layout?t.vModel="field".concat(this.idGlobal):"rowFormItem"===t.layout&&(t.componentName="row".concat(this.idGlobal)),Array.isArray(t.children)&&(t.children=t.children.map((function(t){return e.createIdAndKey(t)}))),t},drawingItemDelete:function(t,e){var o=this;e.splice(t,1),this.$nextTick((function(){var t=o.drawingList.length;t&&o.activeFormItem(o.drawingList[t-1])}))},generateCode:function(){var t=this.generateConf.type;this.AssembleFormData();var e=w(Object(B["a"])(this.formData,t)),o=y(R(this.formData,t)),a=O(W(this.formData));return p.a.html(o+e+a,v["b"].html)},download:function(){this.dialogVisible=!0,this.showFileName=!0,this.operationType="download"},run:function(){this.dialogVisible=!0,this.showFileName=!1,this.operationType="run"},copy:function(){this.dialogVisible=!0,this.showFileName=!1,this.operationType="copy"},tagChange:function(t){var e=this;t=this.cloneComponent(t),t.vModel=this.activeData.vModel,t.formId=this.activeId,t.span=this.activeData.span,delete this.activeData.tag,delete this.activeData.tagIcon,delete this.activeData.document,Object.keys(t).forEach((function(o){void 0!==e.activeData[o]&&Object(l["a"])(e.activeData[o])===Object(l["a"])(t[o])&&(t[o]=e.activeData[o])})),this.activeData=t,this.updateDrawingList(t,this.drawingList)},updateDrawingList:function(t,e){var o=this,a=e.findIndex((function(t){return t.formId===o.activeId}));a>-1?e.splice(a,1,t):e.forEach((function(e){Array.isArray(e.children)&&o.updateDrawingList(t,e.children)}))}}},V=J,H=(o("1a2c"),o("2877")),Q=Object(H["a"])(V,c,i,!1,null,null,null);e["default"]=Q.exports},4923:function(t,e,o){"use strict";o.r(e);o("d81d");var a=o("b76a"),n=o.n(a),c=o("a85b"),i={itemBtns:function(t,e,o,a){var n=this.$listeners,c=n.copyItem,i=n.deleteItem;return[t("span",{class:"drawing-item-copy",attrs:{title:"复制"},on:{click:function(t){c(e,a),t.stopPropagation()}}},[t("i",{class:"el-icon-copy-document"})]),t("span",{class:"drawing-item-delete",attrs:{title:"删除"},on:{click:function(t){i(o,a),t.stopPropagation()}}},[t("i",{class:"el-icon-delete"})])]}},l={colFormItem:function(t,e,o,a){var n=this,l=this.$listeners.activeItem,r=this.activeId===e.formId?"drawing-item active-from-item":"drawing-item";return this.formConf.unFocusedComponentBorder&&(r+=" unfocus-bordered"),t("el-col",{attrs:{span:e.span},class:r,nativeOn:{click:function(t){l(e),t.stopPropagation()}}},[t("el-form-item",{attrs:{"label-width":e.labelWidth?"".concat(e.labelWidth,"px"):null,label:e.label,required:e.required}},[t(c["a"],{key:e.renderKey,attrs:{conf:e},on:{input:function(t){n.$set(e,"defaultValue",t)}}})]),i.itemBtns.apply(this,arguments)])},rowFormItem:function(t,e,o,a){var c=this.$listeners.activeItem,l=this.activeId===e.formId?"drawing-row-item active-from-item":"drawing-row-item",s=r.apply(this,arguments);return"flex"===e.type&&(s=t("el-row",{attrs:{type:e.type,justify:e.justify,align:e.align}},[s])),t("el-col",{attrs:{span:e.span}},[t("el-row",{attrs:{gutter:e.gutter},class:l,nativeOn:{click:function(t){c(e),t.stopPropagation()}}},[t("span",{class:"component-name"},[e.componentName]),t(n.a,{attrs:{list:e.children,animation:340,group:"componentsGroup"},class:"drag-wrapper"},[s]),i.itemBtns.apply(this,arguments)])])}};function r(t,e,o,a){var n=this;return Array.isArray(e.children)?e.children.map((function(o,a){var c=l[o.layout];return c?c.call(n,t,o,a,e.children):s()})):null}function s(){throw new Error("没有与".concat(this.element.layout,"匹配的layout"))}var d,u,p={components:{render:c["a"],draggable:n.a},props:["element","index","drawingList","activeId","formConf"],render:function(t){var e=l[this.element.layout];return e?e.call(this,t,this.element,this.index,this.drawingList):s()}},_=p,f=o("2877"),m=Object(f["a"])(_,d,u,!1,null,null,null);e["default"]=m.exports},"80de":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return makeUpJs}));var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("e9c4"),core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("a15b"),core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("99af"),core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("b64b"),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__),util__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("3022"),util__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__),_utils_index__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("ed08"),_config__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("2e2a"),units={KB:"1024",MB:"1024 / 1024",GB:"1024 / 1024 / 1024"},confGlobal,inheritAttrs={file:"",dialog:"inheritAttrs: false,"};function makeUpJs(t,e){confGlobal=t=JSON.parse(JSON.stringify(t));var o=[],a=[],n=[],c=[],i=mixinMethod(e),l=[];t.fields.forEach((function(t){buildAttributes(t,o,a,n,i,c,l)}));var r=buildexport(t,e,o.join("\n"),a.join("\n"),n.join("\n"),l.join("\n"),c.join("\n"),i.join("\n"));return confGlobal=null,r}function buildAttributes(t,e,o,a,n,c,i){if(buildData(t,e),buildRules(t,o),t.options&&t.options.length&&(buildOptions(t,a),"dynamic"===t.dataType)){var l="".concat(t.vModel,"Options"),r=Object(_utils_index__WEBPACK_IMPORTED_MODULE_7__["h"])(l);buildOptionMethod("get".concat(r),l,n)}t.props&&t.props.props&&buildProps(t,c),t.action&&"el-upload"===t.tag&&(i.push("".concat(t.vModel,"Action: '").concat(t.action,"',\n      ").concat(t.vModel,"fileList: [],")),n.push(buildBeforeUpload(t)),t["auto-upload"]||n.push(buildSubmitUpload(t))),t.children&&t.children.forEach((function(t){buildAttributes(t,e,o,a,n,c,i)}))}function mixinMethod(t){var e=[],o={file:confGlobal.formBtns?{submitForm:"submitForm() {\n        this.$refs['".concat(confGlobal.formRef,"'].validate(valid => {\n          if(!valid) return\n          // TODO 提交表单\n        })\n      },"),resetForm:"resetForm() {\n        this.$refs['".concat(confGlobal.formRef,"'].resetFields()\n      },")}:null,dialog:{onOpen:"onOpen() {},",onClose:"onClose() {\n        this.$refs['".concat(confGlobal.formRef,"'].resetFields()\n      },"),close:"close() {\n        this.$emit('update:visible', false)\n      },",handelConfirm:"handelConfirm() {\n        this.$refs['".concat(confGlobal.formRef,"'].validate(valid => {\n          if(!valid) return\n          this.close()\n        })\n      },")}},a=o[t];return a&&Object.keys(a).forEach((function(t){e.push(a[t])})),e}function buildData(t,e){var o;void 0!==t.vModel&&(o="string"!==typeof t.defaultValue||t.multiple?"".concat(JSON.stringify(t.defaultValue)):"'".concat(t.defaultValue,"'"),e.push("".concat(t.vModel,": ").concat(o,",")))}function buildRules(conf,ruleList){if(void 0!==conf.vModel){var rules=[];if(_config__WEBPACK_IMPORTED_MODULE_8__["e"][conf.tag]){if(conf.required){var type=Object(util__WEBPACK_IMPORTED_MODULE_6__["isArray"])(conf.defaultValue)?"type: 'array',":"",message=Object(util__WEBPACK_IMPORTED_MODULE_6__["isArray"])(conf.defaultValue)?"请至少选择一个".concat(conf.vModel):conf.placeholder;void 0===message&&(message="".concat(conf.label,"不能为空")),rules.push("{ required: true, ".concat(type," message: '").concat(message,"', trigger: '").concat(_config__WEBPACK_IMPORTED_MODULE_8__["e"][conf.tag],"' }"))}conf.regList&&Object(util__WEBPACK_IMPORTED_MODULE_6__["isArray"])(conf.regList)&&conf.regList.forEach((function(item){item.pattern&&rules.push("{ pattern: ".concat(eval(item.pattern),", message: '").concat(item.message,"', trigger: '").concat(_config__WEBPACK_IMPORTED_MODULE_8__["e"][conf.tag],"' }"))})),ruleList.push("".concat(conf.vModel,": [").concat(rules.join(","),"],"))}}}function buildOptions(t,e){if(void 0!==t.vModel){"dynamic"===t.dataType&&(t.options=[]);var o="".concat(t.vModel,"Options: ").concat(JSON.stringify(t.options),",");e.push(o)}}function buildProps(t,e){"dynamic"===t.dataType&&("value"!==t.valueKey&&(t.props.props.value=t.valueKey),"label"!==t.labelKey&&(t.props.props.label=t.labelKey),"children"!==t.childrenKey&&(t.props.props.children=t.childrenKey));var o="".concat(t.vModel,"Props: ").concat(JSON.stringify(t.props.props),",");e.push(o)}function buildBeforeUpload(t){var e=units[t.sizeUnit],o="",a="",n=[];t.fileSize&&(o="let isRightSize = file.size / ".concat(e," < ").concat(t.fileSize,"\n    if(!isRightSize){\n      this.$message.error('文件大小超过 ").concat(t.fileSize).concat(t.sizeUnit,"')\n    }"),n.push("isRightSize")),t.accept&&(a="let isAccept = new RegExp('".concat(t.accept,"').test(file.type)\n    if(!isAccept){\n      this.$message.error('应该选择").concat(t.accept,"类型的文件')\n    }"),n.push("isAccept"));var c="".concat(t.vModel,"BeforeUpload(file) {\n    ").concat(o,"\n    ").concat(a,"\n    return ").concat(n.join("&&"),"\n  },");return n.length?c:""}function buildSubmitUpload(t){var e="submitUpload() {\n    this.$refs['".concat(t.vModel,"'].submit()\n  },");return e}function buildOptionMethod(t,e,o){var a="".concat(t,"() {\n    // TODO 发起请求获取数据\n    this.").concat(e,"\n  },");o.push(a)}function buildexport(t,e,o,a,n,c,i,l){var r="".concat(_utils_index__WEBPACK_IMPORTED_MODULE_7__["d"],"{\n  ").concat(inheritAttrs[e],"\n  components: {},\n  props: [],\n  data () {\n    return {\n      ").concat(t.formModel,": {\n        ").concat(o,"\n      },\n      ").concat(t.formRules,": {\n        ").concat(a,"\n      },\n      ").concat(c,"\n      ").concat(n,"\n      ").concat(i,"\n    }\n  },\n  computed: {},\n  watch: {},\n  created () {},\n  mounted () {},\n  methods: {\n    ").concat(l,"\n  }\n}");return r}},a85b:function(t,e,o){"use strict";o("d3b7"),o("159b"),o("e9c4"),o("b64b");var a=o("ed08"),n=Object(a["f"])("accept,accept-charset,accesskey,action,align,alt,async,autocomplete,autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,name,contenteditable,contextmenu,controls,coords,data,datetime,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,type,usemap,value,width,wrap");function c(t,e,o){e.props.value=o,e.on.input=function(e){t.$emit("input",e)}}var i={"el-button":{default:function(t,e,o){return e[o]}},"el-input":{prepend:function(t,e,o){return t("template",{slot:"prepend"},[e[o]])},append:function(t,e,o){return t("template",{slot:"append"},[e[o]])}},"el-select":{options:function(t,e,o){var a=[];return e.options.forEach((function(e){a.push(t("el-option",{attrs:{label:e.label,value:e.value,disabled:e.disabled}}))})),a}},"el-radio-group":{options:function(t,e,o){var a=[];return e.options.forEach((function(o){"button"===e.optionType?a.push(t("el-radio-button",{attrs:{label:o.value}},[o.label])):a.push(t("el-radio",{attrs:{label:o.value,border:e.border}},[o.label]))})),a}},"el-checkbox-group":{options:function(t,e,o){var a=[];return e.options.forEach((function(o){"button"===e.optionType?a.push(t("el-checkbox-button",{attrs:{label:o.value}},[o.label])):a.push(t("el-checkbox",{attrs:{label:o.value,border:e.border}},[o.label]))})),a}},"el-upload":{"list-type":function(t,e,o){var a=[];return"picture-card"===e["list-type"]?a.push(t("i",{class:"el-icon-plus"})):a.push(t("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-upload"}},[e.buttonText])),e.showTip&&a.push(t("div",{slot:"tip",class:"el-upload__tip"},["只能上传不超过 ",e.fileSize,e.sizeUnit," 的",e.accept,"文件"])),a}}};e["a"]={render:function(t){var e=this,o={attrs:{},props:{},on:{},style:{}},a=JSON.parse(JSON.stringify(this.conf)),l=[],r=i[a.tag];return r&&Object.keys(r).forEach((function(e){var o=r[e];a[e]&&l.push(o(t,a,e))})),Object.keys(a).forEach((function(t){var i=a[t];"vModel"===t?c(e,o,a.defaultValue):o[t]?o[t]=i:n(t)?o.attrs[t]=i:o.props[t]=i})),t(this.conf.tag,o,l)},props:["conf"]}},a92a:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-dialog",t._g(t._b({attrs:{width:"500px","close-on-click-modal":!1,"modal-append-to-body":!1},on:{open:t.onOpen,close:t.onClose}},"el-dialog",t.$attrs,!1),t.$listeners),[o("el-row",{attrs:{gutter:15}},[o("el-form",{ref:"elForm",attrs:{model:t.formData,rules:t.rules,size:"medium","label-width":"100px"}},[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"生成类型",prop:"type"}},[o("el-radio-group",{model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},t._l(t.typeOptions,(function(e,a){return o("el-radio-button",{key:a,attrs:{label:e.value,disabled:e.disabled}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),t.showFileName?o("el-form-item",{attrs:{label:"文件名",prop:"fileName"}},[o("el-input",{attrs:{placeholder:"请输入文件名",clearable:""},model:{value:t.formData.fileName,callback:function(e){t.$set(t.formData,"fileName",e)},expression:"formData.fileName"}})],1):t._e()],1)],1)],1),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.close}},[t._v(" 取消 ")]),o("el-button",{attrs:{type:"primary"},on:{click:t.handelConfirm}},[t._v(" 确定 ")])],1)],1)],1)},n=[],c=o("5530"),i={inheritAttrs:!1,props:["showFileName"],data:function(){return{formData:{fileName:void 0,type:"file"},rules:{fileName:[{required:!0,message:"请输入文件名",trigger:"blur"}],type:[{required:!0,message:"生成类型不能为空",trigger:"change"}]},typeOptions:[{label:"页面",value:"file"},{label:"弹窗",value:"dialog"}]}},computed:{},watch:{},mounted:function(){},methods:{onOpen:function(){this.showFileName&&(this.formData.fileName="".concat(+new Date,".vue"))},onClose:function(){},close:function(t){this.$emit("update:visible",!1)},handelConfirm:function(){var t=this;this.$refs.elForm.validate((function(e){e&&(t.$emit("confirm",Object(c["a"])({},t.formData)),t.close())}))}}},l=i,r=o("2877"),s=Object(r["a"])(l,a,n,!1,null,null,null);e["default"]=s.exports},dfbc:function(t,e,o){}}]);
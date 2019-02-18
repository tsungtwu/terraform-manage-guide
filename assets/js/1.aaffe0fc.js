(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{163:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/hashicorp/terraform/issues/953",target:"_blank",rel:"noopener noreferrer"}},[t._v("Support the count parameter for modules #953"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"使用-module-不支援-count"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-module-不支援-count","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 module 不支援 count")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用情境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用情境","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用情境")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用同一份 terraform code 維護多個環境時，"),e("code",[this._v("使用 module 建立 resource")]),this._v("，無法使用 count 判斷該 module 是否需要存在。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("vpc.tf")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-terraform extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('module "vpc" {\n  source  = "104corp/vpc/aws"\n  version = "1.1.0"\n\n  count = "${var.vpc_create ? 1 : 0}"\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("variables.tf")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-terraform extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('variable "vpc_create" {\n  description = "VPC Hub Enable"\n  default     = false\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("main.auto.tfvars (dev)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-terraform extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("vpc_create = true\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("main.auto.tfvars (production)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-terraform extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("vpc_create = false\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"issess"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#issess","aria-hidden":"true"}},[this._v("#")]),this._v(" Issess")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('Error: module "vpc": "count" is not a valid argument\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"resolve"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resolve","aria-hidden":"true"}},[this._v("#")]),this._v(" Resolve")])}],!1,null,null,null);e.default=a.exports}}]);
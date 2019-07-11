(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{192:function(e,a,n){"use strict";n.r(a);var t=n(0),r=Object(t.a)({},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"locals"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#locals","aria-hidden":"true"}},[e._v("#")]),e._v(" Locals")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.terraform.io/docs/configuration/locals.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("locals"),n("OutboundLink")],1),e._v(" 通常在 module 內用於重複使用，常常用來將 variable 的值拿來運算或者特殊處理。")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("locals")]),e._v(" 包含多個 "),n("code",[e._v("variable")]),e._v(" 一次餵給 resource。")])]),e._v(" "),n("div",{staticClass:"language-terraform extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# Define the common tags for all resources\nlocals {\n  common_tags = {\n    Component   = "awesome-app"\n    Environment = "production"\n  }\n}\n\n# Create a resource that blends the common tags with instance-specific tags.\nresource "aws_instance" "server" {\n  ami           = "ami-123456"\n  instance_type = "t2.micro"\n\n  tags = "${merge(\n    local.common_tags,\n    map(\n      "Name", "awesome-app-server",\n      "Role", "server"\n    )\n  )}"\n}\n')])])]),n("ul",[n("li",[n("code",[e._v("locals")]),e._v(" 內可以包含 "),n("code",[e._v("locals")]),e._v(" 進行多次處理後才給 resource。")])]),e._v(" "),n("div",{staticClass:"language-terraform extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# Ids for multiple sets of EC2 instances, merged together\nlocals {\n  instance_ids = "${concat(aws_instance.blue.*.id, aws_instance.green.*.id)}"\n}\n\n# A computed default name prefix\nlocals {\n  default_name_prefix = "${var.project_name}-web"\n  name_prefix         = "${var.name_prefix != "" ? var.name_prefix : local.default_name_prefix}"\n}\n\n# Local values can be interpolated elsewhere using the "local." prefix.\nresource "aws_s3_bucket" "files" {\n  bucket = "${local.name_prefix}-files"\n  # ...\n}\n')])])])])},[],!1,null,null,null);a.default=r.exports}}]);
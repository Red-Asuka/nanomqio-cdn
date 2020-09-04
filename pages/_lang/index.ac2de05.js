(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(t,e,n){},183:function(t,e,n){},184:function(t,e,n){},185:function(t,e,n){},186:function(t,e,n){},187:function(t,e,n){},188:function(t,e,n){"use strict";var l=n(182);n.n(l).a},189:function(t,e,n){"use strict";var l=n(183);n.n(l).a},190:function(t,e,n){"use strict";var l=n(184);n.n(l).a},191:function(t,e,n){"use strict";var l=n(185);n.n(l).a},192:function(t,e,n){"use strict";var l=n(186);n.n(l).a},193:function(t,e,n){"use strict";var l=n(187);n.n(l).a},194:function(t,e,n){"use strict";n.r(e);var l={},o=(n(188),n(15)),r=Object(o.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"broker"}},[e("div",{staticClass:"columns is-gapless"},[e("div",{staticClass:"content column"},[e("h1",{staticClass:"title"},[this._v("Nano MQTT Broker")]),this._v(" "),e("span",{staticClass:"line"}),this._v(" "),e("h2",{staticClass:"sub-title"},[this._v("\n        A light-weight and Blazing-fast MQTT"),e("br"),this._v("\n        5.0 Broker for IoT Edge platform.\n      ")]),this._v(" "),e("a",{attrs:{href:"https://github.com/nanomq/nanomq",target:"_blank",rel:"noopener"}},[e("button",{staticClass:"button btn-get"},[this._v("\n          Get the Code\n        ")])])])])])}],!1,null,"214621eb",null).exports,c={},m=(n(189),Object(o.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"features"}},[n("div",{staticClass:"title-bg columns is-vcentered is-gapless is-multiline"},[n("h2",{staticClass:"title column is-full"},[t._v("Features")])]),t._v(" "),n("span",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"feat-list columns is-multiline is-centered"},[n("div",{staticClass:"column is-half"},[n("div",{staticClass:"feat-item"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/features-1.png"}}),t._v(" "),n("p",[t._v("Cost-effective on embedded platform.")])])]),t._v(" "),n("div",{staticClass:"column is-half"},[n("div",{staticClass:"feat-item"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/features-2.png"}}),t._v(" "),n("p",[t._v("Fully base on native POSIX. High Compatibility.")])])]),t._v(" "),n("div",{staticClass:"column is-half"},[n("div",{staticClass:"feat-item"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/features-3.png"}}),t._v(" "),n("p",[t._v("Pure C/C++ implementation. High portability.")])])]),t._v(" "),n("div",{staticClass:"column is-half"},[n("div",{staticClass:"feat-item"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/features-5.png"}}),t._v(" "),n("p",[t._v("Fully asynchronous I/O and multi-threading.")])])]),t._v(" "),n("div",{staticClass:"column is-half"},[n("div",{staticClass:"feat-item"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/features-4.png"}}),t._v(" "),n("p",[t._v("Good support for SMP.")])])]),t._v(" "),n("div",{staticClass:"column is-half"},[n("div",{staticClass:"feat-item"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/features-6.png"}}),t._v(" "),n("p",[t._v("Low latency & High handling capacity.")])])])])])}],!1,null,"a249e56a",null).exports),d={},v=(n(190),Object(o.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"quick-start"}},[n("div",{staticClass:"title-bg columns is-vcentered is-gapless is-multiline"},[n("h2",{staticClass:"title column is-full"},[t._v("QuickStart")])]),t._v(" "),n("span",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"columns is-multiline is-vcentered"},[n("div",{staticClass:"left-card column is-half-desktop"},[n("h3",{staticClass:"first-title"},[t._v("Compile & Install")]),t._v(" "),n("div",{staticClass:"box-line"},[n("p",{staticClass:"line-left start-content"},[t._v("\n            NanoMQ is base on NNG's asynchronous I/O threading model. With rewriting the TCP/SP part with self-added\n            protocol: nano_tcp.\n          ")]),t._v(" "),n("p",[t._v("\n            To build this whole project, you will need a C99 & C++11 compatible compiler and CMake version 3.13 or\n            newer.\n          ")]),t._v(" "),n("p",{staticClass:"line-left"},[t._v("\n            We recommand to install from source, basically you just need to simply compile and install nanomq by:\n          ")]),t._v(" "),n("div",{staticClass:"highlight"},[n("pre",[t._v("$PROJECT_PATH/nanomq$ mkdir build & cd build\n$PROJECT_PATH/nanomq/build$ cmake -G Ninja ..\n$PROJECT_PATH/nanomq/build$ sudo ninja install")])]),t._v(" "),n("p",{staticClass:"line-left"},[t._v("\n            or you can limit threads by\n            "),n("code",[t._v("\n              $PROJECT_PATH/nanomq/build$ cmake -G Ninja -DNNG_RESOLV_CONCURRENCY=1 -DNNG_NUM_TASKQ_THREADS=5\n              -DNNG_MAX_TASKQ_THREADS=5 ..\n            ")])]),t._v(" "),n("p",{staticClass:"line-left"},[t._v("\n            or you can print log by"),n("br"),t._v(" "),n("code",[t._v("\n              cmake -DNOLOG=0\n            ")]),t._v(" "),n("br")]),t._v(" "),n("p",{staticClass:"line-left"},[t._v("\n            Please be aware that nanomq depends on nanolib & nng (MQTT ver)\n          ")]),t._v(" "),n("p",{staticClass:"line-left"},[t._v("\n            both dependencies can be complied independently\n          ")]),t._v(" "),n("div",{staticClass:"highlight"},[n("pre",[t._v("$PROJECT_PATH/nanomq/nng/build$ cmake -G Ninja .. \n$PROJECT_PATH/nanomq/nng/build$ ninja install")])]),t._v(" "),n("p",[t._v("\n            compile nanolib independently:\n            "),n("code",[t._v("\n              $PROJECT_PATH/nanolib/build$ cmake -G Ninja .. $PROJECT_PATH/nanolib/build$ ninja install\n            ")])]),t._v(" "),n("p",{staticClass:"line-left end-content"},[t._v("\n            Currently, NanoMQ only supports basic MQTT 3.1.1 Pub/Sub with Qos 0. In short future, We will release a\n            roadmap, and next version of NanoMQ with full MQTT 5.0 support. Also, in order to let NanoMQ be compatible\n            with NNG library and SP, implementing a subsystem to let nanomq support MQTT without damaging NNG's SP\n            support. Rewriting CMake and MakeFile so that users can easily choose which ver of nng to base on.\n          ")])]),t._v(" "),n("h3",{staticClass:"usage"},[t._v("Usage")]),t._v(" "),n("div",{staticClass:"qs-box"},[n("p",[t._v("\n            #ongoing MQTT Broker\n            "),n("code",[t._v("sudo ./nanomq broker start 'tcp://localhost:1883'")]),t._v(" "),n("br"),t._v("\n            #test POSIX message Queue\n            "),n("code",[t._v("sudo ./nanomq broker mq start/stop")])])]),t._v(" "),n("h3",{staticClass:"usage"},[t._v("Debug")]),t._v(" "),n("div",{staticClass:"qs-box"},[n("p",[t._v("\n            For Support & Debug, NanoMQ has a Debugging system which logs all information from all threads. It is\n            enabled by default. And you can disable/enable it by:\n          ")]),t._v(" "),n("pre",[t._v("$PROJECT_PATH/nanomq/build$ cmake -G Ninja -DNOLOG=1 .. \n$PROJECT_PATH/nanomq/build$ cmake -G Ninja -DNOLOG=0 ..")])])]),t._v(" "),n("div",{staticClass:"right-card column is-half"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/quick-start.png",alt:""}})])])])}],!1,null,"1e6146aa",null).exports),h={},_=(n(191),Object(o.a)(h,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"communties"}},[n("div",{staticClass:"title-bg columns is-mobile is-vcentered is-gapless is-multiline"},[n("h2",{staticClass:"title column is-full"},[t._v("Communties")])]),t._v(" "),n("span",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"columns is-multiline"},[n("div",{staticClass:"left-card column is-half"},[n("h3",{staticClass:"left-title"},[t._v("You can Join us on Slack channel:")]),t._v(" "),n("div",{staticClass:"columns is-vcentered is-gapless is-multiline"},[n("div",{staticClass:"slack-channel column is-full"},[n("a",{staticClass:"slack-item",attrs:{href:"https://slack-invite.emqx.io/",target:"_blank",rel:"noopener"}},[n("p",[t._v("\n              #nanomq-nng\n              "),n("span",[t._v("for user & nng project")]),t._v(" "),n("span",{staticClass:"green"},[t._v("→")])])])]),t._v(" "),n("div",{staticClass:"slack-channel column is-full"},[n("a",{staticClass:"slack-item",attrs:{href:"https://slack-invite.emqx.io/",target:"_blank",rel:"noopener"}},[n("p",[t._v("\n              #nanomq-dev\n              "),n("span",[t._v("for MQTT lover & developer")]),t._v(" "),n("span",{staticClass:"green"},[t._v("→")])])])])])]),t._v(" "),n("div",{staticClass:"right-card column is-half"},[n("h4",{staticClass:"right-title"},[t._v("More communities are coming soon")]),t._v(" "),n("div",{staticClass:"communities columns is-vcentered is-gapless is-multiline is-mobile is-centered"},[n("div",{staticClass:"com-item column is-one-third-desktop is-half-tablet is-half-mobile"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/communities-1.png",alt:"Github"}})]),t._v(" "),n("div",{staticClass:"com-item column is-one-third-desktop is-half-tablet is-half-mobile"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/communities-2.png",alt:"twitter"}})]),t._v(" "),n("div",{staticClass:"com-item column is-one-third-desktop is-half-tablet is-half-mobile"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/communities-3.png",alt:"gitter"}})]),t._v(" "),n("div",{staticClass:"com-item column is-one-third-desktop is-half-tablet is-half-mobile"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/communities-4.png",alt:"reddit"}})]),t._v(" "),n("div",{staticClass:"com-item column is-one-third-desktop is-half-tablet is-half-mobile"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/communities-5.png",alt:"discord"}})]),t._v(" "),n("div",{staticClass:"com-item column is-one-third-desktop is-half-tablet is-half-mobile"},[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/communities-6.png",alt:"telegram"}})])])])])])}],!1,null,"5ed51f61",null).exports),f={data:function(){return{emailAddress:"",placeholder:"Email Address",isError:!1,isSuccess:!1}},methods:{newsLetter:function(){var t=this;if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.emailAddress)){var data={email:this.emailAddress,language:this.$i18n.locale,source:"nanomq"};this.$axios.post("/subscription",data).then((function(e){var n=e.status,data=e.data;if(201===n&&data){t.isSuccess=!0,t.emailAddress="",t.placeholder="Thanks for subscribing to the newsletter."}})).catch((function(e){var n=e.response.data.message;t.isError=!0,t.emailAddress="",t.placeholder=n}))}else{this.isError=!0,this.emailAddress="",this.placeholder="Not a valid email address"}},clearError:function(){this.isError=!1,this.isSuccess=!1,this.emailAddress="",this.placeholder="Email Address"}}},C=(n(192),{components:{myBroker:r,myFeatures:m,myQuickStart:v,myCommunties:_,myNewsletter:Object(o.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"newsletter"}},[t._m(0),t._v(" "),n("span",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"form-mail",attrs:{id:"form-mail"}},[n("label",{attrs:{for:"inputEmail"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.emailAddress,expression:"emailAddress"}],class:{"form-control":!0,"error-input":t.isError,"success-input":t.isSuccess},attrs:{id:"inputEmail",type:"email",required:"",name:"inputEmail",placeholder:t.placeholder},domProps:{value:t.emailAddress},on:{focus:t.clearError,input:function(e){e.target.composing||(t.emailAddress=e.target.value)}}}),t._v(" "),n("button",{staticClass:"button sub-btn",on:{click:t.newsLetter}},[t._v("\n      Subscribe\n    ")])]),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-bg columns is-vcentered is-gapless is-multiline"},[e("h2",{staticClass:"title column is-full"},[this._v("Subscribe to our newsletter")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("span",{staticClass:"footer-line"}),this._v(" "),e("div",{staticClass:"content has-text-centered"},[e("p",[this._v("\n        © 2020 EMQ Technologies Co., Ltd. All rights reserved\n      ")])])])}],!1,null,"54b62b13",null).exports},head:function(){return{title:this.$t("home.title"),meta:[{hid:"description",name:"description",content:this.$t("home.description")},{hid:"og:site_name",property:"og:site_name",content:"nanomq.io"},{hid:"og:type",property:"og:type",content:"website"},{hid:"og:title",property:"og:title",content:this.$t("home.title")},{hid:"og:description",property:"og:description",content:this.$t("home.description")},{hid:"og:url",property:"og:url",content:"https://nanomq.io"+this.$route.path},{hid:"og:image",property:"og:image",content:"https://cdn.jsdelivr.net/gh/nanomq/nanomqio-cdn@1.0.1/images/logo.png"}]}}}),y=(n(193),Object(o.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container"},[e("my-broker"),this._v(" "),e("my-features"),this._v(" "),e("my-quick-start"),this._v(" "),e("my-communties")],1),this._v(" "),e("my-newsletter")],1)}),[],!1,null,"649d84b3",null));e.default=y.exports}}]);
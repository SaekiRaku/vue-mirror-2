import "./index.less";

import youth from "../source";
Vue.use(youth);

import doc from "./component/document/index.vue";
import func from "./component/function/index.vue";
import codeblock from "./component/codeblock/index.vue";
Vue.component("document",doc);
Vue.component("function",func);
Vue.component("codeblock",codeblock);

const routes = [
    {path:"/test",component :require("page/test.vue").default},

    {path:"/about",component :require("page/about.vue").default},
    {path:"/install",component :require("page/install.vue").default},
    {path:"/usage",component :require("page/usage.vue").default},
    {path:"/update",component :require("page/update.vue").default},
    {path:"/button",component :require("page/button.vue").default},
    {path:"/input",component :require("page/input.vue").default},
    {path:"/switch",component :require("page/switch.vue").default},
    {path:"/radio",component :require("page/radio.vue").default},
    {path:"/checkbox",component :require("page/checkbox.vue").default},
    {path:"/group",component :require("page/group.vue").default},
    {path:"/modal",component :require("page/modal.vue").default},
    {path:"/toast",component :require("page/toast.vue").default},
    {path:"/message",component :require("page/message.vue").default},
    {path:"/card",component :require("page/card.vue").default},
    {path:"/avatar",component :require("page/avatar.vue").default},
    {path:"/tag",component :require("page/tag.vue").default},
    {path:"/tab",component :require("page/tab.vue").default},
    {path:"/document",component :require("page/document.vue").default}
]


const router = new VueRouter({routes})

const app = new Vue({
  router,
  methods:{
    linkTo(name){
      location.href="/#/"+name;
    }
  },
}).$mount('#app')

app.linkTo("about");
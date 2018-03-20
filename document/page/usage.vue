<template>
<document>
    <h1>
        使用
    </h1>

    <h2>
        HTML
    </h2>
    <codeblock>
        &lt;script src="vue.js"&gt;&lt;/script&gt;    
        &lt;!-- 引入Vue 框架 --&gt;
        &lt;link rel="stylesheet" href="youth.css"&gt;
        &lt;script src="youth.js"&gt;&lt;/script&gt;
        &lt;!-- 引入Vue Youth 框架 --&gt;

        &lt;div id="app"&gt;
            &lt;v-button&gt;Hello World&lt;/v-button&gt;
        &lt;/div&gt;
    </codeblock>

    <h2> 
        Javascript
    </h2>
    <codeblock>
        Vue.use(youth);

        var vm = new Vue({
            el:"#app"
        });
    </codeblock>
</document>
</template>

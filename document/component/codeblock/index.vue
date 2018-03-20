<template>
<pre>
<code>
<slot></slot>
</code>
</pre>
</template>

<style lang="less">
    @import "~style/basic.less";

    pre{
        padding: 0px !important;
        margin: 0px !important;
        box-shadow: @shadow-low;
    }

    code{
        padding: 0px !important;
        margin: 0px !important;
    }

</style>

<script>
// hljs.registerLanguage('xml', highlightXML);
// hljs.registerLanguage('css', highlightCSS);
// hljs.registerLanguage('javascript', highlightJavascript);

export default {
    mounted:function(){
        hljs.highlightBlock(this.$el);
    }
}
</script>
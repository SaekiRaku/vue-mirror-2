<template>
    <document>
        <h1>表单组 / v-group</h1>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <div id="form">
            <div id="left">
                <div id="page">
                    <v-group name="form" @change="handleChange">
                        <v-group name="name">
                            <p>你的姓名是？</p>
                            <v-input name="name"></v-input>
                        </v-group>
                        <v-group name="sex">
                            <p>你的性别是？</p>
                            <v-radio value="male" active>男</v-radio>
                            <v-radio value="female">女</v-radio>
                        </v-group>
                        <v-group name="fruit">
                            <p>你最喜欢的水果是？</p>
                            <v-checkbox value="Apple">Apple</v-checkbox>
                            <v-checkbox value="Banana">Banana</v-checkbox>
                            <v-checkbox value="C" disable>Unknow</v-checkbox>
                            <v-checkbox value="Damson">Damson</v-checkbox>
                        </v-group>
                        <v-group name="security">
                            <div id="bar">
                            <p>是否开启隐私保护<v-switch></v-switch></p>
                            </div>
                        </v-group>
                    </v-group>
                </div>
                
            </div>
            <div id="right">
                <div v-html="result">
                </div>
            </div>
        </div>


        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    &lt;v-group name="form" @change="handleChange"&gt;
        &lt;v-group name="name"&gt;
            &lt;p&gt;你的姓名是？&lt;/p&gt;
            &lt;v-input&gt;&lt;/v-input&gt;
        &lt;/v-group&gt;
        &lt;v-group name="sex"&gt;
            &lt;p&gt;你的性别是？&lt;/p&gt;
            &lt;v-radio value="male" active&gt;男&lt;/v-radio&gt;
            &lt;v-radio value="female"&gt;女&lt;/v-radio&gt;
        &lt;/v-group&gt;
        &lt;v-group name="fruit"&gt;
            &lt;p&gt;你最喜欢的水果是？&lt;/p&gt;
            &lt;v-checkbox value="Apple"&gt;Apple&lt;/v-checkbox&gt;
            &lt;v-checkbox value="Banana"&gt;Banana&lt;/v-checkbox&gt;
            &lt;v-checkbox value="C" disable&gt;Unknow&lt;/v-checkbox&gt;
            &lt;v-checkbox value="Damson"&gt;Damson&lt;/v-checkbox&gt;
        &lt;/v-group&gt;
        &lt;v-group name="security"&gt;
            &lt;div id="bar"&gt;
            &lt;p&gt;是否开启隐私保护&lt;v-switch&gt;&lt;/v-switch&gt;&lt;/p&gt;
            &lt;/div&gt;
        &lt;/v-group&gt;
    &lt;/v-group&gt;
</codeblock>

        <h2>Props</h2>
        <h6>组件属性</h6>

        <table>
            <tr>
                <th>属性名</th>
                <th>释义</th>
                <th>可用值</th>
                <th>默认值</th>
            </tr>
            <tr>
                <td>name</td>
                <td>
                    域名、标识名
                </td>
                <td>
                    String
                </td>
                <td>
                    -
                </td>
            </tr>
        </table>

        <h2>Events</h2>
        <h6>事件</h6>

        <function>
            <h1>change</h1>
            <p>改变事件</p>
            <table>
                <tr>
                    <th>回调方法参数名</th>
                    <th>释义</th>
                    <th>备注</th>
                </tr>
                <tr>
                    <td>value</td>
                    <td>结果</td>
                    <td>返回一个JS对象</td>
                </tr>
            </table>
        </function>
<codeblock>
    export default {
        data(){
            return {
                result:""
            }
        },
        methods:{
            handleChange(data){
                this.result = JSON.stringify(data);
            }
        }
    }
</codeblock>
    </document>
</template>

<style lang="less" scoped>
    @import "~style/basic.less";

    .v-checkbox,.v-radio{
        margin: 16px;
    }

    .v-switch {
        margin-left: 16px;
        margin-bottom: -5px; 
    }

    #bar {
        width: 100%;
        background: @color-gray-light;
        padding: 8px 16px;
        margin-left: -16px;

        .v-switch {
            float: right;
        }
    }

    #form {
        width: 100%;
        height: 450px;

        #left {
            float: left;
            width: 50%;

            #page {
                margin: 8px;
                padding: 16px;
                box-shadow: @shadow-low;
            }
        }

        #right {
            float: right;
            width: 50%;

            div {
                margin: 8px;
                border-radius: 6px;
                border: dashed 1px rgb(211, 242, 255);
                background: rgb(247, 252, 255);
                padding: 24px;
            }
        }
    }
</style>


<script>
function format(txt, compress /*是否为压缩模式*/ ) { /* 格式化JSON源码(对象转换为JSON文本) */
    var indentChar = '&nbsp;&nbsp;&nbsp;&nbsp;';
    if (/^\s*$/.test(txt)) {
        alert('数据为空,无法格式化! ');
        return;
    }
    try {
        var data = eval('(' + txt + ')');
    } catch (e) {
        alert('数据源语法错误,格式化失败! 错误信息: ' + e.description, 'err');
        return;
    };
    var draw = [],
        last = false,
        This = this,
        line = compress ? '' : '<br />',
        nodeCount = 0,
        maxDepth = 0;

    var notify = function (name, value, isLast, indent /*缩进*/ , formObj) {
        nodeCount++; /*节点计数*/
        for (var i = 0, tab = ''; i < indent; i++) tab += indentChar; /* 缩进HTML */
        tab = compress ? '' : tab; /*压缩模式忽略缩进*/
        maxDepth = ++indent; /*缩进递增并记录*/
        if (value && value.constructor == Array) { /*处理数组*/
            draw.push(tab + (formObj ? ('"' + name + '":') : '') + '[' + line); /*缩进'[' 然后换行*/
            for (var i = 0; i < value.length; i++)
                notify(i, value[i], i == value.length - 1, indent, false);
            draw.push(tab + ']' + (isLast ? line : (',' + line))); /*缩进']'换行,若非尾元素则添加逗号*/
        } else if (value && typeof value == 'object') { /*处理对象*/
            draw.push(tab + (formObj ? ('"' + name + '":') : '') + '{' + line); /*缩进'{' 然后换行*/
            var len = 0,
                i = 0;
            for (var key in value) len++;
            for (var key in value) notify(key, value[key], ++i == len, indent, true);
            draw.push(tab + '}' + (isLast ? line : (',' + line))); /*缩进'}'换行,若非尾元素则添加逗号*/
        } else {
            if (typeof value == 'string') value = '"' + value + '"';
            draw.push(tab + (formObj ? ('"' + name + '":') : '') + value + (isLast ? '' : ',') + line);
        };
    };
    var isLast = true,
        indent = 0;
    notify('', data, isLast, indent, false);
    return draw.join('');
}

export default {
    data(){
        return {
            result:""
        }
    },
    methods:{
        handleChange(data){
            this.result = format(JSON.stringify(data));
        }
    }
}
</script>

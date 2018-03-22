<template>
    <document>
        <h1>消息框 / v-message</h1>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <v-button @click="toggle">{{show?"隐藏消息":"显示消息"}}</v-button>
        <v-message v-bind:show="show">普通消息</v-message>
        <v-message v-bind:show="show" canclose="true">带关闭的普通消息</v-message>
        <v-message v-bind:show="show" type="danger">危险消息</v-message>

        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    &lt;v-message&gt;普通消息&lt;/v-message&gt;
    &lt;v-message :canclose="true"&gt;带关闭的普通消息&lt;/v-message&gt;
    &lt;v-message type="danger"&gt;危险消息&lt;/v-message&gt;
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
                <td>type</td>
                <td>
                    消息类型
                </td>
                <td>
                    normal | danger
                </td>
                <td>normal</td>
            </tr>
            <tr>
                <td>canclose</td>
                <td>
                    可否关闭
                </td>
                <td>
                    true | false
                </td>
                <td>
                    false
                </td>
            </tr>
            <tr>
                <td>show</td>
                <td>
                    是否显示
                </td>
                <td>
                    true | false
                </td>
                <td>
                    false
                </td>
            </tr>
        </table>
    </document>
</template>

<style lang="less" scoped>
    @import "~style/basic.less";

    .v-message {
        margin: 8px;
    }

</style>

<script>
export default {
  data(){
      return {
          show:false
      }
  },
  methods:{
      toggle(){
          this.$data.show = !this.$data.show;
      }
  }
}
</script>

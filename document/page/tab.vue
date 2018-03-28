<template>
  <document>
      <h1>标签页 / v-tab</h1>

      <h2>Example</h2>
      <h6>效果演示</h6>

      <v-tab>
          <v-page title="Page 1">
            <v-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in aut ratione! Voluptas explicabo distinctio aut illum reiciendis in ea perferendis? Magni eligendi facere quae, rerum asperiores alias officiis soluta.
            </v-text>
          </v-page>
          <v-page title="Page 2">
            <v-quote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusamus dicta ullam repellat quam dignissimos ex temporibus dolorum non id fugit harum nam architecto illo tempora velit, minus explicabo quibusdam!
            </v-quote>
          </v-page>
          <v-page title="Page 3">
            <v-button type="primary" size="large">Hello World</v-button>
          </v-page>
      </v-tab>

       <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    &lt;v-tab&gt;
      &lt;v-page title="Page 1"&gt;
        ...
      &lt;/v-page&gt;
      &lt;v-page title="Page 2"&gt;
        ...
      &lt;/v-page&gt;
      &lt;v-page title="Page 3"&gt;
        ...
      &lt;/v-page&gt;
    &lt;/v-tab&gt;
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
              <td>align</td>
              <td>
                  对齐形式
              </td>
              <td>
                  left | right | center | justify
              </td>
              <td>justify</td>
          </tr>
      </table>

  </document>
</template>

<style lang="less" scoped>
.v-page {
    text-align: justify;
    padding: 32px;
}
</style>

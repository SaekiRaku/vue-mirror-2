<template>
  <article>
      <slot></slot>
  </article>
</template>

<style lang="less" scoped>
@import "~style/basic.less";

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

h1 {
  color: @color-main;
  font-weight: bold !important;
  margin: 0px;
  padding: 2*@grid 0px;
  border-bottom: 1px solid @color-gray;
}

h2 {
  margin-top: 48px;
  color: @color-black;
}

h6 {
  color: @color-gray-dark;
  margin: 0px;
  padding: 0px;
  line-height: 0px;
  margin-top: -@grid;
  margin-bottom: 4*@grid;
}

p {
  text-indent: 2em;
  line-height: 4*@grid;
}

hr {
  border: none;
  border-bottom: 1px solid @color-gray;
}

table {
  width: 100%;
  text-align: left;
  margin: 0px;
  padding: 0px;
  border: 1px solid @color-gray;

  th {
    background: @color-gray;
    padding: @grid;
    font-weight: normal;
  }

  td {
    padding: 2*@grid;
  }
}
</style>

<script>
export default {};
</script>

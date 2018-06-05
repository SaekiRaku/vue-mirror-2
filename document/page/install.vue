<template>
<document>
    <h1>
        安装
    </h1>

    <p>
        暂时没有发布到 NPM，请直接下载类库并引用。
    </p>
    <p>
    </p>
        <v-button @click="download" type="primary">下载 v0.0.9</v-button>
</document>
</template>

<script>
export default {
  methods:{
      download(){
          window.open("/download/youth_v0.0.9.zip");
      }
  }
}
</script>

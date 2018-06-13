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
        <v-button @click="download" type="primary">下载 {{version}}</v-button>
</document>
</template>

<script>
export default {
    data(){
        return {
            version:"v0.0.10"
        }
    },
    methods: {
        download() {
            window.open(`/download/youth_${this.version}.zip`);
        }
    }
};
</script>

<template>
  <h1>wangEditor5</h1>
  <base-editor v-model="content"></base-editor>
</template>

<script setup lang="ts">
let content = ref(`<p><br></p><pre><code class="language-html"> &lt;!-- 使用 --&gt; &lt;BaseEditor v-model="content"&gt;&lt;/BaseEditor&gt; </code></pre><p><br></p>`)
</script>

<style lang="scss" scoped>

</style>
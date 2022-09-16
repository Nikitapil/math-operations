<template>
  <div class="container">
    <h2 class="title">{{title}}</h2>
    <slot/>
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  background: #efefef;
  max-width: fit-content;
  border-radius: 20px;
  box-shadow: 0 0 10px black;
}

.title {
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
}
</style>
<template lang="pug">
h1.title
  slot
</template>

<script>
export default {
  name: 'UITitle'
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 42px;
  font-weight: 900;
  margin: 16px 0;
}
</style>

<template lang="pug">
.paragraph
  slot
</template>

<script>
export default {
  name: 'UIParagraph'
}
</script>

<style lang="scss" scoped>
.paragraph {
  margin: 8px 0 8px;
  font-size: 16px;
  line-height: 20px;
}
</style>

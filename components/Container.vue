<template lang="pug">
.container(:style="{ alignItems, justifyContent, flexDirection, maxWidth }")
  slot
</template>

<script>
export default {
  name: 'UIContainer',
  props: {
    flexDirection: {
      type: String,
      default: 'column'
    },
    alignItems: {
      type: String,
      default: 'center'
    },
    justifyContent: {
      type: String,
      default: 'center'
    },
    maxWidth: {
      type: String,
      default: '1180px'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  max-width: 1180px;
  display: flex;
}
</style>

<template lang="pug">
.container(:style="{ alignItems, justifyContent, flexDirection }")
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
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  max-width: 1280px;
  display: flex;
}
</style>

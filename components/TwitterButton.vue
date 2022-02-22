<template lang="pug">
  Button(:type="type")
    template(slot="icon")
      img(src="/twitter.svg")
    template(v-if="!hasDefaultSlot")
      | Follow on Twitter
    template(v-else slot="default")
      slot
</template>

<script>
export default {
  name: 'TwitterButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    hasDefaultSlot () {
      return this.$slots.default
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

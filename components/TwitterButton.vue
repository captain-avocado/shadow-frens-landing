<template lang="pug">
  Button(:type="type" @click="onClick")
    template(slot="icon")
      img(src="/twitter.svg")
    template(v-if="!hasDefaultSlot")
      | Follow on Twitter
    template(v-else slot="default")
      slot
</template>

<script>
import { TWITTER_ACCOUNT_LINK } from '@/configs/constants'

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
  },
  methods: {
    onClick () {
      if (process.client) {
        window.location.href = TWITTER_ACCOUNT_LINK
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

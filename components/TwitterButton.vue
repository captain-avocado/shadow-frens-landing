<template lang="pug">
  Button(:type="type" :href="$options.TWITTER_ACCOUNT_LINK")
    template(slot="icon")
      img(:src="'./twitter.svg'")
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
  TWITTER_ACCOUNT_LINK,
  computed: {
    hasDefaultSlot () {
      return this.$slots.default
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

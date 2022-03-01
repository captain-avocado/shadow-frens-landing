<template lang="pug">
  Button(@click="onClick")
    template(slot="icon")
      img(:src="'./discord.svg'")
    | Join Discord
</template>

<script>
import { DISCORD_INVITE_LINK } from '@/configs/constants'

export default {
  name: 'DiscordButton',
  methods: {
    onClick () {
      if (process.client) {
        window.location.href = DISCORD_INVITE_LINK
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

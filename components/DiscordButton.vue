<template lang="pug">
  Button(:href="$options.DISCORD_INVITE_LINK")
    template(slot="icon")
      img(:src="'./discord.svg'")
    | Join Discord
</template>

<script>
import { DISCORD_INVITE_LINK } from '@/configs/constants'

export default {
  name: 'DiscordButton',
  DISCORD_INVITE_LINK
}
</script>

<style lang="scss" scoped>

</style>

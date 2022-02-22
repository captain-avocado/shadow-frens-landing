<template lang="pug">
  Button
    template(slot="icon")
      img(src="/discord.svg")
    | Join Discord
</template>

<script>
export default {
  name: 'DiscordButton'
}
</script>

<style lang="scss" scoped>

</style>

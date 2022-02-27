<template lang="pug">
  a(:href="$options.TWITTER")
    img.logo(src="/logo.svg")
</template>

<script>
import { TWITTER_ACCOUNT_LINK } from '@/configs/constants'

export default {
  name: 'UILogo',
  TWITTER: TWITTER_ACCOUNT_LINK
}
</script>

<style lang="scss" scoped>
.logo {
  width: 70px;
  height: 70px;
}
</style>

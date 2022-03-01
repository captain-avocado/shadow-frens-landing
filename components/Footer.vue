<template lang="pug">
.footer
  a.footer__link.mr-32(:href="$options.TWITTER")
    img.footer__img(:src="'./twitter.svg'")
  a.footer__link.mr-32(:href="$options.DISCORD")
    img.footer__img(:src="'./discord.svg'")
  a.footer__link(:href="$options.TELEGRAM")
    img.footer__img(:src="'./telegram-white.svg'")
</template>

<script>
import { DISCORD_INVITE_LINK, TELEGRAM_BOT_LINK, TWITTER_ACCOUNT_LINK } from '@/configs/constants'

export default {
  name: 'FooterSection',
  TWITTER: TWITTER_ACCOUNT_LINK,
  DISCORD: DISCORD_INVITE_LINK,
  TELEGRAM: TELEGRAM_BOT_LINK
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;

  &__link {
    width: 40px;
    height: 40px;
  }

  &__img {
    width: 100%;
  }
}
</style>

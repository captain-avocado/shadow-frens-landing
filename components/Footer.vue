<template lang="pug">
.footer
  a.footer__link.mr-32(href="#")
    img.footer__img(src="/twitter.svg")
  a.footer__link.mr-32(href="#")
    img.footer__img(src="/discord.svg")
  a.footer__link(href="#")
    img.footer__img(src="/telegram-white.svg")
</template>

<script>
export default {
  name: 'FooterSection'
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

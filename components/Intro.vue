<template lang="pug">
.intro.flex.justify-center
  Container
    .intro__content
      .intro__cards.mb-56
        ImageCommon.intro__card.mr-40(src="/intro_1.png")
        ImageCommon.intro__card.--center(src="/intro_1.png")
        ImageCommon.intro__card.ml-40(src="/intro_1.png")
      Title.intro__title Shadow Frens
      .intro__text.mb-32 NFT Collection on Solana combining unique utilities and original art with 200 hand-drawn traits
      .intro__button.flex.items-center.justify-center
        Button.mr-16
          template(slot="icon")
            img(src="/discord.svg")
          | Join Discord
        Button(type="outline")
          template(slot="icon")
            img(src="/twitter.svg")
          | Follow on Twitter
</template>

<script>
export default {
  name: 'IntroSection'
}
</script>

<style lang="scss" scoped>
.intro {
  &__content {
    width: 100%;
    max-width: 520px;
    text-align: center;
  }

  &__card {
    width: 200px;
    height: 200px;

    &.--center {
      position: absolute;
      width: 250px;
      height: 250px;
      z-index: 1;
      transform: translate(-50%, -30px);
    }
  }
}
</style>

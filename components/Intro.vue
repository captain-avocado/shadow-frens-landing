<template lang="pug">
.intro.flex.justify-center
  Container
    .intro__content
      .intro__cards.mb-160
        ImageCommon.intro__card(
          src="./intro_4.png"
          :class="{'--left': classes[0]===0,'--right': classes[0]===2,'--center': classes[0]===1 }"
        )
        ImageCommon.intro__card(
          src="./intro_1.png"
          :class="{'--left': classes[0]===1,'--right': classes[0]===0,'--center': classes[0]===2 }"
        )
        ImageCommon.intro__card(
          src="./intro_8.jpg"
          :class="{'--left': classes[0]===2,'--right': classes[0]===1,'--center': classes[0]===0 }"
        )
      Title.intro__title Shadow Frens
      .intro__text.mb-32 NFT Collection on Solana combining unique utilities and original art with 200 hand-drawn traits
      .intro__button.flex.items-center.justify-center
        DiscordButton.mr-16
        TwitterButton(type="outline")
</template>

<script>
// import { sleep } from '@/sleep'

export default {
  name: 'IntroSection',
  data () {
    return {
      classes: [0, 1, 2]
    }
  }
  // async mounted () {
  //   for (let i = 0; i < 10; i++) {
  //     await sleep(2000)
  //     this.classes = this.classes.map(index => index === 2 ? 0 : index + 1)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.intro {
  &__content {
    padding: 200px 0;
    width: 100%;
    max-width: 520px;
    text-align: center;
  }

  &__cards {
    position: relative;
  }

  &__card {
    width: 200px !important;
    height: 200px;
    transition: transform .5s ease-in-out;
    position: absolute;

    &.--left {
      top: 50%;
      transform: translate(-120%, -50%) scale(1);
      @include tablet {
        display: none;
      }
    }

    &.--right {
      top: 50%;
      transform: translate(20%, -50%) scale(1);
      @include tablet {
        display: none;
      }
    }

    &.--center {
      z-index: 1;
      left: 50%;
      top: -100px;
      transform-origin: top;
      transform: translate(-50%, -30px) scale(1.25);
    }
  }
}
</style>

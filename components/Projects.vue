<template lang="pug">
  .wrapper
    Subtitle.ml-auto.mr-auto.mb-32 Introducing our projects
    .project.--light
      SectionWithImage(reverse)
        .flex.justify-end(slot="image")
          ImageCommon(src="/shadowcast.png" max-height="400")
        template(slot="default")
          .title-row.mb-32.flex.items-center
            Subtitle.mr-16 ShadowCast
            img.img(src="/yt.svg")
          Paragraph We will create high-quality video content about NFTs.
          Paragraph
            | It’s going to be YouTube channel “ShadowCast”, where we speak on topics like:
            | where to find upcoming collections
            | how to analyse collections,
            | how to create collection, etc.
          Paragraph
            i
              span And of course there will be&nbsp;
              strong exclusive content only for holders.
              span &nbsp;We will invite cool people from NFT space to talk to them about industry.
    .project
      SectionWithImage(reverse)
        .flex.justify-end(slot="image")
          ImageCommon(src="/shadowtools.jpg" max-height="400")
        template(slot="default")
          .title-row.mb-32.flex.items-center
            Subtitle.mr-16 Shadow Tools
            img.img(src="/telegram.svg")
          Paragraph We are creators not only in art space. We love to build services that help people. We are developing several tools for NFT traders and NFT collectors.
          Paragraph
            i
              span We’ve already created&nbsp;
              a(href="#") telegram bot
              span , that notifies about upcoming collections. Check it out.
    .project.--light
      SectionWithImage(reverse)
        .flex.justify-end(slot="image")
          ImageCommon(src="/shadowverse.png" max-height="400")
        template(slot="default")
          .title-row.mb-32.flex.items-center
            Subtitle.mr-16 ShadowVerse
            img.img(src="/game.svg")
          Paragraph We’ll also tell more about ShadowVerse and create a game.
          Paragraph  Our vision is that games should bring joy and fun, they are not meant to be places for grind or work. So we don’t want to use classical P2E mechanics for NFT games. Instead of this we want to focus on what NFTs do very good – creating closed communities.
          Paragraph  We’ll deliver new content every couple of months, so the holders will constantly get new gaming experience.
</template>

<script>
export default {
  name: 'ProjectsContainer'
}
</script>

<style lang="scss" scoped>
.project {
  height: 540px;
  display: flex;
  align-items: center;

  &.--light {
    background-color: $bg-light;
  }
}
.img {
  width: 50px;
}
</style>

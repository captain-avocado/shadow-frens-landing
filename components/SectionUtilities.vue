<template lang="pug">
  SectionWithImage(reverse)
    template(slot="image")
      ImageCommon.image(src="/section_utilities.jpg")
    template(slot="default")
      Subtitle.mb-16 We provide different utilities
      Paragraph
        .div • Exclusive giveaways of rare NFTs for holders
        .div • Merch with unique design
        .div • Staking $SFC while NFT is not listied
      Paragraph And this is not all!
      Button.mt-32 Show more
</template>

<script>
export default {
  name: 'SectionUtilities'
}

</script>

<style lang="scss" scoped>
.image {
  height: 360px;
}
</style>

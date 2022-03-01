<template lang="pug">
  SectionWithImage
    template(slot="image")
      ImageCommon.image(src="./section_art.jpg")
    template(slot="default")
      Subtitle.mb-16 We create original art
      Paragraph We proud that our collection has  unique concept. Our Shadows are sincere and emotional. We are not copycats.
      Paragraph You can find more sneek peaks in our Twitter.
      TwitterButton.mt-32 Show more
</template>

<script>
export default {
  name: 'SectionArt'
}

</script>

<style lang="scss" scoped>
.image {
  height: 360px;
}
</style>

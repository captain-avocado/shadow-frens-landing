<template lang="pug">
.reminder
  .reminder__text.mb-32
    Subtitle Don't follow us on Twitter yet?
    Paragraph Subscribe to get project updates everyday.
  .reminder__slider.slider.mb-32.flex
    .image-wrapper
      ImageCommon(src="/intro_1.png")
    .image-wrapper
      ImageCommon(src="/intro_2.png")
    .image-wrapper
      ImageCommon(src="/intro_3.png")
    .image-wrapper
      ImageCommon(src="/intro_4.png")
    .image-wrapper
      ImageCommon(src="/intro_5.png")
    .image-wrapper
      ImageCommon(src="/intro_6.png")
    .image-wrapper
      ImageCommon(src="/intro_7.png")
  TwitterButton.m-auto
</template>

<script>
export default {
  name: 'TwitterReminder'
}
</script>

<style lang="scss" scoped>
.reminder {
  text-align: center;
  overflow: hidden;
}

.slider {
  transform: translateX(-90px);
}

.image-wrapper {
  min-width: 15%;
  padding: 0 24px;
}
</style>

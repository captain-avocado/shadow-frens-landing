<template lang="pug">
  .wrapper
    .section.--light(reverse)
      .section__image(slot="image")
        ImageCommon.image(src="/store.png" :max-height="300" )
      .section__text(slot="default")
        Subtitle.mb-16 Shadow Store
        Paragraph All of the products will be available in our Shadow Store.
        Paragraph Stake your shadows and buy these products with $SFC!
        Paragraph We will expand the number of products available in the store step by step through collaborations with others collections and brands.
</template>

<script>
export default {
  name: 'StoreSection'
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}
.section {
  display: flex;
  padding: 80px;
  margin: auto;
  border-radius: 10px;
  background-color: $bg-light;

  @include tablet {
    flex-direction: column;
  }

  &__image {
    max-width: 240px;
    height: 240px;
    margin-right: 80px;
    @include tablet {
      margin: 0 auto 40px;
    }
  }

  &__text {
    max-width: 300px;
    margin: auto;
  }
}
</style>

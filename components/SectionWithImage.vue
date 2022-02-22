<template lang="pug">
  Container.m-auto
    .section(:class="{ '--reverse': reverse }")
      .section__content
        slot
      .section__image
        slot(name="image")
</template>

<script>
export default {
  name: 'SectionWithImage',
  props: {
    reverse: Boolean
  }
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: space-between;
  padding: 60px 0 60px;
  width: 100%;

  &.--reverse {
    flex-direction: row-reverse;
  }

  &__content {
    margin: auto;
  }

  &__content, &__image {
    width: 50%;
    padding: 0 32px;
  }
}
</style>

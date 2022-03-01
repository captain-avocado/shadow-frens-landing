<template lang="pug">
  Container.m-auto
    .section(:class="{ '--reverse': reverse }")
      .section__content
        slot
      .section__image(:class="{ '--small': tabletSmallImage }")
        slot(name="image")
</template>

<script>
export default {
  name: 'SectionWithImage',
  props: {
    reverse: Boolean,
    tabletSmallImage: Boolean
  }
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: space-between;
  padding: 60px 0 60px;
  width: 100%;

  @include tablet {
    flex-direction: column;
    padding: 0;
  }

  &.--reverse {
    flex-direction: row-reverse;

    @include tablet {
      flex-direction: column;
    }
  }

  &__content {
    margin: auto;

    @include tablet {
      margin-bottom: 32px;
    }
  }

  &__content, &__image {
    width: 50%;
    padding: 0 32px;

    @include tablet {
      width: 100%;
      padding: 0;
    }
  }

  &__image {
    &.--small {
      @include tablet {
        width: 75%;
        margin: auto;
      }
    }
  }
}
</style>

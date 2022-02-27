<template lang="pug">
.subtitle(:class="[`--${type}`]")
  slot
</template>

<script>
export default {
  name: 'UISubtitle',
  props: {
    /**
     * @values default, small
     */
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitle {
  font-size: 32px;
  font-weight: 700;

  &.--small {
    font-size: 24px;
  }
}
</style>

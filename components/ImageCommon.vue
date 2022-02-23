<template lang="pug">
  img.image(:src="src" :style="{ maxHeight: maxHeight ? maxHeight + 'px' : 'auto' }")
</template>

<script>
export default {
  name: 'UIImage',
  props: {
    src: {
      type: String,
      default: ''
    },
    maxHeight: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  border-radius: 10px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  object-fit: cover;
  width: 100%;
}
</style>

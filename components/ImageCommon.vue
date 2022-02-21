<template lang="pug">
  img.image(:src="src")
</template>

<script>
export default {
  name: 'UIImage',
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  border-radius: 10px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
}
</style>

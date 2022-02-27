<template lang="pug">
.card
  slot
</template>

<script>
export default {
  name: 'UICard'
}
</script>

<style lang="scss" scoped>
.card {
  padding: 36px;
  background-color: $bg-light;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>

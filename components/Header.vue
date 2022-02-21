<template lang="pug">
header.header.flex.justify-center
  Container(
    flex-direction="row"
    align-items="center"
    justify-content="space-between"
  )
    Logo
    Button Connect
</template>

<script>
export default {
  name: 'UIHeader'
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 36px 0;
}
</style>

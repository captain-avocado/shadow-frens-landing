<template lang="pug">
.wrapper
  .content
    Header.header
    .main-content
      Intro.intro
      SectionArt
      SectionUtilities
      Projects.mt-80
      Reminder
      Store.mb-80
      Team.mb-80
      Roadmap.mb-80
  .footer
    Container
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $bg-dark;
  width: 100%;
  height: 100%;
}
.content {
  flex: 1;
}

.header {
  width: 100%;
}
</style>

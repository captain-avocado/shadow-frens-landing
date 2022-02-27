<template lang="pug">
.wrapper
  .content
    Header.header
    .main-content
      Intro.intro
      SectionArt
      SectionUtilities
      Projects.mt-120.mb-120
      Reminder.mb-120
      Store.mb-120
      Team.mb-120
      Roadmap.mb-120
  Footer.mb-40
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

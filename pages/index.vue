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

.container {
  width: 90%;
  max-width: 1280px;
}

.header {
  position: fixed;
  width: 100%;
  top: 0;
}

.intro {
  height: 100vh;
}

</style>

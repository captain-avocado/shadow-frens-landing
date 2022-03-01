<template lang="pug">
.wrapper
  .content
    Header.header
    .main-content
      Intro.intro
      SectionArt.art
      SectionUtilities.utilities(@show-more="scroll")
      Projects.mt-80.pt-40.mb-120(ref="projects")
      Reminder.mb-120
      Store.mb-120
      Team.mb-120
      Roadmap.mb-120
  Footer.mb-40
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    scroll () {
      if (process.client) {
        const projectsEl = this.$refs.projects.$el
        projectsEl.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
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

.art, .utilities {
  @include tablet {
    margin-bottom: 80px;
  }
}
</style>

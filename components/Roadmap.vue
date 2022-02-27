<template lang="pug">
  .roadmap
    Subtitle.roadmap__title.mb-40 Roadmap
    .roadmap__list
      .roadmap__item.mb-80(v-for="item in $options.roadmap" :key="item.title")
        Subtitle.mb-16.ml-16(type="small") {{ item.title }}
        Card.roadmap__card
          .roadmap__text(v-for="(text, index) in item.items" :class="{ '--done': item.done.includes(index) }") {{ text }}
</template>

<script>
export default {
  name: 'RoadmapSection',
  roadmap: [
    {
      title: '01 – Pre-mint',
      items: [
        'Set up Twitter account',
        'Formalize roadmap',
        'Set up Discord server',
        'Launch website',
        'Create first merch concepts',
        'Set up ShadowCast and create the first video content',
        'Collaborate with different collections, run giveaways and grow the community',
        'Finish tech part to provide smooth minting experience'
      ],
      done: [0, 1, 2, 3]
    },
    {
      title: '02 – 33% sold out',
      items: [
        'Run auctions and giveaways with unique 1:1 NFTs, collabs with others collections',
        'Provide staking $SFC for holders',
        'Create ShadowCast video series exclusively for holders'
      ],
      done: []
    },
    {
      title: '03 – 66% sold out',
      items: [
        'Create your NFTs dashboard that will help you with checking collections floors and other dynamics',
        'Produce first batch of merch',
        'Create Shadow Stor'
      ],
      done: []
    },
    {
      title: '04 – 100% sold out',
      items: [
        'Expand ShadowVerse by creating a game',
        'More products come to the store',
        'Release Roadmap 2.0'
      ],
      done: []
    }
  ]
}
</script>

<style lang="scss" scoped>
.roadmap {
  max-width: 704px;
  width: 90%;
  margin: auto;

  &__title {
    text-align: center;
  }

  &__item {
    position:relative;
    &:after {
      content: '';
      position: absolute;
      left: 32px;
      bottom: 103%;
      height: 64px;
      background-color: $white;
      width: 1px;
    }
    &:first-child {
      &:after {
        display: none;
      }
    }
  }

  &__text {
    margin-bottom: 4px;

    &.--done {
      text-decoration: line-through;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

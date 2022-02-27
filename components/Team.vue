<template lang="pug">
.team
  Container.m-auto
    Subtitle.mb-40 Team
    .team__container.flex.justify-between.m-auto
      .team__member.member(v-for="member in $options.members")
        img.member__ava.mb-32(:src="member.ava")
        a.member__title.mb-16(:href="member.link") {{ member.title }}
        .member__text {{ member.text }}
</template>

<script>
import { TEAM_ANN, TEAM_DEEMONS, TEAM_ITNON } from '@/configs/constants'

export default {
  name: 'TeamSection',
  members: [
    {
      title: '@_deemons',
      link: TEAM_DEEMONS,
      text: 'Promotion, management. He is also experienced software engineer.',
      ava: '/deemons.png'
    },
    {
      title: '@Ann8Ark',
      link: TEAM_ANN,
      text: 'NFT artist and motion designer. She worked with various projects, including NFT collections.',
      ava: '/ann.png'
    },
    {
      title: '@koritnon',
      link: TEAM_ITNON,
      text: 'Head Solana dev. Also he has experience in web development.',
      ava: '/itnon.png'
    }
  ]
}
</script>

<style lang="scss" scoped>
.team {
  &__container {
    width: 668px;
  }

  &__member {
    max-width: 197px;
  }
}
.member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__ava {
    width: 180px;
    height: 180px;
    border-radius: 100%;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: $white;
  }
}
</style>

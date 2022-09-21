<template>
  <div class="player">
    <NormalPlayer></NormalPlayer>
    <MiniPlayer></MiniPlayer>
    <ListPlayer ref="ListPlayer"></ListPlayer>
    <audio :src="currentSong.url"></audio>
  </div>
</template>

<script>
import NormalPlayer from '@/components/Player/NormalPlayer'
import MiniPlayer from '@/components/Player/MiniPlayer'
import ListPlayer from '@/components/Player/ListPlayer'
import { mapGetters } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Player',
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  computed: {
    ...mapGetters([
      'currentSong'
    ])
  }
}
</script>

<style scoped lang="scss">
.player{
}
</style>

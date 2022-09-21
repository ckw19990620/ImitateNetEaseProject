<template>
  <transition :css="false" @enter="enter" @leave="leave">
<div class="mini-player" v-show="this.isShowMiniPlayer">
  <div class="player-wrapper">
    <div class="player-left" @click="showNormalPlayer">
      <img :src="currentSong.picUrl" alt="" ref="cd">
      <div class="player-title">
        <h3>{{ currentSong.name }}</h3>
        <p>{{ currentSong.singer }}</p>
      </div>
    </div>
    <div class="player-right">
      <div class="play" @click="play" ref="play"></div>
      <div class="list" @click.stop="showList"></div>
    </div>
  </div>
</div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'

export default {
  name: 'MiniPlayer',
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer',
      'setIsPlaying',
      'setListPlayer'
    ]),
    showNormalPlayer () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    },
    showList () {
      this.setListPlayer(true)
    },
    enter (el, done) {
      Velocity(el, 'transition.bounceUpIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.bounceDownOut', { duration: 500 }, function () {
        done()
      })
    },
    play () {
      this.setIsPlaying(!this.isPlaying)
    }
  },
  computed: {
    ...mapGetters([
      'isShowMiniPlayer',
      'isPlaying',
      'currentSong'
    ])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
        this.$refs.cd.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
        this.$refs.cd.classList.remove('active')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.mini-player{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 135px;
  z-index: 2;
  .player-wrapper{
    width: 100%;
    height: 100%;
    @include bg_color();
    display: flex;
    align-items: center;
    justify-content: space-between;
    .player-left{
      display: flex;
      padding-left: 30px;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 30px;
        animation: sport 4s linear infinite;
        animation-play-state: paused;
        &.active{
          animation-play-state: running;
        }
      }
      .player-title{
        display: flex;
        flex-direction: column;
        //align-items: center;
        justify-content: center;
        h3{
          @include font_size($font_large);
          @include font_color();
        }
        p{
          @include font_size($font_samll);
          @include font_color();
        }
      }
    }
    .player-right{
      display: flex;
      align-items: center;
      .play{
        width: 84px;
        height: 84px;
        @include bg_img('../../assets/images/play');
        &.active{
          @include bg_img('../../assets/images/pause')
        }
      }
      .list{
        width: 120px;
        height: 120px;
        @include bg_img('../../assets/images/list')
      }
    }
  }
}
@keyframes sport {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>

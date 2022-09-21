<template>
<div class="playerbottom">
  <div class="player-progress">
    <span>00.00</span>
    <div class="progress-bar">
      <div class="progress-line">
        <div class="progress-dot"></div>
      </div>
    </div>
    <span>00.00</span>
  </div>
  <div class="player-control">
    <div class="mode loop" @click="mode" ref="mode"></div>
    <div class="prev"></div>
    <div class="play" @click="play" ref="play"></div>
    <div class="next"></div>
    <div class="favorite"></div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import modeType from '@/store/modeType'
export default {
  name: 'PlayerBottom',
  methods: {
    ...mapActions([
      'setIsPlaying',
      'setModeType'
    ]),
    play () {
      this.setIsPlaying(!this.isPlaying)
    },
    mode () {
      if (this.modeType === modeType.loop) {
        this.setModeType(modeType.one)
      } else if (this.modeType === modeType.one) {
        this.setModeType(modeType.random)
      } else if (this.modeType === modeType.random) {
        this.setModeType(modeType.loop)
      }
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'modeType'
    ])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    },
    modeType (newValue, oldValue) {
      if (newValue === modeType.loop) {
        this.$refs.mode.classList.add('loop')
        this.$refs.mode.classList.remove('random')
      } else if (newValue === modeType.one) {
        this.$refs.mode.classList.add('one')
        this.$refs.mode.classList.remove('loop')
      } else if (newValue === modeType.random) {
        this.$refs.mode.classList.add('random')
        this.$refs.mode.classList.remove('one')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.playerbottom{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  .player-progress{
    span{
      @include font_size($font_samll);
      @include font_color()
    }
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .progress-bar{
      width: 100%;
      margin: 0 10px;
      height: 10px;
      background: #fff;
      position: relative;
      .progress-line{
        width: 50%;
        height: 100%;
        background: #ccc;
        .progress-dot{
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: red;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .player-control{
    width: 80%;
    margin: 0 auto;
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      width: 84px;
      height: 84px;
    }
    .mode{
      &.loop{
        @include bg_img('../../assets/images/loop')
      };
      &.one{
        @include bg_img('../../assets/images/one')
      };
      &.random{
        @include bg_img('../../assets/images/shuffle')
      }
    }
    .prev{
      @include bg_img('../../assets/images/prev')
    }
    .play{
      @include bg_img('../../assets/images/play');
      &.active{
        @include bg_img('../../assets/images/pause')
      }
    }
    .next{
      @include bg_img('../../assets/images/next')
    }
    .favorite{
      @include bg_img('../../assets/images/un_favorite')
    }
  }
}
</style>

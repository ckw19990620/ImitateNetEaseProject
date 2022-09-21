<template>
<ul class="detail-Bottom">
  <li class="bottom-top" @click="selectAllMusic">
    <div class="bottom-icon"></div>
    <div class="bottom-title">播放全部</div>
  </li>
  <li v-for="value in playlist" :key="value.id" class="item" @click.stop="selectMusic(value.id)">
    <h3>{{value.name}}</h3>
<!--    value.al.name专辑名称-->
<!--    value.ar.name歌手名称-->
    <p>{{value.al.name}} - {{value.ar[0].name}}</p>
  </li>
</ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DetailBottom',
  methods: {
    ...mapActions([
      'setFullScreen',
      'setSongDetail'
    ]),
    selectMusic (id) {
      this.setFullScreen(true)
      this.setSongDetail([id])
    },
    selectAllMusic () {
      this.setFullScreen(true)
      const ids = this.playlist.map(function (item) {
        return item.id
      })
      console.log(ids)
      this.setSongDetail(ids)
    }
  },
  props: {
    playlist: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.detail-Bottom{
  width: 100%;
  padding-bottom: 135px;
  li{
    width: 100%;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    @include bg_sub_color()
  }
  .bottom-top{
    display: flex;
    align-items: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    .bottom-icon{
      width: 60px;
      height: 60px;
      margin-right: 20px;
      @include bg_img('../../assets/images/small_play')
    }
    .bottom-title{
      @include font_color();
      @include font_size($font_large)
    }
  }
  .item{
    border-bottom: 1px solid #ccc;
    h3{
      @include font_color();
      @include font_size($font_medium)
    }
    p{
      @include font_color();
      @include font_size($font_samll);
      margin-top: 1px;
      opacity: 0.8;
    }
  }
}
</style>

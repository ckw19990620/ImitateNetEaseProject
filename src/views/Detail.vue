<template>
<div class="detail">
  <SubHeader :title="playlist.name"></SubHeader>
  <DetailTop :path="playlist.coverImgUrl" ref="top"></DetailTop>
  <div class="bottom">
    <ScrollView ref="scrollview">
      <DetailBottom :playlist="playlist.tracks"></DetailBottom>
    </ScrollView>
  </div>
</div>
</template>

<script>
import SubHeader from '@/components/Detail/DetailHeader'
import DetailTop from '@/components/Detail/DetailTop'
import DetailBottom from '@/components/Detail/DetailBottom'
import ScrollView from '@/components/ScrollView'
import { getPlayList, getAlbum } from '@/api'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Detail',
  components: {
    SubHeader,
    DetailTop,
    DetailBottom,
    ScrollView
  },
  data: function () {
    return {
      playlist: {}
    }
  },
  created () {
    console.log(this.$route.params.type)
    if (this.$route.params.type === 'personalized') {
      getPlayList({ id: this.$route.params.id })
        .then((data) => {
          // console.log(data)
          this.playlist = data.playlist
        }
        ).catch((err) => {
          console.log(err)
        })
    } else if (this.$route.params.type === 'albums') {
      getAlbum({ id: this.$route.params.id })
        .then((data) => {
          console.log(data)
          this.playlist = {
            name: data.album.name,
            coverImgUrl: data.album.picUrl,
            tracks: data.songs
          }
          // this.playlist = data.playlist
        }
        ).catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    const defaultHeight = this.$refs.top.$el.offsetHeight
    // console.log(defaultHeight)
    this.$refs.scrollview.scrolling((offsetY) => {
      // console.log(offsetY)
      if (offsetY < 0) {
        // console.log('向上滚动')
        // 高斯模糊是非常消耗性能的，不推荐在移动端使用，如果非要在移动端使用，建议只设置一次
        // const scale = 20 * Math.abs(offsetY) / defaultHeight
        const scale = Math.abs(offsetY) / defaultHeight
        this.$refs.top.changeMask(scale)
        // console.log(scale)
        // this.$refs.top.$el.style.filter = `blur(${scale}px)`
      } else {
        // console.log('向下滚动')
        const scale = 1 + offsetY / defaultHeight
        // console.log(scale)
        this.$refs.top.$el.style.transform = `scale(${scale})`
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
.detail{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @include bg_sub_color()
  //background-color: #f00;
}
.bottom{
  position: fixed;
  top: 500px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

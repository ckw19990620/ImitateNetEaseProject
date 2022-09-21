<template>
  <div class="newsong">
    <div class="newsong-top">
      <h3>{{ title }}</h3>
    </div>
      <ul class="newsong-list">
        <li v-for="value in songs" :key="value.id" class="item">
          <img v-lazy="value.song.album.picUrl" alt="">
          <div>
            <h3>{{value.name}}</h3>
            <p>{{value.song.artists[0].name}}</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'NewSong',
  props: {
    songs: {
      type: Array,
      default: () => [],
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
@import "../assets/css/variable";
.newsong{
  width: 100%;
  @include bg_sub_color();
  .newsong-top{
    width: 100%;
    height: 84px;
    line-height: 84px;
    @include bg_sub_color();
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
    h3{
      @include font_size($font_large);
      font-weight: bold;
      @include font_color()
    }
  }
  .newsong-list{
    width: 100%;
    overflow: hidden;
    .item{
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #cccccc;
      img{
        width: 150px;
        height: 150px;
        border-radius: 20px;
        margin-right: 20px;
      }
      div{
        h3{
          @include font_size($font_large);
          @include font_color()
        }
        p{
          @include font_size($font_samll);
          @include font_color();
          opacity: 0.6;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>

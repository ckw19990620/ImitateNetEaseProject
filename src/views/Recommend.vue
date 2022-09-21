<template>
  <div class="recommend">
    <div class="recommend-box">
      <ScrollView>
        <div>
          <Banner :banners="banners"></Banner>
          <Personalized :personalized="personalized" :title="'推荐歌单'" @select="fatherSelectItem" type="personalized"></Personalized>
          <NewAlbum :albums="albums" :title="'最新专辑'" @select="fatherSelectItem" type="albums"></NewAlbum>
          <NewSong :songs="songs" :title="'最新歌曲'"></NewSong>
        </div>
      </ScrollView>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getNewAlbum, getNewSong } from '@/api'
import Banner from '@/components/Recommend/Banner'
import Personalized from '@/components/Recommend/Personalized'
import NewAlbum from '@/components/Recommend/NewAlbum'
import NewSong from '@/components/Recommend/NewSong'
import ScrollView from '@/components/ScrollView'

export default {
  /* eslint-disable */
  name: 'Recommend',
  components:{
    Banner,
    Personalized,
    NewAlbum,
    NewSong,
    ScrollView
  },
  methods: {
    fatherSelectItem(id ,type) {
      this.$router.push({
        path: `/recommend/detail/${id}/${type}`
      })
    }
  },
  data () {
    return {
      banners:[],
      personalized:[],
      albums:[],
      songs:[]
    }
  },
  created () {
    getBanner()
      .then((data) => {
      // console.log(data)
        this.banners = data.banners
    })
      .catch(function (err){
      console.log(err)
    });
    getPersonalized()
      .then((data) => {
      // console.log(data)
        this.personalized = data.result
      })
      .catch(function (err){
        console.log(err)
      });
    getNewAlbum()
      .then((data) => {
        // console.log(data)
        this.albums = data.albums.splice(0,6)
      })
      .catch(function (err){
        console.log(err)
      });
    getNewSong()
      .then((data) => {
        // console.log(data)
        this.songs = data.result
      })
      .catch(function (err){
        console.log(err)
      });
  }
}
</script>

<style scoped lang="scss">
.recommend{
  position: fixed;
  top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
  /*overflow: hidden;*/
  .recommend-box{
    width: 100%;
    height: 100%;
    //overflow: hidden;
  }
}
.v-enter{
  transform: translateX(100%);
}
.v-enter-to{
  transform: translateX(0%);
}
.v-enter-active{
  transition: transform 0.5s;
}
.v-leave{
  transform: translateX(0%);
}
.v-leave-to{
  transform: translateX(100%);
}
.v-leave-active{
  transition: transform 0.5s;
}

</style>

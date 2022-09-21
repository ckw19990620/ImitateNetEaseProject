<template>
  <div id="app">
    <Header></Header>
    <Tabbar></Tabbar>
    <Player></Player>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
import Player from '@/views/Player'
export default {
  name: 'App',
  methods: {
  },
  components: {
    Header,
    Tabbar,
    Player
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/variable";
.changeSkin{
  position: fixed;
  left: 0;
  bottom: 0;
  button{
    width: 100px;
    height: 100px;
    &:nth-of-type(1){
      background-color: $background-color-theme;
    }
    &:nth-of-type(2){
      background-color: $background-color-theme1;
    }
    &:nth-of-type(3){
      background-color: $background-color-theme2;
    }
  }
}

</style>

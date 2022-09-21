<template>
<div class="header" @click="changeTheme">
  <div class="header-left" @click.stop="back"></div>
  <div class="header-title">{{ title }}</div>
  <div class="header-right"></div>
</div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'SubHeader',
  data () {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
    changeTheme () {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themes[this.index])
    },
    back () {
      window.history.back()
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variable";
@import "../../assets/css/mixin";
.header{
  width: 100%;
  height: 100px;
  @include bg_color();
  //background-color: #f00;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 9999;
  .header-left,.header-right{
    width: 84px;
    height: 84px;
    //background-color: #000;
    margin-top: 8px;
  }
  .header-left{
    @include bg_img('../../assets/images/back')
  }
  .header-right{
    @include bg_img('../../assets/images/more')
  }
  .header-title{
    text-align: center;
    line-height: 100px;
    color: #FFFFFF;
    font-weight: bold;
    @include font_size($font_medium_s);
    @include no-wrap()
  }
}
</style>

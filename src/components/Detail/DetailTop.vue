<template>
<div class="detail-top">
  <div class="detail-container">
    <img :src="path" alt="">
    <div class="mask" ref="mask"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailTop',
  props: {
    path: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    changeMask (opacity) {
      this.$refs.mask.style.opacity = opacity
    }
  }
}
</script>

<style scoped lang="scss">
.detail-top{
  width: 100%;
  height: 500px;
  overflow: hidden;
  img{
    width: 100%;
  }
  .mask{
    position: absolute;
    background:#000000;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
  }
}
</style>

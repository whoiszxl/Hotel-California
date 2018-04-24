<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1412/df/94274dc87270c48567ff1f8c2be2bc94.water.jpg_600x330_9717ac06.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">欢乐海岸</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span> 100</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleCloseClick"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },

    handleCloseClick () {
      this.showGallary = false
    }
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1507/ac/5ca7438b49fe4a1ea906ed2c4238b076.water.jpg_r_800x800_787a1885.jpg', 'http://img1.qunarzz.com/sight/p0/1507/f1/89f9c504930f86f86b877ed28b98fa2c.water.jpg_r_800x800_6c21161d.jpg']
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      color #fff
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        padding 0 .4rem
        margin-top .14rem
        height .4rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>

<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '欢乐谷成人票（日夜场通玩）'
        }, {
          title: '欢乐谷成人票（三天套票）'
        }]
      }, {
        title: '學生票',
        children: [{
          title: '欢乐谷學生票（日夜场通玩）'
        }, {
          title: '欢乐谷學生票（三天套票）'
        }]
      }, {
        title: '兒童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>

  .content
    height 50rem
</style>

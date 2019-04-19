<template>
<div class="container">
  <swiper indicator-dots indicator-color="pink" autoplay="true" interval="2000" indicator-active-color="green">
    <swiper-item>
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=987919804,2331019239&fm=26&gp=0.jpg">
    </swiper-item>
    <swiper-item>
      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=237384189,2563748855&fm=26&gp=0.jpg">
    </swiper-item>
    <swiper-item>
    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1155537688,289893061&fm=26&gp=0.jpg">
    </swiper-item>
    <swiper-item>
      <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1001266141,917865099&fm=26&gp=0.jpg">
    </swiper-item>
  </swiper>
  <div>
    <Templ v-for="(item, index) in listTmp"
           :key="index"
           :item="item"
           :index="index" />
  </div>
</div>
</template>

<script>
  import { mapState } from 'vuex'
  import Templ from '@/components/list_template'
  export default {
    name: 'list',
    components: { Templ },
    // 数据模型
    data () {
      return {
        msg: ''
      }
    },
    // 方法
    methods: {

    },
    // 计算属性
    computed: {
      // 映射状态到本组件
      ...mapState([ 'listTmp' ])
    },
    // 生命周期(mounted)
    mounted () {

    },
    beforeMount () {
      // 分发 action 修改状态
      this.$store.dispatch('getList')
    }
  }
</script>

<style>
.container swiper{
  width: 100%;
  height: 400rpx;
}
  .container swiper img{
    width: 100%;
    height: 100%;
  }
</style>

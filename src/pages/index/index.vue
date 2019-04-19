
<template>
  <div class="main">
    <img v-if="isShow" :src="userInfo.avatarUrl"/>
    <button v-else open-type="getUserInfo" @getuserinfo="getUserInfo">点击获取用户信息</button>
    <p class="name">{{userInfo.nickName}}</p>
    <div @tap="wel" class="wel">
      <p>开启小程序之旅</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userInfo: {},
        isShow: false
      }
    },
    beforeMount () {
      this.handleGetUserInfo()
    },
    methods: {
      handleGetUserInfo () {
        wx.getUserInfo({
          success: (data) => {
            this.userInfo = data.userInfo
            this.isShow = true
          },
          fail: () => {
            console.log('获取失败')
          }
        })
      },
      getUserInfo (data) {
        if (data.mp.detail.rawData) {
          this.handleGetUserInfo()
        }
      },
      wel () {
        wx.switchTab({
          url: '/pages/list/main'
        })
      }
    }
  }
</script>

<style>
 /*page{*/
    /*height: 100%;!*生效*!*/
    /*background-color: #4bd265;*/
  /*}*/
  .name{
    line-height: 100rpx;
    color: #d27c2b;
  }
  .wel{
    color: #8c40d2;
    border: #fbfffd 1rpx solid;
    text-align: center;
    width: 300rpx;
    height: 80rpx;
  }
  img{
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin: 100rpx 0;
  }
  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

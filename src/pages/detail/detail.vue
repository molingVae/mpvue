
<template>
<div class="container">
  <img class="detail_img" src="/static/images/detail/carousel/01.jpg">
  <div class="avatar_data">
    <img src="/static/images/avatar/0.png">
    <span>新华社</span>
    <span>发布于</span>
    <span>2019/04/19    </span>
  </div>
  <p class="compnay">贾静雯简介</p>
  <div class="collection_share_container">
    <div class="collection_share">
      <img src="/static/images/icon/collection-anti.png">
      <img src="/static/images/icon/share-anti.png">
    </div>
    <div class="line"></div>
  </div>
  <button>转发此文章</button>
  <p class="content">贾静雯...................</p>
</div>
</template>

<script>
  export default {
    name: 'detail'
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .detail_img {
    width: 100%;
    height: 460rpx;
  }

  .avatar_data {
    padding: 10rpx
  }

  .avatar_data img {
    width: 64rpx;
    height: 64rpx;
    vertical-align: middle;
  }

  .avatar_data span {
    font-weight: 24rpx;
    margin-left: 6rpx;
  }

  .compnay {
    font-size: 32rpx;
    font-weight: bold;
    padding: 10rpx;
  }

  .collection_share {
    float: right;
    margin-right: 30rpx;
  }

  .collection_share img {
    width: 90rpx;
    height: 90rpx;
    margin-right: 20rpx;
  }

  .collection_share_container {
    position: relative;
  }

  .line {
    position: absolute;
    top: 45rpx;
    left: 5%;
    width: 90%;
    height: 1rpx;
    background: #eee;
    z-index: -1
  }

  .content {
    font-size: 32rpx;
    text-indent: 32rpx;
    line-height: 50rpx;
    letter-spacing: 3rpx;
  }

  .music_img {
    height: 60rpx;
    width: 60rpx;
    position: absolute;
    top: 200rpx;
    left: 50%;
    margin-top: -30rpx;
  }



</style>

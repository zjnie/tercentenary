<template>
  <Container :showNext="false">
    <div class="main-box">
      <img class="img-header" src="@/assets/teacher/end-header.png" />
      <div class="keyword">
        <img class="quote" src="@/assets/teacher/quote.png">
        <span>{{ $userInfo.keyWords }} </span>
        <img class="quote" src="@/assets/teacher/quote.png">
      </div>
      <p>已有</p>
      <p class="highlight">{{ count }}位师生</p>
      <p>为南师大点亮生日蜡烛</p>
      <a v-if="$userInfo.editable" class="highlight" @click="onShare">我也去点亮</a>
      <p v-if="$userInfo.years" class="font-12 mt-50">分享<span class="highlight">“我和南师大的{{ $userInfo.years }}年”</span></p>
      <p v-else class="font-12 mt-50">分享<span class="highlight">“庆祝南京师范大学建校120周年”</span></p>
      <p class="font-12">前120名将获得专属校庆纪念奖</p>
    </div>
  </Container>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        count: this.$userInfo.zfjs
      }
    },
    created() {
      window['bh-mixin-sdk'].default(res => {
        console.log(1, res)
      })
    },
    methods: {
      onShare() {
        axios.post(`/rsfw/sys/${window.$folderName}/jszt/saveZfjs.do`).then(res => {
          if (res.data.code === 0) {
            this.count = res.data.datas.zfjs
            window['bh-mixin-sdk'].default()(res => {
              console.log(2, res)
              res.sdk.bh.social.share({
                title: '百廿风华 厚生致远',
                content: '庆祝南京师范大学建校120周年',
                iconUrl: window.location.origin + `/rsfw/sys/${window.$folderName}/` + require('@/assets/common/home-logo.png'),
                linkUrl: window.location.origin + window.location.pathname + '?code=' + this.$userInfo.wid
              })
            })
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .keyword {
    position: relative;
    font-family: 'SourceHanSerifCN-Bold';
    font-size: 50px;
    color: #c13b2f;
    margin-bottom: 16px;

    .quote {
      width: 16px;
      position: relative;
      top: -20px;
      margin-right: 20px;

      &:nth-of-type(2) {
        transform: rotateZ(180deg);
        margin-right: 0;
        margin-left: 10px;
      }
    }
  }

  a {
    margin-top: 50px;
    font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  .mt-50 {
    margin-top: 50px;
  }

  .font-12 {
    font-size: 12px;
    line-height: 20px;
  }
</style>
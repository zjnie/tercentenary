<template>
  <div id="app">
    <button type="button" class="btn-play" @click="toggle">播放视频</button>
    <audio ref="audio" src="horse.mp3" loop>
      您的浏览器不支持该音频格式。
    </audio>
    <transition :name="name">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'

  export default {
    data() {
      const query = window.location.search.substring(1)
      const vars = query.split('&')
      let code = ''

      for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=')
        if (pair[0] == 'code') {
          code = pair[1]
          break
        }
      }

      if (code === 'null' || code === 'undefined') {
        this.code = ''
      }

      return {
        code,
        name: 'slide-up',
        isPaused: true
      }
    },
    created() {
      if (process.env.NODE_ENV === 'production') {
        this.getUserInfo()
      }
      else {
        this.getMock()
      }
    },
    methods: {
      toggle() {
        this.isPaused ? this.play() : this.pause()
      },
      play() {
        this.$refs.audio.play()
        this.isPaused = false
      },
      pause() {
        this.$refs.audio.pause()
        this.isPaused = true
      },
      getMock() {
        Vue.prototype.$userInfo = {
          role: 1,
          id: 2010010,
          wid: 2010010,
          editable: true,
          years: 20,
          lxrq: '2010-25-45',
          rxny: '2010-25-45',
          days: 300,
          jg: 'xxxx',
          distance: '3333',
          chineseEra: 'xx',
          skrs: '2222',
          jslb: '2',
          fwbmsl: 'ssss',
          sszs: '3322',
          scjyrq: '20155-5889',
          cqctdk: 'xxx',
          yxmc: 'yxmc',
          keyWords: '未来可期'
        }

        window.$userInfo = Vue.prototype.$userInfo

        const path = {
          0: '/teacher',
          1: '/teacher',
          2: '/student',
          3: '/new-student'
        }

        this.$router.replace(path[1])
      },
      getUserInfo() {
        let params = {}
        if (this.code) {
          params = {
            code: this.code
          }
        }
        axios.get(`/rsfw/sys/${window.$folderName}/jszt/getRole.do`, {
          params
        }).then(res => {
          const datas = res.data.datas || {}
          const data = datas.data || {}

          Vue.prototype.$userInfo = {
            ...datas.data,
            lxrq: data.lxrq?.replace(/(\d+)-(\d+)-(\d+)/, '$1年$2月$3日'),
            scjyrq: data.scjyrq?.replace(/(\d+)-(\d+)-(\d+)/, '$1年$2月$3日'),
            rxny: data.rxny?.replace(/(\d+)-(\d+)-(\d+)/, '$1年$2月$3日'),
            id: datas.id,
            role: datas.role,
            editable: !this.code,
          }

          window.$userInfo = Vue.prototype.$userInfo

          const path = {
            0: '/teacher',
            1: '/teacher',
            2: '/student',
            3: '/new-student'
          }

          this.$router.replace(path[datas.role])
        })
      }
    }
  }
</script>

<style lang="stylus">
  #app {
    position: relative;
    height: 100%;
    overflow-y: hidden;

    &::after {
      display: block;
      height: 0;
      overflow: hidden;
      content: '字体加载';
      opacity: 0;
      font-family: 'SourceHanSerifCN-Bold';
    }
  }

  .btn-play {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 99;
  }

  .router-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

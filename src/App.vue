<template>
  <div id="app">
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
        name: 'slide-up'
      }
    },
    created() {
      Vue.prototype.$userInfo = {
        role: 1,
        id: 2010010,
        wid: 2010010,
        editable: true,
        isVisitor: false,
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
      const path = {
        0: '/teacher',
        1: '/teacher',
        2: '/student',
        3: '/new-student'
      }

      this.$router.replace(path[1])

      //this.getUserInfo()
    },
    methods: {
      getUserInfo() {
        let params = {}
        if (this.code) {
          params = {
            code: this.code
          }
        }
        axios.get('/rsfw/sys/njsfdxxqydd/jszt/getRole.do', {
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
            isVisitor: datas.role === 0
          }

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

  .router-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

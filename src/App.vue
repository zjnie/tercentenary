<template>
  <div id="app">
    <transition name="slide">
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

      return {
        code
      }
    },
    created() {
      Vue.prototype.$userInfo = {
        role: 1,
        wid: 2010010,
        editable: true,
        isVisitor: true
      }
      const path = {
        0: '/teacher/history',
        1: '/teacher',
        2: '/student',
        3: '/new-student'
      }

      this.$router.push(path[0])
      // this.getUserInfo()
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
            0: '/teacher/history',
            1: '/teacher',
            2: '/student',
            3: '/new-student'
          }

          this.$router.push(path[datas.role])
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

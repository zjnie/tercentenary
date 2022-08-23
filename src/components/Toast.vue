<template>
  <transition name="fade" mode="out-in">
    <div class="toast">{{ text }}</div>
  </transition>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'Toast',
    data() {
      return {
        text: ''
      }
    },
    show(text) {
      const constructor = Vue.extend(this)
      const instance = new constructor()
      instance.text = text
      instance.$mount()
      document.body.append(instance.$el)

      setTimeout(() => {
        document.body.removeChild(instance.$el)
      }, 2000)
    }
  }
</script>

<style lang="stylus" scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 12px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    line-height: 20px;
    white-space: pre-wrap;
    text-align: center;
    word-break: break-all;
    z-index: 1;
    transition: opacity 2s;
  }
</style>
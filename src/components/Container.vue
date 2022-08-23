<template>
  <div class="container" :class="className" @touchstart="handleTouchstart" @touchend="handleTouchend">
    <img v-if="showLogo" class="logo" src="@/assets/teacher/logo.png" />
    <div class="main">
      <slot></slot>
    </div>
    <img v-if="showNext" class="btn-next" :src="btnNextImage" @click="next" />
  </div>
</template>

<script>
  export default {
    props: {
      showLogo: {
        type: Boolean,
        default: true
      },
      showNext: {
        type: Boolean,
        default: true
      },
      to: String
    },
    data() {
      return {}
    },
    computed: {
      className() {
        const path = this.$route.path

        if (/^\/teacher\//.test(path)) return 'teacher'
        if (/^\/student\//.test(path)) return 'student'
        if (/^\/new-student\//.test(path)) return 'new-student'
      },
      btnNextImage() {
        const path = this.$route.path

        if (/^\/teacher\//.test(path)) return require('@/assets/teacher/btn-next.png')
        if (/^\/student\//.test(path)) return require('@/assets/student/btn-next.png')
        if (/^\/new-student\//.test(path)) return require('@/assets/new-student/btn-next.png')
      }
    },
    methods: {
      next() {
        if (this.to) return this.$router.push(this.to)
        this.$emit('next')
      },
      handleTouchstart(event) {
        this.y = event.touches[0].clientY
      },
      handleTouchend(event) {
        if (this.$el.clientHeight + this.$el.scrollTop !== this.$el.scrollHeight) return

        const curY = event.changedTouches[0].clientY
        const diff = curY - this.y
        const isChange = Math.abs(diff) > 10
        const up = diff < 0

        if (!isChange) return
        if (up) return this.next()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center 0;
    background-size: cover;
    overflow-y: auto;

    &.teacher {
      background-image: url("@/assets/teacher/main.jpg");
    }

    &.student {
      background-image: url("@/assets/student/main.jpg");
    }

    &.new-student {
      background-image: url("@/assets/new-student/main.jpg");
    }

    & > .logo {
      height: 36px;
      margin: 10px 20px 0 auto;
    }

    & > .main {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
    }

    & > .btn-next {
      position: relative;
      align-self: center;
      height: 20px;
      margin: 20px 0 40px 0;
      animation: bounce .6s ease-in-out infinite;
      flex-shrink: 0;
    }
  }

  @keyframes bounce {
    0% { top: 0 }
    50% { top: 5px }
    100% { top: 0 }
  }
</style>
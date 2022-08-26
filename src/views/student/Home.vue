<template>
  <Container :show-logo="false" @next="next">
    <img class="logo" src="@/assets/common/home-logo.png" />
    <img class="title" src="@/assets/student/home-header.png" />
    <div class="btn-start" @click="next">点击开启</div>
    <p v-if="$userInfo.years" class="text">我和南师大的{{ $userInfo.years }}年时光</p>
  </Container>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {}
    },
    methods: {
      next() {
        this.$router.push('/student/history')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //.container.slide-enter-to {
  //  transition-duration: 0s;
  //}

  .logo {
    margin-top: 30px;
    height: 100px;
  }

  .title {
    margin-top: 30px;
    height: 150px;
  }

  .btn-start {
    position: relative;
    margin-top: 110px;
    font-size: 18px;
    color: #f1cf7a;

    &::before {
      position: absolute;
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
      content: ''
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 8px solid #f1cf7a;
    }

    &::after {
      position: absolute;
      right: -15px;
      top: 50%;
      transform: translateY(-50%);
      content: ''
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 8px solid #f1cf7a;
    }
  }

  p.text {
    margin-top: 8px;
    color: #f1d799;
    font-size: 14px;
  }
</style>
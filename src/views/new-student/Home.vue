<template>
  <Container :show-logo="false" @next="next">
    <img class="logo" src="@/assets/new-student/home-logo.png" />
    <img class="title" src="@/assets/new-student/home-header.png" />
    <div class="btn-start" @click="next">点击开启</div>
    <p v-if="$userInfo.years" class="text">我和南师大的{{ $userInfo.years }}年时光</p>
    <img class="home-footer" src="@/assets/new-student/home-footer.png" />
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
        this.$router.push('/new-student/history')
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
    margin-top: 30px;
    font-size: 18px;
    color: #d1302a;

    &::before {
      position: absolute;
      left: -15px;
      top: 8px;
      content: ''
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 8px solid #d1302a;
    }

    &::after {
      position: absolute;
      right: -15px;
      top: 8px;
      content: ''
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 8px solid #d1302a;
    }
  }

  p.text {
    margin-top: 10px;
    color: #d1302a;
    font-size: 14px;
  }

  .home-footer {
    margin-top: 30px;
    width: 80%;
  }
</style>
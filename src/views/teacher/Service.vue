<template>
  <Container to="/teacher/read">
    <div class="main-box">
      <img class="img-header" src="@/assets/teacher/education-header.png" />
      <p class="highlight">{{ $userInfo.chineseEra }}年</p>
      <p>是您在南师大教书育人的开始</p>
      <p>满腔热情，无微不至</p>
      <p>近年来</p>
      <p>您已累计为全校<span class="highlight">{{$userInfo.sszs }}</span>师生</p>
      <p >
        提供服务
      </p>
      <img class="img-footer" src="@/assets/teacher/service-footer.jpg" />
    </div>
  </Container>
</template>

<script>
  export default {
    data() {
      return {}
    },
    beforeRouteEnter(to, from, next) {
      if (!window.$userInfo.chineseEra || !window.$userInfo.fwbmsl || !window.$userInfo.sszs) {
        next('/teacher/read')
      }
      else {
        next()
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
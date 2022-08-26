<template>
  <Container :to="to">
    <div class="main-box">
      <img class="img-header" src="@/assets/teacher/distance-header.png" />
      <p>您怀着梦想与憧憬</p>
      <p class="highlight">从{{ $userInfo.jg }}</p>
      <p>跨越</p>
      <p class="highlight">{{ $userInfo.distance }}公里</p>
      <p>与南师大相拥</p>
      <img class="img-footer" src="@/assets/teacher/distance-footer.jpg" />
    </div>
  </Container>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      to() {
        return this.$userInfo.jslb === '1' ? '/teacher/education' : '/teacher/service'
      }
    },
    beforeRouteEnter(to, from, next) {
      if (!window.$userInfo.jg || !window.$userInfo.distance) {
        next(window.$userInfo.jslb === '1' ? '/teacher/education' : '/teacher/service')
      }
      else {
        next()
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
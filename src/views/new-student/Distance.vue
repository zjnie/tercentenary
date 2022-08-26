<template>
  <Container to="/new-student/photo">
    <div class="main-box">
      <img class="img-header" src="@/assets/new-student/distance-header.png" />
      <p>您怀着梦想与憧憬</p>
      <p class="highlight">从{{ $userInfo.jg }}</p>
      <p>跨越</p>
      <p class="highlight">{{ $userInfo.distance }}公里</p>
      <p>与南师大相拥</p>
      <img class="img-footer" src="@/assets/new-student/distance-footer.jpg" />
    </div>
  </Container>
</template>

<script>
  export default {
    data() {
      return {}
    },
    beforeRouteEnter(to, from, next) {
      if (!window.$userInfo.jg || !window.$userInfo.distance) {
        next('/new-student/photo')
      }
      else {
        next()
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
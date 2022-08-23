<template>
  <Container to="/student/study">
    <div class="main-box">
      <img class="img-header" src="@/assets/student/distance-header.png" />
      <p>您怀着梦想与憧憬</p>
      <p class="highlight">从{{ $userInfo.jg }}</p>
      <p>跨越</p>
      <p class="highlight">{{ $userInfo.distance }}公里</p>
      <p>与南师大相拥</p>
      <img class="img-footer" src="@/assets/student/distance-footer.jpg" />
    </div>
  </Container>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created() {
      if (!this.$userInfo.jg || !this.$userInfo.distance) {
        this.$router.replace('/student/study')
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
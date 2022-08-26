<template>
  <Container to="/teacher/photo">
    <div class="main-box">
      <img class="img-header" src="@/assets/teacher/food-header.png" />
      <p>看起来</p>
      <p class="highlight">{{ $userInfo.cqctdk }}</p>
      <p>很符合你的口味</p>
      <p>除了诗和远方</p>
      <p>物质食粮也能治愈努力生活的自己</p>
      <img class="img-footer" src="@/assets/teacher/food-footer.jpg" />
    </div>
  </Container>
</template>

<script>
  export default {
    data() {
      return {}
    },
    beforeRouteEnter(to, from, next) {
      if (!window.$userInfo.cqctdk) {
        next('/teacher/photo')
      }
      else {
        next()
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
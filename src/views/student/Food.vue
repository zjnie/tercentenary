<template>
  <Container to="/student/photo">
    <div class="main-box">
      <img class="img-header" src="@/assets/student/food-header.png" />
      <p>看起来</p>
      <p class="highlight">{{ $userInfo.cqctdk }}</p>
      <p>很符合你的口味</p>
      <p>努力干饭</p>
      <p>是你热爱生活的体现</p>
      <img class="img-footer" src="@/assets/student/read-footer.jpg" />
    </div>
  </Container>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
</style>
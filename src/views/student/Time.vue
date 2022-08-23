<template>
  <Container to="/student/distance">
    <div class="main-box">
      <img class="img-header" src="@/assets/student/time-header.png" />
      <p class="highlight">{{ $userInfo.rxny }}</p>
      <p>在这个特殊的一天</p>
      <p>您与南师大相识</p>
      <p>截至今日</p>
      <p>您已与南师大共同携手</p>
      <p class="highlight">{{ $userInfo.days }}天</p>
      <img class="img-footer" src="@/assets/student/time-footer.jpg" />
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
<template>
  <Container to="/new-student/distance">
    <div class="main-box">
      <img class="img-header" src="@/assets/new-student/time-header.png" />
      <p class="highlight">{{ $userInfo.rxny }}</p>
      <p>在这个特殊的一天</p>
      <p>您与南师大相识</p>
      <p>继往开来</p>
      <p>您是2022届中<span class="highlight">{{ $userInfo.yxmc }}</span>中一员</p>
      <img class="img-footer" src="@/assets/new-student/time-footer.jpg" />
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
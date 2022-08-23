<template>
  <Container to="/student/read">
    <div class="main-box">
      <img class="img-header" src="@/assets/student/education-header.png" />
      <p>你的足迹遍布</p>
      <p class="highlight">{{ $userInfo.xksl }}间教室</p>
      <p class="highlight">{{ $userInfo.skjsrs }}位老师</p>
      <p>陪伴你在知识的海洋里</p>
      <p>乘风破浪</p>
      <img class="img-footer" src="@/assets/student/study-footer.jpg" />
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
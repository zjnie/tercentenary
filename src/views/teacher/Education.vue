<template>
  <Container to="/teacher/read">
    <div class="main-box">
      <img class="img-header" src="@/assets/teacher/education-header.png" />
      <p class="highlight">{{ $userInfo.chineseEra }}</p>
      <p>是您在南师大教书育人的开始</p>
      <p>三尺讲台，四季耕耘</p>
      <p>截至目前</p>
      <p>您已为社会培养和输出</p>
      <p class="highlight">{{ $userInfo.skrs }}名人才</p>
      <img class="img-footer" src="@/assets/teacher/education-footer.jpg" />
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
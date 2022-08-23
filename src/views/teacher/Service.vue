<template>
  <Container to="/teacher/read">
    <div class="main-box">
      <img class="img-header" src="@/assets/teacher/education-header.png" />
      <p class="highlight">{{ $userInfo.chineseEra }}</p>
      <p>是您在南师大教书育人的开始</p>
      <p>满腔热情，无微不至</p>
      <p>截至目前</p>
      <p>您已累计服务南师大</p>
      <p class="highlight">
        <span>{{ $userInfo.fwbmsl }}部门</span>
        <span style="margin-left: 30px">{{ $userInfo.sszs }}师生</span>
      </p>
      <img class="img-footer" src="@/assets/teacher/service-footer.jpg" />
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
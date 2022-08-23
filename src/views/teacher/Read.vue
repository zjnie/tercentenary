<template>
  <Container to="/teacher/food">
    <div class="main-box">
      <img class="img-header" src="@/assets/teacher/read-header.png" />
      <p class="highlight">{{ $userInfo.scjyrq }}</p>
      <p>你开启了图书馆阅读之旅</p>
      <p>图书馆留下了你<span class="highlight">{{ $userInfo.jgcs }}次</span>阅读足迹</p>
      <p>借阅书籍总数为<span class="highlight">{{ $userInfo.jysl }}本</span></p>
      <p>相信宏儒硕学、博览古今的你</p>
      <p>将以优质的教育理论培养更多新生代学员</p>
      <img class="img-footer" src="@/assets/teacher/read-footer.jpg" />
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
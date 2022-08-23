<template>
  <Container to="/student/food">
    <div class="main-box">
      <img class="img-header" src="@/assets/student/read-header.png" />
      <p class="highlight">{{ $userInfo.scjyrq }}</p>
      <p>你开启了图书馆阅读之旅</p>
      <p>图书馆留下了你<span class="highlight">{{ $userInfo.jgcs || 0 }}次</span>阅读足迹</p>
      <p>借阅书籍总数为<span class="highlight">{{ $userInfo.jysl || 0 }}本</span></p>
      <p>希望你可以坚持拥抱阅读</p>
      <p>追着梦想，让努力奋斗成为你的亮丽底色</p>
      <img class="img-footer" src="@/assets/student/read-footer.jpg" />
    </div>
  </Container>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created() {
      if (!this.$userInfo.scjyrq) {
        this.$router.replace('/student/food')
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
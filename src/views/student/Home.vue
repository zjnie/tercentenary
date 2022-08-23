<template>
  <Container :show-logo="false" @next="next">
    <img class="logo" src="@/assets/common/home-logo.png" />
    <img class="title" src="@/assets/student/home-header.png" />
    <div class="btn-start" @click="next">点击开启</div>
    <p class="text">我和南师大的10年时光</p>
<!--    <div v-if="$userInfo.editable" class="auth">-->
<!--      <span-->
<!--        class="checkbox"-->
<!--        :class="{ 'is-checked': isChecked }"-->
<!--        @click="isChecked = !isChecked"-->
<!--      />-->
<!--      <span class="text">：点击同意授权教务/研究生数据，数据来源于教务/研究生系统，统计周期截止至2022年9月10日</span>-->
<!--    </div>-->
  </Container>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        // isChecked: !this.$userInfo.editable
      }
    },
    methods: {
      next() {
        // if (!this.isChecked) {
        //   return this.$toast.show('请先勾选同意授权')
        // }

        this.$router.push('/student/history')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container.slide-enter-to {
    transition-duration: 0s;
  }

  .logo {
    margin-top: 30px;
    height: 100px;
  }

  .title {
    margin-top: 30px;
    height: 150px;
  }

  .btn-start {
    position: relative;
    margin-top: 110px;
    font-size: 18px;
    color: #f1cf7a;

    &::before {
      position: absolute;
      left: -15px;
      top: 8px;
      content: ''
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 8px solid #f1cf7a;
    }

    &::after {
      position: absolute;
      right: -15px;
      top: 8px;
      content: ''
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 8px solid #f1cf7a;
    }
  }

  p.text {
    margin-top: 8px;
    color: #f1d799;
    font-size: 14px;
  }

  .auth {
    margin-top: 100px;
    white-space: nowrap;
    transform: scale(0.8);

    .checkbox {
      position: relative;
      display: inline-block;
      width: 12px;
      height: 12px;
      vertical-align: -1px;
      margin-right: 6px;
      border: 1px solid #d1302a;
      border-radius: 2px;
      transform: scale(1.2);
    }

    .is-checked {
      background-color: #d1302a;
      border-color: #d1302a;
    }

    .is-checked::after {
      content: '';
      border: 1px solid #fff;
      border-left: 0;
      border-top: 0;
      height: 7px;
      left: 3px;
      position: absolute;
      transform: rotate(45deg);
      width: 3px;
      transition: transform .15s ease-in .05s;
      transform-origin: center;
    }

    .text {
      color: #d1302a;
      opacity: .6;
    }
  }
</style>
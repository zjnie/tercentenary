<template>
  <Container to="/student/time">
    <div class="main-box">
      <img class="img-header" src="@/assets/student/history-header.png" />
      <div
        v-for="item in list"
        :key="item"
        class="item">
        {{ item }}
      </div>
      <div class="item" @click="openMore">
        更多回溯
        <i class="arrow"></i>
        <i class="arrow"></i>
      </div>
    </div>
  </Container>
</template>

<script>
  export default {
    name: 'History',
    data() {
      return {
        list: [
          '创办三江师范学堂',
          '探索中外教习“互换知识”的先河',
          '首创图画手工科、体育专修科、教育专修科',
          '创建技能学科',
          '推行选科制',
          '从“教授法”到“教学法”',
          '建立完善的校务管理制度',
          '首创男女同校',
          '率先开办暑期学校',
          '中国现代美术教育重镇',
          '中国幼儿教育的摇篮',
          '金陵女子大学的素质教育',
          '战火中的妇女儿童避难所',
          '组建南京师范学院',
          '改办南京师范大学',
          '进入国家“211工程”行列',
          '建成仙林新校区',
          '百年华诞开创学校事业发展新局面'
        ]
      }
    },
    methods: {
      openMore() {
        window.location.href = 'http://120.njnu.edu.cn/xszl/lshs.htm'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .main-box {
    padding: 20px 0;

    &::after {
      position: absolute;
      top: 80px;
      left: calc(50% - 1px);
      bottom: 20px;
      content: '';
      border-left: 2px solid #da3923;
    }

    .img-header {
      width: calc(100% - 40px);
    }
  }

  .item {
    position: relative;
    color: #be352c;
    font-size: 12px;
    width: 50%;
    line-height: 18px;

    &:nth-child(even) {
      margin-left: 50%;
      padding: 0 2px 0 10px;
      text-align: left;

      &::before {
        position: absolute;
        top: 4px;
        left: -5px;
        content: '';
        width: 6px;
        height: 6px;
        background: #f5a273;
        border: 2px solid rgba(247, 225, 164, .6);
        border-radius: 50%;
        z-index: 1;
      }
    }

    &:nth-child(odd) {
      margin-right: 50%;
      text-align: right;
      padding: 0 10px 0 2px;

      &::after {
        position: absolute;
        top: 4px;
        right: -5px;
        content: '';
        width: 6px;
        height: 6px;
        background: #f5a273;
        border: 2px solid rgba(247, 225, 164, .6);
        border-radius: 50%;
        z-index: 1;
      }
    }

    .arrow {
      display: inline-block;
      content: ''
      margin-left: 2px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-right: 6px solid #be352c;
      vertical-align: -1px;
    }
  }

</style>
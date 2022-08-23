<template>
  <Container :to="to">
    <div class="main-box">
      <div class="photo-frame">
        <img class="frame" :src="frameImage"/>
        <img
          v-if="phoneImage"
          class="phone"
          :style="style"
          :src="phoneImage"
          @error="phoneImage = ''"
        />
      </div>
      <div v-if="$userInfo.editable" class="footer">
        <span class="btn btn-select" @click="onSelect">重选相框</span>
        <span class="btn btn-upload">
        <h5-cropper
          :option="option"
          class="btn-upload-input"
          @getFile="getFile"
        />
        上传照片
      </span>
      </div>
    </div>
  </Container>
</template>

<script>
  import axios  from 'axios'
  import H5Cropper  from 'vue-cropper-h5'

  const frames = [
    { image: require('@/assets/teacher/photo-frame-1.png'), padding: '46px 20px 85px 20px' },
    { image: require('@/assets/teacher/photo-frame-2.png'), padding: '83px 20px 35px 20px' },
    { image: require('@/assets/teacher/photo-frame-3.png'), padding: '50px 20px 70px 20px' },
    { image: require('@/assets/teacher/photo-frame-4.png'), padding: '50px 22px 70px 20px' }
  ]

  export default {
    components: {
      H5Cropper
    },
    data() {
      return {
        frameIndex: this.$userInfo.xkId || 0,
        phoneImage: `/rsfw/sys/emapcomponent/file/getFileByToken/nsxq-${ this.$userInfo.id }.do`,
        visible: false,
        option: {
          fixed: false,
          autoCropWidth: 240,
          autoCropHeight: 300
        }
      }
    },
    computed: {
      frameImage() {
        return frames[this.frameIndex].image
      },
      style() {
        return frames[this.frameIndex]
      },
      to() {
        const path = this.$route.path

        if (/^\/teacher\//.test(path)) return '/teacher/end'
        if (/^\/student\//.test(path)) return '/student/end'
        if (/^\/new-student\//.test(path)) return '/new-student/end'
      }
    },
    methods: {
      onSelect() {
        const frameIndex = [1, 2, 3, 0][this.frameIndex]
        axios.get('/rsfw/sys/njsfdxxqydd/jszt/saveXk.do', {
          params: {
            xkId: frameIndex
          }
        }).then(res => {
          if (res.data.code === 0) {
            this.frameIndex = frameIndex
          }
        })
      },
      getFile(file) {
        const formData = new FormData()
        formData.append('fileUpload0', file)

        axios.post('/rsfw/sys/njsfdxxqydd/upload/uploadZp.do', formData).then(res => {
          if (res.data.code === 0) {
            this.phoneImage = `/rsfw/sys/emapcomponent/file/getFileByToken/nsxq-${ this.$userInfo.id }.do?_=${ Date.now() }`
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .main-box {
    padding-bottom: 20px;
  }

  .photo-frame {
    position: relative;
  }

  .frame {
    position: relative;
    width: 100%;
    z-index: 1;
  }

  .phone {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .footer {
    margin-top: 16px;
  }

  .btn {
    display: inline-block;
    padding: 6px 24px;
    color: #f1d798;
    background: linear-gradient(to right, #c53c2f, #df614c)
    border-radius: 15px;
  }

  .btn-upload {
    position: relative;
    margin-left: 32px;

    .btn-upload-input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  >>> .btndiv {
    position: fixed;
    width: 100%;
    bottom: 10px;
  }
</style>
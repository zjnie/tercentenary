const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '^/': {
        ws: false,
        target: 'https://ampdx2.wisedu.com',
        changeOrigin: true
      }
    }
  }
})

const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, 'src', 'assets', 'styles', 'variables.less'),
        // 公共的 less 混入样式
        path.join(__dirname, 'src', 'assets', 'styles', 'mixin.less')
      ]
    }
  }
})

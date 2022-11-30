// webpack.dev.js
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// 合并公共配置，并添加开发环境配置
module.exports = merge(baseConfig, {
  mode: 'development', // 开发模式，不会压缩最终代码
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000, // 服务端口号
    compress: false, // gzip压缩，开发环境不开启，提升速度
    // 解决路由跳转404问题
    historyApiFallback: true,
    hot: true,
    static: { //托管静态资源文件
      directory: path.join(__dirname, "../public"),
    },
    client: {
      logging: 'warn', // warn以上的信息，才会打印
      overlay: true // 当出现编译错误或警告时，在浏览器中显示全屏覆盖
    },
    // 解决路由跳转404问题
    historyApiFallback: true
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    // 开启react模块热替换插件
    new ReactRefreshWebpackPlugin(),
  ]
})
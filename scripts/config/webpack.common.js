const {resolve} = require('path')
const {PROJECT_PATH, PROJECT_NAME} = require("../constant");
module.exports = {
  entry: {
    // __dirname 当前文件在电脑系统中的绝对路径 /Users/apple/Desktop/projects/creat-my-webpack/scripts/config
    // app: path.resolve(__dirname, '../../src/app.js'),
    app: resolve(PROJECT_PATH, 'src/app.js') // 常量代替
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    // path: path.resolve(__dirname, '../../dist'),
    path: resolve(PROJECT_PATH, 'dist')
  },
}

const {override,fixBabelImports,addLessLoader} = require('customize-cra')
const theme = require('./theme')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',//移动端什么配置文件都不用改 只需要改成antd-mobile即可 antd牛逼
    libraryDirectory: 'es',
    //style: 'css',
    style: true
   }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme,
  }),
)
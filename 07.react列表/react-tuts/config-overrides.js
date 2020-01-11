/*
 * @Author: huyihui
 * @Date: 2020-01-11 13:27:50
 * @LastEditTime : 2020-01-11 15:57:38
 * @LastEditors  : Please set LastEditors
 * @Description: 基于customize-cra 和react-app-rewired编辑配置文件
 * @FilePath: \07.react列表\react-tuts\config-overrides.js
 */
//从customize-cra引入一些相关的方法
const { override,addLessLoader,fixBabelImports} = require('customize-cra')
const theme = require('./lessVars')
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
    }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
    
   
)
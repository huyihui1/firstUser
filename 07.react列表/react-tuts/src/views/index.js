/*
 * @Author: your name
 * @Date: 2020-01-11 21:57:12
 * @LastEditTime : 2020-01-12 16:23:13
 * @LastEditors  : Please set LastEditors
 * @Description: 导出模块
 * @FilePath: \07.react列表\react-tuts\views\index.js
 */
//import loadable from 'react-loadable'
/*下面注释的就是建议的loadable的原理  */
 import loadable from './loadable'
import {Loading} from '../components'
// import Dashboard from './Dashboard'
// import Login from "./Login";
// import ArticleList from './Article'
// import ArticleEdit from './Article/Edit'
// import NotFound from './NotFound'
// import Settings from './Settings'

/* 下面是懒加载 */
const Dashboard = loadable({
    loader: ()=> import ('./Dashboard'),
    loading: Loading
})
const NotFound = loadable({
    loader: ()=> import ('./NotFound'),
    loading: Loading
})
const Settings = loadable({
    loader: ()=> import ('./Settings'),
    loading: Loading
})
const Login = loadable({
    loader: ()=> import ('./Login'),
    loading: Loading
})

const ArticleList = loadable({
    loader: ()=> import ('./Article'),
    loading: Loading
})
const ArticleEdit = loadable({
    loader: ()=> import ('./Article/Edit'),
    loading: Loading
})
export {
    Loading,
    Dashboard,
    Login,
    NotFound,
    Settings,
    ArticleList,
    ArticleEdit
}
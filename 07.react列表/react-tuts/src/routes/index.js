/*
 * @Author: your name
 * @Date: 2020-01-11 22:11:01
 * @LastEditTime : 2020-01-12 18:25:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \07.react列表\react-tuts\routes\index.js
 */

import {
    Dashboard,
    Login,
    NotFound,
    Settings,
    ArticleList,
    ArticleEdit
}from '../views'
export const mainRouter = [{
    pathname: '/login',
    component:Login
},
{
    pathname: '/404',
    component:NotFound
},
{
    pathname: '/article',
    component:Login
}
]
export const adminRouter =[{
    pathname:'/admin/dashboard',
    component: Dashboard,
    title: '仪表盘',
    isNav: true,
    icon:'dashboard'
},{
    pathname:'/admin/article',
    component: ArticleList,
    exact: true,
    title: '文章管理',
    isNav: true,
    icon: 'ordered-list'
    // children:
},{
    pathname:'/admin/article/edit/:id',
    component: ArticleEdit
},{
    pathname:'/admin/settings',
    component: Settings,
    title: '设置',
    isNav: true,
    icon: 'setting'
}]
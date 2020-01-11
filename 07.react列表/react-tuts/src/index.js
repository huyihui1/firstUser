/*
 * @Author: your name
 * @Date: 2020-01-11 13:23:37
 * @LastEditTime : 2020-01-12 01:25:32
 * @LastEditors  : Please set LastEditors
 * @Description: 项目最开始的index
 * @FilePath: \07.react列表\react-tuts\src\index.js
 */
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import {HashRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import {mainRouter} from './routes'
render(
    <Router>
        <Switch>
            <Route path='/admin' render ={(routerProps)=>{
                //todo 权限需要登陆才能访问admin
                return <App {...routerProps}/>
            }}></Route>
            {
                mainRouter.map(route =>{
                    return <Route key={route.pathname} path={route.pathname} component={route.component}></Route>
                })
            }
        <Redirect to="/admin"  from= "/" exact/>
        <Redirect to='/404' />
        </Switch>
        
       
       
    </Router>,
    document.querySelector('#root')
)
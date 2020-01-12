/*
 * @Author: your name
 * @Date: 2020-01-11 13:23:53
 * @LastEditTime : 2020-01-12 17:57:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit'
 * @FilePath: \07.react列表\react-tuts\src\App.js
 */
import React, { Component } from 'react'
import {adminRouter} from './routes'
import './index.less'
import { Route,Switch,Redirect } from 'react-router-dom'
import { Frame } from './components'
const menus = adminRouter.filter( route => route.isNav === true)
 class App extends Component {
 
    render() {
        return (
           <Frame menus={menus}>
               <Switch>
              {
                  adminRouter.map( route =>{
                      return (<Route 
                        key={route.pathname} 
                        path={route.pathname} 
                        exact={route.exact}
                        render ={ (routeProps)=>{
                        return <route.component {...routeProps}/>
                      }}></Route>)
                  })
              }
            <Redirect
            //  to={adminRouter[0].pathname}
            to="/admin/dashboard"
              from="/admin" exact></Redirect>
            <Redirect to="/404"  ></Redirect>
              </Switch>
           </Frame>
        )
    }
}
export default App

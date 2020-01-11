import React, { Component } from 'react'
import {Route,NavLink as Link,Redirect,Switch, Router} from 'react-router-dom'
import {
    Users,
    Home,
    Article,
    ArticleDetail,
    NotFound
} from './views'
import Art from './views/Article/Art'
export default class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    <li><Link activeClassName="sss" to="/home">首页</Link></li>
                    <li><Link to="/article">文章</Link></li>
                    <li><Link to="/users">用户</Link></li>    
                    
                </ul>    
                <Switch>
                <Route component ={Home} path="/home"/>
                <Route component ={Article} path="/article" exact/>
                <Route component={Art} path="/home/x"></Route>
                <Route component={ArticleDetail} path="/article/:id"></Route>
                <Route component ={Users} path="/users"/>
                <Route component ={NotFound} path="/404" exact/>
                <Redirect to="/home/x" from="/" exact></Redirect>
                <Redirect to="/404" ></Redirect>
                {/* Redirect本质上还是一个Link exact代表精准匹配Redirect中的exact只是精准匹配from里的路由
                 如果路径是/home/xxxx小心包含关系 /home则不会*/}
                </Switch>
            </div>
        )
    }
}



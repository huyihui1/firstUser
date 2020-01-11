import React, { Component } from 'react'
import {Link,Route, } from 'react-router-dom'
import ArticleDetail from './ArticleDetail'

export default class index extends Component {
    render() {
        return (
            <div>
                <Link to="/article/1">文章1</Link>
                <Link to="/article/2">文章2</Link>
                <Link to="/article/5">文章3</Link>
               {/* <Route component={ArticleDetail} path="/article/:id"></Route>  */}
            </div>
        )
    }
}

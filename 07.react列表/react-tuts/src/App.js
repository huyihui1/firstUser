/*
 * @Author: your name
 * @Date: 2020-01-11 13:23:53
 * @LastEditTime : 2020-01-11 16:10:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit'
 * @FilePath: \07.react列表\react-tuts\src\App.js
 */
import React, { Component } from 'react'
import {Button} from 'antd'
import './index.less'
const testHOC = (WrappedComponent) =>{
    return class HOCComponent extends Component{
        render(){
            return (
                <>
                <WrappedComponent />
                <div>这是高阶组件里的信息</div>
                </>
            )
        }
    }
}
@testHOC
 class App extends Component {
 
    render() {
        return (
            <div>
              App
              <Button type="primary">测试按钮</Button>
            </div>
        )
    }
}
export default App
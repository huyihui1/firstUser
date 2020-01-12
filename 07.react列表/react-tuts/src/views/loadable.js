/*
 * @Author: your name
 * @Date: 2020-01-12 12:00:59
 * @LastEditTime : 2020-01-12 16:26:35
 * @LastEditors  : Please set LastEditors
 * @Description: 这个文件只是解释react-loadbale原理用。可以无缝切换
 * @FilePath: \07.react列表\react-router\src\views\loadable.js
 */
import React, { Component } from 'react'
const Loadable = ({
    loader,
    loading:Loading
}) =>{
    
    return class LoadableComponent extends Component {
        state = {
            LoadedComponent: null,

        }
        componentDidMount(){
            // loader: ()=> import ('./Dashboard'),
            loader()
            .then( resp=>{
                this.setState({
                    LoadedComponent: resp.default
                })
            })
        }
        render() {
            const {
                LoadedComponent
            } = this.state
            return (
                LoadedComponent
                ?
                < LoadedComponent/>
                :
               <Loading/>
        
            )
        }
    }
}
export default Loadable


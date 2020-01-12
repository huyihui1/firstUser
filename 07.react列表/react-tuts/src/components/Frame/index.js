/*
 * @Author: your name
 * @Date: 2020-01-12 16:28:13
 * @LastEditTime : 2020-01-12 19:54:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \07.react列表\react-tuts\src\views\Frame\index.js
 */
import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';

import logo from './logo.png'
import './less/frame.less'
import { withRouter} from 'react-router-dom'
const { Header, Content, Sider } = Layout;

 class Frame extends Component {
  onMenuClick = ({key}) =>{
   this.props.history.push(key)
    
  }
  render() {
      return (
          <Layout style={{minHeight:"100%"}}>
          <Header className="headern fz-headern" >
            <div className="fz-logo" >
                <img src={logo} alt="服装中后台"></img>
            </div>
            
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                selectedKeys={[this.props.location.pathname]}
                // defaultOpenKeys={['sub1']}
                onClick={this.onMenuClick}
                style={{ height: '100%', borderRight: 0 }}
              >
                {
                  this.props.menus.map( item =>{
                  return <Menu.Item key={item.pathname}>
                    <Icon type={item.icon}></Icon>
                    {item.title}
                    
                    </Menu.Item>
                  })
                }    
              
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
  
      );
  }
}
export default withRouter(Frame)

import React, { Component } from 'react'
import {Button,
    Spin,
    Pagination,
    Badge
} from 'antd'
export default class App extends Component {
    render() {
        return (
            <div>
               App
               <Button loading type="primary">测试按钮</Button>
               <Spin>
                   <div>
                       losdaa 
                   </div>
               </Spin>
               <Pagination size="small" total={500} showSizeChanger showQuickJumper />
               <Badge 
               count={55}
               overflowCount={50}
               >
                   <span>Lorem</span>
               </Badge>
            </div>
        )
    }
}

import React, { Component } from 'react'
import BlogItem from './BlogItems'
import {connect} from 'react-redux'
import {fetchBlogList} from '../../actions/blog'
//import {getPosts} from '../../services'
 class BlogList extends Component {
    componentDidMount(){
        this.props.fetchBlogList()
    }
    render() {
        const {
            list,
            isLoading,
        } = this.props
        console.log(this.props)
        return (
            isLoading
            ?<div>isLoading...</div>
            :
            <div>
                {
                   list.map(item =>{
                        return <BlogItem key={item.id} {...item}/>
                    })
                }
            </div>
        )
    }
}
const mapState = state =>({
    list: state.blog.list,
    isLoading: state.blog.isLoading
})
// export default connect(state =>({
//     list: state.blog.list,

// }))(BlogList)
export default connect(mapState,{fetchBlogList} )(BlogList)

import React, { Component } from 'react'

export default class ArticleDetail extends Component {
    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                文章详情
            </div>
        )
    }
}

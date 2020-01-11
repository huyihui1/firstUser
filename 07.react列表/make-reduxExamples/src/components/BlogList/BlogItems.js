import React, { Component } from 'react'

export default class BlogItems extends Component {
    render() {
        return (
            <ul>
              {this.props.title} 
            </ul>
        )
    }
}

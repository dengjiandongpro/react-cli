import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
        text: null
      }
    }
    load() {
      import('./common.js').then((module) => {
          this.setState({
            text: module.common()
          })
      })
    }
    render() {
      return (
        <div>
            welcome!!!
            <div>{this.state.text}</div>
            <button onClick={this.load.bind(this)}>懒加载组件</button>
        </div>
      )
    }
  }
  //counter中函数内的属性设置
 
export default Home
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {increaseAction, decreaseAction, asyncIncreaseAction} from '../action'

class Counter extends Component {
    render() {
      //定义里面的两个函数value，onIncreaseClick
      const { value, onIncreaseClick, onDecreaseClick, onAsyncIncreaseClick} = this.props
      return (
      <div>
        <p>使用redux增减计数以及react-thunk异步增加计数(2s后)</p>
        <p>{value}</p>
        <button onClick={onIncreaseClick} style={{marginRight: '10px'}}>Increase</button>
        <button onClick={onDecreaseClick} style={{marginRight: '10px'}}>Decrease</button>
        <button onClick={onAsyncIncreaseClick}>AsyncIncrease</button>
      </div>
      )
    }
  }
  //counter中函数内的属性设置
  Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
  }

  const mapStateToProps = state => ({
      value: state.count
    })

  const mapDispatchToProps = (dispatch) =>  ({
    onIncreaseClick: () => dispatch(increaseAction()),
    onDecreaseClick: () => dispatch(decreaseAction()),
    onAsyncIncreaseClick: () => dispatch(asyncIncreaseAction())
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Counter)
  
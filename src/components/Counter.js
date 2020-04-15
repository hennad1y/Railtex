import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { increment, decrement } from '../actions/counter'
import {Promise} from "bluebird"

const Counter = (props) => (
  <div>
    Counter: {props.count}
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  count: state.count,
})

const mapDispatchToProps = dispatch => ({
  increment: () => new Promise((resolve) => {
      setTimeout(() => {
          dispatch(increment())
          resolve()
      }, Math.random() * 1900 + 100)
  }),
  decrement: () => new Promise((resolve) => {
      setTimeout(() => {
          dispatch(decrement())
          resolve()
      }, Math.random() * 1900 + 100)
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

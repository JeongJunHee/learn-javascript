import React from 'react';
import { useAnother } from '../contexts/another';

const Counter = ({ number, increment }) => {
  return (
    <div style={{ 'margin-left' : '10px'}}>
      <h1>{number}</h1>
      <button className="btn btn-default" onClick={increment}>더하기</button>
    </div>
  )
}

export default useAnother(
  ({ state, actions }) => ({
    number : state.number,
    increment : actions.increment
  })
)(Counter);
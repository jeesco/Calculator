import React from 'react';
import '../styles/CleatButton.css'

export default function ClearButton(props) {
  return (
    <div onClick={props.handleClear} className='clear-button'>
      {props.children}
    </div>
  )
}
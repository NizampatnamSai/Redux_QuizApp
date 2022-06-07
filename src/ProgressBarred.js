import React from 'react'
import { useSelector } from 'react-redux'
import { Wrongvalue } from './features/counter/counterSlice'
import './ProgressBarred.css'

function ProgressBarred({name}) {

    const wrongvalue=useSelector(Wrongvalue)
    
  return (
    <div>
      {name} 
      <progress value={wrongvalue} max={4}/>
    </div>
  )
}

export default ProgressBarred

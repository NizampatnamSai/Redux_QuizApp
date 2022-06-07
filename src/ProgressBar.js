import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Rigthvalue } from './features/counter/counterSlice'
import './ProgressBar.css'


function ProgressBar({name}) {
  const rightvalue=useSelector(Rigthvalue)

  return (
    <div>
      {name}
      <progress value={rightvalue} max={4}/>
    </div>
  )
}

export default ProgressBar

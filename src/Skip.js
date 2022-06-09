import React from 'react'
import './Skip.css'

import { Rigthvalue } from './features/counter/counterSlice'
import { useSelector } from 'react-redux'
import { Ansredval } from './features/counter/counterSlice'
import { Totlascor } from './features/counter/counterSlice'
import { Corectval } from './features/counter/counterSlice'


function Skip() {

const rightvalue=useSelector(Rigthvalue)
const answered=useSelector(Ansredval)
const totalscore=useSelector(Totlascor)
const Corectans=useSelector(Corectval)

console.log(answered,totalscore,Corectans)


  return (
    <div className='skip_body'>
      {/* Skip page */}
     <section className='one'>
     <b>Questions answered </b> {answered}
     </section>

     <section className='one'>
     <b>Total Score </b> {totalscore}

     </section><section className='one'>
     <b>Total Right Answer's </b> {Corectans}
     </section>
      
    </div>
  )
}

export default Skip

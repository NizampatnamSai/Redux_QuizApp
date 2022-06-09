import React from 'react'
import {BrowserRouter as Router, Switch,Route, Link, Routes} from 'react-router-dom'
import AppCopy from './AppCopy'
import Skip from './Skip'


function App() {
  return (
    <div>

<Router>

<Routes>
        <Route path='/' element={<AppCopy/>}/>
        <Route path='/skip' element={<Skip/>}/>


</Routes></Router>
      
    </div>
  )
}

export default App

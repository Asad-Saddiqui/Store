import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import Signup from './Pages/Signup'
import Login from './Pages/Login';

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

    </>
  )
}

export default App
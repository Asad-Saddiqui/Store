import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import Signup from './Pages/Signup'
import Login from './Pages/Login';
import Test from './Dashboard/Test';
import MainLayout from './layout/Layout';



import { Routes, Route } from 'react-router-dom'
import Product from './Pages/Product';
import Provider from './store/Provide';


function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route path='/' element={<MainLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='product' element={<Product />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Provider>

    </>
  )
}

export default App
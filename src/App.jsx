import React from 'react'
import Navbar from './component/navbar/Navbar.jsx'
import Restaurant from './component/restaurant/Restaurant.jsx'
import Product from './component/producte/Product.jsx'
import { Route,Routes } from 'react-router-dom'


function App() {
  return (
  <>
  <Navbar/>
    <Routes>
      <Route path='/producte' element={<Product/>}/>
      <Route path='/restaurant' element={<Restaurant/>}/>
    </Routes>
  </>
  )
}

export default App
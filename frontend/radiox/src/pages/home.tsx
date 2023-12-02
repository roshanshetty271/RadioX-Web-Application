import React from 'react'
import Products from '../components/Home/Products/products'
import Stats from '../components/Home/Stats/stats'
import Footer from '../components/Home/Footer/footer'

function home() {
  return (
    <div>
    <Products/>
    <Stats/>
    <Footer/>
    </div>
  )
}

export default home
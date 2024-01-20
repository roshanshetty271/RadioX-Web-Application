import React from 'react'
import backg from "../../../images/hero.jpeg"
import "./checkout.css"
import PaymentDialog from '../PaymentDialog/paymentDialog'

function checkout() {
  return (
    <>
    <div className="checkout-container">
      <div className="overlay"></div>
      <img src={backg} alt="" />      
    </div>
    <PaymentDialog/>
    </>
  )
}

export default checkout
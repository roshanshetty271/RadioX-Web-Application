import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {loadStripe, StripeError} from '@stripe/stripe-js';
// import { fetchUsers } from '../features/users/usersSlice';
// import { RootState } from '../../../../store';
import './timeSlotList.css';

interface TimeSlotListProps {
  timeSlots: string[];
}

// interface Result{
//   error: StripeError;
// }

const TimeSlotList: React.FC<TimeSlotListProps> = ({ timeSlots }) => {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const navigate = useNavigate()

  // useEffect(async ()=> {
      
  //   const response = await axios.get("http://localhost:8000/appointment")

  // },[])



  const handleSelection = (index: number) => {
    setSelectedSlot(index);
  };

  const handleCheckout = async() => {
    // Navigate to a different route, replace '/checkout' with your desired route

    // const stripe = await loadStripe('pk_test_51OKSOIHp2pwGV5Uy5P0ueIMsXMPaHlALVmYjDOIfUUiCw5kd8YahZj3TIt8NgVRl02bKsOzXXdqCCRfOPduuQLfA00mCvsH65n');

    // const body = {
    //   appointment: " dfff"
    // }

    // const headers = {
    //   "Content-Type": "application/json"
    // }

    // const response = await fetch("http://localhost:8000/api/bills/create-payment",{
    //   method: "POST",
    //   headers: headers,
    //   body: JSON.stringify(body)
    // });

    // const session = await response.json()

    // const result:any = stripe?.redirectToCheckout({
    //   sessionId: session.id
    // })


    // if(result.error){
    //   console.log(result.error)
    // }

    navigate('/checkout');
  };

  return (
    <>
      <div className="time-slot-list-container">
        <ul className="time-slot-list">
          {timeSlots.map((timeSlot, index) => (
            <li
              key={index}
              className={`time-slot ${index === selectedSlot ? 'selected' : ''}`}
              onClick={() => handleSelection(index)}
            >
              {timeSlot}
            </li>
          ))}
        </ul>
      </div>
      <div className="checkout-btn-container">
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </>
  );
};

export default TimeSlotList;

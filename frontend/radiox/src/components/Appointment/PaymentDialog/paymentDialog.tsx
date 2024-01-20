import React, {useState} from 'react';
import "./paymentDialog.css";
import success from "../../../images/success.png";
import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';
import Snackbar from '../../Snackbar/Snackbar';
import { useNavigate } from 'react-router-dom';

function PaymentDialog() {
  const city = useSelector((state: RootState) => state.appointment.selectedCity);
  const doctor = useSelector((state: RootState) => state.appointment.selectedDoctor);
  const slot = useSelector((state: RootState) => state.appointment.selectedTimeSlot);

  const [openSnackbar, setOpenSnackbar] = useState(false)

  const navigate = useNavigate()

  console.log("city: " + city);
  console.log("doctor: " + doctor.name);

  const handleOpenSnackbar = (flag: boolean) => {
    setOpenSnackbar(flag)
  }

  return (
    <>
      <div className="paymentDialog show">
      <header>
        <img src={success} alt="Success Icon" />
        <p className="paymentDialog-title">Payment Successful!</p>
        <h1>$4000</h1>
        <div className="paymentDialog-info">
          <p>City</p>
          <p>{city}</p>
        </div>       
        <div className="paymentDialog-info">
          <p>Doctor Name</p>
          <p>{doctor.name}</p>
        </div>       
        <div className="paymentDialog-info">
          <p>Speciality</p>
          <p>{doctor.specialty}</p>
        </div> 
        <div className="paymentDialog-info">
          <p>Date</p>
          <p>12/13/2023</p>
        </div>       
        <div className="paymentDialog-info">
          <p>Time</p>
          <p>{slot}</p>
        </div>       
      </header>
      <div className="paymentDialog-btns">
      <button className="paymentDialog-btns email-receipt" onClick={() => handleOpenSnackbar(true)}>Email Receipt</button>
      <button className="paymentDialog-btns home" onClick={() => {navigate('/')}}>Home</button>

      </div>
      <p>Thank you for your purchase. Your payment was successful.</p>
    </div>
      <Snackbar open={openSnackbar}  handleOpenSnackbar = {handleOpenSnackbar} severity="success" message="Email sent Successfully!"/>
    </>
    
  );
}

export default PaymentDialog;

import { useState } from 'react';
import Calendar from 'react-calendar';
import logo from "../../../images/navlogo.jpeg"
// import 'react-calendar/dist/Calendar.css';
import CityButton from '../CityButton/cityButton';
import DoctorDropdown from '../DoctorDropdown/doctorDropdown'; 
import './appointCalendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


function AppointCalendar() {
  const [value, onChange] = useState<Value>(new Date());


  const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Brown', 'Dr. Williams'];
  
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
  
    const handleButtonClick = (city: string) => {
      setSelectedCity(city);
      // Add additional logic if needed on button click
    };



  return (
    <div className="appointment-calendar">
      <div className='react-calendar-container'>
        <div className="calendar-logo">
          <img src={logo} alt="" />
          <h1>RadioX</h1>
        </div>        
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="booking">
        <div>
          <h4>Location</h4>
          <div className='city-btn-grp'>
            <CityButton value="Boston" onClick={() => handleButtonClick('Boston')} isActive={selectedCity === 'Boston'} />
            <CityButton value="New York" onClick={() => handleButtonClick('New York')} isActive={selectedCity === 'New York'} />
            <CityButton value="Los Angeles" onClick={() => handleButtonClick('Los Angeles')} isActive={selectedCity === 'Los Angeles'}/>
          </div>
        </div>
        <div>
          <h4>Doctor</h4>
          <DoctorDropdown doctors={doctors} />
        </div> 
      </div>
    </div>
    
  );
}

export default AppointCalendar
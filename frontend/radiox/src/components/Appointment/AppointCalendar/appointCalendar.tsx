import { useState } from 'react';
import Calendar from 'react-calendar';
import logo from "../../../images/navlogo.jpeg"
// import 'react-calendar/dist/Calendar.css';
import CityButton from '../CityButton/cityButton';
import DoctorDropdown from '../DoctorDropdown/doctorDropdown'; 
import TimeSlotList from '../TimeSlotList/timeSlotList';
import './appointCalendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


function AppointCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  console.log(value)

  const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Brown', 'Dr. Williams'];

    const [selectedCity, setSelectedCity] = useState<string | null>(null);
  
    const handleButtonClick = (city: string) => {
      setSelectedCity(city);
      // Add additional logic if needed on button click
    };

    const timeSlots = [
      '09:00 AM',
      '09:30 AM',
      '10:00 AM',
      '10:30 AM',
      '11:00 AM',
      '11:30 AM',
      '12:00 PM',
      '12:30 PM',
      '01:00 PM',
      '01:30 PM',
      '02:00 PM',
      '02:30 PM',
      '03:00 PM',
      '03:30 PM',
      '04:00 PM',
      // ... (add more time slots as needed)
    ];

  return (
    <div className="appointment-parent">
      <div className="appointment-calendar">
        <div className='react-calendar-container'>
          <div className="calendar-logo">
            <img src={logo} alt="" />
            <h1>RadioX</h1>
          </div>        
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className="booking">
          <>
            <h4>Location</h4>
            <div className='city-btn-grp'>
              <CityButton value="Boston" onClick={() => handleButtonClick('Boston')} isActive={selectedCity === 'Boston'} />
              <CityButton value="New York" onClick={() => handleButtonClick('New York')} isActive={selectedCity === 'New York'} />
              <CityButton value="Washington" onClick={() => handleButtonClick('Washington')} isActive={selectedCity === 'Washington'}/>
            </div>
          </>
          <>
            <h4>Doctor</h4>
            <DoctorDropdown doctors={doctors} />
          </> 
          <TimeSlotList timeSlots={timeSlots}/>
        </div>
      </div>
    </div>
    
    
  );
}

export default AppointCalendar
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import logo from "../../../images/Radiox-logo.png";
import CityButton from '../CityButton/cityButton';
import DoctorDropdown from '../DoctorDropdown/doctorDropdown';
import TimeSlotList from '../TimeSlotList/timeSlotList';
import './appointCalendar.css';
import axios from 'axios';
import { AppDispatch, RootState } from '../../../app/store';
import { setSelectedCity } from '../../../app/slices/appointmentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSlots } from '../../../app/slices/slotAPISlice';
import Snackbar from '../../Snackbar/Snackbar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface Doctor {
  _id: string;
  name: string;
  specialty: string;
  timeSlots: string[];
}

interface Slots {
  _id: string;
  location: string;
  doctors: Doctor[];
}

const formatDate = (date: Date) => {
  return date.toLocaleString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });
};

function AppointCalendar() {
  const [date, setDate] = useState<Value>(new Date());
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [slots, setSlots] = useState<string[]>([]);
  const [city, setCity] = useState<string>("");

  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleOpenSnackbar = (flag: boolean) => {
    setOpenSnackbar(flag)
  }

  const dispatch = useDispatch<AppDispatch>();

  const timeSlot: Slots[] = useSelector((state: RootState) => state.slots.data.response);

  useEffect(() => {
    if (date instanceof Date) {
      const formattedDate = formatDate(date);
      console.log(formattedDate);
      dispatch(fetchSlots(`http://localhost:8000/appointSlots/slots?date=${formattedDate}`));
    }
  }, [date, dispatch]);

  const handleButtonClick = (city: string) => {
    setCity(city);
    dispatch(setSelectedCity(city));

    const selectedLocation = timeSlot.find(slot => slot.location === city);
    const doctors = selectedLocation?.doctors || [];
    setDoctors(doctors);
  };

  useEffect(() => {
    handleButtonClick(city);
  }, [city, timeSlot]);

  // useEffect(() => {
  //   handleOpenSnackbar(true)
  // }, [date])

  const onDoctorSelection = (doc: string) => {
    const selectedDoctor = doctors.find(doctor => doctor.name === doc);
    const doctorSlots = selectedDoctor?.timeSlots || [];
    setSlots(doctorSlots);
  };

  return (
    <>
      <div className="appointment-parent">
      <div className="appointment-calendar">
        <div className='react-calendar-container'>
          <div className="calendar-logo">
            <img src={logo} alt="" />
            <h1>RadioX</h1>
          </div>
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className="booking">
          <>
            <h4>Location</h4>
            <div className='city-btn-grp'>
              <CityButton value="Boston" onClick={() => handleButtonClick('Boston')} isActive={city === 'Boston'} />
              <CityButton value="New York" onClick={() => handleButtonClick('New York')} isActive={city === 'New York'} />
              <CityButton value="Washington" onClick={() => handleButtonClick('Washington')} isActive={city === 'Washington'} />
            </div>
          </>
          <>
            <h4>Doctor</h4>
            {doctors && <DoctorDropdown doctors={doctors} onDoctorSelection={onDoctorSelection} />}
          </>
          <TimeSlotList timeSlots={slots} />
        </div>
      </div>
    </div>
    <Snackbar open={openSnackbar}  handleOpenSnackbar = {handleOpenSnackbar} severity="warning" message="No Slots available for the date"/>    </>
    
  );
}

export default AppointCalendar;

import React, { useState } from 'react';
import "./doctorDropdown.css"
import { Doctor } from '../AppointCalendar/appointCalendar';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { setSelectedDoctor } from '../../../app/slices/appointmentSlice';


interface DoctorDropdownProps {
  doctors: Doctor[]; // Array of doctor names
  onDoctorSelection: Function
}

const DoctorDropdown: React.FC<DoctorDropdownProps> = ({ doctors,  onDoctorSelection}) => {
  const [doctor, setDoctor] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleDoctorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDoctor(event.target.value);
    onDoctorSelection(event.target.value)

    console.log("doc: "+ JSON.stringify(doctors.filter(doc => doc.name === event.target.value)))

    const doc = doctors.filter(doc => doc.name === event.target.value)

    dispatch(setSelectedDoctor(doc[0]))

    // You can perform additional actions when the doctor selection changes
  };

  return (
    <div>
      {/* <label htmlFor="doctorDropdown">Select a Doctor:</label> */}
      <select className="doctor-dropdown" id="doctorDropdown" value={doctor || ''} onChange={handleDoctorChange}>
        {/* <option value="" disabled>
          Dr. Smith
        </option> */}
        {doctors.map((doctor, index) => (
          <option className="doctor-dropdown-option" key={index} value={doctor.name}>
            {doctor.name} ~ {doctor.specialty}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DoctorDropdown;
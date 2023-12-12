import React, { useState } from 'react';
import "./doctorDropdown.css"


interface DoctorDropdownProps {
  doctors: string[]; // Array of doctor names
}

const DoctorDropdown: React.FC<DoctorDropdownProps> = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);

  const handleDoctorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDoctor(event.target.value);
    // You can perform additional actions when the doctor selection changes
  };

  return (
    <div>
      {/* <label htmlFor="doctorDropdown">Select a Doctor:</label> */}
      <select className="doctor-dropdown" id="doctorDropdown" value={selectedDoctor || ''} onChange={handleDoctorChange}>
        {/* <option value="" disabled>
          Dr. Smith
        </option> */}
        {doctors.map((doctor, index) => (
          <option key={index} value={doctor}>
            {doctor}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DoctorDropdown;
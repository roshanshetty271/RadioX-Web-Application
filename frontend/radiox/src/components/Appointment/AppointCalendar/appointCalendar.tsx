import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import logo from "../../../images/navlogo.jpeg";
import CityButton from '../CityButton/cityButton';
import DoctorDropdown from '../DoctorDropdown/doctorDropdown'; 
import TimeSlotList from '../TimeSlotList/timeSlotList';
import './appointCalendar.css';

// Define appointment slot interface
interface AppointmentSlot {
  id: number;
  time: string;
  isAvailable: boolean;
  doctor?: string;
  location?: string;
}

// Define date value type
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function AppointCalendar() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<AppointmentSlot[]>([]);
  const [showUnavailableMessage, setShowUnavailableMessage] = useState(false);
  const [selectedUnavailableSlot, setSelectedUnavailableSlot] = useState<string>("");

  // Sample doctors
  const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Brown', 'Dr. Williams'];

  // Sample time slots
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', 
    '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM',
  ];

  // Generate random unavailable slots for the selected date
  useEffect(() => {
    if (selectedDate) {
      // Reset existing slots
      const slots: AppointmentSlot[] = [];
      
      // Create slots with random availability
      timeSlots.forEach((time, index) => {
        // Random availability - 70% chance of being available
        const isAvailable = Math.random() > 0.3;
        
        slots.push({
          id: index + 1,
          time,
          isAvailable,
          doctor: !isAvailable ? doctors[Math.floor(Math.random() * doctors.length)] : undefined,
          location: !isAvailable ? 
            ['New York', 'Boston', 'Chicago', 'Los Angeles'][Math.floor(Math.random() * 4)] : 
            undefined
        });
      });
      
      setAvailableSlots(slots);
    }
  }, [selectedDate, selectedCity, selectedDoctor]);
  
    const handleButtonClick = (city: string) => {
      setSelectedCity(city);
  };

  const handleDoctorSelect = (doctor: string) => {
    setSelectedDoctor(doctor);
  };

  const handleCalendarChange = (value: Value) => {
    setSelectedDate(value);
  };

  const handleSlotClick = (slot: AppointmentSlot) => {
    if (!slot.isAvailable) {
      setSelectedUnavailableSlot(slot.time);
      setShowUnavailableMessage(true);
    }
  };

  const handleCloseMessage = () => {
    setShowUnavailableMessage(false);
  };

  // Get formatted date for display
  const getFormattedDate = () => {
    if (selectedDate instanceof Date) {
      return format(selectedDate, 'MMMM d, yyyy');
    }
    return 'Select a date';
  };

  // Convert the date to pass to TimeSlotList
  const getCurrentDate = (): Date | undefined => {
    if (selectedDate instanceof Date) {
      return selectedDate;
    }
    if (Array.isArray(selectedDate) && selectedDate[0] instanceof Date) {
      return selectedDate[0];
    }
    return undefined;
  };

  return (
    <div className="appointment-parent">
      <div className="appointment-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1>Schedule Your Appointment</h1>
        </div>
      </div>

      <div className="appointment-container">
        <div className="left-container">
          <div className="section-title">Select City</div>
          <div className="city-buttons">
            <CityButton city="New York" onClick={handleButtonClick} isSelected={selectedCity === 'New York'} />
            <CityButton city="Boston" onClick={handleButtonClick} isSelected={selectedCity === 'Boston'} />
            <CityButton city="Chicago" onClick={handleButtonClick} isSelected={selectedCity === 'Chicago'} />
            <CityButton city="Los Angeles" onClick={handleButtonClick} isSelected={selectedCity === 'Los Angeles'} />
          </div>        

          <div className="section-title">Select Doctor</div>
          <DoctorDropdown doctors={doctors} onSelect={handleDoctorSelect} />

          <div className="section-title">Select Time Slot</div>
          <TimeSlotList 
            timeSlots={timeSlots} 
            selectedDate={getCurrentDate()}
            selectedDoctor={selectedDoctor || undefined}
            selectedCity={selectedCity || undefined}
          />
        </div>
        
        <div className="right-container">
          <div className="calendar-header">
            <div className="section-title">Select Date</div>
            <div className="selected-date">{getFormattedDate()}</div>
          </div>
          <div className="calendar-container">
            <Calendar 
              onChange={handleCalendarChange} 
              value={selectedDate} 
              minDate={new Date()}
              className="modern-calendar"
            />
          </div>
          
          <div className="availability-legend">
            <div className="legend-item">
              <div className="legend-color available"></div>
              <span>Available</span>
            </div>
            <div className="legend-item">
              <div className="legend-color unavailable"></div>
              <span>Unavailable</span>
            </div>
          </div>
          
          <div className="day-schedule">
            <div className="section-title">Today's Schedule</div>
            <div className="time-slots-grid">
              {availableSlots.map(slot => (
                <div 
                  key={slot.id} 
                  className={`time-slot-item ${slot.isAvailable ? 'available' : 'unavailable'}`}
                  onClick={() => handleSlotClick(slot)}
                >
                  {slot.time}
                  {!slot.isAvailable && <span className="booked-indicator">•</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showUnavailableMessage && (
        <div className="appointment-details-modal">
          <div className="appointment-details-content">
            <h3>Time Slot Not Available</h3>
            <p>This time slot ({selectedUnavailableSlot}) is already booked.</p>
            <p>Please select a different time or date for your appointment.</p>
            <button onClick={handleCloseMessage}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointCalendar;
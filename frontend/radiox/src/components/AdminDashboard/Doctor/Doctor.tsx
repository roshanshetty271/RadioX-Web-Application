import React, { useState } from 'react';
import './Doctor.css';

interface Doctor {
  id: number;
  name: string;
  lastName: string;
  specialization: string;
  contactNo: string;
  address: string;
  gender: string;
  location: string;
  email: string;
  scansDone: number; 
}

const DoctorComponent: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([
   { id: 1, name: 'Dr. Smith', lastName: 'Doe', specialization: 'Radiology', contactNo: '123-456-7890', address: '123 Main St', gender: 'Male', location: 'San Francisco', scansDone: 100, email: 'hzdkv@gmail.com' },
   { id: 2, name: 'Dr. Jennifer', lastName: 'Johnson', specialization: 'Cardiology', contactNo: '234-567-8901', address: '456 Oak St', gender: 'Female', location: 'New York', scansDone: 75, email: 'j.johnson@gmail.com' },
   { id: 3, name: 'Dr. Michael', lastName: 'Anderson', specialization: 'Orthopedics', contactNo: '345-678-9012', address: '789 Elm St', gender: 'Male', location: 'Germany', scansDone: 120, email: 'm.anderson@gmail.com' },
   { id: 4, name: 'Dr. Emily', lastName: 'Williams', specialization: 'Neurology', contactNo: '456-789-0123', address: '101 Pine St', gender: 'Female', location: 'London', scansDone: 90, email: 'e.williams@gmail.com' },
   { id: 5, name: 'Dr. Daniel', lastName: 'Brown', specialization: 'Dermatology', contactNo: '567-890-1234', address: '202 Maple St', gender: 'Male', location: 'Boston', scansDone: 80, email: 'd.brown@gmail.com' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newDoctor, setNewDoctor] = useState<Doctor>({
    id: 0,
    name: '',
    lastName: '',
    specialization: '',
    contactNo: '',
    address: '',
    gender: '',
    location: '',
    email: '', 
    scansDone: 0, 
  });

  const [message, setMessage] = useState<string>('');

  const handleAddDoctor = () => {
    setShowAddForm(true);
    setMessage('');
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
    setNewDoctor({
      id: 0,
      name: '',
      lastName: '',
      specialization: '',
      contactNo: '',
      address: '',
      gender: '',
      location: '',
      email: '', 
      scansDone: 0, 
    });
    setMessage('');
  };

  const handleSaveDoctor = () => {
    setDoctors((prevDoctors) => [...prevDoctors, { ...newDoctor, id: prevDoctors.length + 1 }]);
    setShowAddForm(false);
    setNewDoctor({
      id: 0,
      name: '',
      lastName: '',
      specialization: '',
      contactNo: '',
      address: '',
      gender: '',
      location: '',
      email: '',
      scansDone: 0, 
    });
    setMessage('Doctor added successfully.');
  };

  const handleUpdateDoctor = (id: number) => {
    const doctorToEdit = doctors.find((doctor) => doctor.id === id);
    if (doctorToEdit) {
      setShowAddForm(true);
      setNewDoctor({ ...doctorToEdit });
    }
  };
  

  const handleDeleteDoctor = (id: number) => {
    setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.id !== id));
    setMessage(`Delete doctor with ID: ${id}`);
  };

  return (
    <div className="doctor">
      <h2>Doctor Details</h2>
      {message && <p>{message}</p>}
      <div>
        <button className="add-doctor-button" onClick={handleAddDoctor}>Add Doctor</button>
        <button className="update-doctor-button" onClick={() => handleUpdateDoctor(1)}>Update Doctor</button>
        <button className="delete-doctor-button" onClick={() => handleDeleteDoctor(1)}>Delete Doctor</button>
      </div>
      <div className={`add-form ${showAddForm ? 'visible' : ''}`}>
        <label>Name:</label>
        <input type="text" value={newDoctor.name} onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })} />
        <label>Last Name:</label>
        <input type="text" value={newDoctor.lastName} onChange={(e) => setNewDoctor({ ...newDoctor, lastName: e.target.value })} />
        <label>Gender:</label>
        <select value={newDoctor.gender} onChange={(e) => setNewDoctor({ ...newDoctor, gender: e.target.value })}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label>Specialization:</label>
        <input type="text" value={newDoctor.specialization} onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })} />
        <label>Contact No:</label>
        <input type="text" value={newDoctor.contactNo} onChange={(e) => setNewDoctor({ ...newDoctor, contactNo: e.target.value })} />
        <label>Address:</label>
        <input type="text" value={newDoctor.address} onChange={(e) => setNewDoctor({ ...newDoctor, address: e.target.value })} />
        <label>Location:</label>
        <input type="text" value={newDoctor.location} onChange={(e) => setNewDoctor({ ...newDoctor, location: e.target.value })} />
        <label>Email ID:</label>
        <input type="text" value={newDoctor.email} onChange={(e) => setNewDoctor({ ...newDoctor, email: e.target.value })} />

        <label>Scans Done:</label>
        <input type="number" value={newDoctor.scansDone} onChange={(e) => setNewDoctor({ ...newDoctor, scansDone: Number(e.target.value) })}/>

        <button onClick={handleSaveDoctor}>Save</button>
        <button onClick={handleCancelAdd}>Cancel</button>
      </div>
      {!showAddForm && (
        <table className="doctor-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Specialization</th>
              <th>Contact No</th>
              <th>Address</th>
              <th>Location</th>
              <th>Email ID</th>
              <th>Scans Done</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.lastName}</td>
                <td>{doctor.gender}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.contactNo}</td>
                <td>{doctor.address}</td>
                <td>{doctor.location}</td>
                <td>{doctor.email}</td>
                <td>{doctor.scansDone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}; 

export default DoctorComponent;

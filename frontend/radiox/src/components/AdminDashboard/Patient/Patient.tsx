import React, { useState } from 'react';
import Modal from 'react-modal'; 
import './Patient.css';

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  contactNo: string;
  address: string;
  location: string;
  scansDone: boolean;
  emailId: string;
  remarks: string;
  assignedDoctor: string;
}

const PatientComponent: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, name: 'John Doe', age: 30, gender: 'Male', contactNo: '987-654-3210', address: '456 Oak St', location: 'City Hospital', scansDone: true, emailId: 'john.doe@gmail.com', remarks: 'Regular checkup', assignedDoctor: 'Dr. Smith' },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', contactNo: '123-456-7890', address: '789 Maple Ave', location: 'Healthcare Clinic', scansDone: false, emailId: 'jane.smith@gmail.com', remarks: 'Initial consultation', assignedDoctor: 'Dr. Johnson' },
    { id: 3, name: 'Robert Johnson', age: 45, gender: 'Male', contactNo: '555-123-4567', address: '321 Pine Ln', location: 'Community Hospital', scansDone: true, emailId: 'robert.johnson@gmail.com', remarks: 'Follow-up appointment', assignedDoctor: 'Dr. Brown' },
    { id: 4, name: 'Emily White', age: 28, gender: 'Female', contactNo: '777-888-9999', address: '222 Elm St', location: 'Wellness Center', scansDone: false, emailId: 'emily.white@gmail.com', remarks: 'Routine health check', assignedDoctor: 'Dr. Miller' },
    { id: 5, name: 'Michael Davis', age: 35, gender: 'Male', contactNo: '444-666-2222', address: '567 Birch Rd', location: 'Family Clinic', scansDone: true, emailId: 'michael.davis@gmail.com', remarks: 'Lab test results', assignedDoctor: 'Dr. Wilson' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newPatient, setNewPatient] = useState<Patient>({
    id: 0,
    name: '',
    age: 0,
    gender: '',
    contactNo: '',
    address: '',
    location: '',
    scansDone: false,
    emailId: '',
    remarks: '',
    assignedDoctor: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
  };

  const handleAddPatient = () => {
    setShowAddForm(true);
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
    setNewPatient({
      id: 0,
      name: '',
      age: 0,
      gender: '',
      contactNo: '',
      address: '',
      location: '',
      scansDone: false,
      emailId: '',
      remarks: '',
      assignedDoctor: '',
    });
    setSelectedFile(null);
  };

  const handleSavePatient = () => {
    setPatients((prevPatients) => [...prevPatients, { ...newPatient, id: prevPatients.length + 1 }]);
    setShowAddForm(false);
    setNewPatient({
      id: 0,
      name: '',
      age: 0,
      gender: '',
      contactNo: '',
      address: '',
      location: '',
      scansDone: false,
      emailId: '',
      remarks: '',
      assignedDoctor: '',
    });
    handleUploadScan(selectedFile, newPatient.id);
    setSelectedFile(null);
  };

  const handleUpdatePatient = (id: number) => {
    const patientToEdit = patients.find((patient) => patient.id === id);
    if (patientToEdit) {
      setShowAddForm(true);
      setNewPatient({ ...patientToEdit });
    }
  };

  const handleDeletePatient = (id: number) => {
    setPatients((prevPatients) => prevPatients.filter((patient) => patient.id !== id));
  };

  const handleUploadScan = (file: File | null, patientId: number) => {
    if (file) {
      setUploadSuccess(true);
    }
  };

  return (
    <div className="patient">
      <h2>Patient Details</h2>
      <div className="button-container">
        <button className="add-patient-button" onClick={handleAddPatient}>
          Add Patient
        </button>
        <button className="update-patient" onClick={() => handleUpdatePatient(1)}>
          Update Patient
        </button>
        <button className="delete-patient" onClick={() => handleDeletePatient(1)}>
          Delete Patient
        </button>
      </div>
      <div className={`add-form ${showAddForm ? 'visible' : ''}`}>
        <label>Name:</label>
        <input type="text" value={newPatient.name} onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })} />
        <label>Age:</label>
        <input type="number" value={newPatient.age} onChange={(e) => setNewPatient({ ...newPatient, age: +e.target.value })} />
        <label>Gender:</label>
        <select value={newPatient.gender} onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value })}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label>Contact No:</label>
        <input type="text" value={newPatient.contactNo} onChange={(e) => setNewPatient({ ...newPatient, contactNo: e.target.value })} />
        <label>Address:</label>
        <input type="text" value={newPatient.address} onChange={(e) => setNewPatient({ ...newPatient, address: e.target.value })} />
        <label>Location:</label>
        <input type="text" value={newPatient.location} onChange={(e) => setNewPatient({ ...newPatient, location: e.target.value })} />
        <label>Scans Done:</label>
        <input type="checkbox" checked={newPatient.scansDone} onChange={(e) => setNewPatient({ ...newPatient, scansDone: e.target.checked })} />
        <label>Email ID:</label>
        <input type="text" value={newPatient.emailId} onChange={(e) => setNewPatient({ ...newPatient, emailId: e.target.value })} />
        <label>Remarks:</label>
        <input type="text" value={newPatient.remarks} onChange={(e) => setNewPatient({ ...newPatient, remarks: e.target.value })} />
        <label>Assigned Doctor:</label>
        <input type="text" value={newPatient.assignedDoctor} onChange={(e) => setNewPatient({ ...newPatient, assignedDoctor: e.target.value })} />
        <label>Upload Scan:</label>
        <input type="file" accept=".pdf, .png, .jpeg, .jpg" onChange={handleFileChange} />
        <button onClick={handleSavePatient}>Save</button>
        <button onClick={handleCancelAdd}>Cancel</button>
        <Modal isOpen={uploadSuccess}onRequestClose={() => setUploadSuccess(false)}
          contentLabel="Upload Success">
          <h2>Scan Successfully Uploaded!</h2>
          <button onClick={() => setUploadSuccess(false)}>Close</button>
        </Modal>
      </div>
      {!showAddForm && (
        <table className="patient-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact No</th>
              <th>Address</th>
              <th>Location</th>
              <th>Scans Done</th>
              <th>Email ID</th>
              <th>Remarks</th>
              <th>Assigned Doctor</th>
              <th>Upload Scan</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.contactNo}</td>
                <td>{patient.address}</td>
                <td>{patient.location}</td>
                <td>{patient.scansDone ? 'Yes' : 'No'}</td>
                <td>{patient.emailId}</td>
                <td>{patient.remarks}</td>
                <td>{patient.assignedDoctor}</td>
                <td>
                  <input type="file" accept=".pdf, .png, .jpeg, .jpg" onChange={handleFileChange} />
                  <button onClick={() => handleUploadScan(selectedFile, patient.id)}>Upload Scan</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PatientComponent;

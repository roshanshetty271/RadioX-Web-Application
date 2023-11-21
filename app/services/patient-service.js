import Patient from '../models/patient.js';

export const save = async (newPatient) => {
    const patient = new Patient(newPatient);
    return patient.save();
};

export const deleteById = async (id) => {
    // Assuming you have a function to delete a patient by ID in your Patient model
    return Patient.findByIdAndDelete(id);
};

// Add other service functions as needed

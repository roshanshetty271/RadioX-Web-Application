// doctor-service.js

import Doctor from '../models/doctor.js';

export const addDoctor = async (doctorData) => {
  try {
    const doctor = new Doctor(doctorData);
    await doctor.save();
    return { message: 'Doctor added successfully' };
  } catch (error) {
    console.error('Error while adding Doctor details:', error.message);
    throw new Error('Error while adding Doctor details');
  }
};

export const deleteDoctorById = async (id) => {
  try {
    const result = await Doctor.findByIdAndDelete(id);
    if (result) {
      console.log('Doctor successfully deleted');
      return { message: 'Doctor successfully deleted' };
    } else {
      console.log('Doctor not found');
      throw new Error('Doctor not found');
    }
  } catch (error) {
    console.error('Error while deleting Doctor:', error.message);
    throw new Error('Error while deleting Doctor');
  }
};

export const updateDoctorById = async (id, updatedDoctor) => {
  try {
    console.log(`Updating doctor with ID: ${id}`);
    
    // Log the updated data
    console.log('Updated Doctor Data:', updatedDoctor);

    const result = await Doctor.findByIdAndUpdate(id, updatedDoctor, { new: true });

    if (result) {
      console.log('Doctor details updated successfully');
      console.log('Updated Doctor:', result);
      return { message: 'Doctor details updated successfully' };
    } else {
      console.log('Doctor not found');
      throw new Error('Doctor not found');
    }
  } catch (error) {
    console.error('Error while updating Doctor details:', error.message);
    throw new Error('Error while updating Doctor details');
  }
};

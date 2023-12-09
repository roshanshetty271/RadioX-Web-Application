// ./app/controllers/doctor-controller.js
import * as doctorService from '../services/doctor-service.js';
import { setErrorResponse, setResponse } from './response-handler.js';

export const registerDoctor = async (req, res) => {
    try {
        const doctorData = { ...req.body };
        const result = await doctorService.addDoctor(doctorData);
        setResponse(result, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
};

export const updateDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const updatedDoctorData = { ...req.body };
        const result = await doctorService.updateDoctorById(doctorId, updatedDoctorData);
        setResponse(result, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
};

export const getPatientInfoController = async (req, res) => {
    const { doctorId, patientId } = req.params;
  
    try {
      const patientInfo = await doctorService.getPatientInfo(doctorId, patientId);
      res.status(200).json({ patientInfo });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

export const deleteDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const result = await doctorService.deleteDoctorById(doctorId);
        setResponse(result, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
};



export const viewDoctorInfo = async (req, res) => {
    try {
        // Extract doctor ID from the request parameters
        const doctorId = req.params.id;

        // Call the get doctor service
        const doctor = await doctorService.getDoctor(doctorId);

        // Set a success response
        setResponse(doctor, res);
    } catch (error) {
        // Set an error response in case of an exception
        setErrorResponse(error, res);
    }
};


export const doctorLogin = async (req, res) => {
    try {
        // Extract username and password from the request body
        const { username, password } = req.body;

        // Call the doctor login service (implement this in doctor-service.js)
        const doctor = await doctorService.loginDoctor(username, password);

        // Set a success response
        setResponse({ message: 'Doctor logged in successfully', doctor }, res);
    } catch (error) {
        setErrorResponse(error, res);
    }
};

export const updateRemarks = async (req, res) => {
    const { doctorId, patientId } = req.params;
    const { remarks } = req.body;
  
    try {
      const updatedDoctor = await doctorService.updateRemarks(doctorId, patientId, remarks);
      res.json(updatedDoctor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

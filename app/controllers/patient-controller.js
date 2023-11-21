import * as patientService from '../services/patient-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';

export const deletePatient = async (req, res) => {
    try {
        const id = req.params.id; // Assuming the patient ID is in the request parameters
        const result = await patientService.deleteById(id);
        setResponse(result, res);
    } catch (err) {
        setErrorResponse(err, res);
    }
};

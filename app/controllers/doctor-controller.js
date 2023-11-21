import { setResponse, setErrorResponse } from './response-handler.js';

export const addDoctor = async (request, response) => {
    try {
        const newDoctor = { ...request.body };
        const doctor = await doctorService.save(newDoctor);
        setResponse(doctor, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
};

export const deleteDoctor = async (request, response) => {
    try {
        const id = request.params.id;
        const result = await doctorService.deleteById(id);
        setResponse(result, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
};

export const updateDoctor = async (request, response) => {
    try {
        const id = request.params.id;
        const updatedDoctor = { ...request.body };
        const result = await doctorService.updateById(id, updatedDoctor);
        setResponse(result, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
};

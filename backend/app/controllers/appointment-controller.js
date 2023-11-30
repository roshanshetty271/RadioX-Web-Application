import * as appointmentService from '../services/appointment-service.js'
import {setResponse, setErrorResponse} from './response-handler.js';

export const get = async (request, response) => {
    try{
        const id = request.body.id;
        const appointment = await appointmentService.findById(id)
        setResponse(appointment, response)
    }
    catch(err){
        setErrorResponse(err, response)
    }
}

export const post = async(request, response) => {
    try{
        const newAppointment = {...request.body}
        const appointment = await appointmentService.save(newAppointment)
        setResponse({
            message: "Appointment scheduled successfully",
            appointmentId: appointment._id
        }, response)        
    }
    catch(err){
        setErrorResponse(err, response)
    }
}

export const put = async (request, response) => {
    try{
        const id = request.params.id;
        const updatedAppointment = {...request.body}
        console.log(updatedAppointment)
        console.log("id: ", id)
        const appointment = await appointmentService.update(updatedAppointment, id)
        
        setResponse({
            message: `Your appointment ${id} has been updated successfully`
        }, response)
    }
    catch(err){
        console.log(err)
        setErrorResponse(err, response)
    }
}

export const remove = async (request, response) => {
    try{
        const id = request.params.id
        const appointment = await appointmentService.remove(id)
        setResponse({
            message: `Your appointment ${id} cancelled successfully`,
        }, response)

    }
    catch(err){
        setErrorResponse(err, response)

    }
}
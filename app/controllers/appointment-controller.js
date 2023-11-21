import * as appointmentService from '../services/appointment-service.js'
import {setResponse, setErrorResponse} from './response-handler.js';

// export const get = async (request, response) => {
//     try{
//         const id = request.body.id;
//         const course = await courseService.findById(id)
//         setResponse(course, response)
//     }
//     catch(err){
//         setErrorResponse(err, response)
//     }
// }

export const post = async(request, response) => {
    try{
        const newAppointment = {...request.body}
        const appointment = await appointmentService.save(newAppointment)
        setResponse(appointment, response)        
        // appointment && response.status(200).json({
        //     message: "Appointment scheduled successfully"
        // })
    }
    catch(err){
        setErrorResponse(err, response)
    }
}
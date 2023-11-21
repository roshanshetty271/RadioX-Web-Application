import Appointment from '../models/appointment.js'
import mongoose from 'mongoose'

export const search = async (params = {}) => {
    const appointments = await Appointment.find(params).exec()
    return appointments
}

export const update = async (updatedAppointment, id) => {
    // try{

    
        const validObjectId = mongoose.Types.ObjectId.isValid(id);

        console.log(validObjectId)

        const appointment = await Appointment.findOneAndUpdate({_id : id}, updatedAppointment).exec()
        console.log("appointment", appointment)
        // if (!appointment) {
        //     throw new Error('Appointment not found');
        //   }
        return appointment
    // }
    // catch(error){
    //     console.log(error)
    // }
}

export const save = async (newAppointment) => {
    const appointment = new Appointment(newAppointment)
    return appointment.save()
}

export const remove = async (id) => {
    return await Appointment.findByIdAndDelete(id).exec()
}

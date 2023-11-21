import Appointment from '../models/appointment.js'


export const save = async (newAppointment) => {
    const course = new Appointment(newAppointment)
    return course.save()
}
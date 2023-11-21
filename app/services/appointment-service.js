import Appointment from '../models/appointment.js'


export const save = async (newAppointment) => {
    const course = new Appointment(newAppointment)
    return course.save()
}
// services/appointment-service.js

import Appointment from '../models/appointment.js';

export const scheduleAppointment = async(newAppointment) => {
    const appointment = new Appointment(newAppointment);
    return await appointment.save();
};

export const cancelAppointment = async(appointmentId) => {
    return await Appointment.findByIdAndDelete(appointmentId);
};

export const updateAppointment = async(appointmentId, updatedAppointment) => {
    return await Appointment.findByIdAndUpdate(
        appointmentId,
        updatedAppointment, { new: true }
    );
};

export const getAppointmentById = async(appointmentId) => {
    return await Appointment.findById(appointmentId);
};

// models/appointment.js

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    serviceName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    }
});

const AppointmentModel = mongoose.model('Appointment', AppointmentSchema);

export default AppointmentModel;
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    patientID: {
        type: String,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    schedule: {
        startTime: {
            type: String,
            required: true
        },
        duration: {
            type: Number
        }
    },
    location: {
        type: String,
        required: true
    },
    patientName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        }
    },
    doctorName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        }
    },
    name: String,
    dateOfBirth: String,
    phoneNumber: String,
    address: String,
    gender: String,
    symptoms: String,
    username: String,
    password: String
});

const PatientModel = mongoose.model('Patient', PatientSchema);

export default PatientModel;

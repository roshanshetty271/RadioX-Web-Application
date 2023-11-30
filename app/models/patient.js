// app/models/patient.js

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name: String,
    dateOfBirth: String,
    phoneNumber: String,
    address: String,
    gender: String,
    symptoms: String,
    username: String,
    password: String,
});

const PatientModel = mongoose.model('Patient', PatientSchema);

export default PatientModel;
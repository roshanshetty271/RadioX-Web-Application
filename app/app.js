import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import initialize from './initialize.js';
import patientRoutes from './routes/patient-routes.js';
import doctorRoutes from './routes/doctor-routes.js';
import billRoutes from './routes/bill-routes.js';
//import registerRouter from './routes/index.js'
//import models from './models/index.js'

const initialize = (app) => {

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded())
    mongoose.connect('mongodb+srv://shettyaayu:CAw8PmtbGCabGGZN@cluster0.7yywkny.mongodb.net/MasterDb?retryWrites=true&w=majority')
    registerRouter(app)
}

export default initialize
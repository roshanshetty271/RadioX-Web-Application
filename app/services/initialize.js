// initialize.js
import express from 'express';
import mongoose from 'mongoose';
import doctorRoutes from '../routes/doctor-routes.js';
import patientRoutes from '../routes/patient-routes.js';
import billRoutes from '../routes/bill-routes.js';

const initializeRoutes = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api', doctorRoutes);
  app.use('/api', patientRoutes);
  app.use('/api', billRoutes);

  mongoose.connect('mongodb+srv://shettyaayu:CAw8PmtbGCabGGZN@cluster0.7yywkny.mongodb.net/MasterDb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default initializeRoutes;

// app/routes/index.js

//import express from 'express';
import patientRoutes from './patient-routes.js';
import doctorRoutes from './doctor-routes.js';
import billRoutes from './bill-routes.js';

export default (app) => {
  app.use('/patients', patientRoutes); 
  app.use('/patientregistration', patientRoutes);
  app.use('/doctors', doctorRoutes);
  app.use('/generatebill', billRoutes);
};

// app/routes/index.js

import express from 'express';
import patientRoutes from './patient-routes.js';

export default (app) => {
  // Patient Routes
  app.use('/patients', patientRoutes);

  // Other Routes
  // Patient Login
  app.post('/patientlogin', /* Add Controller Function for Patient Login */ );

  // Patient Registration
  app.post('/patientregistration', /* Add Controller Function for Patient Registration */ );

  // Delete Patient
  app.delete('/patientregistration/delete/:id', /* Add Controller Function for Deleting a Patient */ );

  // Update Patient
  app.put('/patientregistration/update/:id', /* Add Controller Function for Updating a Patient */ );

  // View Patient Information
  app.get('/patientregistration/viewinfo/:id', /* Add Controller Function for Viewing Patient Information */ );

  // View Patient's Medical Report
  app.get('/patientregistration/viewreport/:id', /* Add Controller Function for Viewing Patient's Medical Report */ );
};

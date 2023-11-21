import express from 'express';
import appointmentRouter from './appointment-route.js';
import billRouter from './bill-routes.js';

export default (app) => {
  app.use('/appointment', appointmentRouter);
  app.use('/api/bill', billRouter);
};
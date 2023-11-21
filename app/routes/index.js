import appointmentRouter from './appointment-route.js'
import reportRouter from './report-route.js'
import patientRoutes from './patient-routes.js';

export default (app) => {
    app.use('/appointment', appointmentRouter)
    app.use('/reports', reportRouter)
    app.use('/patients', patientRoutes);
}

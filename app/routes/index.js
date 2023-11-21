import appointmentRouter from './appointment-route.js'
import reportRouter from './report-route.js'

export default (app) => {
    app.use('/appointment', appointmentRouter)
    app.use('/reports', reportRouter)

}
import appointmentRouter from './appointment-route.js'

export default (app) => {
    app.use('/appointment', appointmentRouter)
}
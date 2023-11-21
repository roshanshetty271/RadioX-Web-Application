import router from './report-route.js'




export default (app) => {
    app.use('/reports', router)
}
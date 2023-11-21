import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import registerRouter from './routes/index.js'
import models from './models/index.js'

const initialize = (app) => {

    app.use(cors())
    app.use(express.json())
    //app.use(express.urlencoded())
    app.use(express.urlencoded({ extended: true }));
    mongoose.connect('mongodb+srv://shettyaayu:CAw8PmtbGCabGGZN@cluster0.7yywkny.mongodb.net/MasterDb?retryWrites=true&w=majority')
    registerRouter(app)
}

export default initialize
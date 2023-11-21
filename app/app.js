import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import registerRoutes from './routes/index.js';

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());

    const mongoDBURI = 'mongodb+srv://shettyaayu:CAw8PmtbGCabGGZN@cluster0.7yywkny.mongodb.net/MasterDb?retryWrites=true&w=majority';

    // Connect to MongoDB
    mongoose.connect(mongoDBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Event listeners for Mongoose connection
    const db = mongoose.connection;

    // Successfully connected
    db.on('connected', () => {
        console.log(`Connected to MongoDB Atlas at ${mongoDBURI}`);
    });

    // Connection error
    db.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
    });

    // Disconnected
    db.on('disconnected', () => {
        console.log('MongoDB connection disconnected');
    });

    registerRoutes(app);
};

export default initialize;

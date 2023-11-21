import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

const initialize = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded());

  mongoose.connect('mongodb+srv://shettyaayu:CAw8PmtbGCabGGZN@cluster0.7yywkny.mongodb.net/MasterDb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default initialize;

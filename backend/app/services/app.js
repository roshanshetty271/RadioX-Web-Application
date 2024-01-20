// services/app.js

import cors from 'cors';
import express from 'express';

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};

export default initialize;
import express from 'express';
import initializeRoutes from './app/routes/index.js';

const app = express();
const port = 3000;

initializeRoutes(app);

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
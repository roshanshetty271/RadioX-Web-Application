// ./server.js
import express from 'express';
import initialize from './app/app.js';

const app = express();
const port = process.env.PORT || 3002;

// Call the initialize function with the express app
initialize(app);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});

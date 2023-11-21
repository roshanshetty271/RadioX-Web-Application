<<<<<<< HEAD
import express from 'express'
import initialize from './app/app.js'

const app = express()
const port = 3000
initialize(app)
app.listen(3000, () => console.log(`Server is listening at port ${port}`))
=======
import express from 'express';
import initialize from './app/app.js';

const app = express();
const port = 3000; // Hard-coded port

initialize(app);

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
>>>>>>> cfae4679e302a2c9e960eb536b8fc4c3b9c20171

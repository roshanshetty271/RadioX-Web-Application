<<<<<<< HEAD
// server.js
import app from './app/app.js'; 

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
=======
import express from 'express'
import initialize from './app/app.js'

const app = express()
const port = 3000
initialize(app)
app.listen(port, () => console.log(`Server is listening at port ${port}`))
>>>>>>> 0fb6927865a35e6ec76e2b7712cb42aae9f6f0cb

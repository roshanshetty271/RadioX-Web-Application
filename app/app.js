import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import initializeRoutes from './services/initialize.js';
import patientRoutes from './routes/patient-routes.js';
import doctorRoutes from './routes/doctor-routes.js';
import billRoutes from './routes/bill-routes.js';
import registerRoutes from './routes/index.js';

const app = express();

// MongoDB URI
const mongoDBURI =
  'mongodb+srv://shettyaayu:CAw8PmtbGCabGGZN@cluster0.7yywkny.mongodb.net/MasterDb?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/bills', billRoutes);

// MongoDB connection
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

initializeRoutes(app);
registerRoutes(app);

// Export the Express app
export default app;

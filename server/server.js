import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'; // Import your db connection
import employeeRoutes from './routes/employeeRoutes.js'; // Import employee routes

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/employees', employeeRoutes); // Use employee routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

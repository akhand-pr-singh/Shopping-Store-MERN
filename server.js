import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.route.js';

//configure env
dotenv.config();

//database config
connectDB();

//REST object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/auth', authRoutes);

//REST api
app.get('/', (req, res)=>{
    res.send("<h1>Welcome to the e-commerce app</h1>");
});

//PORT 

const PORT = process.env.PORT || 3000;

//run listen
app.listen(PORT, ()=>{
    console.log(`Server is running on ${process.env.DEV_MODE} mode on ${PORT}`);
});
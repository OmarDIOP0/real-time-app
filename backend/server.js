import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectToMongoDB from "./db/connexionMongoDB.js";
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); //parser les cookies du requete

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);



app.listen(PORT,()=>{
   connectToMongoDB();
   console.log(`Demarrage sur le port ${PORT}`)
});
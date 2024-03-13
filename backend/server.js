import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDB from "./db/connexionMongoDB.js";
import cookieParser from 'cookie-parser';
import { app , server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); //parser les cookies du requete

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes)



server.listen(PORT,()=>{
   connectToMongoDB();
   console.log(`Demarrage sur le port ${PORT}`)
});
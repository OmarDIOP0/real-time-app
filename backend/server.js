import express from "express";
import dotenv from "dotenv";
import authRouter from './routes/auth.routes.js';
import connectToMongoDB from "./db/connexionMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/auth',authRouter);


// app.get('/',(req,res)=>{
//    res.send("Hello world !!!");
// });



app.listen(PORT,()=>{
   connectToMongoDB();
   console.log(`Demarrage sur le port ${PORT}`)
});
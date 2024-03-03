import express from "express";
import dotenv from "dotenv";
import authRouter from './routes/auth.routes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.get('/',(req,res)=>{
   res.send("Hello world !!!");
});


app.use('/api/auth',authRouter);



app.listen(PORT,()=>console.log(`Demarrage sur le port ${PORT}`));
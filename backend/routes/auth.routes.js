import express from 'express';

const router = express.Router();

router.get('/login',(req,res)=>{
   res.send('Login routes');
})

router.get('/logout',(req,res)=>{
    res.send('Logout routes');
})

export default router;
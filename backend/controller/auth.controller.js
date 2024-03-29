import User from "../modals/user.modal.js";
import bcrypt from 'bcryptjs';
import generateTokenUserAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res)=>{
    try {
        const {fullName,username,password,confirmPassword,gender} = await req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error:'Password dont match'})
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:'User already exist'});
        }
        //Hash Password 
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        //Avatar
        const boyProfilePic =`https://avatar.iran.liara.run/public/boy/?username=${username}`;
        const girlProfilePic =`https://avatar.iran.liara.run/public/girl/?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password:hashPassword,
            gender,
            profilePic:gender === "male" ? boyProfilePic : girlProfilePic
        });
        
       if(newUser){
        generateTokenUserAndSetCookie(newUser._id,res);
        await newUser.save();
        res.status(200).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            gender:newUser.gender,
            password:newUser.password,
            profilePic:newUser.profilePic
        })
       }
       else{
        return res.status(400).json({error:'Invalid user data'});
       }

    } catch (error) {
        console.log('Error in signup controller',error.message);
      res.status(500).json({error:'Internal server error'});
    }
}

export const login = async (req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:'Invalid user or password'})
        }
        generateTokenUserAndSetCookie(user._id,res);
        res.status(201).json({
            id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic,
        });
    } catch (error) {
        console.log("Error in login controller "+error.message);
        return res.status(500).json({error:"Internal server error"})
    }
    
}

export const logout =(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        console.log("Error in logout controller "+error.message);
        res.status(500).json({error:"Internal server error"})
    }
}
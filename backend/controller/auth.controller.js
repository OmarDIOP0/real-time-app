export const signup = async (req,res)=>{
    try {
        const {fullName,username,password,confirmPassword,gender} = await req.body;
    } catch (error) {
        
    }
}

export const login =(req,res)=>{
    res.send('Login Controller');
}

export const logout =(req,res)=>{
    res.send('Logout Controller');
}
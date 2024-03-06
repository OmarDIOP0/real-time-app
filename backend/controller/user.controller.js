import User from "../modals/user.modal.js";

export const getUserFromSidebar = async (req,res)=>{
  try {
    const loggedInUserId = req.user._id;
    const filtedUser = await User.find({_id:{$ne:loggedInUserId}}).select('-password');
    res.status(200).json(filtedUser);

  } catch (error) {
        console.error("Error in getuserFromSidebar controller "+error.message);
        return res.status(500).json({error:"Internal server error"})
  }
}
import Conversation from "../modals/conversation.modal.js";
import Message from "../modals/message.modal.js";

export const sendMessage = async(req,res) =>{
    try {
        const {message} = req.body;
        const{id:receiverId}=req.params;
        const senderId = req.user._id;
        
        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        })
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId]
            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        res.status(200).json(newMessage);

    } catch (error) {
        console.log("Error in mesage controller "+error.message);
        return res.status(500).json({error:"Internal server error"})
    }
}
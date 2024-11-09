import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(false);
    const { selectedConversation,messages,setMessages } = useConversation();
    const sendMessage = async (message) => {
        try{
            setLoading(true);
            const response = await fetch(`http://localhost:8000/api-v1/message/send/${selectedConversation?._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    message
                }),
            });
            const data = await response?.json();
            if(data){
                setLoading(false);
                setMessages([...messages, data?.data]);
            }
        }catch(err){
            toast.error(err.message);
            setLoading(false);
        }
    }

    return { sendMessage, loading }
}

export default useSendMessage
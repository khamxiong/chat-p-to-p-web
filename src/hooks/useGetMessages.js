

import { useState,useEffect } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {

    const [loading,setLoading] = useState(false);
    const {messages,setMessages,selectedConversation} = useConversation();

    useEffect(() => {
      const getMessages = async () => {
          try{
              setLoading(true);
              const response = await fetch(`http://localhost:8000/api-v1/message/receive/${selectedConversation?._id}`,{
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
              });
              const data = await response?.json();
              if(data){
                  setMessages(data?.data);
                  setLoading(false);
              }
          }catch(err){
              toast.error(err.message);
              setLoading(false);
          }
      }

     if(selectedConversation?._id)  getMessages();

    },[selectedConversation?._id,setMessages]);

    return {loading,messages}
    
}

export default useGetMessages
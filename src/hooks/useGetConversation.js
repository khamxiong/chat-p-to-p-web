import {useEffect,useState} from 'react'

const useGetConversation = () => {
    const [loading,setLoading] = useState(false);
    const [conversations,setConversations] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const getConversations = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:8000/api-v1/user/get", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response?.json();
                if(data){
                    // console.log('data::',data?.data);
                    setConversations(data?.data);
                    setLoading(false);
                }
            } catch (err) {
                console.log('error::',err);
                setLoading(false);
            }
        };
        getConversations();
    }, [])
  return (
    {conversations,loading}
  )
}

export default useGetConversation

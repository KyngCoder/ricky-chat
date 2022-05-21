import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ChatPage = () => {
    const [chats,setChats] = useState([])
    
    const getChats = async() => {
       await axios.get('http://127.0.0.1:5000/api/chat')
       .then(response => setChats(response.data.chats))
       .catch(error => console.log(error))
    }

    useEffect(()=>{
        getChats()
    },[])

  return (
    <div>
        {chats.map(chat => {
           return( <div key={chat._id}>
            {chat.chatName}
            </div>
        )})}
    </div>
  )
}

export default ChatPage
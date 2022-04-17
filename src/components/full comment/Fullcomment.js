import { useEffect, useState } from 'react';
import axios from 'axios';
import  './fullcomment.css';
const Fullcomment = ({commentId}) => { 
       
    const[comment,setComment]=useState(null);
    useEffect(()=>{
        if(commentId){
            
            axios
            .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)        
            .then((res)=>setComment(res.data))      
            .catch();        
        }
        },[commentId]);

        let commentdetail= <p>please select id </p>;

        if (commentId) commentdetail =<p>loading...</p>;

        if (comment){commentdetail=(
            <div className='fullcomment' >
        <p>name:{comment.name} </p>
        <p>mail:{comment.email} </p>
        <p>body:{comment.body} </p>
        </div>
        );
        }
        return commentdetail;
    };
 
export default Fullcomment;
    
    
    
    

    
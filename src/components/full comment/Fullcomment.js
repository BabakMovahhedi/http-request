import { useEffect, useState } from 'react';
import axios from 'axios';
import  './fullcomment.css';
const Fullcomment = ({commentId}) => { 
       
    const[comment,setComment]=useState(null);
    useEffect(()=>{
        if(commentId){
            
            axios
            .get(`http://localhost:3004/comments/${commentId}`)        
            .then((res)=>setComment(res.data))      
            .catch();        
        }
        },[commentId]);
        const DeleteHandler=()=>{
            axios.delete(`http://localhost:3004/comments/${commentId}`)
            .then()
            .catch();
        };

        let commentdetail= <p>please select id </p>;

        if (commentId) commentdetail =<p>loading...</p>;

        if (comment){commentdetail=(
            <div className='fullcomment' >
        <p>name:{comment.name} </p>
        <p>email:{comment.email} </p>
        <p>body:{comment.body} </p>
        <button onClick={DeleteHandler}>Delete</button>
        </div>
        );
        }
        return commentdetail;
    };
 
export default Fullcomment;
    
    
    
    

    
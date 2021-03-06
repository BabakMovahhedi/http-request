import { useEffect, useState } from 'react';
import axios from 'axios';
import  './fullcomment.css';
import {deletehttp} from '../services/deleteAllservices';
import {gethttp} from '../services/getAllservices';
import {getone} from '../services/getOneServices';


const Fullcomment = ({commentId,setComments}) => { 
       
    const[comment,setComment]=useState(null);
    useEffect(()=>{
        if(commentId){         
            getone(commentId)        
            .then((res)=>setComment(res.data))      
            .catch();        
        }
        },[commentId]);
        const DeleteHandler=()=>{  
            deletehttp(commentId)
            .then((res)=>gethttp()
            .then((res)=>setComments(res.data))
            .catch());
          }      
        
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
    
    
    
    

    
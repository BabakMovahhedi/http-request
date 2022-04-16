import axios from 'axios';
import { useEffect, useState } from 'react';
import fullcomment from './fullcomment.css';
const Fullcomment = ({commentId}) => { 
    console.log(commentId);   
    const[comment,setComment]=useState(null);
    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)        
        .then((res)=>console.log(res.data))        
        .catch();        
        },[commentId]);
   
    
        return ( 
        <div className='fullcomment' >
        <p>name </p>
        <p>mail </p>
        <p>body</p>
        </div>
        
     );
    }
 
export default Fullcomment;
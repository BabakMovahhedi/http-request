import axios from 'axios';
import { useState } from 'react';
import './newcomment.css';
const NewComment = ({onAddPost}) => {
    const[comment,setComment]=useState({
        name:'',
        email:'',
        body:'',
    });
    const changHandler=(e)=>{        
        setComment({...comment, [e.target.name]:e.target.value})};
   
    
    
    
    return ( 
        <div className='newcomment'>
            <h1>New comment</h1>
            <label>name</label>
            <input type='text' onChange={changHandler} name='name' />
            <label>email</label>
            <input type='text' onChange={changHandler} name='email '/>
            <label>body</label>
            <input type='text' onChange={changHandler} name='body' />

            <button onClick={()=>{onAddPost(comment)}} >add new comment</button>
        </div>
     )
};
 
export default NewComment;
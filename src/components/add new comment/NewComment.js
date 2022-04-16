import axios from 'axios';
import { useState } from 'react';
import newcomment from './newcomment.css';
const NewComment = () => {
    const[comment,setComment]=useState({
        name:'',
        mail:'',
        content:'',
    });
    const nameHandler=(e)=>{        
        setComment({...comment, name:e.target.value})};

    const mailHandler=(e)=>{
        setComment({...comment, mail:e.target.value})};

    const contentHandler=(e)=>{
        setComment({...comment, content:e.target.value})};

    const postHandler=(e)=>{
        axios.post('https://jsonplaceholder.typicode.com/comments',{...comment,wife:'shima', })
        .then((res)=>console.log(res.data))
        .catch();
    };
    
    return ( 
        <div className='newcomment'>
            <h1>New comment</h1>
            <label>name</label>
            <input type='text' onChange={nameHandler} />
            <label>mail</label>
            <input type='text' onChange={mailHandler} />
            <label>content</label>
            <input type='text' onChange={contentHandler} />
            <button onClick={postHandler} >add new comment</button>
        </div>
     )
};
 
export default NewComment;
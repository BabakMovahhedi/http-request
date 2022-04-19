import Fullcomment from "../components/full comment/Fullcomment";
import Comment from "../components/comment/Comment";
import NewComment from "../components/add new comment/NewComment";
import discution from './discution.css';
import axios from "axios";
import { useEffect, useState } from "react";



const Discution = () => {
    const [Comments,setComments]=useState(null);
    const[selectedId,setselectedId]=useState(null);
        
    useEffect(()=>{
        axios.get('http://localhost:3004/comments').then((response)=>{
            setComments(response.data);
        }).catch((eroor)=>{});
    
    },[])
    const selectHandler=(id)=>{
        setselectedId(id);
            };
    const postHandler=(comment)=>{
                axios.post('http://localhost:3004/comments',{...comment,wife:'shima', })
                .then((res)=>axios.get('http://localhost:3004/comments')
                .then((res)=>setComments(res.data) )
                .catch());
        };


    return ( 
        <main className="discution">
            <section>
               {Comments ? Comments.map((c)=> 
               <Comment 
               key={c.id} name={c.name} email={c.email} onClick={()=> selectHandler(c.id) } />): <p>loading...</p>}
            </section>
            <section>
                <Fullcomment commentId={selectedId} />
            </section>
            <section>
                <NewComment  onAddPost={postHandler} />
            </section>
        </main>
     );
}
 
export default Discution;
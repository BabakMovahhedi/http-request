import Fullcomment from "../components/full comment/Fullcomment";
import Comment from "../components/comment/Comment";
import NewComment from "../components/add new comment/NewComment";
import  './discution.css';
import axios from "axios";
import { useEffect, useState } from "react";



const Discution = () => {
    const [Comments,setComments]=useState(null);
    const[selectedId,setSelectedId]=useState(null);
    const[error,setError]=useState(false);
        
    useEffect(()=>{
        axios.get('http://localhost:3004/comments').then((response)=>{
            setComments(response.data);
        }).catch((error)=>{setError(true)});
    
    },[])
    const selectHandler=(id)=>{
        setSelectedId(id);
            };
    const postHandler=(comment)=>{
                axios.post('http://localhost:3004/comments',{...comment,wife:'shima', })
                .then((res)=>axios.get('http://localhost:3004/comments'))
                .then((res)=>setComments(res.data) )
                .catch();
        };
    const renderComments=()=>{
        let rendervalue=<p>loading...</p>
        if(error){rendervalue=<p>fetch data failed</p>}
        if (Comments){
            rendervalue= Comments.map((c)=> 
                <Comment 
                key={c.id} 
                name={c.name}
                email={c.email} 
                onClick={()=> selectHandler(c.id) } />)} 
                 
                 
        return rendervalue;
    };

    return ( 
        <main className="discution">
            <section>
               {renderComments()}
            </section>
            <section>
                <Fullcomment commentId={selectedId} setComments={setComments} />
            </section>
            <section>
                <NewComment  onAddPost={postHandler} />
            </section>
        </main>
     );
}
 
export default Discution;
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
        axios.get('https://jsonplaceholder.typicode.com/comments').then((response)=>{
            setComments(response.data.slice(0,4));
        }).catch((eroor)=>{});
    
    },[])
const selectHandler=(id)=>{
    setselectedId(id);
}

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
                <NewComment />
            </section>
        </main>
     );
}
 
export default Discution;
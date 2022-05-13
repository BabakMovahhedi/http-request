import Fullcomment from "../components/full comment/Fullcomment";
import Comment from "../components/comment/Comment";
import NewComment from "../components/add new comment/NewComment";
import { useEffect, useState } from "react";
import { gethttp } from "../components/services/getAllservices";
import { posthttp } from "../components/services/postAllservices";
import  './discution.css';



const Discution = () => {
    const [Comments,setComments]=useState(null);
    const[selectedId,setSelectedId]=useState(null);
    const[error,setError]=useState(false);
        
    useEffect(()=>{
        gethttp()
        .then((response)=>{
            setComments(response.data);
        }).catch((error)=>{setError(true)});
    
    },[])

    const selectHandler=(id)=>{
        setSelectedId(id);
            };
    const postHandler=(comment)=>{
               posthttp({...comment})
                .then((res)=>gethttp)
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
import { useEffect, useState } from "react";
const Comment = () => {
    let[comment,setComment]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch("https://jsonplaceholder.typicode.com/comments")
            let data= await response.json()
            setComment(data)
        }
        fetchData()
    },[])
    return ( 
        <div className="comment">
            <h1>Comment body</h1>
            <div className="commentlist">
                {comment.map(data=>(
                    <div className="list">
                        <h2>body:{data.body}</h2>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Comment;
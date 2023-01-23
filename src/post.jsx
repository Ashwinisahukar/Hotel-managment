import { useEffect, useState } from "react";
const Post = () => {
    let[post,setPost]=useState([])
    useEffect(()=>{
    let fetchData=async()=>{
        let response=await fetch("https://jsonplaceholder.typicode.com/posts")
        let data= await response.json()
        setPost(data)
    }
    fetchData()
},[])
    return ( 
        <div className="post">
            <div className="main">
            <div className="poster">
                {post.map(data=>(
                    <div className="post_list">
                        <h1>Title:  {data.title}</h1>
                    </div>
                      ))}
                </div>
               
            </div>

        </div>
     );
}
export default Post;
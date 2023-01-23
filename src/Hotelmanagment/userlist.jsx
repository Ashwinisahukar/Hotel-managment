import { useEffect, useState } from "react";
import '../styles/userlist.css';

const UserList = () => {
    let[user,setUser]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch("http://localhost:4000/users")
            let data=await response.json()
            setUser(data)
        }
        fetchData()
    })
    let remove=(id,name)=>{
        setUser(user.filter(x=>x.id!=id))
        alert(`${name} has been removed`)
    }
    return ( 
        <div className="userList">
            <h3>User List :- </h3>
            <div className="user_section">
                {user.map(data=>(
                    <div className="user-List">
                        <h2> UserName:  {data.name}</h2>
                        <h1> UserEmail: {data.email}</h1>
                        <h1>UserPhno:  {data.phoneNumber}</h1>
                        <button onClick={()=>remove(data.id,data.name)}>Remove</button>
                    </div>
                ))}


            </div>

        </div>
     );
}
 
export default UserList;
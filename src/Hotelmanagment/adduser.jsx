import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adduser.css';

const AddUser = () => {
    let[name,setName]=useState("")
    let[phoneNumber,setPhno]=useState("")
    let[email,setEmail]=useState("")
    let navigate=useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault();
        let data={name,phoneNumber,email}
        fetch("http://localhost:4000/users",{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
         alert(`user added succesfully`)
         navigate('/admin/user-list')
    }
    return ( 
        <div className="Adduser">
            <h1>-: Add User List :-</h1>
            <div className="user-list">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" value={name}  placeholder="enter user name" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="phno">
                        <input type="text" value={phoneNumber}  placeholder="enter phno" onChange={(e)=>setPhno(e.target.value)}/>
                    </div>
                    <div className="email">
                        <input type="text" value={email} placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="Btn">
                    <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
export default AddUser;
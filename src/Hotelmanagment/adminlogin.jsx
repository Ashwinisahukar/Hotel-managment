import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminlogin.css';

const AdminLogin = () => {
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let navigate=useNavigate()
    let login=(e)=>{
        e.preventDefault();
        let data={email,password}
        if(email=="ashu@gmail.com" && password==1234){
            navigate('/admin/')
       }
       else{
           alert(`Invalid credentials`)
       }
    }
    return ( 
        <div className="Adminlogin">
            <h1> -: Login As Admin :-</h1>
            <div className="form-container">
                <div className="form-inputs">
                <form action="" onSubmit={login}>
                    <div className="email">
                        <input type="text" value={email} placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} />
                        <br /> <br /> <br /> 
                    </div>
                    <div className="password">
                        <input type="text"  value={password} placeholder="enter password" onChange={(e)=>setPassword(e.target.value)} />
                        <br /> <br /> <br />
                    </div>
                    <div className="butt">
                        <button>Login</button>
                    </div>
                </form>

                </div>
            </div>
        </div>
     );
}
export default AdminLogin;
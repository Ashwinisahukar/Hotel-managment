import { useNavigate } from "react-router-dom";
import '../styles/userlogin.css';
const UserLogin = () => {
 let navigate=useNavigate()
 let handleSubmit=()=>{
    navigate('/user/')
 }
    return ( 
        <div className="userlogin">
            <h1> -: Login has User :-</h1>
            <div className="form-container">
                <form action="" onSubmit={handleSubmit}>
                    <div className="email">
                        <input type="text"  placeholder="enter email" />
                        <br /> <br /> <br />
                    </div>
                    <div className="password">
                        <input type="text"  placeholder="enter password"/>
                        <br />  <br /> <br />
                    </div>
                    <div className="butt">
                        <button>User Login</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
export default UserLogin;
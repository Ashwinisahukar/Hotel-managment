import { Link } from "react-router-dom";
import '../styles/landingpage.css';
const LandingPage = () => {
    return ( 
        <div className="landingpage">
            <div className="selectlogin">
             <h1 className="hotel">Hotel Mangement</h1>
             <div className="main">
                <div className="logo">
                    <img height="100px"  width="100px" src="images/foodicon1.jpg" alt="" />
                    <button> <Link className="admin" to="/admin-login">AdminLogin</Link> </button>
                </div>
                <div className="logo1">
                    <img height="100px"  width="100px" src="images/foodicon1.jpg" alt="" />
                    <button > <Link className="admin" to="/user-login">UserLogin</Link></button>
                </div>
             </div>
            </div>
        </div>
     );
}
export default LandingPage;
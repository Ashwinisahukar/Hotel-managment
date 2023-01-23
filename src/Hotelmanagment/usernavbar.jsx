import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="main1">
             <div className="logo5">
                <img height="80px" width="100px" src="/images/restoimg.png" alt="" />
                </div>
            <div className="nav_links">
                <ul>
                    <li><Link className="nav" to="/user/"> Dashboard </Link> </li>
                    <li><Link className="nav" to="/admin/user-list"> UserList </Link> </li>
                    <li><Link className="nav" to="/"> Logout </Link> </li>
                </ul>
            </div>
        </div>
     );
}
export default UserNavbar;
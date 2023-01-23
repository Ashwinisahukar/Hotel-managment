import { Link } from "react-router-dom";
import '../styles/adminNavbar.css';
const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="main1">
                <div className="logo5">
                <img height="80px" width="100px" src="/images/restoimg.png" alt="" />
                </div>
                <div className="nav_links">
                    <ul>
                        <li><Link  className="nav"  to="/admin/">Dasboard</Link> </li>
                        <li> <Link className="nav"  to="/admin/food-list">FoodList</Link></li>
                        <li> <Link className="nav"  to="/admin/add-food">AddFood</Link></li>
                        <li> <Link className="nav"  to="/admin/user-list">UserList</Link></li>
                        <li> <Link className="nav"  to="/admin/add-user">AddUser</Link></li>
                        <li> <Link className="nav"  to="/">Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
export default AdminNavbar;
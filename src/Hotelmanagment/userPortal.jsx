import { Route, Routes } from "react-router-dom";
import AddUser from "./adduser";
import UserDasboard from "./userDashboard";
import UserNavbar from "./usernavbar";

const UserPortal = () => {
    return ( 
        <div className="userportal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDasboard/>} />
            <Route path="/user-list" element={<AddUser/>} />
            </Routes>

        </div>
     );
}
 
export default UserPortal;
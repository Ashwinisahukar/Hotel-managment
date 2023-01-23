import { Route, Routes } from "react-router-dom";
import AddFoodList from "./addFoodList";
import AddUser from "./adduser";
import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";
import FoodList from "./Foodlist";
import ReadFood from "./readFood";
import UserList from "./userlist";


const AdminPortal = () => {
    return ( 
        <div className="admindashboard">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>} />
                <Route path="/food-list" element={<FoodList/>}/>
                <Route path="/add-food" element={<AddFoodList/>} />
                <Route path="/food-list/:id" element={<ReadFood/>} />
                <Route path="/user-list" element={<UserList/>} />
                <Route path="/add-user" element={<AddUser/>} /> 
            </Routes>
        </div>
     );
}
export default AdminPortal;
// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './Hotelmanagment/adminlogin';
import AdminPortal from './Hotelmanagment/adminPortal';
import LandingPage from './Hotelmanagment/landingPage';
import UserLogin from './Hotelmanagment/userlogin';
import UserPortal from './Hotelmanagment/userPortal';
// import Post from './post';
// import Comment from './comment';


function App() {
  return (
    <div className="App">
  {/* <Post/>
 <Comment/> */}

 <BrowserRouter>
 <Routes>
  <Route path='/' element={<LandingPage/>} />
  <Route path='/admin-login' element={<AdminLogin/>} />
  <Route path='/user-login'   element={<UserLogin/>} />
  <Route path='/user/*' element={<UserPortal/>} />
  <Route path='/admin/*' element={<AdminPortal/>} />
 </Routes>
 
 </BrowserRouter>
    
    </div>
  );
}
export default App;

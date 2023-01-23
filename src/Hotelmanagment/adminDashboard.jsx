import '../styles/adminDashboard.css';
const AdminDashboard = () => {
    return ( 
        <div className="dash">
            <div className="main5">
               <div className="im1">
                     <img src="/images/art1.jpg" alt="" />
               </div>
               <div className="im2">
                  <img src="/images/art2.jpg" alt="" />
               </div>
               <div className='paragrap'>
                  <p> Food art is a type of art thet depicts food,<br />
                  drink or edible objects as the medium or subject matter <br />
                  of an artistic work to create an attractive visual display or <br />
                  provide social critique... </p>
               </div>
            </div>
            <div className='art'>
               <img src="/images/art5.jpg" alt="" />
            </div>
        </div>
     );
}
export default AdminDashboard;
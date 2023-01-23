import '../styles/userdash.css';
const UserDasboard = () => {
    return ( 
        <div className="userdash">
            <div className="main5">
            <div className="im1">
                <img src="/images/pasta.jpg" alt="" />
            </div>
            <div className="im2">
                <img src="/images/sandwitch.jpg" alt="" />
            </div>
            <div className='paragrap'>
                <p> <b className='foo'> Food </b>  is an any substance consumed by <br />
                    an organism for nutritional support.. <br />
                    Food origin, and contains essential nutrients,<br />
                    Such as carbohydrate ,fats,protiens,vitamins,
                    or minerals.
                </p>

            </div>
            </div>
            <div className="im3">
                <img src="/images/burger.jpg" alt="" />
            </div>
        </div>
     );
}
export default UserDasboard;
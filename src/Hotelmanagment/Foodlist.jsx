import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/foodlist.css';

const FoodList = () => {
   let[food,setFood]=useState([])
   let navigate=useNavigate()
   let location=useLocation()
   useEffect(()=>{
    let fetchData=async()=>{
        let response=await fetch("http://localhost:4000/Food")
        let data=await response.json();
        setFood(data)
    }
    fetchData()
   },[])
   //used to delete permanently
   
   let handleDelete=(id,restuarentname)=>{
    fetch(`http://localhost:4000/Food/${id}`,{
        method:'DELETE'
    });
    alert(`${restuarentname} will be deleted permanently`)
}
let read=(id)=>{
    if(location.pathname == '/admin/food-list'){
    navigate(`/admin/food-list/${id}`)
    }else{
        navigate(`/user/food-list/${id}`)
    }
}
    return ( 
        <div className="foodlist">
            <h1> Total Food List :  {food.length}</h1>
            <div className="food-list1"> 
                {food.map(data=>(
                    <div className="img">
                    <div className="image">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="food1">
                        <h2><b className="rest"> RestName</b>:   {data.restuarentname}</h2>
                        <h2> <b className="rest"> FoodName </b>:   {data.foodname}</h2>
                        <h2><b className="rest"> Description </b>:  {data.shortDescription}</h2>
                        <div className="but">
                        <button onClick={()=>read(data.id)}>Read more</button>
                        {location.pathname == '/admin/food-list' && <button1 onClick={()=>handleDelete(data.id,data.restuarentname)}>Delete</button1>}
                    </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
export default FoodList;
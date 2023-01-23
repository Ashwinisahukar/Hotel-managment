import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/readFood.css';

const ReadFood = () => {
    let[food,setfood]=useState([])
    let params=useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch(`http://localhost:4000/Food/${params.id}`)
            let data=await response.json()
            setfood(data)
        }
        fetchData()
    },[])
    return ( 
        <div className="readFood">
            <h1>Read Food description</h1>
            <div className="food">
                <div className="restName">
                    <p><b> RestName </b>:   {food.restuarentname }</p>
                </div>
                <div className="food-name">
                    <p><b> FoodName</b>:   {food.foodname}</p>
                </div>
                <div className="short">
                    <p><b> FoodDescription</b>:   {food.shortDescription}</p>
                </div>
            </div>
        </div>
     );
}
export default ReadFood;
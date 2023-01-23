import {useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addfood.css';

const AddFoodList = () => {
    let[restuarentname,setRestname]=useState("")
    let[foodname,setFoodname]=useState("")
    let[shortDescription,setDescription]=useState("")
    let[img,setImg]=useState("")
    let navigate=useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault();
        let data={restuarentname,foodname,shortDescription,img}
        fetch("http://localhost:4000/Food",{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert(`food added successfully`)
        navigate('/admin/food-list')
        }
        let reset=()=>{
            setRestname("")
            setFoodname("")
            setDescription("")
            setImg("")
    }
    return ( 
        <div className="addFood">
            <h1>-: Add Food List :-</h1>
            <div className="food-list">
                <form action="" onSubmit={handleSubmit}>
                    <div className="rest">
                        <input type="text" value={restuarentname} placeholder="enter restuarentName" onChange={(e)=>setRestname(e.target.value)} />
                    </div>
                    <div className="food2">
                        <input type="text" value={foodname}  placeholder="enter foodName" onChange={(e)=>setFoodname(e.target.value)}/>
                    </div>
                    <div className="short">
                        <input type="text"  value={shortDescription} placeholder="enter description" onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <div className="img2">
                        <input type="text"  value={img} placeholder="enter food image" onChange={(e)=>setImg(e.target.value)} />
                    </div>
                        <button className="btn1">Submit</button>
                        <button className="btn2" onClick={reset}>reset</button>
                </form>
            </div>
        </div>
     );
}
export default AddFoodList;
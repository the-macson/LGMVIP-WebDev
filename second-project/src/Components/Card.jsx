import React from "react";
import '../App.css';
const Card =()=>{
    return(
      <>
        <div className="card">
            <img src="https://reqres.in/img/faces/1-image.jpg" alt="user profile"/>
            <h1>Name</h1>
            <p>Email :</p>
        </div>
      </>
    );
}
export default Card;
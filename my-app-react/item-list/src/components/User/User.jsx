import React from "react";
import "../User/User.css";


export const User = ({name, email, date, img}) => {
    return (
        <div className = 'blogItem'>
            <img src={img} alt="some" />
            <h3>name: {name}</h3>
            <p>email: {email}</p>
            <p>date of birth: {date}</p>
        </div>
    )
};
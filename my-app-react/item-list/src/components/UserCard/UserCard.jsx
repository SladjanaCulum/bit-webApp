import React from "react";
import "../UserCard/UserCard.css";


export const UserCard = ({name, email, date, img}) => {
    return (
        <div className = 'blogCard'>
            <img src={img} alt="some" />
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{date}</p>
        </div>
    )
};
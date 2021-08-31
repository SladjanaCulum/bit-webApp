import React from "react";
import "../UserCard/UserCard.css";


export const UserCard = ({name, email, date, img}) => {
    const emailArr = email.split("@");
    emailArr[0] = `${emailArr[0].slice(0, 3)}...`;

    return (
        <div className = 'blogCard '>
            <img src={img} alt="some" />
            <h3>{name}</h3>
            <p>{emailArr.join("@")}</p>
            <p>{date}</p>
        </div>
    )
};
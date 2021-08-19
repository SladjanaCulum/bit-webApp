import React from "react";
import "./Blog.css";
// import { dataLista } from "../../data/data-list";

export const Blog = ({title, text}) => {
    return (
        <div className = 'blogItem'>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
};
import React from 'react';

import { dataList } from '../../data/data-list';

import './BlogList.css';

import { Blog } from '../Blog/Blog.jsx';

export const BlogList = () => (
    <div className = 'blogList'>
    {dataList.map((post, index) => (                 
        <Blog title={post.title} text={post.body} key = {index}/>
    ))}    
    </div>
);
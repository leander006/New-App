import React from 'react'
import './newItem.css'
const NewsItem = ({title,desc,img,more,date,author})=>{
        return (
    <div className='col-sm-6 col-lg-4  my-4'>
    <div className="card" >
    <h5 className='author'>Author : {author?author:"Unknown"}</h5>
      <img src={img?img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkJCXsC9Y4cMn-oPZ85XO1BsoRT9F_jyGHyQ&usqp=CAU"} className="card-img-top" alt=" "/>
      <div className="card-body">
        <h5 className="card-title">{title?.length>200?title.substring(0,200).concat("..."):title}</h5>
        <p className="card-text">{desc?.length>700?desc.substring(0,700).concat("..."):desc}</p>
        <h6 className='card-text1'>Published on :{new Date(date).toDateString()}</h6>
        <a href={more} target="_blank"  className="btn1">Read More</a>
      </div>
    
    </div>
    </div> 

        )
    
}

export default  NewsItem 
import React from 'react'
import './newItem.css'
const NewsItem = ({title,desc,img,more,date,author})=>{
        return (
    <div className='col-sm-6 col-lg-4  my-4'>
    <div class="card" >
    <h5 className='author'>Author : {author?author:"Unknown"}</h5>
      <img src={img} class="card-img-top" alt="No image found"/>
      <div class="card-body">
        <h5 class="card-title">{title?.length>30?title.substring(0,30).concat("..."):title}</h5>
        <p class="card-text">{desc?.length>100?desc.substring(0,100).concat("..."):desc}</p>
        <h6 className='card-text1'>Published on :{new Date(date).toDateString()}</h6>
        <a href={more} target="_blank"  class="btn1">Read More</a>
      </div>
    
    </div>
    </div> 

        )
    
}

export default  NewsItem 
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { useContext } from "react";
// import { useNavigate } from 'react-router-dom';
import "./navbar.css";
// import { useToast } from '@chakra-ui/react'

// import {Context} from '../../Context/ContextProvider';

function Navbar() {

    const[display,setDisplay]=useState(false);
    // const {user,setUser} = useContext( Context);
    // const navigate = useNavigate();
    // const toast = useToast()
   const handleClick =(e)=>{
    e.preventDefault();
       setDisplay(true);
   }
   
//    const handleLogout =()=>{
    
//     localStorage.removeItem("userInfo");
//     setUser(null);
//     toast({
//         title: 'Logout',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       })
//     navigate("/login");
// }
   const handleClose =(e)=>{
    e.preventDefault();
    setDisplay(false);
}
// const handleLogin = () =>{
//     navigate("/login");
// }

// const handleRegister = () =>{
//     navigate("/register");
// }
// const {user} = useContext( Context);

  return (
 
         
    <nav className={display?"navbar":""}>
    {display?<i className="fa-solid  fa-xl fa-xmark"  id="closeicon" onClick={handleClose} ></i>: <i className="fa-solid fa-xl fa-bars " id={!display?"icon":""} onClick={handleClick}></i> }
        <div className='itemLeft' id="left">
       
            <h1>NewsMania</h1>
        </div>
        <div className='itemCenter' id="center">
            <div className='item' id={display?"it":""}>
            <Link to="/">Home</Link>
            </div>
       
            <div className='item'  id={display?"it":""}>
            <Link to="/business">Business</Link>
            </div>
            <div className='item'  id={display?"it":""}>
            <Link to="/entertainment">Entertainment</Link>
            </div>
            <div className='item'  id={display?"it":""}>
            <Link to="/health">Health</Link>
            </div>
            <div className='item'  id={display?"it":""}>
            <Link to="/science">Science</Link>
            </div>
            <div className='item'  id={display?"it":""}>
            <Link to="/sports">Sports</Link>
            </div>
            <div className='item'  id={display?"it":""}>
            <Link to="/technology">Technology</Link>
            </div>
        
        </div>  
    {/* <div className='itemRight'>
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div> */}

    </nav>
   
  )
}

export default Navbar
import React from 'react'
import './Navbar.scss'


const Navbar=()=> {
  //let img=`https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  
  return (
   <nav className="navbar">
<img width="110px" height="110px"src='https://www.visitwinchester.co.uk/app/uploads/2018/05/iroundel.jpg'/>
   <ul>
     <li>
       <a href="/" className="alink">
       Home
       </a>
     </li>

      <li>
       <a href="/" className="alink">
       Contact
       </a>
     </li>

      <li>
       <a href="/" className="alink">
       About
       </a>
     </li>
   </ul>
   </nav>
  )
}

export default Navbar

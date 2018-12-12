import React from 'react'
import './Navbar.scss'


const Navbar=()=> {
  //let img=`https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  
  return (
   <nav className="navbar">
<img width="110px" height="110px"src='https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1478555/580/386/m1/fpnw/wm0/travel-agency-logo-.jpg?1491942632&s=c9fb528107a59e68730ed05719bd8036'/>
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

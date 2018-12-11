import React, { Component } from 'react'
import image from '../../images/paris.jpeg'
import './Tour.scss'

export default class Tour extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img">
       <img  src={image} alt=""/>
       <span className="close">
       <i class="fas fa-window-close"></i>
       </span>
        </div>
        <div className="tour-info">
            <h3>City</h3>
            <h4>Name</h4>
            <h5>info <span>
            <i class="fas fa-window-close"></i>
 </span> </h5>
   <p>aksdfjhaksdfhadskjfhakjhfakjdfh</p>

        </div>
        </article>
    )
  }
}

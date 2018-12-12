import React, { Component } from 'react'
import image from '../../images/paris.jpeg'
import './Tour.scss'

export default class Tour extends Component {
  render() {
    const {img,city,info} = this.props.tour;
    console.log(this.props.tour);
    return (
      <article className="tour">
        <div className="img">
       <img width="300" src={img} alt=""/>
       <span className="close">
       <i class="fas fa-window-close"></i>
       </span>
        </div>
        <div className="tour-info">
            <h3>{city}</h3>
            <h4>{info}</h4>
            <h5>info <span>
            <i class="fas fa-window-close"></i>
 </span> </h5>
   <p>aksdfjhaksdfhadskjfhakjhfakjdfh</p>

        </div>
        </article>
    )
  }
}

import React, { Component } from 'react'
//import image from '../../images/paris.jpeg'
import './Tour.scss'

export default class Tour extends Component {


  state={
    show:false
  }
  fade=()=>{
  this.setState({
    show:!this.state.show
  })

  }
  render() {
    const {img,city,info,name,id} = this.props.tour;
    
    return (
      <article className="tour">
        <div className="img">
       <img width="300" src={img} alt=""/>
       <span  className="close" onClick={()=>this.props.remove(id)}>
       <i class="fas fa-window-close"></i>
       </span>
        </div>
        <div className="tour-info">
            <h3>{city}</h3>
            <h4>{name}</h4>
    
    <h5>infoo  <span onClick={this.fade}><i  className="fas fa-window-close"/>
    
    
    </span> </h5>
    
    {this.state.show && <p>{info}</p>}

        </div>
        </article>
    )
  }
}

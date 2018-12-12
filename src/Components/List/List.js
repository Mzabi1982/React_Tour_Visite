import React, { Component } from 'react'
import './List.scss'
import Tour from '../Tour/Tour'
import data from '../data'

export default class List extends Component {

   state={
     tours:data
   }

   remove=id=>{
   const {tours}=this.state;

    const result=tours.filter(tour=>tour.id !== id)

     this.setState({
       tours:result
     })
   }
  render() {
    const {tours} = this.state;
    return (
      <section className="tourlist">
      {tours.map(tour=>{
      return (<Tour remove={this.remove} tour={tour} key={tour.id}/>)  

      })}
     
     
          
     </section>
    )
  }
}

import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import "./tourlist.scss"
import {tourData} from '../../tourData'
 class TourList extends Component {
     state = { 
         tours : tourData
     }
     removeTour = (id) =>{
         console.log(id);
     }
    render() {
        const { tours } = this.state;
        return (
            <section className="tourList">
             
                {tours.map(tour =>(
                    <Tour key = {tour.id} removeTour = {this.removeTour} tour = {tour}></Tour>
                ))}
               
            </section>
        )
    }
}

export default TourList;
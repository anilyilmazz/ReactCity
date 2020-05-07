import React, { Component } from 'react'
import "./tour.scss"
export default class Tour extends Component {

    state = {
        showinfo : false
    }
    handeInfo = () =>{
        this.setState({showinfo : !this.state.showinfo})
    }
    render() {
        const { id, city, img, name, info } = this.props.tour;
        const { showinfo} = this.state;
        const {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt={info}></img>
                    <span className="close-btn" onClick = {() => removeTour(id)}>
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5 onClick = {this.handeInfo}>info {" "}<span>
                        <i className="fas fa-caret-square-down" ></i></span>
                        {
                            showinfo ? <p>{info}</p>:null
                        }   
                    </h5>
                </div>
            </article>
        )
    }
}

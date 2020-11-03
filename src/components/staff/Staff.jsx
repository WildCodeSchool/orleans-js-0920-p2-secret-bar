import { Component } from 'react';
import './Staff.css';

export default class Staff extends Component{
    render(){
        const { name , image , quote } = this.props;
        return(
            <figure className="StaffCard">
                <div className="Image" style={{backgroundImage: `url(${image})`}}></div>
                <figcaption>
                    <blockquote className="StaffName">{name}</blockquote>
                    <p className="StaffQuote">{quote}</p>
                </figcaption>
            </figure>
        );
    }
}
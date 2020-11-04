import { Component } from 'react';
import './Staff.css';

export default class Staff extends Component{
    constructor(props){
        super(props);
        this.state = {
            styleQuote: {}
        };
        this.displayQuote = this.displayQuote.bind(this);
        this.unDisplayQuote = this.unDisplayQuote.bind(this);
    }

    displayQuote(){
        const newStyle = {
            opacity: "1",
            transform: "translateY(8%)"
        };
        this.setState({styleQuote: newStyle});
    }

    unDisplayQuote(){
        const newStyle = {
            opacity: "0",
            transform: "translateY(-100%)"
        };
        this.setState({styleQuote: newStyle});
    }

    render(){
        const { name , image , quote } = this.props;
        return(
            <figure className="StaffCard">
                <div className="Image" onMouseEnter={this.displayQuote} onMouseLeave={this.unDisplayQuote} style={{backgroundImage: `url(${image})`}}></div>
                <figcaption>
                    <blockquote className="StaffName">{name}</blockquote>
                    <p className="StaffQuote" style={this.state.styleQuote? this.state.styleQuote : ""}>{quote}</p>
                    <p className="MobileQuote">{quote}</p>
                </figcaption>
            </figure>
        );
    }
}
import React from 'react';
import './AlcoolCard.css';

class AlcoolCard extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {image, name, alcool, volume, price} = this.props ;
        return (
            <div className="card-drink-container" data-aos="fade-up">
                    <div className="card-drink-content">
                        <img src={image} alt={name} className="img-cocktail"/>
                        <h3>{name.toUpperCase()}</h3>
                        <p className="desc-cocktail">{alcool[0].toUpperCase()} - {volume}</p>
                        <p className="price-cocktail">{price} €</p>
                    </div>
            </div>
        )
    }
}

export default AlcoolCard;
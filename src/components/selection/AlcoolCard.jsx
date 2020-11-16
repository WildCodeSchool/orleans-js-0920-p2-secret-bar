import React from 'react';
import './AlcoolCard.css';

class AlcoolCard extends React.Component {

    render(){
        const {image, name, alcool, volume, price} = this.props ;
        return (
            <div className="div-cocktail" data-aos="fade-up">
                    <div className="div-cocktail-content">
                        <img src={image} alt={name} className="img-cocktail"/>
                        <h3>{name.toUpperCase()}</h3>
                        {/* <div className="lign-cocktail"></div> */}
                        <p className="desc-cocktail">{alcool[0].toUpperCase()} - {volume}</p>
                        <p className="price-cocktail">{price} €</p>
                    </div>
            </div>
        )
    }
}

export default AlcoolCard;
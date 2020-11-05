import { Component } from "react";
import './FakeCarrousel.css';

export default class FakeCarrousel extends Component{
    render(){
        return(
            <div className="Carrousel">
                <h1 className="MainTitle"> <span className="GoldLetter">W</span>ild <span className="GoldLetter">C</span>ode <span className="GoldLetter">B</span>ar</h1>
                <p className="Slogan">Découvrez nos alcools haut de gamme, nos services uniques au monde et participez à nos soirées inédites et exclusives</p>
            </div>
        );
    }
}
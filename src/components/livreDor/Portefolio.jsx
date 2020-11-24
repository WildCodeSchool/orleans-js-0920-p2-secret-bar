import Opinion from './Opinion.jsx';
import React from 'react';
import './Portefolio.css';
import Navbar from '../Navbar/Navbar';

class Portefolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            online:true
        };
    }
    render(){

        return(
            <div>
            <Navbar active="livre" />
            <div className="integral">
            <h1>Full Moon Party</h1>
            <div className="up">
            <img
            className="underline"
            src="https://zupimages.net/up/20/44/hrq1.png"
            alt="line"
            />
            <div className="pictureParty">
            <img  className="photos" src='https://zupimages.net/up/20/46/43um.jpg' alt=""/>
            <img className="photos" src='https://zupimages.net/up/20/46/8253.jpg' alt="platine"/>
            <img className="photos" src='https://zupimages.net/up/20/46/pdy1.jpg' alt="piscine"/>
            </div>

            <button id="btnPopup" class="btnPopup"
            onClick = { event => {
                const newOnline = !this.state.online;
                this.setState({ online : newOnline });
            }}
                >Plus de Photos</button>
                </div> 
                <div id="overlay" className={this.state.online ? "status":"overlay"}>
                <div id="popu" className="popu">
                <h2 className="galerietitle">
                Galerie : Full Moon Party
                <span id="btnClose" class="btnClose"
                onClick = { event => {
                    const newOnline = !this.state.online;
                    this.setState({ online : newOnline });
                }}
                >&times;</span>
                </h2>
                <div className="galerie">
                <img className="photos1" src='https://zupimages.net/up/20/46/s8mi.jpg' alt=""/>
                    <img className="photos2" src='https://zupimages.net/up/20/46/5ezf.jpg' alt=""/>
                    <img  className="photos3" src='https://zupimages.net/up/20/46/np7z.jpg' alt=""/>
                    <img className="photos4" src='https://zupimages.net/up/20/46/dhs0.jpg' alt=""/>
                    <img className="photos5" src='https://zupimages.net/up/20/46/43um.jpg' alt=""/>
                    <img className="photos6" src='https://zupimages.net/up/20/46/idd3.jpg' alt="cocktail arc en ciel"/>
                    <img className="photos7" src='https://zupimages.net/up/20/46/pdy1.jpg' alt="piscine"/>
                    <img  className="photos8" src='https://zupimages.net/up/20/46/dwt3.jpg' alt="2 amies discutent"/>
                    <img className="photos9" src='https://zupimages.net/up/20/46/vnk0.jpg' alt="filles en robes de soirée"/>
                    <img className="photos10" src='https://zupimages.net/up/20/46/qrnu.jpg' alt="3 filles"/>
                    <img  className="photos11" src='https://zupimages.net/up/20/46/8253.jpg' alt="platine"/>
                    <img className="photos12" src='https://zupimages.net/up/20/46/zfi0.jpg' alt="verre pétillant"/>
                </div>
                </div>
                </div>
            <p className="caption">
            Cette énorme fête organisée sur le thême de la <i>Full Moon</i> était mémorable , des cocktails spéciaux ont était préparé a cette occasion là, DJ Cogno était au platine ! Et vous avez loupé ça ? Ne vous en faites pas , c'est photos aiguillerons votre imaginations, dans l'éspoir de vous voir à là prochaine occasion.         </p>
            <div className="opinion">
            <Opinion />
            </div>
            </div>
            </div>
            );

    }
    
}

export default Portefolio;
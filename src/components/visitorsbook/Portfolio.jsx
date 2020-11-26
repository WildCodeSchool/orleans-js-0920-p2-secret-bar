import Opinion from './Opinion.jsx';
import React from 'react';
import './Portfolio.css';
import Navbar from '../Navbar/Navbar';
import Flickity from 'flickity';
import ControlledCarousel from '../carousel/ControlledCarousel';
import SectionTitle from '../section-title/SectionTitle';
import Footer from "../footer/Footer";

// var flkty = new Flickity( '.main-gallery', {
//     cellAlign: 'left',
//     contain: true
//   });


class Portfolio extends React.Component{
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
                <ControlledCarousel />

                <div className="content-book">
                    <div className="integral">
                        <SectionTitle title="Full Moon Party" color="black" />
                        <div className="up" data-aos="fade-up">
                            <div className="pictureParty">
                                <img  className="photos" src='https://zupimages.net/up/20/46/43um.jpg' alt=""/>
                                <img className="photos" src='https://zupimages.net/up/20/46/8253.jpg' alt="platine"/>
                                <img className="photos" src='https://zupimages.net/up/20/46/pdy1.jpg' alt="piscine"/>
                            </div>
                        </div>
                        <div className="panelPicture" data-aos="fade-up">
                            <div class="gallery js-flickity">
                                <img src='https://zupimages.net/up/20/46/5ezf.jpg' class="gallery-cell"></img>
                                <img src='https://zupimages.net/up/20/46/43um.jpg' class="gallery-cell"></img>
                                <img src='https://zupimages.net/up/20/46/np7z.jpg' class="gallery-cell"></img>
                                <img src='https://zupimages.net/up/20/46/dhs0.jpg' class="gallery-cell"></img>
                                <img src='https://zupimages.net/up/20/46/pdy1.jpg' class="gallery-cell"></img>
                                <img src='https://zupimages.net/up/20/46/zfi0.jpg' class="gallery-cell"></img>
                            </div>
                        </div>
                        <button id="btnPopup" class="btnPopup" data-aos="fade-up"
                            onClick = { () => {
                                const newOnline = !this.state.online;
                                this.setState({ online : newOnline });
                            }}
                        >Plus de Photos</button>
                    </div>

                    <div id="overlay" className={this.state.online ? "status":"overlay"}>
                        <div id="popu" className="popu">
                            <div className="galerie-title">
                                <SectionTitle title="Galerie" color="black" />
                                <span id="btnClose" class="btnClose"
                                    onClick = { () => {
                                        const newOnline = !this.state.online;
                                        this.setState({ online : newOnline });
                                    }}
                                >&times;</span>
                            </div>

                            <div className="galerie">
                                <img className="photos1" src='https://zupimages.net/up/20/46/s8mi.jpg' alt=""/>
                                <img className="photos2" src='https://zupimages.net/up/20/46/5ezf.jpg' alt=""/>
                                <img  className="photos3" src='https://zupimages.net/up/20/46/np7z.jpg' alt=""/>
                                <img className="photos4" src='https://zupimages.net/up/20/46/dhs0.jpg' alt=""/>
                                <img className="photos5" src='https://zupimages.net/up/20/46/43um.jpg' alt=""/>
                                <img className="photos6" src='https://zupimages.net/up/20/46/dhs0.jpg' alt="cocktail arc en ciel"/>
                                <img className="photos7" src='https://zupimages.net/up/20/46/pdy1.jpg' alt="piscine"/>
                                <img  className="photos8" src='https://zupimages.net/up/20/46/dwt3.jpg' alt="2 amies discutent"/>
                                <img className="photos9" src='https://zupimages.net/up/20/46/vnk0.jpg' alt="filles en robes de soirée"/>
                                <img className="photos10" src='https://zupimages.net/up/20/46/qrnu.jpg' alt="3 filles"/>
                                <img  className="photos11" src='https://zupimages.net/up/20/46/8253.jpg' alt="platine"/>
                                <img className="photos12" src='https://zupimages.net/up/20/46/zfi0.jpg' alt="verre pétillant"/>
                            </div>
                        </div>
                    </div>

                    <p className="caption" data-aos="fade-up">
                        Cette énorme fête organisée sur le thême de la <i>Full Moon</i> était mémorable , des cocktails spéciaux ont était préparé a cette occasion là, DJ Cogno était aux platines ! Et vous avez loupé ça ? Ne vous en faites pas, ces photos aiguilleront votre imagination, dans l'espoir de vous voir à là prochaine occasion.
                    </p>

                    <div className="opinion" data-aos="fade-up">
                        <Opinion />
                    </div>
                </div>
                

                <Footer />
            </div>
        );
    }
}

export default Portfolio;
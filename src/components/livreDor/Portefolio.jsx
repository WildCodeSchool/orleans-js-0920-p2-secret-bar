import Opinion from './Opinion.jsx';
import React from 'react';
import './Portefolio.css';
const users = 
  {
    name: 'Robert Reyes',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    commentaire: 'La soirée était formidable',
    note:3,
  };

var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);
function openMoadl(){
    overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal(){
    overlay.style.display='none';
}

class Portefolio extends React.Component{

    render(){

        return(
            <div className="book">
            <h1>Full Moon Party</h1>
                <hr/>
            <div className="pictureParty">
                <img  className="photos" src='https://zupimages.net/up/20/46/dwt3.jpg' alt="2 amies discutent"/>
                <img className="photos" src='https://zupimages.net/up/20/46/vnk0.jpg' alt="filles en robes de soirée"/>
                <img className="photos" src='https://zupimages.net/up/20/46/qrnu.jpg' alt="3 filles"/>
            </div>
            <button id="btnPopup" class="btnPopup">Afficher Popup</button>
                <div id="overlay" class="overlay">
                <div id="popup" class="popup">
                <h2>
                Full Moon Party 
                <span id="btnClose" class="btnClose">&times;</span>
                </h2>
                <div>
                <img className="photos" src='https://zupimages.net/up/20/46/s8mi.jpg' alt=""/>
                <img className="photos" src='https://zupimages.net/up/20/46/5ezf.jpg' alt=""/>
                <img  className="photos" src='https://zupimages.net/up/20/46/np7z.jpg' alt=""/>
                <img className="photos" src='https://zupimages.net/up/20/46/dhs0.jpg' alt=""/>
                <img className="photos" src='https://zupimages.net/up/20/46/43um.jpg' alt=""/>
                <img className="photos" src='https://zupimages.net/up/20/46/idd3.jpg' alt="cocktail arc en ciel"/>
                <img className="photos" src='https://zupimages.net/up/20/46/pdy1.jpg' alt="piscine"/>
                <img  className="photos" src='https://zupimages.net/up/20/46/dwt3.jpg' alt="2 amies discutent"/>
                <img className="photos" src='https://zupimages.net/up/20/46/vnk0.jpg' alt="filles en robes de soirée"/>
                <img className="photos" src='https://zupimages.net/up/20/46/qrnu.jpg' alt="3 filles"/>
                <img  className="photos" src='https://zupimages.net/up/20/46/8253.jpg' alt="platine"/>
                <img className="photos" src='https://zupimages.net/up/20/46/zfi0.jpg' alt="verre pétillant"/>
                <img className="photos" src='https://zupimages.net/up/20/46/4atb.jpg' alt="deux cocktail whisky"/>
                </div>
                </div>
                </div>
            <p className="caption">
            Cette énorme fête organisée sur le thême de la <i>Full Moon</i> était mémorable , des cocktails spéciaux ont était préparé a cette occasion là, DJ Cogno était au platine ! Et vous avez loupé ça ? Ne vous en faites pas , c'est photos aiguillerons votre imaginations, dans l'éspoir de vous voir à là prochaine occasion. 
            </p>
            <div className="opinion">
            <Opinion {...users}/>
            </div>
            </div>
            );

    }
    
}

export default Portefolio;
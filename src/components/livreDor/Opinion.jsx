import React from 'react';
import './Opinion.css';
import './App.jsx';

const catc = document.querySelector('.Note');
var i = 0;
const NewStar= document.createElement('span');
var newContent = document.createTextNode('&#x2605;');

function Opinion({ commentaire, name}){
    return(
        <div>
        <div className="tout">
            <div className='notice'>
                <div className='att'>
                <div className='texte'>
                    <div className="Note" id='note'>
                        <span class="star">&#x2605;</span>
                        <span class="star">&#x2605;</span>
                        <span class="star">&#x2605;</span>
                        <span class="star">&#x2605;</span>
                        <span class="star">&#x2605;</span>
                    </div>
                    <p className='citation'>"<i>{commentaire}</i>"</p>
                </div>
                </div>
                    <p className='blase'><small>{name}</small></p>
            </div>
        </div>
        <button className="more">voir plus</button>
        
        </div>
    );
}


export default Opinion;
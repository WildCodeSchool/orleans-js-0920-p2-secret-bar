import { Component } from 'react';
import Staff from './Staff';
import SectionTitle from '../section-title/SectionTitle';
import './StaffList.css';

const staff = [
    {
        name: "♕ Mr Louis D. ♕",
        image: "https://www.zupimages.net/up/20/45/59pn.png",
        quote: '" Serveur du mois depuis l\'ouverture, je saurai répondre à toutes vos demandes dans les plus brefs délais. "'
    },
    {
        name: "Mme Éléonore B.H",
        image: "https://zupimages.net/up/20/45/asy7.png",
        quote: '" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit quod aliquid libero earum, provident molestias nihil odit eligendi assumenda veniam recusandae. Fugit natus itaque id maxime perferendis nihil accusantium. "'
    },
    {
        name: "Mr Sylvain B.",
        image: "https://zupimages.net/up/20/45/semc.png",
        quote: '" Aujourd’hui, et bien c’est le jour de mon 111e anniversaire ! Mais hélas 111 ans ce fut un temps trop court à passer en compagnie de si excellents et si admirables hobbits… "'
    }
]

export default class StaffList extends Component{
    render(){
        return(
            <div className="ContainerStaff">
                <SectionTitle title="Nos Serveurs" color="white" />

                <div className="Staff">
                    {staff.map(person => (
                        <Staff key={person.name} {...person} />
                    ))}
                </div>
            </div>
        );
    }
}
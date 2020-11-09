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
        name: "Mme Éléonore B.H.",
        image: "https://zupimages.net/up/20/45/asy7.png",
        quote: '" C\'est un rêve...? Alors c\'est un très beau rêve... "'
    },
    {
        name: "Mr Sylvain B.",
        image: "https://zupimages.net/up/20/45/semc.png",
        quote: '" Si nous voulons réussir, nous devrons faire preuve de tact, de respect et d’une bonne dose de charme. C’est pourquoi vous devrez me laisser parler, moi. "'
    }
]

export default class StaffList extends Component{
    render(){
        return(
            <div className="ContainerStaff" data-aos="fade-up">
                <SectionTitle title="Nos Serveurs" color="white" />

                <div className="Staff" data-aos="fade-up">
                    {staff.map(person => (
                        <Staff key={person.name} {...person} />
                    ))}
                </div>
            </div>
        );
    }
}
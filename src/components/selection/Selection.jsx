import React from 'react'
import axios from 'axios';
import './Selection.css';
import AlcoolCard from './AlcoolCard';
import SectionTitle from '../section-title/SectionTitle';

export default class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktail: null,
            cocktail1: null,
            cocktail2: null
        }
        this.getInfo = this.getInfo.bind(this);

    }

    componentDidMount() {
        this.getInfo();
    }

    getInfo() {
        axios
        .get('https://cocktailsprojectapi.herokuapp.com/cocktails')
        .then(res => res.data)
        .then(data => {
            this.setState({ cocktail: data.filter(cocktail => cocktail.category !== "cocktail")[Math.floor(Math.random() * 42)] });
            this.setState({ cocktail1: data.filter(cocktail => cocktail.name !== this.state.cocktail.name && cocktail.category !== "cocktail")[Math.floor(Math.random() * 42)]});
            this.setState({ cocktail2: data.filter(cocktail => cocktail.name !== this.state.cocktail.name && cocktail.name !== this.state.cocktail1.name && cocktail.category !== "cocktail")[Math.floor(Math.random() * 42)] });
        })
        .catch(err => {
            console.error(err);
        });
    }
    
    render() {
        return (
            <div className="container-carousel" data-aos="fade-up">
                <SectionTitle title="Séléction du Jour" color="black"/>
                <div className="three-selections" data-aos="fade-up">
                    <div>
                        {this.state.cocktail ? (
                            <AlcoolCard
                                key={this.state.cocktail.name}
                                image={this.state.cocktail.image}
                                name={this.state.cocktail.name}
                                alcool={this.state.cocktail.alcool}
                                volume={this.state.cocktail.volume}
                                price={this.state.cocktail.price}
                            />
                        ) : 
                        <p className="load">Loading</p>
                        }
                    </div>
                    <div>
                        {this.state.cocktail1 ? (
                            <AlcoolCard 
                                key={this.state.cocktail1.name}
                                image={this.state.cocktail1.image}
                                name={this.state.cocktail1.name}
                                alcool={this.state.cocktail1.alcool}
                                volume={this.state.cocktail1.volume}
                                price={this.state.cocktail1.price}
                            />
                        ) : 
                        <p className="load">Loading</p>
                        }
                    </div>
                    <div>
                        {this.state.cocktail2 ? (
                            <AlcoolCard 
                                key={this.state.cocktail2.name}
                                image={this.state.cocktail2.image}
                                name={this.state.cocktail2.name}
                                alcool={this.state.cocktail2.alcool}
                                volume={this.state.cocktail2.volume}
                                price={this.state.cocktail2.price}
                            />
                        ) : 
                        <p className="load">Loading</p>
                        }
                    </div>
                </div>
            </div>
                
        );
    }
}

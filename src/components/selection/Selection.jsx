import React from 'react'
import axios from 'axios';
import './Selection.css';
import AlcoolCard from './AlcoolCard';
import SectionTitle from '../section-title/SectionTitle';

export default class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktail1: null,
            cocktail2: null,
            cocktail3: null,
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
            const customer = JSON.parse(localStorage.getItem("customer"));

            const tabCocktail1 = data.filter(cocktail => (cocktail.category !== "cocktail" && cocktail.alcool[0] === customer.alcools[0]));
            const tabCocktail2 = data.filter(cocktail => (cocktail.category !== "cocktail" && cocktail.alcool[0] === customer.alcools[1]));
            const tabCocktail3 = data.filter(cocktail => (cocktail.category !== "cocktail" && cocktail.alcool[0] === customer.alcools[2]));
            
            this.setState({cocktail1: tabCocktail1[Math.floor(Math.random()*(tabCocktail1.length))]});
            this.setState({cocktail2: tabCocktail2[Math.floor(Math.random()*(tabCocktail2.length))]});
            this.setState({cocktail3: tabCocktail3[Math.floor(Math.random()*(tabCocktail3.length))]});
        })
        .catch(err => {
            console.error(err);
        });
    }

    render() {
        return (
            <div className="container-carousel" data-aos="fade-up">
                <SectionTitle title="Votre sélection" color="black"/>
                <div className="three-selections" data-aos="fade-up">
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
                    <div>
                        {this.state.cocktail3 ? (
                            <AlcoolCard 
                                key={this.state.cocktail3.name}
                                image={this.state.cocktail3.image}
                                name={this.state.cocktail3.name}
                                alcool={this.state.cocktail3.alcool}
                                volume={this.state.cocktail3.volume}
                                price={this.state.cocktail3.price}
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

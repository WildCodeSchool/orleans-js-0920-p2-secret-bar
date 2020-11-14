import React from 'react';
import axios from 'axios';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AlcoolCard from '../Selection/AlcoolCard';
import './Accordion.css';
import SectionTitle from '../Section-title/SectionTitle';



class ControlledAccordions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      champagne: null,
      whiskies: null,
      wine: null,
      alcohols: null,
      beer: null,
      cocktails: null
    }
    this.getChampagne = this.getChampagne.bind(this);
    this.getWhiskies = this.getWhiskies.bind(this);
    this.getWine = this.getWine.bind(this);
    this.getAlcohols = this.getAlcohols.bind(this);
    this.getBeer = this.getBeer.bind(this);
    this.getCocktails = this.getCocktails.bind(this);
    
    
  }
  

  componentDidMount() {
    this.getChampagne();
    this.getWhiskies();
    this.getWine();
    this.getAlcohols();
    this.getBeer();
    this.getCocktails();
  };

  getChampagne() {
    axios
    .get('https://cocktailsprojectapi.herokuapp.com/cocktails')
    .then(res => res.data)
    .then(data => {
        this.setState({ champagne: data.filter(cocktail => cocktail.category === "champagne") });
        console.log(this.state.champagne)
    })
    .catch(err => {
        console.error(err);
    });
  }

  getWhiskies() {
    axios
    .get('https://cocktailsprojectapi.herokuapp.com/cocktails')
    .then(res => res.data)
    .then(data => {
        this.setState({ whiskies: data.filter(cocktail => cocktail.category === "whiskies") });
    })
    .catch(err => {
        console.error(err);
    });
  }

  getWine() {
    axios
    .get('https://cocktailsprojectapi.herokuapp.com/cocktails')
    .then(res => res.data)
    .then(data => {
        this.setState({ wine: data.filter(cocktail => cocktail.category === "vin") });
    })
    .catch(err => {
        console.error(err);
    });
  }

  getAlcohols() {
    axios
    .get('https://cocktailsprojectapi.herokuapp.com/cocktails')
    .then(res => res.data)
    .then(data => {
        this.setState({ alcohols: data.filter(cocktail => cocktail.category === "alcohols") });
    })
    .catch(err => {
        console.error(err);
    });
  }

  getBeer() {
    axios
    .get('https://cocktailsprojectapi.herokuapp.com/cocktails')
    .then(res => res.data)
    .then(data => {
        this.setState({ beer: data.filter(cocktail => cocktail.category === "beer") });
    })
    .catch(err => {
        console.error(err);
    });
  }

  getCocktails() {
    axios
    .get('https://cocktailsprojectapi.herokuapp.com/cocktails')
    .then(res => res.data)
    .then(data => {
        this.setState({ cocktails: data.filter(cocktail => cocktail.category === "cocktail") });
    })
    .catch(err => {
        console.error(err);
    });

  }

  render(){
    return (
      <div className="root1">
        <SectionTitle title="La carte" color="black"/>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>Nos Champagnes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className="test">
                {this.state.champagne ? (
                    <div className="three-col">
                        {this.state.champagne.map(item => 
                            <AlcoolCard 
                                key={item.name}
                                image={item.image}
                                name={item.name}
                                alcool={item.alcool}
                                volume={item.volume}
                                price={item.price}
                            />
                        )}
                    </div>   
                ) : 
                <p className="load">Loading</p>
                }
            </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography >Nos Whiskys</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div>
                  {this.state.whiskies ? (
                      <div className="three-col">
                          {this.state.whiskies.map(item => 
                              <AlcoolCard 
                                  key={item.name}
                                  image={item.image}
                                  name={item.name}
                                  alcool={item.alcool}
                                  volume={item.volume}
                                  price={item.price}
                              />
                          )}
                      </div> 
                  ) : 
                  <p className="load">Loading</p>
                  }
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography >Nos vins</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div>
                {this.state.wine ? (
                    <div className="three-col">
                        {this.state.wine.map(item => 
                            <AlcoolCard 
                                key={item.name}
                                image={item.image}
                                name={item.name}
                                alcool={item.alcool}
                                volume={item.volume}
                                price={item.price}
                            />
                        )}
                </div> 
                ) : 
                <p className="load">Loading</p>
                }
            </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography >Nos spiritueux</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div>
                {this.state.alcohols ? (
                    <div className="three-col">
                        {this.state.alcohols.map(item => 
                            <AlcoolCard 
                                key={item.name}
                                image={item.image}
                                name={item.name}
                                alcool={item.alcool}
                                volume={item.volume}
                                price={item.price}
                            />
                        )}
                    </div> 
                ) : 
                <p className="load">Loading</p>
                }
            </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography >Nos bières</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div>
                {this.state.beer ? (
                    <div className="three-col">
                        {this.state.beer.map(item => 
                            <AlcoolCard 
                                key={item.name}
                                image={item.image}
                                name={item.name}
                                alcool={item.alcool}
                                volume={item.volume}
                                price={item.price}
                            />
                        )}
                    </div> 
                ) : 
                <p className="load">Loading</p>
                }
            </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography >Nos cocktails</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div>
                {this.state.cocktails ? (
                    <div className="three-col">
                        {this.state.cocktails.map(item => 
                            <AlcoolCard 
                                key={item.name}
                                image={item.image}
                                name={item.name}
                                alcool={item.alcool}
                                volume={item.volume}
                                price={item.price}
                            />
                        )}
                    </div> 
                ) : 
                <p className="load">Loading</p>
                }
            </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

export default ControlledAccordions;

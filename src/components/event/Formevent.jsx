import React from 'react';
import SectionTitle from '../Section-title/SectionTitle';
import Popevent from './Popevent';
import './Popevent.css';

class Formevent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showPopevent: false,
      message: 'Indiquez-nous vos souhaits (cocktail, prestation,...)',
    };
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.getTodayDate = this.getTodayDate.bind(this);
  }

  handleChangeMessage(e) {
    this.setState({
      message: e.target.message,
    });
  }

  togglePopevent() {
    this.setState({
      showPopevent: !this.state.showPopevent,
    });
  }

  getTodayDate() {
    const day = this.state.date.getDate() < 10? '0'+this.state.date.getDate() : this.state.date.getDate();
    const month = this.state.date.getMonth() + 1;
    const year = this.state.date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  render() {
    return (
      <section className="eventSection" data-aos="fade-up">
        <SectionTitle title="Évènement" color="white" />
        <div className="eventEvent">
          <img
            className="image"
            src="https://zupimages.net/up/20/44/emj7.png"
            alt="imgEvent"
          />

          <div className="presentationEvent">
            <h3 className="titleEvent">White Party</h3>
            <p className="descriptionEvent">
              Tenue chic et blanche exigée, de nombreuses surprises et des
              cocktails exclusifs vous attendent le {this.getTodayDate()} au
              Wild Code Bar
            </p>

            <textarea
              type="text"
              id="message"
              cols="44"
              rows="4"
              placeholder={this.state.message}
              onChange={this.handleChangeMessage}
            />

            <button
              type="buttonEvent"
              value="Réserver"
              className="buttonEvent"
              onClick={this.togglePopevent.bind(this)}
            >
              Réserver
            </button>

            {this.state.showPopevent ? (
              <Popevent
                text='Votre réservation pour la "Soirée Blanche" est confirmée. Notre chauffeur viendra vous récupérer le soir venu à 19h30.'
                closePopevent={this.togglePopevent.bind(this)}
              />
            ) : null}
          </div>
        </div>
      </section>
    );
  }
}

export default Formevent;

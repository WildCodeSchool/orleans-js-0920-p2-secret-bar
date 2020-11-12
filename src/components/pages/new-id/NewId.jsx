import React from 'react';
import "./NewId.css";
import Lock from "../../image/lock.js"

class NewId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      email: '',
      solution: "042",
      solution1: 0,
      solution2: 0,
      solution3: 0,
      message: ""
    };

    this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
    this.handleChangeLastname = this.handleChangeLastname.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSolution1 = this.handleChangeSolution1.bind(this);
    this.handleChangeSolution2 = this.handleChangeSolution2.bind(this);
    this.handleChangeSolution3 = this.handleChangeSolution3.bind(this);
    this.sub = this.sub.bind(this);
  }

  handleChangeFirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
  }

  handleChangeLastname(e) {
    this.setState({
      lastname: e.target.value,
    });
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleChangeSolution1(e) {
    this.setState({
      solution1: e.target.value,
    });
  }

  handleChangeSolution2(e) {
    this.setState({
      solution2: e.target.value,
    });
  }

  handleChangeSolution3(e) {
    this.setState({
      solution3: e.target.value,
    });
  }

  sub(e) {

    e.preventDefault();
    `${this.state.solution1}${this.state.solution2}${this.state.solution3}` === this.state.solution ? this.setState({ message: "BRAVO ! Nous reviendrons vers vous très vite." }) : this.setState({ message: "RETENTE TA CHANCE !" });
  }

  render() {
    
    const val = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    return (
      <section className="pageId">
        <div className="enigme">
          <div className="title_lock">  
            <Lock />
          </div>
        
          <h2 className="title_mobile">Indices</h2>
          <div className="indices_container">
            <div className="indice"><Lock /><p><span>6 | 8 | 2</span> Un des numéros est correct et bien placé.</p></div>
            <div className="indice"><Lock /><p><span>6 | 1 | 4</span> Un des numéros est correct mais mal placé.</p></div>
            <div className="indice"><Lock /><p><span>2 | 0 | 6</span> Deux des numéros sont corrects mais mal placés.</p></div>
            <div className="indice"><Lock /><p><span>7 | 3 | 8</span> Aucun des numéros n'est correct...</p></div>
            <div className="indice"><Lock /><p><span>7 | 8 | 0</span> Un des numéros est correct mais mal placé.</p></div>
          </div>
        </div>
        <form className="formulary">
          <div className="data_formulary">
          <h1>Demande d'accès au site</h1>
          <div className="newId">
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Prénom"
              value={this.state.firstnane}
              onChange={this.handleChangeFirstname}
            />
          </div>
          <div className="newId">
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Nom"
              value={this.state.lastname}
              onChange={this.handleChangeLastname}
            />
          </div>
          <div className="newId">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          </div>
          <div className="code_formulary">
          <h2>Saurez-vous craquer le code ?</h2>

          <div className="code">
            <h3>Votre code ...</h3>
            {this.state.message
              ? <div className="message" style={this.state.message ==="RETENTE TA CHANCE !" ? {color:"red"} : {color:"lightgreen"}}>{this.state.message}</div>
              : ""
            }

          </div>

          <div className="newId">

            <label>1</label>
            <div className="number1">
              <select
                type="number"
                id="solution1"
                name="solution1"
                value={this.state.solution1}
                onChange={this.handleChangeSolution1}
              >{
                  val.map((value, index) => {
                    return <option key={index} value={value}>{value}</option>
                  })
                }</select>
              <label>2</label>
              <select
                type="number"
                id="solution2"
                name="solution2"
                value={this.state.solution2}
                onChange={this.handleChangeSolution2}
              >{
                  val.map((value, index) => {
                    return <option key={index} value={value}>{value}</option>
                  })
                }</select>
              <label>3</label>
              <select value={this.state.solution3} onChange={this.handleChangeSolution3}>
                {
                  val.map((value, index) => {
                    return <option key={index} value={value}>{value}</option>
                  })
                }
              </select>
            </div>
            </div>
          </div>
          <button className="submit" onClick={this.sub}>Envoyer</button>
        </form>
      </section>
    );
  }
}

export default NewId;

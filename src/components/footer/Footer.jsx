import { Component } from "react";
import './Footer.css';


export default class Footer extends Component{
    render(){
        return(
            <footer className="Footer">
                <h5 className="Credits">©Wild Code School Orléans JS 2020 - All right reserved</h5>
                <p className="Students">Théo A. - Guillaume C. - Thibault L.P. - Jordy N. - Samia S.</p>
            </footer>
        );
    }
}
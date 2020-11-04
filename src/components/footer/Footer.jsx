import { Component } from "react";
import './Footer.css';

export default class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <h5 className="Credits">©Wild Code School Orléans 2020 - All right reserved</h5>
                <p className="Students">Theo A. - Guillaume C. - Thibault L - Jordy N. - Samia S.</p>
            </div>
        );
    }
}
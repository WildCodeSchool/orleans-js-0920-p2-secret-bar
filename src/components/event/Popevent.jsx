import React from 'react';
import './Popevent.css';

class Popevent extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h2>{this.props.text}</h2>

          <button className="buttonPop" onClick={this.props.closePopevent}>
            {' '}
            Clôturer{' '}
          </button>
        </div>
      </div>
    );
  }
}
export default Popevent;

import React from 'react';
import './Opinion.css';

const users = [
    {
      name: 'Thibault LE PARC',
      comment: ' Splendide '
    },
    {
      name: 'Samia SAADANI',
      comment: ' Quelle ambiance ! J\'ai tellement dansé que je n\'ai même pas profité du reste... '
    },
    {
      name: 'Guillaume COUTURIER',
      comment: " J'ai bien cru que je n'allais jamais rentrer chez moi rejoindre ma femme, je suis tombé amoureux 5 fois. "
    },
    {
      name: 'Théo ATLANI',
      comment: ' Depuis cette soirée, je note tous leurs évenements dans mon agenda pour n\'en rater aucun ! '
    }
  ];

class Opinion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            online:false,
        };
    }
    render(){
        return(
            <div className="avis">
            <div className="moreCaption">
                <div className='notice'>
                    <div className='att'>
                        <div className='texte'>
                            <div className="Note" id='note'>
                                <span class="star">&#x2605;</span>
                                <span class="star">&#x2605;</span>
                                <span class="star">&#x2605;</span>
                                <span class="star">&#x2605;</span>
                            </div>
                            <p className='citation'>" <i>J'ai passé une bonne soirée.</i> "</p>
                        </div>
                        <p className='blase'><small>Jordy Ngoma</small></p>
                    </div>
                </div>
                </div>
                <div>
                    <div className={this.state.online ? "moreCaption":"status"}>
                        {users.map(item => (
                            <div className='notice'>
                                <div className='att'>
                                    <div className='texte'>
                                        <div className="Note" id='note'>
                                            <span class="star">&#x2605;</span>
                                            <span class="star">&#x2605;</span>
                                            <span class="star">&#x2605;</span>
                                            <span class="star">&#x2605;</span>
                                            <span class="star">&#x2605;</span>
                                        </div>
                                        <p className='citation'>"<i>{item.comment}</i>"</p>
                                    </div>
                                    <p className='blase'><small>{item.name}</small></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <button className="more" onClick = { () => {
                    const newOnline = !this.state.online;
                        this.setState({ online : newOnline });
                    }}
                    >{ this.state.online ? "voir moins":"voir plus"}
                </button>
            </div>
        );
    }
}


export default Opinion;
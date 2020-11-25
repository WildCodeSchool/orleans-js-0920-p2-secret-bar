import React from 'react';
import './Opinion.css';



const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      comment: 'splendide',
      note:3,
    },
    {
      name: 'Nellie Caldwell',
      comment: 'La soirée était formidable',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true,
    },
    {
      name: 'Vernon Mason',
      comment: 'La soirée était formidable',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true
    },
    {
      name: 'Erica Hunt',
      comment: "j'ai bien cru que je n'allais jamais rentrer chez moi rejoindre ma femme, je suis tombé amoureux 5 fois.",
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false
    },
    {
      name: 'Juanita Phillips',
      comment: 'je risque pas de louper la prochaine',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true
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
            <div>
            <div className="tout">
                <div className='noti'>
                    
                    <div className='text'>
                        <div className="Note" id='note'>
                            <span class="star">&#x2605;</span>
                            <span class="star">&#x2605;</span>
                            <span class="star">&#x2605;</span>
                            <span class="star">&#x2605;</span>
                        </div>
                        <p className='quote'>"<i>j'ai passé une bonne soirée</i>"</p>
                    </div>
                    
                        <p className='blase'><small>jordy ngoma</small></p>
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
                </div>
                    <p className='blase'><small>{item.name}</small></p>
                </div>
                ))}
            </div>
            </div>
            <button className="more" onClick = { event => {
            const newOnline = !this.state.online;
            this.setState({ online : newOnline });
            }}
            >{ this.state.online ? "voir moin":"voir plus"}</button>
            
            </div>
        );
    }
}


export default Opinion;
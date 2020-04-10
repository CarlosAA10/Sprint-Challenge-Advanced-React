import React from 'react'; 
import PlayerInfo from './PlayerInfo'; 

class PlayerCard extends React.Component {
    constructor() {
        super(); 
        this.state = {
            info: '',
        }
    }

    render() {
        return(
            <div>
                <h2>The Players:</h2>
                <div>
                    {this.props.players.map(player => {
                       return <PlayerInfo data-testid={player.name} player={player} key={player.id} /> 
                    })}
                </div>
            </div>
        )
    }
}

export default PlayerCard; 
import React from 'react'; 

const PlayerInfo = (props) => {
    return(
        <div>
            <h2> {props.player.name} </h2>
            <p> {props.player.name} has {props.player.searches} searches on Xbox Live </p>
    <p> They uh a play foh da kuntry of {props.player.country} </p>
        </div>
    )
}

export default PlayerInfo; 
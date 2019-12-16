import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//     width: 500px;
//     margin: 0 auto;
//     background-color: black;
//     color: white;
//     border: 4px solid green;
//     margin-top: 5px;
// `;

const Display = props => {
    return (
        <div>
            {props.players.map(player => (
                <div key={player.id} >
                    <h1>Player: {player.name}</h1>  
                    <p>Country: {player.country}</p>  
                    <p>Number of Searches: {player.searches}</p>
                 </div>
            ))}
        </div>
    )
}

export default Display;
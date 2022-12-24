import React from 'react';
import ReactPlayer from 'react-player';
import './style.css';

function Player () {
    return (
        <div className='player-main-container'>
            <div className='player-wrapper'>
                <ReactPlayer url="https://www.youtube.com/watch?v=oliPOW5scDo&ab_channel=RaghavAdhithya" width='100%' height='800px'/>
            </div>
        </div>
    )
}

export default Player;
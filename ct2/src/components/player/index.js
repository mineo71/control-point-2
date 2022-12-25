import React from 'react';
import ReactPlayer from 'react-player';
import './style.css';

function Player () {
    return (
        <div className='player-main-container'>
            <div className='player-wrapper'>
                <ReactPlayer url="https://music.youtube.com/watch?v=x0z1Q8Lareg&feature=share" width='100%' height='700px'/>
            </div>
        </div>
    )
}

export default Player;
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

function AudioComponent() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playLabel, setPlayLable] = useState("Play")

    const handlePlaying = () => {
         if(isPlaying) {
            setIsPlaying(false);
            setPlayLable("Play");
         } else{
            setIsPlaying(true);
            setPlayLable("Stop");
         } 
    }

    return (
        <div>
            <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url="https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
                playing={isPlaying}
                width={0}
                height={0}
                />
            </div>
            <button onClick={handlePlaying}>{playLabel}</button>
        </div>
    );
}

export default AudioComponent;

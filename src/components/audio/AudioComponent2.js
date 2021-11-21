import ReactAudioPlayer from 'react-audio-player';

function AudioComponent2() {
    return (
        <div>
            <ReactAudioPlayer
                src="https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
                controls
            />
        </div>
    );
}

export default AudioComponent2;
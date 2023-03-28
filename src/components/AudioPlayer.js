import React, { useEffect, useState } from "react";

function AudioPlayer(props) {
    const [audio] = useState(new Audio(props.source));
    const [isPlaying, setPlaying] = useState(false);

    useEffect(() => {
        isPlaying ? audio.play() : audio.pause();
    });

    function handleClick() {
        setPlaying(!isPlaying);
    }

    function handleEnded() {
        setPlaying(false);
        audio.stop();
    }

    return (
        <>
            <button onClick={handleClick}>
                {isPlaying ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-hunter">
                    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-hunter">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" /></svg>)}
            </button>

            <audio onEnded={handleEnded} loop={false}>
                <source src={props.source} />
            </audio>
        </>
    );
}

export default AudioPlayer;
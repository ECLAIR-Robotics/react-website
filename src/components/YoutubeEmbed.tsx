import React from 'react'
import '../styles/youtubeEmbed.css';
function YoutubeEmbed() {
    return (
        <div className = 'youtube-embed'>
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/on2EzsO3MpQ"
                title="YouTube video player"
                allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
        </div>
    )
}

export default YoutubeEmbed

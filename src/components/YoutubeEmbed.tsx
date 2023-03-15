import React from 'react'
import { Card, CardMedia } from '@mui/material'
function YoutubeEmbed() {
    return (
        <div>
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/on2EzsO3MpQ"
                title="YouTube video player"
                allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
        </div>
    )
}

export default YoutubeEmbed

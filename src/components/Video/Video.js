import React from 'react'
import './Video.scss'

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

/**
 * There's a neat CSS trick used here to make sure this video componenet looks good in screens 
 * of all sizes. It forces the screen to have 16:9 ratio in all i.e. the ::before selector we 
 * use. We also set a padding-top to 9/16 (56.25%). The trick is to understand that all percentage
 * values in padding and margin always refer to the element’s width. Eg - 
 * width: 100px; padding-top: 10%; (the pddding will always equal 10px. If it increases, the padding
 * increases too). 
 */
const video = (props) => {
    if (!props.id) {
        return null
    }

    // Add ?&autoplay=1 to autoplay when everything's built
    const embedURL = `${BASE_EMBED_URL}${props.id}`
    console.log(embedURL)
    return (
        <div className="video-container">
            <div className="video">
                <iframe className="video-player" width={'560'} height={'315'} src={embedURL} 
                    frameBorder='0' allow='autoplay; encrypted-media' 
                    allowFullScreen title="unique_title"/>
            </div>
        </div>

    )
}

export default video
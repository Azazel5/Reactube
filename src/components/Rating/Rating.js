import React from 'react'
import './Rating.scss'
import { Icon, Progress } from 'semantic-ui-react'

const rating = (props) => {
    let progress = null;
    if (props.likeCount && props.dislikeCount) {
        const percent = (props.likeCount / (props.likeCount + props.dislikeCount)) * 100
        console.log(percent)
        progress = <Progress className="progress" percent={percent} size="tiny" />
    }
    return (
        <div className="rating">
            <div className="thumbs-up">
                <Icon name="thumbs up outline" />
                <span>{props.likeCount}</span>
            </div>
            <div className="thumbs-down">
                <Icon name="thumbs down outline" />
                <span>{props.dislikeCount}</span>
            </div>
            {progress}
        </div>
    )
}

export default rating
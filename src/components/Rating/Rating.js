import React from 'react'
import './Rating.scss'
import { Icon, Progress } from 'semantic-ui-react'
import {getShortNumberString} from '../../services/number/number-format';

// Calculate percentages based on floats then use the string like-dislike count to
// display prettily 
const rating = (props) => {
    let rating = null;
    let likeCount = props.likeCount !== 0 ? props.likeCount: null 
    let dislikeCount = null  
    if (props.likeCount && props.dislikeCount) {
        const amountLikes = parseFloat(props.likeCount);
        const amountDislikes = parseFloat(props.dislikeCount);
        const percent = 100.0 * (amountLikes / (amountLikes + amountDislikes))
        console.log(percent)
        likeCount = getShortNumberString(amountLikes)
        dislikeCount = getShortNumberString(amountDislikes)
        rating = <Progress className="progress" percent={percent} size="tiny" />
    }
    return (
        <div className="rating">
            <div className="thumbs-up">
                <Icon name="thumbs up outline" />
                <span>{likeCount}</span>
            </div>
            <div className="thumbs-down">
                <Icon name="thumbs down outline" />
                <span>{dislikeCount}</span>
            </div>
            {rating}
        </div>
    )
}

export default rating
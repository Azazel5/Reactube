import React from 'react'
import './VideoMetadata.scss'
import { Icon, Divider, Button } from 'semantic-ui-react'
import Rating from '../Rating/Rating'

const VideoMetadata = (props) => {
    const viewCount = Number(props.viewCount).toLocaleString() || ''
    return (
        <div className="video-metadata">
            <h3>Video Title</h3>
            <div className="video-stats">
                <span>{viewCount} views</span>
                <div className="video-actions">
                    <Rating likeCount={1000} dislikeCount={100} />
                    <Button basic icon labelPosition='left'>
                        <Icon name='share' />
                        Share
                    </Button>
                    <Button basic icon>
                        <Icon name='add circle' />
                    </Button>
                    <Button basic icon>
                        <Icon name='ellipsis horizontal' />
                    </Button>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default VideoMetadata
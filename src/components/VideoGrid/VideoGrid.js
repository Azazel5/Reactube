import React from 'react'
import './VideoGrid.scss'
import VideoPreview from '../VideoPreview/VideoPreview'
import {Divider} from 'semantic-ui-react'
import VideoGridHeader from './VideoGridHeader/VideoGridHeader'

const videoGrid = (props) => {
    const divider = props.hideDivider ? null: <Divider />
    return (
        <React.Fragment>
            <VideoGridHeader title={props.title}/>
            <div className="video-grid">
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
            </div>
            {divider}
        </React.Fragment>
    )
}

export default videoGrid
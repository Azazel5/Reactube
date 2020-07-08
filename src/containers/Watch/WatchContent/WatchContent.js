import React, { Component } from 'react'
import './WatchContent.scss'
import Video from '../../../components/Video/Video'
import RelatedVideos from '../../../components/RelatedVideos/RelatedVideos'
import VideoMetadata from '../../../components/VideoMetadata/VideoMetadata'
import VideoInfoBox from '../../../components/VideoInfoBox/VideoInfoBox'
import Comments from '../../Comments/Comments'
import {getVideoById} from '../../../store/reducers/video'
import {connect} from 'react-redux'

class WatchContent extends Component {
    render() {
        if(!this.props.video) {
            return <div />
        }
        return (
            <div className="watch-grid">
                <Video className="video" id={this.props.videoId} />
                <VideoMetadata className='metadata' video={this.props.video} />
                <VideoInfoBox className="video-info-box" video={this.props.video} />
                <Comments className="comments" />
                <RelatedVideos className="relatedVideos" />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        video: getVideoById(state, props.videoId)
    }
}

export default connect(mapStateToProps, null)(WatchContent)
import React, { Component } from 'react'
import './VideoPreview.scss'
import { Image } from 'semantic-ui-react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { getShortNumberString } from '../../services/number/number-format'
import { getVideoDurationString } from '../../services/date/date-format'
import { Link } from 'react-router-dom'


TimeAgo.locale(en)
const timeAgo = new TimeAgo('en-US')

class VideoPreview extends Component {
    // This function is static because it isn't specific to a VideoPreview instance. Rather, it 
    // applies to the class itself.
    static getFormattedViewAndTime(video) {
        const publicationDate = new Date(video.snippet.publishedAt)
        const viewCount = video.statistics ? video.statistics.viewCount : null
        if (viewCount) {
            const viewCountShort = getShortNumberString(video.statistics.viewCount)
            return `${viewCountShort} views • ${timeAgo.format(publicationDate)}`
        }

        return ''
    }

    render() {
        const video = this.props.video
        if (!video) {
            return <div />
        }

        const duration = video.contentDetails ? video.contentDetails.duration : null;
        const videoDuration = getVideoDurationString(duration)
        const viewAndTimeString = VideoPreview.getFormattedViewAndTime(video)
        const horizontal = this.props.horizontal ? 'horizontal' : null
        return (
            <Link to={{pathname: this.props.pathname, search: this.props.search}}>
                <div className={['video-preview', horizontal].join(' ')}>
                    <div className="image-container">
                        <Image src={video.snippet.thumbnails.medium.url} />
                        <div className="time-label">
                            <span>{videoDuration}</span>
                        </div>
                    </div>
                    <div className="video-info">
                        <div className="semi-bold show-max-two-lines">{video.snippet.title}</div>
                        <div className="video-preview-metadata-container">
                            <div className="channel-title">{video.snippet.channelTitle}</div>
                            <div><span>{viewAndTimeString}</span></div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default VideoPreview
import React from 'react'
import './NextUpVideo.scss'
import VideoPreview from '../../VideoPreview/VideoPreview'
import {Checkbox, Divider} from 'semantic-ui-react'

const nextUpVideo = (props) => {
    return (
        <React.Fragment>
            <div className="next-up-component">
                <h4>Up next</h4>
                <div className="up-next-component">
                    <span>Autoplay</span>
                    <Checkbox toggle defaultChecked/>
                </div>
            </div>

            <VideoPreview horizontal/>
            <Divider />
        </React.Fragment>
    )
}

export default nextUpVideo
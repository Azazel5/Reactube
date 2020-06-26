import React from 'react'
import './Subscription.scss'
import { Icon, Menu, Image } from 'semantic-ui-react';

const subscription = (props) => {
    let rightElement = null;
    const { broadcasting, amountVideos } = props
    if (broadcasting) {
        rightElement =  <Icon name="signal"/>;
    } else if (amountVideos) {
        rightElement = <span className="new-videos-count">{amountVideos}</span>
    }

    return (
        <Menu.Item>
            <div className="subscription">
                <div>
                    <Image src='http://via.placeholder.com/28x28' avatar />
                    <span>{props.label}</span>
                </div>
                {rightElement}
            </div>
        </Menu.Item>
    )
}

export default subscription
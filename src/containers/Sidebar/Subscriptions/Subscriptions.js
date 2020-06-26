import React, { Component } from 'react'
import Subscription from './Subscription/Subscription'
import { Divider } from 'semantic-ui-react'
import SidebarHeader from '../SidebarHeader/SidebarHeader'

class Subscriptions extends Component {
    render() {
        return (
            <React.Fragment>
                <SidebarHeader title="Subscriptions" />
                <Subscription label="Chillhop music" broadcasting />
                <Subscription label="FreeCodeCamp" amountVideos={10} />
                <Subscription label="TEDx" amountVideos={23} />
                <Subscription label="Udacity" amountVideos={4} />
                <Subscription label="Traversy Media" amountVideos={20} />
                <Divider />
            </React.Fragment>
        )
    }
}

export default Subscriptions
import React, { Component } from 'react'
import './Sidebar.scss'
import { Menu, Divider } from 'semantic-ui-react'
import SidebarItem from './SidebarItem/SidebarItem'
import SidebarHeader from './SidebarHeader/SidebarHeader'
import Subscriptions from './Subscriptions/Subscriptions'
import SidebarFooter from './SidebarFooter/SidebarFooter'

class Sidebar extends Component {
    render() {
        return (
            <Menu borderless vertical stackable fixed="left" className="side-nav">
                <SidebarItem highlight={true} label='Home' icon='home' />
                <SidebarItem label='Trending' icon='fire' />
                <SidebarItem label='Followers' icon='spy' />
                <Divider />

                <SidebarHeader title="Library"/>
                <SidebarItem label='History' icon='history' />
                <SidebarItem label='Watch later' icon='clock' />
                <SidebarItem label='Liked videos' icon='thumbs up' />
                <Divider />

                <Subscriptions />

                <SidebarHeader title="More from youtube"/>
                <SidebarItem label='Movies and Shows' icon='film' />
                <Divider />

                <SidebarItem label='Report history' icon='flag' />
                <SidebarItem label='Help' icon='help circle' />
                <SidebarItem label='Send feedback' icon='comment' />
                <Divider />

                <SidebarFooter />
            </Menu>
        )
    }
}

export default Sidebar
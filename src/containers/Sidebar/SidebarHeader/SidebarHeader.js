import React from 'react'
import './SidebarHeader.scss'
import { Menu } from 'semantic-ui-react'

const sidebarHeader = (props) => {
    const heading = props.title ? props.title.toUpperCase(): ''
    return (
        <Menu.Item>
            <Menu.Header className="sidebar-header">{heading}</Menu.Header>
        </Menu.Item>
    )
}

export default sidebarHeader
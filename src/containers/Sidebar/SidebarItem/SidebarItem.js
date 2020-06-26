import React from 'react'
import './SidebarItem.scss'
import { Menu, Icon } from 'semantic-ui-react'

const sidebarItem = (props) => {
    const highlight = props.highlight ? 'highlight-item' : null
    return (
        <Menu.Item className={['sidebar-item', highlight].join(' ')}>
            <div className="sidebar-item-alignment-container">
                <span><Icon size="large" name={props.icon} /></span>
                <span>{props.label}</span>
            </div>
        </Menu.Item>
    )
}

export default sidebarItem
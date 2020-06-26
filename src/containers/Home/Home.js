import React, { Component } from 'react'
import './Home.scss'
import VideoGrid from '../../components/VideoGrid/VideoGrid'
import Sidebar from '../Sidebar/Sidebar'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Sidebar />
                <div className="responsive-video-grid-container">
                    <VideoGrid title="Trending"/>
                    <VideoGrid title='Autos & Vehicles' hideDivider/>
                </div>
            </div>
        )
    }
}

export default Home 
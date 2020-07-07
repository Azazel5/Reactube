import React, { Component } from 'react'
import './HomeContent.scss'
import VideoGrid from '../../../components/VideoGrid/VideoGrid'
import { getMostPopularVideos, getVideosByCategory } from '../../../store/reducers/video'
import { connect } from 'react-redux'
import { InfiniteScroll } from '../../../components/InfiniteScroll/InfiniteScroll'

const AMOUNT_TRENDING_VIDEOS = 12

class HomeContent extends Component {
    getTrendingVideos() {
        return this.props.mostPopularVideos.slice(0, AMOUNT_TRENDING_VIDEOS)
    }

    getVideoGridsForCategories() {
        const categoryTitles = Object.keys(this.props.videosByCategory || {});
        return categoryTitles.map((categoryTitle,index) => {
          const videos = this.props.videosByCategory[categoryTitle];
          const hideDivider = index === categoryTitles.length - 1;
          return <VideoGrid title={categoryTitle} videos={videos} key={categoryTitle} hideDivider={hideDivider}/>;
        });
      }

    render() {
        const trendingVideos = this.getTrendingVideos()
        const categoryGrids = this.getVideoGridsForCategories()

        return (
            <div className="home-content">
                <div className="responsive-video-grid-container">
                    <InfiniteScroll 
                        showLoader={this.props.showLoader}
                        bottomReachedCallback={this.props.bottomReachedCallback}>
                        <VideoGrid title="Trending" videos={trendingVideos} />
                        {categoryGrids}
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mostPopularVideos: getMostPopularVideos(state),
        videosByCategory: getVideosByCategory(state)
    }
}

export default connect(mapStateToProps, null)(HomeContent)
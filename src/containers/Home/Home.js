import React, { Component } from 'react'
import './Home.scss'
import Sidebar from '../Sidebar/Sidebar'
import HomeContent from './HomeContent/HomeContent'
import { connect } from 'react-redux'
import * as videoActions from '../../store/actions/video'
import { bindActionCreators } from 'redux'
import { getYoutubeLibrary } from '../../store/reducers/api'
import { getVideoCategoryIds, videoCategoriesLoaded, videoByCategoriesLoaded } from '../../store/reducers/video'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIndex: 0,
    };
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    } else if (this.props.videoCategories !== prevProps.videoCategories) {
      this.fetchVideosByCategory();
    }
  }

  fetchCategoriesAndMostPopularVideos() {
    this.props.fetchMostPopularVideos();
    this.props.fetchVideoCategories();
  }

  fetchVideosByCategory() {
    const categoryStartIndex = this.state.categoryIndex;
    const categories = this.props.videoCategories.slice(categoryStartIndex, categoryStartIndex + 3);
    this.props.fetchMostPopularVideosByCategories(categories);
    this.setState(prevState => {
      return {
        categoryIndex: prevState.categoryIndex + 3,
      };
    });
  }

  // Show loader if things have been loaded, but there's more to load
  shouldShowLoader = () => {
    if(this.props.videoCategoriesLoaded && this.props.videoByCategoriesLoaded) {
      return this.state.categoryIndex < this.props.videoCategories.length
    }

    return false 
  }

  bottomReachedCallback = () => {
    if(!this.props.videoCategoriesLoaded) return 
    this.fetchVideosByCategory()
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <HomeContent showLoader={this.shouldShowLoader()} bottomReachedCallback={this.bottomReachedCallback}/>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibrary(state),
    videoCategories: getVideoCategoryIds(state), 
    videoCategoriesLoaded: videoCategoriesLoaded(state), 
    videoByCategoriesLoaded: videoByCategoriesLoaded(state)
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  const fetchVideoCategories = videoActions.categories.request;
  const fetchMostPopularVideosByCategories = videoActions.mostPopularByCategory.request
  return bindActionCreators({
    fetchMostPopularVideos, fetchVideoCategories, fetchMostPopularVideosByCategories
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
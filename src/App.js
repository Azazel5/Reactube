import React, { Component } from 'react'
import Home from './containers/Home/Home'
import AppLayout from './components/AppLayout/AppLayout'
import Watch from './containers/Watch/Watch'
import { Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { youtubeLibraryLoaded } from './store/actions/api'

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class App extends Component {
  componentDidMount() {
    this.loadYoutubeApi()
  }

  /**
   * Here we are manually creating a script tag to use Google's CDN for the fetching of data, without 
   * performing fetch calls. There is no npm library for this. 
   */
  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }

  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/watch" component={Watch} />
          <Route path="/" component={Home} />
        </Switch>
      </AppLayout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
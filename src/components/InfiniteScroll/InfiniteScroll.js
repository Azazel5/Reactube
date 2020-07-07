import React from 'react';
import {Waypoint} from 'react-waypoint';
import {Loader} from 'semantic-ui-react';
import './InfiniteScroll.scss';

// React waypoint: an easy way to implement infinite scroll
export function InfiniteScroll(props) {
    return (
        <>
            {props.children}
            <Waypoint onEnter={props.bottomReachedCallback}>
                <div className="loader-container">
                    <Loader active={props.showLoader} inline="centered"/>
                </div>
            </Waypoint>
        </>
    )
}
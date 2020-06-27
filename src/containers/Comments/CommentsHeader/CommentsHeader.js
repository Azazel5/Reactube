import React from 'react'
import './CommentsHeader.scss'
import { Button, Icon } from 'semantic-ui-react'

const commentsHeader = (props) => {
    return (
        <div className="comments-header">
            <h4>{props.amountComments} Comments</h4>
            <Button basic compact icon labelPosition="left">
                <Icon name="align left" />
                Sort by
            </Button>
        </div>
    )
}

export default commentsHeader
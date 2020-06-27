import React, {Component} from 'react'
import CommentsHeader from './CommentsHeader/CommentsHeader'
import AddComment from './AddComment/AddComment'
import Comment from './Comment/Comment'

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
        <div>
            <CommentsHeader amountComments={this.props.amountComments}/>
            <AddComment />
            <Comment />
            <Comment />
            <Comment />
        </div>
        )
    }
}

export default Comments
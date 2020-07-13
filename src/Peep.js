import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class Peep extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, body, created_at, likes, updated, user } = this.props.post;
    return (
      <div>
        <p>{body}</p>
        <p>Posted by {user.handle} <Moment fromNow tz="Europe/London">{created_at}</Moment></p>
        { this.props.post.likes.length > 0 ? (
          <p>{this.props.post.likes.length}</p>
        ) : ('')}
      </div>
    )
  }
}

export default Peep;

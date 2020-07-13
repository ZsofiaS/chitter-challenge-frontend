import React, { Component } from 'react';

class Peep extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.post)
    const { body, date, id, likes, updated, user } = this.props.post;
    return (
      <div>
        <p>{body}</p>
        <p>Posted by {user.handle}</p>
        { this.props.post.likes.length > 0 ? (
          <p>{this.props.post.likes.length}</p>
        ) : ('')}

      </div>
    )
  }
}

export default Peep;

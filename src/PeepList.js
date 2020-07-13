import React, { Component } from 'react';

class PeepList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const {peeps} = this.props;
    return (
      <ul>
      {this.props.peeps.map((post) => {
        return (
          <li key={post.id} id={post.id}>{post.body}</li>
        )
      })}
      </ul>
    )
  }
}

export default PeepList;

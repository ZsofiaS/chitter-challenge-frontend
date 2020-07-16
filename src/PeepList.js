import React, { Component } from 'react';
import Peep from './Peep';

class PeepList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  clickHandler = (id) => {
    console.log(id);
    this.props.fetchIndividualPeep(id);
  }

  render() {
    const {peeps} = this.props;
    return (
      <ul className="peepList">
      {peeps.map((post) => {
        return (
          <li className="peep" key={post.id} id={post.id} onClick={() => this.clickHandler(post.id)}>
            <Peep post={post}/>
          </li>
        )
      })}
      </ul>
    )
  }
}

export default PeepList;

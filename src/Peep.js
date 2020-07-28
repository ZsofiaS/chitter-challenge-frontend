import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Peep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peep: {}
    }
  }

  likeHandler = (event, id) => {
    event.stopPropagation();
    this.props.likeHandler(id);
  }

  render() {
    const { id, body, created_at, likes, updated, user } = this.props.post;
    console.log(this.props.post);
    return (
      <>
        <p className="peepContent">{body}</p>
        <p>Posted by <span className="userName">{user.handle} </span><Moment fromNow tz="Europe/London">{created_at}</Moment></p>
          <p className="likeContainer">
            <FavoriteIcon className='likeSubmit' onClick={(event) => this.likeHandler(event, id)}/>
            <span className="likeNumber">{likes.length > 0 && likes.length}</span>
          </p>
      </>
    )
  }
}

export default Peep;

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

  render() {
    const { id, body, created_at, likes, updated, user } = this.props.post;
    return (
      <div>
        <p className="peepContent">{body}</p>
        <p>Posted by <span className="userName">{user.handle} </span><Moment fromNow tz="Europe/London">{created_at}</Moment></p>
        { likes.length > 0 ? (
          <p className="likeContainer"><FavoriteIcon /><span className="likeNumber">{likes.length}</span></p>
        ) : ('')}
      </div>
    )
  }
}

export default Peep;

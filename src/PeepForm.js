import React, { Component } from 'react';

class PeepForm extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      peep: '',
      newPeep: {}
    }
  }
  nameChangeHandler = (e) => {
    this.setState({
      userName: e.target.value
    })
  }
  peepChangeHandler = (e) => {
    this.setState({
      peep: e.target.value
    })
  }
  submitHandler = (e) => {
    e.preventDefault();
    let APIurl = 'https://chitter-backend-api-v2.herokuapp.com/peeps';

    fetch(APIurl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token token=a_valid_session_key',
        },
        body:
          `{"peep": {
              "user_id":1,
              "body":${this.state.peep}
              }
            }`
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
    }

  render() {
    return (
      <form onSubmit={console.log("submitted")}>
        <input type="text" placeholder="Your name here..." onChange={this.nameChangeHandler} />
        <input type="text" placeholder="Your peep here..." onChange={this.peepChangeHandler} />
        <input type="submit" />
      </form>
    )
  }
}

export default PeepForm;

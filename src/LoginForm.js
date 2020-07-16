import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
  }
  nameChangeHandler = (e) => {
    this.setState({
      userName: e.target.value
    })
  }
  passwordChangeHandler = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <>
        <input type="text" placeholder="Your name..." onChange={this.nameChangeHandler} />
        <input type="password" placeholder="Your password..." onChange={this.passwordChangeHandler} />
        <button
          className="button shortButton"
          onClick={(event) => this.props.loginHandler(event, this.state.userName, this.state.password)}>Login</button>
        <button
          className="button shortButton"
          onClick={(event) => this.props.signupHandler(event, this.state.userName, this.state.password)}>Signup</button>
      </>
    )
  }
}

export default LoginForm;

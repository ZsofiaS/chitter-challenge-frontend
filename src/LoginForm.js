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
  loginHandler = (event) => {
    this.props.loginHandler(event, this.state.userName, this.state.password);
    this.setState({
      userName: '',
      password: ''
    })
  }
  signupHandler = (event) => {
    this.props.signupHandler(event, this.state.userName, this.state.password);
    this.setState({
      userName: '',
      password: ''
    })
  }

  render() {
    return (
      <>
        <input
          id='nameInput'
          type="text"
          value={this.state.userName}
          placeholder="Your name..."
          onChange={this.nameChangeHandler} />
        <input
          id='passwordInput'
          type="password"
          value={this.state.password}
          placeholder="Your password..."
          onChange={this.passwordChangeHandler} />
        <button
          id='loginSubmit'
          className="button shortButton"
          onClick={(event) => this.loginHandler(event)}>Login</button>
        <button
          id='signupSubmit'
          className="button shortButton"
          onClick={(event) => this.signupHandler(event)}>Signup</button>
      </>
    )
  }
}

export default LoginForm;

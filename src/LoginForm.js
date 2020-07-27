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
        <input id='nameInput' type="text" placeholder="Your name..." onChange={this.nameChangeHandler} />
        <input id='passwordInput' type="password" placeholder="Your password..." onChange={this.passwordChangeHandler} />
        <button
          id='loginSubmit'
          className="button shortButton"
          onClick={(event) => this.props.loginHandler(event, this.state.userName, this.state.password)}>Login</button>
        <button
          id='signupSubmit'
          className="button shortButton"
          onClick={(event) => this.props.signupHandler(event, this.state.userName, this.state.password)}>Signup</button>
      </>
    )
  }
}

export default LoginForm;

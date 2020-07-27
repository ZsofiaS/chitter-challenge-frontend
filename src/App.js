import React, { Component } from 'react';
import PeepList from './PeepList';
import Peep from './Peep';
import PeepForm from './PeepForm';
import LoginForm from './LoginForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isListView: true,
      isShowingLoginForm: true,
      isLoggedIn: false,
      peeps: [],
      peep: {},
      session: null,
      userId: null,
      isSignedUp: false
    };
  }

  componentDidMount() {
    this.fetchListOfPeeps();
  }

  fetchListOfPeeps = () => {
    let APIurl = "https://chitter-backend-api-v2.herokuapp.com/peeps";

    fetch(APIurl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          peeps: data,
          isLoading: false
        })
    })
  }

  fetchIndividualPeep = (id) => {
    let APIurl = `https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`;

    fetch(APIurl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          peep: data,
          isListView: false
        });
      })
  }

  signupHandler = (e, userName, password) => {
    e.preventDefault();
    let APIurl = 'https://chitter-backend-api-v2.herokuapp.com/users';

    fetch(APIurl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:
          JSON.stringify({
            user: {
              handle: `${userName}`,
              password: `${password}`
            }
          })
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          isSignedUp: true
        })
      })
    }

  loginHandler = (e, userName, password) => {
    e.preventDefault();

    let APIurl = 'https://chitter-backend-api-v2.herokuapp.com/sessions';

    fetch(APIurl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:
          JSON.stringify({
            session: {
              handle: `${userName}`,
              password: `${password}`
            }
          })
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          session: data.session_key,
          userId: data.user_id,
          isLoggedIn: true
        });
      })
  }

  backHandler = () => {
    this.setState({
      isListView: true
    })
  }

  peepSubmitHandler = (e, peep) => {
    e.preventDefault();
    let APIurl = 'https://chitter-backend-api-v2.herokuapp.com/peeps';

    fetch(APIurl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token token=${this.state.session}`,
        },
        body:
          JSON.stringify({
            peep: {
              user_id: `${this.state.userId}`,
              body: `${peep}`
            }
          })
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => this.fetchListOfPeeps())

    }

  likeHandler = (id, userId) => {
    if ( userId != null ) {
      let APIurlPut = `https://chitter-backend-api-v2.herokuapp.com/peeps/${id}/likes/${userId}`;
      let optionsPut = {
        method: 'PUT',
        headers: {
          'Authorization': `Token token=${this.state.session}`,
        }
      }
      let optionsDel = {
        method: 'DELETE',
        headers: {
          'Authorization': `Token token=${this.state.session}`,
        }
      }

      fetch(APIurlPut, optionsPut)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if (data.user == "has already been taken") {
            fetch(APIurlPut, optionsDel)
          }
        })
        .then(() => this.fetchListOfPeeps())
    }
  }

  render() {
    const { isLoading, isListView, isShowingLoginForm, isLoggedIn, peeps, peep, isSignedUp } = this.state;
    console.log(isShowingLoginForm)
    return (
      <div className="App">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Latest peeps</h1>
        )}

        {isListView ? (
          <>
            { isSignedUp ? (
              <p>Signup successful.</p>
            ) : ''}
            <PeepList peeps={peeps}
              fetchIndividualPeep={this.fetchIndividualPeep}
              likeHandler={(id) => this.likeHandler(id, this.state.userId)}
            />
            { !isLoggedIn ? (
              <LoginForm id='loginForm' loginHandler={this.loginHandler} signupHandler={this.signupHandler}/>
            ) : (
              <PeepForm peepSubmitHandler={this.peepSubmitHandler} />
            )}
          </>
        ) : (
          <>
          <Peep className="peep" post={peep} />
          <button id='backButton' className="button shortButton" onClick={this.backHandler}>Back</button>
          </>
        )}

     </div>
    );
  }
}

export default App;

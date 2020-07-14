import React, { Component } from 'react';
import PeepList from './PeepList';
import Peep from './Peep';
import PeepForm from './PeepForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isListView: true,
      peeps: [],
      peep: {}
    };
  }

  componentDidMount() {
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

  backHandler = () => {
    this.setState({
      isListView: true
    })
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Latest peeps</h1>
        )}

        {this.state.isListView ? (
          <PeepList peeps={this.state.peeps} fetchIndividualPeep={this.fetchIndividualPeep}/>
        ) : (
          <>
          <Peep post={this.state.peep} />
          <button onClick={this.backHandler}>Back</button>
          </>
        )}
        <PeepForm />
     </div>
    );
  }
}

export default App;

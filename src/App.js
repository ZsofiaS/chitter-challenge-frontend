import React, { Component } from 'react';
import PeepList from './PeepList';
import PeepForm from './PeepForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      peeps: []
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

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Latest peeps</h1>
        )}
        <PeepList peeps={this.state.peeps}/>
        <PeepForm />
     </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class PeepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peep: '',
      newPeep: {},
    }
  }
  peepChangeHandler = (e) => {
    this.setState({
      peep: e.target.value
    })
  }

  render() {
    return (
      <>
        <input type="text" placeholder="Your peep here..." onChange={this.peepChangeHandler} />
        <button className="button shortButton"
          onClick={(event) => this.props.peepSubmitHandler(event, this.state.peep)}>Submit</button>
      </>
    )
  }
}

export default PeepForm;

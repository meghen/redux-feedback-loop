import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Understanding extends Component {
  handleClick=()=>{
    /// - check out pop instead of push to go back
    console.log(this.props.history)
    //routes to next page
    this.props.history.push('/support')
  }
  render() {
    return (
        <div>
          <h1>How well are you understanding the content?</h1>
          <input type='number' />
          <button onClick={this.handleClick}>Next</button>
        </div>
    );
  }
}

export default withRouter(Understanding);

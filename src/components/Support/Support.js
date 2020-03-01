import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Support extends Component {
  handleClick=()=>{
    //routes to next page
    this.props.history.push('/comments')
  }
  render() {
    return (
        <div>
          <h1>How well do you feel supported?</h1>
          <input type="number" />
          <button onClick={this.handleClick}>Next</button>
        </div>
    );
  }
}

export default withRouter(Support);

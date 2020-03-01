import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Comments extends Component {
  handleClick=()=>{
    //routes to next page
    /// - NEED TO CHANGE PATH TO REVIEW COMPONENT
    this.props.history.push('/understanding')
  }
  render() {
    return (
        <div>
          <h1>Any comments you want to leave?</h1>
          <input type="text" />
          <button onClick={this.handleClick}>Next</button>
        </div>
    );
  }
}

export default withRouter(Comments);

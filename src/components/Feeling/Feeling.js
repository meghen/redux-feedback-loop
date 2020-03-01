import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Feeling extends Component {
    handleClick=()=>{
        //routes to next page
        this.props.history.push('/understanding')
      }
  render() {
    return (
        <div>
          <h1>How are you feeling today?</h1>
          <input type="number" />
          <button onClick={this.handleClick}>Next</button>
        </div>
    );
  }
}

export default withRouter(Feeling);

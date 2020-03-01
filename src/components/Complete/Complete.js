import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Complete extends Component {
    handleClick=()=>{
        //routes to next page
        this.props.history.push('/')
      }
      
  render() {
    return (
        <div>
          <h1>Thank you! Your form has been submitted</h1>
          <button onClick={this.handleClick}>Fill Out Another Form</button>
        </div>
    );
  }
}

export default connect()(withRouter(Complete));

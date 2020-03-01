import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Review extends Component {
    state = {
        review: ''
    }
    handleClick=()=>{
        /// - WILL SUBMIT AXIOS POST ON CLICK
        //routes to next page
        this.props.history.push('/complete')
      }
      
  render() {
    return (
        <div>
          <h1>Review</h1>
          <button onClick={this.handleClick}>Next</button>
        </div>
    );
  }
}

export default connect()(withRouter(Review));

import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Review extends Component {
    handleClick=()=>{      
        /// - WILL SUBMIT AXIOS POST ON CLICK
        axios({
          method: 'POST',
          url: '/feedback',
          data: this.props.reduxStore
        }).then((response)=>{
          console.log('POST response', response);
        }).catch((err)=>{
          console.log('error: ', err); 
        })
        //routes to next page
        this.props.history.push('/complete')
      }
      
  render() {
    return (
        <div>
          <h1>Review</h1>
          {JSON.stringify(this.props.reduxStore)}
          <button onClick={this.handleClick}>Submit</button>
        </div>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore
})
export default connect(mapStateToProps)(withRouter(Review));

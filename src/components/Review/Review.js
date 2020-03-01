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
          <h1>Please Review Your Feedback</h1>
          <h3>Feeling: {this.props.reduxStore.feeling}</h3>
          <h3>Understanding: {this.props.reduxStore.understanding}</h3>
          <h3>Support: {this.props.reduxStore.support}</h3>
          <h3>Comments: {this.props.reduxStore.comments}</h3>
          <button onClick={this.handleClick}>Submit</button>
        </div>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore
})
export default connect(mapStateToProps)(withRouter(Review));

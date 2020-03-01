import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Comments extends Component {
    state = {
        comments: ''
    }
    handleClick=()=>{
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state.comments
        })
        //routes to next page
        this.props.history.push('/review')
      }
      handleChange=(event)=>{
          this.setState({
            comments: event.target.value
          })
      }
  render() {
    return (
        <div>
          <h1>Any comments you would like to share?</h1>
          <input type="text" onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Next</button>
        </div>
    );
  }
}

export default connect()(withRouter(Comments));

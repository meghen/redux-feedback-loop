import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Support extends Component {
    state = {
        support: ''
    }
    handleClick=()=>{
        this.props.dispatch({
            type: 'ADD_SUPPORT',
            payload: this.state.support
        })
        //routes to next page
        this.props.history.push('/comments')
      }
      handleChange=(event)=>{
          this.setState({
            support: event.target.value
          })
      }
  render() {
    return (
        <div>
          <h1>Do you feel supported?</h1>
          <input type="number" onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Next</button>
        </div>
    );
  }
}

export default connect()(withRouter(Support));

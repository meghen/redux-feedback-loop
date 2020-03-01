import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Support extends Component {
    state = {
        support: ''
    }
    handleClick=(event)=>{
      event.preventDefault();
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
          <form onSubmit={this.handleClick}>
            <input type="number" required onChange={this.handleChange}/>
            <button type="submit">Next</button>
          </form>
        </div>
    );
  }
}

export default connect()(withRouter(Support));

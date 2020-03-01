import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Understanding extends Component {
    state = {
        understanding: ''
    }
    handleClick=(event)=>{
      event.preventDefault();
        this.props.dispatch({
            type: 'ADD_UNDERSTAND',
            payload: this.state.understanding
        })
        //routes to next page
        this.props.history.push('/support')
      }
      handleChange=(event)=>{
          this.setState({
            understanding: event.target.value
          })
      }
  render() {
    return (
        <div>
          <h1>How well are you understanding the material?</h1>
          <form onSubmit={this.handleClick}>
            <input type="number" required onChange={this.handleChange}/>
            <button type="submit">Next</button>
          </form>
        </div>
    );
  }
}

export default connect()(withRouter(Understanding));

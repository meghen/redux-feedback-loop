import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Understanding extends Component {
    state = {
        understanding: ''
    }
    handleClick=()=>{
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
          <input type="number" onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Next</button>
        </div>
    );
  }
}

export default connect()(withRouter(Understanding));

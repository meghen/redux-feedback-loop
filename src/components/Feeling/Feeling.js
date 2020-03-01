import React, { Component } from 'react';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Feeling extends Component {
    state = {
        feelings: ''
    }
    handleClick=()=>{
        this.props.dispatch({
            type: 'ADD_FEELINGS',
            payload: this.state.feelings
        })
        //routes to next page
        this.props.history.push('/understanding')
      }
      handleChange=(event)=>{
          this.setState({
              feelings: event.target.value
          })
      }
  render() {
    return (
        <div>
          <h1>How are you feeling today?</h1>
          <input type="number" onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Next</button>
        </div>
    );
  }
}

export default connect()(withRouter(Feeling));

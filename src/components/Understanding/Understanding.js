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
        console.log('check out history', this.props.history);
        
        //routes to next page
        this.props.history.push('/support')
      }
      handleChange=(event)=>{
          this.setState({
            understanding: event.target.value
          })
      }
      backClick=()=>{
        this.props.history.push('/#')
      }
  render() {
    return (
        <div>
          <h1>How well are you understanding the material?</h1>
          <form onSubmit={this.handleClick}>
            <select type="number" required onChange={this.handleChange}>
              <option>Very Bad</option>
              <option>Bad</option>
              <option>Neutral</option>
              <option>Good</option>
              <option>Very Good</option>
            </select>
            <br></br>
            <button onClick={this.backClick}>Back</button>
            <button type="submit">Next</button>
          </form>
        </div>
    );
  }
}

export default connect()(withRouter(Understanding));

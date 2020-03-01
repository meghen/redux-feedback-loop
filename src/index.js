import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const firstReducer=(state='', action)=>{
    if(action.type === 'ADD_FEELINGS'){
        console.log('this is firstReducer', action.payload); 
        return state;
    }
    return state;
}
const storeInstance = createStore(
    combineReducers({
        firstReducer
    })  
)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

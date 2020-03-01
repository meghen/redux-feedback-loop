import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const firstReducer=(state={}, action)=>{
    if(action.type === 'ADD_FEELINGS'){
        return {
            ...state,
            feeling: action.payload
        };
    } else if (action.type === 'ADD_UNDERSTAND'){
        return {
            ...state,
            understanding: action.payload
        };
    } else if (action.type === 'ADD_SUPPORT'){
        return {
            ...state,
            support: action.payload
        };
    } else if (action.type === 'ADD_COMMENTS'){
        return {
            ...state,
            comments: action.payload
        };
    }
    return state;
}
const storeInstance = createStore(
        firstReducer 
)
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

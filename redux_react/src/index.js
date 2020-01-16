import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

const stateChanger = (state, action)=>{
  if(state === undefined){
    return 0;
  }else if(action.type === 'add'){
    var newState = state + action.payload;
    return newState;
  }
  
  return state
}
const store = createStore(stateChanger);
render();
store.subscribe(render);

function add1(){
  store.dispatch({type: 'add', payload: 1})
}
function add2(){
  store.dispatch({type: 'add', payload: 2})
}
function add3(){
  if(store.getState()%2){
    store.dispatch({type: 'add', payload: 1})
  }
}
function add4(){
  setTimeout(()=>{
    store.dispatch({type: 'add', payload: 1})
  },2000)
}


function render(){
  ReactDOM.render(<App 
    myValue={store.getState()} 
    add1={()=>add1()} 
    add2={()=>add2()} 
    add3={()=>add3()} 
    add4={()=>add4()} 
    store={store}/>, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

//创建stateChanger与之前基本一样，区别主要是返回值 {n: 0}
const stateChanger = (state, action)=>{
  if(state === undefined){
    return { n: 0 };
  }else if(action.type === 'add'){
    var newState = {n: state.n + action.payload};
    return newState;
  }
}

//创建store与之前的一样
const store = createStore(stateChanger);

//使用Provider包裹住了APP, 使得APP的所有组件都可以接收到store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

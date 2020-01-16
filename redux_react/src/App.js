import React, { Component } from 'react';

class App extends Component {
  add5(){
    this.props.store.dispatch({type: 'add', payload: 10})
  }
  add6(){
    this.props.store.dispatch({type: 'add', payload: 20})
  }
  add7(){
    if(this.props.store.getState()%2){
      this.props.store.dispatch({type: 'add', payload: 10})
    }
  }
  add8(){
    setTimeout(()=>{
      this.props.store.dispatch({type: 'add', payload: 20})  
    }, 2000)
 
  }
  render(){
    return (
      <div>
        你点击了 <span id='value'>{this.props.myValue}</span> 次
        <div>
          <button onClick={this.props.add1}>+1</button>
          <button onClick={this.props.add2}>+2</button>
          <button onClick={this.props.add3}>如果是单数就+1</button>
          <button onClick={this.props.add4}>两秒钟后+1</button> 
        </div>
        <div>
          <button onClick={()=>this.add5()}>+10</button>
          <button onClick={()=>this.add6()}>+20</button>
          <button onClick={()=>this.add7()}>如果是单数就+10</button>
          <button onClick={()=>this.add8()}>两秒钟后+20</button> 
        </div>
      </div> 
    ); 
  }
}

export default App;
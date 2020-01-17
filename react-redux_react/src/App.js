import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  render(){
    return (
      <div>
        你点击了 <span id='value'>{this.props.n}</span> 次
        <div>
          <button onClick={this.props.add1}>+1</button>
        </div>
      </div> 
    ); 
  }
}

//映射函数，使state映射到props的n
function mapStateToProps(state){
  return {
    n: state.n
  }
}

//映射函数，使dispatch映射到props的add1
function mapDispatchToProps(dispatch){
  return {
    add1: ()=> dispatch({type: 'add', payload: 1})
  }
}

//connect将mapStateToProps和mapDispatchToProps组合起来与App建立一种连接关系，
//所以App可以操作到props的值
export default connect(mapStateToProps, mapDispatchToProps)(App);

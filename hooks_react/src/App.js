import React from 'react';
// 1. 引入useState
import { useState, useEffect } from 'react';
import "./App.css"

function Box1() {
  return (
    <div className="box">
      注册
    </div>
  )
}

function Box2() {
  return (
    <div className="box">
      登录
    </div>
  )
}

function App() {
  //1. 获取浏览器的地址，如http://localhost:3001/signup中的/signup
  let path = window.location.pathname;
  //2. 如果path不为/signup，默认显示登录界面
  let initUi = path === "/signup" ? "注册" : "登录";
  const [ui, setUi] = useState(initUi);
  //3. 点击登录，设置ui变量为登录，同时修改浏览器的地址为/login
    const onClickLogin = () => {
    setUi("登录");
    window.history.pushState(null, '', "/login")
  }

  const onClickSignUp = () => {
    setUi("注册");
    window.history.pushState(null, '', "/signup")
  }

  return (
    <div className="App">
      <button onClick={onClickLogin}>登录</button>
      <button onClick={onClickSignUp}>注册</button>
      <div>{ui === "注册" ? <Box1 /> : <Box2 />}</div>
    </div>
  )
}

export default App;

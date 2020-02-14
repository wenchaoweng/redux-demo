import React from 'react';
// 1. 引入useState
import { useState, useEffect } from 'react';

function App() {
  // 2. 使用useState给count和setCount初始化
  const [count/*值*/, setCount/*更新函数*/] = useState(0);
  useEffect(()=>{
    document.querySelector("#output").innerText = count
  })
  const add = () => {
    // 3. 调用setCount给count赋值
    setCount(count + 1)
  }
 

  return (
    <div>
      <div>{count}</div>
      <div><button onClick={add}>+1</button></div>
    </div>
  )
}

export default App;

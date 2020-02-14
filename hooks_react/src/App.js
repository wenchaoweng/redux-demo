import React from 'react';
// 1. 引入useState
import { useState } from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';

function App() {
  // 2. 使用useState给count和setCount初始化
  const [count/*值*/, setCount/*更新函数*/] = useState(0);
  // 3. 再使用useState给user和setUser初始化,user是个复杂的数据结构
  const [user, setUser] = useState({
    name: "allen",
    age: 18,
    hobbies: ["lol", "dog", "code"]
  });
  const add = () => {
    // 3. 调用setCount给count赋值
    setCount(count + 1)
  }
  const change = () => {
    // 4. 每次点change从删除hobbies中的第2项。
    user.hobbies.splice(1, 1)
    setUser({
      ...user,//5. 将原user的内容拷贝过来，再将hobbies替换如下。
      hobbies: user.hobbies
    })
  }

  return (
    <div>
      <div>{count}</div>
      <div><button onClick={add}>+1</button></div>
      <div>{user.name}, {user.age} <br />{user.hobbies.join(',')}</div>
      <div><button onClick={change}>change</button></div>
    </div>
  )
}

export default App;

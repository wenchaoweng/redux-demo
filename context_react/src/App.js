import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

//1. 创建一个context
const themeContext = React.createContext();
//2. 创建几个组件，用来演示嵌套使用
function Box(props) {
  return (
    <div className={`box ${props.theme}`}>
      {props.children}
    </div>);
}
function Button() {
  return <button>button</button>;
}
function Input() {
  return <input />;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: "green"
    };
  }
  change = () => {
    if (this.state.theme === "green") {
      this.setState({ theme: "red" });
    } else {
      this.setState({ theme: "green" });
    }
  };

  render() {
    return (
      <themeContext.Provider value={this.state.theme}>
        {/* 3. 所有东西需要放在context.Provider里面 */}
        <div className="App">
          <button onClick={this.change}>换肤</button>
          <themeContext.Consumer>
            {/* 4. 想要访问provider的value，就在consumer里面使用 */}
            {x => (
              <div>
                <Box theme={x}>
                  <Button />
                </Box>
                <Box theme={x}>
                  <Input />
                </Box>
              </div>
            )}
          </themeContext.Consumer>
        </div>
      </themeContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

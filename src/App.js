import React, { Component } from 'react';


// class App extends Component{
//   render() {
//     return <div >Hello, World  </div>;
//   }
// }

class App extends Component {
  render() {
    return React.createElement(
      "h1",
      null,
      "Hello,world!!"
    );
  }
}
      
export default App;

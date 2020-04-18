import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => { console.log("I am clicked") }}/>;
      </React.Fragment>
    )
  }
}

// class App extends Component {
//   render() {
//     return React.createElement(
//       "h1",
//       null,
//       "Hello,world!!"
//     );
//   }
// }
      
export default App;

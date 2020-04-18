import React, { Component } from 'react';


// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => { console.log("I am clicked") }}/>;
//       </React.Fragment>
//     )
//   }
// }
const App = () => {
  return <div>
    <Cat/>
  </div>
}

const  Cat = () => {
  return <div > Meaw </div>
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

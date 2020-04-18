import React, { Component } from 'react';


const App = () => {
  const profile = [
    {
      name:"Taro",age:10
    },
    {
      name: "Hanako",
      age: 5
    },
    {
      name: "aya"
    }
  ]
  return <div>
    <div>
      {
        profile.map((profile,index) => {
          return <User name={
            profile.name
          }
            age={
              profile.age
            }
            key={index}/>
        })
      }
    </div>
    
  </div>
}

const  User = (props) => {
  return <div > Hi I am {props.name},and {props.age} </div>
}

User.defaultProps = {
    age:1
}
  
export default App;

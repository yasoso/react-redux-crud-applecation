import React, { Component } from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profile = [
    {
      name:"Taro",age:20
    },
    {
      name: "Hanako",
      age: 5
    },
    {
      name: "ayako",
      age:30
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

User.propTypes = {
  name: PropTypes.string,
  age:  PropTypes.number.isRequired
}

export default App;

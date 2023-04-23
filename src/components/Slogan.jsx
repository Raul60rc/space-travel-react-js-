import React from 'react'

const Slogan = (props) =>{
  console.log(props);
    const agency = "Resolute Station";
    return (
      <div>
        <h2>Hi Everyone!</h2>
        <h3>The {props.agency} is happy to see you here! </h3>
        <h4>We serve you from {props.location}</h4>
      </div>
    )
  };

export default Slogan
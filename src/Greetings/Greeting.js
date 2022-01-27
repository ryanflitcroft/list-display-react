import React from 'react';

export default function Greeting(props) {

  return (
    <>
      <p>
        Formal: 
        <span> {props.greeting.formal}</span>
      </p>
      <p>
        Informal: 
        <span> {props.greeting.informal}</span>
      </p>
    </>
  );
}

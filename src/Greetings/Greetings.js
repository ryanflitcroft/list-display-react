import React from 'react';
import Greeting from './Greeting';

export default function Greetings(props) {

  return (
    <div>
      <h2>{props.greetings.language}</h2>
      <Greeting greeting={props.greetings.hello} />
    </div>
  );
}
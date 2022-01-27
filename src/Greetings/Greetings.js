import React from 'react';
import Greeting from './Greeting';

export default function Greetings(props) {

  return (
    <div>
      <h2>{props.greetings.language}</h2>
      {/* <p>{props.greetings.hello.formal}</p>
      <p>{props.greetings.hello.informal}</p> */}
      <Greeting greeting={props.greetings.hello} />
    </div>
  );
}

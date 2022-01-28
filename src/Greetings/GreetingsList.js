import React from 'react';
import Greetings from './Greetings';

export default function GreetingsList(props) {
  
  return (
    <section>
      <h1>Hello</h1>
      {props.greetings.map((greetings, i) => 
        <Greetings key={greetings, i} greetings={greetings} />
      )}
    </section>
  );
}
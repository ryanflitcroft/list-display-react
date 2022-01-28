import React from 'react';

export default function Members(props) {
  console.log('||', props.member);
  return (
    <span>{props.member}</span>
  );
}

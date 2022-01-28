import React from 'react';
import Members from './Members';

export default function Bands(props) {

  return (
    <figure>
      <figcaption>
        <h2>{props.band.name}</h2>
      </figcaption>
      <img alt={props.band.name} src={props.band.img} />
      <figcaption>
        est. {props.band.origin.year} - {props.band.origin.city}
      </figcaption>
      <div>
        {props.band.members.map((member, i) => 
          <Members key={member, i} member={member} />
        )}
      </div>
    </figure>
  );
}
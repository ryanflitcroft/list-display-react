import React from 'react';
import Bands from './Bands';

export default function BandsList(props) {
  return (
    <section>
      {props.bands.map((band, i) => 
        <Bands key = { band, i } band={band} /> 
      )}
    </section>
  );
}
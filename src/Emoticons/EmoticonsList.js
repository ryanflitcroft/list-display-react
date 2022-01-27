import React from 'react';
import Emoticons from './Emoticons';

export default function EmoticonsList(props) {
  return (
    <section>
      {props.emoticons.map((emoticon, i) =>
        <Emoticons key={emoticon, i} emoticon={emoticon} />
      )}
    </section>
  );
}
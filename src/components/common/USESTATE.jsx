import React from 'react';
import {useState} from 'react';

function Changingstate() {
  const [value, setvalue] = useState(0);
  return (
    <>
      <div>
        <p>You clicked {value} times</p>
        <button onClick={() => setvalue(value + 1)}>Click me</button>
      </div>
    </>
  );
}

export default Changingstate;

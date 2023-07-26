import React, {useState} from 'react';

function Usestate02() {
  const [value, setvalue] = useState(0);

  const updatedvalue = () => {
    setvalue(value + 1);
  };
  const minusvalue = () => {
    setvalue(value - 1);
  };
  return (
    <div>
      <p>My Counting {value}</p>
      <button onClick={updatedvalue}>CLick me</button>
      <button onClick={minusvalue}>CLick me</button>
    </div>
  );
}

export default Usestate02;

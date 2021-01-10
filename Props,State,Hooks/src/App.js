import React, { useState } from 'react';
function Congratulations(props){
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Congratulations {props.name}!!!</p>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </>
  );
}
export default Congratulations;

//as of version 17, we no longer need to import React from 'react';
import { useState } from 'react';
//rule 1 - hooks can only be used inside React functions - function component or custom hook functions
//rule 2 - hooks must always be called at the top level of the component; don't call hooks inside any loops, conditions, or functions inside the component

function App() {

  const [color, setColor] = useState('red');

  const [msg, setMsg] = useState('');

  function handleClick() {
    //setColor('blue');
    color === 'red' ? setColor('blue') : setColor('red');
    setMsg('Super Secret Message');
  }

  return (
    <div>
      <h1 style={{ background: color }}>React Hooks Demo</h1>
      <h1>{msg}</h1>
      <button onClick={handleClick}>click Me</button>
    </div >
  );
}

export default App;

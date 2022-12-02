import React, { useState } from "react";

const ShowHideExample = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show ? (
        <div>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter(counter - 1)}>-</button>
          <h1>{counter}</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShowHideExample;

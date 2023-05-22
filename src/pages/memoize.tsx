import React, { useState } from "react";

/**
 * Memoize the return value of the 'add' function;
 * return the last result if the function is called a second time.
 */
function memorize(fn: Function) {
  return (a: number, b: number) => {
    return fn(a, b);
  };
}

/**
 * Follow up, how to create a memorize function accepting all kinds of arguments
 */

function MemoizePage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [times, setTimes] = useState(0);
  const [history, setHistory] = useState<string[]>([]);

  const add = (a: number, b: number) => {
    setTimes((prev) => prev + 1);
    return a + b;
  };

  const memoriedAdd = memorize(add);

  return (
    <div>
      <h3>MemoizePage</h3>
      <p>{`Called Times: ${times}`}</p>
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <input
          type="number"
          value={a}
          onChange={(e) => {
            setA(parseInt(e.target.value));
          }}
        />
        <input
          type="number"
          value={b}
          onChange={(e) => {
            setB(parseInt(e.target.value));
          }}
        />

        <button
          onClick={() => {
            setHistory((prev) => [
              ...prev,
              `${a} + ${b} = ${memoriedAdd(a, b)}`,
            ]);
          }}
        >
          Add
        </button>
      </div>
      <pre>{JSON.stringify(history, null, 2)}</pre>
    </div>
  );
}

export default MemoizePage;

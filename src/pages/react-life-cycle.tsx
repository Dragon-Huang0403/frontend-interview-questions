import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const code = `console.log(1);

function ReactLifeCyclePage() {
  const [value, setValue] = useState(() => {
      console.log(2);
      return 3;
  });
  console.log(value);
  useEffect(() => {
      console.log(4);
      setValue(5);
      console.log(6);
      return () => {
          console.log(7);
      };
  }, []);

  return null;
}`;

console.log(1);

function ReactLifeCyclePage() {
  const [value, setValue] = useState(() => {
    console.log(2);
    return 3;
  });
  console.log(value);
  useEffect(() => {
    console.log(4);
    setValue(5);
    console.log(6);
    return () => {
      console.log(7);
    };
  }, []);

  return (
    <div>
      <p style={{ marginBottom: "20px" }}>請說明以下結果</p>
      <CopyBlock
        language={"jsx"}
        text={code}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}

export default ReactLifeCyclePage;

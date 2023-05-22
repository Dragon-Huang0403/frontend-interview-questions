import { canOnlyRunOnce } from "@/utils/helper";
import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const code = `useEffect(() => {
  canOnlyRunOnce();
}, [])`;

function ReactStrict() {
  const [error, setError] = useState<null | Error>(null);
  useEffect(() => {
    try {
      canOnlyRunOnce();
    } catch (e) {
      setError(e as Error);
    }
  }, []);

  return (
    <div>
      <p style={{ marginBottom: "20px" }}>
        請說明如何避免以下程式碼在 React Strict Mode 避免會發出兩次 Request
      </p>
      <CopyBlock
        language={"jsx"}
        text={code}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
      {error && (
        <p
          style={{ color: "red", marginTop: "20px" }}
        >{`Error Occurred, message: ${error.message}`}</p>
      )}
    </div>
  );
}

export default ReactStrict;

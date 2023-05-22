import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const code = `const [value, setValue] = useState("");
return (
  <input
    key={value}
    value={value}
    onChange={(e) => {
      setValue(e.target.value);
    }}
  />
)
`;

export default function Input() {
  const [value, setValue] = useState("");
  return (
    <div>
      <p style={{ marginBottom: "20px" }}>請說明以下程式碼</p>
      <CopyBlock
        language={"jsx"}
        text={code}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        key={value}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
}

import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const code = `<div className="parent" style={{ height: "400px", width: "400px" }}>
    <div
        className="child"
        style={{ height: "200px", width: "200px" }}
    />
</div>`;

const options = [
  `.parent {
}
.child {
  margin: auto;
}`,
  `.parent {
}
.child {
  position: relative;
  left: 50%;
  top: 50%;
}`,
  `.parent {
  position: relative;
}
.child {
  position: absolute;
  left: 20px;
  top: 20px;
}`,
  `.parent {
}
.child {
  translate: 50% 50%;
}`,
];
function CenterPage() {
  return (
    <div>
      <p style={{ marginBottom: "20px" }}>下列哪個選項會有置中的效果</p>
      <CopyBlock
        language={"jsx"}
        text={code}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        {options.map((option, index) => (
          <div
            key={option}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              padding: "0px 20px",
            }}
          >
            <h2>{index + 1}</h2>
            <div style={{ flexBasis: "100%" }}>
              <CopyBlock language={"css"} text={option} theme={dracula} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CenterPage;

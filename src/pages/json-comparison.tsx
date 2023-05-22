import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const code = `const otherObject = {};
const obj1 = {
	a: "1",
	b: 2,
	c: {},
	d: otherObject,
};

const obj2 = {
	a: 1,
	b: "2",
	c: {},
	d: otherObject,
}

console.log(obj1.a === obj2.a);
console.log(obj1.b == obj2.b);
console.log(obj1.c === obj2.c);
console.log(obj1.d === obj2.d);`;

// Follow up
function areDeepEqual(obj1: any, obj2: any) {}

function deepCopy(obj: any) {}

function JsonComparisonPage() {
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

export default JsonComparisonPage;

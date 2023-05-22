import React from "react";

interface QuestionProps {
  order: number;
  content: string;
}

function Question({ order, content }: QuestionProps) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <p>{order}.</p>
      <p>{content}</p>
    </div>
  );
}

export default Question;

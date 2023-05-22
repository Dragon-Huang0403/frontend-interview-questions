import Question from "@/component/Question";
import React, { useState } from "react";

const questions = [
  "useRef, useState 的差別是什麼？",
  "請說明 React Virtual DOM",
  "請說明 React Key 的用途是什麼，為什麼需要這個",
  "React Router 幫我們做了什麼事？",
  "使用 React Router 的 useNavigate 跟 window.location.href 進行頁面的切換差別在哪？",
  "請說明 Next 跟 React 的差別",
  "SPA, MPA, SSR, CSR 的差別在哪裡？",
  "TypeScript, ESLint, Prettier, Webpack 分別在做處理什麼？",
  "在瀏覽器輸入 URL 按下 Enter 鍵後，發生了什麼事？",
  "SessionStorage VS LocalStorage VS cookies",
];

function QuestionsPage() {
  const [current, setCurrent] = useState(0);
  const [showAll, setShowAll] = useState(false);
  return (
    <div style={{ fontSize: "1.5rem", padding: "0 30px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button
          onClick={() => {
            setShowAll((prev) => !prev);
          }}
        >
          Show All
        </button>
        <button
          disabled={showAll || current === 0}
          onClick={() => {
            setCurrent((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        <button
          disabled={showAll || current === questions.length - 1}
          onClick={() => {
            setCurrent((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
      {showAll ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {questions.map((question, index) => (
            <Question key={index} order={index + 1} content={question} />
          ))}
        </div>
      ) : (
        <Question order={current + 1} content={questions[current]} />
      )}
    </div>
  );
}

export default QuestionsPage;

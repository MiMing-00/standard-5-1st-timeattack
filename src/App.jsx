import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0);

  const plusNum = () => {
    setResult((prev) => prev + parseInt(number));
  };

  const minusNum = () => {
    setResult((prev) => prev - parseInt(number));
  };

  const resetNum = () => {
    setResult(0);
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          placeholder="숫자만 입력해주세요"
          value={number}
          onChange={(event) => setNumber(parseInt(event.target.value))}
        />
        만큼을 <button onClick={plusNum}>더할게요</button>
        <button onClick={minusNum}>뺄게요</button>
        <button onClick={resetNum}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

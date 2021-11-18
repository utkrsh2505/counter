import "./styles.css";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function double_increase() {
    setCount(count * 2);
  }
  function double_increase() {
    setCount(count * 2);
  }

  return (
    <>
      <div className="App">
        <h1>{count}</h1>
        <Button btn_name="+" onSelect={increment} double={double_increase} />
        <Button btn_name="-" onSelect={decrement} />
      </div>
    </>
  );
}
export default App;

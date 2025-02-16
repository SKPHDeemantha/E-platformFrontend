import { useState } from "react";
import "./Testing.css";

export default function Testing() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Students");

  function increment() {
    console.log("incrementing");
    setCount(count + 1);
  }
  function decrement() {
    console.log("decrement");
    setCount(count - 1);
  }

  function changeName(value) {
    setName(value);
  }

  return (
    <div className="background">
      <h1>{name}</h1>
      <button className="val" onClick={decrement}>
        -
      </button>
      <span>{count}</span>
      <button className="val" onClick={increment}>
        +
      </button>

      <div className="buttonpanel">
        <button onClick={() => changeName("students")}>Students</button>
        <button onClick={() => changeName("Teachers")}>Teachers</button>
        <button onClick={() => changeName("Admin")}>Admin</button>
      </div>
    </div>
  );
}

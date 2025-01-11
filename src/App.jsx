import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-container">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </header>
      <main className="app-main">
        <div className="card">
          <button onClick={() => setCount(count + 1)}>Count is {count}</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR.
          </p>
        </div>
      </main>
      <footer className="app-footer">
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more.
        </p>
      </footer>
    </div>
  );
}

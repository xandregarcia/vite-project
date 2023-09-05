import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navbar";
import { Wrapper } from "./components/Wrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Wrapper>
        <h1>Vite + React</h1>
        <div className="bg-blue-500">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Wrapper>
    </>
  );
}

export default App;

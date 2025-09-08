import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center bg-[#0a0a0a]">
        <div className="card bg-[#171717] shadow-xl p-35">
          <div className="card-body">
            <h1 className="card-title text-[#f1666d]">Todo App</h1>
            <p>Created by IJvadeli & Hitury</p>
            <div className="flex card-actions flex-row items-center justify-center mt-5 mb-5">
              <div className="join flex items-center">
                <div className="">
                  <label className="input validator h-9 join-item">
                    <input type="text" placeholder="Enter a Todo" required />
                  </label>
                </div>
                <button className="btn btn-neutral join-item bg-[#f1666d]">Join</button>
              </div>
            </div>
            <List />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

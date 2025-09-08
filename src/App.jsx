import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center bg-[#1B2021]">
        <div className="card card-border border-white bg-base-100 w-96 shadow-xl p-10">
          <div className="card-body">
            <h1 className="card-title">Todo App</h1>
            <p>Created by IJvadeli & Hitury</p>
            <div className="flex card-actions flex-row items-center justify-center mt-5 mb-5">
              <div className="join">
                <div>
                  <label className="input validator join-item">
                    <input type="text" placeholder="Enter a Todo" required />
                  </label>
                </div>
                <button className="btn btn-neutral join-item">Join</button>
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

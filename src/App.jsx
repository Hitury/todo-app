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
            <p>
              Created by IJvadeli & Hitury
            </p>
            <List />
            <div className="flex card-actions items-center justify-center mt-15">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

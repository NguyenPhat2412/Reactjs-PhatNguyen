import { useState } from "react";
import "./App.css";
import MyComponent from "./components/learn/MyComponent";

const content = [
  ["Nguyen Xuan Phat"],
  ["Dien thoai: 0983549821"],
  ["Email: 23110209@st.vju.ac.vn"],
  ["Facebook: https://www.facebook.com/phatnx.2310/"],
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div>
      <header>
        <img src="./logo192.png" alt="React logo" />
        <div>
          <h1>React js</h1>
          <p>i.e.., using the React library for rendering the UI</p>
          <MyComponent />
        </div>
      </header>
      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Name
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Dien thoai
          </button>

          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Email
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Link facebook
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}

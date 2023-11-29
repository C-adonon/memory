import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [hand, setHand] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  // const [states, setState] = useState([]);
  const images = [
    {
      id: 0,
      name: "img0",
      state: "closed",
      url: "https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 1,
      name: "img1",
      state: "closed",
      url: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 2,
      name: "img2",
      state: "closed",
      url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      name: "img3",
      state: "closed",
      url: "https://images.unsplash.com/photo-1583934583792-262536fa7003?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "img4",
      state: "closed",
      url: "https://images.unsplash.com/photo-1579541671172-43429ce17aca?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "img5",
      state: "closed",
      url: "https://images.unsplash.com/photo-1583590019972-a146a712d72a?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "img6",
      state: "closed",
      url: "https://images.unsplash.com/photo-1576504677634-06b2130bd1f3?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "img7",
      state: "closed",
      url: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "img8",
      state: "closed",
      url: "https://images.unsplash.com/photo-1577081395884-e70fc91645ad?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "img9",
      state: "closed",
      url: "https://images.unsplash.com/photo-1579541513287-3f17a5d8d62c?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "img10",
      state: "closed",
      url: "https://images.unsplash.com/photo-1576503918400-0b982e6a98bf?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      name: "img11",
      state: "closed",
      url: "https://images.unsplash.com/photo-1581593439309-14b03e56b40d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      name: "img12",
      state: "closed",
      url: "https://images.unsplash.com/photo-1582562231447-8afae47fce5f?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 13,
      name: "img13",
      state: "closed",
      url: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 14,
      name: "img14",
      state: "closed",
      url: "https://images.unsplash.com/photo-1584727638057-78254f636b5a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  function handleShuffle() {
    let pairsNbr = 8;
    let randomIds;
    for (let index = 0; index < pairsNbr; index++) {
      randomIds.push(Math.random() * 14);
    }
    console.log(randomIds);
  }

  function HandleOpen() {}
  function HandleClose() {}
  function HandleReset() {}
  function HandleEnd() {}

  return (
    <div className="app">
      <h1>Match the pair</h1>
      <div className="info">
        <span>
          Matched pairs
          <div>{matchedPairs}</div>
        </span>
        <span>
          Hands
          <div>{hand}</div>
        </span>
      </div>
      <ul>
        <li></li>
      </ul>
      <div>
        <button className="reset">Reset game</button>
        <button className="end">End game</button>
      </div>
    </div>
  );
}

export default App;

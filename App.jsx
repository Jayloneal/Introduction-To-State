import React from "react";

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unstrike() {
  document.getElementById("root").style.textDecoration = null;
}

function App() {

  return (
  <div>
  <p>Buy milk</p>
    <button onClick={strike} >Change to strikethorugh</button>
    <button onClick={unstrike} >Revert back to normal</button>
  </div>
  );
}

export default App;
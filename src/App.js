import './App.css';
import Stars from "./components/Stars";
import React from 'react';

function App() {
  return (
    <div className="container">
      <Stars count={5}/>
    </div>
  );
}

export default App;

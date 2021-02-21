import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0)
  
  useEffect(() => {
    fetch('http://127.0.0.1:5000/time').then(res => res.json()).then(res => {
        setCurrentTime(res.time)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Timer App
        </p>
        <p>Current time is {currentTime}</p>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'



function url(path) {
  return process.env.NODE_ENV === ' development'
    ? `http://localhost:5000${path}`
    : path
}

function App() {
  const [data, setData] = useState('')
  useEffect(() => {
    fetch(url('/api/data'))
      .then(res => res.json())
      .then(goods => setData(goods.data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Sterling!
        </p>
        {data}
      </header>
    </div>
  );
}

export default App;

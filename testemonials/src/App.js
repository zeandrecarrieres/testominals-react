import React, { useState } from 'react'
// import logo from './logo.svg';
import data from './data';
import './App.css';
import Cards from './components/Cards';

function App() {
  const [testemonial, setTestemonial] = useState(data)
  return (
    <div className="App">
      
      <h1>Testemonials</h1>
      <Cards testemonial={testemonial}/>
      <button className="button-del" onClick={()=>setTestemonial([])}>Clear</button>
    </div>
  );
}

export default App;

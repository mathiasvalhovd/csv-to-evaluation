import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = event.target.files![0] as File;
    
  };

  return (
    <div className="App-header">
      <p>La meg lage din evaluering for deg! Bare last opp filen din under her</p>
      <input type="file" accept='.csv' onChange={handleFileUpload}/>
    </div>
  );
}

export default App;


import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Papa from 'papaparse'

function App() {

  const [data, setData] = useState<any[]>([]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      Papa.parse(file, {
        header: true, 
        complete: (results) => {
          setData(results.data);
        },
      });
    };
  };


  return (
    <div className="App-header">
      <p>La meg lage din evaluering for deg! Bare last opp filen din under her</p>
      <input type="file" accept='.csv' onChange={handleFileUpload}/>
    </div>
  );
}

export default App;
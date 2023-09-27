import React, { ChangeEvent, useState } from 'react';
import './App.css';
import Papa from 'papaparse';
import axios from 'axios';

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
    }
  };

  const sendDataToBackend = () => {
    axios
      .post('http://localhost:5000/upload', { data })
      .then((response) => {
        console.log('Data sent to Flask backend:', response.data);
        // You can perform actions based on the response from the backend here
      })
      .catch((error) => {
        return "HEI";
      });
  };

  return (
    <div className="App-header">
      <p>La meg lage din evaluering for deg! Bare last opp filen din under her</p>
      <input name="data" type="file" accept=".csv" onChange={handleFileUpload} />
      <button onClick={sendDataToBackend}>Send Data to Backend</button>
    </div>
  );
}

export default App;
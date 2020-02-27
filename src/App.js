import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [results, setResults] = useState(null);
  useEffect(() => {
    if (results == null) {
      fetch('/results.json')
        .then(res => res.json())
        .then(data => setResults(data))
    }
  });

  return (
    <div className="App">
      <h1>Nostokisat</h1>
      {
        results && results.map((comp, i) => 
          <div key={i}>
            <h2>{comp.date}</h2>
            {
              comp.classes.map((cls, i) =>
                <div key={i}>
                  <h3>{cls.gender} {cls.class}</h3>
                  <ol>
                    {cls.results.map((lifter, i) =>
                      <li key={i}>
                        {lifter.name} {lifter.cnj + lifter.snatch} kg ({lifter.cnj},{lifter.snatch})
                      </li>
                    )}
                  </ol>
                </div>
              )
            }
          </div>

        )
      }
    </div>
  );
}

export default App;

import './App.css';
import { useState, useEffect } from 'react';
import Calculator from './components/Calculator';

function App() {
  const [calcString, setCalcString] = useState('');
  const [history, setHistory] = useState('');
  const [history1, setHistory1] = useState('');
  const [history2, setHistory2] = useState('');


  return (
    <div className="App">
      <div className="calc">
        <div className="calc-display">
          <div className="calc-display-value">{calcString}</div>
          <div className="calc-display-value calc-display-history">{history}</div>
          <div className="calc-display-value calc-display-history1">{history1}</div>
          <div className="calc-display-value calc-display-history2">{history2}</div>
        </div>
        <Calculator setString={setCalcString} setHistory={setHistory} setHistory1={setHistory1} setHistory2={setHistory2} />
      </div>
      <div id="ellipse-1">
      </div>
      <div id="ellipse-2">
      </div>
      <div id="rect-1">
      </div>
      <div id="rect-2">
      </div>
    </div>
  );
}

export default App;

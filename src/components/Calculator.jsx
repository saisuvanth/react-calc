import React from 'react'
import './components.css';
import Key from './Key';


const Calculator = ({ setString, setHistory, setHistory1, setHistory2 }) => {
	const keys = ['C', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
	return (
		<div className="calc-keypad">
			<div className='row' style={{ width: '85%' }}>
				{keys.map((key, index) =>
					<div className="col-3 my-2 calc-key" style={{ flexGrow: key === 0 ? 6 : 1 }} key={index}>
						<Key keyname={key} setString={setString} setHistory={setHistory} setHistory1={setHistory1} setHistory2={setHistory2} />
					</div>
				)}
			</div>
		</div>
	)
}

export default Calculator;
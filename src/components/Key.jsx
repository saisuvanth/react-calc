import React from 'react'
import './components.css';


const Key = ({ keyname, setString, setHistory, setHistory1, setHistory2 }) => {
	const isNumber = (char) => {
		if (typeof char !== 'string') {
			return false;
		}
		if (char.trim() === '') {
			return false;
		}
		return !isNaN(char);
	}

	const handleClick = () => {
		if (keyname === 'C')
			setString('');
		else if (keyname === '=') {
			let hoh, hoh1, hoh2;
			setString(prev => {
				hoh = prev;
				return eval(prev)
			});
			setHistory(prev => {
				hoh1 = prev;
				return hoh;
			});
			setHistory1(prev => {
				setHistory2(prev);
				return hoh1;
			});
		}
		else if (keyname === '+/-')
			setString(prev => prev * -1);
		else if (keyname === '÷')
			setString(prev => prev + '/');
		else if (keyname === 'x')
			setString(prev => prev + '*');
		else if (keyname === '.') {
			setString(prev => isNumber(prev[-1]) ? prev + '.' : prev + '0.');
		}
		else
			setString(prev => prev + keyname.toString());
	}

	return (
		<div className='w-100 h-100 d-flex justify-content-center align-items-center key-obj' onClick={handleClick}>
			{keyname}
		</div>
	)
}

export default Key
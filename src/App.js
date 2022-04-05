import './App.css';
import ColorBlock from './components/colorBlock';
import React, { useState } from 'react';
import ColorForm from './components/colorForm';

function App() {


	const [colors, setColors] = useState(['red']/*['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']*/);
	const colorMap = colors.map( (color, i) => {
		return (
			<ColorBlock color={color} key={`color-${i}`} />
		)
	});

	const addColor = newColor => {
		setColors([...colors, newColor]);
	}

	return (
		<div className="App">
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}

			
			<ColorForm addColor={addColor} />
			{ colorMap }
		</div>
	);
}

export default App;

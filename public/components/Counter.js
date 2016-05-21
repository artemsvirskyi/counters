import React from 'react';

export default ({value, increment}) => (
	<div>
		<output>{value}</output>
		<button onClick={increment}>+</button>
	</div>
);

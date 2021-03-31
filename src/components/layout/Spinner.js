import React from 'react';
import loader from './spinner.gif';

const Spinner = () => {
	return (
		<div>
			<img
				src={loader}
				alt="Loading..."
				style={{ width: '200px', margin: 'auto', display: 'block' }}
			/>
		</div>
	);
};

export default Spinner;

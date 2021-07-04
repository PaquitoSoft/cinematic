import React from 'react';
// import cn from 'classnames';

// import styles from './alert.module.css';

export const types = {
	success: 'success',
	error: 'error'
};

function Alert({ children }) {
	return (
		<div className="p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4 bg-red-200">
			<div className="flex-shrink-0">
				<img
					src="/images/error_outline_black_24dp.svg" alt="alert icon"
					width={56}
					height={56}
				/>
			</div>
			<div>
				<div className="text-xl font-medium text-black">Alert!</div>
				<p className="text-gray-500">{children}</p>
			</div>
		</div>
	);
}

export default Alert;

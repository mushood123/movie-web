import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
	// State to hold the debounced value
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		// Set a timer to update the debounced value after the specified delay
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// Cleanup the timer if the component unmounts or dependencies change
		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]); // Re-run effect when `value` or `delay` changes

	return debouncedValue;
};
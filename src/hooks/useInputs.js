import { useRef, useState } from 'react';

const useInputs = (initialData) => {
	const [inputs, setInputs] = useState(initialData);

	const $name = useRef(null);

	const changeFn = (evt) => {
		const { id, value } = evt.target;

		setInputs((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const emptyFn = () => {
		setInputs({ name: '', phone: '' });
		$name.current.focus();
	};

	return [inputs, changeFn, emptyFn, $name];
};

export default useInputs;

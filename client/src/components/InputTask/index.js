import React, { useState } from 'react';

const InputTask = () => {
	const [task, setTask] = useState('');

	const submitForm = async (event) => {
		event.preventDefault();

		try {
			const body = { task };
			const response = await fetch('http://localhost:5000/todos', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			window.location = '/';
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<>
			<h1>Todo App</h1>
			<form method='POST' onSubmit={submitForm}>
				<input
					type='text'
					className='form-control'
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
				<button type='submit'>Adicionar</button>
			</form>
		</>
	);
};

export default InputTask;

import React, { useState, useEffect } from 'react';
import EditTask from '../EditTask';

const ListTask = () => {
	const [listedTasks, setListedTasks] = useState([]);

	const deleteTask = async (id) => {
		try {
			const taskToDelete = await fetch(`http://localhost:5000/todos/${id}`, {
				method: 'DELETE',
			});
			setListedTasks(listedTasks.filter((task) => task.id !== id));
		} catch (error) {
			console.error(error.message);
		}
	};

	const getTasks = async () => {
		try {
			const response = await fetch('http://localhost:5000/todos');
			const data = await response.json();
			setListedTasks(data);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<>
			<section className='list-tasks'>
				{listedTasks.map((task) => {
					return (
						<div className='task' key={task.id}>
							<p>{task.task}</p>
							<div className='manager'>
								<EditTask task={task} />
								<button
									className='btn btn-danger'
									onClick={() => deleteTask(task.id)}
								>
									Deletar
								</button>
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default ListTask;

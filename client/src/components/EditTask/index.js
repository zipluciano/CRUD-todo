import React, { useState } from 'react';

const EditTask = ({ task }) => {
	const [taskToEdit, setTaskToEdit] = useState(task.task);

	const editTask = async (e) => {
		e.preventDefault();

		try {
			const body = { task: taskToEdit };
			const response = await fetch(`http://localhost:5000/todos/${task.id}`, {
				method: 'PUT',
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
			<div className='container'>
				{/* <h2>Modal Example</h2> */}

				<button
					type='button'
					className='btn btn-primary'
					data-toggle='modal'
					data-target={`#id${task.id}`}
				>
					Editar
				</button>

				<div className='modal' id={`id${task.id}`}>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h4 className='modal-title'>Editar Tarefa</h4>
								<button type='button' className='close' data-dismiss='modal'>
									&times;
								</button>
							</div>

							<div className='modal-body'>
								<input
									type='text'
									className='form-control'
									value={taskToEdit}
									onChange={(e) => setTaskToEdit(e.target.value)}
								/>
							</div>

							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-warning'
									data-dismiss='modal'
									onClick={(e) => editTask(e)}
								>
									Editar
								</button>
								<button
									type='button'
									className='btn btn-danger'
									data-dismiss='modal'
								>
									Fechar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditTask;

const express = require('express');
const app = express();
const cors = require('cors');

// conexão com banco de dados
const pool = require('./db');

app.use(cors());

// buscando dados do "client side"
app.use(express.json());

// POST
app.post('/todos', async (req, res) => {
	try {
		const { task } = req.body;
		const newTodoTask = await pool.query(
			'insert into todo (task) values($1) returning *',
			[task]
		);
		res.json(newTodoTask.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// GET -> obter todas as tarefas
app.get('/todos', async (req, res) => {
	try {
		const getAllTasks = await pool.query('select * from todo');
		res.json(getAllTasks.rows);
	} catch (error) {
		console.error(error.message);
	}
});

// GET -> obter tarefa específica
app.get('/todos/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const task = await pool.query('select * from todo where id = $1', [id]);
		res.json(task.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// PUT -> para editar uma tarefa
app.put('/todos/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { task } = req.body;
		const updateTask = await pool.query(
			'update todo set task = $1 where id = $2',
			[task, id]
		);
		res.json('Tarefa atualizada');
	} catch (error) {
		console.error(error.message);
	}
});

// DELETE -> deletar tarefa
app.delete('/todos/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleteTask = await pool.query('delete from todo where id = $1', [id]);
		res.json('Tarefa foi deletada');
	} catch (error) {
		console.error(error.message);
	}
});

app.listen(5000, () => {
	console.log('Server rodando na porta 5000');
});

// para resetar os dados da tabela, zerando id: TRUNCATE <nome da tabela> RESTART IDENTITY;

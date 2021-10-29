import './App.css';
import InputTask from './components/InputTask';
import ListTask from './components/ListTask';

function App() {
	return (
		<div className='App'>
			<header className='header-page'>
				<InputTask />
			</header>
			<ListTask />
		</div>
	);
}

export default App;

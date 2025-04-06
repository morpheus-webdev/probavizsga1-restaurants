import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Restaurants } from './components/Restaurants';
import { Home } from './components/Home';

function App() {
	return (
		<div id='app'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/restaurants' element={<Restaurants />} />
			</Routes>
		</div>
	);
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const staticServerUri = process.env.REACT_APP_PATH || '';

function App() {
	useEffect(() => {
		console.log(staticServerUri);

		axios
			.get('https://api.github.com/users/EdenKim-dev')
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path={staticServerUri + '/'}
					element={
						<div className="App">
							<header className="App-header">
								<img src={logo} className="App-logo" alt="logo" />
								<p>
									Edit <code>src/App.js</code> and save to reload.
								</p>
								<a
									className="App-link"
									href="https://reactjs.org"
									target="_blank"
									rel="noopener noreferrer"
								>
									Learn React
								</a>
							</header>
						</div>
					}
				></Route>
				<Route path={staticServerUri + '/login'} element={<div>로그인 페이지</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
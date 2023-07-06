import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

const staticServerUri = process.env.REACT_APP_PATH || '';
console.log(staticServerUri);

function App() {
    useEffect(() => {
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
                        <div>
                            <header>
                                <img src alt="logo" />
                                <p>
                                    Edit <code>src/App.js</code> and save to reload.
                                </p>
                                <a href="https://reactjs.org" target="_blank">
                                    Learn React
                                </a>
                            </header>
                        </div>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
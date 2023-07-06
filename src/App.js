import {useEffect} from 'react';
import axios from 'axios';

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
    );
}

export default App;
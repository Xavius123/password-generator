import React from 'react';
import logo from './logo.svg';
import './App.css';
import { alphabetArray } from './helpers/string.helper';

function App() {
    const alphabetLowerCase = alphabetArray(false);
    const alphabetUpperCase = alphabetArray(true);

    console.log(alphabetLowerCase);
    console.log(alphabetUpperCase);
    return (
        <div className="App">
            <h1>Password Generator</h1>
        </div>
    );
}

export default App;

import React, { useState } from 'react';
import './App.scss';
import {
    alphabetArray,
    numbersArray,
    symbolsArray,
} from '../helpers/string.helper';
import Toggle from '../components/toggle/toggle';
import Slider from '../components/slider/slider';

function App() {
    const [generatedText, setGeneratedText] = useState(5);
    const [upperCase, setUpperCase] = useState(false);
    const alphabetLowerCase = alphabetArray(false);
    const alphabetUpperCase = alphabetArray(true);
    const numbers = numbersArray();
    const symblos = symbolsArray();

    // console.log(alphabetLowerCase);∏
    // console.log(alphabetUpperCase);
    // console.log(numbers);
    // console.log(symblos);
    return (
        <div className="App">
            <div className="form">
                <h1>Password Generator</h1>
                <Slider />
                <Toggle text="Include Uppercase" />
                <Toggle text="Include Lowercase" />
                <Toggle text="Include Numbers" />
                <Toggle text="Include Symbols" />

                <button type="button">Generate Password</button>
                <p>generatedText</p>
            </div>
        </div>
    );
}

export default App;

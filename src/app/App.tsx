import React, { useState } from 'react';
import './App.scss';
import {
    alphabetArray,
    numbersArray,
    symbolsArray,
} from '../helpers/string.helper';

function App() {
    const [step, setStep] = useState(5);
    const [upperCase, setUpperCase] = useState(false);
    const alphabetLowerCase = alphabetArray(false);
    const alphabetUpperCase = alphabetArray(true);
    const numbers = numbersArray();
    const symblos = symbolsArray();

    // console.log(alphabetLowerCase);∏
    // console.log(alphabetUpperCase);
    // console.log(numbers);
    // console.log(symblos);

    const onChange = (event: any) => {
        const currentStep = event.target.value;
        setStep(currentStep);
    };

    return (
        <div className="App">
            <h1>Password Generator</h1>
            <input
                type="range"
                className="slider"
                value={step}
                min="0"
                max="100"
                onChange={(e) => onChange(e)}
            />
            <p>Include Uppercase</p>
            <input type="checkbox" />
            <p>Include Lowercase</p>
            <input type="checkbox" />
            <p>Include Numbers</p>
            <input type="checkbox" />
            <p>Include Symbols</p>
            <input type="checkbox" />

            <button type="button">Generate Password</button>
            <p>Generated Password Text</p>
        </div>
    );
}

export default App;

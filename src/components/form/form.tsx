import React, { ReactElement, useState } from 'react';
import { passwordGenerator } from '../../helpers/password.helper';

import Slider from '../slider/slider';
import Toggle from '../toggle/toggle';
import './form.scss';

const Form = (): ReactElement => {
    const [generatedText, setGeneratedText] = useState('');
    const [sliderValue, setSliderValue] = useState(5);
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const onGeneratePassword = (): any => {
        const password = passwordGenerator(
            sliderValue,
            upperCase,
            lowerCase,
            numbers,
            symbols
        );
        setGeneratedText(password);
    };

    return (
        <div className="form">
            <h1>Password Generator</h1>
            <Slider changeSlide={(e) => setSliderValue(e)} />
            <Toggle
                text="Include Uppercase"
                onToggle={(e) => setUpperCase(e)}
            />
            <Toggle
                text="Include Lowercase"
                onToggle={(e) => setLowerCase(e)}
            />
            <Toggle text="Include Numbers" onToggle={(e) => setNumbers(e)} />
            <Toggle text="Include Symbols" onToggle={(e) => setSymbols(e)} />

            <button type="button" onClick={() => onGeneratePassword()}>
                Generate Password
            </button>
            <p>{sliderValue}</p>
            {/* <p>{generatedText}</p> */}
            {/* <p>{generatedText.length}</p> */}
        </div>
    );
};

export default Form;

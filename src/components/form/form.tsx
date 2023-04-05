import React, { ReactElement, useState } from 'react';
import { passwordGenerator } from '../../helpers/password.helper';
import Slider from '../slider/slider';
import Toggle from '../toggle/toggle';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
import './form.scss';

const Form = (): ReactElement => {
    const [generatedText, setGeneratedText] = useState('');
    const [disabled, setDisabled] = useState(false);
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

    const onCopy = (): void => {
        navigator.clipboard.writeText(generatedText);
    };

    return (
        <div className="form">
            <h1 className="form__header">Password Generator</h1>
            <Slider
                min={0}
                max={100}
                step={5}
                changeSlide={(e) => setSliderValue(e)}
            />
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
            <button
                type="button"
                className="form__btn"
                disabled={disabled}
                onClick={() => onGeneratePassword()}
            >
                Generate Password
            </button>
            <p>{sliderValue}</p>
            <p>{disabled}</p>
            <p className="form__generatedText">
                {generatedText}
                <button onClick={() => onCopy()}>
                    <HiOutlineClipboardCopy />
                </button>
            </p>
        </div>
    );
};

export default Form;

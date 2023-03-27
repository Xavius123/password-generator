import React, { ReactElement, useState } from 'react';
import './slider.scss';

interface SliderProps {}

const Slider = (props: SliderProps): ReactElement => {
    const [step, setStep] = useState(5);
    const onChange = (event: any) => {
        const currentStep = event.target.value;
        setStep(currentStep);
    };
    return (
        <div className="slider">
            <input
                type="range"
                className="slider"
                value={step}
                min="0"
                max="100"
                onChange={(e) => onChange(e)}
            />
        </div>
    );
};

export default Slider;

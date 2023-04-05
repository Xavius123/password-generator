import React, { ReactElement, useState } from 'react';
import './slider.scss';

interface SliderProps {
    min: number;
    max: number;
    step: number;
    changeSlide: (rangeValue: number) => void;
}

const Slider = (props: SliderProps): ReactElement => {
    const { min, max, step, changeSlide } = props;
    const [sliderValue, setSliderValue] = useState(5);

    const onChange = (event: any) => {
        const currentStep = event.target.value;
        setSliderValue(currentStep);
        changeSlide(currentStep);
    };

    return (
        <div className="container">
            <div className="slider">
                <input
                    className="slider__input"
                    type="range"
                    value={sliderValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(e) => onChange(e)}
                />
                <div className="thumb">{sliderValue}</div>
            </div>
        </div>
    );
};

export default Slider;

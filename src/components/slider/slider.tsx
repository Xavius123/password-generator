import React, { ReactElement, useState } from 'react';
import './slider.scss';

interface SliderProps {
    changeSlide: (rangeValue: number) => void;
}

const Slider = (props: SliderProps): ReactElement => {
    const { changeSlide } = props;
    const [sliderValue, setSliderValue] = useState(5);
    const onChange = (event: any) => {
        const currentStep = event.target.value;
        setSliderValue(currentStep);
        changeSlide(currentStep);
    };
    return (
        <div className="slider">
            <input
                type="range"
                className="slider"
                value={sliderValue}
                min="0"
                max="100"
                onChange={(e) => onChange(e)}
            />
        </div>
    );
};

export default Slider;

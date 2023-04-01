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
        <div className="container">
            <div className="slider">
                <div className="range-slider_line">
                    <div className="range-slider_line-fill"></div>
                </div>
                <input
                    className="slider_input"
                    type="range"
                    value={sliderValue}
                    min="0"
                    max="100"
                    onChange={(e) => onChange(e)}
                />
            </div>
        </div>
    );
};

export default Slider;

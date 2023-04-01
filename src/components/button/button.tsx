import React, { ReactElement, useState } from 'react';
import './toggle.scss';

interface ButtonProps {
    text: string;
}

const Toggle = (props: ButtonProps): ReactElement => {
    const { text } = props;

    const onChange = () => {
        // test
    };

    return <div className="button">Test</div>;
};

export default Toggle;

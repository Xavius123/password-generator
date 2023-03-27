import React, { ReactElement } from 'react';
import './toggle.scss';

interface ToggleProps {
    text: string;
}

const Toggle = (props: ToggleProps): ReactElement => {
    const { text } = props;

    return (
        <div className="toggle">
            <p>{text}</p>
            <input type="checkbox" />
        </div>
    );
};

export default Toggle;

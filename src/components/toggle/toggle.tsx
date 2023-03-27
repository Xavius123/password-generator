import React, { ReactElement, useState } from 'react';
import './toggle.scss';

interface ToggleProps {
    text: string;
}

const Toggle = (props: ToggleProps): ReactElement => {
    const { text } = props;
    const [checkbox, setCheckbox] = useState(false);

    const onChange = (event: any) => {
        const isChecked = event.target.checked!;
        setCheckbox(isChecked);
    };

    return (
        <div className="toggle">
            <p className="toggle__text">{text}</p>
            <input
                className="toggle__input"
                type="checkbox"
                checked={checkbox}
                onChange={(e) => onChange(e)}
            />
        </div>
    );
};

export default Toggle;

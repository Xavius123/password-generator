import React, { ReactElement, useState } from 'react';
import './toggle.scss';

interface ToggleProps {
    text: string;
    onToggle: (isChecked: boolean) => void;
}

const Toggle = (props: ToggleProps): ReactElement => {
    const { text, onToggle } = props;
    const [checkbox, setCheckbox] = useState(false);

    const onChange = (isChecked: boolean) => {
        setCheckbox(isChecked);
        onToggle(isChecked);
    };

    return (
        <div className="toggle">
            <p className="toggle__text">{text}</p>
            <input
                className="toggle__input"
                type="checkbox"
                checked={checkbox}
                onChange={(e) => onChange(e.target.checked)}
            />
        </div>
    );
};

export default Toggle;

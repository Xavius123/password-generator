import React, { ReactElement } from 'react';
import './App.scss';

import Form from '../components/form/form';

const App = (): ReactElement => {
    return (
        <div className="app">
            <Form />
        </div>
    );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStorage } from '../assets/js/context/GlobalContext';

import Dashboard from '../assets/js/Dashboard';

const App = () => {
    return (
        <GlobalStorage>
            <Dashboard />
        </GlobalStorage>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

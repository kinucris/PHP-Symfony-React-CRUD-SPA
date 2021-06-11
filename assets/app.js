import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../assets/js/Dashboard';

const App = () => {
    return (
        <div>
            <Dashboard />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

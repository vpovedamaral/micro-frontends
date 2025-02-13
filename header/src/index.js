import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

const App = () => (
    <div>
        <Header />
        <p>Header MFE en fonctionnement.</p>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

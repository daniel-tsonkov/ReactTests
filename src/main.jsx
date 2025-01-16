import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return React.createElement(
    'div',
    { className: 'title' },
    React.createElement('h1', { className: 'title' }, 'sss')
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

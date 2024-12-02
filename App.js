import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h1', { id: 'h1_id' }, 'Heading 1');

const heading2 = React.createElement('h1', { id: 'h2_id' }, 'Heading 2');

const child = React.createElement('div', { id: 'child' }, [heading1, heading2]);

const parent = React.createElement('div', { id: 'parent' }, child);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

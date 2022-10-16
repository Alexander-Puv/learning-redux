import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { secondStore } from './secondStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={window.location.pathname === '/' ? secondStore : store}>
        <App />
    </Provider>
);

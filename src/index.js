import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthProvider } from './hooks/AdminHooks/AuthProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </Provider>
)

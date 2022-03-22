import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//invocation of reactDOM.render, passing in App component and encvoking it using jsx
//App component is wrapped in .StrictMode component which tells react to tell us when
//anything in our code violates React guidelines
//Passing App component into ReactDOM.render function, then passing in a reference to the
//root div that we saw on the index.html 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

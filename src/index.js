import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import Hello from './components/hello';

// const root = <div>
//   <Hello firstName="nem0" lastName="n0b0dy"/>
//   <Hello firstName="mr" lastName="n0b0dy"/>
// </div>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

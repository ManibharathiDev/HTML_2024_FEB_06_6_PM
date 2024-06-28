import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Kavi from './kavi';
import MyButton from './mybutton';

const root = ReactDOM.createRoot(document.getElementById('tamil'));
root.render(
  <React.StrictMode>
    <App />
    {/* <div>
        Welcome Qtree Technology
    </div> */}
    {/* <Kavi/>
    <Kavi/>
    <Kavi></Kavi>
    <MyButton/>
    <MyButton/>
    <MyButton/>
    <MyButton/>
    <MyButton/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

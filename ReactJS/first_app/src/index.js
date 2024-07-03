import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Kavi from './kavi';
import MyButton from './mybutton';
import Home from './home'
import Website from './website';

//let heading = <h1>Welcome Qtree Technology<span>-welcome</span></h1>;
//let heading = React.createElement('h1',{},"Qtree Tech");
let a = 5;
//Expressions
//let heading = <h1>Addition of 5+5 is {a+a}</h1>

let courses = (<ul>
  <li>MCA</li>
  <li>MBA</li>
  <li>BArch</li>
</ul>)

let value = "";

if(a == 5)
  value = a*2;
else
  value = a;
let myText = <h1>{value}</h1>


// let subHeading = React.createElement('span',{},"Welcome you all!");
// heading.append(subHeading);
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myText);
root.render(<Website/>);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <div>
//         Welcome Qtree Technology
//     </div> */}
//     {/* <Kavi/>
//     <Kavi/>
//     <Kavi></Kavi>
//     <MyButton/>
//     <MyButton/>
//     <MyButton/>
//     <MyButton/>
//     <MyButton/> */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react'; // State Import

function App(){

  const[count,setCount] = useState(0);
  const[multiply,setMultiply] = useState(2);

  function printMyName(){
    console.log("Manibharathi");
  }

  let myName = "Tamilarasan";
  //let count = 0;

  function changeCount(){
    //count = count+1;
    let newCount = count+1;
    setCount(newCount);
    console.log(count);
  }

  function secondTable(){
    let newMultiply = multiply*2;
    setMultiply(newMultiply);
  }

  return(
    <div>
      <Header title="Kavibharathi" priority="high"/>
      <Header title="Qtree Tech" priority="low"/>
        Hello, {myName} - {count}
        <button onClick={changeCount}>Change Count</button>
        <div>
            {multiply}
          </div>
          <button onClick={secondTable}>Multiply</button>
        <Footer callback={printMyName}/>
      </div>
  )
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

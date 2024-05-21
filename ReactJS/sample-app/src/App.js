import logo from './logo.svg';
import './App.css';
import Header from './header';
import Content from './content';
import Footer from './footer';
import { useState } from 'react';

function App(){

  //let count = 0;
  //useState -> hooks
  // let[variableName,setMethod] = useState(initialState)
  let [count,setCount] = useState(0);

  let [data,setData] = useState("Kavi")

  function changeCount()
  {
    let value = count+1;
    setCount(value);
    console.log("Count",count);
    let name = "Harshan-"+count;
    setData(name);
  }

  return(
    <>
      {/* <Content kavi="My Content" area="Coimbatore"/>
      <Header kavi="My Headers" native="Nagercoil"/>
      <Footer kavi="My Footers" location="Chennai"/> */}

      {
        count
      }

      <button onClick={()=>changeCount()}>
        Change Count
      </button>

      {
        data
      }


      
    </>
);
}
export default App;

// function App() 
// {
//   return (
//     <div className="App">
//       Qtree Tech
//     </div>
//   );
// }

// export default App;

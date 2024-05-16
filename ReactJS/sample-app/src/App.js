import logo from './logo.svg';
import './App.css';
import Header from './header';
import Content from './content';
import Footer from './footer';

function App(){
  return(
    <>
      <Content kavi="My Content" area="Coimbatore"/>
      <Header kavi="My Headers" native="Nagercoil"/>
      <Footer kavi="My Footers" location="Chennai"/>
      
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

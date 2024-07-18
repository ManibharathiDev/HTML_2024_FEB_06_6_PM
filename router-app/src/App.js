import logo from './logo.svg';
import './App.css';
import HomeComponent from './home';
import AboutComponent from './about';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ContactComponent from './contact';
import NotFoundPageComponent from './404';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeComponent/>}/>
            <Route path="abouts" element={<AboutComponent/>}/>
            <Route path='contact_us' element={<ContactComponent/>}/>
            <Route path='/*' element={<NotFoundPageComponent/>}/>
            <Route path='/home/:search' element={<HomeComponent/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Website from './website';
import About from './components/about';
import Services from './components/services';
const MyHome = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/kavi' element={<Website/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path="/service" element={<Services/>}/>
                <Route path="/*" element={<>Page Not Found</>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default MyHome;
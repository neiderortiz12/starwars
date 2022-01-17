import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Person from '../pages/Person';

const AppRouter = () => {
    return (
        <BrowserRouter>
             <Routes>
                 <Route path='/persons' element={<Home/>}>
                    <Route path=':id' element={<Person/>}/>
                 </Route>
                 <Route path='**' element={<Home/>}/>
             </Routes>
        </BrowserRouter>
        
    )
}

export default AppRouter

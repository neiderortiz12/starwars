import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Person from '../pages/Person';

const AppRouter = () => {
    return (
        <BrowserRouter>
             <Routes>
                 <Route path='/starwars/persons' element={<Home/>}>
                    <Route path=':id' element={<Person/>}/>
                 </Route>
                 <Route path='*' element={<Navigate replace to="/starwars/persons"/>}/>
             </Routes>
        </BrowserRouter>
        
    )
}

export default AppRouter

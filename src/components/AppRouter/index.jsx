import { Routes,Route } from "react-router-dom";
import Home from '../../pages/Home'
import Apropos from '../../pages/Apropos'
import Error from '../../pages/Error'
import Logement from '../../pages/Fiche-Logement'

function AppRouter(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Apropos' element={<Apropos/>}/>
            <Route path='/logement/:id' element={<Logement/>}/>
            <Route path='*' element={<Error/>}/>
            
        </Routes>
    )
}
export default AppRouter
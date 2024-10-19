import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import { LandingPage } from './pages/landing/landing';
import { LoginPage } from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';


function App() {
 
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>

  );
}

export default App;

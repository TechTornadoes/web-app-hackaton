import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import './App.css';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';
import MobileAuth from './components/MobileAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/login' Component={LoginPage} />
        <Route path="/mobile-auth/:token" component={MobileAuth} />
      </Routes>
    </div>
  );
}

export default App;

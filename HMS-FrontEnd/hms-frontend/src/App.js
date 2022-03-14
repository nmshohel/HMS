import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Accessories from './Pages/Accessories/Accessories';
import Purchase from './Pages/Purchase/Purchase';
import Condem from './Condem/Condem';

function App() {
  return (
    <div className="App">
                  
            <Router>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/accessories" element={<Accessories/>}/>
                  <Route path="/purchase" element={<Purchase/>}/>
                  <Route path="/condem" element={<Condem/>}/>
                </Routes>
              </Router>
         
    </div>
  );
}

export default App;

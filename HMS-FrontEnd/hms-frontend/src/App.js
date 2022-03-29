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
import PurchaseList from './Pages/Purchase/PurchaseList';
import Assign from './Pages/Assign/Assign';
import Servicing from './Pages/Servicing/Servicing';

function App() {
  return (
    <div className="App">
                  
            <Router>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/accessories" element={<Accessories/>}/>
                  <Route path="/accessories/assign/:id" element={<Assign/>}/>
                  <Route path="/purchase" element={<Purchase/>}/>
                  <Route path="/purchaselist" element={<PurchaseList/>}/>
                  <Route path="/condem" element={<Condem/>}/>
                  <Route path="/servicing" element={<Servicing/>}/>
                </Routes>
              </Router>
         
    </div>
  );
}

export default App;

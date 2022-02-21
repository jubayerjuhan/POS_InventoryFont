import Dashboard from "./Screens/Dashboard/Dashboard.js";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./Screens/Products/Products.js";
import Purchase from "./Screens/Purchase/Purchase.js";
import SaleScreen from "./Screens/SaleScreen/SaleScreen.js";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/sale" element={<SaleScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

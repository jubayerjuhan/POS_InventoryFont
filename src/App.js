import Dashboard from "./Screens/Dashboard/Dashboard.js";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./Screens/Products/Products.js";
import Purchase from "./Screens/Purchase/Purchase.js";
import SaleScreen from "./Screens/SaleScreen/SaleScreen.js";
import SignIn from "./Screens/Login/Login.js";
import SignUp from "./Screens/SignUp/SignUp.js";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.js";
import { useEffect } from "react";
import { loadUser } from "./Redux/Action/useraction.js";
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />} >
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/sale" element={<SaleScreen />} />
          </Route>

          {/* general routes */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

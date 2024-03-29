import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Footer from './Pages/Footer/Footer';
import Products from './Pages/Home/Products/Products';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Product from './Product';
import Orders from './Pages/orders/Orders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <PrivateRoute path="/booking">
              <Booking />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/products">
              <Products />
            </PrivateRoute>
            <PrivateRoute path="/product/:id">
              <Product />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
              </Route>
            
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

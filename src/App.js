
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './components/Dashboard/Dashboard';
import Payment from './components/Payment/Payment';
import CheckoutForm from './components/Payment/CheckoutForm';
import Service from './components/Services/Service/Service';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="login" element={<Login />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            {/* <Route path={`/dashboard/payment/:id`} element={<Payment />} /> */}
            <Route path="service/:id" element={
              <PrivateRoute><Service /></PrivateRoute>


            } />


          </Routes>
          <Footer />
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/HomePage/Home/Home';
import './App.css';
import ServiceDetails from './Component/HomePage/ServiceDetails/ServiceDetails';
import Navigation from './Component/Navigation/Navigation';
import Frequent from './Component/Frequent/Frequent';
import Instruments from './Component/Instruments/Instruments';
import NotFoundPage from './Component/NotFoundPage/NotFoundPage';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivetRoute from './PrivetRoute/PrivetRoute';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivetRoute path="/service/:id">
                <ServiceDetails></ServiceDetails>
              </PrivetRoute>
              <PrivetRoute path="/frequent">
                <Frequent></Frequent>
              </PrivetRoute>
              <PrivetRoute path="/instruments">
                <Instruments></Instruments>
              </PrivetRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="*">
                <NotFoundPage></NotFoundPage>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

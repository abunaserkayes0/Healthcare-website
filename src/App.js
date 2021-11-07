import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/HomePage/Home/Home';
import './App.css';
import ServiceDetails from './Component/HomePage/ServiceDetails/ServiceDetails';
import Navigation from './Component/HomePage/Navigation/Navigation';
import Frequent from './Component/Frequent/Frequent';


function App() {
  return (
    <div>
      <Router>
      <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/frequent">
            <Frequent></Frequent>
          </Route>
          <Route path="*">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

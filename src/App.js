import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Component/Navigation/Navigation';

function App() {
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

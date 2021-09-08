import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Error from './components/pages/Error/Error'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/**" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;

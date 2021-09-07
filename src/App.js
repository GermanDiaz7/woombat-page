import { map } from 'lodash'
import routes from './routes/routes.config'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        {
          map(routes, (route, index) => (
            <Route 
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;

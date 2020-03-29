import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './views/main';
import Settings from './views/settings';
import BuildHistory from './views/build-history';
import BuildDetails from './views/build-details';
import PageNotFound from './views/page-not-found';
import './components/document';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/settings" component={Settings}/>
      <Route exact path="/build-history" component={BuildHistory}/>
      <Route exact path="/build-details/:id" component={BuildDetails}/>
      <Route component={PageNotFound}/>
    </Switch>
  </BrowserRouter>
);

export default App;

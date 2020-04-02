import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainApp from './components/main-app';

import './components/document';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={MainApp}/>
    </Switch>
  </BrowserRouter>
);

export default App;

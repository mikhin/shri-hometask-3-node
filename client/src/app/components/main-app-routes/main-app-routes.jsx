import { Route, Switch } from 'react-router-dom';

import Main from '../../views/main';
import Settings from '../../views/settings';
import BuildHistory from '../../views/build-history';
import BuildDetails from '../../views/build-details';
import PageNotFound from '../../views/page-not-found';

import withSettings from '../../HOCs/with-settings';

class MainAppRoutes extends React.Component {
  render() {
    const {
      settings: {
        id: settingsID,
      },
    } = this.props;

    return (
      <>
        <Switch>
          <Route exact path="/" component={settingsID ? BuildHistory : Main}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/build/:id" component={BuildDetails}/>
          <Route component={PageNotFound}/>
        </Switch>
      </>
    );
  }
}

export default withSettings(MainAppRoutes);

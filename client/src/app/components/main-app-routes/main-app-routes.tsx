import * as React from "react";
import { Route, Switch } from 'react-router-dom';

import Main from '../../views/main';
import Settings from '../../views/settings';
import BuildHistory from '../../views/build-history';
import BuildDetails from '../../views/build-details';
import PageNotFound from '../../views/page-not-found';

import withSettings from '../../HOCs/with-settings';

interface propTypes {
  settings: SettingsType
}

class MainAppRoutes extends React.Component<propTypes, null> {
  render() {
    const {
      settings: {
        repoName,
      },
    } = this.props;

    return (
      <>
        <Switch>
          <Route exact path="/" component={repoName ? BuildHistory : Main}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/commit/:id" component={BuildDetails}/>
          <Route component={PageNotFound}/>
        </Switch>
      </>
    );
  }
}

export default withSettings(MainAppRoutes);

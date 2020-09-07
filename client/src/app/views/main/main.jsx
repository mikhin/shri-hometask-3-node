import PageLayout from '../../components/page-layout';
import WelcomeAction from '../../components/welcome-action';

import startScreenPageHeaderActions from '../../constants/start-screen-page-header-actions';
import withSettings from '../../HOCs/with-settings';

class Main extends React.Component {
  render() {
    return (
      <PageLayout
        actions={startScreenPageHeaderActions}
        pageMods={{
          view: 'start',
        }}
        isPageLoaded={true}
      >
        <WelcomeAction />
      </PageLayout>
    );
  }
}

export default withSettings(Main);

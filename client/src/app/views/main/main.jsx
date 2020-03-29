import PageLayout from '../../components/page-layout';
import WelcomeAction from '../../components/welcome-action';
import startScreenPageHeaderActions from '../../constants/start-screen-page-header-actions';

const Main = () => (
  <PageLayout
    actions={startScreenPageHeaderActions}
    logoURL="/"
    pageMods={{
      view: 'start',
    }}
  >
    <WelcomeAction/>
  </PageLayout>
);

export default Main;

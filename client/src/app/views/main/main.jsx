import { useTranslation } from 'react-i18next';
import PageLayout from '../../components/page-layout';
import WelcomeAction from '../../components/welcome-action';

import startScreenPageHeaderActions from '../../constants/start-screen-page-header-actions';
import withSettings from '../../HOCs/with-settings';

const Main = () => {
  const { t } = useTranslation();

  return (
      <PageLayout
        logoText={t('siteName')}
        actions={startScreenPageHeaderActions}
        pageMods={{
          view: 'start',
        }}
        isPageLoaded={true}
      >
        <WelcomeAction />
      </PageLayout>
  );
};

export default withSettings(Main);

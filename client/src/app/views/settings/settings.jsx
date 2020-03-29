import PageLayout from '../../components/page-layout';
import SettingsLayout from '../../components/settings-layout';
import SettingsLayout__Form from '../../components/settings-layout/__form';
import SettingsForm from '../../components/settings-form';

const Settings = () => (
  <PageLayout
    logoURL="/"
  >
    <SettingsLayout>
      <SettingsLayout__Form>
        <SettingsForm/>
      </SettingsLayout__Form>
    </SettingsLayout>
  </PageLayout>
);

export default Settings;

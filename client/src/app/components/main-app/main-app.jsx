import SettingsProvider from '../../providers/settings-provider';
import MainAppRoutes from '../main-app-routes';

function MainApp() {
  return (
    <SettingsProvider>
      <MainAppRoutes />
    </SettingsProvider>
  );
}

export default MainApp;

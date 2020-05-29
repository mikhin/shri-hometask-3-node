import PageLayout from '../../components/page-layout';
import startScreenPageHeaderActions from '../../constants/start-screen-page-header-actions';

const PageNotFound = () => (
  <PageLayout
    actions={startScreenPageHeaderActions}
    logoURL="/"
    logoText="Страница не найдена"
    isPageLoaded={true}
  >
    <h1>Page not found</h1>
  </PageLayout>
);

export default PageNotFound;

import PageLayout from '../../components/page-layout';
import startScreenPageHeaderActions from '../../constants/start-screen-page-header-actions';

const PageNotFound = () => (
  <PageLayout
    actions={startScreenPageHeaderActions}
    logoURL="/"
  >
    <h1>Page not found</h1>
  </PageLayout>
);

export default PageNotFound;

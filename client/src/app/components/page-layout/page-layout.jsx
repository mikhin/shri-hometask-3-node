import LoadingProgress from 'react-js-loading-progress-bar';

import Page, { Page__Header, Page__Body, Page__Footer } from '../page';
import Footer from '../footer';
import Header from '../header';
import PageTrim from '../page-trim';

const propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.array,
  logoText: PropTypes.string,
  logoURL: PropTypes.string,
  pageMods: PropTypes.shape({
    views: PropTypes.string,
  }),
  isPageLoaded: PropTypes.bool,
};

const defaultProps = {
};

const PageLayout = (props) => {
  const {
    children, actions, logoText, logoURL, pageMods, isPageLoaded,
  } = props;

  return (
    <Page
      mods={pageMods}
    >
      <Page__Header>
        <Header
          actions={actions}
          logoText={logoText}
          logoURL={logoURL}/>
      </Page__Header>
      <Page__Body>
        <PageTrim>
          {isPageLoaded ? children : <LoadingProgress useSpinner visualOnly active={true}/>}
        </PageTrim>
      </Page__Body>
      <Page__Footer>
        <Footer/>
      </Page__Footer>
    </Page>
  );
};

PageLayout.propTypes = propTypes;
PageLayout.defaultProps = defaultProps;

export default PageLayout;

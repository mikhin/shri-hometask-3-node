import * as React from "react";
import LoadingProgress from 'react-js-loading-progress-bar';

import Page, {Page__Body, Page__Footer, Page__Header} from '../page';
import Footer from '../footer';
import Header from '../header';
import PageTrim from '../page-trim';

interface propTypes {
  children: React.ReactNode,
  actions?: Array<object>,
  logoText?: string,
  logoURL?: string,
  pageMods?: object,
  isPageLoaded?: boolean,
}

const PageLayout: React.FC<propTypes> = (props) => {
  const {
    children, actions, logoText, logoURL, pageMods, isPageLoaded,
  } = props;

  return (
      <Page mods={pageMods}>
        <Page__Header>
          <Header
              actions={actions}
              logoText={logoText}
              logoURL={logoURL} />
        </Page__Header>
        <Page__Body>
          <PageTrim>
            {isPageLoaded ? children : <LoadingProgress useSpinner visualOnly active={true} />}
          </PageTrim>
        </Page__Body>
        <Page__Footer>
          <Footer />
        </Page__Footer>
      </Page>
  );
};

export default PageLayout;

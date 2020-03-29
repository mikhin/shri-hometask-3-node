import PageLayout from '../../components/page-layout';

import buildDetailsPageHeaderActions from '../../constants/build-details-page-header-actions';
import BuildDetailsLayout, {
  BuildDetailsLayout__Commit,
  BuildDetailsLayout__Log,
} from '../../components/build-details-layout';
import CommitCard from '../../components/commit-card';
import Log from '../../components/log';

const commit = {
  id: 1368, title: 'add documentation for postgres scaler', branch: 'master', hash: '9c9f0b9', author: 'Philip Kirkorov', status: 'success', url: '/',
};

const BuildDetails = () => (
  <PageLayout
    actions={buildDetailsPageHeaderActions}
    logoText="philip1967/my-awesome-repo"
  >
    <BuildDetailsLayout>
      <BuildDetailsLayout__Commit>
        <CommitCard
          author={commit.author}
          branch={commit.branch}
          id={commit.id}
          title={commit.title}
          hash={commit.hash}
          mods={{
            type: commit.status,
            view: 'detail',
          }}/>
      </BuildDetailsLayout__Commit>
      <BuildDetailsLayout__Log>
        <Log/>
      </BuildDetailsLayout__Log>
    </BuildDetailsLayout>

  </PageLayout>
);

export default BuildDetails;

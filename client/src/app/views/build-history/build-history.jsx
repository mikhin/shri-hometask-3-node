import PageLayout from '../../components/page-layout';
import BuildHistoryLayout, { BuildHistoryLayout__CommitList } from '../../components/build-history-layout';
import CommitList from '../../components/commit-list';
import CommitList__Item from '../../components/commit-list/__item';
import CommitCard from '../../components/commit-card';

import buildHistoryPageHeaderActions from '../../constants/build-history-page-header-actions';
import commits from '../../constants/commits';

const BuildHistory = () => (
  <PageLayout
    actions={buildHistoryPageHeaderActions}
    logoText="philip1967/my-awesome-repo"
  >
    <BuildHistoryLayout>
      <BuildHistoryLayout__CommitList>
        <CommitList>
          {commits.map((commit) => (
            <CommitList__Item
              key={commit.id}
            >
              <CommitCard
                author={commit.author}
                branch={commit.branch}
                id={commit.id}
                title={commit.title}
                hash={commit.hash}
                url={commit.url}
                mods={{
                  type: commit.status,
                }}/>
            </CommitList__Item>
          ))}
        </CommitList>
      </BuildHistoryLayout__CommitList>
    </BuildHistoryLayout>
  </PageLayout>
);

export default BuildHistory;

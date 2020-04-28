import * as React from "react";
import { format } from 'date-fns';
import { History } from "history";

import PageLayout from '../../components/page-layout';
import CommitCard from '../../components/commit-card';
import Log from '../../components/log';
import BuildDetailsLayout, {
  BuildDetailsLayout__Commit,
  BuildDetailsLayout__Log,
} from '../../components/build-details-layout';

import withSettings from '../../HOCs/with-settings/with-settings';
import { ReactComponent as RebuildIcon } from '../../assets/icons/rebuild-build.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';

interface propTypes {
  history?: History,
  match?: {
    params: {
      id: string,
    },
  },
  settings?: SettingsType,
}

interface stateTypes {
  commit: CommitType,
  log: string,
  fetchStatus: string,
  formError: string,
}

class BuildDetails extends React.Component<propTypes, stateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      commit: {},
      log: '',
      fetchStatus: '',
      formError: '',
    };
  }

  componentDidMount() {
    this.fetchBuild();
    this.fetchLog();
  }

  fetchBuild = async () => {
    const {
      match: {
        params: {
          id: buildId,
        },
      },
    } = this.props;

    fetch(`/api/builds/${buildId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(
        (build) => {
          this.setState({
            commit: {
              id: build.buildNumber,
              title: build.commitMessage,
              hash: build.commitHash,
              branch: build.branchName,
              author: build.authorName,
              status: build.status.toLowerCase(),
              datetime: build.start,
              duration: build.duration,
            },
          });
        },
      )
      .catch(() => {
        const {
          history: {
            push,
          },
        } = this.props;

        push('/');
      });
  };

  fetchLog = async () => {
    const {
      match: {
        params: {
          id: buildId,
        },
      },
    } = this.props;

    fetch(`/api/builds/${buildId}/logs`)
      .then((res) => res.text())
      .then(
        (log) => {
          this.setState({ log });
        },
      );
  };

  rebuild = async () => {
    const {
      commit: {
        hash,
      },
    } = this.state;

    try {
      this.setState({ fetchStatus: 'buildRequesting' });

      const response = await fetch(`/api/builds/${hash}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
      });

      const { status } = response;

      const result = await response.json();

      if (status === 200) {
        this.setState({ fetchStatus: 'buildRequested', formError: '' }, () => {
          window.location.href = `/build/${result.id}`;
        });
      } else {
        this.setState({
          fetchStatus: 'buildRequestingError',
          formError: result.message,
        });
      }
    } catch {
      this.setState({ fetchStatus: 'buildRequestingError' });
    }
  };

  render() {
    const {
      commit,
      log,
    } = this.state;

    const {
      settings: {
        repoName,
      },
    } = this.props;

    const datetime = new Date(commit.datetime);
    const formattedDatetime = !isNaN(datetime.getTime()) ? format(datetime, 'd MMM, H:mm') : '';

    const menuItems = [
      {
        text: 'Rebuild',
        onClick: this.rebuild,
        icon: RebuildIcon,
      },
      {
        hiddenText: 'Settings',
        url: '/settings',
        icon: SettingsIcon,
        mods: {
          onlyIcon: true,
        },
      },
    ];

    return (
      <PageLayout
        actions={menuItems}
        logoText={repoName}
        logoURL="/"
        isPageLoaded={!!commit.id}
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
              }}
              datetime={formattedDatetime}
              duration={commit.duration}
            />
          </BuildDetailsLayout__Commit>
          {log && (
            <BuildDetailsLayout__Log>
              <Log text={log} />
            </BuildDetailsLayout__Log>
          )}
        </BuildDetailsLayout>

      </PageLayout>
    );
  }
}

export default withSettings(BuildDetails);

import { format } from 'date-fns';

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

class BuildDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      build: {},
      log: '',
    };
  }

  componentDidMount() {
    this.fetchBuild();
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
            build: {
              id: build.buildNumber,
              title: build.commitMessage,
              hash: build.commitHash,
              branch: build.branchName,
              author: build.authorName,
              status: build.status.toLowerCase(),
              datetime: build.start,
              duration: build.duration,
            },
          }, this.fetchLog);
        },
      )
      .catch(() => {
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
      build: {
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
          window.location = `/build/${result.id}`;
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
      build,
      log,
    } = this.state;

    const {
      settings: {
        repoName,
      },
    } = this.props;

    const datetime = new Date(build.datetime);
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
        isPageLoaded={!!build.id}
      >
        <BuildDetailsLayout>
          <BuildDetailsLayout__Commit>
            <CommitCard
              author={build.author}
              branch={build.branch}
              id={build.id}
              title={build.title}
              hash={build.hash}
              mods={{
                type: build.status,
                view: 'detail',
              }}
              datetime={formattedDatetime}
              duration={build.duration}
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

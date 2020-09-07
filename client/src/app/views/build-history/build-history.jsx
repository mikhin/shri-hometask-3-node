import { format } from 'date-fns';

import PageLayout from '../../components/page-layout';
import BuildHistoryLayout, { BuildHistoryLayout__CommitList } from '../../components/build-history-layout';
import CommitList from '../../components/commit-list';
import CommitList__Item from '../../components/commit-list/__item';
import CommitCard from '../../components/commit-card';

import withSettings from '../../HOCs/with-settings/with-settings';

import { ReactComponent as RunBuildIcon } from '../../assets/icons/run-build.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import NewBuildForm from '../../components/new-build-form';
import NewBuildModal from '../../components/new-build-modal';

class BuildHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      builds: [],
      fetchStatus: '',
      hash: '',
    };
  }

  componentDidMount() {
    this.fetchBuilds();
  }

  fetchBuilds = async () => {
    this.setState({
      fetchStatus: 'buildLoading',
    });
    fetch('/api/builds')
      .then((res) => res.json())
      .then(
        (builds) => {
          this.setState({
            builds: builds.map((build) => ({
              url: `/build/${build.id}`,
              id: build.buildNumber,
              title: build.commitMessage,
              hash: build.commitHash,
              branch: build.branchName,
              author: build.authorName,
              status: build.status.toLowerCase(),
              datetime: build.start,
              duration: build.duration,
            })),
          });
        },
      )
      .catch(() => {
        this.setState({
          builds: [],
        });
      });
  };

  toggleRunBuildModal = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };

  onHashChange = (hash) => {
    this.setState({
      hash,
    });
  };

  getHashError = () => {
    const {
      hash,
    } = this.state;

    if (!hash) {
      return 'Поле обязательно для заполнения';
    }

    return '';
  };

  runBuild = async (event) => {
    const {
      history,
    } = this.props;

    const {
      hash,
    } = this.state;

    event.preventDefault();

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
          history.push(`/build/${result.id}`);
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
      builds,
      fetchStatus,
      isModalOpen,
      hash,
      formError,
    } = this.state;

    const {
      settings: {
        repoName,
      },
    } = this.props;

    const menuItems = [
      {
        text: 'Run build',
        onClick: this.toggleRunBuildModal,
        icon: RunBuildIcon,
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

    const canSubmit = (
      !this.getHashError()
      && fetchStatus !== 'buildRequesting'
    );

    return (
      <PageLayout
        actions={menuItems}
        logoText={repoName}
        logoURL={'/'}
        isPageLoaded={fetchStatus !== 'buildsLoading'}
      >
        <BuildHistoryLayout>
          <BuildHistoryLayout__CommitList>
            <CommitList>
              {builds.map((commit) => {
                const datetime = new Date(commit.datetime);
                const formattedDatetime = !isNaN(datetime.getTime()) ? format(datetime, 'd MMM, H:mm') : '';

                return (
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
                      datetime={formattedDatetime}
                      duration={commit.duration}
                      mods={{
                        type: commit.status,
                      }} />
                  </CommitList__Item>
                );
              })}
            </CommitList>
          </BuildHistoryLayout__CommitList>
          <NewBuildModal
            isModalOpen={isModalOpen}
            onClose={this.toggleRunBuildModal}
          >
            <NewBuildForm
              hash={hash}
              onSubmit={this.runBuild}
              onCancel={this.toggleRunBuildModal}
              onHashChange={this.onHashChange}
              hashError={this.getHashError()}
              formError={formError}
              canSubmit={canSubmit}
            />
          </NewBuildModal>
        </BuildHistoryLayout>
      </PageLayout>);
  }
}

export default withSettings(BuildHistory);

import PageLayout from '../../components/page-layout';
import SettingsLayout from '../../components/settings-layout';
import SettingsLayout__Form from '../../components/settings-layout/__form';
import SettingsForm from '../../components/settings-form';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      repoName: '',
      buildCommand: '',
      mainBranch: '',
      period: '',
      fetchStatus: '',
      formSuccess: '',
    };
  }

  componentDidMount() {
    this.setState({
      fetchStatus: 'loadingSettings',
    }, () => {
      fetch('/api/settings')
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              ...result,
              fetchStatus: 'settingsLoaded',
            });
          },
        )
        .catch(() => {});
    });
  }

  onRepoNameChange = (repoName) => {
    this.setState({
      repoName,
    });
  };

  getRepoNameError = () => {
    const {
      repoName,
    } = this.state;

    if (!repoName) {
      return 'Поле обязательно для заполнения';
    }

    return '';
  };

  onBuildCommandChange = (buildCommand) => {
    this.setState({
      buildCommand,
    });
  };

  getBuildCommandError = () => {
    const {
      buildCommand,
    } = this.state;

    if (!buildCommand) {
      return 'Поле обязательно для заполнения';
    }

    return '';
  };

  onMainBranchChange = (mainBranch) => {
    this.setState({
      mainBranch,
    });
  };

  getMainBranchError = () => {
    const {
      mainBranch,
    } = this.state;

    if (!mainBranch) {
      return 'Поле обязательно для заполнения';
    }

    return '';
  };

  onPeriodChange = (period) => {
    if (!period.match(/^\d+$/)) return;
    this.setState({
      period: period <= 0 || period === '' ? '0' : period,
    });
  };

  getPeriodError = () => {
    const {
      period,
    } = this.state;

    if (!period) {
      return 'Поле обязательно для заполнения';
    }

    return '';
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const {
      updateSettings,
    } = this.props;

    const {
      repoName,
      buildCommand,
      mainBranch,
      period,
    } = this.state;

    try {
      this.setState({ fetchStatus: 'settingsUploading' });

      const response = await fetch('/api/settings', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          repoName,
          buildCommand,
          mainBranch,
          period: parseInt(period, 10),
        }),
      });

      const { status } = response;

      const message = await response.text();

      if (status === 200) {
        this.setState({ fetchStatus: 'settingsUploaded', formError: '', formSuccess: 'Настройки сохранены' });
        updateSettings({
          repoName,
          buildCommand,
          mainBranch,
          period: parseInt(period, 10),
        });
      } else {
        this.setState({
          fetchStatus: 'settingsUploadingError',
          formError: message,
        });
      }
    } catch {
      this.setState({ fetchStatus: 'settingsUploadingError' });
    }
  };

  render() {
    const {
      id,
      repoName,
      buildCommand,
      mainBranch,
      period,
      fetchStatus,
      formError,
      formSuccess,
    } = this.state;

    const canSubmit = (
      !this.getRepoNameError()
      && !this.getBuildCommandError()
      && !this.getMainBranchError()
      && !this.getPeriodError()
      && fetchStatus !== 'settingsUploading'
    );

    return (
      <PageLayout
        logoText="Настройки"
        logoURL="/"
        isPageLoaded={fetchStatus !== 'settingsLoading'}
      >
        <SettingsLayout>
          <SettingsLayout__Form>
            <SettingsForm
              id={id}
              repoName={repoName}
              repoNameError={this.getRepoNameError()}
              onRepoNameChange={this.onRepoNameChange}
              buildCommand={buildCommand}
              buildCommandError={this.getBuildCommandError()}
              onBuildCommandChange={this.onBuildCommandChange}
              mainBranch={mainBranch}
              mainBranchError={this.getMainBranchError()}
              onMainBranchChange={this.onMainBranchChange}
              period={period}
              onPeriodChange={this.onPeriodChange}
              periodError={this.getPeriodError()}
              onSubmit={this.onSubmit}
              canSubmit={canSubmit}
              formError={formError}
              formSuccess={formSuccess}
            />
          </SettingsLayout__Form>
        </SettingsLayout>
      </PageLayout>
    );
  }
}

export default Settings;

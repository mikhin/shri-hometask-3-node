import Form, {
  Form__Action, Form__Actions, Form__Field, Form__Error,
} from '../form';
import TextInput from '../text-input';
import Button from '../button';

const propTypes = {
  id: PropTypes.string,
  repoName: PropTypes.string,
  repoNameError: PropTypes.string,
  onRepoNameChange: PropTypes.func,
  buildCommand: PropTypes.string,
  buildCommandError: PropTypes.string,
  onBuildCommandChange: PropTypes.func,
  mainBranch: PropTypes.string,
  mainBranchError: PropTypes.string,
  onMainBranchChange: PropTypes.func,
  period: PropTypes.string,
  periodError: PropTypes.string,
  onPeriodChange: PropTypes.func,
  onSubmit: PropTypes.func,
  canSubmit: PropTypes.bool,
  formError: PropTypes.string,
};

const SettingsForm = (props) => {
  const {
    repoName,
    repoNameError,
    onRepoNameChange,
    buildCommand,
    buildCommandError,
    onBuildCommandChange,
    mainBranch,
    mainBranchError,
    onMainBranchChange,
    period,
    periodError,
    onPeriodChange,
    onSubmit,
    canSubmit,
    formError,
  } = props;

  return (
    <div
      className={b('settings-form')}
    >
      <Form
        description="Configure repository connection and synchronization settings."
        title="Settings"
        onSubmit={onSubmit}
      >
        <Form__Field>
          <TextInput
            mods={{
              required: true,
            }}
            label="GitHub repository"
            id="username"
            placeholder="user-name/repo-name"
            clearButton={repoName.length > 0}
            value={repoName}
            onChange={onRepoNameChange}
            error={repoNameError}
          />
        </Form__Field>
        <Form__Field>
          <TextInput
            label="Build command"
            id="command"
            placeholder="npm ci && npm run build"
            clearButton={buildCommand.length > 0}
            value={buildCommand}
            onChange={onBuildCommandChange}
            error={buildCommandError}
          />
        </Form__Field>
        <Form__Field>
          <TextInput
            label="Main branch"
            id="branch"
            placeholder="master"
            clearButton={mainBranch.length > 0}
            value={mainBranch}
            onChange={onMainBranchChange}
            error={mainBranchError}
          />
        </Form__Field>
        <Form__Field
          mods={{
            type: 'time',
          }}
        >
          <TextInput
            mods={{
              type: 'time',
            }}
            note="minutes"
            label="Synchronize every"
            id="interval"
            placeholder="10"
            value={period}
            onChange={onPeriodChange}
            type="number"
            error={periodError}
          />
        </Form__Field>
        <Form__Actions>
          <Form__Action>
            <Button
              mods={{
                theme: 'primary',
              }}
              type="submit"
              disabled={!canSubmit}
            >
              Save
            </Button>
          </Form__Action>
          <Form__Action>
            <Button
              mods={{
                theme: 'secondary',
              }}
              type="button"
              to="/"
            >
              Cancel
            </Button>
          </Form__Action>
        </Form__Actions>
        {formError && (<Form__Error>
          {formError}
        </Form__Error>)}
      </Form>
    </div>);
};

SettingsForm.propTypes = propTypes;

export default SettingsForm;

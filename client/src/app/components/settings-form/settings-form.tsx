import * as React from "react";
import Form, {
  Form__Action, Form__Actions, Form__Field, Form__Error, Form__Success,
} from '../form';
import TextInput from '../text-input';
import Button from '../button';

interface propTypes {
  id: string,
  repoName: string,
  repoNameError: string,
  onRepoNameChange: onChangeFunction,
  buildCommand: string,
  buildCommandError: string,
  onBuildCommandChange: onChangeFunction,
  mainBranch: string,
  mainBranchError: string,
  onMainBranchChange: onChangeFunction,
  period: string,
  periodError: string,
  onPeriodChange: onChangeFunction,
  onSubmit: onSubmitFunction,
  canSubmit: boolean,
  formError: string,
  formSuccess: string,
}

const SettingsForm: React.FC<propTypes> = (props) => {
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
    formSuccess,
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
            placeholder="npm ci && npm run commit"
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
              to="/"
            >
              Cancel
            </Button>
          </Form__Action>
        </Form__Actions>
        {formError && (<Form__Error>
          {formError}
        </Form__Error>)}
        {formSuccess && (<Form__Success>
          {formSuccess}
        </Form__Success>)}
      </Form>
    </div>);
};

export default SettingsForm;

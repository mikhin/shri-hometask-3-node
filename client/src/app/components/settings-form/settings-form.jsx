import Form, { Form__Action, Form__Actions, Form__Field } from '../form';
import TextInput from '../text-input';
import Button from '../button';

const SettingsForm = () => (
    <div
      className={b('settings-form')}
    >
      <Form
        description="Configure repository connection and synchronization settings."
        title="Settings"
      >
        <Form__Field>
          <TextInput
            mods={{
              required: true,
            }}
            label="GitHub repository"
            id="username"
            placeholder="user-name/repo-name"
          />
        </Form__Field>
        <Form__Field>
          <TextInput
            label="Build command"
            id="command"
            placeholder="npm ci && npm run build"
            clearButton={true}
          />
        </Form__Field>
        <Form__Field>
          <TextInput
            label="Main branch"
            id="branch"
            placeholder="master"
            clearButton={true}
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
          />
        </Form__Field>
        <Form__Actions>
          <Form__Action>
            <Button
              mods={{
                theme: 'primary',
              }}
              to="/"
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
      </Form>
    </div>
);

export default SettingsForm;

import Form, {
  Form__Action, Form__Actions, Form__Error, Form__Field,
} from '../form';
import TextInput from '../text-input';
import Button from '../button';

const propTypes = {
  hash: PropTypes.string,
  onHashChange: PropTypes.func,
  hashError: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  formError: PropTypes.string,
  canSubmit: PropTypes.bool,
};

class NewBuildForm extends React.Component {
  render() {
    const {
      hash,
      onHashChange,
      hashError,
      onSubmit,
      onCancel,
      formError,
      canSubmit,
    } = this.props;

    return (
      <div
        className={b('new-build-form')}
      >
        <Form
          description="Enter the commit hash wich you want to build."
          title="New build"
        >
          <Form__Field>
            <TextInput
              mods={{
                required: true,
              }}
              id="hash"
              placeholder="Commit hash"
              clearButton={hash.length > 0}
              value={hash}
              onChange={onHashChange}
              error={hashError}
            />
          </Form__Field>
          <Form__Actions>
            <Form__Action>
              <Button
                mods={{
                  theme: 'primary',
                }}
                type="submit"
                onClick={onSubmit}
                disabled={!canSubmit}
              >
                Run build
              </Button>
            </Form__Action>
            <Form__Action>
              <Button
                mods={{
                  theme: 'secondary',
                }}
                type="button"
                onClick={onCancel}
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
  }
}

NewBuildForm.propTypes = propTypes;

export default NewBuildForm;

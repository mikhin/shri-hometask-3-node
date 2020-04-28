import * as React from "react";
import Form, {Form__Action, Form__Actions, Form__Error, Form__Field,} from '../form';
import TextInput from '../text-input';
import Button from '../button';

interface propTypes {
  hash: string,
  onHashChange: onChangeFunction,
  hashError: string,
  onSubmit: onSubmitFunction,
  onCancel: CallbackFunction,
  formError: string,
  canSubmit: boolean,
}

const NewBuildForm: React.FC<propTypes> = (props) => {
  const {
    hash,
    onHashChange,
    hashError,
    onSubmit,
    onCancel,
    formError,
    canSubmit,
  } = props;

  return (
      <div
          className={b('new-commit-form')}
      >
        <Form
            description="Enter the commit hash wich you want to commit."
            title="New commit"
            onSubmit={onSubmit}
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
                  disabled={!canSubmit}
                  type="submit"
              >
                Run commit
              </Button>
            </Form__Action>
            <Form__Action>
              <Button
                  mods={{
                    theme: 'secondary',
                  }}
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
      </div>
  );
}

export default NewBuildForm;

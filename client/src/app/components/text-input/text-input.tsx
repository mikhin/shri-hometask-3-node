import * as React from "react";

import FieldLabel from '../field-label';

interface propTypes {
  children?: React.ReactNode,
  mods?: {
    required?: boolean,
    type?: string,
  },
  label?: string,
  note?: string,
  id?: string,
  clearButton?: boolean,
  placeholder?: string,
  value?: string | number,
  onChange?: (props: string) => void,
  type?: string,
  error?: string,
}

class TextInput extends React.Component<propTypes, null> {
  onChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    this.props.onChange(event.target.value);
  };

  onClearButtonClick = () => {
    this.props.onChange('');
  };

  render() {
    const {
      mods= {},
      label,
      note,
      id,
      clearButton,
      placeholder,
      value,
      type= 'input',
      error,
    } = this.props;

    return (
      <div
        className={b('text-input', this.props)}
      >
        {label && (
          <FieldLabel
            mods={{
              required: mods.required,
            }}
            id={id}
          >
            {label}
          </FieldLabel>
        )}
        <div className={b('text-input__content')}>
          <input
            className={b('text-input__input')}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={this.onChange}
            type={type === 'number' ? 'tel' : type}
          />

          {clearButton && (
            <button
              type="button"
              className={b('text-input__clear-button')}
              onClick={this.onClearButtonClick}
            >
              Очистить поле
            </button>
          )}

          {note && (
            <span
              className={b('text-input__note')}
            >
            {note}
          </span>
          )}
        </div>

        {error && (
          <span className={b('text-input__error')}>
              {error}
            </span>
        )}
      </div>
    );
  }
}

export default TextInput;

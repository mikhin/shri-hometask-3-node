import FieldLabel from '../field-label';

const propTypes = {
  mods: PropTypes.shape({}),
  label: PropTypes.string,
  note: PropTypes.string,
  id: PropTypes.string,
  clearButton: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  type: PropTypes.string,
  error: PropTypes.string,
};

const defaultProps = {
  mods: {},
  type: 'input',
};

class TextInput extends React.Component {
  onChange = (event) => {
    this.props.onChange(event.target.value);
  };

  onClearButtonClick = () => {
    this.props.onChange('');
  };

  render() {
    const {
      mods,
      label,
      note,
      id,
      clearButton,
      placeholder,
      value,
      type,
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

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;

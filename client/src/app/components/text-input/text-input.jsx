import FieldLabel from '../field-label';

const propTypes = {
  mods: PropTypes.shape({}),
  label: PropTypes.string,
  note: PropTypes.string,
  id: PropTypes.string,
  clearButton: PropTypes.bool,
  placeholder: PropTypes.string,
};

const defaultProps = {
  mods: {},
};

const TextInput = (props) => {
  const {
    mods, label, note, id, clearButton, placeholder,
  } = props;

  return (
    <div
      className={b('text-input', props)}
    >
      <FieldLabel
        mods={{
          required: mods.required,
        }}
        id={id}
      >
        {label}
      </FieldLabel>
      <div className={b('text-input__content')}>
        <input className={b('text-input__input')} id={id} placeholder={placeholder}/>

        {clearButton && (
          <button
            type="button"
            className={b('text-input__clear-button')}
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
    </div>
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;

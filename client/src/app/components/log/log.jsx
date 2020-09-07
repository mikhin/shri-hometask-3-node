const propTypes = {
  text: PropTypes.string,
};

const Log = (props) => (
    <div
      className={b('log', props)}
    >
      <pre className={b('log__content')}>{props.text}</pre>
    </div>
);

Log.propTypes = propTypes;

export default Log;

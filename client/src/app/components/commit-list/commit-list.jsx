import PageTrim from '../page-trim';
import Button from '../button';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

const CommitList = (props) => {
  const {
    children,
  } = props;

  return (
    <div
      className={b('commit-list', props)}
    >
      <PageTrim>
        <ul className={b('commit-list__content')}>
          {children}
        </ul>
        <div className={b('commit-list__action')}>
          <Button
            mods={{
              theme: 'additional',
            }}
            to="/"
          >
            Show more
          </Button>
        </div>
      </PageTrim>
    </div>
  );
};

CommitList.propTypes = propTypes;
CommitList.defaultProps = defaultProps;

export default CommitList;

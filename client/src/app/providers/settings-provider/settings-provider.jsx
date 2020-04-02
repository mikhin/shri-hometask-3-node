export const SettingsContext = React.createContext({
  settings: {},
});

const propTypes = {
  children: PropTypes.node.isRequired,
};

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: {},
    };
  }

  componentDidMount() {
    fetch('/api/settings')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            settings: result,
          });
        },
      );
  }

  updateSettings = (settings) => {
    this.setState({
      settings,
    });
  };

  render() {
    return (
      <SettingsContext.Provider value={{
        settings: this.state.settings,
        updateSettings: this.updateSettings,
      }}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

SettingsProvider.propTypes = propTypes;

export default SettingsProvider;

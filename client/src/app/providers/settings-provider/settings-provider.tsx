import * as React from "react";

export const SettingsContext = React.createContext({
  settings: {},
  updateSettings: undefined,
});

interface propTypes {
  children?: React.ReactNode,
}

interface stateTypes {
  settings?: SettingsType,
}

class SettingsProvider extends React.Component<propTypes, stateTypes> {
  constructor(props: object) {
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
      )
      .catch(() => {});
  }

  updateSettings = (settings: SettingsType) => {
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

export default SettingsProvider;

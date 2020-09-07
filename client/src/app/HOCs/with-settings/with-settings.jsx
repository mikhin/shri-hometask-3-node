import { SettingsContext } from '../../providers/settings-provider';

export default function withSettings(Component) {
  return function WithSettings(props) {
    return (
      <SettingsContext.Consumer>
        {(value) => (
          <Component {...props} {...value} />
        )}
      </SettingsContext.Consumer>
    );
  };
}

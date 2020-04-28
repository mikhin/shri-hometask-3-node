import * as React from 'react';
import { SettingsContext } from '../../providers/settings-provider';

export default function withSettings(Component: React.ElementType) {
  return function WithSettings(props: SettingsType) {
    return (
      <SettingsContext.Consumer>
        {(value) => (
          <Component {...props} {...value} />
        )}
      </SettingsContext.Consumer>
    );
  };
}

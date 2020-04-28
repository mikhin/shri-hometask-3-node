import { ReactComponent as RunBuildIcon } from '../assets/icons/run-build.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';

export default [
  {
    text: 'Run build',
    url: '/build-details',
    icon: RunBuildIcon,
  },
  {
    hiddenText: 'Settings',
    url: '/settings',
    icon: SettingsIcon,
    mods: {
      onlyIcon: true,
    },
  },
];

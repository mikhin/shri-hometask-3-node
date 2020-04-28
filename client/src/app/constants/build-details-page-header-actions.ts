import { ReactComponent as RebuildIcon } from '../assets/icons/rebuild-build.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';

export default [
  {
    text: 'Rebuild',
    url: '/build-history',
    icon: RebuildIcon,
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

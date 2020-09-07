import Button from '../button';

const WelcomeAction = () => (
    <div className={b('welcome-action')}>
      <p className={b('welcome-action__description')}>
        Configure repository connection and synchronization settings
      </p>
      <div className={b('welcome-action__action')}>
        <Button
          to="/settings"
          mods={{
            theme: 'primary',
          }}
        >
          Open settings
        </Button>
      </div>
    </div>
);

export default WelcomeAction;

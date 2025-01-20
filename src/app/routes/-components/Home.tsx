import { AppLocale } from '@/app/context/locale/AppLocale.enum';
import { useAuth } from '@/app/hooks/useAuth/useAuth';
import { useLocale } from '@/app/hooks/useLocale/useLocale';
import { Translation } from '@/components/translation/Translation';

export const Home = () => {
  const { locale, setLocale } = useLocale();
  const { user, login, logout, isAuthenticated, isAuthenticating } = useAuth();

  return (
    <>
      <h2>Home</h2>
      <p>
        <Translation id="home.helloWorld" />
        <span style={{ margin: '0 1rem' }}>&#x2190;</span>
        <span>
          This text is translated using <strong>Translation</strong> component.
        </span>
        <span>Click </span>
        <button
          style={{ fontSize: 'inherit' }}
          onClick={() => setLocale(locale === AppLocale.jp ? AppLocale.en : AppLocale.jp)}
          type="button"
        >
          here
        </button>
        to change language.
      </p>
      <p>This is a starter project for React application. Click on navigation links above to learn more.</p>
      <hr />

      <hr />
      <div style={{ marginBottom: '2rem' }}>
        <p>User information &#129489;</p>
        <div style={{ marginBottom: '2rem', display: 'flex', gap: '16px' }}>
          <button
            disabled={isAuthenticating || isAuthenticated}
            type="button"
            onClick={() => login({ password: 'tsh-react-starter', username: 'tsh' })}
          >
            {isAuthenticating ? 'Logging in...' : 'Click to login'}
          </button>
          <button disabled={!isAuthenticated} onClick={logout} type="button">
            Click to logout
          </button>
        </div>
        {isAuthenticating && <p>Loading data about you...</p>}
        {isAuthenticated && (
          <code style={{ background: '#BADA55', padding: '1rem' }}>{JSON.stringify(user, null, 2)}</code>
        )}
      </div>
    </>
  );
};

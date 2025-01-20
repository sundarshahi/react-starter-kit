import { Link, Outlet } from '@tanstack/react-router';

export const Layout = () => {
  return (
    <div className="app">
      <header className="app-header">
        <p>
          Edit <code>src/app/routes/-layout/Layout.tsx</code> and save to reload.
        </p>
        <a className="app-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <nav className="app-navigation">
        <ul className="app-menu">
          <li className="app-menu-item">
            <Link className="app-menu-link" to={'/'}>
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};

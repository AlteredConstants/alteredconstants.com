import classnames from "classnames";
import React from "react";
import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "remix";
import globalStylesUrl from "~/styles/global.css";
import rootStylesUrl from "~/styles/root.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
  { rel: "stylesheet", href: rootStylesUrl },
];

export const meta: MetaFunction = () => ({ title: "Altered Constants" });

const navLinks = [
  { route: "/", text: "Home" },
  { route: "/about", text: "About" },
  { route: "/resume", text: "Résumé" },
  { route: "/contact", text: "Contact" },
];

export default function App() {
  const { pathname } = useLocation();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Enriqueta:400,700|Source+Sans+Pro:400italic,700italic,400"
        />
        <Links />
      </head>
      <body>
        <div id="page">
          <header>
            <h1>
              <NavLink href="/" isPrimary>
                Altered Constants
              </NavLink>
            </h1>
          </header>
          <nav>
            <header>
              <h1>Site Navigation</h1>
            </header>
            <ul>
              {navLinks.map(({ route, text }) => (
                <li key={route}>
                  <NavLink href={route} isCurrent={pathname === route}>
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isPrimary?: boolean;
  isCurrent?: boolean;
}
function NavLink({
  href,
  children,
  isPrimary = false,
  isCurrent = false,
}: NavLinkProps) {
  return (
    <Link
      to={href}
      className={classnames({
        "nav-link": true,
        "header-font": true,
        primary: isPrimary,
        current: isCurrent,
      })}
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer>
      <Link to="/license">
        <section id="page-info">
          <p id="copyright">
            All content <span id="copyleft-icon">&copy;</span> Zeff Svoboda
            unless otherwise noted.
          </p>
          <p id="license-message">But it's dangerous to go alone! Take this.</p>
          <img
            src="/static/img/sword.png"
            alt="Creative Commons Attribution-Sharealike Unported 3.0 License"
          />
        </section>
      </Link>
    </footer>
  );
}

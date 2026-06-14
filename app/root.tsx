import "~/styles/global.css";
import "~/styles/root.css";
import classnames from "classnames";
import type { ReactNode } from "react";
import {
	href,
	isRouteErrorResponse,
	Link,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLocation,
} from "react-router";
import { MainSection } from "~/components/MainSection";
import type { Route } from "./+types/root";
import swordIcon from "./sword.png";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css?family=Enriqueta:400,700|Source+Sans+Pro:400italic,700italic,400",
	},
];

const navLinks = [
	{ route: href("/"), text: "Home" },
	{ route: href("/about"), text: "About" },
	{ route: href("/resume"), text: "Résumé" },
	{ route: href("/contact"), text: "Contact" },
];

export default function App() {
	return <Outlet />;
}

export function Layout({ children }: { children: ReactNode }) {
	const { pathname } = useLocation();
	return (
		<html lang="en">
			<head>
				<title>Altered Constants</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<div id="page">
					<header>
						<h1>
							<NavLink href={href("/")} isPrimary>
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
					<main>{children}</main>
					<Footer />
				</div>
				<ScrollRestoration />
				<Scripts />
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
			<Link to={href("/license")}>
				<section id="page-info">
					<p id="copyright">
						All content <span id="copyleft-icon">&copy;</span> Zeff Svoboda
						unless otherwise noted.
					</p>
					<p id="license-message">But it's dangerous to go alone! Take this.</p>
					<img src={swordIcon} alt="sword" />
				</section>
			</Link>
		</footer>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404 ?
				"The requested page could not be found."
			:	error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<MainSection title={message}>
			<p>{details}</p>
			{stack && (
				<pre>
					<code>{stack}</code>
				</pre>
			)}
		</MainSection>
	);
}

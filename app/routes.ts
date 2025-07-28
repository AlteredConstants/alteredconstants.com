import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("./routes/index.tsx"),
	route("about", "./routes/about.tsx"),
	route("contact", "./routes/contact.tsx"),
	route("license", "./routes/license.tsx"),
	route("resume", "./routes/resume.tsx"),
] satisfies RouteConfig;

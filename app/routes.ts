import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("rps", "routes/firstGame.jsx"),
  route("rpsls", "routes/secondGame.jsx"),
] satisfies RouteConfig;

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Theme from "@themes/index";

import Loader from "@components/Loader";

import { routes, RouteType } from "@routes";

const renderRoute = (route: RouteType) => {
  const Component = route.element;

  if (Array.isArray(route.path)) {
    return route.path.map((p, _idx) => (
      <Route key={`${p}_${_idx}`} path={p} Component={Component} />
    ));
  }
  return <Route key={route.path} path={route.path} Component={Component} />;
};

const renderRoutes = (routes: RouteType[]) => {
  return routes.flatMap((route) => {
    if (route.children) {
      return route.children.map((childRoute) => renderRoute(childRoute));
    }
    return renderRoute(route);
  });
};

const RouteMapper: React.FC<{ routes: RouteType[] }> = ({ routes }) => (
  <Routes>{renderRoutes(routes)}</Routes>
);
const PublicRoutes: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <RouteMapper routes={routes} />
  </Suspense>
);

const Main = () => {
  return (
    <Router>
      <PublicRoutes />
    </Router>
  );
};

const App = () => {
  return (
    <Theme>
      <Main />
    </Theme>
  );
};

export default App;

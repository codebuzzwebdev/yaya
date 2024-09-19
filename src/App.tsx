import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "@pages/MainLayout";

import Loader from "@components/Loader";

import Theme from "@themes/index";
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
    <MainLayout>
      <RouteMapper routes={routes} />
    </MainLayout>
  </Suspense>
);

const Main = () => {
  return (
    <Router basename="/nannies-in-uae">
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

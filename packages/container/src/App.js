import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { createBrowserHistory } from "history";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";
import ErrorBoundary from "./components/ErrorBoundary";

const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const DashboardAppLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setSignedIn(false)}
          />
          <ErrorBoundary>
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth">
                  <AuthAppLazy onSignIn={() => setSignedIn(true)} />
                </Route>
                <Route path="/dashboard">
                  {!isSignedIn && <Redirect to="/auth/signup" />}
                  <DashboardAppLazy />
                </Route>
                <Route path="/">
                  <MarketingAppLazy />
                </Route>
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </div>
      </StylesProvider>
    </Router>
  );
};

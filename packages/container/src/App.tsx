import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import { createBrowserHistory } from "history";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
// const AuthApp = lazy(() => import("./components/AuthApp"));
// const DashboardApp = lazy(() => import("./components/DashboardApp"));

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
                  {/* <AuthApp onSignIn={() => setSignedIn(true)} /> */}
                </Route>
                <Route path="/dashboard">
                  {!isSignedIn && <Redirect to="/auth/signup" />}
                  {/* <DashboardApp /> */}
                </Route>
                <Route path="/">
                  <MarketingApp />
                </Route>
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </div>
      </StylesProvider>
    </Router>
  );
};

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import SuspenseDemo from "./SuspenseDemo";

function App() {
  return (
    <BrowserRouter>
      <Link to="/suspense">Custom Suspense</Link>
      <Switch>
        <Route path="/suspense" component={SuspenseDemo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

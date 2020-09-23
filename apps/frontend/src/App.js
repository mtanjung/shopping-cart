import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/Home.js';
import Error from './views/Error.js';
import { CartContextProvider } from "./context";

function App() {
  const cart = [];

  return (
    <Router>
      <div>
        <CartContextProvider cart={cart}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route component={Error} />
          </Switch>
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;

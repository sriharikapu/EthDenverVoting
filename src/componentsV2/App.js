import React from "react";
import Web3 from "web3";
import Promise from "bluebird";

import { BrowserRouter, Switch, withRouter } from "react-router-dom";
import { Route } from "react-router";

import CreateElection from "./CreateElection";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import Web3AuthWrapper from "./Web3AuthWrapper";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Web3AuthWrapper>
          <Route exact path="/" component={Homepage} />
          <Route path="/election/create" component={CreateElection} />
          <Route path="/login" component={LoginPage} />
        </Web3AuthWrapper>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
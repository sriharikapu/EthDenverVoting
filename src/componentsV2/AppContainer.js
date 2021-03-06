import React from "react";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";

import "./AppContainer.css";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: props.web3,
      accounts: props.accounts
    };
  }

  getChildContext() {
    return {
      web3: this.props.web3,
      accounts: this.props.accounts,
      elections: this.props.elections
    };
  }

  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title={
            <a href="/" className="logo" onClick={event => {
                event.preventDefault()
                this.props.history.push("/")
            }}
            >
              Absentee Voting
            </a>
          }
        >
          <div>
            <RaisedButton
              label="New Election"
              style={{ marginTop: 6 }}
              onClick={() => {
                this.props.history.push("/elections/create");
              }}
            />
          </div>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

AppContainer.childContextTypes = {
  web3: PropTypes.object,
  accounts: PropTypes.array,
  elections: PropTypes.object
};

export default withRouter(AppContainer);
